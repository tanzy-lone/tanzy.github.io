import { IFormDataConfig } from '../../../systerm/user/types/type'

export const formDataConfig: IFormDataConfig = {
	formData: [
		{
			label: 'name',
			field: 'name',
			placeholder: '请填写商品名称',
			type: 'input'
		},
		{
			label: '原价格',
			field: 'oldPrice',
			placeholder: '请填写商品原价格',
			type: 'input'
		},
		{
			label: '现价格',
			field: 'newPrice',
			placeholder: '请填写商品现价格',
			type: 'input'
		},

		{
			label: '创建',
			field: 'createAt',
			type: 'picker',
			otherOptions: {
				type: 'daterange',
				startPlaceholder: '商品上架时间',
				endPlaceholder: '商品下架时间'
			}
		}
	],
	labelWidth: '90px',
	itemStyle: {
		padding: '12px 14px'
	},
	title: '搜索角色'
}
