<template>
  <div class="pieEcharts">
    <ylEcharts :options="options" />
  </div>
</template>

<script lang="ts" setup>
import ylEcharts from '@/base-ui/echarts/echarts.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'

const props = defineProps({
  pieData: {
    type: Array<{ value: number; name: string }>,
    default: () => []
  }
})

const options = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
