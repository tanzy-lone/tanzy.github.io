<template>
	<div class="select_language">
		<el-dropdown @command="handleSetLanguage">
			<img src="@/assets/svg/zhongyingwen.svg" style="width: 28px; height: 28px; cursor: pointer" />
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item :disabled="language === 'zh'" command="zh">简体中文</el-dropdown-item>
					<el-dropdown-item :disabled="language === 'en'" command="en">English</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script lang="ts" setup>
import useGlobalStore from '@/store/globe'
import { useI18n } from 'vue-i18n'
import { computed, onMounted } from 'vue'
import { getBrowserLang } from '@/utils/tools'

const globalStore = useGlobalStore()
const i18n = useI18n()
const language = computed(() => {
	return globalStore.language
})
const handleSetLanguage = (value: string) => {
	globalStore.setLanguageAction(value)
	i18n.locale.value = value
}

onMounted(() => {
	handleSetLanguage(globalStore.language || getBrowserLang())
})
</script>

<style lang="less" scoped>
:deep(.el-tooltip__trigger:focus-visible) {
	// :deep样式穿透
	outline: unset;
}
</style>
