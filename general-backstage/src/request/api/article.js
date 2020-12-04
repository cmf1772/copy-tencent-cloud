import axios from '../http'
import funJson from './classify/cmfAxios'

const article = {
  getMusicList (params) {
    return axios.post('/admin/index/getTjItem')
  },

  // 获取地区
  getCityList (params) {
    return axios.post('/common/getAreaListByPid', {
      pid: params
    })
  },

  // 注册
  sendRegister (params) {
    return axios.post('/common/register', {
      ...params
    })
  },

  // 发送短信
  get_registerverify_code (params) {
    return axios.post('/common/get_registerverify_code', {
      ...params
    })
  }
}

export default article
