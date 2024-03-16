const debounce = () => import('@/views/main/directives/debounce/debounce.vue')
export default {
	path: '/main/directives/debounce',
	name: 'debounce',
	component: debounce,
	children: [],
	meta: {
		title: '防抖'
	}
}
