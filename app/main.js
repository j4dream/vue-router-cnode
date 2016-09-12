import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App'
import Topics from './components/Topics'
import Topic from './components/Topic'
import Test from './components/Test'

Vue.use(VueRouter)

var router = new VueRouter()


router.map({
	'/topics/:tab': {
		component: Topics
	},
	'/topic/:id': {
		component: Topic
	},
	'/test': {
		component: Test
	}
})

router.redirect({
	'*': '/topics/all'
})

router.start(App, '#app')