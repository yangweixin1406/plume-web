import request from './request'
import { baseUrl } from '@/config/env'

// 获取文件列表
export const getOrderFileList = ({ type, authCode, userId }) => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/getOrderFileList`,
    method: 'post',
    data: {
      type,
      authCode,
      userId
    }
  })
}

// 获取文件列表
export const getCheckedFileList = ({ type, authCode, userId }) => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/getFileResultPage`,
    method: 'post',
    data: {
      type,
      authCode,
      userId
    }
  })
}

// 上传拍照的照片
export const uploadPhoto = ({ file, fileId, isOver, pageIndex }) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileId', fileId);
  formData.append('isOver', isOver);
  formData.append('pageIndex', pageIndex);
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/uploadPhoto`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  })
}

// 上传pdf文件接口
export const uploadPdf = ({ file, fileId }) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileId', fileId);
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/uploadPdf`,
    method: 'post',
    data: formData
  })
}

// 发起验证
export const startFileCheck = ({ fileId, authCode, userId, pdfId }) => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/startFileCheck`,
    method: 'post',
    params: {
      fileId,
      authCode,
      userId,
      pdfId
    }
  })
}

// 获取文件核验结果
export const getFileCheckInfo = (resultId) => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/getFileCheckInfo`,
    method: 'get',
    params: {
      resultId
    }
  })
}

// 获取文件核验结果
export const getIndexData = () => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/indexDataApi`,
    method: 'get'
  })
}

// 文件归档接口
export const submitFileArchive = (fileId) => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/submitFileArchive`,
    method: 'post',
    params: {
      fileId
    }
  })
}

// 提交人工审核
export const submitCustomerCheck = ({ fileId, resultId}) => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/submitCustomerCheck`,
    method: 'post',
    params: {
      fileId,
      resultId
    }
  })
}

// 获取今日核对数据
export const getIndexCheckList = () => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/totalCheckData`,
    method: 'get',
    params: {
      size: 10,
      current: 1
    }
  })
}

// 获取今日核对数据
export const getRecheckInfo = (fileId) => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/retryCheck`,
    method: 'get',
    params: {
      fileId
    }
  })
}

// 获取今日核对数据
export const getArchiveStatus = (fileId) => {
  return request({
    url: `${baseUrl}/seal-cabinet-system/sealWorkDesk/archive`,
    method: 'get',
    params: {
      fileId
    }
  })
}