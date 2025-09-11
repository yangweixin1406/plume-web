<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import dsBridge from 'dsbridge'
export default {
  name: "app",
  computed: {
    ...mapGetters(['deviceCode'])
  },
  created() {
    // 第一次获取网络状态
    dsBridge.call('device.getNetStatus', (internet)=> {
      const bool = internet === "true"
      console.log('首次获取网络状态: ', bool)
      this.$store.commit('SET_NETWORK_STATUS', bool)
    })

    // Android 回调: 有无网络
    dsBridge.register('onNetworkStateChange', network => {
      const net = network === "true"
      console.log('安卓回调网络情况>>>>', net)
      this.$store.commit('SET_NETWORK_STATUS', net)
    });
  },
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  // background-image: url('~@/static/images/home-bg.svg');
  background-repeat: no-repeat;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  user-select: none;  // 禁止复制
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

ul {
  list-style: none;
}

body,html{
  width:100%;
  height:100%;
  margin:0;
  font-family:"Microsoft YaHei"
}

input,b,p{
  font-size:14px
}

</style>
