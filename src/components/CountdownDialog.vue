<template>
  <el-dialog
    class="count-down"
    title=""
    :visible.sync="dialogShow"
    center
    :showClose="false">
    <div class="count-down-inner">
      <svg ref="svg" width="400" height="400" viewbox="0 0 400 400">
        <circle cx="200" cy="200" r="160" stroke-width="20" stroke="" fill="none"></circle>
        <circle class="run-circle" cx="240" cy="200" r="160" stroke-width="20" stroke-dasharray="1000" stroke="#0BF6FF" fill="none" transform="matrix(0,-1,1,0,0,440)"></circle>
      </svg>
      <div class="count-down-mask">{{ second }}</div>
    </div>
    <p class="count-down-tip">{{ second }}s自动返回首页</p>
    <img class="count-close" src="@/static/images/indexImages/close.svg" alt="" @click="close">
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogShow: true,
      second: 10,
      timer: null
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.second--
      if (this.second <= 0) {
        clearInterval(this.timer)
        return this.$emit('finish')
      }
    }, 1000)
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
  .count-down {
    display: flex;
    align-items: center;
    justify-content: center;
    .el-dialog {
      margin: 0 !important;
      width: 50% !important;
      border-radius: 30px;
      background-color: rgba(#1D386B, .9);
    }
    .el-dialog__header {
      display: none;
    }

    .el-dialog__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 35px;
      height: 700px;
    }

    .count-down-tip {
      font-size: 40px;
      color: #fff;
      font-weight: 500;
      margin-top: 50px;
    }

    .count-down-inner {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .count-down-mask {
        position: absolute;
        top: calc(50% - 80px);
        font-size: 120px;
        color: #fff;
        font-weight: 500;
      }
    }

    .count-close {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 30px;
      right: 30px;
    }

    circle {
      -webkit-transition: stroke-dasharray .10s;
      transition: stroke-dasharray .10s;
    }

    .run-circle {
      stroke-dashoffset: 1000;
      animation: run 10s forwards linear;
    }

    @keyframes run {
      to {
        stroke-dashoffset: 0;
      }
    }
  }
</style>