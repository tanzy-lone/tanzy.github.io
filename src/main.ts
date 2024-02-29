import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/store'
import { getRefreshRoutesData } from '@/store/login'
import i18n from './language'
import directives from './directives'
import 'default-passive-events'

import '@/assets/less/global.less'

// 创建pinia
const app = createApp(App)

getRefreshRoutesData()
app.use(i18n)
app.use(router).use(pinia).use(directives).mount('#app')
