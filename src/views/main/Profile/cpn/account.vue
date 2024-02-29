<template>
  <el-form>
    <el-form-item label="Name">
      <el-input v-model="formInfo.name" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="formInfo.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">Update</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ref, watch, onMounted } from 'vue'
const props = defineProps({
  userInfo: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['changeFormInfo'])
const formInfo = ref({
  name: '',
  email: ''
})

onMounted(() => {
  for (const item in props.userInfo) {
    if (item === 'name') {
      formInfo.value = {
        [item]: props.userInfo[item],
        ['email']: '2272757910@qq.com'
      }
    }
  }
})

watch(
  () => formInfo.value,
  (newValue: any) => {
    emit('changeFormInfo', newValue.name)
  },
  { deep: true }
)

const submit = () => {
  ElMessage({
    message: 'User information has been updated successfully',
    type: 'success',
    duration: 5 * 1000
  })
}
</script>
