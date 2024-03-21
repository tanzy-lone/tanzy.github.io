<template>
	<transition name="message-box-fade">
		<div v-show="visible" class="unlock_message_box">
			<div class="unlock_item">
				<div class="date d_t">
					{{ date }}
				</div>
				<div class="week d_t">{{ week }}</div>
				<div class="time d_t">{{ time }}</div>
				<div class="confirm_password">
					<el-form :model="allStateCpn">
						<el-form-item label="解锁密码">
							<el-input v-model="allStateCpn.password" />
						</el-form-item>
						<div class="unlock_btn">
							<el-button type="primary" @click="handleUnlock">解锁</el-button>
						</div>
					</el-form>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted } from 'vue'
import { getDataTimeStamp } from '@/utils/formatTime'
import useMainStore from '@/store/main'
import { ElMessage } from 'element-plus'

const allStateCpn = reactive<{ password: string; visible: boolean }>({
	password: '',
	visible: false
})
const { visible } = toRefs(allStateCpn)
const date = ref('loading..')
const time = ref('loading..')
const week = ref('loading..')
const mainStore = useMainStore()

const setVisible = (val: boolean) => {
	visible.value = val
}

onMounted(() => {
	setInterval(() => {
		date.value = getDataTimeStamp(1)
		week.value = getDataTimeStamp(2)
		time.value = getDataTimeStamp(3)
	}, 1000)
})

const handleUnlock = () => {
	if (allStateCpn.password !== mainStore.isLock) {
		return ElMessage({
			type: 'error',
			message: '锁屏密码输入错误'
		})
	}
	setVisible(false)
	ElMessage({
		type: 'success',
		message: '解锁成功'
	})
	mainStore.changeLockStatus('')
}
defineExpose({
	allStateCpn,
	setVisible
})
</script>

<style lang="less" scoped>
.message-box-fade-enter-from,
.message-box-fade-leave-to {
	opacity: 0;
}

.message-box-fade-enter-active {
	transition: opacity 0.2s ease-in;
}

.message-box-fade-leave-active {
	transition: opacity 0.2s ease-out;
}

.d_t {
	font-weight: bold;
}

.unlock_message_box {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	padding: 50px 0;
	width: 100%;
	height: 100%;
	background-color: hotpink;
	animation: identifier 0.8s;

	@keyframes identifier {
		0% {
			margin-left: 100vw;
		}

		100% {
			margin-top: 0;
		}
	}

	.unlock_item {
		text-align: center;
		color: #fff;

		.el-input {
			width: 320px;
		}

		.date {
			font-size: 30px;
		}

		.week {
			margin: 10px 0 5px;
			font-size: 30px;
		}

		.time {
			margin: 10px 0 20px;
			font-size: 80px;
		}

		.unlock_btn {
			text-align: center;
		}
	}
}
</style>
