<template>
  <div class="goods">
    <pageHeader
      :form-data-config="formDataConfig"
      ref="headerRef"
      @updateFormData="updateFormData"
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
    </pageHeader>
    <pageContent
      page-name="goods"
      :content-data-config="contentDataConfig"
      @clickEdit="handleEdit"
      ref="contentRef"
    >
      <template #headerHandler>
        <div class="header-handler">
          <el-button type="primary" @click="handleCreate">新建商品</el-button>
          <el-button :icon="Refresh"></el-button>
        </div>
      </template>

      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          fit="cover"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
          lazy
          close-on-press-escape
        />
      </template>
    </pageContent>
    <pageModel
      ref="modelRef"
      page-name="goods"
      :model-config="modelDataConfig"
      :default-value="defaultValue"
    />
  </div>
</template>

<script lang="ts" setup>
import pageContent from '@/components/PageContent/pageContent.vue'
import { contentDataConfig } from './config/contentDataConfig'
import pageModel from '@/components/pageModel/pageModel.vue'
import pageHeader from '@/components/pageHeader/index.vue'
import useModelMethods from '@/hooks/useModelMethods'
import usePageMethods from '@/hooks/usePageMethod'
import { modelDataConfig } from './config/modelDataConfig'
import { formDataConfig } from './config/formDataConfig'

import { Refresh, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const { modelRef, defaultValue, handleCreate, handleEdit } = useModelMethods()
const { contentRef, headerRef, handleSearch, handleReset } = usePageMethods()

const formOptions = ref({})
const updateFormData = (formOption: any) => {
  formOptions.value = formOption
}
</script>

<style lang="less" scoped></style>
