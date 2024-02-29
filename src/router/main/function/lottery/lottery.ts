const lottery = () => import('@/views/main/function/lottery/lottery.vue')
export default {
  path: '/main/function/lottery',
  name: 'lottery',
  component: lottery,
  children: [],
  meta: {
    title: '抽奖页'
  }
}
