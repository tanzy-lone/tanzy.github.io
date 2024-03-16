import ylRequest from '@/service'

/**
 *
 */
export function getContentPageList(url: string, queryInfo: any) {
	return ylRequest.post({
		url,
		data: queryInfo
	})
}

export function updateContent(url: string, editInfo: any) {
	return ylRequest.patch({
		url,
		data: editInfo
	})
}

export function deleteContent(url: string) {
	return ylRequest.delete({
		url
	})
}

export function createContent(url: string, queryInfo: any) {
	return ylRequest.post({
		url,
		data: queryInfo
	})
}
