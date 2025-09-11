<template>
  <div class="table-box">
    <div class="table-head">
      <div>用印人</div>
      <div>核对结果</div>
      <div>核对时间</div>
    </div>
    <div class="table-body" v-if="checkList.length > 0">
      <vue-seamless-scroll
          :data="checkList"
          :class-option="classOption"
          class="wrap"
          v-if="checkList.length > 0">
        <div class="list-item" v-for="(item, index) in checkList" :key="index">
          <div class="seal-name" style="color: #02FBE8;">{{ item.optUserName }}</div>
          <div class="seal-name" :style="{ color: `${textInfo[item.checkState || 0].color}` }">{{textInfo[item.checkState || 0].text }}</div>
          <div style="color: #FF9E00;">{{ item.checkTime }}</div>
        </div>
      </vue-seamless-scroll>
    </div>
    <div class="no-data" v-else>
      <img src="~@/static/images/codeImages/no_seal_list.png">
      <div>暂无数据</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SealTable",

  props: {
    checkList: {
      type: Array,
      default: () => []
    },
  },

  data() {
    return {
      classOption: {
        limitMoveNum: 3,
        step: 0.5
      },
      textInfo: {
        0: { color: '#AAAAAA', text: '未核验' },
        1: { color: '#05A76F', text: '核验通过' },
        2: { color: '#FF0000', text: '核验失败' },
        3: { color: '#FC9D2B', text: '待人工核验' }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.table-box {
  width: 663px;
  height: 200px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 11px;

  .table-head {
    //display: flex;
    height: 60px;
    line-height: 60px;
    font-weight: 400;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    display: grid;
    grid-template-columns: 200px 200px 260px;
    grid-gap: 2px;
    margin-bottom: 2px;
  }

  .table-body {
    height: 140px;
    font-size: 21px;
    text-align: center;
    .wrap {
      height: 100%;
      width: 100%;
      margin: 0 auto;
      overflow: hidden;

      .list-item {
        height: 60px;
        line-height: 60px;
        display: grid;
        grid-template-columns: 200px 200px 260px;
        grid-gap: 2px;
        margin-bottom: 2px;

        &:nth-child(2n) {
          background: rgba(#fff, .06);
        }

        .seal-name {
          padding-left: 10px;
          color: #FFFFFF;
          overflow: hidden;         /* 隐藏溢出的内容 */
          text-overflow: ellipsis;  /* 使用省略号表示溢出的文本 */
          white-space: nowrap;      /* 禁止换行 */
        }
      }
    }
  }

  .no-data {
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 60px;
      height: 48px;
    }

    div {
      font-weight: 500;
      font-size: 18px;
      color: #FFFFFF;
      margin-top: 9px;
    }
  }
}
</style>