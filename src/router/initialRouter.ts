import { mapMenuToRoutes } from '@/utils/mapRouteToMenu'
import router from '@/router'

export async function initialRouter(menuList: any[]) {
	const routes = mapMenuToRoutes(menuList)
	for (let route in routes) {
		router.addRoute('main', routes[route])
	}
	console.log('router', router.getRoutes())
}
