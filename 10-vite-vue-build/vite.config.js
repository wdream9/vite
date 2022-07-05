import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// js构建目标支持的浏览器配置
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),legacy({
    targets:['defaults','not IE 11'] // defaults:默认支持权0.5%的浏览器以及最新的版本;不要再IE11上运行
  })],
  build:{
    target:'es2015'
  }
})
