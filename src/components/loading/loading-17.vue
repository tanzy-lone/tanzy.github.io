<template>
	<div>
		<div class="loader"></div>
	</div>
</template>
<style scoped>
.loader {
	width: 50px;
	height: 50px;
	animation: rotate 1s infinite;
}

.loader::before,
.loader::after {
	display: block;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	content: '';
}

.loader::before {
	margin-bottom: 10px;
	background-color: #cb2025;
	box-shadow: 30px 0 0 #f8b334;
	animation: ball1 1s infinite;
}

.loader::after {
	animation: ball2 1s infinite;
	background-color: #00a096;
	box-shadow: 30px 0 0 #97bf0d;
}

@keyframes rotate {
	0% {
		-webkit-transform: rotate(0deg) scale(0.8);
		-moz-transform: rotate(0deg) scale(0.8);
	}

	50% {
		-webkit-transform: rotate(360deg) scale(1.2);
		-moz-transform: rotate(360deg) scale(1.2);
	}

	100% {
		-webkit-transform: rotate(720deg) scale(0.8);
		-moz-transform: rotate(720deg) scale(0.8);
	}
}

@keyframes ball1 {
	0% {
		box-shadow: 30px 0 0 #f8b334;
	}

	50% {
		margin-bottom: 0;
		box-shadow: 0 0 0 #f8b334;
		-webkit-transform: translate(15px, 15px);
		-moz-transform: translate(15px, 15px);
	}

	100% {
		margin-bottom: 10px;
		box-shadow: 30px 0 0 #f8b334;
	}
}

@keyframes ball2 {
	0% {
		box-shadow: 30px 0 0 #97bf0d;
	}

	50% {
		margin-top: -20px;
		box-shadow: 0 0 0 #97bf0d;
		-webkit-transform: translate(15px, 15px);
		-moz-transform: translate(15px, 15px);
	}

	100% {
		margin-top: 0;
		box-shadow: 30px 0 0 #97bf0d;
	}
}
</style>
