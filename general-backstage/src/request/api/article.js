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

  // 获取资讯二级分类分页列表
  getBoardPageSubList (params) { return axios.post('/admin/board/getBoardPageSubList', { ...params }) },

  // 获取资讯一级分类列表
  getBoardList (params) { return axios.post('/admin/board/getBoardList', { ...params }) },

  // 获取资讯二级分类列表
  getBoardSubList (params) { return axios.post('/admin/board/getBoardSubList', { ...params }) },

  // 删除一个资讯分类
  delBoardItem (params) { return axios.post('/admin/board/delBoardItem', { ...params }) },

  // 编辑一个资讯分类
  setBoardItem (params) { return axios.post('/admin/board/setBoardItem', { ...params }) },

  // 获取资讯分页列表
  getArticlePageList (params) { return axios.post('/admin/board/getArticlePageList', { ...params }) },

  // 添加一个资讯
  addArticleItem (params) { return axios.post('/admin/board/addArticleItem', { ...params }) },

  // 添加一个资讯
  getArticleItem (params) { return axios.post('/admin/board/getArticleItem', { ...params }) },

  // 编辑一个资讯
  setArticleItem (params) { return axios.post('/admin/board/setArticleItem', { ...params }) },

  // 批量修改资讯所在地区
  batModifyCity (params) { return axios.post('/admin/board/batModifyCity', { ...params }) },

  // 批量修改资讯所在栏目
  batModifyCode (params) { return axios.post('/admin/board/batModifyCode', { ...params }) },

  // 资讯批量置顶/取消置顶操作
  batIsTop (params) { return axios.post('/admin/board/batIsTop', { ...params }) },

  // 批量删除资讯文章
  batDel (params) { return axios.post('/admin/board/batDel', { ...params }) },

  // 删除一个资讯
  delArticleItem (params) { return axios.post('/admin/board/delArticleItem', { ...params }) },

  // 获取分类分页列表
  getCategoryPageList (params) { return axios.post('/admin/category/getCategoryPageList', { ...params }) },

  // 获取课时分页列表
  getTaskPageList (params) { return axios.post('/admin/egoods/getTaskPageList', { ...params }) },

  // 删除一个课时
  delTaskItem (params) { return axios.post('/admin/egoods/delTaskItem', { ...params }) },

  // 批量删除课程课时
  batDelTaskItem (params) { return axios.post('/admin/egoods/batDelTaskItem', { ...params }) },

  // 获取商品分页列表
  getGoodsPageList (params) { return axios.post('/admin/egoods/getGoodsPageList', { ...params }) },

  // 获取一个商品
  getGoodsItem (params) { return axios.post('/admin/egoods/getGoodsItem', { ...params }) },

  // 编辑一个商品
  setGoodsItem (params) { return axios.post('/admin/egoods/setGoodsItem', { ...params }) },

  // 获取一个商品销售属性图片
  getAttPic (params) { return axios.post('/admin/egoods/getAttPic', { ...params }) },

  // 获取批发商品分页列表
  pgetGoodsPageList (params) { return axios.post('/admin/ptgoods/getGoodsPageList', { ...params }) },

  // 拼团批量下架商品
  ptbatDown (params) { return axios.post('/admin/ptgoods/batDown', { ...params }) },

  // 拼团删除一个商品
  ptdelGoodsItem (params) { return axios.post('/admin/ptgoods/delGoodsItem', { ...params }) },

  // 搜索商品用于组合购买
  searchCombine (params) { return axios.post('/admin/egoods/searchCombine', { ...params }) },

  // 获取全部知识商品分类列表
  getCategoryList (params) { return axios.post('/admin/ecategory/getCategoryList', { ...params }) },

  // 获取指定分类的子分类列表
  getSubList (params) { return axios.post('/admin/ecategory/getCategoryList', { ...params }) },

  // 删除一个商品
  delGoodsItem (params) { return axios.post('/admin/egoods/delGoodsItem', { ...params }) },

  // 批量下架商品
  batDown (params) { return axios.post('/admin/egoods/batDown', { ...params }) },

  // 秒杀获取商品分页列表
  msetGoodsPageList (params) { return axios.post('/admin/salegd/getGoodsPageList', { ...params }) },

  // 秒杀批量删除商品
  msbatDelGoodsItem (params) { return axios.post('/admin/salegd/batDelGoodsItem', { ...params }) },

  // 秒杀删除一个商品
  msdelGoodsItem (params) { return axios.post('/admin/salegd/delGoodsItem', { ...params }) },

  // 秒杀获取一个商品
  msgetGoodsItem (params) { return axios.post('/admin/salegd/getGoodsItem', { ...params }) },

  // 秒杀编辑
  mssetGoodsItem (params) { return axios.post('/admin/salegd/setGoodsItem', { ...params }) },

  // 展示商品
  zsgetGoodsPageList (params) { return axios.post('/admin/showgd/getGoodsPageList', { ...params }) },

  // 展示删除一个商品
  zsdelGoodsItem (params) { return axios.post('/admin/showgd/delGoodsItem', { ...params }) },

  // 展示批量下架一个商品
  zsbatDown (params) { return axios.post('/admin/showgd/batDown', { ...params }) },

  // 展示批量删除
  zsbatDelGoodsItem (params) { return axios.post('/admin/showgd/batDelGoodsItem', { ...params }) },

  // 展示获取一个商品
  zsgetGoodsItem (params) { return axios.post('/admin/showgd/getGoodsItem', { ...params }) },

  // 展示编辑一个商品
  zssetGoodsItem (params) { return axios.post('/admin/showgd/setGoodsItem', { ...params }) },

  // 团购获取商品分页列表
  tggetGoodsPageList (params) { return axios.post('/admin/groupgd/getGoodsPageList', { ...params }) },

  // 团购删除一个商品
  tgdelGoodsItem (params) { return axios.post('/admin/groupgd/delGoodsItem', { ...params }) },

  // 团购批量删除商品
  tgbatDelGoodsItem (params) { return axios.post('/admin/groupgd/batDelGoodsItem', { ...params }) },

  // 团购审核商品
  tgapproval (params) { return axios.post('/admin/groupgd/approval', { ...params }) },

  // 获取拍卖商品分页列表
  pmgetGoodsPageList (params) { return axios.post('/admin/auction/getGoodsPageList', { ...params }) },

  // 删除一个拍卖商品
  pmdelGoodsItem (params) { return axios.post('/admin/auction/delGoodsItem', { ...params }) },

  // 批量删除拍卖商品
  pmbatDelGoodsItem (params) { return axios.post('/admin/auction/batDelGoodsItem', { ...params }) },

  // 编辑一个拍卖商品
  pmsetGoodsItem (params) { return axios.post('/admin/auction/setGoodsItem', { ...params }) },

  // 获取拍卖商品
  pmgetGoodsItem (params) { return axios.post('/admin/auction/getGoodsItem', { ...params }) },

  // 批发商品列表
  pfgetGoodsPageList (params) { return axios.post('/admin/pfgoods/getGoodsPageList', { ...params }) },

  // 批发删除一个商品
  pfdelGoodsItem (params) { return axios.post('/admin/pfgoods/delGoodsItem', { ...params }) },

  // 批发批量删除商品
  pfbatDelGoodsItem (params) { return axios.post('/admin/pfgoods/batDelGoodsItem', { ...params }) },

  // 批发批量下架商品
  pfbatDown (params) { return axios.post('/admin/pfgoods/batDown', { ...params }) },

  // 批发获取一个商品
  pfgetGoodsItem (params) { return axios.post('/admin/pfgoods/getGoodsItem', { ...params }) },

  // 编辑一个批发商品
  pfsetGoodsItem (params) { return axios.post('/admin/pfgoods/setGoodsItem', { ...params }) },

  // 代销一个商品列表
  dxgetGoodsPageList (params) { return axios.post('/admin/jhgoods/getGoodsPageList', { ...params }) },

  // 代销批量下架商品
  dxbatDown (params) { return axios.post('/admin/jhgoods/batDown', { ...params }) },

  // 代销删除一个商品
  dxdelGoodsItem (params) { return axios.post('/admin/jhgoods/delGoodsItem', { ...params }) },

  // 代销批量删除商品
  dxbatDelGoodsItem (params) { return axios.post('/admin/jhgoods/batDelGoodsItem', { ...params }) },

  // 代销获取一个商品
  dxgetGoodsItem (params) { return axios.post('/admin/jhgoods/getGoodsItem', { ...params }) },

  // 代销编辑一个商品
  dxsetGoodsItem (params) { return axios.post('/admin/jhgoods/setGoodsItem', { ...params }) },

  // 未上架获取商品分页列表
  wsjgetGoodsPageList (params) { return axios.post('/admin/downgd/getGoodsPageList', { ...params }) },

  // 批量上架商品
  wsjbatUp (params) { return axios.post('/admin/downgd/batUp', { ...params }) },

  // 批量删除商品
  wsjbatDelGoodsItem (params) { return axios.post('/admin/downgd/batDelGoodsItem', { ...params }) },

  // 删除一个商品
  wsjdelGoodsItem (params) { return axios.post('/admin/downgd/delGoodsItem', { ...params }) },

  wsjgetGoodsItem (params) { return axios.post('/admin/downgd/getGoodsItem', { ...params }) },

  wsjsetGoodsItem (params) { return axios.post('/admin/downgd/setGoodsItem', { ...params }) },

  // 获取订单分页列表
  getOrderPageList (params) { return axios.post('/admin/order/getOrderPageList', { ...params }) },

  // 获取一个订单
  getOrderItem (params) { return axios.post('/admin/order/getOrderItem', { ...params }) },

  // 编辑一个订单
  setOrderItem (params) { return axios.post('/admin/order/setOrderItem', { ...params }) },

  // 删除一个订单
  delOrderItem (params) { return axios.post('/admin/order/delOrderItem', { ...params }) },

  // 获取知识订单
  zsgetOrderPageList (params) { return axios.post('/admin/eorder/getOrderPageList', { ...params }) },

  // 知识获取一个订单
  zsgetOrderItem (params) { return axios.post('/admin/eorder/getOrderItem', { ...params }) },

  // 知识编辑一个订单
  zssetOrderItem (params) { return axios.post('/admin/eorder/setOrderItem', { ...params }) },

  // 知识删除一个订单
  zsdelOrderItem (params) { return axios.post('/admin/eorder/delOrderItem', { ...params }) },

  // 获取退货订单分页列表
  getBackOrderPageList (params) { return axios.post('/admin/backorder/getBackOrderPageList', { ...params }) },


  /**
   * 七牛云上传token 地址
   */

  // 获取文件上传upToken
  getUploadToken () { return axios.post('/file/getUploadToken') },

  // 获取文件上传地址
  getUploadUrl () { return axios.post('/file/getUploadUrl') }
}

export default article
