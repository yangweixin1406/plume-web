<template>
  <div class="loading-wrap">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <div class="loading-text">{{ loadingText }}</div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loadingText: {
      type: String,
      default: '页面加载中...',
    }
  }
}

</script>

<style lang="scss">
$size:2em;
$dotCount:12;
$animationTime:2.5s;

.loading-wrap{
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1080px;
  width: 1920px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(#000, .6);
  ul{
    position: absolute;
    display: inline-block;
    text-indent: $size*2;
    display: flex;
    flex-direction: column;
    align-items: center;
    scale: 0.5;
    width: 225px;
    height: 232px;
    left: calc(50% - 60px);
    li{
      position: absolute;
      padding-bottom: 17em;
      top: 0;
      left: 0;
      animation: $animationTime infinite;
      &::after{
        content:"";
        display: block;
        width: $size;
        height: $size;
        border-radius: 100%;
        animation: dotAnimationTwo $animationTime infinite;
      }
    }
  }

  .loading-text {
    position: absolute;
    font-size: 45px;
    color: #fff;
    margin-top: 280px;
  }

  // Creating Circle and Animation Delay
  @for $i from 1 through 12 {
    li:nth-child(#{$i}){
      $deg:($i - 1)*(360deg/$dotCount) + 90;
      transform: rotate($deg);
      animation-delay: $animationTime*$i/$dotCount/2;
    }
    li:nth-child(#{$i}):after{
      width: $size * $i * 0.2;
      height: $size * $i * 0.2;
      animation-delay: $animationTime*$i/$dotCount/2;
      background: linear-gradient( 180deg, #81FFFF 0%, #00BBFF 100%);
    }

    li:nth-child(1) {
      padding-bottom: 21em;
    }
    li:nth-child(2) {
      padding-bottom: 19em;
    }
    li:nth-child(3) {
      padding-bottom: 18em;
    }
  }

  @-webkit-keyframes dotAnimationTwo {
    0%, 55%, 100%   {
      opacity: 1;
      transform: scale(0.7);
    }
    5%,50%  {
      opacity: 0;
      transform: scale(0.5);
    }
  }
}
</style>