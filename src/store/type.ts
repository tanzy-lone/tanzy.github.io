export interface IReturnTableData {
	code: number
	list: any[]
}

export interface IMainType {
	usersList: IReturnTableData
	usersCount: number
	roleList: IReturnTableData
	roleCount: number
	menuList: IReturnTableData
	menuCount: number
	goodsList: IReturnTableData
	goodsCount: number
	categoryList: IReturnTableData
	categoryCount: number
	currPage: any
	isLock: string
	filterRoute: any
}

export interface IData {
	entireRole: IDataList
	entireDepartment: IDataList
	entireMenu: IDataList
}

export interface IDataList {
	list: IDataObject[]
	totalCount: number
}

export interface ILoginStore {
	token: string
	menuList: any[]
	userInfo: any
}

export interface IDataObject {
	id: number
	createAt: string
	updateAt: string
	name: string
	parentId: number
}
