<template>
  <div class="pinyin card">
    <el-form :model="formOptions">
      <el-form-item>
        <el-input v-model="formOptions.py" placeholder="请输入文字"></el-input>
      </el-form-item>
    </el-form>
    <p class="text">{{ textA }}</p>
    <p v-html="textC" class="text"></p>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, computed } from 'vue'
import { pinyin } from 'pinyin-pro'
import { html } from 'pinyin-pro'

const formOptions = reactive({
  py: '汉字的家你们是不是'
})
const { py } = toRefs(formOptions)
const textA = computed(() => {
  return pinyin(py.value)
})
const textC = computed(() => {
  return html(py.value)
})
</script>

<style lang="less" scoped>
.card {
  background-color: #fff;
  min-height: 200px;
  padding: 20px 10px;
  .text {
    letter-spacing: 5px;
  }
}
</style>
