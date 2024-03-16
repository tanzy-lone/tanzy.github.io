<template>
	<el-drawer v-model="drawerVisible" title="布局设置" size="300px">
		<!-- 布局切换 -->
		<el-divider class="divider" content-position="center">
			<i-ep-Notification />
			布局切换
		</el-divider>
		<div class="layout-box">
			<el-tooltip effect="dark" content="纵向" placement="top" :show-after="200">
				<div
					:class="['layout-item layout-vertical', themeConfig.layout == 'vertical' ? 'is-active' : '']"
					@click="changeLayout('vertical')"
				>
					<div class="layout-dark"></div>
					<div class="layout-container">
						<div class="layout-light"></div>
						<div class="layout-content"></div>
					</div>
					<i-ep-CircleCheckFilled v-if="themeConfig.layout == 'vertical'" />
				</div>
			</el-tooltip>
			<el-tooltip effect="dark" content="经典" placement="top" :show-after="200">
				<div
					:class="['layout-item layout-classic', themeConfig.layout == 'classic' ? 'is-active' : '']"
					@click="changeLayout('classic')"
				>
					<div class="layout-dark"></div>
					<div class="layout-container">
						<div class="layout-light"></div>
						<div class="layout-content"></div>
					</div>
					<i-ep-CircleCheckFilled v-if="themeConfig.layout == 'classic'" />
				</div>
			</el-tooltip>
			<el-tooltip effect="dark" content="横向" placement="top" :show-after="200">
				<div
					:class="['layout-item layout-transverse', themeConfig.layout == 'transverse' ? 'is-active' : '']"
					@click="changeLayout('transverse')"
				>
					<div class="layout-dark"></div>
					<div class="layout-content"></div>
					<i-ep-CircleCheckFilled />
				</div>
			</el-tooltip>
			<el-tooltip effect="dark" content="分栏" placement="top" :show-after="200">
				<div
					:class="['layout-item layout-columns', themeConfig.layout == 'columns' ? 'is-active' : '']"
					@click="changeLayout('columns')"
				>
					<div class="layout-dark"></div>
					<div class="layout-light"></div>
					<div class="layout-content"></div>
					<i-ep-CircleCheckFilled v-if="themeConfig.layout == 'columns'" />
				</div>
			</el-tooltip>
		</div>
		<br />

		<!-- 主题 -->
		<el-divider class="divider" content-position="center">
			<i-ep-ColdDrink />
			主题
		</el-divider>
		<div class="theme-item">
			<span>黑夜模式（需自行配置）</span>
			<el-switch v-model="themeConfig.isDark" @change="onAddDarkChange" inline-prompt />
		</div>
		<br />

		<!-- 界面设置 -->
		<el-divider class="divider" content-position="center">
			<i-ep-Setting />
			界面设置
		</el-divider>
		<div class="theme-item">
			<span>折叠菜单</span>
			<el-switch v-model="themeConfig.isCollapse" />
		</div>
		<div class="theme-item">
			<span>面包屑</span>
			<el-switch v-model="themeConfig.breadcrumb" />
		</div>
		<div class="theme-item">
			<span>面包屑图标</span>
			<el-switch v-model="themeConfig.breadcrumbIcon" />
		</div>
		<div class="theme-item">
			<span>标签栏</span>
			<el-switch v-model="themeConfig.tabs" />
		</div>
		<div class="theme-item">
			<span>标签栏图标</span>
			<el-switch v-model="themeConfig.tabsIcon" />
		</div>
		<div class="theme-item">
			<span>页脚</span>
			<el-switch v-model="themeConfig.footer" />
		</div>
	</el-drawer>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import useGlobalStore from '@/store/globe'
import eventBus from '@/utils/eventBus'
import { useTheme } from '@/hooks/useTheme'

const { switchDark } = useTheme()
const globalStore = useGlobalStore()
const themeConfig = computed(() => globalStore.themeConfig)

// 切换布局方式
const changeLayout = (val) => {
	globalStore.setThemeConfigAction({ ...themeConfig.value, layout: val })
}

// 监听布局变化，在 body 上添加相对应的 layout class
watch(
	() => themeConfig.value.layout,
	() => {
		const body = document.body
		body.setAttribute('class', themeConfig.value.layout)
	},
	{ immediate: true }
)

// 打开主题设置
const drawerVisible = ref(false)
eventBus.$on('openThemeDrawer', () => (drawerVisible.value = true))

const onAddDarkChange = () => {
	switchDark()
}
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
