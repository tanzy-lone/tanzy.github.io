<template>
	<div class="main">
		<el-container>
			<el-aside width="210px">
				<MainMenu class="vertical" :collapse="isCollapse" />
			</el-aside>

			<el-container>
				<el-header>
					<MainHeader @handle-collapse="clickCollapse" />
				</el-header>
				<MyTabs></MyTabs>
				<el-main>
					<router-view> </router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import MainMenu from '@/components/mainMenu/index.vue'
import MainHeader from '@/components/mainHeader/src/mainLeft.vue'
import MyTabs from '@/base-ui/tabs/tabs.vue'
import { ref } from 'vue'

const isCollapse = ref(false)

const clickCollapse = (isFold: boolean) => {
	isCollapse.value = isFold
}
</script>

<style lang="less" scoped>
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
