<template>
	<div class="copy">
		<el-input placeholder="请输入要复制的内容" style="width: 400px" v-model="iptVal">
			<template #append>
				<el-button v-copy="iptVal">复制</el-button>
			</template>
		</el-input>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const iptVal = ref('')
</script>

<style lang="less" scoped></style>
