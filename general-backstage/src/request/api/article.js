import axios from '../http'

const article = {
  // 测试跨域
  getMusicList (params) { return axios.post('/admin/index/getTjItem', { ...params }) },

  // 获取地区
  getCityList (params) { return axios.post('/common/getAreaListByPid', { pid: params }) },

  // 注册
  sendRegister (params) { return axios.post('/common/register', { ...params }) },

  // 注册发送短信
  get_registerverify_code (params) { return axios.post('/common/get_registerverify_code', { ...params }) },

  // 登陆发送短信
  get_loginverify_code (params) { return axios.post('/common/get_loginverify_code', { ...params }) },

  // 登陆账号密码
  login (params) { return axios.post('/common/login', { ...params }) },

  // 短信登陆   
  phlogin (params) { return axios.post('/common/phlogin', { ...params }) },

  // 获取动态分页列表
  getSharePageList (params) { return axios.post('/admin/share/getSharePageList', { ...params }) },

  // 删除一个动态
  delShareItem (params) { return axios.post('/admin/share/delShareItem', { ...params }) },

  // 获取短视频分页列表
  getShortVideoPageList (params) { return axios.post('/admin/mssp/getShortVideoPageList', { ...params }) },

  // 获取短视频
  getShortVideoItem (params) { return axios.post('/admin/mssp/getShortVideoItem', { ...params }) },

  // 核准短视频
  setPassItem (params) { return axios.post('/admin/mssp/setPassItem', { ...params }) },

  // 未审短视频
  setRenewItem (params) { return axios.post('/admin/mssp/setRenewItem', { ...params }) },

  // 删除一个短视频
  delShortVideoItem (params) { return axios.post('/admin/mssp/delShortVideoItem', { ...params }) },

  // 获取关注分页列表
  getFriendPageList (params) { return axios.post('/admin/friend/getFriendPageList', { ...params }) },

  // 获取问答分页列表
  getAskPageList (params) { return axios.post('/admin/ask/getAskPageList', { ...params }) },

  // 获取问答评论分页列表
  getCommentPageList (params) { return axios.post('/admin/ask/getCommentPageList', { ...params }) },

  // 获取资讯一级分类分页列表
  getBoardPageList (params) { return axios.post('/admin/board/getBoardPageList', { ...params }) },

  // 删除一个资讯分类
  delBoardItem (params) { return axios.post('/admin/board/delBoardItem', { ...params }) },

  // 编辑一个资讯分类
  setBoardItem (params) { return axios.post('/admin/board/setBoardItem', { ...params }) },

  // 获取资讯分页列表
  getArticlePageList (params) { return axios.post('/admin/board/getArticlePageList', { ...params }) },

  // 获取文件上传upToken
  getUploadToken () { return axios.post('/file/getUploadToken') },

  // 获取文件上传地址
  getUploadUrl (parmas) { return axios.post('/front/file/getUploadUrl', { ...params }) }
}

export default article
