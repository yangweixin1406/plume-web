import request from './request'
import { baseUrl } from '@/config/env'
import axios from "axios";
import NProgress from "nprogress";
import dsBridge from "dsbridge";
import {setToken} from "@/util/auth";
import {Base64} from "js-base64";
import website from "@/config/website";
import {getToken} from "@/util/ls";
import {serialize} from "@/util/util";

const re = axios.create({
  baseURL: baseUrl,
  timeout: 30000
})
re.interceptors.request.use(config => {
  //开启 progress bar
  if (!config.closeProcess) {
    NProgress.start();
  }
  //headers判断是否需要
  const authorization = config.authorization === false;
  if (!authorization) {
    config.headers['Authorization'] = `Basic ${Base64.encode(website.clientId + ':' + website.clientSecret)}`;
  }
  const meta = (config.meta || {});
  const isToken = meta.isToken === false;
  //让每个请求携带token
  if (getToken() && !isToken) {
    let token = getToken();
    if(!token.startsWith('bearer')) {
      token = 'bearer ' + token
    }
    config.headers[website.tokenHeader] = token
  }
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
re.interceptors.response.use(res => {
  //关闭 progress bar
  NProgress.done();
  //获取状态码
  const status = res.data.code || res.status;
  const message = res.data.msg || res.data.error_description || '未知错误';
  if (status === 401) {
    const token = dsBridge.call('device.getToken')
    if (token) {
      localStorage.setItem('token', token)
      setToken(token)
    }
  }
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {
    return Promise.reject(new Error(message))
  }
  return res;
}, error => {
  NProgress.done();
  return Promise.reject(new Error(error));
});

// 获取地块信息
export const checkCard = (cardNumber) => {
  return request({
    url: `${baseUrl}/cfec-system/integratedMachine/checkCard`,
    method: 'post',
    params: {
      cardNumber
    }
  })
}

// 验证登录密码是否正确
export const verifyPassword = (loginPwd) => {
  return request({
    url: `${baseUrl}/cfec-system/cfecDevice/verifyPassword`,
    method: 'post',
    params: {
      loginPwd
    }
  })
}

export const checkBarCode = (params) => {
  return request({
    url: `${baseUrl}/cfec-system/integratedMachine/checkBarCode`,
    method: 'get',
    params
  }) 
}

export const submitCheck = (params) => {
  return request({
    url: `${baseUrl}/cfec-system/integratedMachine/subCheckIn`,
    method: 'post',
    params
  }) 
}

// 获取登录密码
export const showInfo = (params) => {
  return request({
    url: `${baseUrl}/device-cabinet-system/cabinet-device-config/getDeviceConfig`,
    method: 'get',
    params
  })
}

// 更新登录密码
export const updateDeviceConfig = (clientPwd) => {
  return request({
    url: `${baseUrl}/device-cabinet-system/cabinet-device-config/updateDeviceConfig`,
    method: 'post',
    data: {
      clientPwd
    }
  })
}

// 获取箱柜信息
export const getAllBoxPage = (current, size) => {
  return request({
    url: `${baseUrl}/device-cabinet-system/cabinet-box/getAllBoxPage`,
    method: 'get',
    params: {
      current,
      size
    }
  })
}

// 保存开门记录
export const saveBoxOpenLog = (boxId, result, type) => {
  return request({
    url: `${baseUrl}/device-cabinet-system/cabinet-box-open-log/saveBoxLockLog`,
    method: 'post',
    params: {
      boxId,
      result,
      type
    }
  })
}

// 保存开门记录
export const saveBoxCloseLog = (lockBoard, lockChannel, result, type) => {
  return request({
    url: `${baseUrl}/device-cabinet-system/cabinet-box-open-log/saveBoxLockLog`,
    method: 'post',
    params: {
      lockBoard,
      lockChannel,
      result,
      type
    }
  })
}