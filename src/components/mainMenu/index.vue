<template>
	<div class="mainMenu" :style="{ width: themeConfig.isCollapse ? '60px' : '210px' }">
		<div class="menu-header" v-if="isShowHeader" style="{ color: '#fff' }">
			<img class="img" src="@/assets/img/main/logo.svg" />
			<span class="title" v-if="!themeConfig.isCollapse">{{ APP_NAME }}</span>
		</div>

		<el-scrollbar
			:style="{
				height: props.isShowHeader ? 'calc(100% - 48px)' : '100%',
				backgroundColor: props.backgroundColor
			}"
		>
			<el-menu
				:default-active="activeId"
				class="el-menu-vertical-demo"
				:collapse="themeConfig.isCollapse"
				:background-color="props.backgroundColor"
				:active-text-color="props.activeTextColor"
				:text-color="props.textColor"
				:collapse-transition="false"
				unique-opened
			>
				<template v-for="item in loginStore.menuList" :key="item.id">
					<!-- 可展开的一级标题 -->
					<template v-if="item.type === 1">
						<el-sub-menu :index="item.url">
							<template #title>
								<i :class="['iconfont', item.uicon]"></i>
								<span>{{ item.name }}</span>
							</template>

							<!-- 二级标题 -->
							<template v-for="val in item.children" :key="val.id">
								<!-- 不可展开 -->
								<el-menu-item :index="val.id + ''" @click="handleToRoute(val)">
									<template v-if="val.name !== 'github' && val.name !== 'gitee'">
										<i :class="['iconfont', val.uicon]"></i>
										<span>{{ val.name }}</span>
									</template>
									<template v-else>
										<span>{{ val.name }}</span>
									</template>
								</el-menu-item>
							</template>
						</el-sub-menu>
					</template>
					<!-- 不可展开的一级菜单 -->
					<template v-else>
						<el-menu-item :index="item.id + ''" @click="handleToRoute(item)">
							<i :class="[item.uicon, 'iconfont']" v-if="item.uicon"></i>
							<span>{{ item.name }}</span>
						</el-menu-item>
					</template>
				</template>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mapPathToMenu } from '@/utils/mapRouteToMenu'
import router from '@/router'
import useLoginStore from '@/store/login'
import { APP_NAME } from '@/config'
import useGlobalStore from '@/store/globe'

const props = defineProps({
	collapse: {
		type: Boolean,
		default: false
	},
	isShowHeader: {
		type: Boolean,
		default: true
	},
	backgroundColor: {
		type: String,
		default: ''
	},
	activeTextColor: {
		type: String,
		default: ''
	},
	textColor: {
		type: String,
		default: ''
	}
})
const globalStore = useGlobalStore()
const themeConfig = computed(() => {
	return globalStore.themeConfig
})
const loginStore = useLoginStore()
const route = useRoute()

const currPath = computed(() => {
	return route.path
})
const menuActiveRoute = computed(() => {
	return mapPathToMenu(loginStore.menuList, currPath.value)
})

const activeId = ref(menuActiveRoute.value?.id + '')
watch(route, () => {
	activeId.value = menuActiveRoute.value?.id + ''
})

const handleToRoute = (val: any) => {
	if (val.name === 'github' || val.name === 'gitee') {
		return (window.location.href = val.url)
	}
	router.push(val.url)
}
</script>

<style lang="less" scoped>
.mainMenu {
	user-select: none;
	height: 100%;
	overflow: hidden;
	&.vertical {
		background-color: #191a20;
		:deep(.el-scrollbar) {
			.el-menu {
				background-color: #191a20;
				.el-menu-item {
					color: #bdbdc0;
					&:hover {
						// color: #fff;
						background-color: rgb(20, 21, 26);
					}
					&.is-active {
						color: #fff;
						background-color: #060708;
					}
				}
			}

			// item左边框
			.el-menu,
			.el-menu--popup {
				.el-menu-item {
					&.is-active {
						&::before {
							position: absolute;
							top: 0;
							bottom: 0;
							left: 0;
							width: 4px;
							content: '';
							background: var(--el-color-primary);
						}
					}
				}
			}
			// 一级可折叠标题 里面tiltle颜色
			.el-sub-menu {
				.el-sub-menu__title {
					color: #bdbdc0;
					&:hover {
						background-color: rgb(20, 21, 26);
					}
				}
			}

			// 折叠后图标颜色
			.el-menu--collapse {
				.el-sub-menu {
					&.is-active {
						.el-sub-menu__title {
							.iconfont {
								// background-color: rgb(20, 21, 26);
								color: var(--el-color-primary);
							}
						}
					}
				}
			}
		}
	}
	&.classic {
		:deep(.el-scrollbar) {
			.el-menu {
				.el-menu-item {
					&.is-active {
						color: var(--el-color-primary-light-1);
						background-color: var(--el-color-primary-light-9);
					}
				}
			}
			// item左边框
			.el-menu,
			.el-menu--popup {
				.el-menu-item {
					&.is-active {
						&::before {
							position: absolute;
							top: 0;
							bottom: 0;
							left: 0;
							width: 4px;
							content: '';
							background: var(--el-color-primary);
						}
					}
				}
			}
			.el-menu--collapse {
				.el-sub-menu {
					&.is-active {
						.el-sub-menu__title {
							background-color: var(--el-color-primary-light-9);
							.iconfont {
								color: var(--el-color-primary-light-1);
							}
						}
					}
				}
			}
		}
	}
	.menu-header {
		display: flex;
		flex-shrink: 0;
		height: 48px;
		padding: 12px 10px 8px 10px;
		display: flex;
		align-items: center;
		color: #fff;
		img {
			height: 100%;
			margin: 0 7px;
		}
		.title {
			flex: 1;
			margin-left: 15px;
			white-space: nowrap;
		}
	}
	.el-menu {
		border-right: 0;
		.el-sub-menu {
			.iconfont {
				font-size: 18px;
				margin-right: 10px;
			}
		}
	}
}

.vertical .el-menu--popup .el-menu-item.is-active::before {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 4px;
	content: '';
	background-color: var(--el-color-primary);
}

.el-menu--vertical .el-menu-item.is-active {
	// color: #fff;
	color: var(--el-color-primary-light-1);
	background-color: var(--el-color-primary-light-9);
}
.el-menu-item .iconfont {
	margin-right: 5px;
}
</style>
