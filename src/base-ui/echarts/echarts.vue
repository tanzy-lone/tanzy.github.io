<template>
  <div class="echarts-wrapper">
    <div
      class="main"
      ref="echartRef"
      :style="{ width: width, height: height }"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, withDefaults, ref, watchEffect } from 'vue'
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
  const [setOptions] = useEcharts(echartRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style lang="less" scoped></style>
