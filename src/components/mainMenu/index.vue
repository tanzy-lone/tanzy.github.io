<template>
  <div class="mainMenu" :style="{ width: props.collapse ? '60px' : '210px' }">
    <div class="menu-header">
      <img class="img" src="@/assets/img/main/logo.svg" />
      <span class="title">后台管理系统</span>
    </div>

    <el-scrollbar height="calc(100%  - 48px)">
      <el-menu
        :default-active="activeId"
        class="el-menu-vertical-demo"
        background-color="#0c2135"
        text-color="#b7bdc3"
        active-text-color="#0a60bd"
        :collapse="props.collapse"
        :collapse-transition="false"
        unique-opened
      >
        <template v-for="item in loginStore.menuList" :key="item.id">
          <!-- 可展开的一级标题 -->
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.id + ''">
              <template #title>
                <i :class="['iconfont', item.uicon]"></i>
                <span>{{ item.name }}</span>
              </template>

              <!-- 二级标题 -->
              <template v-for="val in item.children" :key="val.id">
                <!-- 不可展开 -->
                <el-menu-item :index="val.id + ''" @click="handleToRoute(val)">
                  <template
                    v-if="val.name !== 'github' && val.name !== 'gitee'"
                  >
                    <i :class="['iconfont', val.uicon]"></i>
                    <span>{{ val.name }}</span>
                  </template>
                  <template v-else>
                    <span>{{ val.name }}</span>
                  </template>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <!-- 不可展开的一级菜单 -->
          <template v-else>
            <el-menu-item :index="item.id + ''">
              <i :class="item.uicon" v-if="item.uicon"></i>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mapPathToMenu } from '@/utils/mapRouteToMenu'
import router from '@/router'
import useLoginStore from '@/store/login'

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

const loginStore = useLoginStore()
const route = useRoute()

const currPath = computed(() => {
  return route.path
})
const menuActiveRoute = computed(() => {
  return mapPathToMenu(loginStore.menuList, currPath.value)
})
const activeId = ref(menuActiveRoute.value?.id + '')
watch(route, () => {
  activeId.value = menuActiveRoute.value?.id + ''
})

const handleToRoute = (val: any) => {
  if (val.name === 'github' || val.name === 'gitee') {
    return (window.location.href = val.url)
  }
  router.push(val.url)
}
</script>

<style lang="less" scoped>
.mainMenu {
  background-color: #001529;
  user-select: none;
  height: 100%;
  overflow: hidden;
  .menu-header {
    display: flex;
    flex-shrink: 0;
    height: 48px;
    padding: 12px 10px 8px 10px;
    display: flex;
    align-items: center;
    color: #fff;
    img {
      height: 100%;
      margin: 0 7px;
    }
    .title {
      flex: 1;
      margin-left: 15px;
      white-space: nowrap;
    }
  }
  .el-menu {
    .el-sub-menu {
      .iconfont {
        font-size: 18px;
        margin-right: 10px;
      }
    }
  }
}
:deep(.el-menu--collapse) {
  --el-menu-hover-text-color: #fff;
}
.el-menu-item.is-active {
  color: #fff;
  background-color: #0a60bd !important;
}
.el-menu-item:hover {
  color: #fff;
}
:deep(.el-menu--collapse) .el-sub-menu.is-active .el-sub-menu__title .iconfont {
  color: #0a60bd;
}
:deep(.el-menu--collapse) .el-sub-menu.is-active .el-sub-menu__title {
  box-sizing: border-box;
}
ul.el-menu.el-menu--vertical.el-menu--collapse.el-menu-vertical-demo {
  width: 100%;
}
</style>
