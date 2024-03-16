<template>
	<div class="table">
		<div class="table-header">
			<h2 class="title">{{ title }}</h2>
			<slot name="headerHandler"></slot>
		</div>

		<el-table
			:data="listData"
			stripe
			border
			style="width: 100%"
			show-overflow-tooltip
			v-bind="childrenProps"
			lazy
			ref="tableRef"
		>
			<el-table-column type="selection" width="50" align="center" v-if="isShowSelection" />
			<el-table-column
				type="index"
				label="序号"
				width="60"
				align="center"
				:index="handleIndex"
				v-if="isShowIndex"
			/>

			<template v-for="item in tableData" :key="item.label">
				<el-table-column v-bind="item" align="center">
					<template #default="scope">
						<slot :name="item.slotName" :row="scope.row">
							<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">
								{{ scope.row[item.prop] ?? '' }}
							</div>
						</slot>
					</template>
				</el-table-column>
			</template>
		</el-table>

		<div class="footer" v-if="totalCount > offset">
			<slot name="footer">
				<el-pagination
					:current-page="currPage"
					:page-size="offset"
					:page-sizes="[10, 20, 30]"
					layout="total, sizes, prev, pager, next, jumper"
					:total="totalCount"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'

const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	listData: {
		type: Array,
		default: () => []
	},
	tableData: {
		type: Object,
		default: () => {}
	},
	isShowSelection: {
		type: Boolean,
		default: true
	},
	isShowIndex: {
		type: Boolean,
		default: true
	},
	currPage: {
		type: Number,
		default: 1
	},
	offset: {
		type: Number,
		default: 10
	},
	totalCount: {
		type: Number,
		default: 1
	},
	childrenProps: {
		type: Object,
		default: () => {}
	},
	showFooter: {
		type: Boolean,
		default: true
	}
})
const tableRef = ref<InstanceType<typeof ElTable>>()

const emit = defineEmits(['updateSize', 'updateCurrPage'])
const handleSizeChange = (value: number) => {
	emit('updateSize', value)
}
const handleCurrentChange = (value: number) => {
	emit('updateCurrPage', value)
}
const handleIndex = (index: number) => {
	return (props.currPage - 1) * props.offset + index + 1
}
</script>

<style lang="less" scoped>
.table {
	.table-header {
		display: flex;
		justify-content: space-between;
		margin: 20px 0;
		font-size: 16px;
	}

	.footer {
		display: flex;
		justify-content: flex-end;
		margin: 25px 10px;
	}
}

:deep(.el-table__body-wrapper .el-table-column--selection > .cell) {
	justify-content: center;
}
</style>
