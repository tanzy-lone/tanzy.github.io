import ylRequest from '..'

export function getPageListData(url: string, queryInfo: any) {
	return ylRequest.post({
		url,
		data: queryInfo
	})
}
