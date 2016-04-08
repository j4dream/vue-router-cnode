<template>
	<h2>{{topic.title}}</h2>
	<main>
		{{{topic.content}}}
	</main>
	<hr>
	<section>
		<ul>
			<li v-for="reply in topic.replies">
				<div class="reply">
					<div class="img-cover">
						<img :src="reply.author.avatar_url" alt="">	<label>{{reply.author.loginname}}:</label>
					</div>
					<div class="reply-content">
						<p>{{{reply.content}}}</p>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>

<style>
	ul, li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.reply {
		border: 1px solid #ddd;
		border-radius: 5px;
		margin-bottom: 10px;
	}
	.img-cover img{
		width: 30px;
		height: 30px;
	}
	.reply-content {
		padding-left: 60px;
		padding-right: 15px;
	}
</style>

<script>
	import { wget } from '../libs/ajax'
	export default {
		data() {
			return {
				topic: {}
			}
		},
		route: {
			data({to}) {
				wget(`https://cnodejs.org/api/v1/topic/${to.params.id}`)
					.then(({data}) => {
						this.topic = data
					})
			}
		}
	}
</script>