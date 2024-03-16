<template>
	<suspense>
		<template #default>
			<component :is="LayoutComponents[themeConfig.layout]" />
		</template>
		<template #fallback>
			<Loading class="loading" />
		</template>
	</suspense>

	<ThemeDrawer />
</template>

<script lang="ts" setup>
import ThemeDrawer from '@/layout/components/ThemeDrawer/ThemeDrawer.vue'
import useGlobalStore from '@/store/globe'
import { computed, shallowRef, defineAsyncComponent } from 'vue'
import Loading from '@/components/loading/loading-01.vue'

const LayoutComponents = shallowRef({
	vertical: defineAsyncComponent(() => import('./LayoutVertical/index.vue')),
	classic: defineAsyncComponent(() => import('./LayoutClassic/index.vue'))
	// transverse: LayoutTransverse,
	// columns: LayoutColumns
})
const globalStore = useGlobalStore()
const themeConfig = computed(() => globalStore.themeConfig)
</script>

<style lang="less" scoped>
.loading {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
