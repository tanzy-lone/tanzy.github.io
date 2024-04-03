import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/localCache'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import useLoginStore from '@/store/login'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/main'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue')
	},
	{
		path: '/main',
		name: 'main',
		redirect: '/main/home/index',
		component: () => import('@/layout/index.vue'),
		children: [
			{
				path: '/main/profile',
				component: () => import('@/views/main/Profile/Profile.vue')
			}
		]
	},
	{
		path: '/:pathMatch(.*)',
		name: 'notfond',
		component: () => import('@/views/notfond/index.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(async (to, _from) => {
	// debugger

	document.title = (to.meta.title as string) ?? '后台管理系统'
	NProgress.start()
	const loginStore = useLoginStore()
	const token = loginStore.token ?? localCache.getCache('login', false).token
	if (to.path !== '/login') {
		if (!token) {
			return 'login'
		}
	}
	// if (to.path === '/main') {
	// 	console.log('firstMenu', firstMenu.url)
	// 	return firstMenu.url
	// }
	NProgress.done()
})

export default router
