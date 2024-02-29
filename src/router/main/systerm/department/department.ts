const department = () =>
  import('@/views/main/systerm/department/department.vue')
export default {
  path: '/main/system/department',
  name: 'department',
  component: department,
  children: [],
  meta: {
    title: '部门管理'
  }
}
