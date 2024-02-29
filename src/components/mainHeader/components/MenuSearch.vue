<template>
  <div class="menu-search">
    <img
      src="@/assets/svg/sosuo.svg"
      @click="handleOpen"
      style="width: 28px; height: 28px; cursor: pointer"
      class="toolBar-icon"
    />
    <el-dialog
      v-model="isShowSearch"
      fullscreen
      :modal="false"
      destroy-on-close
      width="300px"
      @click="closeSearch"
    >
      <el-autocomplete
        v-model="searchInput"
        ref="menuInputRef"
        placeholder="菜单搜索"
        clearable
        :fetch-suggestions="querySearch"
        @click.stop
      >
        <template #prefix>
          <i-ep-search />
        </template>
        <template #default="{ item }">
          <!-- <i :class="['iconfont', item.meta.icon]"></i> -->
          <span>{{ item.name }}</span>
        </template>
      </el-autocomplete>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue'
import { RestaurantItem } from './type'
import useLoginStore from '@/store/login'
import { getArrFatList } from '@/utils/tools'

const isShowSearch = ref(false)
const searchInput = ref('')
const loginStore = useLoginStore()
const menuInputRef = ref()
const searchMenu = ref<RestaurantItem[]>([])
// const menuList = computed(() => {
//   return (searchMenu.value = loginStore.menuList)
// })
const flatMenuList = computed(() => {
  return (searchMenu.value = getArrFatList(loginStore.menuList))
})
const handleOpen = () => {
  isShowSearch.value = true
  searchInput.value = ''
  nextTick(() => {
    setTimeout(() => {
      menuInputRef.value.focus()
    })
  })
}
const closeSearch = () => {
  isShowSearch.value = false
}
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? flatMenuList.value.filter(createFilter(queryString))
    : flatMenuList.value
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) > -1 ||
      restaurant.url.toLowerCase().indexOf(queryString.toLowerCase()) > -1
    )
  }
}
</script>

<style lang="less" scoped>
.menu-search {
  :deep(.el-dialog) {
    background: rgb(0 0 0 / 50%);
  }
  :deep(.el-autocomplete) {
    position: absolute;
    top: 100px;
    left: 50%;
    width: 550px;
    transform: translateX(-50%);
  }
}
</style>
