import { defineConfig, loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
		base: '/yl_manager/',
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
			vue(),
			// jsx文件编译插件
			vueJsx(),
			// 开启ElementPlus自动引入CSS
			ElementPlus({}),
			viteMockServe({
				// 如果接口为 /mock/xxx 以 mock 开头就会被拦截响应配置的内容
				mockPath: './src/mock' // 数据模拟需要拦截的请求起始 URL
			}),
			// 自动引入组件及ICON
			AutoImport({
				// 定义需要自动引入的框架
				imports: ['vue', 'vue-router', 'pinia'],
				// 处理eslint
				eslintrc: {
					enabled: true
				},
				resolvers: [IconsResolver(), ElementPlusResolver()],
				dts: fileURLToPath(new URL('./types/auto-imports.d.ts', import.meta.url))
			}),
			// 自动注册组件
			Components({
				resolvers: [IconsResolver(), ElementPlusResolver()],
				dts: fileURLToPath(new URL('./types/auto-imports.d.ts', import.meta.url))
			}),
			// 自动安装图标
			Icons({
				autoInstall: true
			})
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
					target: 'http://123.207.32.32:5000',
					// 改变 Host Header
					changeOrigin: true,
					// 发起请求时将 '/api' 替换为 ''
					rewrite: (path) => path.replace(/^\/api/, '')
				},
				'/mock/api': {
					target: 'http://localhost:8000',
					// 改变 Host Header
					changeOrigin: true
					// 发起请求时将 '/api' 替换为 ''
					//rewrite: (path) => path.replace(/^\/api/, ""),
				}
			}
		},
		// 打包配置
		// build: {
		// 	// 关闭 sorcemap 报错不会映射到源码
		// 	sourcemap: false,
		// 	// 打包大小超出 400kb 提示警告
		// 	rollupOptions: {
		// 		// 打包入口文件 根目录下的 index.html
		// 		// 也就是项目从哪个文件开始打包
		// 		input: {
		// 			index: fileURLToPath(new URL('./index.html', import.meta.url))
		// 		},
		// 		// 将会在每个文件发现的第一个副作用打印到控制台
		// 		// 副作用包括 DOM的更新 操作等
		// 		experimentalLogSideEffects: true,
		// 		treeshake: {
		// 			// safest recommended smallest
		// 			// smallest 尽可能合并 也就是尽可能的进行tree shaking  将没用的代码删除
		// 			preset: 'recommended'
		// 			// propertyReadSideEffects: true
		// 		}
		// 	}
		// },
		// 配置别名
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'), //配置@路径
				'#': fileURLToPath(new URL('./types', import.meta.url))
			}
		}
	}
})
