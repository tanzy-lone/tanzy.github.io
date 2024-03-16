<template>
	<figure class="loader">
		<div class="dot white"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
		<div class="dot"></div>
	</figure>
</template>
<style scoped>
.loader {
	width: 6.25em;
	height: 6.25em;
	animation: rotate5123 2.4s linear infinite;
}

.white {
	inset: 0;
	background: white;
	opacity: 0;
	animation: flash 2.4s linear infinite;
}

.dot {
	position: absolute;
	margin: auto;
	width: 2.4em;
	height: 2.4em;
	border-radius: 100%;
	transition: all 1s ease;
}

.dot:nth-child(2) {
	top: 0;
	bottom: 0;
	left: 0;
	background: #f44;
	animation: dotsY 2.4s linear infinite;
}

.dot:nth-child(3) {
	top: 0;
	right: 0;
	left: 0;
	background: #fb3;
	animation: dotsX 2.4s linear infinite;
}

.dot:nth-child(4) {
	top: 0;
	right: 0;
	bottom: 0;
	background: #9c0;
	animation: dotsY 2.4s linear infinite;
}

.dot:nth-child(5) {
	right: 0;
	bottom: 0;
	left: 0;
	background: #33b5e5;
	animation: dotsX 2.4s linear infinite;
}

@keyframes rotate5123 {
	0% {
		transform: rotate(0);
	}

	10% {
		width: 6.25em;
		height: 6.25em;
	}

	66% {
		width: 2.4em;
		height: 2.4em;
	}

	100% {
		transform: rotate(360deg);
		width: 6.25em;
		height: 6.25em;
	}
}

@keyframes dotsY {
	66% {
		width: 2.4em;
		opacity: 0.1;
	}

	77% {
		width: 0;
		opacity: 1;
	}
}

@keyframes dotsX {
	66% {
		height: 2.4em;
		opacity: 0.1;
	}

	77% {
		height: 0;
		opacity: 1;
	}
}

@keyframes flash {
	33% {
		border-radius: 0%;
		opacity: 0;
	}

	55% {
		border-radius: 100%;
		opacity: 0.6;
	}

	66% {
		opacity: 0;
	}
}
</style>
