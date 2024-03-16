<template>
	<div class="form-wrapper">
		<div class="form-header">
			<slot name="header"></slot>
		</div>
		<el-form :labelWidth="labelWidth">
			<el-row>
				<template v-for="item in formData" :key="item.field">
					<el-col v-bind="colLayout">
						<el-form-item :label="item.label" :style="itemStyle" v-if="!item.isHidden">
							<template v-if="item.type === 'input' || item.type === 'password'">
								<el-input
									:model-value="modelValue[item.field]"
									:placeholder="item.placeholder"
									:show-password="item.type === 'password'"
									@update:modelValue="handleModelValue($event, item.field)"
								/>
							</template>

							<template v-if="item.type === 'picker'">
								<el-date-picker
									type="daterange"
									:model-value="modelValue[item.field]"
									@update:modelValue="handleModelValue($event, item.field)"
									:start-placeholder="item.otherOptions?.startPlaceholder"
									:end-placeholder="item.otherOptions?.endPlaceholder"
							/></template>

							<template v-else-if="item.type === 'select'">
								<el-select
									class="m-2"
									:placeholder="item.placeholder"
									@update:modelValue="handleModelValue($event, item.field)"
									:model-value="modelValue[item.field]"
								>
									<el-option
										v-for="val in item.options"
										:key="val.value"
										:label="val.label"
										:value="val.value"
									/> </el-select
							></template>
						</el-form-item>
					</el-col>
				</template>
			</el-row>
		</el-form>

		<div class="footer">
			<slot name="footer" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { IFormData } from '@/views/main/systerm/user/types/type'
import { PropType } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
	formData: {
		type: Array as PropType<IFormData[]>,
		default: () => []
	},
	labelWidth: {
		type: String,
		default: '80px'
	},
	colLayout: {
		type: Object,
		default() {
			return {
				xl: 6,
				lg: 8,
				md: 12,
				sm: 24,
				xs: 24
			}
		}
	},
	itemStyle: {
		type: Object,
		default: () => {
			return {
				padding: '15px 20px'
			}
		}
	},
	modelValue: {
		type: Object,
		default: () => {}
	},
	title: {
		type: String,
		default: ''
	}
})

const handleModelValue = (value: any, field: string) => {
	emit('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<style lang="less" scoped>
.form-wrapper {
	overflow: hidden;

	.form-header {
		margin: 20px 0;
		font-size: 28px;
		text-align: center;
		font-weight: 700;
	}

	.el-select {
		width: 100%;
	}

	.footer {
		display: flex;
		justify-content: flex-end;
		margin: 14px 20px;
	}
}
</style>
