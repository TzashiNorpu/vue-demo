import './assets/main.css'

import Cookies from 'js-cookie'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import {COOKIE_KEYS} from './constants'

const app = createApp(App)

app.use(createPinia())
app.use(router)


// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: Cookies.get(COOKIE_KEYS.SIZE) || 'default'
})

app.mount('#app')
