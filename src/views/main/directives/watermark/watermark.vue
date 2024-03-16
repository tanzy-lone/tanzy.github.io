<template>
	<div class="watermark" style="height: 100%" v-waterMarker="waterMarker"></div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const waterMarker = reactive({
	text: 'tanzylone',
	textColor: 'rgba(0,0,0,0.9)'
})
</script>

<style lang="less" scoped></style>
