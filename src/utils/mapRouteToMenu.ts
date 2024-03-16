import { breadCrumbTypes } from '@/base-ui/breadCrumb/type/type'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
function mapMenuToRoutes(userMenu: any[]): RouteRecordRaw[] {
	const routes: RouteRecordRaw[] = []
	const allRoutes: RouteRecordRaw[] = []
	// const routeFiles = require.context('../router/main', true, /\.ts/)
	const routeFiles: any = import.meta.glob('../router/main/**/*.ts', {
		eager: true
	})
	for (let key in routeFiles) {
		allRoutes.push(routeFiles[key].default)
	}
	function _recurseGetRoute(menuList: any) {
		for (let menu of menuList) {
			if (menu.type === 2) {
				const route = allRoutes.find((item) => {
					return item.path === menu.url
				})
				if (route) {
					routes.push(route)
				}
				// if (!firstMenu) {
				//   firstMenu = menu
				// }
			} else {
				_recurseGetRoute(menu.children)
			}
		}
	}
	_recurseGetRoute(userMenu)
	return routes
}

function mapHeaderBreadCrumb(menuList: any[], currPath: string) {
	const breadCrumbList: breadCrumbTypes[] = []
	mapPathToMenu(menuList, currPath, breadCrumbList)
	return breadCrumbList
}

function mapPathToMenu(menuList: any[], currPath: string, breadCrumb?: breadCrumbTypes[]) {
	for (let menu of menuList) {
		if (menu.type === 1) {
			const findMenu: any = mapPathToMenu(menu.children ?? [], currPath)
			if (findMenu) {
				breadCrumb?.push({ name: menu.name })
				breadCrumb?.push({ name: findMenu.name })
				return findMenu
			}
		} else if (menu.type === 2 && menu.url === currPath) {
			return menu
		}
	}
}

export function menuMapLeafKeys(menuList: any[]) {
	const leftKeys: number[] = []

	const _recurseGetLeaf = (menuList: any[]) => {
		for (const menu of menuList) {
			if (menu.children) {
				_recurseGetLeaf(menu.children)
			} else {
				leftKeys.push(menu.id)
			}
		}
	}
	_recurseGetLeaf(menuList)

	return leftKeys
}

export function mapToAllRoutes() {
	const allRoutes: RouteRecordRaw[] = []
	// const routeFiles = require.context('../router/main', true, /\.ts/)
	const routeFiles: any = import.meta.glob('../router/main/**/*.ts', {
		eager: true
	})
	for (let key in routeFiles) {
		allRoutes.push(routeFiles[key].default)
	}
	return allRoutes
}

export { mapPathToMenu, mapMenuToRoutes, mapHeaderBreadCrumb, firstMenu }
