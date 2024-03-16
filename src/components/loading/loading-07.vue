<template>
	<div class="loader"></div>
</template>
<style scoped>
.loader {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}

.loader::before,
.loader::after {
	position: absolute;
	width: 8em;
	height: 8em;
	border: 1em solid #0060fa;
	border-radius: 50%;
	content: '';
	animation: loader_79178 2s linear infinite;
}

.loader::after {
	opacity: 0;
	animation-delay: 1s;
}

@keyframes loader_79178 {
	0% {
		border: 1em solid #0060fa;
		transform: scale(0);
		opacity: 1;
	}

	100% {
		border: 0 solid #0060fa;
		transform: scale(1);
		opacity: 0;
	}
}
</style>
