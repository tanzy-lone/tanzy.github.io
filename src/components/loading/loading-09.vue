<template>
	<div class="loader">
		<div v-for="item in 4" :key="item" />
	</div>
</template>
<style scoped>
.loader {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
	height: 120px;
}

.loader div {
	position: absolute;
	width: 30px;
	height: 30px;
	animation: move 4s infinite;
}

.loader div:nth-child(1) {
	background-color: rgb(158 136 246);
	box-shadow: rgb(158 136 246) 0 7px 29px 0;
	transform: translate(-30px, -30px);
	animation-delay: -1s;
}

.loader div:nth-child(2) {
	background-color: rgb(97 183 253);
	box-shadow: rgb(97 183 253) 0 7px 29px 0;
	transform: translate(30px, -30px);
	animation-delay: -2s;
}

.loader div:nth-child(3) {
	background-color: rgb(95 249 175);
	box-shadow: rgb(95 249 175) 0 7px 29px 0;
	transform: translate(30px, 30px);
	animation-delay: -3s;
}

.loader div:nth-child(4) {
	background-color: rgb(243 171 89);
	box-shadow: rgb(243 171 89) 0 7px 29px 0;
	transform: translate(-30px, 30px);
	animation-delay: -4s;
}

@keyframes move {
	0% {
		transform: translate(-30px, -30px);
	}

	25% {
		transform: translate(30px, -30px);
	}

	50% {
		transform: translate(30px, 30px);
	}

	75% {
		transform: translate(-30px, 30px);
	}

	100% {
		transform: translate(-30px, -30px);
	}
}
</style>
