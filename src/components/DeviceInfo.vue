<template>
  <div class="device-info">
    <span style="margin-right: 50px;">设备序列号：{{ deviceCode }}</span>
    <span>v{{ version }}</span>
  </div>
</template>

<script>
import dsBridge from 'dsbridge'
export default {
  data() {
    return {
      deviceCode:'',
      version: ''
    }
  },
  created() {
    this.deviceCode = dsBridge.call('device.getDeviceNumber')

    this.version = dsBridge.call('device.getVersion')
  }
}
</script>

<style lang="scss">
.device-info {
  font-size: 27px;
  color: rgba(#fff, .6);
}
</style>