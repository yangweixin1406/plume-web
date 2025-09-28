module.exports = {
  //路径前缀
  publicPath: "./",
  lintOnSave: true,
  productionSourceMap: false,
  assetsDir: 'static',
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
    });
    config.module
        .rule('js')
        .test(/\.js$/)
        .use('babel-loader')
        .loader('babel-loader')
        .end();
    const entry = config.entry('app');
    entry.add('babel-polyfill').end();
    entry.add('classlist-polyfill').end();
  },
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 1888,
    proxy: {
      '/': {
        //本地服务接口地址
        target: 'http://192.168.1.3:8000',
        ws: true
      }
    }
  }
};