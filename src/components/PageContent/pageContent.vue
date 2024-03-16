<template>
	<div class="page-content">
		<div class="export-excel-table" v-if="isExportExcel">
			<ExportExcel
				@clickExportExcel="clickExportExcel"
				@setExcelName="setExcelName"
				@changeExportType="changeExportType"
				v-model="defaultSelctionType"
				:options="options"
			></ExportExcel>
		</div>
		<YlTable
			:list-data="listData"
			v-bind="contentDataConfig"
			:currPage="pageInfo.currPage"
			:offset="pageInfo.offset"
			:total-count="totalCount"
			@updateSize="handleUpdateSize"
			@updateCurrPage="handleCurrPage"
		>
			<template #headerHandler>
				<slot name="headerHandler"></slot>
			</template>

			<!-- 状态 -->
			<template #enable="scope">
				<el-button :type="scope.row.enable === '0' ? 'danger' : 'success'" plain size="small">{{
					scope.row.enable === '0' ? '禁用' : '启用'
				}}</el-button>
			</template>

			<!-- 更新时间 -->
			<template #updateAt="scope">
				<span>{{ formatTimeStr(scope.row.updateAt) }}</span>
			</template>

			<!-- 创建时间 -->
			<template #createAt="scope">
				<span>{{ formatTimeStr(scope.row.createAt) }}</span>
			</template>

			<!-- 操作 -->
			<template #handler="scope">
				<div class="handler">
					<el-button
						type="primary"
						key="primary"
						:icon="Edit"
						text
						size="small"
						@click="handleEdit(scope.row)"
						>编辑</el-button
					>
					<el-button
						:icon="Delete"
						type="danger"
						key="danger"
						text
						size="small"
						@click="handleDelete(scope.row)"
						>删除</el-button
					>
				</div>
			</template>
			<!-- 其他未被定义的插槽 交给外面组件处理 -->
			<template v-for="item in filterProps" :key="item.prop" #[item.slotName]="scope">
				<template v-if="item.slotName">
					<slot :name="item.slotName" :row="scope.row"></slot>
				</template>
			</template>
		</YlTable>
	</div>
</template>

<script lang="ts" setup>
import YlTable from '@/components/table/table.vue'
import ExportExcel from '@/components/exportExelBtn/exportExelBtn.vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import mainStore from '@/store/main'
import { computed, ref } from 'vue'
import { formatTimeStr } from '@/utils/formatTime'

import * as XLSX from 'xlsx'

const props = defineProps({
	pageName: {
		type: String,
		default: ''
	},
	contentDataConfig: {
		type: Object,
		default: () => {}
	},
	isExportExcel: {
		type: Boolean,
		default: false
	}
})
const emit = defineEmits(['clickEdit'])

// const pageInfo = ref({ pageSize: currPage, currPage: offset })

const pageInfo: any = computed(() => {
	return {
		offset: useMain.currPage[`${props.pageName}`].offset,
		currPage: useMain.currPage[`${props.pageName}`].page
	}
})
const useMain: any = mainStore()
const listLength = ref(0)
const isSearchValue = ref(false)
// 获取数据
const getPageList = async (queryInfo: any = {}, isSearch: boolean = false) => {
	isSearchValue.value = isSearch
	if (isSearch) {
		listLength.value = await useMain.getPageList({
			pageName: props.pageName,
			queryInfo: {
				...queryInfo
			}
		})
	} else {
		listLength.value = await useMain.getPageList({
			pageName: props.pageName,
			queryInfo: {
				offset: (pageInfo.value.currPage - 1) * pageInfo.value.offset,
				size: pageInfo.value.offset,
				...queryInfo
			}
		})
	}
}
getPageList()

const listData = computed(() => {
	return useMain[`${props.pageName}List`]
})
const totalCount = computed(() => {
	if (isSearchValue.value) return listLength.value
	return useMain[`${props.pageName}Count`]
})
const filterProps: any = props.contentDataConfig?.tableData.filter((item: any) => {
	if (item.slotName === 'enable') return false
	if (item.slotName === 'updateAt') return false
	if (item.slotName === 'createAt') return false
	if (item.slotName === 'handler') return false
	return true
})

const handleEdit = (item: any) => {
	emit('clickEdit', item)
}

const handleDelete = async (item: any) => {
	useMain.handleDelete({ pageName: props.pageName, id: item.id })
}

// const handleCreate = () => {
//   emit('clickCreate')
// }

const handleUpdateSize = (value: number) => {
	useMain.currPage[`${props.pageName}`].offset = value
	getPageList()
}
const handleCurrPage = (value: number) => {
	useMain.currPage[`${props.pageName}`].page = value
	getPageList()
}

// 导出逻辑
const ExcelName = ref('')
const defaultSelctionType = ref('xlsx')
const options = ref([
	{
		label: 'xlsx',
		value: 'xlsx'
	},
	{
		label: 'csv',
		value: 'csv'
	},
	{
		label: 'text',
		value: 'text'
	}
])
const setExcelName = (val: any) => {
	ExcelName.value = val
}
const changeExportType = (val: any) => {
	defaultSelctionType.value = val
}

const clickExportExcel = () => {
	const workbook = XLSX.utils.book_new()
	// dataArray是要导出的数据数组
	const worksheet = XLSX.utils.json_to_sheet(listData.value)
	// 'Sheet1'是工作表的名称
	XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
	const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
	// 调用保存Excel文件的方法
	saveExcelFile(excelBuffer, `${ExcelName.value}.${defaultSelctionType.value}`)
}
const saveExcelFile = (buffer: any, fileName: any) => {
	const data = new Blob([buffer], { type: 'application/octet-stream' })
	const url = URL.createObjectURL(data)
	const link = document.createElement('a')
	link.href = url
	link.setAttribute('download', fileName)
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}
defineExpose({
	getPageList
})
</script>

<style lang="less" scoped>
.page-content {
	padding: 12px 20px;
	margin: 20px 0;
	background-color: #fff;
	user-select: none;

	.handler {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		.el-button {
			padding: 3px;
			margin-left: 0;
		}
	}
}

:deep(.el-tooltip) {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
