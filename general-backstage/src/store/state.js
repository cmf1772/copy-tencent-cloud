export default {
  cityList: [], //盛
  areaList: [], //市
  county: [], // 县
  district: [], // 乡
  computerType: '', //电脑型号
  token: document.cookie.match(new RegExp("(^| )token=([^;]*)(;|$)")) !== null ? document.cookie.match(new RegExp("(^| )token=([^;]*)(;|$)"))[2] : '',
  upToken: '',
  getUploadUrl: ''
}