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

  // 导入
  importTpl (params) { return axios.post('/sadmin/tpl/importTpl', { ...params }) },

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
   * 常规商品管理
   **/
  getGoodsPageList (params) { return axios.post('/sadmin/goods/getGoodsPageList', { ...params }) },


  /**
   * 常规商品分类
   * */

  // 列表
  getCategoryPageList (params) { return axios.post('/sadmin/category/getCategoryPageList', { ...params }) },

  // 添加
  addGoodsItem (params) { return axios.post('/sadmin/goods/addGoodsItem', { ...params }) },

  // 删除
  delGoodsItem (params) { return axios.post('/sadmin/goods/delGoodsItem', { ...params }) },

  // 获取
  getGoodsItem (params) { return axios.post('/sadmin/goods/getGoodsItem', { ...params }) },

  // 编辑
  setGoodsItem (params) { return axios.post('/sadmin/goods/setGoodsItem', { ...params }) },

  // 下架
  batDown (params) { return axios.post('/sadmin/goods/batDown', { ...params }) },

  // 批量删除
  batDelGoodsItem (params) { return axios.post('/sadmin/goods/batDelGoodsItem', { ...params }) },

  // 更新
  batMoveItem (params) { return axios.post('/sadmin/goods/batMoveItem', { ...params }) },

  /**
   * 拼团商品
   * */

  //  获取
  getPtGoodsPageList (params) { return axios.post('/sadmin/goods/getPtGoodsPageList', { ...params }) },

  /**
   * 返利商品
   * */

  //  获取
  getReturnGoodsPageList (params) { return axios.post('/sadmin/goods/getReturnGoodsPageList', { ...params }) },

  /**
   * 批发
   * */
  getPfGoodsPageList (params) { return axios.post('/sadmin/goods/getPfGoodsPageList', { ...params }) },

  // 加入
  batPfAddItem (params) { return axios.post('/sadmin/goods/batPfAddItem', { ...params }) },

  // 更新
  batUpdateItem (params) { return axios.post('/sadmin/goods/batUpdateItem', { ...params }) },

  /**
   * 分类
   * */
  getBoardPageList (params) { return axios.post('/admin/board/getBoardPageList', { ...params }) },

  // 子分类
  getBoardPageSubList (params) { return axios.post('/admin/board/getBoardPageSubList', { ...params }) },

  /**
   * 团购商品
   **/

  // 列表
  getGoodsTgPageList (params) { return axios.post('/sadmin/groupgd/getGoodsPageList', { ...params }) },

  // 添加
  addTgGoodsItem (params) { return axios.post('/sadmin/groupgd/addGoodsItem', { ...params }) },

  // 获取
  getTgGoodsItem (params) { return axios.post('/sadmin/groupgd/getGoodsItem', { ...params }) },

  // 编辑
  setTgGoodsItem (params) { return axios.post('/sadmin/groupgd/setGoodsItem', { ...params }) },

  // 删除
  delTgGoodsItem (params) { return axios.post('/sadmin/groupgd/delGoodsItem', { ...params }) },

  // 更新
  batTgMoveItem (params) { return axios.post('/sadmin/groupgd/batMoveItem', { ...params }) },

  /**
   * 秒杀
   * */

  // 列表
  getMsGoodsPageList (params) { return axios.post('/sadmin/salegd/getGoodsPageList', { ...params }) },

  // 更新
  batMsMoveItem (params) { return axios.post('/sadmin/salegd/batMoveItem', { ...params }) },

  // 添加
  addMsGoodsItem (params) { return axios.post('/sadmin/salegd/addGoodsItem', { ...params }) },

  // 获取
  getMsGoodsItem (params) { return axios.post('/sadmin/salegd/getGoodsItem', { ...params }) },

  // 编辑
  setMsGoodsItem (params) { return axios.post('/sadmin/salegd/setGoodsItem', { ...params }) },

  // 删除
  delMsGoodsItem (params) { return axios.post('/sadmin/salegd/delGoodsItem', { ...params }) },

  /**
   * 拍卖
   * */

  // 列表
  getPmGoodsPageList (params) { return axios.post('/sadmin/auction/getGoodsPageList', { ...params }) },

  // 添加
  addPmGoodsItem (params) { return axios.post('/sadmin/auction/addGoodsItem', { ...params }) },

  // 获取
  getPmGoodsItem (params) { return axios.post('/sadmin/auction/getGoodsItem', { ...params }) },

  // 编辑
  setPmGoodsItem (params) { return axios.post('/sadmin/auction/setGoodsItem', { ...params }) },

  // 更新
  batPmMoveItem (params) { return axios.post('/sadmin/auction/batMoveItem', { ...params }) },

  // 删除
  delPmGoodsItem (params) { return axios.post('/sadmin/auction/delGoodsItem', { ...params }) },

  /**
   * 分销
   * */

  // 列表
  getStoragePageList (params) { return axios.post('/sadmin/mygoodsstorage/getStoragePageList', { ...params }) },

  // 加入
  setAddTo (params) { return axios.post('/sadmin/mygoodsstorage/setAddTo', { ...params }) },

  // 品牌
  getBrandList (params) { return axios.post('/sadmin/mygoodsstorage/getBrandList', { ...params }) },

  /**
   * 未上架
   * */

  // 列表
  getWsjGoodsPageList (params) { return axios.post('/sadmin/downgd/getGoodsPageList', { ...params }) },

  // 批量上架
  batWsjUp (params) { return axios.post('/sadmin/downgd/batUp', { ...params }) },

  // 删除
  delWsjGoodsItem (params) { return axios.post('/sadmin/downgd/delGoodsItem', { ...params }) },

  /**                                                  
   * 常规商品分类
   * */

  // 列表
  getCgCategoryPageList (params) { return axios.post('/sadmin/category/getCategoryPageList', { ...params }) },

  // 添加
  addCategoryItem (params) { return axios.post('/sadmin/category/addCategoryItem', { ...params }) },

  // 删除
  delCategoryItem (params) { return axios.post('/sadmin/category/delCategoryItem', { ...params }) },

  // 复制
  copyCategoryItem (params) { return axios.post('/sadmin/category/copyCategoryItem', { ...params }) },

  // 获取
  getCategoryItem (params) { return axios.post('/sadmin/category/getCategoryItem', { ...params }) },

  // 编辑
  setCategoryItem (params) { return axios.post('/sadmin/category/setCategoryItem', { ...params }) },

  // 获取二级菜单
  getSubList (params) { return axios.post('/sadmin/category/getSubList', { ...params }) },

  /**
   * 杂志管理
   * */

  // 列表
  getArticlePageList (params) { return axios.post('/sadmin/board/getBoardPageList', { ...params }) },

  // 添加列表
  addBoardItem (params) { return axios.post('/sadmin/board/addBoardItem', { ...params }) },

  // 获取列表
  getBoardItem (params) { return axios.post('/sadmin/board/getBoardItem', { ...params }) },

  // 编辑列表
  setBoardItem (params) { return axios.post('/sadmin/board/setBoardItem', { ...params }) },

  // 删除列表
  delBoardItem (params) { return axios.post('/sadmin/board/delBoardItem', { ...params }) },

  // 二级列表
  getTBoardPageSubList (params) { return axios.post('/sadmin/board/getArticlePageList', { ...params }) },

  // 添加
  addArticleItem (params) { return axios.post('/sadmin/board/addArticleItem', { ...params }) },

  // 板块名称
  getBoardList (params) { return axios.post('/sadmin/board/getBoardList', { ...params }) },

  // 获取资讯
  getArticleItem (params) { return axios.post('/sadmin/board/getArticleItem', { ...params }) },

  // 编辑资讯
  setArticleItem (params) { return axios.post('/sadmin/board/setArticleItem', { ...params }) },

  // 删除
  delArticleItem (params) { return axios.post('/sadmin/board/delArticleItem', { ...params }) },

  /**
   * 课程订单
   * */

  // 列表
  getMyTaskPageList (params) { return axios.post('/sadmin/egoods/getMyTaskPageList', { ...params }) },



  /**
   * 客户订单
   **/

  // 列表
  getSellerOrderPageList (params) { return axios.post('/sadmin/eorder/getSellerOrderPageList', { ...params }) },

  // 获取客户延期收货记录分页列表
  getSellerDelayOrderPageList (params) { return axios.post('/sadmin/order/getSellerDelayOrderPageList', { ...params }) },

  // 提交延期收货申请
  Delaydelay (params) { return axios.post('/sadmin/order/delay', { ...params }) },

  // 发货
  delivery (params) { return axios.post('/sadmin/eorder/delivery', { ...params }) },

  // 验证
  groupCheck (params) { return axios.post('/sadmin/eorder/groupCheck', { ...params }) },

  /**
   * 拼团订单
   * */

  // 列表
  ptgetSellerOrderPageList (params) { return axios.post('/sadmin/ptorder/getSellerOrderPageList', { ...params }) },

  // 拼团列表
  getSellerOrderListPageList (params) { return axios.post('/sadmin/ptorder/getSellerOrderListPageList', { ...params }) },

  // 验证
  ptgroupCheck (params) { return axios.post('/sadmin/ptorder/groupCheck', { ...params }) },

  // 退货
  getSellerBackOrderPageList (params) { return axios.post('/sadmin/ptbackorder/getSellerBackOrderPageList', { ...params }) },

  /**
   * 体现
   * */

  // 列表
  getMyWithdrawPageList (params) { return axios.post('/sadmin/withdraw/getMyWithdrawPageList', { ...params }) },

  // 记录
  getWithdrawItem (params) { return axios.post('/sadmin/withdraw/getWithdrawItem', { ...params }) },

  // 提交
  applyWithdraw (params) { return axios.post('/sadmin/withdraw/applyWithdraw', { ...params }) },

  // 信息
  getMemberAccountInfo (params) { return axios.post('/sadmin/settings/getMemberAccountInfo', { ...params }) },

  /**
   * 物流工具
   * */

  // 列表
  getShippingList (params) { return axios.post('/sadmin/shipping/getShippingList', { ...params }) },

  // 安装
  addShippingItem (params) { return axios.post('/sadmin/shipping/addShippingItem', { ...params }) },

  // 卸载
  delShippingItem (params) { return axios.post('/sadmin/shipping/delShippingItem', { ...params }) },

  // 基本信息列表
  getShippingItem (params) { return axios.post('/sadmin/shipping/getShippingItem', { ...params }) },

  /**
   * 销售咨询管理
   * */

  // 列表
  getMyCommentPageList (params) { return axios.post('/sadmin/comment/getMyCommentPageList', { ...params }) },

  // 审核
  setCheckItem (params) { return axios.post('/sadmin/comment/setCheckItem', { ...params }) },

  // 删除
  delCommentItem (params) { return axios.post('/sadmin/comment/delCommentItem', { ...params }) },

  // 评论
  setReplyItem (params) { return axios.post('/sadmin/comment/setReplyItem', { ...params }) },

  /**
   * 评论
   * */

  // 列表
  getSellerCommentPageList (params) { return axios.post('/sadmin/comment/getSellerCommentPageList', { ...params }) },

  // 评论
  setCommentItem (params) { return axios.post('/sadmin/comment/setCommentItem', { ...params }) },

  /**
   * 消保明细
   * */

  // 列表
  getMyMoneyPageList (params) { return axios.post('/sadmin/xbmoney/getMyMoneyPageList', { ...params }) },

  // 消保余额
  delMoneyItem (params) { return axios.post('/sadmin/xbmoney/delMoneyItem', { ...params }) },


  /**
   * 返佣订单
   * */

  // 列表
  getMyTgOrderPageList (params) { return axios.post('/sadmin/mytgorder/getMyTgOrderPageList', { ...params }) },












  /**
   * 获取平台信息
  **/

  getSettingItem (params) { return axios.post('/common/getSettingItem', { ...params }) },

  /**
     * 七牛云上传token 地址
     */

  // 获取文件上传upToken
  getUploadToken () { return axios.post('/file/getUploadToken') },

  // 获取文件上传地址
  getUploadUrl () { return axios.post('/file/getUploadUrl') }

}

export default article
