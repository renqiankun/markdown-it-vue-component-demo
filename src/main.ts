import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import elementPlus from './element-plus'


import '@/theme/element-theme.scss'
import './theme/common.scss'
import './theme/chat-css.scss'

const app = createApp(App)
app.use(createPinia())
app.use(elementPlus)
app.mount('#app')

;(window as any).__APP__ = app