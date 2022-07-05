import { createApp } from 'vue'
import App from './App.vue'

import {createRouter}  from './router/Routers'

createApp(App).use(createRouter()).mount('#app')
