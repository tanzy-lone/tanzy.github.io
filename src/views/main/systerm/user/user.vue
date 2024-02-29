<template>
  <div class="user">
    <PageHeader
      :form-data-config="formDataConfig"
      @updateFormData="updateFormData"
      ref="headerRef"
    >
      <template #header>
        <h1>高级检索</h1>
      </template>

      <template #footer>
        <div class="footer">
          <el-button :icon="Refresh" type="info" @click="handleReset"
            >重置</el-button
          >
          <el-button
            :icon="Search"
            type="primary"
            @click="handleSearch(formOptions)"
            >搜索</el-button
          >
        </div>
      </template>
    </PageHeader>

    <PageContent
      page-name="users"
      :content-data-config="contentDataConfig"
      ref="contentRef"
      @clickEdit="handleEdit"
    >
      <template #headerHandler>
        <div class="header-handler">
          <el-button type="primary" @click="handleCreate">新建用户</el-button>
          <el-button :icon="Refresh"></el-button>
        </div>
      </template>
    </PageContent>

    <PageModel
      ref="modelRef"
      pageName="users"
      :default-value="defaultValue"
      :model-config="handleModelDataConfig"
    ></PageModel>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import globeStore from '@/store/globe'

import PageHeader from '@/components/pageHeader/index.vue'
import PageContent from '@/components/PageContent/pageContent.vue'
import PageModel from '@/components/pageModel/pageModel.vue'
import { contentDataConfig } from './config/contentDataConfig'
import { Refresh, Search } from '@element-plus/icons-vue'
import { formDataConfig } from './config/formDataConfig'
import { modelDataConfig } from './config/modelDataConfig'
import usePageMethods from '@/hooks/usePageMethod'
import useModelMethods from '@/hooks/useModelMethods'
const formOptions = ref({})
const createCb = () => {
  const modelOptions = modelDataConfig.formData.find((item: any) => {
    return item.field === 'password'
  })
  modelOptions!.isHidden = false
  modelDataConfig.title = '创建用户'
}
const editCb = () => {
  const modelOptions = modelDataConfig.formData.find((item: any) => {
    return item.field === 'password'
  })
  modelOptions!.isHidden = true
  modelDataConfig.title = '编辑用户'
}
const { contentRef, headerRef, handleSearch, handleReset } = usePageMethods()
const { modelRef, defaultValue, handleCreate, handleEdit } = useModelMethods(
  createCb,
  editCb
)
const useGlobe = globeStore()
const updateFormData = (formOption: any) => {
  formOptions.value = formOption
}
const filterModelDataConfig = () => {
  const entireRole: any = useGlobe.entireRole
  const entireDepartment: any = useGlobe.entireDepartment

  const departmentOptions: any = modelDataConfig.formData.find((item: any) => {
    return item.field === 'departmentId'
  })

  const roleOptions: any = modelDataConfig.formData.find((item: any) => {
    return item.field === 'roleId'
  })

  roleOptions!.options = entireRole.map((item: any) => {
    return { value: item.id, label: item.name }
  })

  departmentOptions!.options = entireDepartment.map((item: any) => {
    return { value: item.id, label: item.name }
  })
  return modelDataConfig
}
const handleModelDataConfig = computed(() => {
  return filterModelDataConfig()
})
</script>

<style lang="less" scoped></style>
