<template>
	<div class="main-header">
		<div class="header-left">
			<div class="collapse-menu-logo" @click="handleClick" :style="{ color: props.color ? props.color : '#666' }">
				<i-ep-Operation v-if="themeConfig.isCollapse" />
				<i-ep-Expand v-else />
			</div>
			<div class="bread-crumb" :style="{ color: props.color ? props.color : '#666' }">
				<breadCrumb :bread-crumb-list="breadCrumbList" :color="props.color" />
			</div>
		</div>
		<div class="user-info">
			<LockScreen />
			<FullScreen />
			<SelecteLanuguage />
			<MenuSearch />
			<ColorPicker />
			<ThemeSettings />
			<userInfo />
		</div>
	</div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import breadCrumb from '@/base-ui/breadCrumb/index.vue'
import { mapHeaderBreadCrumb } from '@/utils/mapRouteToMenu'
import { computed } from 'vue'
import loginStore from '@/store/login'
import { useRoute } from 'vue-router'
import useGlobalStore from '@/store/globe'

import userInfo from './userInfo.vue'
import LockScreen from '../components/LockScreen.vue'
import FullScreen from '../components/FullScreen.vue'
import SelecteLanuguage from '../components/SelecteLanuguage.vue'
import MenuSearch from '../components/MenuSearch.vue'
import ColorPicker from '../components/ColorPicker.vue'
import ThemeSettings from '../components/ThemeSettings.vue'

const globalStore = useGlobalStore()
const themeConfig = computed(() => {
	return globalStore.themeConfig
})
// const isCollapse = ref(false)
const route = useRoute()
// const emit = defineEmits(['handleCollapse'])
const props = defineProps({
	color: String
})
const handleClick = () => {
	themeConfig.value.isCollapse = !themeConfig.value.isCollapse
	// isCollapse.value = !isCollapse.value
	// emit('handleCollapse', isCollapse.value)
}

const breadCrumbList = computed(() => {
	const login = loginStore()
	const menuList = login.menuList
	return mapHeaderBreadCrumb(menuList, route.path)
})
</script>

<style lang="less" scoped>
.main-header {
	&.classic {
		--el-text-color-regular: #fff;

		.user-info {
			color: #fff;
		}
	}

	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 49px;

	.header-left {
		display: flex;
		align-items: center;

		.collapse-menu-logo {
			position: relative;
			top: 5px;
			padding: 0 10px;
			font-size: 30px;
			cursor: pointer;
		}

		.bread-crumb {
			margin: 0 5px;
			font-size: 18px;
		}
	}

	.user-info {
		display: flex;
		align-items: center;
	}
}
</style>
