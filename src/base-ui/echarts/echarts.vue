<template>
	<div class="echarts-wrapper">
		<div class="main" ref="echartRef" :style="{ width: width, height: height }" />
	</div>
</template>

<script lang="ts" setup>
import { onMounted, withDefaults, ref } from 'vue'
import { EChartsOption } from 'echarts'
import useEcharts from '@/hooks/useEcharts'

const props = withDefaults(
	defineProps<{
		options: EChartsOption
		width?: string
		height?: string
	}>(),
	{
		width: '100%',
		height: '350px'
	}
)

const echartRef = ref<HTMLElement>()

onMounted(() => {
	setTimeout(() => {
		// watchEffect(() => {
		const [setOptions] = useEcharts(echartRef.value!)
		setOptions(props.options)
		// })
	}, 800)
})
</script>

<style lang="less" scoped></style>
