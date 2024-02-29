import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/localCache'
import { firstMenu } from '@/utils/mapRouteToMenu'
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
    component: () => import('@/views/main/index.vue'),
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
  history: createWebHashHistory(),
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
  if (to.path === '/main') {
    return firstMenu.url
  }
  NProgress.done()
})

export default router
