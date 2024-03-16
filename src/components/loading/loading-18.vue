<template>
	<div class="loading-container">
		<div class="loading-item"><i></i><i></i></div>
	</div>
	<!-- Container -->
</template>
<style scoped>
.loading-item {
	position: relative;
	margin: 0 auto;
	width: 20px;
	height: 20px;
	animation: spin 1.5s linear infinite;
}

.loading-item i {
	position: absolute;
	display: block;
	width: 20px;
	height: 20px;
	border-radius: 25px;
}

.loading-item i::before,
.loading-item i::after {
	position: absolute;
	display: block;
	width: inherit;
	height: inherit;
	border-radius: inherit;
	content: '';
}

.loading-item i:first-child::before {
	background: rgb(52 149 221 / 90%);
	animation: rotate-top-left 1.5s linear infinite;
}

.loading-item i:first-child::after {
	background: rgb(225 73 44 / 90%);
	animation: rotate-top-right 1.5s linear infinite;
}

.loading-item i:last-child::before {
	background: rgb(249 206 43 / 90%);
	animation: rotate-bottom-left 1.5s linear infinite;
}

.loading-item i:last-child::after {
	background: rgb(0 153 117 / 90%);
	animation: rotate-bottom-right 1.5s linear infinite;
}

.loading-text {
	margin-top: 30px;
	text-align: center;
	color: #fff;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-top-right {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
		transform-origin: 20% 20%;
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-top-left {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
		transform-origin: 80% 20%;
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes rotate-bottom-right {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
		transform-origin: 80% 80%;
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-bottom-left {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
		transform-origin: 20% 80%;
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-top-right {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
		transform-origin: 20% 20%;
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-top-left {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
		transform-origin: 80% 20%;
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes rotate-bottom-right {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(-180deg);
		transform-origin: 80% 80%;
	}

	100% {
		transform: rotate(-360deg);
	}
}

@keyframes rotate-bottom-left {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
		transform-origin: 20% 80%;
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>
