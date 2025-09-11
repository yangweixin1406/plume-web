import request from './request'
import { baseUrl } from '@/config/env'

// 获取地块信息
export const getParcelList = (params = {}) => {
  return request({
    url: `${baseUrl}/zgj-map/parcel/parcelList`,
    method: 'get',
    params
  })
}

// 获取图层列表
export const getLayerList = (params = {}) => {
  return request({
    url: `${baseUrl}/zgj-bladex/layer/layerList`,
    method: 'get',
    params
  })
}

/**
 * 地图搜索
 * @param {*} params 
 * @returns 
 * layerId 图层id
 * parcelName 地块名称
 */
export const mapSearch = (params = {}) => {
  return request({
    url: `${baseUrl}/zgj-map/parcel/mapSearch`,
    method: 'get',
    params
  })
}

/**
 * 获取图层列表
 * @param {*} params 
 * @returns 
 * cityCode 城市code
 */
export const getRegionList = () => {
  return request({
    url: `${baseUrl}/blade-system/region/cityRegionList`,
    method: 'get',
    params: {
      cityCode: '3413'
    }
  })
}

/**
 * 获取图例列表
 * @param {*} params 
 * @returns 
 */
export const getSelectionList = (params) => {
  return request({
    url: `${baseUrl}/zgj-bladex/landUsage/selectionList`,
    method: 'get',
    params
  })
}