const user = () => import('@/views/main/systerm/user/user.vue')
export default {
	path: '/main/system/user',
	name: 'user',
	component: user,
	children: [],
	meta: {
		title: '用户管理'
	}
}
