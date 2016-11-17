<template>
	<div>
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">山寨CNode</a>
				</div>
				<div class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<li>
							<router-link :to="{path: '/topics/all', activeClass: 'active'}">全部</router-link>
						</li>
						<li>
							<router-link :to="{path: '/topics/good', activeClass: 'active'}">精华</router-link>
						</li>
						<li>
							<router-link :to="{path: '/topics/share', activeClass: 'active'}">分享</router-link>
						</li>
						<li>
							<router-link :to="{path: '/topics/ask', activeClass: 'active'}">问答</router-link>
						</li>
						<li>
							<router-link :to="{path: '/topics/job', activeClass: 'active'}">招聘</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>
<style>
	body {
		padding-top: 70px;
	}
	a {
		cursor: pointer;
	}
	@keyframes ajax {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
</style>