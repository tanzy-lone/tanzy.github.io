import { IFormDataConfig } from '../types/type'

export const formDataConfig: IFormDataConfig = {
	formData: [
		{
			label: 'id',
			field: 'id',
			placeholder: '请填写id',
			type: 'input'
		},
		{
			label: '用户名',
			field: 'name',
			placeholder: '请填写姓名',
			type: 'input'
		},
		{
			label: '真实姓名',
			field: 'realname',
			placeholder: '请填写真实姓名',
			type: 'input'
		},
		{
			label: '电话号码',
			field: 'cellphone',
			placeholder: '请填写电话号码',
			type: 'input'
		},
		{
			label: '用户的状态',
			field: 'enable',
			placeholder: 'Please select your state!',
			type: 'select',
			options: [
				{
					value: '0',
					label: '启用'
				},
				{
					value: '1',
					label: '禁用'
				}
			]
		},
		{
			label: '创建',
			field: 'createAt',
			type: 'picker',
			otherOptions: {
				type: 'daterange',
				startPlaceholder: '开始时间',
				endPlaceholder: '结束时间'
			}
		}
	],
	labelWidth: '90px',
	itemStyle: {
		padding: '12px 14px'
	},
	title: '高级检索'
}
