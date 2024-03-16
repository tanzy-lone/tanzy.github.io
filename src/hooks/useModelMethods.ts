import { ref } from 'vue'
import pageModel from '@/components/pageModel/pageModel.vue'

export default function useModelMethods(createCb?: any, editCb?: any) {
	const modelRef = ref<InstanceType<typeof pageModel>>()
	let defaultValue = ref({})
	const handleEdit = (item: any) => {
		if (modelRef.value) {
			modelRef.value.isShowModel = true
		}
		defaultValue.value = { ...item }
		editCb && editCb(item)
	}
	const handleCreate = () => {
		defaultValue.value = {}
		if (modelRef.value) {
			modelRef.value.isShowModel = true
		}
		createCb && createCb()
	}
	return { modelRef, defaultValue, handleCreate, handleEdit }
}
