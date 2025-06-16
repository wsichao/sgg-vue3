import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')], // 指定需要缓存的图标文件夹
      symbolId: 'icon-[dir]-[name]' // 指定symbolId格式
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', 'css', '.vue', '.json'], // 导入时想要省略的扩展名列表
    alias: {
      "@": resolve(__dirname, 'src'),
      "@elicon": "@element-plus/icons-vue",
      "@alicon": "vites-plugin-icons"
    }
  },
  // scss全局变量配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        // 修改后的导入语句
        additionalData: '@import "@/styles/variable.scss";\n@import "@/styles/reset.scss";'
      }
    }
  }
})
