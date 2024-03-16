import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ylInterceptor<T = AxiosResponse> {
	requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>
	requestInterceptorCatch: (err: any) => any
	responseInterceptor: (res: T) => T | Promise<T>
	responseInterceptorCatch: (err: any) => any
}

export interface ylRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
	interceptors?: ylInterceptor<T>
	isLoading?: boolean
}
