<template>
  <div class="upload-avatar">
    <div class="upload-header">上传头像</div>
    <div class="upload-deliver">
      <el-upload
        name="avatar"
        class="avatar-uploader"
        :auto-upload="false"
        list-type="picture-card"
        ref="uploadRef"
        action="http://127.0.0.1:8001/upload"
        :before-upload="beforeAvatarUpload"
        :on-success="handleUploadSuccess"
      >
        <el-icon><i-ep-Plus /></el-icon>
        <template #file="{ file }">
          <div>
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <el-icon><i-ep-zoom-in /></el-icon>
              </span>
              <span
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <el-icon><i-ep-Delete /></el-icon>
              </span>
            </span>
          </div>
        </template>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
    </div>
    <div class="upload-confirm">
      <el-button type="primary" @click="handleConfirmUpload"
        >确认上传</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

import { ref } from 'vue'
import type { UploadFile } from 'element-plus'
import { ElUpload } from 'element-plus'
import type { UploadProps } from 'element-plus'
import loginStore from '@/store/login'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const useLogin = loginStore()
const uploadRef = ref<InstanceType<typeof ElUpload>>()

const handleRemove = (file: UploadFile) => {
  uploadRef.value?.handleRemove(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}
const handleConfirmUpload = () => {
  uploadRef.value?.submit()
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  const isJPG = rawFile.type === 'image/jpeg'
  console.log(isJPG)
  const imageSize = rawFile.size / 1024 / 1024
  if (!isJPG) {
    ElMessage.error('上传的头像必须是jpeg格式')
    return false
  } else if (imageSize > 2) {
    ElMessage.error('上传的文件大小不能超过2MB')
    return false
  }
  return true
}

const handleUploadSuccess = (response: any, _: any) => {
  // 上传成功后的回调函数，在这里处理后端返回的图片路径
  if (response && response.avatarPath) {
    // 将后端返回的图片路径赋值给imageUrl，以便在页面上显示图片
    // this.imageUrl = response.avatarPath
    useLogin.changeUserAvatar(response.avatarPath)
  }
}
</script>

<style lang="less" scoped>
.upload-avatar {
  margin-top: 20px;

  border-radius: 4px;
  overflow: hidden;
  .upload-header {
    padding: 10px 0;
    font-size: 18px;
    font-weight: bold;
  }
  .upload-deliver {
    height: 300px;
    user-select: none;
    .avatar-uploader {
      height: 100%;
      :deep(.el-upload-list) {
        display: flex;
        height: 100%;
        flex-wrap: nowrap;
        overflow: hidden;
        .el-upload {
          width: 100%;
          height: 100%;
        }
        .el-upload-list__item {
          flex-shrink: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
      :deep(.el-upload-list__item-actions) {
        cursor: pointer;
      }
    }
  }
  .upload-confirm {
    margin-top: 12px;
    text-align: center;
  }
  :deep(.el-dialog__body) {
    display: flex;
    justify-content: center;
  }
}
</style>
