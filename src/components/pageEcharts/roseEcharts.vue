<template>
	<div class="rose-echarts">
		<ylEcharts :options="options"></ylEcharts>
	</div>
</template>

<script lang="ts" setup>
import ylEcharts from '@/base-ui/echarts/echarts.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'

const props = defineProps({
	roseData: {
		type: Array<{ value: number; name: string }>,
		default: () => []
	}
})

const options = computed<EChartsOption>(() => {
	return {
		toolbox: {
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false, title: '数据视图' },
				restore: { show: true, title: '还原' },
				saveAsImage: { show: true, title: '保存图片' }
			}
		},
		series: [
			{
				name: '类别数据',
				type: 'pie',
				radius: [10, 100],
				center: ['50%', '50%'],
				roseType: 'area',
				itemStyle: {
					borderRadius: 8
				},
				data: props.roseData
			}
		]
	}
})
</script>

<style lang="less" scoped></style>
