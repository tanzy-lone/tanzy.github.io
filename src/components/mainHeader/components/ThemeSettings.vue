<template>
	<img
		src="@/assets/svg/pifu.svg"
		class="img"
		@click="openDrawer"
		style="width: 24x; height: 24px; cursor: pointer"
	/>
</template>

<script lang="ts" setup>
import eventBus from '@/utils/eventBus'
const openDrawer = () => {
	eventBus.$emit('openThemeDrawer')
}
</script>

<style lang="less">
.img {
	margin: 0 5px;
}
</style>
