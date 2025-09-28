import request from './request'
import { baseUrl } from '@/config/env'

export const getPlatformStats = () => {
    return request({
        url: `${baseUrl}/platform-stats`,
        method: 'get'
    })
}

export const getGobalRank = () => {
    return request({
        url: `${baseUrl}/global-rank`,
        method: 'get'
    })
}

export const getDailtRank = () => {
    return request({
        url: `${baseUrl}/daily-rank`,
        method: 'get'
    })
}