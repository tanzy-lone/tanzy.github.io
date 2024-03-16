import { IModelDataConfig } from '../../../systerm/user/types/type'

export const modelDataConfig: IModelDataConfig = {
	formData: [
		{
			field: 'name',
			type: 'input',
			label: '商品名称',
			placeholder: '请输入商品名称'
		},
		{
			field: 'oldPrice',
			label: '原价格',
			placeholder: '请输入商品原价格',
			type: 'input'
		},
		{
			field: 'newPrice',
			label: '现价格',
			placeholder: '请输入商品现价格',
			type: 'input'
		},
		{
			field: 'imgUrl',
			label: '商品图片',
			placeholder: '请输入商品图片',
			type: 'input'
		},
		{
			field: 'saleCount',
			label: '销量',
			placeholder: '请输入商品销量',
			type: 'input'
		},
		{
			field: 'favorCount',
			label: '收藏',
			placeholder: '请输入商品收藏数量',
			type: 'input'
		},
		{
			field: 'address',
			label: '地址',
			placeholder: '请输入发货地址',
			type: 'input'
		}
	],
	colLayout: {
		span: 24
	},
	title: '新建商品',
	itemStyle: {
		padding: '5px 0'
	}
}
