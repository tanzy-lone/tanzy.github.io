<template>
  <div class="user-card">
    <el-card>
      <template #header>
        <div class="user-header">About me</div>
      </template>

      <div class="user-profile">
        <div class="box-center">
          <moveRotation width="100px" height="100px" :image="userInfo.avatar">
            <div>Hello</div>
            <div>My Master</div>
          </moveRotation>
        </div>
        <div class="box-center">
          <p class="name">{{ userInfo.name }}</p>
          <p class="role">{{ userInfo.role.name }}</p>
        </div>
      </div>

      <div class="user-bio">
        <div class="user-section-header user-comment-body">
          <i class="iconfont icon-iceducation"><span>&nbsp;Education</span></i>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            JS in Computer Science from the University of Technology
          </div>
        </div>
        <div class="user-section-skills">
          <div class="user-skill-header user-comment-body">
            <i class="iconfont icon--skills"><span>Skills</span></i>
          </div>
          <div class="user-skill-cpn">
            <div class="progress-item">
              <span>Vue</span>
              <el-progress :percentage="50" />
            </div>
            <div class="progress-item">
              <span>TypeScript</span>
              <el-progress :percentage="20" />
            </div>
            <div class="progress-item">
              <span>EsLint</span>
              <el-progress :percentage="100" status="success" />
            </div>
            <div class="progress-item">
              <span>Less</span>
              <el-progress :percentage="30" />
            </div>
            <div class="progress-item">
              <span>husky</span>
              <el-progress :percentage="100" status="success" />
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import moveRotation from '../../../../base-ui/moveRotation/moveRotation.vue'
import { ref } from 'vue'

const props = defineProps({
  userInfo: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.user-card {
  .user-header {
    font-size: 20px;
  }
  .box-center {
    display: flex;
    flex-direction: column;
    align-items: center;

    letter-spacing: 1px;
    padding-top: 15px;
    line-height: 1.6;
    .name {
      font-size: 16px;
      font-weight: 700;
    }
  }
  .user-bio {
    .user-section-header {
      font-size: 12px;
      padding: 5px 0;
    }
    .user-bio-section-body {
      padding: 5px 0;
    }
    .user-comment-body {
      margin-top: 20px;
      border-bottom: 1px solid #ccc;
      padding: 5px 0;
      font-size: 12px;
    }
    .user-skill-cpn {
      padding: 14px 0;
    }
  }
  .upload-deliver {
    height: 200px;
    margin-top: 20px;
  }
}
</style>
