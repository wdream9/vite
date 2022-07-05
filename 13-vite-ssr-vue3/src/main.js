// import { createApp } from 'vue'
// import App from './App.vue'

// import {createRouter}  from './router/Routers'

// createApp(App).use(createRouter()).mount('#app')
// 


/**
 * ssr 服务端渲染
 */
import { createSSRApp } from 'vue'
import { createRouter } from './router/Routers';
import App from './App.vue'

export function createApp(){
    const app = createSSRApp(App);
    const router = createRouter()
    app.use(router)

}