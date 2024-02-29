<template>
  <div class="circular-wrapper">
    <img
      src="@/assets/img/main/lottery/draw.png"
      alt=""
      class="drawImg"
      @click="rotateCirculat"
    />
    <div
      class="baseBg"
      :style="{
        transform: 'rotate(' + rotate + 'deg)',
        transition: rotateStatus ? 'all ' + duringTime + 's ease-in-out' : ''
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { getCircular } from '@/service/main/function/index'
import { ref } from 'vue'

const rotate = ref(0)
const rotateStatus = ref(false)
const duringTime = ref(6) //旋转的时间
const number = ref(8) //旋转的圈数
const rotateCirculat = async () => {
  if (rotateStatus.value) return

  rotateStatus.value = true

  //获取是否中奖和旋转角度
  const { data } = await getCircular()

  rotate.value = 360 * number.value + data.angle

  setTimeout(
    () => {
      rotateStatus.value = false
      rotate.value = rotate.value % 360
      alert(data.message)
    },
    duringTime.value * 1000 + 200
  )
}
</script>
<style lang="less" scoped>
.circular-wrapper {
  width: 500px;
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  background: url('@/assets/img/main/lottery/outBg.png') no-repeat;
  background-size: 100% 100%;

  &:after {
    content: '';
    display: block;
    margin-top: 100%;
  }

  .drawImg {
    width: 150px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;
  }
  .baseBg {
    background: url('@/assets/img/main/lottery/insideBg.png') no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    position: absolute;
    top: 25px;
    right: 25px;
    left: 25px;
    bottom: 25px;
  }
}
</style>
