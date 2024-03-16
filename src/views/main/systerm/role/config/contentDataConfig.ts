import { IContentConfig } from '../../user/types/type'

export const contentDataConfig: IContentConfig = {
	tableData: [
		{
			prop: 'name',
			label: '角色名',
			minWidth: '100',
			slotName: 'name'
		},
		{
			prop: 'intro',
			label: '权限介绍',
			minWidth: '100',
			slotName: 'intro'
		},

		{
			prop: 'createAt',
			label: '创建时间',
			minWidth: '250',
			slotName: 'createAt'
		},
		{
			prop: 'updateAt',
			label: '更新时间',
			minWidth: '250',
			slotName: 'updateAt'
		},
		{
			label: '操作',
			minWidth: '120',
			slotName: 'handler'
		}
	],
	title: '角色列表'
}
