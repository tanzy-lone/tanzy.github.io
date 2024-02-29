<template>
  <div class="user-info">
    <el-dropdown placement="bottom-start" size="large">
      <div class="select-dropdown">
        <el-avatar :size="30" :src="useLogin.userInfo.avatar" />
        <span>{{ useLogin.userInfo.name }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleRemoveToken">
            <i-ep-switchButton />退出登录
          </el-dropdown-item>
          <el-dropdown-item @click="router.push('/main/profile')">
            <i-ep-infoFilled />用户信息
          </el-dropdown-item>
          <el-dropdown-item> <i-ep-management />系统管理 </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import loginStore from '@/store/login'
import router from '@/router'
import localCache from '@/utils/localCache'

const useLogin = loginStore()

const handleRemoveToken = () => {
  localCache.deleteCache('token', false)
  router.replace('/login')
}

// const absoluteImagePath = computed(() => {
// const baseUrl = new URL('/')
// })
// console.log(window.location.origin)
// console.log(absoluteImagePath.value)
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;
  .select-dropdown {
    display: flex;
    cursor: pointer;
    align-items: center;
    span {
      margin-left: 5px;
      color: #666;
    }
  }
}

:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}
</style>
