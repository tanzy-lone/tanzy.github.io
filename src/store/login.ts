import { defineStore } from 'pinia'
import { VerifyLogin } from '@/service/login'
import localCache from '@/utils/localCache'
import router from '@/router'
import useGlobalStore from './globe'
import { fetchUserInfos, fetchUserRole } from '../service/login'
import { ILoginStore } from './type'
import { initialRouter } from '@/router/initialRouter'
// import pinia from '@/store'
import { createPinia } from 'pinia'
import { reactive } from 'vue'

const pinia = createPinia()
const globalStore = useGlobalStore(pinia)
const loginStore = defineStore('loginStore', {
  state: (): ILoginStore => ({
    token: '',
    userInfo: {},
    menuList: []
  }),
  getters: {},
  actions: {
    async loginAction(payload: any) {
      // 实现用户登陆
      const res = await VerifyLogin(payload)
      this.token = res.data.token

      // localCache.setCache('token', this.token, false)
      // 获取完整的角色/部门
      globalStore.getInitialUserData()
      // 请求用户信息
      const res1 = await fetchUserInfos(res.data.id)
      // 查询当前用户能访问那些菜单
      const res2 = await fetchUserRole(res.data.id)
      this.userInfo = res1.data
      for (const item in res1.data) {
        res1.data['avatar'] =
          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      }
      const arr = [
        {
          id: 201,
          name: '常见功能',
          type: 1,
          url: '/main/function',
          uicon: 'icon-package',
          sort: 1,
          children: [
            {
              id: 101,
              name: '打印',
              type: 2,
              url: '/main/function/print',
              sort: 200
            },
            {
              id: 102,
              name: 'excel',
              type: 2,
              url: '/main/function/excel',
              sort: 201
            },
            {
              id: 103,
              name: '富文本编辑器',
              type: 2,
              url: '/main/function/multieditor',
              sort: 202
            },
            {
              id: 104,
              name: '数字跳动',
              type: 2,
              url: '/main/function/numberup',
              sort: 203
            },
            {
              id: 105,
              name: '拖动',
              type: 2,
              url: '/main/function/drag',
              sort: 204
            },
            {
              id: 106,
              name: '拼音',
              type: 2,
              url: '/main/function/pinyin',
              sort: 205
            },
            {
              id: 107,
              name: '加载',
              type: 2,
              url: '/main/function/loading',
              sort: 206
            },
            {
              id: 108,
              name: '抽奖页面',
              type: 2,
              url: '/main/function/lottery',
              sort: 207
            }
          ]
        },
        {
          id: 301,
          name: '外部链接',
          type: 1,
          url: '/main/link',
          uicon: 'icon-link',
          sort: 1,
          children: [
            {
              id: 302,
              name: 'iframe页面',
              type: 2,
              url: '/main/link/iframe',
              sort: 2
            },
            {
              id: 303,
              name: 'github',
              type: 2,
              url: 'https://github.com/tanzy-lone',
              sort: 2
            },
            {
              id: 304,
              name: 'gitee',
              type: 2,
              url: 'https://gitee.com/dashboard/projects',
              sort: 2
            }
          ]
        },
        {
          id: 401,
          name: '自定义指令',
          type: 1,
          url: '/main/directives',
          sort: 1,
          children: [
            {
              id: 402,
              name: '复制',
              type: 2,
              url: '/main/directives/copy'
            },
            {
              id: 403,
              name: '水印',
              type: 2,
              url: '/main/directives/watermark'
            },
            {
              id: 404,
              name: '防抖',
              type: 2,
              url: '/main/directives/debounce'
            },
            {
              id: 405,
              name: '节流',
              type: 2,
              url: '/main/directives/throttle'
            }
          ]
        }
      ]
      const iconUrl = reactive([
        'icon-manage',
        'icon-systerm',
        'icon-shoping',
        'icon-dingtalk',
        'icon-package',
        'icon-link',
        'icon-zhiling'
      ])
      res2.data.push(...arr)
      this.menuList = res2.data
      this.menuList.forEach((item: any, index: number) => {
        item['uicon'] = iconUrl[index]
      })
      await initialRouter(this.menuList)
      router.push('/')
    },
    // addRoutes() {
    //   const routes = mapMenuToRoutes(this.menuList)
    //   for (let route in routes) {
    //     router.addRoute('main', routes[route])
    //   }
    // },
    changeUserAvatar(payload: any) {
      this.userInfo['avatar'] = payload
    }
  },
  persist: {
    key: 'login',
    storage: sessionStorage,
    paths: ['token', 'userInfo', 'menuList']
  }
})

export async function getRefreshRoutesData() {
  const useLoginStore = loginStore()
  const login = localCache.getCache('login', false)

  if (login && login.token) {
    useLoginStore.token = login.token
    // 获取完整的角色/部门
    globalStore.getInitialUserData()
  }
  if (login && login.userInfo && Object.keys(login.userInfo).length !== 0) {
    useLoginStore.userInfo = login.userInfo
  }
  if (login && login.menuList) {
    useLoginStore.menuList = login.menuList
    await initialRouter(login.menuList)
  }
}
export default loginStore
