<template>
  <div class="pageModel">
    <el-dialog
      :title="modelConfig.title"
      v-model="isShowModel"
      center
      width="30%"
      destroy-on-close
    >
      <ylForm v-bind="modelConfig" v-model="formData"></ylForm>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isShowModel = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import ylForm from '@/base-ui/form/index.vue'
import mainStore from '@/store/main'

import { ref, watch } from 'vue'
const props = defineProps({
  defaultValue: {
    type: Object,
    default: () => {}
  },
  otherOptions: {
    type: Object,
    default: () => {}
  },
  modelConfig: {
    type: Object,
    default: () => {},
    required: true
  },
  pageName: {
    type: String,
    default: ''
  }
})
const isShowModel = ref(false)
const formData = ref({})
const useMain = mainStore()
watch(
  () => props.defaultValue,
  (newValue: any) => {
    for (const item of props.modelConfig.formData) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)

const handleConfirm = () => {
  isShowModel.value = false

  // 编辑框的确定
  if (Object.keys(props.defaultValue).length) {
    const id = props.defaultValue.id
    // console.log('defaultValue:', props.defaultValue)
    useMain.getEdit({
      id,
      pageName: props.pageName,
      editInfo: { ...formData.value, ...props.otherOptions }
    })
  }
  // 新建的确定
  else {
    useMain.handleCreate({
      pageName: props.pageName,
      queryInfo: formData.value
    })
  }
}
defineExpose({
  isShowModel
})
</script>

<style lang="less" scoped>
:deep(.el-dialog--center .el-dialog__body) {
  padding: 10px 25px;
}
// :deep(.el-dialog__body) {
//   padding: 0;
// }
</style>
