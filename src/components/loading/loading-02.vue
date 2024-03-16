<template>
	<div class="three-body">
		<div class="three-body__dot"></div>
		<div class="three-body__dot"></div>
		<div class="three-body__dot"></div>
	</div>
</template>
<style scoped>
.three-body {
	--uib-size: 35px;
	--uib-speed: 0.8s;
	--uib-color: #5d3fd3;

	position: relative;
	display: inline-block;
	width: var(--uib-size);
	height: var(--uib-size);
	animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
}

.three-body__dot {
	position: absolute;
	width: 30%;
	height: 100%;
}

.three-body__dot::after {
	position: absolute;
	padding-bottom: 100%;
	width: 100%;
	height: 0%;
	background-color: var(--uib-color);
	border-radius: 50%;
	content: '';
}

.three-body__dot:nth-child(1) {
	bottom: 5%;
	left: 0;
	transform: rotate(60deg);
	transform-origin: 50% 85%;
}

.three-body__dot:nth-child(1)::after {
	bottom: 0;
	left: 0;
	animation: wobble1 var(--uib-speed) infinite ease-in-out;
	animation-delay: calc(var(--uib-speed) * -0.3);
}

.three-body__dot:nth-child(2) {
	right: 0;
	bottom: 5%;
	transform: rotate(-60deg);
	transform-origin: 50% 85%;
}

.three-body__dot:nth-child(2)::after {
	bottom: 0;
	left: 0;
	animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15) ease-in-out;
}

.three-body__dot:nth-child(3) {
	bottom: -5%;
	left: 0;
	transform: translateX(116.666%);
}

.three-body__dot:nth-child(3)::after {
	top: 0;
	left: 0;
	animation: wobble2 var(--uib-speed) infinite ease-in-out;
}

@keyframes spin78236 {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes wobble1 {
	0%,
	100% {
		transform: translateY(0%) scale(1);
		opacity: 1;
	}

	50% {
		transform: translateY(-66%) scale(0.65);
		opacity: 0.8;
	}
}

@keyframes wobble2 {
	0%,
	100% {
		transform: translateY(0%) scale(1);
		opacity: 1;
	}

	50% {
		transform: translateY(66%) scale(0.65);
		opacity: 0.8;
	}
}
</style>
