<template>
	<div class="menu">
		<pageContent page-name="menu" :content-data-config="contentDataConfig">
			<template #headerHandler>
				<div class="header-handler">
					<el-button type="primary">新建菜单</el-button>
					<el-button :icon="Refresh"></el-button>
				</div>
			</template>
		</pageContent>
	</div>
</template>

<script lang="ts" setup>
import pageContent from '@/components/PageContent/pageContent.vue'
import { contentDataConfig } from './config/contentDataConfig'

import { Refresh } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped></style>
