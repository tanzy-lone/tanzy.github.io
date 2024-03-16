import ylRequest from '..'
import { ILoginType } from './types'

export function VerifyLogin(formOptions: ILoginType) {
	return ylRequest.post({
		url: '/login',
		data: formOptions
	})
}

export function fetchUserInfos(id: number) {
	return ylRequest.get({
		url: `/users/${id}`
	})
}

export function fetchUserRole(id: number) {
	return ylRequest.get({
		url: `/role/${id}/menu`
	})
}
