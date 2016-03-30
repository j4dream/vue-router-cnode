import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App'
import Topics from './components/Topics'
import Topic from './components/Topic'

Vue.use(VueRouter)

var router = new VueRouter()


router.map({
	'/topics/:tab': {
		component: Topics
	},
	'/topic/:id': {
		component: Topic
	}
})

router.redirect({
	'*': '/topics/all'
})

router.start(App, '#app')