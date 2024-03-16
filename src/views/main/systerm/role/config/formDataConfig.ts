import { IFormDataConfig } from '../../user/types/type'

export const formDataConfig: IFormDataConfig = {
	formData: [
		{
			label: 'name',
			field: 'name',
			placeholder: '请填写角色名称',
			type: 'input'
		},
		{
			label: '权限介绍',
			field: 'intro',
			placeholder: '请填写权限介绍',
			type: 'input'
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
	title: '搜索角色'
}
