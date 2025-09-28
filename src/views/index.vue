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
              <span>{{ formateNum(platform.totalXp) }}</span>
            </div>

            <div class="item-content-right" style="display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 20px; display: flex; align-items: center;">
                <svg stroke="rgb(0, 213, 148)" fill="rgb(0, 213, 148)" stroke-width="0" viewBox="0 0 320 512" focusable="false" aria-hidden="true" class="chakra-icon css-1mylkoe" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></path>
                </svg>

                <span style="color: rgb(0, 213, 148); font-weight: 700;">+{{ formateNum(platform.newXp) }}</span>
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
              <span>{{ formateNum(platform.totalWalet) }}</span>
            </div>

            <div class="item-content-right" style="display: flex; flex-direction: column; align-items: center;">
              <div style="font-size: 20px; display: flex; align-items: center;">
                <svg stroke="rgb(0, 213, 148)" fill="rgb(0, 213, 148)" stroke-width="0" viewBox="0 0 320 512" focusable="false" aria-hidden="true" class="chakra-icon css-1mylkoe" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></path>
                </svg>

                <span style="color: rgb(0, 213, 148); font-weight: 700;">+{{ formateNum(platform.newWallet) }}</span>
              </div>

              <span style="color: #747474; font-size: 20px;">Since yesterday</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pp-range-list">
        <div class="pp-range-item" v-for="item in list" :key="item.name">
          <p style="font-size: 22px; margin-bottom: 5px;">{{ formateNum(item.num) }}</p>
          <p style="color: #747474;">{{ item.name }} PP</p>
        </div>
      </div>

      <div class="leader-board-info">
        <p class="leader-board-title">Leaderboard</p>

        <div class="leader-board-content">
          <LeaderBoard class="leader-board-item" title="Top PP Ranking" :list="globalRank" />
  
          <LeaderBoard class="leader-board-item" title="Daily PP Ranking" :list="daily" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeaderBoard from './components/LeaderBoard.vue'
import { getPlatformStats, getGobalRank, getDailtRank } from '@/api/plume.js'
export default {
  components: {
    LeaderBoard
  },
  data() {
    return {
      list: [
        { name: '300,000+', num: 4 },
        { name: '200,000 - 299,999', num: 27 },
        { name: '100,000 - 199,999', num: 620 },
        { name: '50,000 - 99,999', num: 4533 },
        { name: '10,000 - 49,999', num: 47990 },
        { name: '1 - 9,999', num: 246333 }
      ],
      platform: {
        totalXp: 1887797884,
        newXp: 6781010,
        totalWalet: 299507,
        newWallet: 96
      },
      globalRank: [{"wallet_address":"0xff0c6444cb0fa6121a85e838219354bfe2e1556b","total_xp":425726,"xp_rank":1},{"wallet_address":"0xfacc8546eda192b7461cbdde122ebc1ff998311d","total_xp":384655,"xp_rank":2},{"wallet_address":"0x9899db38f2a1197c0bb13494a9360a01c45a28cd","total_xp":337099,"xp_rank":3},{"wallet_address":"0x8f234faf8974cdc99ad2628ef5ed0e9d644193eb","total_xp":310894,"xp_rank":4},{"wallet_address":"0x20089381f65568cbaace03f5e5cd920b3ee7b6f5","total_xp":293532,"xp_rank":5},{"wallet_address":"0xd7583e3cf08bbcab66f1242195227bbf9f865fda","total_xp":293348,"xp_rank":6},{"wallet_address":"0xd3e0d660d8fab05b34ccb7fe7681628d9a46c675","total_xp":292256,"xp_rank":7},{"wallet_address":"0x4ceaed0b2aea8bcce21070cdc1bf8d4057c0e5b4","total_xp":288633,"xp_rank":8},{"wallet_address":"0x29f6dd839bec6e221a7fa06bbbe4e027da817f96","total_xp":274482,"xp_rank":9},{"wallet_address":"0x99fdd2a67ba5ec9fb98f451f0e88d0fbec1ee121","total_xp":271421,"xp_rank":10},{"wallet_address":"0x7cd4f4b2b811cf35559caa1d85f2097f38f882bb","total_xp":270165,"xp_rank":11},{"wallet_address":"0xbd73cf5baf12f120ee3f6c4ad82df9a12649e578","total_xp":261919,"xp_rank":12},{"wallet_address":"0x1851a4dd5c5cc7242423538ef288db6e00782e2a","total_xp":253851,"xp_rank":13},{"wallet_address":"0x3eb210eaa4026f62d027fafaba1fa5592febb06a","total_xp":248354,"xp_rank":14},{"wallet_address":"0x6b6597710ac103f998e77f48caad882788e24471","total_xp":248199,"xp_rank":15},{"wallet_address":"0xbbb4957d9a5b824df5f184c9489d4bdee3d15d1d","total_xp":235405,"xp_rank":16},{"wallet_address":"0x7379e6927ebece670cba86d31c9efb8cee11daed","total_xp":234274,"xp_rank":17},{"wallet_address":"0x01cb0c5e571e1e3fda1ff7c1118f37351616b9fe","total_xp":230505,"xp_rank":18},{"wallet_address":"0x6b9410449200579cf66e641df17d681f71537a7e","total_xp":223963,"xp_rank":19},{"wallet_address":"0x1e7bc6ca55c336f0122052fd4221e98febc8e8ff","total_xp":222039,"xp_rank":20},{"wallet_address":"0xb7501438f42458fac8744122070e2a7a2b79783c","total_xp":214434,"xp_rank":21},{"wallet_address":"0x07ff87d3a7a1ef3e096a05ac498ef45ea6991b78","total_xp":213513,"xp_rank":22},{"wallet_address":"0xc42a37300bb5b6a76b41771cab6baa0d58f47608","total_xp":211078,"xp_rank":23},{"wallet_address":"0x70ddd8ffc952e4c46bc8aa5b3e0b02be93b89eca","total_xp":208139,"xp_rank":24},{"wallet_address":"0x243bfe988c6d5f301fe24b1e5637998797c3a33a","total_xp":207688,"xp_rank":25},{"wallet_address":"0xbf7f3824cec99f73ac5fa53cc34116f4f0dbb69e","total_xp":207542,"xp_rank":26},{"wallet_address":"0xed0a80d834e1fb26efb1f051260c79644a28accd","total_xp":207467,"xp_rank":27},{"wallet_address":"0x25cc275cfe3cce1700e816e00d4cd1f60872038a","total_xp":207224,"xp_rank":28},{"wallet_address":"0x3eea372582e72f1d189ce02e7a65968015622a01","total_xp":204176,"xp_rank":29},{"wallet_address":"0x64f7c019021ac74a68d90d08491ca43b2a632e71","total_xp":201790,"xp_rank":30},{"wallet_address":"0x861d7d7c8127794236f62bdb98846413c99d29b8","total_xp":201559,"xp_rank":31},{"wallet_address":"0x6671b47af0ee536500db027d97f21465ab39b621","total_xp":199967,"xp_rank":32},{"wallet_address":"0xa15fa77449243edfbeb7c35f5c551ece256a472e","total_xp":198259,"xp_rank":33},{"wallet_address":"0x61d6d4008a680441d03ab1694a7b41e04ef3089f","total_xp":197814,"xp_rank":34},{"wallet_address":"0x8d7e26f2c89795e5a1c8c5154712b0cd9c577539","total_xp":196140,"xp_rank":35},{"wallet_address":"0xf79e6e9c6848fe682ec4901a9bbef18c155612a9","total_xp":195060,"xp_rank":36},{"wallet_address":"0x4376e2d96b05c6262644bee7ee74acb97ba35aea","total_xp":194113,"xp_rank":37},{"wallet_address":"0x548b2a3c250d04e2116c77f4d4a36e60832ddbd7","total_xp":194000,"xp_rank":38},{"wallet_address":"0x3e07b5e7e6dae5e9323f363f3e8fee5f19946cf8","total_xp":193762,"xp_rank":39},{"wallet_address":"0x9a78efcc6dee6792d9a6ab3c45be04e5dcaa7a15","total_xp":193671,"xp_rank":40},{"wallet_address":"0xcd1a602678333d247cf229c95e9e867d93fde645","total_xp":192037,"xp_rank":41},{"wallet_address":"0x691ab1859560408e5d460fa21e7bce90529dfcda","total_xp":190868,"xp_rank":42},{"wallet_address":"0xf93a5f0a4925eec32cd585641c88a498523f383c","total_xp":188560,"xp_rank":43},{"wallet_address":"0x2e63fd628958cd277beeeb0cff45622e4df24c1f","total_xp":188395,"xp_rank":44},{"wallet_address":"0xdf7bca5b44c11173f39272fd5274d88d17544fb0","total_xp":187343,"xp_rank":45},{"wallet_address":"0xa33a46408c871c0c4d172e8036dfcdcb19e6f226","total_xp":187024,"xp_rank":46},{"wallet_address":"0xf35ec456867ae55040b8dbb6ee055bdadae6b5ca","total_xp":186696,"xp_rank":47},{"wallet_address":"0xa9821681fef27ed817df77e476dddaf0adac4443","total_xp":186091,"xp_rank":48},{"wallet_address":"0xaa72c83be008fe01e81a5082252deeaafdd8dfc9","total_xp":185585,"xp_rank":49},{"wallet_address":"0x5115c23a954e9b946399574f6ff465020e9dfc39","total_xp":184842,"xp_rank":50},{"wallet_address":"0x0f22f5255b379f898a4762dc4f0690d8716343ad","total_xp":183595,"xp_rank":51},{"wallet_address":"0x15d337d70c22b20f895de31074dd74fcb974ef35","total_xp":183334,"xp_rank":52},{"wallet_address":"0x21e08c04f29febce461be04789c1ee44d0e15da8","total_xp":180876,"xp_rank":53},{"wallet_address":"0x550bcc03e701e511ca12ec5ddfa26a069c6af44b","total_xp":180732,"xp_rank":54},{"wallet_address":"0xf278ac8e97dd418a3ce13307fa1b44ff87a18f7c","total_xp":179970,"xp_rank":55},{"wallet_address":"0xefc5ff84594ebf147dceaeb5c41079672cf0d85c","total_xp":179043,"xp_rank":56},{"wallet_address":"0x9293b2dd5d25d87741c7a601442a72799b4d89e7","total_xp":178547,"xp_rank":57},{"wallet_address":"0x6f593a98f9fd364027cd053bdee1fa97f9826a45","total_xp":177114,"xp_rank":58},{"wallet_address":"0x6ad94395afa6cff02c5a81f23d1772b47e59f65b","total_xp":176760,"xp_rank":59},{"wallet_address":"0x78527f82d2895fca91a4ac6211e6e62c814068f5","total_xp":175929,"xp_rank":60},{"wallet_address":"0x8af8a14e68998c49cf083fb60a4b415afe05b04b","total_xp":175509,"xp_rank":61},{"wallet_address":"0x83ed0969db692d47e801ed9dd93afb0755be2641","total_xp":172307,"xp_rank":62},{"wallet_address":"0x6b203f5b3205f42be690ab0241c18b0067877631","total_xp":171073,"xp_rank":63},{"wallet_address":"0x90e06d2d9705c181bad2a4e7c3dca13631a6f479","total_xp":170759,"xp_rank":64},{"wallet_address":"0x7eb9b4d28f2fe8492175c2664808677312f848fa","total_xp":170024,"xp_rank":65},{"wallet_address":"0x53b7e0ee69091569211e8ad58ccdeba8c07a5f8d","total_xp":169239,"xp_rank":66},{"wallet_address":"0xcfe0111b96000bfdf78dc1e1e895bd34b11a8b12","total_xp":169041,"xp_rank":67},{"wallet_address":"0x3818258d808c1ccb256a73845b4fdf9ccb8e1895","total_xp":168953,"xp_rank":68},{"wallet_address":"0x3cea2308d3e18b316d90ef37029f2ea26384c5cf","total_xp":168902,"xp_rank":69},{"wallet_address":"0x9dc717ca31349db567ec91ab8bbdfc9082ba5bb5","total_xp":168793,"xp_rank":70},{"wallet_address":"0xe674f6b5d12fb53d0ccdff3d0db68ab409ccba20","total_xp":168184,"xp_rank":71},{"wallet_address":"0xfea720d06616097ccddc1a3797200787e90296c0","total_xp":167166,"xp_rank":72},{"wallet_address":"0x7c43716d46134e56b02ae35787c12e49680044a4","total_xp":166131,"xp_rank":73},{"wallet_address":"0xeec710616e67864840b1841651a502e283d069e1","total_xp":165873,"xp_rank":74},{"wallet_address":"0x2ea35c0db6ec9ac1cf54b1048c51c3e24f9540e7","total_xp":164303,"xp_rank":75},{"wallet_address":"0x74189e1bcb1330aa7424b1a641ed7a9565ecffe7","total_xp":164189,"xp_rank":76},{"wallet_address":"0xfe5efb4861e2c7dabd365bdd984165191ddab20e","total_xp":163523,"xp_rank":77},{"wallet_address":"0xe125f87c89561e742540d364b0e3a00dc821f524","total_xp":163368,"xp_rank":78},{"wallet_address":"0x0e44be726b21565d3412aab0de1f6ba669cb2504","total_xp":163159,"xp_rank":79},{"wallet_address":"0x1c7267800a277b5137574626460b9454e7e65ad1","total_xp":162765,"xp_rank":80},{"wallet_address":"0x35fe43b81a850372dd5ae4aaef901f4577bdbaf0","total_xp":162761,"xp_rank":81},{"wallet_address":"0xb4580b3d3028beb90df2f09371404b1b5c669b38","total_xp":162480,"xp_rank":82},{"wallet_address":"0x2eab2e2ddf70a0ae88eec2a8fed278ef25c7bc81","total_xp":161678,"xp_rank":83},{"wallet_address":"0xa662b8b373b8db88aa28748e0d6dbb42586cb032","total_xp":161570,"xp_rank":84},{"wallet_address":"0x62d0e3e200beaee64492b19980664cedf1525293","total_xp":161391,"xp_rank":85},{"wallet_address":"0x817a7fd1dacd3eba0e6744d1687a0ddbb5e901d3","total_xp":160569,"xp_rank":86},{"wallet_address":"0xd7e89195581eff3cda0240684c053fbe2f6b99f6","total_xp":159886,"xp_rank":87},{"wallet_address":"0x19b8ab1a12f1cf7a4c43040e119648fcfee0bcfa","total_xp":159757,"xp_rank":88},{"wallet_address":"0x68a61a62e2ebb4e612fc8b9aada62547c10ba756","total_xp":159757,"xp_rank":89},{"wallet_address":"0x7811c360a5cfa1377ffdcc95b95dfd21db0dac06","total_xp":159690,"xp_rank":90},{"wallet_address":"0x6a51eee3a2c2d33921844965738ae99b81dbff95","total_xp":159316,"xp_rank":91},{"wallet_address":"0xaf9be60b6c94d66e72b6b01f6ecc77a14987950c","total_xp":158273,"xp_rank":92},{"wallet_address":"0x92f8f06a69e54187b764b8151282966eba924772","total_xp":158257,"xp_rank":93},{"wallet_address":"0xa5ca7ba88c12cb6a181b3ad79e525915d70f10b0","total_xp":157943,"xp_rank":94},{"wallet_address":"0x16aec0de2a760f972f99ae812966f87fc94ee323","total_xp":157827,"xp_rank":95},{"wallet_address":"0xb3db8d23a98780002b10da5fb082e47b2d22e4f3","total_xp":157772,"xp_rank":96},{"wallet_address":"0xb9ceca639675cfdd216a2461d0bef4aff3b4825d","total_xp":156898,"xp_rank":97},{"wallet_address":"0xcb2479b5e005e144464893fc222eaa268669e25c","total_xp":156330,"xp_rank":98},{"wallet_address":"0xae7038bb91f5e9319832e5bfb030f4d9bbc721ff","total_xp":155707,"xp_rank":99},{"wallet_address":"0x4066d9506e44c660a4b118599d65ec8117c58215","total_xp":155637,"xp_rank":100}],
      dailyRank: [{"wallet_address":"0xff0c6444cb0fa6121a85e838219354bfe2e1556b","xp_change":425726,"rank":1},{"wallet_address":"0xfacc8546eda192b7461cbdde122ebc1ff998311d","xp_change":384655,"rank":2},{"wallet_address":"0x9899db38f2a1197c0bb13494a9360a01c45a28cd","xp_change":337099,"rank":3},{"wallet_address":"0x8f234faf8974cdc99ad2628ef5ed0e9d644193eb","xp_change":310894,"rank":4},{"wallet_address":"0x20089381f65568cbaace03f5e5cd920b3ee7b6f5","xp_change":293532,"rank":5},{"wallet_address":"0xd7583e3cf08bbcab66f1242195227bbf9f865fda","xp_change":293348,"rank":6},{"wallet_address":"0xd3e0d660d8fab05b34ccb7fe7681628d9a46c675","xp_change":292256,"rank":7},{"wallet_address":"0x4ceaed0b2aea8bcce21070cdc1bf8d4057c0e5b4","xp_change":288633,"rank":8},{"wallet_address":"0x29f6dd839bec6e221a7fa06bbbe4e027da817f96","xp_change":274482,"rank":9},{"wallet_address":"0x99fdd2a67ba5ec9fb98f451f0e88d0fbec1ee121","xp_change":271421,"rank":10},{"wallet_address":"0x7cd4f4b2b811cf35559caa1d85f2097f38f882bb","xp_change":270165,"rank":11},{"wallet_address":"0xbd73cf5baf12f120ee3f6c4ad82df9a12649e578","xp_change":261919,"rank":12},{"wallet_address":"0x1851a4dd5c5cc7242423538ef288db6e00782e2a","xp_change":253851,"rank":13},{"wallet_address":"0x3eb210eaa4026f62d027fafaba1fa5592febb06a","xp_change":248354,"rank":14},{"wallet_address":"0x6b6597710ac103f998e77f48caad882788e24471","xp_change":248199,"rank":15},{"wallet_address":"0xbbb4957d9a5b824df5f184c9489d4bdee3d15d1d","xp_change":235405,"rank":16},{"wallet_address":"0x7379e6927ebece670cba86d31c9efb8cee11daed","xp_change":234274,"rank":17},{"wallet_address":"0x01cb0c5e571e1e3fda1ff7c1118f37351616b9fe","xp_change":230505,"rank":18},{"wallet_address":"0x6b9410449200579cf66e641df17d681f71537a7e","xp_change":223963,"rank":19},{"wallet_address":"0x1e7bc6ca55c336f0122052fd4221e98febc8e8ff","xp_change":222039,"rank":20},{"wallet_address":"0xb7501438f42458fac8744122070e2a7a2b79783c","xp_change":214434,"rank":21},{"wallet_address":"0x07ff87d3a7a1ef3e096a05ac498ef45ea6991b78","xp_change":213513,"rank":22},{"wallet_address":"0xc42a37300bb5b6a76b41771cab6baa0d58f47608","xp_change":211078,"rank":23},{"wallet_address":"0x70ddd8ffc952e4c46bc8aa5b3e0b02be93b89eca","xp_change":208139,"rank":24},{"wallet_address":"0x243bfe988c6d5f301fe24b1e5637998797c3a33a","xp_change":207688,"rank":25},{"wallet_address":"0xbf7f3824cec99f73ac5fa53cc34116f4f0dbb69e","xp_change":207542,"rank":26},{"wallet_address":"0xed0a80d834e1fb26efb1f051260c79644a28accd","xp_change":207467,"rank":27},{"wallet_address":"0x25cc275cfe3cce1700e816e00d4cd1f60872038a","xp_change":207224,"rank":28},{"wallet_address":"0x3eea372582e72f1d189ce02e7a65968015622a01","xp_change":204176,"rank":29},{"wallet_address":"0x64f7c019021ac74a68d90d08491ca43b2a632e71","xp_change":201790,"rank":30},{"wallet_address":"0x861d7d7c8127794236f62bdb98846413c99d29b8","xp_change":201559,"rank":31},{"wallet_address":"0x6671b47af0ee536500db027d97f21465ab39b621","xp_change":199967,"rank":32},{"wallet_address":"0xa15fa77449243edfbeb7c35f5c551ece256a472e","xp_change":198259,"rank":33},{"wallet_address":"0x61d6d4008a680441d03ab1694a7b41e04ef3089f","xp_change":197814,"rank":34},{"wallet_address":"0x8d7e26f2c89795e5a1c8c5154712b0cd9c577539","xp_change":196140,"rank":35},{"wallet_address":"0xf79e6e9c6848fe682ec4901a9bbef18c155612a9","xp_change":195060,"rank":36},{"wallet_address":"0x4376e2d96b05c6262644bee7ee74acb97ba35aea","xp_change":194113,"rank":37},{"wallet_address":"0x548b2a3c250d04e2116c77f4d4a36e60832ddbd7","xp_change":194000,"rank":38},{"wallet_address":"0x3e07b5e7e6dae5e9323f363f3e8fee5f19946cf8","xp_change":193762,"rank":39},{"wallet_address":"0x9a78efcc6dee6792d9a6ab3c45be04e5dcaa7a15","xp_change":193671,"rank":40},{"wallet_address":"0xcd1a602678333d247cf229c95e9e867d93fde645","xp_change":192037,"rank":41},{"wallet_address":"0x691ab1859560408e5d460fa21e7bce90529dfcda","xp_change":190868,"rank":42},{"wallet_address":"0xf93a5f0a4925eec32cd585641c88a498523f383c","xp_change":188560,"rank":43},{"wallet_address":"0x2e63fd628958cd277beeeb0cff45622e4df24c1f","xp_change":188395,"rank":44},{"wallet_address":"0xdf7bca5b44c11173f39272fd5274d88d17544fb0","xp_change":187343,"rank":45},{"wallet_address":"0xa33a46408c871c0c4d172e8036dfcdcb19e6f226","xp_change":187024,"rank":46},{"wallet_address":"0xf35ec456867ae55040b8dbb6ee055bdadae6b5ca","xp_change":186696,"rank":47},{"wallet_address":"0xa9821681fef27ed817df77e476dddaf0adac4443","xp_change":186091,"rank":48},{"wallet_address":"0xaa72c83be008fe01e81a5082252deeaafdd8dfc9","xp_change":185585,"rank":49},{"wallet_address":"0x5115c23a954e9b946399574f6ff465020e9dfc39","xp_change":184842,"rank":50},{"wallet_address":"0x0f22f5255b379f898a4762dc4f0690d8716343ad","xp_change":183595,"rank":51},{"wallet_address":"0x15d337d70c22b20f895de31074dd74fcb974ef35","xp_change":183334,"rank":52},{"wallet_address":"0x21e08c04f29febce461be04789c1ee44d0e15da8","xp_change":180876,"rank":53},{"wallet_address":"0x550bcc03e701e511ca12ec5ddfa26a069c6af44b","xp_change":180732,"rank":54},{"wallet_address":"0xf278ac8e97dd418a3ce13307fa1b44ff87a18f7c","xp_change":179970,"rank":55},{"wallet_address":"0xefc5ff84594ebf147dceaeb5c41079672cf0d85c","xp_change":179043,"rank":56},{"wallet_address":"0x9293b2dd5d25d87741c7a601442a72799b4d89e7","xp_change":178547,"rank":57},{"wallet_address":"0x6f593a98f9fd364027cd053bdee1fa97f9826a45","xp_change":177114,"rank":58},{"wallet_address":"0x6ad94395afa6cff02c5a81f23d1772b47e59f65b","xp_change":176760,"rank":59},{"wallet_address":"0x78527f82d2895fca91a4ac6211e6e62c814068f5","xp_change":175929,"rank":60},{"wallet_address":"0x8af8a14e68998c49cf083fb60a4b415afe05b04b","xp_change":175509,"rank":61},{"wallet_address":"0x83ed0969db692d47e801ed9dd93afb0755be2641","xp_change":172307,"rank":62},{"wallet_address":"0x6b203f5b3205f42be690ab0241c18b0067877631","xp_change":171073,"rank":63},{"wallet_address":"0x90e06d2d9705c181bad2a4e7c3dca13631a6f479","xp_change":170759,"rank":64},{"wallet_address":"0x7eb9b4d28f2fe8492175c2664808677312f848fa","xp_change":170024,"rank":65},{"wallet_address":"0x53b7e0ee69091569211e8ad58ccdeba8c07a5f8d","xp_change":169239,"rank":66},{"wallet_address":"0xcfe0111b96000bfdf78dc1e1e895bd34b11a8b12","xp_change":169041,"rank":67},{"wallet_address":"0x3818258d808c1ccb256a73845b4fdf9ccb8e1895","xp_change":168953,"rank":68},{"wallet_address":"0x3cea2308d3e18b316d90ef37029f2ea26384c5cf","xp_change":168902,"rank":69},{"wallet_address":"0x9dc717ca31349db567ec91ab8bbdfc9082ba5bb5","xp_change":168793,"rank":70},{"wallet_address":"0xe674f6b5d12fb53d0ccdff3d0db68ab409ccba20","xp_change":168184,"rank":71},{"wallet_address":"0xfea720d06616097ccddc1a3797200787e90296c0","xp_change":167166,"rank":72},{"wallet_address":"0x7c43716d46134e56b02ae35787c12e49680044a4","xp_change":166131,"rank":73},{"wallet_address":"0xeec710616e67864840b1841651a502e283d069e1","xp_change":165873,"rank":74},{"wallet_address":"0x2ea35c0db6ec9ac1cf54b1048c51c3e24f9540e7","xp_change":164303,"rank":75},{"wallet_address":"0x74189e1bcb1330aa7424b1a641ed7a9565ecffe7","xp_change":164189,"rank":76},{"wallet_address":"0xfe5efb4861e2c7dabd365bdd984165191ddab20e","xp_change":163523,"rank":77},{"wallet_address":"0xe125f87c89561e742540d364b0e3a00dc821f524","xp_change":163368,"rank":78},{"wallet_address":"0x0e44be726b21565d3412aab0de1f6ba669cb2504","xp_change":163159,"rank":79},{"wallet_address":"0x1c7267800a277b5137574626460b9454e7e65ad1","xp_change":162765,"rank":80},{"wallet_address":"0x35fe43b81a850372dd5ae4aaef901f4577bdbaf0","xp_change":162761,"rank":81},{"wallet_address":"0xb4580b3d3028beb90df2f09371404b1b5c669b38","xp_change":162480,"rank":82},{"wallet_address":"0x2eab2e2ddf70a0ae88eec2a8fed278ef25c7bc81","xp_change":161678,"rank":83},{"wallet_address":"0xa662b8b373b8db88aa28748e0d6dbb42586cb032","xp_change":161570,"rank":84},{"wallet_address":"0x62d0e3e200beaee64492b19980664cedf1525293","xp_change":161391,"rank":85},{"wallet_address":"0x817a7fd1dacd3eba0e6744d1687a0ddbb5e901d3","xp_change":160569,"rank":86},{"wallet_address":"0xd7e89195581eff3cda0240684c053fbe2f6b99f6","xp_change":159886,"rank":87},{"wallet_address":"0x19b8ab1a12f1cf7a4c43040e119648fcfee0bcfa","xp_change":159757,"rank":88},{"wallet_address":"0x68a61a62e2ebb4e612fc8b9aada62547c10ba756","xp_change":159757,"rank":89},{"wallet_address":"0x7811c360a5cfa1377ffdcc95b95dfd21db0dac06","xp_change":159690,"rank":90},{"wallet_address":"0x6a51eee3a2c2d33921844965738ae99b81dbff95","xp_change":159316,"rank":91},{"wallet_address":"0xaf9be60b6c94d66e72b6b01f6ecc77a14987950c","xp_change":158273,"rank":92},{"wallet_address":"0x92f8f06a69e54187b764b8151282966eba924772","xp_change":158257,"rank":93},{"wallet_address":"0xa5ca7ba88c12cb6a181b3ad79e525915d70f10b0","xp_change":157943,"rank":94},{"wallet_address":"0x16aec0de2a760f972f99ae812966f87fc94ee323","xp_change":157827,"rank":95},{"wallet_address":"0xb3db8d23a98780002b10da5fb082e47b2d22e4f3","xp_change":157772,"rank":96},{"wallet_address":"0xb9ceca639675cfdd216a2461d0bef4aff3b4825d","xp_change":156898,"rank":97},{"wallet_address":"0xcb2479b5e005e144464893fc222eaa268669e25c","xp_change":156330,"rank":98},{"wallet_address":"0xae7038bb91f5e9319832e5bfb030f4d9bbc721ff","xp_change":155707,"rank":99},{"wallet_address":"0x4066d9506e44c660a4b118599d65ec8117c58215","xp_change":155637,"rank":100}]
    }
  },
  computed: {
    daily() {
      return this.dailyRank.map(_ => ({ ..._, total_xp: _.xp_change }))
    }
  },
  created() {
    getPlatformStats().then(res => {
      console.log('res >>>>>>>>>>', res)
    })
  },
  methods: {
    formateNum(num) {
      return num.toLocaleString()
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
      box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1);
      padding: 20px;
      .index-total-title {
        font-size: 24px;
        color: #575757;
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
      box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1);
      border-radius: 20px;
      padding: 20px;
      text-align: center;
    }
  }

  .leader-board-info {
    margin-top: 30px;
    .leader-board-title {
      font-size: 32px;
    }

    .leader-board-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 20px;
    }
  }
}
</style>