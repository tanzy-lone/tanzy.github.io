<template>
  <div class="line-echarts">
    <ylEcharts :options="options" />
  </div>
</template>

<script lang="ts" setup>
import ylEcharts from '@/base-ui/echarts/echarts.vue'
import { withDefaults } from 'vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    values: string[]
  }>(),
  {
    title: ''
  }
)

const options = computed<EChartsOption>(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {},
    toolbox: {
      feature: {
        saveAsImage: {
          show: true,
          title: '保存图片'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '分别销量',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
