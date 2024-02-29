import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import utc from 'dayjs/plugin/utc'
import localeData from 'dayjs/plugin/localeData'
import zhCn from 'dayjs/locale/zh-cn'

const FORMAT_TIME_STRING = 'YYYY-MM-DD HH:mm:ss'
const FROMAT_TIME_STAMP = 'YYYY年MM月DD日'
// 扩展utc
dayjs.extend(utc)
dayjs.extend(localeData)
// 设置语言环境为中文
dayjs.locale('zh-cn', zhCn)

export function formatTimeStr(
  timeStamp: string,
  format: string = FORMAT_TIME_STRING
) {
  const formatTime = dayjs.utc(timeStamp).utcOffset(8).format(format)
  return formatTime
}

export function getDataTimeStamp(
  type: number,
  format: string = FROMAT_TIME_STAMP
) {
  const date = dayjs().format(format)
  const week = dayjs().locale('zh-cn').format('dddd')
  const time = dayjs().format('HH:mm:ss')
  if (type === 1) {
    return date
  }
  if (type === 2) {
    return week
  }
  if (type === 3) {
    return time
  }
  return ''
}
