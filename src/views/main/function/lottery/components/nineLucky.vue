<template>
  <div class="nineLucky-wrapper">
    <div class="main-wrapper">
      <div
        class="item-wrapper text-center"
        v-for="(item, index) in nineList"
        :key="index"
        :class="{ active: option.index == item.index }"
      >
        <img
          v-if="item.imgUrl"
          :src="item.imgUrl"
          alt=""
          :class="index == 4 ? 'chart-wrapper' : 'baseImg'"
          @click="startDraw(index)"
        />
        <p v-if="item.title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getNineLucky } from '@/service/main/function/index'

const nineList = ref([
  {
    title: '精美大礼包',
    // imgUrl: '@/assets/lottery/gift.png',
    imgUrl: new URL('@/assets/img/main/lottery/gift.png', import.meta.url).href,
    index: 0
  },
  {
    title: '华为手机',
    // imgUrl: import('@/assets/lottery/phone.png'),
    imgUrl: new URL('@/assets/img/main/lottery/phone.png', import.meta.url)
      .href,
    index: 1
  },
  {
    title: '保时捷50元代金券',
    imgUrl: new URL('@/assets/img/main/lottery/coupon.png', import.meta.url),
    index: 2
  },
  {
    title: '谢谢参与',
    imgUrl: new URL('@/assets/img/main/lottery/sorry.png', import.meta.url),
    index: 7
  },
  {
    title: '',
    imgUrl: new URL('@/assets/img/main/lottery/nineDraw.png', import.meta.url),
    index: -99
  },
  {
    title: '劳斯莱斯雨伞',
    imgUrl: new URL('@/assets/img/main/lottery/umbrella.png', import.meta.url),
    index: 3
  },
  {
    title: '9999元现金红包',
    imgUrl: new URL('@/assets/img/main/lottery/money.png', import.meta.url),
    index: 6
  },
  {
    title: 'iPhone',
    imgUrl: new URL('@/assets/img/main/lottery/iPhone.png', import.meta.url),
    index: 5
  },
  {
    title: '888元现金红包',
    imgUrl: new URL('@/assets/img/main/lottery/money.png', import.meta.url),
    index: 4
  }
])
const rotate = ref(false)
const option = ref({
  speed: 200, //初始转动速度
  times: 0, //当前转动次数
  count: 8, //奖品个数
  index: -1, //起始位置
  prize: -1, //中奖位置
  cycle: 50 //总转的圈数
})
const message = ref('')

const startRoll = () => {
  option.value.times++
  option.value.index++ //转动的位置+1
  let timer
  if (option.value.index > option.value.count - 1) {
    option.value.index = 0
  }
  //这里加上 8  为了最后8圈开始降速
  if (
    option.value.times > option.value.cycle + 8 &&
    option.value.prize == option.value.index
  ) {
    clearTimeout(timer)
    option.value.prize = -1
    option.value.times = 0
    option.value.speed = 200
    rotate.value = false
    setTimeout(() => {
      alert(message.value)
    }, 200)
  } else {
    //控制速度
    if (option.value.times < option.value.cycle) {
      option.value.speed -= 10
    } else {
      option.value.speed += 30
    }

    if (option.value.speed < 40) {
      option.value.speed = 40
    }
    timer = setTimeout(startRoll, option.value.speed)
  }
}

const startDraw = async (index: number) => {
  if (index == 4) {
    if (rotate.value) return
    rotate.value = true
    const { data } = await getNineLucky()
    console.log('data', data)
    option.value.prize = data.number
    message.value = data.message
    startRoll()
  }
}
</script>
<style lang="less" scoped>
.nineLucky-wrapper {
  width: 500px;
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  background: url('@/assets/img/main/lottery/nine1.png') no-repeat;
  background-size: 100% 100%;
  animation: toggleBg 0.5s ease infinite;
  position: relative;
  &:after {
    content: '';
    display: block;
    margin-top: 100%;
  }
  .main-wrapper {
    position: absolute;
    top: 35px;
    left: 40px;
    right: 40px;
    bottom: 50px;
    display: grid;
    grid-template-columns: calc(33.3% - 5px) calc(33.3% - 5px) calc(33.3% - 5px);
    grid-template-rows: calc(33.3% - 5px) calc(33.3% - 5px) calc(33.3% - 5px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    .item-wrapper {
      background: url('@/assets/img/main/lottery/baseBg1.png') no-repeat;
      background-size: 100% 100%;
      .baseImg {
        width: 65px;
        height: 65px;
        margin: 15px auto 5px;
      }
    }
    .chart-wrapper {
      width: 100%;
    }
    .active {
      background: url('@/assets/img/main/lottery/baseBg2.png') no-repeat;
      background-size: 100% 100%;
      color: #fff;
    }
  }
}

@keyframes toggleBg {
  0% {
    background-image: url('@/assets/img/main/lottery/nine1.png');
  }
  100% {
    background-image: url('@/assets/img/main/lottery/nine2.png');
  }
}
</style>
