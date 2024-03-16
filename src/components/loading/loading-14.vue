<template>
	<div class="loader">
		<div class="box-1"></div>
		<span>Loading</span>
	</div>
</template>
<style scoped>
.loader {
	position: relative;
}

.box-1 {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
	height: 120px;
	background-color: #fff;
	border-radius: 50%;
	box-shadow:
		rgb(17 17 26 / 10%) 0 1px 0,
		rgb(17 17 26 / 10%) 0 8px 24px,
		rgb(17 17 26 / 10%) 0 16px 48px;
	background-image: linear-gradient(135deg, #fff 0%, #6284ff 34%, #f00 100%);
	animation: rotate 3s linear infinite;
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

.box-1::before {
	content: '';
	position: absolute;
	inset: 15px;
	background: #f5f5f5;
	border-radius: 50%;
	box-shadow:
		rgb(204 219 232) 3px 3px 6px 0 inset,
		rgb(255 255 255 / 50%) -3px -3px 6px 1px inset;
}

.loader span {
	position: absolute;
	top: 65px;
	left: 30px;
	font-size: 12px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	text-align: center;
	color: black;
	letter-spacing: 2px;
	font-weight: 800;
	animation: text-animate412 3s linear infinite;
}

@keyframes text-animate412 {
	10% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
</style>
