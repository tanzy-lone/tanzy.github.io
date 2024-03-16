import { IContentConfig } from '@/views/main/systerm/user/types/type'

export const contentDataConfig: IContentConfig = {
	tableData: [
		{
			prop: 'name',
			label: '菜单名称',
			minWidth: '120',
			slotName: 'name'
		},
		{
			prop: 'type',
			label: '类型',
			minWidth: '50',
			slotName: 'type'
		},
		{
			prop: 'url',
			label: '菜单url',
			minWidth: '150',
			slotName: 'url'
		},
		{
			prop: 'icon',
			label: '菜单图标',
			minWidth: '80',
			slotName: 'icon'
		},
		{
			prop: 'permission',
			label: '按钮权限',
			minWidth: '80',
			slotName: 'permission'
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
	title: '菜单列表',
	childrenProps: {
		rowKey: 'id',
		lazy: true,
		treeProps: { children: 'children', hasChildren: 'hasChildren' }
	},
	isShowSelection: false,
	isShowIndex: false
}
