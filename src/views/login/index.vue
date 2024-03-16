<template>
	<div class="login">
		<div class="login-box">
			<h2 class="login_title">Login</h2>
			<el-form
				:model="formOption"
				label-width="100"
				:rules="rules"
				ref="formRef"
				size="large"
				hide-required-asterisk
			>
				<el-form-item label="username" prop="name" ref="formItemRef">
					<el-input v-model="formOption.name" @keyup.enter="handleSubmit" />
				</el-form-item>

				<el-form-item label="password" prop="password" ref="formItemRef">
					<el-input type="password" v-model="formOption.password" show-password @keyup.enter="handleSubmit" />
				</el-form-item>

				<div class="mp">
					<el-checkbox v-model="isMemoryPassword">记住密码</el-checkbox>
					<el-link type="primary">忘记密码？</el-link>
				</div>

				<el-form-item class="submit">
					<el-button type="primary" @click="handleSubmit">Login</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { IFormOptions } from './types'
import { ElForm } from 'element-plus'

import useLoginStore from '@/store/login'
import localCache from '@/utils/localCache'

const formOption = reactive<IFormOptions>({ name: 'coderwhy', password: '123456' })
const formRef = ref<InstanceType<typeof ElForm>>()
const formItemRef = ref()
const rules = reactive({
	name: [
		{
			required: true,
			message: '用户必传的内容',
			trigger: 'blur'
		},
		{
			pattern: /^[a-z0-9]{5,10}$/,
			message: '用户名必须是5-10位字母或者是数子组成',
			trigger: 'blur'
		}
	],
	password: [
		{
			required: true,
			message: '请输入密码',
			trigger: 'blur'
		},
		{
			pattern: /^[a-z0-9]{6,16}$/,
			message: '密码必须为6-16位字母',
			trigger: 'blur'
		}
	]
})
const isMemoryPassword = ref(false)
const loginStore = useLoginStore()

const handleSubmit = () => {
	formRef.value?.validate((valid: boolean) => {
		if (valid) {
			loginStore.loginAction(formOption)
			if (isMemoryPassword) {
				localCache.setCache('name', formOption.name)
				localCache.setCache('password', formOption.password)
			} else {
				localCache.deleteCache('name')
				localCache.deleteCache('password')
			}
		}
	})
}
</script>

<style lang="less" scoped>
.login {
	position: relative;
	width: 100vw;
	height: 100vh;
	font-family: 'Open Sans', sans-serif;
	background: #092756;
	background: linear-gradient(to right, #f7d1d7, #bfe3f1);
}

.login-box {
	position: absolute;
	top: 50%;
	left: 50%;
	padding: 30px 20px;
	width: 400px;
	background-color: rgb(255 255 255 / 50%);
	border-radius: 12px;
	transform: translate(-50%, -50%);

	.login_title {
		margin-bottom: 40px;
		text-align: center;
		color: #fff;
	}

	.submit {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 25px;

		.el-button {
			padding: 18px 16px;
			margin-left: 20px;
			width: 120px;
			color: #fff;
			background-color: #409eff;
			border-color: #409eff;
			border-radius: 8px;
		}
	}

	.mp {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 72px;
	}
}
</style>
