import { IModelDataConfig } from '../../user/types/type'

export const modelDataConfig: IModelDataConfig = {
	formData: [
		{
			field: 'name',
			label: '角色名',
			type: 'input',
			placeholder: '请输入角色名'
		},
		{
			field: 'intro',
			label: '角色介绍',
			type: 'input',
			placeholder: '请输入角色介绍'
		}
	],
	colLayout: {
		span: 24
	},
	title: '新建角色',
	itemStyle: {
		padding: '5px 0'
	}
}
