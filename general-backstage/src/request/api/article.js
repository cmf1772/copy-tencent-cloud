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

  // 注册发送短信
  get_registerverify_code (params) {
    return axios.post('/common/get_registerverify_code', {
      ...params
    })
  },

  // 登陆发送短信
  get_loginverify_code (params) {
    return axios.post('/common/get_loginverify_code', {
      ...params
    })
  },


  // 登陆账号密码
  login (params) {
    return axios.post('/common/login', {
      ...params
    })
  },

  // 短信登陆   
  phlogin (params) {
    return axios.post('/common/phlogin', {
      ...params
    })
  },
}

export default article
