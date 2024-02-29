<template>
  <div class="main">
    <el-container>
      <el-aside width="210px">
        <MainMenu :collapse="isCollapse" />
      </el-aside>

      <el-container>
        <el-header>
          <MainHeader @handle-collapse="clickCollapse" />
        </el-header>
        <MyTabs></MyTabs>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition>
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import MainMenu from '@/components/mainMenu/index.vue'
import MainHeader from '@/components/mainHeader/src/mainLeft.vue'
import MyTabs from '@/base-ui/tabs/tabs.vue'
import { ref } from 'vue'

const isCollapse = ref(false)
const clickCollapse = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style lang="less" scoped>
.main {
  height: 100vh;
  position: relative;
}
.el-container {
  height: 100%;
}
.el-aside {
  width: auto;
  height: 100%;
  padding-right: 0;
}
.el-header {
  display: flex;
  align-items: center;
  height: 49px;
  background-color: #fff;
}
.el-main {
  height: calc(100% - 48px);
  background-color: #f0f2f5;
}
</style>
