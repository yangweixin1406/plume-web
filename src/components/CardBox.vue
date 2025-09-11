<template>
  <div class="card-box" :style="{ height: height }">
    <p class="c-b-title">{{ title }} <span class="c-b-tip">{{ titleTip }}</span></p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardBox",
  props: {
    title: {
      type: String,
      default: '待用印订单'
    },
    titleTip: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '348px'
    }
  }
}
</script>

<style scoped lang="scss">
.card-box {
  width: 720px;
  background: rgba(16, 181, 255, 0.16);
  border-radius: 15px;
  padding: 30px 30px 0 30px;

  .c-b-title {
    height: 36px;
    line-height: 36px;
    font-size: 36px;
    color: #ffffff;
    letter-spacing: 2px;

    .c-b-tip {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
}

</style>