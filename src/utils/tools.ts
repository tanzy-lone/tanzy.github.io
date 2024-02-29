import { RestaurantItem } from '@/components/mainHeader/components/type'

/**
 * @description 获取浏览器默认语言
 */

export const getBrowserLang = () => {
  const browserLang = navigator.language
  let browserDefaultLang = ''
  if (
    browserLang.toLowerCase() === 'zh' ||
    browserLang.toLowerCase() === 'cn' ||
    browserLang.toLowerCase() === 'zh-cn'
  ) {
    browserDefaultLang = 'zh'
  } else {
    browserDefaultLang = 'en'
  }
  return browserDefaultLang
}

/**
 * @description 扁平化数组对象(主要用来处理路由菜单)
 * @param {Array} menuList 所有菜单列表
 */

export const getArrFatList = (menuList: RestaurantItem[]) => {
  let arr: RestaurantItem[] = []
  const _recurseGetMenu = (menus: RestaurantItem[]) => {
    for (let menu of menus) {
      if (menu.children && menu.url) {
        arr.push(menu)
        _recurseGetMenu(menu.children)
      } else if (!menu.children && menu.url) {
        arr.push(menu)
      }
    }
  }
  _recurseGetMenu(menuList)
  return arr
}

/**
 * @description 递把文件按照二进制方式读取
 * @param {File} file 文件源
 */
export const readFile = (file: any) => {
  return new Promise((resolve) => {
    let reader = new FileReader()
    reader.readAsBinaryString(file)
    reader.onload = (ev) => {
      resolve(ev.target?.result)
    }
  })
}

export const setProxyObject = (targetObj: any) => {
  // 创建一个代理对象
  const proxy = new Proxy(targetObj, {
    // 拦截读取属性的操作
    get: function (target, property) {
      console.log(`正在访问属性 ${String(property)}`)
      return target[property]
    },
    // 拦截设置属性的操作
    set: function (target, property, value) {
      // console.log(`正在设置属性 ${property}，新值为 ${value}`);
      target[property] = value
      return true
    }
  })
  return proxy
}

/**
 * @description 扁平化数组对象(主要用来处理路由菜单)
 * @param {Array} menuList 所有菜单列表
 */
export const getFlatArr = (menuList: any) => {
  let newMenuList = JSON.parse(JSON.stringify(menuList))
  return newMenuList.reduce((pre: any, current: any) => {
    let flatArr = [...pre, current]
    if (current.children)
      flatArr = [...flatArr, ...getFlatArr(current.children)]
    return flatArr
  }, [])
}
export function is(val: any, type: any) {
  return toString.call(val) === `[object ${type}]`
}

export function isNumber(val: any) {
  return is(val, 'Number')
}

// /**
//  * hex颜色转rgb颜色
//  * @param str 颜色值字符串
//  * @returns 返回处理后的颜色值
//  */
// export function hexToRgb(str: string) {
//   let hexs = ''
//   let reg = /^\#?[0-9A-Fa-f]{6}$/
//   if (!reg.test(str)) return ElMessage.warning('输入错误的hex')
//   str = str.replace('#', '')
//   hexs = str.match(/../g)
//   for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16)
//   return hexs
// }

// /**
//  * rgb颜色转Hex颜色
//  * @param r 代表红色
//  * @param g 代表绿色
//  * @param b 代表蓝色
//  * @returns 返回处理后的颜色值
//  */
// export function rgbToHex(r: string, g: number, b: number) {
//   let reg = /^\d{1,3}$/
//   if (!reg.test(r) || !reg.test(g) || !reg.test(b))
//     return ElMessage.warning('输入错误的rgb颜色值')
//   let hexs = [r.toString(16), g.toString(16), b.toString(16)]
//   for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`
//   return `#${hexs.join('')}`
// }

// /**
//  * 加深颜色值
//  * @param color 颜色值字符串
//  * @param level 加深的程度，限0-1之间
//  * @returns 返回处理后的颜色值
//  */
// export function getDarkColor(color: string, level: number) {
//   let reg = /^\#?[0-9A-Fa-f]{6}$/
//   if (!reg.test(color)) return ElMessage.warning('输入错误的hex颜色值')
//   let rgb = hexToRgb(color)
//   for (let i = 0; i < 3; i++)
//     rgb[i] = Math.round(20.5 * level + rgb[i] * (1 - level))
//   return rgbToHex(rgb[0], rgb[1], rgb[2])
// }

// /**
//  * 变浅颜色值
//  * @param color 颜色值字符串
//  * @param level 加深的程度，限0-1之间
//  * @returns 返回处理后的颜色值
//  */
// export function getLightColor(color, level) {
//   let reg = /^\#?[0-9A-Fa-f]{6}$/
//   if (!reg.test(color)) return ElMessage.warning('输入错误的hex颜色值')
//   let rgb = hexToRgb(color)
//   for (let i = 0; i < 3; i++)
//     rgb[i] = Math.round(255 * level + rgb[i] * (1 - level))
//   return rgbToHex(rgb[0], rgb[1], rgb[2])
// }
