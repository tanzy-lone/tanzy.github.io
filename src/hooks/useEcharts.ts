import { onActivated, onDeactivated, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import chinaMapData from '@/base-ui/echarts/data/china.json'

echarts.registerMap('china', chinaMapData as any)

export default function useEcharts(domEl: HTMLElement, theme = 'light') {
	onActivated(() => {
		window.addEventListener('resize', echartsResize)
	})

	onDeactivated(() => {
		window.removeEventListener('resize', echartsResize)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('resize', echartsResize)
	})
	const echartsInstance = echarts.init(domEl, theme, {
		renderer: 'svg'
	})

	const setOptions = (options: EChartsOption) => {
		options && echartsInstance.setOption(options)
	}

	// 监听地图视图的变化
	// window.addEventListener('resize', () => {
	// 	echartsInstance.resize()
	// })

	const echartsResize = () => {
		echartsInstance && echartsInstance.resize()
	}

	return [setOptions]
}
