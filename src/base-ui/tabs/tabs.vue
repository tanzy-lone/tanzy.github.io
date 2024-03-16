<template>
	<div class="tabs" v-if="themeConfig.tabs">
		<el-tabs v-model="editableTabsValue" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
			<el-tab-pane
				v-for="item in filterRoute"
				:key="item.url"
				:label="item.name"
				:name="item.url"
				:closable="item.close"
			>
				<template #label>
					<el-button size="default" :type="editableTabsValue === item.url ? 'primary' : ''">
						{{ item.name }}
					</el-button>
				</template>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch, computed, onMounted } from 'vue'

import { useRoute, useRouter } from 'vue-router'
// import { mapToAllRoutes } from '@/utils/mapRouteToMenu'
import useMainStore from '@/store/main'
import useLoginStore from '@/store/login'
import { getFlatArr } from '@/utils/tools'
import type { TabsPaneContext, TabPaneName } from 'element-plus'
import useGlobalStore from '@/store/globe'
import Sortable from 'sortablejs'

const globalStore = useGlobalStore()
const route = useRoute()
const router = useRouter()
const mainStore = useMainStore()
const loginStore = useLoginStore()
const editableTabsValue = ref(route.fullPath)
const filterRoute = computed(() => mainStore.filterRoute)
// const initTabs = () => {
//   const allRoutes = mapToAllRoutes()
//   const filterRoute = allRoutes.filter((item) => {
//     return item.path === route.fullPath
//   })
//   mainStore.changeFilterRoute(filterRoute)
// }
onMounted(() => {
	tabsDrop()
	initTabs()
})
const themeConfig = computed(() => {
	return globalStore.themeConfig
})
const tabClick = (pane: TabsPaneContext) => {
	const fullPath: any = pane.props.name
	router.push(fullPath)
}

const initTabs = () => {
	const flatMenuList = getFlatArr(loginStore.menuList)
	flatMenuList.forEach((item: any) => {
		if (!mainStore.filterRoute.length) {
			mainStore.changeFilterRoute({
				name: item.name,
				url: item.url
			})
		}
	})
}

// 标签拖拽排序
const tabsDrop = () => {
	Sortable.create(document.querySelector('.el-tabs__nav'), {
		draggable: '.el-tabs__item',
		animation: 300,
		onEnd({ newIndex, oldIndex }) {
			const tabsList = [...mainStore.filterRoute]
			const currRow = tabsList.splice(oldIndex, 1)[0]
			tabsList.splice(newIndex, 0, currRow)
			mainStore.setTabsListAction(tabsList)
		}
	})
}

const tabRemove = (name: TabPaneName) => {
	mainStore.removeTabsAction(name, route.fullPath === name)
}

// 监听路由的变化（防止浏览器后退/前进不变化 editableTabsValue
watch(
	() => route.fullPath,
	() => {
		console.log('route change')
		editableTabsValue.value = route.fullPath
		const flatMenuList = getFlatArr(loginStore.menuList)
		flatMenuList.forEach((item: any) => {
			if (item.url === route.fullPath) {
				mainStore.changeFilterRoute(item)
			}
		})
	}
)
</script>

<style lang="less" scoped>
.tabs {
	background-color: #fff;

	:deep(.el-tabs--card) {
		.el-tabs__header {
			border: none;

			.el-tabs__item {
				border-left: none;
				border-bottom: none;
				padding: 5px;
			}

			.el-tabs__nav {
				border: none;
			}
		}
	}
}
</style>
