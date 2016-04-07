<template>
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">山寨CNode</a>
			</div>
			<div class="navbar-collapse collapse">
				<ul class="nav navbar-nav">
					<li v-link="{path: '/topics/all', activeClass: 'active'}">
						<a>全部</a>
					</li>
					<li v-link="{path: '/topics/good', activeClass: 'active'}">
						<a>精华</a>
					</li>
					<li v-link="{path: '/topics/share', activeClass: 'active'}">
						<a>分享</a>
					</li>
					<li v-link="{path: '/topics/ask', activeClass: 'active'}">
						<a>问答</a>
					</li>
					<li v-link="{path: '/topics/job', activeClass: 'active'}">
						<a>招聘</a>
					</li>
				</ul>
			</div><!--/.nav-collapse -->
		</div>
    </nav>
    <div class="container">
    	<router-view></router-view>
    </div>
    <div class="ajax-loading">
    	<span>Loading...</span>
    </div>
</template>


<style>
	body {
		padding-top: 70px;
	}
	a {
		cursor: pointer;
	}
	.ajax-loading {
		position: fixed;
		top: 30%;
		background: white;
		left: 50%;
		z-index: 9999;
		animation: ajax 1.5s infinite;
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