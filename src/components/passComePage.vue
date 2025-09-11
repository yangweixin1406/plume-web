<template>
  <com-page :device-address="saveDeviceAddress">
    <div class="page-top">
      <div class="title-logo">
        <img src="~@/static/images/passImages/title_logo.png">
        <div class="title-text">通行认证</div>
      </div>
      <div class="device-code">
        <div class="p-text">设备序列号: {{ deviceCode }}</div>
        <div class="p-text" style="padding-left: 14px">{{ versionNum }}</div>
      </div>
      <div class="date-time">
        <span style="padding-right: 15px">{{ currentTime }}</span>
        <span style="padding-right: 15px">{{ currentWeekDay }}</span>
        <span>{{ currentDate }}</span>
        <img v-if="isOnline" src="~@/static/images/indexImages/internet_icon.png">
        <img v-else src="~@/static/images/indexImages/no_internet.png">
      </div>
    </div>

    <slot></slot>

    <div class="face_inlet" @click="jumpFace">
      <img src="~@/static/images/codeImages/face_img.png">
      <div>人脸</div>
    </div>
    <div class="index-btn" @click="$router.push('/')">首页</div>
  </com-page>
</template>

<script>
import ComPage from "@/components/ComPage";
import { dateTimeMixin } from "@/mixins/dateTimeMixin";
import PassDialog from "@/components/PassDialog";
import dsBridge from "dsbridge";
import Loading from "@/components/Loading";
import {mapGetters} from "vuex";

export default {
  name: "passComePage",
  components: {Loading, PassDialog, ComPage},
  mixins: [dateTimeMixin], // 引入 mixin
  data() {
    return {
      type: 1,
      deviceCode: '',
      versionNum: '',
      saveDeviceAddress: ''
    };
  },
  computed: {
    ...mapGetters(['isOnline'])
  },
  mounted() {
    // 获取进入页面的type
    this.type = this.$route.query.type;
  },

  created() {
    // 从localStorage读取设备地址
    this.saveDeviceAddress = localStorage.getItem('deviceAddress') || '';

    dsBridge.call('device.getDeviceNumber', (deviceCode) => {
      const code = JSON.parse(deviceCode || '{}')
      this.deviceCode = code.data || ''
    })

    dsBridge.call('device.getVersionNumber', (versionNum) => {
      const num = JSON.parse(versionNum || '{}')
      this.versionNum = num.data || ''
    })
  },

  methods: {
    jumpFace() {
      this.$router.push('pass-index?type=2')
    }
  }
};
</script>

<style scoped lang="scss">
.page-top {
  width: 1920px;
  height: 290px;
  background-image: url("~@/static/images/passImages/page_top.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;

  .title-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 36px;

    img {
      width: 63px;
      height: 63px;
      margin-right: 14px;
    }

    .title-text {
      font-weight: bold;
      font-size: 57px;
      color: #FFFFFF;
      letter-spacing: 3px;
    }
  }

  .device-code {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 23px;
    left: 27px;

    .p-text {
      font-size: 24px;
      color: #FFFFFF;
      opacity: 0.6;
    }
  }

  .date-time {
    position: absolute;
    top: 23px;
    right: 27px;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      margin-left: 15px;
    }
  }
}

.face_inlet {
  position: absolute;
  left: 68px;
  bottom: 144px;

  img {
    width: 168px;
    height: 162px;
  }

  div {
    position: absolute;
    top: 83px;
    left: 149px;
    font-size: 30px;
    color: #02DEFB;
    width: 61px;
  }
}

.index-btn {
  position: absolute;
  right: 90px;
  bottom: 170px;
  width: 195px;
  height: 75px;
  line-height: 75px;
  text-align: center;
  background: linear-gradient( 270deg, #45B7FB 0%, #2681FA 100%);
  border-radius: 38px;
  font-weight: 500;
  font-size: 33px;
  color: #FFFFFF;
}
</style>