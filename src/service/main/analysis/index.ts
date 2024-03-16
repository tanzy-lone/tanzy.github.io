import ylRequest from '@/service'

enum DashboardAPI {
	categoryGoodsCount = '/goods/category/count',
	categoryGoodsSale = '/goods/category/sale',
	categoryGoodsFavor = '/goods/category/favor',
	addressGoodsSale = '/goods/address/sale'
}

export function fetchCategoryGoodsCount() {
	return ylRequest.get({
		url: DashboardAPI.categoryGoodsCount
	})
}

export function fetchCategoryGoodsSale() {
	return ylRequest.get({
		url: DashboardAPI.categoryGoodsSale
	})
}

export function fetchCategoryGoodsFavor() {
	return ylRequest.get({
		url: DashboardAPI.categoryGoodsFavor
	})
}

export function fetchAddressGoodsSale() {
	return ylRequest.get({
		url: DashboardAPI.addressGoodsSale
	})
}
