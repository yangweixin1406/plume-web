<template>
  <el-dialog
      title=" "
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :show-close="false">
    <div class="dialog-content">
      <div class="circle-bg">
        <img :src="content[index].src">
      </div>
      <p>{{ content[index].label }}</p>
    </div>

    <img @click="closeDialog" class="close-logo" src="~@/static/images/indexImages/close_logo.png">
  </el-dialog>
</template>

<script>
export default {
  name: "DialogBox",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      content: [
        {label: '未获取到人脸识别设备，无法使用', src: require('@/static/images/indexImages/no_device.png')},
        {label: '未获取到网络，无法使用', src: require('@/static/images/indexImages/wifi_logo.png')}
      ]
    }
  },

  methods: {
    closeDialog() {
      this.$emit('updateVisible', false);
    }
  }
}
</script>

<style scoped lang="scss">
:deep(.el-dialog) {
  width: 1004px!important;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  border: 5px solid #10B5FF;
  margin-top: 340px!important;
  position: relative;
}

.close-logo {
  position: absolute;
  width: 75px;
  height: 75px;
  top: 20px;
  right: 20px;
}
:deep(.el-dialog__header) {
  padding: unset!important;
}

:deep(.el-dialog__body) {
  padding: 86px 120px 68px 120px;
}

.dialog-content {
  display: flex;
  align-items: center;
  justify-content: center;

  .circle-bg {
    width: 147px;
    height: 147px;
    border-radius: 50%;
    background: rgba(249, 186, 1, 0.11);
    margin-right: 30px;
    position: relative;

    img {
      width: 81px;
      height: 71px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: dialogLogo 1.2s infinite;

      @keyframes dialogLogo {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }

  p {
    font-size: 36px;
    color: #FFFFFF;
    letter-spacing: 2px;
  }
}
</style>