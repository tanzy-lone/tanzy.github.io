<template>
  <div class="tabs">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      @tab-click="tabClick"
      @tab-remove="tabRemove"
      closable
    >
      <el-tab-pane
        v-for="item in filterRoute"
        :key="item.path"
        :label="item.name"
        :name="item.url"
      >
        <template #label>
          <el-button
            size="default"
            :type="editableTabsValue === item.url ? 'primary' : ''"
          >
            {{ item.name }}
          </el-button>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
// import { mapToAllRoutes } from '@/utils/mapRouteToMenu'
import useMainStore from '@/store/main'
import useLoginStore from '@/store/login'
import { getFlatArr } from '@/utils/tools'
import type { TabsPaneContext, TabPaneName } from 'element-plus'

interface IFlatMenu {
  icon?: string
  id: number
  url: string
  uicon?: string
  type: number
  children: IFlatMenu[]
}

const route = useRoute()
const router = useRouter()
const mainStore = useMainStore()
const loginStore = useLoginStore()
const editableTabsValue = ref(route.fullPath)
const filterRoute = computed(() => mainStore.filterRoute)
// const initTabs = () => {
//   const allRoutes = mapToAllRoutes()
//   const filterRoute = allRoutes.filter((item) => {
//     return item.path === route.fullPath
//   })
//   mainStore.changeFilterRoute(filterRoute)
// }

const tabClick = (pane: TabsPaneContext) => {
  const fullPath: any = pane.props.name
  router.push(fullPath)
}

const tabRemove = (name: TabPaneName) => {
  const removeList = mainStore.filterRoute.filter((item: IFlatMenu) => {
    return item.url !== name
  })
  mainStore.filterRoute = removeList
}

watch(
  () => route.fullPath,
  () => {
    const flatMenuList = getFlatArr(loginStore.menuList)
    flatMenuList.forEach((item: any) => {
      // return item.url === route.fullPath
      if (item.url === route.fullPath) {
        mainStore.changeFilterRoute(item)
      }
    })
  }
)
</script>

<style lang="less" scoped>
.tabs {
  background-color: #ffffff;
  :deep(.el-tabs--card) {
    .el-tabs__header {
      border: none;
      .el-tabs__item {
        border-left: none;
        padding: 5px;
      }
      .el-tabs__nav {
        border: none;
      }
    }
  }
}
</style>
