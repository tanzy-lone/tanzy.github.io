import pageContent from '@/components/PageContent/pageContent.vue'
import pageHeader from '@/components/pageHeader/index.vue'
import { ref } from 'vue'

export default function usePageMethods() {
	const contentRef = ref<InstanceType<typeof pageContent>>()
	const headerRef = ref<InstanceType<typeof pageHeader>>()

	const handleSearch = (queryInfo: any) => {
		console.log('queryInfo:', queryInfo)
		contentRef.value?.getPageList(queryInfo, true)
	}

	const handleReset = () => {
		contentRef.value?.getPageList()
		if (headerRef.value) {
			headerRef.value.formData = headerRef.value.originFormData
		}
	}

	return { contentRef, headerRef, handleSearch, handleReset }
}
