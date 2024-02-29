import { IContentConfig } from '../../../systerm/user/types/type'

export const contentDataConfig: IContentConfig = {
  tableData: [
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '90',
      slotName: 'name'
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
      minWidth: '110',
      slotName: 'handler'
    }
  ],
  title: '商品分类',
  isShowIndex: true,
  isShowSelection: true
}
