<template>
	<table class="table table-striped topics">
		<tbody>
			<tr v-for="topic in topics">
				<td><img :src="topic.author.avatar_url" alt=""></td>
				<td>{{ topic.reply_count }}/{{ topic.visit_count }}</td>
				<td><a v-link="{path: '/topic/' + topic.id}">{{ topic.title }}</a></td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import { wget } from '../libs/ajax'
import Utils from '../libs/utils'
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
			this.options.tab = to.params.tab

			document.addEventListener('scroll', this.scrollLoadData)
			this.getTopics()
			console.log(Utils.isObject({}))
		},
		deactivate() {
			document.removeEventListener('scroll', this.scrollLoadData)
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
				document.body.scrollTop = 0
			}
			this.loading = true

			wget('https://cnodejs.org/api/v1/topics', {query:this.options})
				.then(({data}) => {
					this.loading = false
					if(data && data.length) {
						for(let i = 0, l = data.length; i < l; i++) {
							this.topics.push(data[i])
						}
					}
				})
		},
		scrollLoadData() {
			let winHeight = document.documentElement.clientHeight,
					docHeight = document.documentElement.offsetHeight,
					scrollTop = document.body.scrollTop;

			if(docHeight - scrollTop - winHeight < 100) {
				if(this.loading) return
				this.getTopics()
			}
		}
	}
}
</script>
<style>
	.topics td {
		vertical-align: middle !important;
	}
	.topics td img {
		border-radius: 3px;	
		width: 30px;
		height: 30px;
	}
</style>