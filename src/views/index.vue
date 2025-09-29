<template>
  <div class="index-wrap">
    <div class="index-content">
      <header>
        <img src="@/static/images/plume-logo.png" alt="">
        <div style="display: flex; flex-direction: column;">
          <span style="font-weight: 700;">PLUME Season 2 Overview: 117 Days</span>
          <span style="font-size: 15px; color: #2e2e2e;">(Only count data whose PP is greater than 0)</span>
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
          <LeaderBoard class="leader-board-item" title="Global Ranking" :list="globalRank" />
  
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
        { name: '200,000 - 299,999', num: 28 },
        { name: '100,000 - 199,999', num: 629 },
        { name: '50,000 - 99,999', num: 4586 },
        { name: '10,000 - 49,999', num: 47998 },
        { name: '1 - 9,999', num: 246507 }
      ],
      platform: {
        totalXp: 1894294771,
        newXp: 6496887,
        totalWalet: 299752,
        newWallet: 245
      },
      globalRank: [{"wallet_address":"0xff0c6444cb0fa6121a85e838219354bfe2e1556b","total_xp":428986,"xp_rank":1},{"wallet_address":"0xfacc8546eda192b7461cbdde122ebc1ff998311d","total_xp":387695,"xp_rank":2},{"wallet_address":"0x9899db38f2a1197c0bb13494a9360a01c45a28cd","total_xp":339641,"xp_rank":3},{"wallet_address":"0x8f234faf8974cdc99ad2628ef5ed0e9d644193eb","total_xp":313937,"xp_rank":4},{"wallet_address":"0xd3e0d660d8fab05b34ccb7fe7681628d9a46c675","total_xp":295296,"xp_rank":5},{"wallet_address":"0xd7583e3cf08bbcab66f1242195227bbf9f865fda","total_xp":294788,"xp_rank":6},{"wallet_address":"0x29f6dd839bec6e221a7fa06bbbe4e027da817f96","total_xp":294422,"xp_rank":7},{"wallet_address":"0x20089381f65568cbaace03f5e5cd920b3ee7b6f5","total_xp":293532,"xp_rank":8},{"wallet_address":"0x4ceaed0b2aea8bcce21070cdc1bf8d4057c0e5b4","total_xp":289953,"xp_rank":9},{"wallet_address":"0x99fdd2a67ba5ec9fb98f451f0e88d0fbec1ee121","total_xp":272895,"xp_rank":10},{"wallet_address":"0x7cd4f4b2b811cf35559caa1d85f2097f38f882bb","total_xp":271646,"xp_rank":11},{"wallet_address":"0xbd73cf5baf12f120ee3f6c4ad82df9a12649e578","total_xp":263199,"xp_rank":12},{"wallet_address":"0x1851a4dd5c5cc7242423538ef288db6e00782e2a","total_xp":255625,"xp_rank":13},{"wallet_address":"0x3eb210eaa4026f62d027fafaba1fa5592febb06a","total_xp":249552,"xp_rank":14},{"wallet_address":"0x6b6597710ac103f998e77f48caad882788e24471","total_xp":249441,"xp_rank":15},{"wallet_address":"0xbbb4957d9a5b824df5f184c9489d4bdee3d15d1d","total_xp":238749,"xp_rank":16},{"wallet_address":"0x7379e6927ebece670cba86d31c9efb8cee11daed","total_xp":235649,"xp_rank":17},{"wallet_address":"0x01cb0c5e571e1e3fda1ff7c1118f37351616b9fe","total_xp":232416,"xp_rank":18},{"wallet_address":"0x6b9410449200579cf66e641df17d681f71537a7e","total_xp":226523,"xp_rank":19},{"wallet_address":"0x1e7bc6ca55c336f0122052fd4221e98febc8e8ff","total_xp":225818,"xp_rank":20},{"wallet_address":"0xb7501438f42458fac8744122070e2a7a2b79783c","total_xp":215939,"xp_rank":21},{"wallet_address":"0x07ff87d3a7a1ef3e096a05ac498ef45ea6991b78","total_xp":215007,"xp_rank":22},{"wallet_address":"0xc42a37300bb5b6a76b41771cab6baa0d58f47608","total_xp":212358,"xp_rank":23},{"wallet_address":"0x70ddd8ffc952e4c46bc8aa5b3e0b02be93b89eca","total_xp":209516,"xp_rank":24},{"wallet_address":"0xbf7f3824cec99f73ac5fa53cc34116f4f0dbb69e","total_xp":209477,"xp_rank":25},{"wallet_address":"0x243bfe988c6d5f301fe24b1e5637998797c3a33a","total_xp":208879,"xp_rank":26},{"wallet_address":"0x25cc275cfe3cce1700e816e00d4cd1f60872038a","total_xp":208795,"xp_rank":27},{"wallet_address":"0xed0a80d834e1fb26efb1f051260c79644a28accd","total_xp":208703,"xp_rank":28},{"wallet_address":"0x3eea372582e72f1d189ce02e7a65968015622a01","total_xp":205671,"xp_rank":29},{"wallet_address":"0x64f7c019021ac74a68d90d08491ca43b2a632e71","total_xp":202832,"xp_rank":30},{"wallet_address":"0x861d7d7c8127794236f62bdb98846413c99d29b8","total_xp":202199,"xp_rank":31},{"wallet_address":"0x6671b47af0ee536500db027d97f21465ab39b621","total_xp":201354,"xp_rank":32},{"wallet_address":"0xa15fa77449243edfbeb7c35f5c551ece256a472e","total_xp":199401,"xp_rank":33},{"wallet_address":"0x8d7e26f2c89795e5a1c8c5154712b0cd9c577539","total_xp":199230,"xp_rank":34},{"wallet_address":"0x61d6d4008a680441d03ab1694a7b41e04ef3089f","total_xp":199110,"xp_rank":35},{"wallet_address":"0x3e07b5e7e6dae5e9323f363f3e8fee5f19946cf8","total_xp":197022,"xp_rank":36},{"wallet_address":"0xf79e6e9c6848fe682ec4901a9bbef18c155612a9","total_xp":196345,"xp_rank":37},{"wallet_address":"0x9a78efcc6dee6792d9a6ab3c45be04e5dcaa7a15","total_xp":195211,"xp_rank":38},{"wallet_address":"0x548b2a3c250d04e2116c77f4d4a36e60832ddbd7","total_xp":195116,"xp_rank":39},{"wallet_address":"0x4376e2d96b05c6262644bee7ee74acb97ba35aea","total_xp":194679,"xp_rank":40},{"wallet_address":"0xcd1a602678333d247cf229c95e9e867d93fde645","total_xp":193106,"xp_rank":41},{"wallet_address":"0x691ab1859560408e5d460fa21e7bce90529dfcda","total_xp":192108,"xp_rank":42},{"wallet_address":"0xf93a5f0a4925eec32cd585641c88a498523f383c","total_xp":189840,"xp_rank":43},{"wallet_address":"0x2e63fd628958cd277beeeb0cff45622e4df24c1f","total_xp":189366,"xp_rank":44},{"wallet_address":"0xdf7bca5b44c11173f39272fd5274d88d17544fb0","total_xp":188397,"xp_rank":45},{"wallet_address":"0xa33a46408c871c0c4d172e8036dfcdcb19e6f226","total_xp":187810,"xp_rank":46},{"wallet_address":"0xf35ec456867ae55040b8dbb6ee055bdadae6b5ca","total_xp":187774,"xp_rank":47},{"wallet_address":"0xa9821681fef27ed817df77e476dddaf0adac4443","total_xp":187441,"xp_rank":48},{"wallet_address":"0xaa72c83be008fe01e81a5082252deeaafdd8dfc9","total_xp":186625,"xp_rank":49},{"wallet_address":"0x15d337d70c22b20f895de31074dd74fcb974ef35","total_xp":185894,"xp_rank":50},{"wallet_address":"0x5115c23a954e9b946399574f6ff465020e9dfc39","total_xp":185609,"xp_rank":51},{"wallet_address":"0x0f22f5255b379f898a4762dc4f0690d8716343ad","total_xp":184599,"xp_rank":52},{"wallet_address":"0x21e08c04f29febce461be04789c1ee44d0e15da8","total_xp":181949,"xp_rank":53},{"wallet_address":"0x550bcc03e701e511ca12ec5ddfa26a069c6af44b","total_xp":181629,"xp_rank":54},{"wallet_address":"0xf278ac8e97dd418a3ce13307fa1b44ff87a18f7c","total_xp":180996,"xp_rank":55},{"wallet_address":"0x9293b2dd5d25d87741c7a601442a72799b4d89e7","total_xp":179722,"xp_rank":56},{"wallet_address":"0xefc5ff84594ebf147dceaeb5c41079672cf0d85c","total_xp":179358,"xp_rank":57},{"wallet_address":"0x6ad94395afa6cff02c5a81f23d1772b47e59f65b","total_xp":179160,"xp_rank":58},{"wallet_address":"0x6f593a98f9fd364027cd053bdee1fa97f9826a45","total_xp":178554,"xp_rank":59},{"wallet_address":"0x8af8a14e68998c49cf083fb60a4b415afe05b04b","total_xp":177080,"xp_rank":60},{"wallet_address":"0x78527f82d2895fca91a4ac6211e6e62c814068f5","total_xp":175929,"xp_rank":61},{"wallet_address":"0x83ed0969db692d47e801ed9dd93afb0755be2641","total_xp":173074,"xp_rank":62},{"wallet_address":"0x6b203f5b3205f42be690ab0241c18b0067877631","total_xp":172379,"xp_rank":63},{"wallet_address":"0x7eb9b4d28f2fe8492175c2664808677312f848fa","total_xp":171138,"xp_rank":64},{"wallet_address":"0x90e06d2d9705c181bad2a4e7c3dca13631a6f479","total_xp":171079,"xp_rank":65},{"wallet_address":"0x3cea2308d3e18b316d90ef37029f2ea26384c5cf","total_xp":170215,"xp_rank":66},{"wallet_address":"0x3818258d808c1ccb256a73845b4fdf9ccb8e1895","total_xp":170008,"xp_rank":67},{"wallet_address":"0x53b7e0ee69091569211e8ad58ccdeba8c07a5f8d","total_xp":169969,"xp_rank":68},{"wallet_address":"0x9dc717ca31349db567ec91ab8bbdfc9082ba5bb5","total_xp":169770,"xp_rank":69},{"wallet_address":"0xcfe0111b96000bfdf78dc1e1e895bd34b11a8b12","total_xp":169041,"xp_rank":70},{"wallet_address":"0xe674f6b5d12fb53d0ccdff3d0db68ab409ccba20","total_xp":168879,"xp_rank":71},{"wallet_address":"0xfea720d06616097ccddc1a3797200787e90296c0","total_xp":168371,"xp_rank":72},{"wallet_address":"0xeec710616e67864840b1841651a502e283d069e1","total_xp":166904,"xp_rank":73},{"wallet_address":"0x7c43716d46134e56b02ae35787c12e49680044a4","total_xp":166804,"xp_rank":74},{"wallet_address":"0x2ea35c0db6ec9ac1cf54b1048c51c3e24f9540e7","total_xp":165651,"xp_rank":75},{"wallet_address":"0x74189e1bcb1330aa7424b1a641ed7a9565ecffe7","total_xp":165155,"xp_rank":76},{"wallet_address":"0xfe5efb4861e2c7dabd365bdd984165191ddab20e","total_xp":164238,"xp_rank":77},{"wallet_address":"0x0e44be726b21565d3412aab0de1f6ba669cb2504","total_xp":164235,"xp_rank":78},{"wallet_address":"0xe125f87c89561e742540d364b0e3a00dc821f524","total_xp":163872,"xp_rank":79},{"wallet_address":"0xb4580b3d3028beb90df2f09371404b1b5c669b38","total_xp":163572,"xp_rank":80},{"wallet_address":"0x35fe43b81a850372dd5ae4aaef901f4577bdbaf0","total_xp":163506,"xp_rank":81},{"wallet_address":"0x1c7267800a277b5137574626460b9454e7e65ad1","total_xp":163492,"xp_rank":82},{"wallet_address":"0x2eab2e2ddf70a0ae88eec2a8fed278ef25c7bc81","total_xp":162786,"xp_rank":83},{"wallet_address":"0xa662b8b373b8db88aa28748e0d6dbb42586cb032","total_xp":162494,"xp_rank":84},{"wallet_address":"0x62d0e3e200beaee64492b19980664cedf1525293","total_xp":162340,"xp_rank":85},{"wallet_address":"0x817a7fd1dacd3eba0e6744d1687a0ddbb5e901d3","total_xp":161259,"xp_rank":86},{"wallet_address":"0xd7e89195581eff3cda0240684c053fbe2f6b99f6","total_xp":161027,"xp_rank":87},{"wallet_address":"0x19b8ab1a12f1cf7a4c43040e119648fcfee0bcfa","total_xp":160861,"xp_rank":88},{"wallet_address":"0x68a61a62e2ebb4e612fc8b9aada62547c10ba756","total_xp":160613,"xp_rank":89},{"wallet_address":"0x7811c360a5cfa1377ffdcc95b95dfd21db0dac06","total_xp":160360,"xp_rank":90},{"wallet_address":"0x6a51eee3a2c2d33921844965738ae99b81dbff95","total_xp":159934,"xp_rank":91},{"wallet_address":"0x92f8f06a69e54187b764b8151282966eba924772","total_xp":159351,"xp_rank":92},{"wallet_address":"0xaf9be60b6c94d66e72b6b01f6ecc77a14987950c","total_xp":159116,"xp_rank":93},{"wallet_address":"0xa5ca7ba88c12cb6a181b3ad79e525915d70f10b0","total_xp":158934,"xp_rank":94},{"wallet_address":"0x16aec0de2a760f972f99ae812966f87fc94ee323","total_xp":158759,"xp_rank":95},{"wallet_address":"0xb3db8d23a98780002b10da5fb082e47b2d22e4f3","total_xp":158685,"xp_rank":96},{"wallet_address":"0xb9ceca639675cfdd216a2461d0bef4aff3b4825d","total_xp":157607,"xp_rank":97},{"wallet_address":"0xcb2479b5e005e144464893fc222eaa268669e25c","total_xp":156900,"xp_rank":98},{"wallet_address":"0xae7038bb91f5e9319832e5bfb030f4d9bbc721ff","total_xp":156811,"xp_rank":99},{"wallet_address":"0x4066d9506e44c660a4b118599d65ec8117c58215","total_xp":156334,"xp_rank":100}],
      dailyRank: [{"wallet_address":"0x29f6dd839bec6e221a7fa06bbbe4e027da817f96","xp_change":19940,"rank":1},{"wallet_address":"0xbd73c7fe629b85dde4b4bb02cdaa7a799fcdee3d","xp_change":4509,"rank":2},{"wallet_address":"0x1e7bc6ca55c336f0122052fd4221e98febc8e8ff","xp_change":3779,"rank":3},{"wallet_address":"0xbbb4957d9a5b824df5f184c9489d4bdee3d15d1d","xp_change":3344,"rank":4},{"wallet_address":"0xff0c6444cb0fa6121a85e838219354bfe2e1556b","xp_change":3260,"rank":5},{"wallet_address":"0x3e07b5e7e6dae5e9323f363f3e8fee5f19946cf8","xp_change":3260,"rank":6},{"wallet_address":"0x8d7e26f2c89795e5a1c8c5154712b0cd9c577539","xp_change":3090,"rank":7},{"wallet_address":"0x8f234faf8974cdc99ad2628ef5ed0e9d644193eb","xp_change":3043,"rank":8},{"wallet_address":"0xfacc8546eda192b7461cbdde122ebc1ff998311d","xp_change":3040,"rank":9},{"wallet_address":"0xd3e0d660d8fab05b34ccb7fe7681628d9a46c675","xp_change":3040,"rank":10},{"wallet_address":"0x3b6dfed46945b61a5178f1ee222e23b59737d25b","xp_change":3040,"rank":11},{"wallet_address":"0xc9287d916e40ab6c3ade93f32a5b3063e6cbc72e","xp_change":3040,"rank":12},{"wallet_address":"0x673291b121296d61dfc40eda15fc0f9ad686be5c","xp_change":2980,"rank":13},{"wallet_address":"0x5ab2c4aa165f41673d02806af76ae4fefb91ad14","xp_change":2800,"rank":14},{"wallet_address":"0x6b9410449200579cf66e641df17d681f71537a7e","xp_change":2560,"rank":15},{"wallet_address":"0x15d337d70c22b20f895de31074dd74fcb974ef35","xp_change":2560,"rank":16},{"wallet_address":"0xadd175a913c299286c6c4763306e031ae913e43c","xp_change":2560,"rank":17},{"wallet_address":"0x2720f51e62aa54255fd2abe561f956a949e3d0b2","xp_change":2560,"rank":18},{"wallet_address":"0x9899db38f2a1197c0bb13494a9360a01c45a28cd","xp_change":2542,"rank":19},{"wallet_address":"0x67d602f84331ec06fcab9b4cffa697d2bc527ce7","xp_change":2536,"rank":20},{"wallet_address":"0x635a0c839c184f2c2420630f0828db1f0a72cbc6","xp_change":2500,"rank":21},{"wallet_address":"0x92410acba9b4d479566f1f5a6f4a3fd03dca947a","xp_change":2500,"rank":22},{"wallet_address":"0xcc31a8e0deec108ca31bab324f0ce8f5c6b977ce","xp_change":2500,"rank":23},{"wallet_address":"0x5ce66f35b519d7c0510e58595640735384829244","xp_change":2472,"rank":24},{"wallet_address":"0x6ad94395afa6cff02c5a81f23d1772b47e59f65b","xp_change":2400,"rank":25},{"wallet_address":"0xa4349d5618f252d4773ad236a9baf370586b22b1","xp_change":2390,"rank":26},{"wallet_address":"0xbf3b18da599f61a0d19ec74ca7e9c961aa50de09","xp_change":2240,"rank":27},{"wallet_address":"0xdd2ac0e69683fdfae3c4711f89fc607c5679f908","xp_change":2200,"rank":28},{"wallet_address":"0x083e84e876c3d2abcb043e5064c956b5b7e9efbb","xp_change":2200,"rank":29},{"wallet_address":"0x0b993a76b28a62137680a8ea36c3cf1700c52fc1","xp_change":2150,"rank":30},{"wallet_address":"0x38cba1a4186f80ca3da6646a266bc8e68a50a05c","xp_change":2150,"rank":31},{"wallet_address":"0x3a766c3901e85d792f5787f915eac67a18163687","xp_change":2150,"rank":32},{"wallet_address":"0x6926df6c71c3ef3f4cc5bfe8d4568458436e9a06","xp_change":2131,"rank":33},{"wallet_address":"0x76a0fdf9fcf64a42ad51c98bbe087dd8d208a084","xp_change":2130,"rank":34},{"wallet_address":"0x9f80ab805e4a0f66d0a73c4337fd4e2d60b678d5","xp_change":2114,"rank":35},{"wallet_address":"0x531868c7bcd2119820c94505dfd0764f7214e01e","xp_change":2112,"rank":36},{"wallet_address":"0x6aace09b6d7ce67416d4867750725b88cee48028","xp_change":2100,"rank":37},{"wallet_address":"0x70692c3190ec8a4613cdb77548b9a964daab2335","xp_change":2100,"rank":38},{"wallet_address":"0x2631d0518286d5ba09135eebef730952199ebcbc","xp_change":2100,"rank":39},{"wallet_address":"0x6e3f8f0a6446bdc33124fe906a93fa49755a0223","xp_change":2080,"rank":40},{"wallet_address":"0xe11d242ffa7277bf7a50af1f334ce863d24e13dc","xp_change":2072,"rank":41},{"wallet_address":"0x1f42ab0e7b223d2bc62661210d4bbdf42df9cc56","xp_change":2050,"rank":42},{"wallet_address":"0x649b4ab8b1af6dcadc1d619cd1ae6c94263f7118","xp_change":2050,"rank":43},{"wallet_address":"0x5980d4708655fbf6c8f4a4f00a150e3be705fe05","xp_change":2050,"rank":44},{"wallet_address":"0x189f542ece0fb71fda929f9a168e70f3dc2a7241","xp_change":2050,"rank":45},{"wallet_address":"0xb459b389ec6863669337c9aef12dc5e86f95a167","xp_change":2050,"rank":46},{"wallet_address":"0x62bac9ee8ea81678590db3416253adaf745c880e","xp_change":2050,"rank":47},{"wallet_address":"0xaa4c0b59afd2015eab17635e1bfd009465ed102e","xp_change":2050,"rank":48},{"wallet_address":"0xf3776b921f110e80ccb81e04842ba8ce448a9489","xp_change":2050,"rank":49},{"wallet_address":"0xe56aee446ec80938750bf0a10b04c28425cc7e03","xp_change":2050,"rank":50},{"wallet_address":"0xde3be2209cca865fa26591eb1eb82f3198a9bb6a","xp_change":2010,"rank":51},{"wallet_address":"0x968f88db1d1efb2013348a39cd511efed5f79088","xp_change":2001,"rank":52},{"wallet_address":"0x9e51fb77f96468a37b4291698952cfcfc3232954","xp_change":2000,"rank":53},{"wallet_address":"0x651817b6b7464b61c6c6ef87da2bc84ee0e64377","xp_change":2000,"rank":54},{"wallet_address":"0x9d4f9dcffad67d8ec0f512112102057da34daf06","xp_change":1950,"rank":55},{"wallet_address":"0xa4b00e932f576af7031568964c8008d09c94f0ab","xp_change":1950,"rank":56},{"wallet_address":"0xf123e9b47aa50265d01cb0b69b2b027ab8e5470e","xp_change":1940,"rank":57},{"wallet_address":"0xbf7f3824cec99f73ac5fa53cc34116f4f0dbb69e","xp_change":1935,"rank":58},{"wallet_address":"0x5da2232174ba9f87c96976e0dfa03480adea609e","xp_change":1920,"rank":59},{"wallet_address":"0x6246e6476278d5b8dd372b013d6d8183616ac789","xp_change":1920,"rank":60},{"wallet_address":"0x01cb0c5e571e1e3fda1ff7c1118f37351616b9fe","xp_change":1911,"rank":61},{"wallet_address":"0x8d477d181ce76bd849fe66b71481ca69fdbb5b09","xp_change":1910,"rank":62},{"wallet_address":"0x90876256884227ca24babf9109b27c6d0c4a47ea","xp_change":1900,"rank":63},{"wallet_address":"0xc98b52f576cbbe0b3404e4b33660a07f53aa33e3","xp_change":1900,"rank":64},{"wallet_address":"0x77ae21ea0b4cf57f1db3b8724211980f5906236a","xp_change":1900,"rank":65},{"wallet_address":"0x116aedce83a8ed5455f2196858254db2de10ceff","xp_change":1860,"rank":66},{"wallet_address":"0xf2f04911fed12258f0865954040f1628b7e96caf","xp_change":1853,"rank":67},{"wallet_address":"0x7da6855565ba5079a3b3ea9f6a545cb84bdc1a33","xp_change":1851,"rank":68},{"wallet_address":"0x05715d72c1cd882c215fa23bbf6fd37b4ea9e24c","xp_change":1850,"rank":69},{"wallet_address":"0xff36da79cf472a3d0d60f95561adce920514630f","xp_change":1833,"rank":70},{"wallet_address":"0x6c76e681cbc01b283677cb5255587c22a29780f0","xp_change":1810,"rank":71},{"wallet_address":"0x7fe8c4879f5b196d7b09aa2755f42510ec67d830","xp_change":1810,"rank":72},{"wallet_address":"0xd34c34adcc9b3556c0b5d9a7640b0601e4cbb562","xp_change":1800,"rank":73},{"wallet_address":"0xfb241afe2a2f4d616ec1e54b9874e56366eb3c84","xp_change":1800,"rank":74},{"wallet_address":"0x1ed5019cc591e18b3e4c792dea9b3e5b97f7a9c8","xp_change":1775,"rank":75},{"wallet_address":"0x1851a4dd5c5cc7242423538ef288db6e00782e2a","xp_change":1774,"rank":76},{"wallet_address":"0xfd0ed15db61545cdd1886d0da20edd71d0d41b03","xp_change":1764,"rank":77},{"wallet_address":"0xa3e56a7d3c97681d443de712e3d397d8d8d8a077","xp_change":1760,"rank":78},{"wallet_address":"0xabbabc05974eb5c37c59f0efb4b66adfc78ad5f7","xp_change":1760,"rank":79},{"wallet_address":"0xc86d774998a60e1cb3f340dd234d6253ffb8ecaa","xp_change":1760,"rank":80},{"wallet_address":"0xef8e4737856a13350fdf154bf04b98cd79db94f2","xp_change":1760,"rank":81},{"wallet_address":"0xb968662a99a8d20868968c1a8f1f6952e4e01b49","xp_change":1751,"rank":82},{"wallet_address":"0xc257e8dc26478aa12364afe3484e783304b4bbd2","xp_change":1750,"rank":83},{"wallet_address":"0xb5ecdec6aaec462f9b2c50d204da1a47bd9553ef","xp_change":1750,"rank":84},{"wallet_address":"0x90a455f4b886d74d9869570e59abf76ab5da70a3","xp_change":1750,"rank":85},{"wallet_address":"0x00420ab5c9c465d8b38acff4daf56f4aba4a9114","xp_change":1750,"rank":86},{"wallet_address":"0x1418bdc1f7c5513c3566f628668544c4a347a69a","xp_change":1750,"rank":87},{"wallet_address":"0x2eb6ddb3670f018b97ca89919c6812820b0ce2e1","xp_change":1750,"rank":88},{"wallet_address":"0x2d680165dd63f6842e9d0b3b4c56533fa90d2b82","xp_change":1750,"rank":89},{"wallet_address":"0x1235e811a7608a36a14173ff804149829369fcf9","xp_change":1750,"rank":90},{"wallet_address":"0x338193378c023e4ebf0ac57e088e8b34840a2b60","xp_change":1750,"rank":91},{"wallet_address":"0xdf2395a675f02532a00f1df349db0310218473fa","xp_change":1750,"rank":92},{"wallet_address":"0xe3390584feaeb1e32e7b5fae398c15338cc1db0f","xp_change":1750,"rank":93},{"wallet_address":"0xe80956e17ec7eb935a0821658096c10c961c47c5","xp_change":1750,"rank":94},{"wallet_address":"0x81846a7e9d3ecb3f9824457963f6fb79f7b5f2be","xp_change":1750,"rank":95},{"wallet_address":"0x439353cce62d40b57a6299fd0047914c8fc914e2","xp_change":1750,"rank":96},{"wallet_address":"0x9389dab1505256d6df6e2b8800619a269473ca32","xp_change":1750,"rank":97},{"wallet_address":"0xd6767bd5f4810c0604e6b2b928d5580f65412b8f","xp_change":1750,"rank":98},{"wallet_address":"0xabd83157d075db04bda8a847cac0a2dc233e3023","xp_change":1750,"rank":99},{"wallet_address":"0xab1849a4b6fdc704a22990d2fafdea9294a595a5","xp_change":1750,"rank":100}]
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
      box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.05);
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
      box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.05);
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