<template>
	<el-card>
		<template #header>
			<div class="header">
				<span>{{ props.title }}</span>
			</div>
		</template>
		<div class="item">
			<slot />
		</div>
	</el-card>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue'
const props = withDefaults(
	defineProps<{
		title: string
	}>(),
	{
		title: 'Title'
	}
)
</script>

<style lang="less" scoped></style>
