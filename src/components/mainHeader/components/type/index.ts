export interface RestaurantItem {
	children?: RestaurantItem[]
	icon?: string
	id: number
	name: string
	sort: number
	type: number
	uicon?: string
	url: string
}
