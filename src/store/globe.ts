import { defineStore } from 'pinia'
import { getPageListData } from '@/service/globe/index'
import { DEFAULT_PRIMARY } from '@/config/index'

const useGlobeStore = defineStore('global', {
  state: () => ({
    entireRole: [] as any,
    entireDepartment: [] as any,
    entireMenu: [] as any,
    language: '',
    themeConfig: {
      isDark: false,
      primary: DEFAULT_PRIMARY
    }
  }),
  getters: {},
  actions: {
    async getInitialUserData() {
      const { data: departmentResult } = await getPageListData(
        '/department/list',
        {
          offset: 0,
          size: 10
        }
      )

      const { data: roleResult } = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })

      const { data: menuResult } = await getPageListData('/menu/list', {})
      this.entireDepartment = departmentResult.list
      this.entireRole = roleResult.list
      this.entireMenu = menuResult.list
    },
    setLanguageAction(payload: string) {
      this.language = payload
    },
    setThemeConfigAction(payload: any) {
      this.themeConfig = payload
    }
  },
  persist: {
    key: 'global',
    storage: sessionStorage,
    paths: ['language', 'themeConfig']
  }
})

export default useGlobeStore
