<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) of timeline"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const timeline = reactive([
  {
    timestamp: '2022/11/4',
    title: 'Update Github template',
    content: 'tanzy committed 2019/4/20 20:46'
  },
  {
    timestamp: '2021/5/21',
    title: 'Update Github template',
    content: 'tanzy committed 2019/4/21 20:46'
  },
  {
    timestamp: '2020/11/27',
    title: 'Build Template',
    content: 'tanzy committed 2019/4/22 20:46'
  },
  {
    timestamp: '2020/1/1',
    title: 'Release New Version',
    content: 'tanzy committed 2019/4/23 20:46'
  }
])
</script>
