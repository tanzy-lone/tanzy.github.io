<template>
	<div class="move-rotation" :style="{ zIndex: Zindex, width: width, height: height }">
		<div class="move-wrapper">
			<slot></slot>
		</div>
		<div class="move-img" :style="{ backgroundImage: `url(${image})` }"></div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	width: {
		type: String,
		default: '150px'
	},
	height: {
		type: String,
		default: '150px'
	},
	Zindex: {
		type: Number,
		default: 1
	},
	image: {
		type: String,
		required: true
	}
})
</script>

<style lang="less" scoped>
.move-rotation {
	position: relative;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	cursor: pointer;

	&:hover {
		.move-img {
			transform: rotate(-110deg);
		}
	}

	.move-wrapper {
		position: absolute;
		overflow: hidden;
		padding: 15px;
		width: inherit;
		height: inherit;
		text-align: center;
		border-radius: 50%;
		box-shadow: inset 0 0 0 5px rgb(0 0 0 / 5%);
	}

	.move-img {
		position: absolute;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-position: center center;
		background-size: cover;
		border-radius: 50%;
		transition: all 0.3s ease-in-out;
		transform-origin: 95% 40%;
	}
}
</style>
