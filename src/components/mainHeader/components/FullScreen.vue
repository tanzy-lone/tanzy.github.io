<template>
	<div class="full_screen">
		<img
			v-if="isShowFullScreen"
			src="@/assets/svg/quanping.svg"
			alt="全屏"
			@click="handleFullScreen"
			class="full_icon"
		/>
		<img v-else src="@/assets/svg/quxiaoquanping.svg" alt="取消全屏" @click="handleFullScreen" class="full_icon" />
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isShowFullScreen = ref(true)
const app = document.getElementById('app')
const handleFullScreen = () => {
	isShowFullScreen.value = !isShowFullScreen.value
	if (document.fullscreenElement) {
		document.exitFullscreen()
	} else {
		document.documentElement.requestFullscreen()
	}
}
</script>

<style lang="less" scoped>
.full_icon {
	width: 28px;
	height: 28px;
	cursor: pointer;
}
</style>
