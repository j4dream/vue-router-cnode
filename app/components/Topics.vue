<template>
	<table class="table table-striped">
		<tbody>
			<tr v-for="topic in topics">
				<td>{{ topic.title }}</td>
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
			queryObj: {
				tab: this.$route.params.type
			}
		}
	},

	route: {
		data ({to}) {
			this.getTopics()
		}
	},

	methods: {
		getTopics() {
			$.get('https://cnodejs.org/api/v1/topics', { tab: this.$route.params.tab}, ({data}) => {
				console.log(this.queryObj)
				console.log(data)
				if(data && data.length) {
					this.topics = data
				}
			})
		}
	}
}

</script>