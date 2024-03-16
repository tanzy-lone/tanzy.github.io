<template>
	<div class="profile-activity">
		<div class="user-comment-wrapper">
			<div class="commenter-infos">
				<img
					class="img-circle"
					:src="'https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg' + avatarPrefix"
					alt=""
				/>
				<span class="username text-muted">Iron Man</span>
				<span class="description">Shared publicly - 7:30 PM today</span>
			</div>
			<div class="comment-informations ellipsis">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eos eveniet sapiente cum, dolore
				architecto quaerat porro consectetur molestiae. Officia.
			</div>
			<div class="comment-tools">
				<span class="icon"><i class="iconfont icon-share"></i>share</span>
				<span class="icon" @click="handleActive"><i class="iconfont icon-like"></i>like</span>
			</div>
		</div>
		<div class="user-comment-wrapper">
			<div class="commenter-infos">
				<img
					class="img-circle"
					:src="'https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg' + avatarPrefix"
					alt=""
				/>
				<span class="username text-muted">Captain American</span>
				<span class="description">Sent you a message - yesterday</span>
			</div>
			<div class="comment-informations ellipsis">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo magni expedita, minima sunt numquam
				obcaecati quibusdam error soluta ullam maxime. Ut velit quo deserunt aliquam ad itaque ullam tempore
				dolor?
			</div>
			<div class="comment-tools">
				<span class="icon"><i class="iconfont icon-share"></i>share</span>
				<span class="icon" @click="handleActive"><i class="iconfont icon-like"></i>like</span>
			</div>
		</div>
		<div class="user-comment-wrapper">
			<div class="commenter-infos">
				<img
					class="img-circle"
					:src="'https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg' + avatarPrefix"
					alt=""
				/>
				<span class="username text-muted">Spider Man</span>
				<span class="description">Posted 4 photos - 2 days ago</span>
			</div>
			<div class="carousel-wrapper">
				<Carousel :img-list="carouselImages">
					<template #default="{ data }">
						<img :src="data + carouselPrefix" class="image" />
					</template>
				</Carousel>
			</div>
			<div class="comment-tools">
				<span class="icon"><i class="iconfont icon-share"></i>share</span>
				<span class="icon" @click="handleActive"><i class="iconfont icon-like"></i>like</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Carousel from '@/base-ui/carousel/carousel.vue'

const carouselImages = reactive([
	'https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg',
	'https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg',
	'https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg',
	'https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg'
])
const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/h/440'

const handleActive = (e: any) => {
	const target = e.target
	if (target.classList.contains('active')) {
		target.classList.remove('active')
		return
	}
	target.classList.add('active')
}
</script>

<style lang="less" scoped>
.profile-activity {
	.user-comment-wrapper {
		padding: 8px 0 20px;
		border-bottom: 1px solid #ccc;

		.commenter-infos {
			overflow: hidden;

			img {
				float: left;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				vertical-align: middle;
			}

			.username,
			.description {
				display: block;
				margin-left: 50px;
				font-size: 16px;
				line-height: 1.5;
			}

			.username {
				color: #000;
			}

			.description {
				font-size: 12px;
				color: #666;
			}
		}

		.comment-informations {
			line-height: 1.6;
			margin-top: 8px;
			color: #666;
		}

		.comment-tools {
			display: flex;
			margin-top: 12px;
			user-select: none;

			span {
				display: flex;
				align-items: center;

				&.active {
					color: red;
				}
			}
		}
	}
}

.ellipsis {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	-webkit-line-clamp: 2;
	text-overflow: ellipsis;
}

.icon {
	cursor: pointer;
	padding: 0 5px;
	font-size: 14px;
	color: #666;
}

.iconfont {
	position: relative;
	top: 1px;
	margin-right: 3px;
}
</style>
