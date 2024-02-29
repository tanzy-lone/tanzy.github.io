<template>
  <div class="lottery-container">
    <el-row class="marginBottom" :gutter="16">
      <el-col :xs="24" :md="24" :sm="24" :lg="12" :xl="12">
        <el-card title="大转盘抽奖" :hoverable="true" :bordered="false">
          <circular />
        </el-card>
      </el-col>
      <el-col :xs="24" :md="24" :sm="24" :lg="12" :xl="12">
        <el-card title="九宫格抽奖" :hoverable="true" :bordered="false">
          <nineLucky />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import circular from './components/circular.vue'
import nineLucky from './components/nineLucky.vue'
</script>
<style lang="less" scoped>
.lottery-container {
  width: 100%;
  .marginBottom {
    margin-bottom: 25px;
  }
}
</style>
