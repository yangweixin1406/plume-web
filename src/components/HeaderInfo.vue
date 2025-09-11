<template>
  <div class="header-container">
    <div class="header-top">
      <img :src="icon" alt="">
      <span>{{ title }}</span>
    </div>

    <p class="header-bottom">技术服务电话：{{ serverPhone }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    icon: {
      type: String,
      default: require('@/static/images/business/header-icon.png')
    },
    title: {
      type: String,
      default: '认证方式'
    }
  },
  computed: {
    ...mapGetters(['serverPhone'])
  }
}
</script>

<style lang="scss">
.header-container {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header-top {
    font-size: 57px;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    img {
      width: 64px;
      height: 57px;
      margin-right: 18px;
    }
  }

  .header-bottom {
    font-size: 21px;
    color: rgba(#fff, .7);
  }
}
</style>