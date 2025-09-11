<template>
  <div class="connect-info">
    <img :src="require(`@/static/images/indexImages/${mqttOnline ? '' : 'offline-'}mqtt.png`)" style="width: 65px; height: 33px; margin-right: 12px;" alt="">
    <img :src="require(`@/static/images/indexImages/${hasNetwork ? '' : 'no-'}net.png`)" style="width: 38px; height: 36px;" alt="">
  </div>
</template>

<script>
import dsBridge from 'dsbridge'

export default {
  data() {
    return {
      hasNetwork: true,
      mqttOnline: false
    }
  },
  created() {
    this.hasNetwork = dsBridge.call('device.hasNetwork')

    dsBridge.register('networkChangeResult', result => {
      this.hasNetwork = result
    })

    this.mqttOnline = dsBridge.call('device.mqttEnabled')
    dsBridge.register('mqttChangeResult', result => {
      this.mqttOnline = result
    })
  }
}
</script>

<style lang="scss">
.connect-info {
  display: flex;
  align-items: center;
}
</style>