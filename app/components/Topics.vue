<template>
	<table class="table table-striped">
		<tbody>
			<tr v-for="topic in topics">
				<td><a v-link="{path: '/topic/' + topic.id}">{{ topic.title }}</a></td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	
export default {
	data() {
		return {
			msg: 'sdfsdddd',
			topics: [],
			options: {
				tab: 'all',
				page: 0
			},
			loading: false,
			currentTab: 'all'
		}
	},

	route: {
		data({to}) {

			console.log(to)
			this.options.tab = to.params.tab

			let $win = $(window),
				$doc = $(document);

			$(window).on('scroll', () => {
				if($doc.height() - $win.scrollTop() - $win.height() < 100) {
					if(this.loading) return
					console.log('load data la')
					this.getTopics()
				}
			})
			this.getTopics()
		},
		deactivate() {
			$(window).off('scroll')
		}
	},

	methods: {
		getTopics() {
			if(this.currentTab == this.$route.params.tab) {
				this.options.page++
			} else {
				this.options.page = 1
				this.topics.length = 0
				this.currentTab = this.$route.params.tab
				$(window).scrollTop(0)
			}
			this.loading = true
			$.get('https://cnodejs.org/api/v1/topics', this.options, ({data}) => {
				this.loading = false
				if(data && data.length) {
					for(let i = 0, l = data.length; i < l; i++) {
						this.topics.push(data[i])
					}
				}
			})
		}
	}
}
</script>