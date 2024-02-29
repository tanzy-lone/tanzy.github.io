<template>
  <div class="main-header">
    <div class="header-left">
      <div class="collapse-menu-logo" @click="handleClick">
        <i-ep-Operation v-if="isCollapse" />
        <i-ep-Expand v-else />
      </div>
      <div class="bread-crumb">
        <breadCrumb :bread-crumb-list="breadCrumbList" />
      </div>
    </div>
    <div class="user-info">
      <LockScreen />
      <FullScreen />
      <SelecteLanuguage />
      <MenuSearch />
      <ColorPicker />
      <userInfo />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import breadCrumb from '@/base-ui/breadCrumb/index.vue'
import { mapHeaderBreadCrumb } from '@/utils/mapRouteToMenu'
import { computed } from 'vue'
import loginStore from '@/store/login'
import { useRoute } from 'vue-router'

import userInfo from './userInfo.vue'
import LockScreen from '../components/LockScreen.vue'
import FullScreen from '../components/FullScreen.vue'
import SelecteLanuguage from '../components/SelecteLanuguage.vue'
import MenuSearch from '../components/MenuSearch.vue'
import ColorPicker from '../components/ColorPicker.vue'

const isCollapse = ref(false)
const route = useRoute()
const emit = defineEmits(['handleCollapse'])
const handleClick = () => {
  isCollapse.value = !isCollapse.value
  emit('handleCollapse', isCollapse.value)
}

const breadCrumbList = computed(() => {
  const login = loginStore()
  const menuList = login.menuList
  return mapHeaderBreadCrumb(menuList, route.path)
})
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 49px;
  .header-left {
    display: flex;
    align-items: center;
    .collapse-menu-logo {
      position: relative;
      top: 5px;
      margin-right: 5px;
      font-size: 30px;
      cursor: pointer;
    }
    .bread-crumb {
      margin: 0 8px;
      font-size: 18px;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
  }
}
</style>
