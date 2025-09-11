import request from './request'
import { baseUrl } from '@/config/env'

// 验证登录密码是否正确
export const verifyPassword = (deviceCode, clientPwd) => {
  return request({
    url: `${baseUrl}/device-cabinet-system/cabinet-device-auth/manageAuthLogin`,
    method: 'post',
    params: {
      deviceCode,
      clientPwd
    }
  })
}