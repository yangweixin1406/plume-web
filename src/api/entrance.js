import request from './request'

// 获取门禁首页信息
export const getIndexInfo = (deviceCode) => {
    return request({
        url: `/entrance-guard-system/entrance-guard-callback/guard-statistics`,
        method: 'get',
        params: {
            deviceCode,
        }
    })
}

// 获取今日待用印章订单
export const getOrderList = (deviceCode) => {
    return request({
        url: `/entrance-guard-system/entrance-guard-callback/guard-order-list`,
        method: 'get',
        params: {
            deviceCode,
        }
    })
}

// 判断用户是否可以通行
export const identifyResult = (data) => {
    return request({
        url: `/entrance-guard-system/entrance-guard-callback/identify`,
        method: 'post',
        data
    })
}

// 同步识别记录
export const syncRecord = (data) => {
    return request({
        url: `/entrance-guard-system/entrance-guard-callback/sync-record`,
        method: 'post',
        data
    })
}

// 校验授权码
export const identifyCode = (deviceCode, authCode) => {
    return request({
        url: `/entrance-guard-system/entrance-guard-callback/identify-code`,
        method: 'post',
        data: {
            deviceCode,
            authCode
        }
    })
}

// 校验手机号
export const identifyPhone = (deviceCode, phoneCode) => {
    return request({
        url: `/entrance-guard-system/entrance-guard-callback/identify-phone`,
        method: 'post',
        data: {
            deviceCode,
            phoneCode
        }
    })
}

// 获取告警信息列表
export const guardWarningList = (deviceCode) => {
    return request({
        url: `/warning-center-system/warningLog/guardWarningList`,
        method: 'get',
        params: {
            deviceCode,
        }
    })
}