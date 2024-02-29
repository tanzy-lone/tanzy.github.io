<template>
  <div class="app-wrapper">
    <el-config-provider :locale="i18nLocale">
      <RouterView />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useGlobalStore from '@/store/globe'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { getBrowserLang } from '@/utils/tools'
import { useTheme } from '@/hooks/useTheme'

useTheme()
const globalStore = useGlobalStore()

const i18nLocale = computed(() => {
  if (globalStore.language && globalStore.language === 'zh') return zhCn
  if (globalStore.language && globalStore.language === 'en') return en
  return getBrowserLang() === 'zh' ? zhCn : en
})
</script>

<style lang="less" scoped></style>
