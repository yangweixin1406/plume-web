/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from 'axios';
import {serialize} from '@/util/util';
import {Message} from 'element-ui';
import website from '@/config/website';
import {Base64} from 'js-base64';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import dsBridge from 'dsbridge'

//默认超时时间
axios.defaults.timeout = 50000;
//返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500;
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress 配置
NProgress.configure({
  showSpinner: false
});
//http request拦截
axios.interceptors.request.use(config => {
  //开启 progress bar
  if (!config.closeProcess) {
    NProgress.start();
  }
  config.headers['Blade-Requested-With'] = 'BladeHttpRequest'
  //headers判断是否需要
  const authorization = config.authorization === false;
  if (!authorization) {
    config.headers['Authorization'] = `Basic ${Base64.encode(website.clientId + ':' + website.clientSecret)}`;
  }
  const meta = (config.meta || {});
  //让每个请求携带token
  // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJibGFkZXguY24iLCJhdWQiOlsiYmxhZGV4Il0sInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiJzYWJlcjMiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsImRlcHRfaWQiOiIxMTIzNTk4ODEzNzM4Njc1MjAyIiwicG9zdF9pZCI6IjExMjM1OTg4MTc3Mzg2NzUyMDEiLCJyb2xlX2lkIjoiMTEyMzU5ODgxNjczODY3NTIwMSIsIm9hdXRoX2lkIjoiIiwiYWNjb3VudCI6ImFkbWluIiwidXNlcl9uYW1lIjoiYWRtaW4iLCJuaWNrX25hbWUiOiLnrqHnkIblkZgiLCJyZWFsX25hbWUiOiLnrqHnkIblkZgiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwiZGV0YWlsIjp7InR5cGUiOiJ3ZWIifSwiZXhwIjoxNzQ5NjA4NjI3LCJuYmYiOjE3NDk2MDUwMjd9.IHi2Y3muatw_HQ6VMJHdk6CGQmmdWU9AKQ349co4Cis'
  let token = dsBridge.call('device.getToken')
  if(!token.startsWith('bearer')) {
    token = 'bearer ' + token
  }
  config.headers[website.tokenHeader] = token
  //headers中配置text请求
  if (config.text === true) {
    config.headers["Content-Type"] = "text/plain";
  }
  //headers中配置serialize为true开启序列化
  if (config.method === 'post' && meta.isSerialize === true) {
    config.data = serialize(config.data);
  }
  return config
}, error => {
  return Promise.reject(error)
});
//http response 拦截
axios.interceptors.response.use(res => {
  //关闭 progress bar
  NProgress.done();
  //获取状态码
  const status = res.data.code || res.status;
  const message = res.data.msg || res.data.error_description || '未知错误';
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {
    Message({
      message: message,
      type: 'error'
    });
    return Promise.reject(new Error(message))
  }
  return res;
}, error => {
  NProgress.done();
  return Promise.reject(new Error(error));
});

export default axios;
 