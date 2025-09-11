<template>
  <div
    class="button-wrap"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      background,
      'font-size': `${fontSize}px`,
      'border-radius': `${height / 2}px`
    }">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '首页'
    },
    width: {
      type: [Number, String],
      default: 195
    },
    height: {
      type: [Number, String],
      default: 75
    },
    background: {
      type: String,
      default: 'linear-gradient( 270deg, #45B7FB 0%, #2681FA 100%)'
    },
    fontSize: {
      type: [Number, String],
      default: 33
    }
  }
}
</script>

<style lang="scss">
.button-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 33px;
  color: #fff;
  border-radius: 38px;
}
</style>