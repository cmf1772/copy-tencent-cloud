import {
  get,
  post,
  upload
} from "./axios";


const api = {

  //公共
  getMobileLoginCode: data => post('/common/get_loginverify_code', data), //获取登录手机验证码
  getMobileRegisterCode: data => post('/common/get_registerverify_code', data), //获取注册手机验证码
  getMobileForgetPasswordCode: data => post('/common/get_lossverify_code', data), //获取注册手机验证码
  login: data => post('/common/login', data), //登录
  loginByPhone: data => post("/common/phlogin", data), //手机验证码登录
  register: data => post('/common/register', data), //注册
  MobileLogin: data => post('/common/dophlogin', data), //手机登录
  resultPassword: data => post('/common/lostpasswd', data), //忘记密码
  getUserInfo: data => post('common/user_detail', data), //用户详细信息
  refreshToken: data => post("/common/refresh_token", data), //刷新Token

  //首页
  index: {
    getAdressLocalList: data => post("/common/getAreaListByPid", data), //地址列表
    getCountryLocalList: data => post("/common/getStreetList", data), //乡镇列表
    getBanner: data => post("/index/wap_banner", data),  //轮播
    getFloorBanner: data => post("/index/app_floor_banner", data), //轮播广告
    getNewsList: data => post("/index/newslist", data), //资讯列表
    getCateList: data => post("/common/catelist", data), //分类列表
  },

  // /商品
  shop: {
    getFloorBanner: data => post('/news/wap_floor1_banner', data), //商城轮播广告
    getGoodList: data => post('/news/goods_list', { city: '成都市' }), //商品列表
    getBrandAd: data => post('/news/brand_ad', data), //商品列表
    getCateList: data => post('/news/brand_ad', data), //分类列表
    getGoodDetails: data => post('/goods/index', data),  //商品详情
    getItemAbout: data => post('/goods/relation', data), //获得相关商品列表
    starGood: data => post('/goods/fav', data), //收藏商品,店家
    getGoodSpeak: data => post('/goods/order_comment', data), //商品评论
    getGoodInfoContent: data => post('/goods/get_goods_content', data), //商品详情内容
    getCarList: data => post('/cart/cart_list', data), //购物车列表
    addCarGood: data => post('/goods/cart_add', data), //添加到购物车
    getShopKeeperInfo: data => post('/common/shop_detail', data), //获取商铺信息
    getShopKeeperCategory: data => post('/common/shop_category', data), //获取店铺的商品分类
    cancelCar: data => post("/cart/del", data), //取消购物车
    changeGoodNumber: data => post('/cart/change_num', data), //改变当前商品数量
    parCarGoods: data => post("/cart/buy", data), //结算购物车
    onLinePay: data => post("/payment/orderPaymentPay", data), //在线支付
    cartPay: data => post("/cart/pay", data), //生成订单
  },

  //我的
  mine: {
    getOrderList: data => post("/myorder/list", data), //订单列表
    getMyStarList: data => post('/cart/cart_fav_list', data), //我的收藏夹
    getMyShopAdressList: data => post('/cart/app_address', data), //我的收货地址
  },

  // 服务
  serve: {

    // 回收
    recovery: {
      judgeIdCard: data => post("/recovery/idCard", data),  //身份证验证
      becomeRecycler: data => post("/recovery/addRecovery", data), //成为回收员
      getRecyclerInfo: data => post("/recovery/getRecoverInfo", data), //回收员详情
      getRecyclerCate: data => get("/recovery/getRecoveryCate", data), //获取分类
      addRecoveryOrder: data => post("/recovery/addSubscribeOrder", data), //预约回收订单
      getSubscribeOrder: data => post("/recovery/getSubscribeOrder", data), //待结单回收订单
      addSubscribeOrder: data => post("/recovery/addRecoveryOrder", data), //回收员接单
      getRecoverInfo: data => get("/recovery/getRecoverInfo", data), //获取回收员的信息 以及 审核过程
      getSubscribeOrderT: data => get("/recovery/getSubscribeOrder", data), //待结单回收订单
      modSubscribeOrder: data => post("/recovery/modSubscribeOrder", data), //获取回收员的信息 以及 审核过程
    }
  },

  // 文件上传
  uploader: {
    getUploader: data => post("/file/getUploadUrl", data), //获取图片上传地址
    fileUpload: (url, data) => upload(url, data), //图片上传
    getFile: data => post('/file/get', data), //获取上传的文件
    getUploaderFileUrl: data => post("/file/getUploadToken", data), //获取直传地址
    getUploaderVideoUrl: data => post("/file/getVidUploadToken", data), //获取视频的直传地址
  },
};

export default api;



