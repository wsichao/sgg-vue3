import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import App from './App.vue'
import zhCn from "element-plus/es/locale/lang/zh-cn"
import 'virtual:svg-icons-register'
import globalComponent from '@/components/index.ts'

console.log('123',import.meta.env)
createApp(App)
.use(globalComponent)
.use(ElementPlus, {
  locale: zhCn,
})
.mount('#app')
