const throttle = () => import('@/views/main/directives/throttle/throttle.vue')
export default {
	path: '/main/directives/throttle',
	name: 'throttle',
	component: throttle,
	children: [],
	meta: {
		title: '节流'
	}
}
