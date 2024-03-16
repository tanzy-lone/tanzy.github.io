<template>
	<div class="role">
		<pageHeader :form-data-config="formDataConfig">
			<template #footer>
				<div class="footer">
					<el-button :icon="Refresh" type="info">重置</el-button>
					<el-button :icon="Search" type="primary">搜索</el-button>
				</div>
			</template>
		</pageHeader>
		<pageContent page-name="role" :content-data-config="contentDataConfig" @clickEdit="handleEdit">
			<template #headerHandler>
				<div class="header-handler">
					<el-button type="primary" @click="handleCreate">新建角色</el-button>
					<el-button :icon="Refresh"></el-button>
				</div>
			</template>
		</pageContent>
		<pageModel
			ref="modelRef"
			page-name="role"
			:model-config="modelDataConfig"
			:default-value="defaultValue"
			:otherOptions="otherOptions"
		>
			<el-tree
				ref="treeRef"
				:data="menus"
				show-checkbox
				node-key="id"
				highlight-current
				:props="{ children: 'children', label: 'name' }"
				@check="checkChange"
			/>
		</pageModel>
	</div>
</template>

<script lang="ts" setup>
import pageContent from '@/components/PageContent/pageContent.vue'
import pageHeader from '@/components/pageHeader/index.vue'
import pageModel from '@/components/pageModel/pageModel.vue'
import { formDataConfig } from './config/formDataConfig'
import { contentDataConfig } from './config/contentDataConfig'
import { modelDataConfig } from './config/modelDataConfig'
import { Refresh, Search } from '@element-plus/icons-vue'
import useModelMethods from '@/hooks/useModelMethods'
import globeStore from '@/store/globe'
import { ElTree } from 'element-plus'

import { computed, nextTick, ref } from 'vue'
import { menuMapLeafKeys } from '@/utils/mapRouteToMenu'

const treeRef = ref<InstanceType<typeof ElTree>>()
const clickEdit = (item: any) => {
	const leafKeys = menuMapLeafKeys(item.menuList)
	nextTick(() => {
		if (leafKeys) {
			treeRef.value?.setCheckedKeys(leafKeys, true)
		}
	})
}
const { modelRef, defaultValue, handleCreate, handleEdit } = useModelMethods(undefined, clickEdit)
const useMain = globeStore()
const menus = computed(() => useMain.entireMenu)
const otherOptions = ref({})
const checkChange = (_: any, data2: any) => {
	const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
	otherOptions.value = { menuList }
}
</script>

<style lang="less" scoped></style>
