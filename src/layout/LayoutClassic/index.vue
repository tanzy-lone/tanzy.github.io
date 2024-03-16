<template>
	<div class="main">
		<el-container>
			<el-header>
				<div class="header-lf">
					<div class="logo flx-center">
						<img class="img" src="@/assets/img/main/logo.svg" alt="logo" />
						<span class="title">{{ APP_NAME }}</span>
					</div>
				</div>
				<MainLeft class="classic" />
			</el-header>
			<el-container>
				<el-aside width="210px">
					<MainMenu background-color="#fff" text-color="#303133" class="classic" :isShowHeader="false" />
				</el-aside>
				<el-container>
					<el-main>
						<MyTabs></MyTabs>
						<router-view> </router-view>
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import MyTabs from '@/base-ui/tabs/tabs.vue'
import { APP_NAME } from '@/config/index'
import MainLeft from '@/components/mainHeader/src/mainLeft.vue'
</script>

<style lang="less" scoped>
.el-header {
	display: flex;
	padding-left: 0;
	height: 48px;
	background-color: #001529 !important;

	.header-lf {
		display: flex;
		margin-right: 16px;
		width: 210px;
		height: 100%;

		.logo {
			display: flex;
			align-items: center;
			padding: 12px 5px 8px;
			height: 48px;
			flex-shrink: 0;
			color: #fff;

			img {
				margin: 0 3px;
				height: 100%;
			}

			.title {
				padding: 0 8px;
				white-space: nowrap;
				box-sizing: border-box;
			}
		}
	}
}

.main {
	position: relative;
	height: 100vh;
}

.el-container {
	height: 100%;
}

.el-aside {
	padding-right: 0;
	width: auto;
	height: 100%;
}

.el-header {
	display: flex;
	align-items: center;
	height: 49px;
	background-color: #fff;
}

.el-main {
	height: calc(100% - 48px);
	background-color: #f0f2f5;
}
</style>
