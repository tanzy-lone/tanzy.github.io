<template>
	<div class="loader"></div>
</template>
<style scoped>
.loader {
	position: relative;
	width: 2.5em;
	height: 2.5em;
	transform: rotate(165deg);
}

.loader::before,
.loader::after {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	display: block;
	width: 0.5em;
	height: 0.5em;
	border-radius: 0.25em;
	transform: translate(-50%, -50%);
}

.loader::before {
	animation: before8 2s infinite;
}

.loader::after {
	animation: after6 2s infinite;
}

@keyframes before8 {
	0% {
		width: 0.5em;
		box-shadow:
			1em -0.5em rgb(225 20 98 / 75%),
			-1em 0.5em rgb(111 202 220 / 75%);
	}

	35% {
		width: 2.5em;
		box-shadow:
			0 -0.5em rgb(225 20 98 / 75%),
			0 0.5em rgb(111 202 220 / 75%);
	}

	70% {
		width: 0.5em;
		box-shadow:
			-1em -0.5em rgb(225 20 98 / 75%),
			1em 0.5em rgb(111 202 220 / 75%);
	}

	100% {
		box-shadow:
			1em -0.5em rgb(225 20 98 / 75%),
			-1em 0.5em rgb(111 202 220 / 75%);
	}
}

@keyframes after6 {
	0% {
		height: 0.5em;
		box-shadow:
			0.5em 1em rgb(61 184 143 / 75%),
			-0.5em -1em rgb(233 169 32 / 75%);
	}

	35% {
		height: 2.5em;
		box-shadow:
			0.5em 0 rgb(61 184 143 / 75%),
			-0.5em 0 rgb(233 169 32 / 75%);
	}

	70% {
		height: 0.5em;
		box-shadow:
			0.5em -1em rgb(61 184 143 / 75%),
			-0.5em 1em rgb(233 169 32 / 75%);
	}

	100% {
		box-shadow:
			0.5em 1em rgb(61 184 143 / 75%),
			-0.5em -1em rgb(233 169 32 / 75%);
	}
}
</style>
