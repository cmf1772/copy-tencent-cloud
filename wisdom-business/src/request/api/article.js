import axios from '../http'

const article = {
  // 测试跨域
  getMusicList (params) { return axios.post('/admin/index/getTjItem', { ...params }) },

  // 获取地区
  getCityList (params) { return axios.post('/common/getAreaListByPid', { pid: params }) },

  // 注册
  sendRegister (params) { return axios.post('/common/registerPc', { ...params }) },

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

  /**
   * 商铺管理
   * */

  // 获取列表
  getPagePageList (params) { return axios.post('/sadmin/page/getPagePageList', { ...params }) },

  // 添加
  addPageItem (params) { return axios.post('/sadmin/page/addPageItem', { ...params }) },

  /**
   * 手机轮播广告
   * */

  getCyclePageList (params) { return axios.post('/sadmin/wapcycle/getCyclePageList', { ...params }) },

  // 添加
  addCycleItem (params) { return axios.post('/sadmin/wapcycle/addCycleItem', { ...params }) },

  // 获取
  getCycleItem (params) { return axios.post('/sadmin/wapcycle/getCycleItem', { ...params }) },

  // 编辑
  setCycleItem (params) { return axios.post('/sadmin/wapcycle/setCycleItem', { ...params }) },

  // 删除
  delCycleItem (params) { return axios.post('/sadmin/wapcycle/delCycleItem', { ...params }) },

  /**
   * 轮播广告
   * */
  ngetCyclePageList (params) { return axios.post('/sadmin/cycle/getCyclePageList', { ...params }) },

  // 添加
  naddCycleItem (params) { return axios.post('/sadmin/cycle/addCycleItem', { ...params }) },

  // 获取
  ngetCycleItem (params) { return axios.post('/sadmin/cycle/getCycleItem', { ...params }) },

  // 编辑
  nsetCycleItem (params) { return axios.post('/sadmin/cycle/setCycleItem', { ...params }) },

  // 删除
  ndelCycleItem (params) { return axios.post('/sadmin/cycle/delCycleItem', { ...params }) },

  /**
   *  图片广告
   * */

  // 列表
  getBannerPageList (params) { return axios.post('/sadmin/banner/getBannerPageList', { ...params }) },

  // 添加
  tgaddCycleItem (params) { return axios.post('/sadmin/banner/addCycleItem', { ...params }) },

  // 获取
  getBannerItem (params) { return axios.post('/sadmin/banner/getBannerItem', { ...params }) },

  // 编辑
  tgsetCycleItem (params) { return axios.post('/sadmin/banner/setCycleItem', { ...params }) },

  // 删除
  delBannerItem (params) { return axios.post('/sadmin/banner/delBannerItem', { ...params }) },

  /**
   *  弹窗广告
   * */

  // from
  addPopupItem (params) { return axios.post('/sadmin/popup/addPopupItem', { ...params }) },

  // 获取
  getPopupItem (params) { return axios.post('/sadmin/popup/getPopupItem', { ...params }) },

  // 清除
  delPopupItem (params) { return axios.post('/sadmin/popup/delPopupItem', { ...params }) },


  /**
   * 商家展示
   * */

  //  获取
  sjgetPageItem (params) { return axios.post('/sadmin/enpage/getPageItem', { ...params }) },

  // 编辑
  setPageItem (params) { return axios.post('/sadmin/enpage/setPageItem', { ...params }) },

  // 删除
  delCertiItem (params) { return axios.post('/sadmin/enpage/delCertiItem', { ...params }) },

  /**
   * 导航管理
   * */

  // 添加
  addNavItem (params) { return axios.post('/sadmin/navigation/addNavItem', { ...params }) },

  // 列表
  getNavPageList (params) { return axios.post('/sadmin/navigation/getNavPageList', { ...params }) },

  // 获取
  getNavItem (params) { return axios.post('/sadmin/navigation/getNavItem', { ...params }) },

  // 编辑
  setNavItem (params) { return axios.post('/sadmin/navigation/setNavItem', { ...params }) },

  // 删除
  delNavItem (params) { return axios.post('/sadmin/navigation/delNavItem', { ...params }) },

  /**
  * 基础设置
  * */

  // 添加
  setEnvSet (params) { return axios.post('/sadmin/settings/setEnvSet', { ...params }) },

  // 获取
  getEnvSet (params) { return axios.post('/sadmin/settings/getEnvSet', { ...params }) },

  /**
   * 客服设置
   * */

  // 添加
  setMsgSet (params) { return axios.post('/sadmin/settings/setMsgSet', { ...params }) },

  // 获取
  getMsgSet (params) { return axios.post('/sadmin/settings/getMsgSet', { ...params }) },

  /**
   * 短信设置
   * */

  // 获取
  getSmsSet (params) { return axios.post('/sadmin/settings/getSmsSet', { ...params }) },

  // 预付款充值
  supplierApplySms (params) { return axios.post('/sadmin/settings/supplierApplySms', { ...params }) },

  // 短信剩余数量
  getTotalShopSms (params) { return axios.post('/sadmin/settings/getTotalShopSms', { ...params }) },

  // 短信数量和价格
  getSmsMoneyNum (params) { return axios.post('/sadmin/settings/getSmsMoneyNum', { ...params }) },

  // 当前预付款
  getTotalShopMoney (params) { return axios.post('/sadmin/settings/getTotalShopMoney', { ...params }) },

  // 编辑
  setSmsSet (params) { return axios.post('/sadmin/settings/setSmsSet', { ...params }) },

  /**
   * 商铺认证
   * */

  // 添加
  setXb (params) { return axios.post('/sadmin/supcheck/setXb', { ...params }) },

  // 获取
  getSupCheckInfo (params) { return axios.post('/sadmin/supcheck/getSupCheckInfo', { ...params }) },

  // 个人身份证
  setIdCard (params) { return axios.post('/sadmin/supcheck/setIdCard', { ...params }) },

  // 商铺认证
  setLicence (params) { return axios.post('/sadmin/supcheck/setLicence', { ...params }) },

  /**
   * 域名设置
   * */

  // COOKIE域名
  getCookieDomain (params) { return axios.post('/sadmin/tld/getCookieDomain', { ...params }) },

  // 二级域名
  getSecTldItem (params) { return axios.post('/sadmin/tld/getSecTldItem', { ...params }) },

  // 顶级域名
  getTldItem (params) { return axios.post('/sadmin/tld/getTldItem', { ...params }) },

  // 设置顶级域名
  setTldItem (params) { return axios.post('/sadmin/tld/setTldItem', { ...params }) },

  /**
   * 商铺托管
   * */

  //  提交
  applyShop (params) { return axios.post('/sadmin/supapply/applyShop', { ...params }) },

  /**
   * 模版购买
   * */

  //  所有
  getAllTplPageList (params) { return axios.post('/sadmin/tpl/getAllTplPageList', { ...params }) },

  // 购买
  getBuyTplList (params) { return axios.post('/sadmin/tpl/getBuyTplList', { ...params }) },


  /**
   * 友情链接
   * */

  //  列表
  getLinkPageList (params) { return axios.post('/sadmin/links/getLinkPageList', { ...params }) },

  // 添加
  addLinkItem (params) { return axios.post('/sadmin/links/addLinkItem', { ...params }) },

  // 获取
  getLinkItem (params) { return axios.post('/sadmin/links/getLinkItem', { ...params }) },

  // 编辑
  setLinkItem (params) { return axios.post('/sadmin/links/setLinkItem', { ...params }) },

  // 删除
  delLinkItem (params) { return axios.post('/sadmin/links/delLinkItem', { ...params }) },








  /**
   * 分类
   * */
  getBoardPageList (params) { return axios.post('/admin/board/getBoardPageList', { ...params }) },

  /**
     * 七牛云上传token 地址
     */

  // 获取文件上传upToken
  getUploadToken () { return axios.post('/file/getUploadToken') },

  // 获取文件上传地址
  getUploadUrl () { return axios.post('/file/getUploadUrl') }

}

export default article
