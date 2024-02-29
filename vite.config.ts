import { defineConfig, loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取当前工作目录
  const root = process.cwd()
  // 获取环境变量
  const env = loadEnv(mode, root)
  console.log('env', env)
  return {
    // 项目根目录
    root,
    // 项目部署的基础路径
    base: './',
    // 全局引入less变量 解决默认情况下.vue文件中<style/>默认不能使用less变量
    css: {
      preprocessorOptions: {
        less: {
          // additionalData: `@import "@/styles/variable.less";`
        }
      }
    },
    plugins: [
      // Vue模板文件编译插件
      vue()
    ],
    define: {
      // enable hydration mismatch details in production build
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
    },
    // 运行后本地预览的服务器
    server: {
      // 是否开启https
      // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      host: true,
      // 开发环境预览服务器端口
      port: 9000,
      // 启动后是否自动打开浏览器
      open: false,
      // 是否开启CORS跨域
      cors: true,
      // 代理服务器
      // 帮助我们开发时解决跨域问题
      proxy: {
        // 这里的意思是 以/api开头发送的请求都会被转发到 http://xxx:9000
        '/api': {
          target: 'http://localhost:9000',
          // 改变 Host Header
          changeOrigin: true,
          // 发起请求时将 '/api' 替换为 ''
          rewrite: path => path.replace(/^\/api/, '')
        },
        '/mock/api': {
          target: 'http://localhost:9000',
          // 改变 Host Header
          changeOrigin: true
          // 发起请求时将 '/api' 替换为 ''
          //rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    },

    // 配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), //配置@路径
        '#': fileURLToPath(new URL('./types', import.meta.url))
      }
    }
  }
})
