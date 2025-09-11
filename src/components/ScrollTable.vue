<template>
  <div class="table-box">
    <vue-seamless-scroll
        :data="fileList"
        :class-option="classOption"
        class="wrap"
        v-if="fileList.length > 0"
    >
      <div class="list-item" v-for="(item, index) in fileList" :key="index">
        <div>{{ fileType === '1' ? item.sendingDeptName : item.receiveDeptName}}</div>
        <div>{{ item.total }} 件</div>
      </div>
    </vue-seamless-scroll>
    <div class="no-data" v-else>
      <img :src="noDataImage" />
      <p>{{ noDataText }}</p>
    </div>
  </div>
</template>

<script>
import VueSeamlessScroll from 'vue-seamless-scroll';
export default {
  name: "ScrollTable",
  components: { VueSeamlessScroll },
  props: {
    fileList: {
      type: Array,
      default: () => []
    },
    fileType: {
      type: String,
      default: '1'
    }
  },
  computed: {
    // 计算属性用于判断文件类型
    noDataImage() {
      return this.fileType === '1'
          ? require('@/static/images/indexImages/send_nodata.png')
          : require('@/static/images/indexImages/pick_nodata.png');
    },
    noDataText() {
      return this.fileType === '1' ? '暂无待投文件' : '暂无待取文件';
    }
  },
  data() {
    return {
      classOption: {
        limitMoveNum: 4
      }
    }
  }
}
</script>

<style scoped lang="scss">
.table-box {
  width: 323px;
  height: 149px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 11px;
  padding: 24px 36px 0 23px;

  .wrap {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;

    .list-item {
      height: 24px;
      line-height: 24px;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }

  .no-data {
    margin-left: 70px;

    img {
      width: 129px;
      height: 78px;
    }

    p {
      color: #fff;
      font-size: 21px;
      opacity: 0.6;
    }
  }
}
</style>