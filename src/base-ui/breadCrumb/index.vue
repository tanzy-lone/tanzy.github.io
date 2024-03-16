<template>
	<div class="bread-crumb" v-if="themeConfig.breadcrumb">
		<el-breadcrumb separator="/">
			<template v-for="item in props.breadCrumbList" :key="item.name">
				<el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
			</template>
		</el-breadcrumb>
	</div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue'
import { breadCrumbTypes } from '../breadCrumb/type/type'
import useGlobalStore from '@/store/globe'

const globalStore = useGlobalStore()
const themeConfig = computed(() => {
	return globalStore.themeConfig
})
const props = defineProps({
	breadCrumbList: {
		type: Array as PropType<breadCrumbTypes[]>,
		default: []
	}
})
</script>

<style lang="less" scoped></style>
