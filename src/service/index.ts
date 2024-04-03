import YLRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import LocalCache from '@/utils/localCache'

const ylRequest = new YLRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	isLoading: false,
	interceptors: {
		requestInterceptor: (config) => {
			const login = LocalCache.getCache('login', false)
			if (login && login.token) {
				config.headers!.Authorization = `Bearer ${login.token}`
			}
			return config
		},
		requestInterceptorCatch: (err) => {
			return err
		},
		responseInterceptor: (config) => {
			return config
		},
		responseInterceptorCatch: (config) => {
			return config
		}
	}
})

export const ylRequest1 = new YLRequest({
	baseURL: import.meta.env.VITE_APP_MOCK_BASEURL,
	timeout: 5000,
	isLoading: true
})

export default ylRequest
