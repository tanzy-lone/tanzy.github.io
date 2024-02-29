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
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '70',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价格',
      minWidth: '70',
      slotName: 'newPrice'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100',
      slotName: 'imgUrl'
    },
    // {
    //   prop: 'status',
    //   label: '状态',
    //   minWidth: '80',
    //   slotName: 'status'
    // },
    { prop: 'saleCount', label: '销量', minWidth: '60' },
    { prop: 'favorCount', label: '收藏', minWidth: '60' },
    { prop: 'address', label: '地址', minWidth: '60' },
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
  title: '商品列表'
}
