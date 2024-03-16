<template>
	<div class="page-header">
		<ylForm v-bind="formDataConfig" v-model="formData">
			<template #header>
				<slot name="header" />
			</template>

			<template #footer>
				<slot name="footer" />
			</template>
		</ylForm>
	</div>
</template>

<script lang="ts" setup>
import ylForm from '@/base-ui/form/index.vue'
import { ref, watch } from 'vue'

const props = defineProps({
	formDataConfig: {
		type: Object,
		default: () => {}
	}
})
const emit = defineEmits(['updateFormData'])
const formDataObj = props.formDataConfig?.formData ?? []
// const originFormData: any = {}
const originFormData = ref<any>({})
for (let item of formDataObj) {
	originFormData.value[item.field] = ''
}
const formData = ref(originFormData.value)
watch(formData, (newVal: any) => {
	emit('updateFormData', newVal)
})
defineExpose({
	formData,
	originFormData
})
</script>

<style lang="less" scoped>
.page-header {
	background-color: #fff;
}
</style>
