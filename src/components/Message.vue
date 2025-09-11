<template>
  <div class="message-wrap">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.message-wrap {
  z-index: 9999;
  min-width: 600px;
  max-width: 900px;
  background-color: rgba(#000, .7);
  border-radius: 13px 13px 13px 13px;
  border: 3px solid #10B5FF;
  padding: 54px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: #fff;
  text-align: center;
}
</style>