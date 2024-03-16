const role = () => import('@/views/main/systerm/role/role.vue')
export default {
	path: '/main/system/role',
	name: 'role',
	component: role,
	children: [],
	meta: {
		title: '角色管理'
	}
}
