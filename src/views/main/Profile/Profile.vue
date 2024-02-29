<template>
  <div class="profile">
    <el-row :gutter="20">
      <el-col :span="6" :xs="24">
        <user-card :userInfo="userInfo" />
        <Upload />
      </el-col>
      <el-col :span="18" :xs="24">
        <el-card>
          <el-tabs
            v-model="activeTags"
            class="activity-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="Activity" name="activity">
              <Activity />
            </el-tab-pane>
            <el-tab-pane label="Timeline" name="timeline">
              <TimeLine />
            </el-tab-pane>
            <el-tab-pane label="Account" name="account">
              <Account :userInfo="userInfo" @changeFormInfo="changeFormInfo" />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import userCard from './cpn/userCard.vue'
import Upload from '@/base-ui/upload/upload.vue'
import Activity from './cpn/activity.vue'
import TimeLine from './cpn/timeLine.vue'
import Account from './cpn/account.vue'
import { computed, ref } from 'vue'
import loginStore from '@/store/login'
import type { TabsPaneContext } from 'element-plus'

const useLogin = loginStore()
const userInfo = computed(() => {
  return useLogin.userInfo
})
const activeTags = ref('activity')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const changeFormInfo = (value: string) => {
  useLogin.userInfo.name = value
}
</script>

<style lang="less" scoped></style>
