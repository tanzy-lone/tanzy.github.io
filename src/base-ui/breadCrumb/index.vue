<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadCrumbList" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { breadCrumbTypes } from '../breadCrumb/type/type'

const props = defineProps({
  breadCrumbList: {
    type: Array as PropType<breadCrumbTypes[]>,
    default: []
  }
})
</script>

<style lang="less" scoped></style>
