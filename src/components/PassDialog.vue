<template>
  <div>
    <div class="pass-card">
      <div class="avatar">
        <img class="com-effect dash-ring" src="~@/static/images/passImages/dash_ring.png" >
        <img class="com-effect shadow" :src="getAvatarImage('bg')" >
        <img class="com-effect solid" :src="getAvatarImage('solid')" >
        <img class="com-effect ring" :src="getAvatarImage('ring')" >
        <img class="com-effect avatar-img" :src="userInfo.previewData" >
      </div>
      <div class="pass-right">
        <div style="display: flex; align-items: center; justify-content: center;">
          <div class="pass-text" :style="{ color: passTextColor }">{{ passText }}</div>
          <img class="pass-img" :src="getAvatarImage('logo')">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dsBridge from "dsbridge";
import Loading from "@/components/Loading";
export default {
  name: "PassDialog",
  components: {Loading},
  props: {
    userInfo: {
      type: Object,
      default: ()=> {}
    }
  },
  data() {
    return {
      tips: ''
    }
  },
  computed: {
    condition() {
      return !!this.userInfo.personId
    },
    passText() {
      return this.condition ? '认证成功' : '认证失败'
    },
    passTextColor() {
      return this.condition ? '#02FBE8' : '#F41928'
    },
    avatarColor() {
      return this.condition ? 'blue' : 'red';
    },
    avatarImages() {
      return {
        bg: require(`@/static/images/passImages/${this.avatarColor}_bg.png`),
        solid: require(`@/static/images/passImages/${this.avatarColor}_solid.png`),
        ring: require(`@/static/images/passImages/${this.avatarColor}_ring.png`),
        logo: require(`@/static/images/passImages/${this.avatarColor}_logo.png`)
      };
    }
  },

  watch: {
    userInfo: {
      immediate: true,
       handler() {
        dsBridge.call('device.stopFaceRecognition');
      }
    }
  },

  methods: {
    // 获取对应类型和颜色的图片
    getAvatarImage(type) {
      return this.avatarImages[type];
    }
  }
}
</script>

<style scoped lang="scss">
.pass-card {
  width: 1230px;
  height: 675px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  border: 5px solid #10B5FF;
  margin: 180px 345px 0 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .avatar {
    width: 450px;
    height: 450px;
    position: relative;

    .com-effect {
      position: absolute;
      top: 50%; /* 垂直居中 */
      left: 50%; /* 水平居中 */
      transform: translate(-50%, -50%); /* 调整元素位置，使其完全居中 */
    }

    .dash-ring {
      width: 100%;
      height: 100%;
      animation: dashRing 1.5s infinite; /* 动画持续2秒，循环播放 */

      @keyframes dashRing {
        0% {
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 0;
        }
        95% {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
      }
    }

    .shadow {
      width: 100%;
      height: 100%;
      animation: shadow 1.5s infinite; /* 动画持续2秒，循环播放 */

      @keyframes shadow {
        0% {
          transform: translate(-50%, -50%) scale(1); /* 开始时缩小为0.8 */
          opacity: 0;
        }
        70% {
          transform: translate(-50%, -50%) scale(1.3); /* 中间时放大到1.3 */
          opacity: 0.3;
        }
        71% {
          transform: translate(-50%, -50%) scale(1); /* 中间时放大到1.3 */
          opacity: 0;
        }
        100% {
          transform: translate(-50%, -50%) scale(1); /* 结束时回归到1 */
          opacity: 0;
        }
      }
    }

    .solid {
      width: 360px;
      height: 360px;
      animation: solid 1.5s infinite; /* 动画持续4秒，循环播放 */

      @keyframes solid {
        0% {
          transform: translate(-50%, -50%) rotate(0deg) scale(0.8); /* 初始状态，0度旋转，大小为正常（1） */
          opacity: 0;
        }
        95% {
          transform: translate(-50%, -50%) rotate(360deg) scale(1.1); /* 最终状态，360度旋转，回到原始大小（1） */
          opacity: 1;
        }
        97% {
          transform: translate(-50%, -50%) rotate(360deg) scale(1.1); /* 最终状态，360度旋转，回到原始大小（1） */
          opacity: 0;
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg) scale(1); /* 最终状态，360度旋转，回到原始大小（1） */
          opacity: 1;
        }
      }
    }

    .ring {
      width: 306px;
      height: 306px;
      animation: ring 1.5s infinite; /* 动画持续4秒，循环播放 */

      @keyframes ring {
        0% {
          transform: translate(-50%, -50%) rotate(0deg) scale(0.8); /* 初始状态，0度旋转，大小为正常（1） */
        }
        95% {
          transform: translate(-50%, -50%) rotate(360deg) scale(1.1); /* 最终状态，360度旋转，回到原始大小（1） */
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg) scale(1); /* 最终状态，360度旋转，回到原始大小（1） */
        }
      }
    }

    .avatar-img {
      width: 252px;
      height: 252px;
      border-radius: 50%;
      animation: avatarImg 1.5s infinite; /* 动画持续4秒，循环播放 */

      @keyframes avatarImg {
        0% {
          transform: translate(-50%, -50%) scale(0.8); /* 初始状态，0度旋转，大小为正常（1） */
        }
        95% {
          transform: translate(-50%, -50%) scale(1.1); /* 最终状态，360度旋转，回到原始大小（1） */
        }
        100% {
          transform: translate(-50%, -50%) scale(1); /* 最终状态，360度旋转，回到原始大小（1） */
        }
      }
    }
  }

  .pass-right {
    width: 590px;
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
      font-size: 84px;
      color: #fff;
      font-weight: bold;
      text-align: center;
    }

    .pass-text {
      font-size: 54px;
      color: #02FBE8;
      padding-right: 23px;
    }

    .pass-img {
      width: 84px;
      height: 84px;
      animation: passImg 1.5s infinite;
    }

    @keyframes passImg {
      0% {
        opacity: 1;
      }
      30% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .tip {
      font-size: 50px;
      color: #F41928;
      margin-top: 20px;
      word-break: break-all;  /* 强制在任何位置换行，适用于长单词 */
      display: -webkit-box;    /* 使用弹性盒子模型 */
      -webkit-box-orient: vertical;  /* 垂直排列内容 */
      -webkit-line-clamp: 2;   /* 限制显示2行 */
      overflow: hidden;        /* 超出的部分隐藏 */
      text-overflow: ellipsis; /* 超出的部分显示省略号 */
    }
  }
}

</style>