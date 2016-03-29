import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App'
import Topics from './components/Topics'

Vue.use(VueRouter)

var router = new VueRouter()


router.map({
	'/topics/:tab': {
		component: Topics
	}
})

router.redirect({
	'*': '/topics/all'
})

router.start(App, '#app')