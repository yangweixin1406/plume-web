<template>
  <div class="container">
    <div class="pass-top">
      <DeviceInfo style="margin-right: 21px;" />

      <ConnectInfo />
    </div>

    <slot></slot>

    <div class="pass-bottom" :style="{backgroundImage: 'url(' + backgroundImage + ')' }">
      <!-- 如果首页, 地址的颜色样式根据用印室状态改变 -->
      <div class="address">
        <img :src="require('@/static/images/indexImages/landmark.png')">
        <span>{{ deviceAddress }}</span>
      </div>

      <div class="phone">
        <img src="~@/static/images/indexImages/dianhua.png">
        <span>技术服务: {{ serverPhone }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dsBridge from "dsbridge";
import DeviceInfo from './DeviceInfo.vue'
import ConnectInfo from './ConnectInfo.vue'
import {mapGetters} from "vuex";

export default {
  name: "ComPage",
  components: {
    DeviceInfo,
    ConnectInfo
  },
  props: {
    backgroundImage: {
      type: String,
      default: require("@/static/images/passImages/page_bottom.png")
    },
    isIndex: {
      type: Boolean,
      default: false
    },
    showTop: {
      type: Boolean,
      default: false
    },
    deviceAddress: {
      type: String,
      default: ''
    }
  },

  computed: {
    ...mapGetters(['serverPhone'])
  },

  data() {
    return {
      deviceCode: '',
      versionNum: ''
    }
  },
  created() {
    // 获取设备序列号
      dsBridge.call('device.getDeviceNumber', (deviceCode)=> {
        const code = JSON.parse(deviceCode || '{}')
        this.deviceCode = code.data || ''
     })

    // 获取版本号
     dsBridge.call('device.getVersionNumber', (versionNum)=> {
       const num = JSON.parse(versionNum || '{}')
       this.versionNum = num.data || ''
     })
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 1920px;
  height: 1080px;
  background-image: url("~@/static/images/passImages/page_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;

  .pass-top {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 60px 0;
  }

  .pass-bottom {
    width: 1920px;
    height: 90px;
    padding: 0 221px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .address {
      display: flex;
      align-items: center;
      width: 480px;

      img {
        width: 45px;
        height: 45px;
        margin-right: 14px;
        object-fit: cover;
      }

      span {
        font-weight: bold;
        font-size: 35px;
        color: #02DEFB;
      }
    }

    .m-text {
      font-weight: bold;
      font-size: 50px;
      animation: m-text 2s infinite;

      @keyframes m-text {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          topacity: 1;
        }
      }
    }
  }

  .phone {
    font-size: 27px;
    color: #FFFFFF;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: right;
    width: 480px;

    img {
      width: 27px;
      height: 27px;
      margin-right: 17px;
    }
  }
}

</style>