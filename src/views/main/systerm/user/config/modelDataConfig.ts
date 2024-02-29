import { IModelDataConfig } from '../types/type'

export const modelDataConfig: IModelDataConfig = {
  formData: [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入姓名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      type: 'input',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      label: '用户密码',
      type: 'password',
      placeholder: '请输入密码',
      isHidden: true
    },
    {
      field: 'cellphone',
      label: '电话号码',
      type: 'input',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      label: '选择部门',
      type: 'select',
      placeholder: 'Please select your department',
      options: []
    },
    {
      field: 'roleId',
      label: '选择角色',
      type: 'select',
      placeholder: 'Please select your role',
      options: []
    }
  ],
  colLayout: {
    span: 24
  },
  title: '新建用户',
  itemStyle: {
    padding: '5px 0'
  }
}
