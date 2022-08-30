import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router/index'

// 全局引入css
import "../style/headtap.css"
const app = createApp(App)
app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
  })
// 注册图标

// 请求地址
import urls from '../api/api'
app.config.globalProperties.$urls = urls
// 请求方法
import request from '../api/request'
app.config.globalProperties.$request = request
// 公共弹窗
import tips from '../config/tips'
app.config.globalProperties.$tips = tips
app.mount('#app')
