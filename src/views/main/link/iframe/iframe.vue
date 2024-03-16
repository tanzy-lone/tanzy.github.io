<template>
	<div class="container">
		<!-- src 设置在frame中显示的页面  -->
		<!-- frameborder是否显示frame边框[0-不显示边框 1-显示边框] -->
		<iframe
			src="https://element-plus.org/zh-CN/component/icon.html#icon-collection"
			frameborder="0"
			class="w-100"
			:style="{ height: pageHeight + 'px' }"
		></iframe>
	</div>
</template>

<script setup lang="ts">
// @ts-ignore
import { usePageHeight } from '@/hooks/useTableHeight'
const { pageHeight } = usePageHeight()
</script>

<style scoped>
.container {
	width: 100%;
	height: 100%;
}

.w-100 {
	display: block;
	width: 100%;
}
</style>
