import { ylRequest1 } from '@/service'

/**
 * @description  获取转盘是否中奖，中奖信息
 * @returns {Object}
 */

export const getCircular = (data?: any) => {
	return ylRequest1.post({ url: '/lottery/circular', data })
}

/**
 * @description  获取九宫格是否中奖，中奖信息
 * @returns {Object}
 */

export const getNineLucky = (data?: any) => {
	return ylRequest1.post({ url: '/lottery/nineLucky', data })
}
