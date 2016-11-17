import Topics from './components/Topics'
import Topic from './components/Topic'
import Test from './components/Test'

export default [
    {
        path: '/topics/:tab', 
	    component: Topics,
	},
    {
        path: '/topic/:id',
		component: Topic,
	}, {
        path: '/test',
        component: Test,
	}, {
        path: '*', redirect: '/topics/all',
    }
];