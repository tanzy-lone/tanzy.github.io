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
			// 布局切换 ==>  纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns
			layout: 'vertical',
			// 默认 primary 主题颜色
			primary: DEFAULT_PRIMARY,
			// 黑夜模式
			isDark: false,
			// 折叠菜单
			isCollapse: false,
			// 面包屑导航
			breadcrumb: true,
			// 面包屑导航图标
			breadcrumbIcon: true,
			// 标签页
			tabs: true,
			// 标签页图标
			tabsIcon: true,
			// 页脚
			footer: true,
			// 当前页面是否全屏
			maximize: false
		}
	}),
	getters: {},
	actions: {
		async getInitialUserData() {
			const { data: departmentResult } = await getPageListData('/department/list', {
				offset: 0,
				size: 10
			})

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
