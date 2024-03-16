const pinyin = () => import('@/views/main/function/pinyin/pinyin.vue')
export default {
	path: '/main/function/pinyin',
	name: 'pinyin',
	component: pinyin,
	children: [],
	meta: {
		title: '汉字拼音'
	}
}
