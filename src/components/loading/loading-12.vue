<template>
	<div class="loader"></div>
</template>
<style scoped>
.loader {
	width: 80px;
	height: 80px;
	border-radius: 100%;
	border-top: 8px solid hotpink;
	border-bottom: 8px solid #f55951;
	border-left: 8px solid #3a9efd;
	border-right: 8px solid #1fff7c;
	animation: looper 5s infinite ease-in-out;
}

@keyframes looper {
	0% {
		border-color: hotpink #3a9efd #1fff7c #f55951;
		border-radius: 100%;
	}

	10% {
		border-color: #f55951;
		border-radius: 0% 100% 0% 0%;
		transform: rotate(150deg);
	}

	20% {
		border-color: #3a9efd;
		border-radius: 0%;
	}

	30% {
		border-color: #1fff7c;
		border-radius: 0%;
	}

	40% {
		border-color: #3a9efd;
		border-radius: 0%;
	}

	50% {
		border-color: #f55951;
		border-radius: 100%;
	}

	90% {
		border-style: dashed;
		border-radius: 100%;
		transform: rotate(360deg);
	}

	100% {
		border-color: hotpink #3a9efd #1fff7c #f55951;
		border-radius: 100%;
		transform: rotate(0deg);
	}
}
</style>
