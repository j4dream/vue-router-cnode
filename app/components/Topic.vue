<template>
	<h2>{{topic.title}}</h2>
	<main>
		{{{topic.content}}}
	</main>
</template>

<script>
	export default {
		data() {
			return {
				topic: {}
			}
		},
		route: {
			data({to}) {
				$.get(`https://cnodejs.org/api/v1/topic/${to.params.id}`, ({data}) => {
					this.topic = data
				})
			}
		}
	}
</script>