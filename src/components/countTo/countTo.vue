<template>
	<div class="countTo" :style="{ color }">{{ value }}</div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect, unref, onMounted, watch } from 'vue'
import { useTransition, TransitionPresets } from '@vueuse/core'
import { isNumber } from '@/utils/tools'

const props = defineProps({
	startVal: { type: Number, default: 0 },
	endVal: { type: Number, default: 99 },
	duration: { type: Number, default: 1000 },
	autoplay: { type: Boolean, default: true },
	cutting: { type: Boolean, default: false },
	decimals: {
		type: Number,
		default: 0,
		validator(value: number) {
			return value >= 0
		}
	},
	prefix: { type: String, default: '' },
	suffix: { type: String, default: '' },
	separator: { type: String, default: ',' },
	decimal: { type: String, default: '.' },
	/**
	 * font color
	 */
	color: { type: String },
	/**
	 * Turn on digital animation
	 */
	useEasing: { type: Boolean, default: true },
	/**
	 * Digital animation
	 */
	transition: { type: String, default: 'linear' }
})
const emit = defineEmits(['onFinished', 'onStarted'])
const source = ref(props.startVal)
const disabled = ref(false)
let outputValue = useTransition(source)
const value = computed(() => formatNumber(unref(outputValue)))

watchEffect(() => {
	source.value = props.startVal
})

watch([() => props.startVal, () => props.endVal], () => {
	if (props.autoplay) {
		start()
	}
})
onMounted(() => {
	props.autoplay && start()
})

function start() {
	run()
	source.value = props.endVal
}

function run() {
	outputValue = useTransition(source, {
		disabled,
		duration: props.duration,
		onFinished: () => emit('onFinished'),
		onStarted: () => emit('onStarted'),
		...(props.useEasing ? { transition: TransitionPresets[props.transition] } : {})
	})
}

function formatNumber(num: any) {
	if (!num && num !== 0) {
		return ''
	}
	const { decimals, decimal, separator, suffix, prefix } = props
	num = Number(num).toFixed(decimals)
	num += ''

	const x = num.split('.')
	let x1 = x[0]
	const x2 = x.length > 1 ? decimal + x[1] : ''

	const rgx = /(\d+)(\d{3})/
	if (props.cutting) {
		if (separator && !isNumber(separator)) {
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + separator + '$2')
			}
		}
	} else {
		if (separator && !separator) {
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + separator + '$2')
			}
		}
	}

	return prefix + x1 + x2 + suffix
}
</script>

<style lang="less" scoped></style>
