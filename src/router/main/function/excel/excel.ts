const excel = () => import('@/views/main/function/excel/excel.vue')
export default {
  path: '/main/function/excel',
  name: 'excel',
  component: excel,
  children: [],
  meta: {
    title: 'excel导入导出'
  }
}
