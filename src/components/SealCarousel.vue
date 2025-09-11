<template>
  <el-carousel indicator-position="none" arrow="always" interval="2000">
    <el-carousel-item v-for="(item, index) in sealList" :key="index">
      <div class="item-content">
        <img v-if="item.signetStatus === 0" class="use-status" src="~@/static/images/indexImages/free.png">
        <img v-else class="use-status" src="~@/static/images/indexImages/used.png">
        <p class="seal-name">{{ item.signetName }}</p>
        <div class="seal-used">待用印<span style="color: #02FBE8; padding-left: 20px">{{ item.waitUseCount }}单</span></div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "SealCarousel",
  props: {
    sealList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.item-content {
  .use-status {
    width: 138px;
    height: 102px;
    margin: 0 116px 0 174px;
  }

  .seal-name {
    font-size: 24px;
    height: 24px;
    line-height: 24px;
    color: #fff;
    margin-top: 15px;
    text-align: center;
  }

  .seal-used {
    font-size: 30px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    margin-top: 12px;
    text-align: center;
  }
}

.el-carousel :deep(.el-carousel__container) {
  height: 192px;
}

:deep(.el-carousel__arrow) {
  width: 33px;
  height: 69px;
  border: unset;
  border-radius: 0;
  background: unset;
  z-index: unset;
}

:deep(.el-carousel__item.is-active) {
  z-index: unset;
}

:deep(.el-carousel__arrow--left) {
  left: 0!important;
  background-image: url("~@/static/images/indexImages/left_arrow.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  /* 新增：移除点击时的灰色覆盖层 */
  -webkit-tap-highlight-color: transparent;
}
:deep(.el-carousel__arrow--right) {
  right: 0!important;
  background-image: url("~@/static/images/indexImages/right_arrow.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  /* 新增：移除点击时的灰色覆盖层 */
  -webkit-tap-highlight-color: transparent;
}
:deep(.el-icon-arrow-left) {
  &::before {
    content: '';
  }
}
:deep(.el-icon-arrow-right) {
  &::before {
    content: '';
  }
}
</style>