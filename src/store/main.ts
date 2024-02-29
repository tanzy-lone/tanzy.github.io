import { defineStore } from 'pinia'
import { IMainType } from './type'
import { getContentPageList, updateContent } from '@/service/main/system/index'
import { deleteContent, createContent } from '@/service/main/system/index'

export const useMainStore = defineStore('mainStore', {
  state: (): IMainType => ({
    isLock: '',
    usersList: [] as any,
    roleList: [] as any,
    menuList: [] as any,
    goodsList: [] as any,
    categoryList: [] as any,
    categoryCount: 0,
    usersCount: 0,
    roleCount: 0,
    menuCount: 0,
    goodsCount: 0,
    currPage: {
      role: {
        offset: 10,
        page: 1
      },
      users: {
        offset: 10,
        page: 1
      },
      menu: {
        offset: 10,
        page: 1
      },
      goods: {
        offset: 10,
        page: 1
      },
      category: {
        offset: 10,
        page: 1
      }
    },
    filterRoute: []
  }),
  getters: {},
  actions: {
    async getPageList(payload: any) {
      const { pageName, queryInfo } = payload
      const url = `/${pageName}/list`
      const res = await getContentPageList(url, queryInfo)
      switch (pageName) {
        case 'users':
          this.usersList = res.data.list
          this.usersCount = res.data.totalCount
          break
        case 'menu':
          this.menuList = res.data.list
          this.menuCount = res.data.totalCount
          break
        case 'role':
          this.roleList = res.data.list
          this.roleCount = res.data.totalCount
          break
        case 'goods':
          this.goodsList = res.data.list
          this.goodsCount = res.data.totalCount
          break
        case 'category':
          this.categoryList = res.data.list
          this.categoryCount = res.data.totalCount
          break
      }
      return res.data.list.length
    },
    async getEdit(payload: any) {
      const { pageName, id, editInfo } = payload
      const url = `/${pageName}/${id}`
      const res = await updateContent(url, editInfo)
      console.log(res)
      // 重新请求页面
      this.getPageList({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async handleDelete(payload: any) {
      const { id, pageName } = payload
      const url = `/${pageName}/${id}`
      await deleteContent(url)

      this.getPageList({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async handleCreate(payload: any) {
      const { pageName, queryInfo } = payload
      const url = `/${pageName}`
      console.log(queryInfo)
      const res = await createContent(url, queryInfo)
      console.log(res)

      this.getPageList({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    changeLockStatus(payload: string) {
      this.isLock = payload
    },
    changeFilterRoute(payload: any) {
      if (this.filterRoute.every((item: any) => item.url !== payload.url)) {
        console.log('payload', payload)
        this.filterRoute.push(payload)
      }
    }
  },
  persist: {
    //默认名称为当前store唯一标识 这里即home
    key: 'user',
    //默认localStorage 本地储存
    //这里建议临时储存sessionStorage 也可写成window.sessionStorage
    storage: sessionStorage,
    //默认当前store里的所有变量都持久化
    paths: ['isLock', 'filterRoute']
  }
})

export default useMainStore
