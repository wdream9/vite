import { createApp } from 'vue'
import App from './App.vue'

/**
 * glob 从文件系统导入模块
 */
// const modules = import.meta.glob('./glob/*')
const modules = import.meta.globEager('./glob/*')
console.log(modules)
console.log(Object.entries(modules))

Object.entries(modules).forEach(([key, value]) => {

    // globEager：value就变成了具体的模块，不是异步模块了
    console.log(key,value)

    // value： () => import("/src/glob/a1.js")  // 动态导入函数,异步模块
    // value().then(module => {
    //     console.log(key, module.default)
    // })
})

createApp(App).mount('#app')
