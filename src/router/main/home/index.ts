const home = () => import('@/views/main/home/home.vue')
export default {
	path: '/main/home/index',
	name: 'home',
	component: home,
	children: [],
	meta: {
		title: '首页'
	}
}
