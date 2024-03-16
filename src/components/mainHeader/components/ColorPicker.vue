<template>
	<el-color-picker v-model="themeConfig.primary" @change="changePrimary" :predefine="colorList" />
</template>

<script lang="ts" setup>
import { DEFAULT_PRIMARY } from '@/config/index'
import { useTheme } from '@/hooks/useTheme'
import useGlobalStore from '@/store/globe'
import { storeToRefs } from 'pinia'

const colorList = [
	DEFAULT_PRIMARY,
	'#F44336',
	'#E91E63',
	'#9C27B0',
	'#673AB7',
	'#2196F3',
	'#03A9F4',
	'#00BCD4',
	'#009688',
	'#4CAF50',
	'#FFEB3B',
	'#FFC107',
	'#FF5722',
	'#9E9E9E',
	'#607D8B'
]
const { changePrimary } = useTheme()
const globalStore = useGlobalStore()
const { themeConfig } = storeToRefs(globalStore)
</script>

<style lang="less" scoped></style>
