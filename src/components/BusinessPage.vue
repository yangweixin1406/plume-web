<template>
  <div class="business-page">
    <div class="business-page-top">
      <DeviceInfo />

      <HeaderInfo class="business-header" :icon="headerIcon" :title="headerTitle" />

      <div style="display: flex; align-items: center;">
        <DateInfo />
  
        <ConnectInfo />
      </div>
    </div>
    <slot></slot>

    <CountdownDialog v-if="showCountDialog" @finish="$router.push('/')" @close="handleClose" />
  </div>
</template>

<script>
import DeviceInfo from './DeviceInfo.vue'
import ConnectInfo from './ConnectInfo.vue'
import HeaderInfo from './HeaderInfo.vue'
import DateInfo from './DateInfo.vue'
import CountdownDialog from '@/components/CountdownDialog.vue';
export default {
  components: {
    DeviceInfo,
    ConnectInfo,
    HeaderInfo,
    DateInfo,
    CountdownDialog
  },
  props: {
    headerIcon: {
      type: String,
      default: undefined
    },
    headerTitle: {
      type: String,
      default: undefined
    },
    needCountDownDialog: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showCountDialog: false,
      dialogTimer: null
    }
  },
  created() {
    this.countDownTimer()
  },
  mounted() {
    document.addEventListener('click', this.countDownTimer)
    document.addEventListener('touchstart', this.countDownTimer)
    document.addEventListener('scroll', this.countDownTimer)
  },
  beforeDestroy() {
    this.clearTimer()
    document.removeEventListener('click', this.resetTimer)
    document.removeEventListener('touchstart', this.resetTimer)
    document.removeEventListener('scroll', this.resetTimer)
  },
  methods: {
    countDownTimer() {
      this.clearTimer()
      if (!this.needCountDownDialog) return
      this.dialogTimer = setTimeout(() => {
        this.showCountDialog = true
      }, 60000)
    },
    handleClose() {
      this.showCountDialog = false
      this.clearTimer()
    },
    clearTimer() {
      this.dialogTimer && clearTimeout(this.dialogTimer)
    },
  }
}
</script>

<style lang="scss">
.business-page {
  width: 100%;
  height: 100vh;
  background-image: url('~@/static/images/business/top-bg.png'), url("~@/static/images/passImages/page_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 290px, 100% 100%;
  .business-page-top {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    position: relative;
    .business-header {
      position: absolute;
      top: 10px;
      left: calc(50% - 160px);
    }
  }
}
</style>