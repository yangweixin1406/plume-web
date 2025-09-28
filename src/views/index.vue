<template>
  <div class="index-wrap">
    <div class="index-content">
      <header>
        <img src="@/static/images/plume-logo.png" alt="">
        <div style="display: flex; flex-direction: column;">
          <span style="font-weight: 700;">PLUME Season 2 Data Overview</span>
          <span style="font-size: 15px; color: #2e2e2e;">(Only count data whose pp number is not 0)</span>
        </div>
      </header>
      
      <div class="index-total-info">
        <div class="index-total-item index-total-left">
          <span class="index-total-title">Total PP</span>

          <div class="index-total-item-content">
            <div class="item-content-left">
              <img src="@/static/images/pp.svg" alt="">
              <span>1,810,191,901</span>
            </div>

            <div class="item-content-right" style="display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 20px; display: flex; align-items: center;">
                <svg stroke="rgb(0, 213, 148)" fill="rgb(0, 213, 148)" stroke-width="0" viewBox="0 0 320 512" focusable="false" aria-hidden="true" class="chakra-icon css-1mylkoe" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></path>
                </svg>

                <span style="color: rgb(0, 213, 148); font-weight: 700;">+123131</span>
              </div>

              <span style="color: #747474; font-size: 20px;">Since yesterday</span>
            </div>
          </div>
        </div>
  
        <div class="index-total-item index-total-right">
          <span class="index-total-title">Total Wallets</span>

          <div class="index-total-item-content">
            <div class="item-content-left">
              <img src="@/static/images/wallet.svg" alt="">
              <span>1818</span>
            </div>

            <div class="item-content-right" style="display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 20px; display: flex; align-items: center;">
                <svg stroke="rgb(0, 213, 148)" fill="rgb(0, 213, 148)" stroke-width="0" viewBox="0 0 320 512" focusable="false" aria-hidden="true" class="chakra-icon css-1mylkoe" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></path>
                </svg>

                <span style="color: rgb(0, 213, 148); font-weight: 700;">+123131</span>
              </div>

              <span style="color: #747474; font-size: 20px;">Since yesterday</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pp-range-list">
        <div class="pp-range-item" v-for="item in list" :key="item">
          <p style="font-size: 22px; margin-bottom: 5px;">191889</p>
          <p style="color: #747474;">{{ item }} PP</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['0-10000', '10000-50000', '50000-100000', '100000-200000', '200000-300000', 'over 3000000']
    }
  }
}
</script>

<style lang="scss">
.index-wrap {
  width: 100%;
  height: 100vh;
  .index-content {
    width: 1200px;
    height: 100%;
    margin: 30px auto;
  }

  header {
    font-size: 35px;
    display: flex;
    align-items: center;
    img {
      width: 65px;
      height: 65px;
      margin-right: 10px;
    }
  }

  .index-total-info {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .index-total-item {
      width: 590px;
      border-radius: 20px;
      // background-color: #f7f7f7;
      box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.04);
      padding: 20px;
      .index-total-title {
        font-size: 24px;
        color: #747474;
      }
    }

    .index-total-item-content {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .item-content-left {
      display: flex;
      align-items: center;
      font-size: 35px;
      img {
        width: 55px;
        height: 55px;
        margin-right: 5px;
      }
      span {
        font-weight: 500;
      }
    }
  }

  .pp-range-list {
    display: flex;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    margin-top: 20px;
    .pp-range-item {
      width: 100%;
      box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.04);
      border-radius: 20px;
      padding: 20px;
      text-align: center;
    }
  }
}
</style>