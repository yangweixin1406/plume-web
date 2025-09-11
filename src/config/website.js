/**
 * 全局配置文件
 */
export default {
  title: "数字办公中台管理系统",
  logo: "S",
  key: 'saber',//配置主键,目前用于存储
  indexTitle: '数字办公中台',
  clientId: 'cfec_device', // 客户端id
  clientSecret: 'cfec_device_value', // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  tenantId: "000000", // 管理组租户编号
  captchaMode: true, // 是否开启验证码模式
  switchMode: false, // 是否开启部门切换模式
  lockPage: '/lock',
  tokenTime: 3000,
  tokenHeader: 'Blade-Auth',
  //http的status默认放行列表
  statusWhiteList: [],
  //配置首页不可关闭
  isFirstPage: false,
  fistPage: {
    label: "首页",
    value: "/wel/index",
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard'
    },
    group: [],
    close: false
  },
  changePwdPage: '/changepassword',
  //配置菜单的属性
  menu: {
    iconDefault: 'iconfont icon-caidan',
    props: {
      label: 'name',
      path: 'path',
      icon: 'source',
      children: 'children'
    }
  },
  // 第三方系统授权地址
  authUrl: 'http://localhost/blade-auth/oauth/render',
  // 流程设计器地址
  flowDesignUrl: 'http://localhost:9999',
  // 报表设计器地址(cloud端口为8108,boot端口为80)
  reportUrl: 'http://localhost:8108/ureport',
  // AVue的全局配置
  avOption: {
    indexLabel: '序号'
  },
  // 单点登录系统认证(blade-auth服务的地)
  ssoUrl: 'http://localhost:8100/oauth/authorize?client_id=saber&response_type=code&redirect_uri=',
  // 单点登录回调地址(Saber服务的地址)
  redirectUri: 'http://localhost:1888/szdx-saber',
  //sm2公钥--后端生成提供
  sm2PublicKey: '043e69ad24cd6cf33c5a737ce504ef41082a35711ed70eccb5be715c2142824c9a58bee3d60ee968f162857722a79e30a5ff5eb4442c6a97a04123f9bd1d9cca8b',
  //sm2私钥--后端生成提供
  sm2PrivateKey:"00ccec46b927f9463bfd1c7a2cf6bd966d226912d1df44b5dbab8218ba88cf1eb3",
}
