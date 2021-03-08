export default {
  cityList: [], //盛
  areaList: [], //市
  county: [], // 县
  district: [], // 乡
  computerType: '', //电脑型号
  token: document.cookie.match(new RegExp("(^| )token=([^;]*)(;|$)")) !== null ? document.cookie.match(new RegExp("(^| )token=([^;]*)(;|$)"))[2] : '',
  upToken: '',
  user: document.cookie.match(new RegExp("(^| )user=([^;]*)(;|$)")) !== null ? JSON.parse(document.cookie.match(new RegExp("(^| )user=([^;]*)(;|$)"))[2]) : '',
  getUploadUrl: '',
  getCategoryList: [], // 商品分类列表
  getSubList: [], // 商品子菜单
}