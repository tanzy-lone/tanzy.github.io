import { ElMessage } from 'element-plus'
import useGlobalStore from '@/store/globe'
import { computed, onBeforeMount } from 'vue'
import { DEFAULT_PRIMARY } from '@/config'
/**
 * @description 切换主题
 */

export const useTheme = () => {
  const globalStore = useGlobalStore()

  const themeConfig = computed(() => {
    return globalStore.themeConfig
  })

  // 修改主题色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = DEFAULT_PRIMARY
      ElMessage({
        type: 'success',
        message: `主题颜色已重置为 ${DEFAULT_PRIMARY}`
      })
    }
    globalStore.setThemeConfigAction({
      ...themeConfig.value,
      primary: val
    })
    document.documentElement.style.setProperty(
      '--el-color-primary',
      themeConfig.value.primary
    )
  }
  onBeforeMount(() => {
    changePrimary(themeConfig.value.primary)
  })
  // 初始化 theme 配置
  const initTheme = () => {
    changePrimary(themeConfig.value.primary)
  }
  return { changePrimary, initTheme }
}
