const watermark = () => import('@/views/main/directives/watermark/watermark.vue')
export default {
	path: '/main/directives/watermark',
	name: 'watermark',
	component: watermark,
	children: [],
	meta: {
		title: '水印'
	}
}
