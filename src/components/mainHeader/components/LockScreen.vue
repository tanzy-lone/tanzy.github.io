<template>
	<div class="lockScreen">
		<img src="@/assets/svg/suotou.svg" @click="handleLockScreen" class="lock_screen" alt="锁屏" />
	</div>
</template>

<script lang="ts" setup>
import { ElMessageBox, ElMessage } from 'element-plus'
import useMainStore from '@/store/main'
import lockCpn from '@/components/unlockMessageBox/index'
import { onMounted } from 'vue'

const mainStore = useMainStore()
const handleLockScreen = () => {
	ElMessageBox.prompt('', {
		confirmButtonText: '锁屏',
		cancelButtonText: '取消',
		title: '请输入锁屏密码'
	})
		.then(({ value }) => {
			if (!value) {
				return ElMessage({
					type: 'warning',
					message: `请输入内容`
				})
			}
			mainStore.changeLockStatus(value)
			lockCpn()
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: '取消锁屏'
			})
		})
}
onMounted(() => {
	if (mainStore.isLock) {
		lockCpn()
	}
})
</script>

<style lang="less" scoped>
.lock_screen {
	width: 25px;
	height: 25px;
	cursor: pointer;
}
</style>
