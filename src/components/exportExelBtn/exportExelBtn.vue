<template>
	<div class="export-exel">
		<div class="exel_name">
			<label class="" for="filename">filename:</label>
			<input placeholder="请输入导出的文件名称" class="ipt" v-model="excelName" />
		</div>
		<div class="export-type">
			<label class="type" for="">导出类型：</label>
			<el-select
				class="m-2"
				placeholder="请选择导出的类型"
				size="large"
				:modelValue="modelValue"
				@update:modelValue="handleInput"
			>
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
			</el-select>
		</div>
		<el-button type="primary" class="btn" @click="exportToExcel">导出excel</el-button>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const excelName = ref('')
const emit = defineEmits(['clickExportExcel', 'setExcelName', 'changeExportType'])

const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	},
	options: {
		type: Array<{ label: string; value: string }>,
		default: () => []
	}
})
const handleInput = (val: any) => {
	emit('changeExportType', val)
}

const exportToExcel = () => {
	emit('clickExportExcel')
}

watch(excelName, (newValue: any) => {
	emit('setExcelName', newValue)
})
</script>

<style lang="less" scoped>
.export-exel {
	display: flex;
	align-items: center;

	.exel_name {
		display: flex;
		align-items: center;
		width: 300px;

		.ipt {
			padding: 5px;
			margin: 0 10px;
			border: 1px solid #ccc;
			border-radius: 4px;
			flex: 1;
		}
	}

	.btn {
		margin-left: 50px;
	}
}
</style>
