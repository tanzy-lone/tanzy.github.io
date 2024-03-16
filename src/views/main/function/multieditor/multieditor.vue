<template>
	<div class="multi_editor">
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="24" :lg="16">
				<MyEditor v-model="htmlValue" />
			</el-col>
			<el-col :xs="24" :sm="24" :md="24" :lg="8">
				<div class="rictext-box">
					<div class="rictext-box-item" v-html="htmlValue"></div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import MyEditor from '@/components/myeditor/myeditor.vue'
const htmlValue = ref('')
</script>

<style lang="less" scoped>
.rictext-box {
	position: relative;
	margin: 0 auto;
	margin-top: -130px;
	width: 430px;
	height: 900px;
	background-size: 100% 100%;
	background-image: url('@/assets/img/main/iphone.png');
	transform: scale(0.7);

	.rictext-box-item {
		position: absolute;
		top: 109px;
		left: 27px;
		overflow: hidden auto;
		padding: 16px;
		width: 375px;
		height: 678px;
		background: #fff;
		box-sizing: border-box;
	}
}
</style>
