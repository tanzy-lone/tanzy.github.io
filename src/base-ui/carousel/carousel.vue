<template>
	<div class="carousel">
		<el-carousel :interval="props.interval" type="card" :height="props.height">
			<el-carousel-item v-for="(item, index) in props.imgList" :key="index">
				<slot :data="item"></slot>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	interval: {
		type: Number,
		default: 2000
	},
	height: {
		type: String,
		default: '220px'
	},

	imgList: {
		type: Array,
		default: () => []
	}
})
</script>

<style lang="less" scoped></style>
