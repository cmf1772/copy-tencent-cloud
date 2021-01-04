import axios from '../http'

const newData =  {
  // 获取退货列表
  getBackOrderPageList (params) { return axios.post('/admin/backorder/getBackOrderPageList', params) },  
  // 获取一个退货订单
  getBackOrderItem (params) { return axios.post('/admin/backorder/getBackOrderItem', params) },  
  // 删除一个退货订单
  delBackOrderItem (params) { return axios.post('/admin/backorder/delBackOrderItem', params) },
  // 审核一个供应退货订单
  setBackOrderItem (params) { return axios.post('/admin/backordersupply/setBackOrderItem', params) },

  // 获取提现申请分页列表
  getWithdrawPageList (params) { return axios.post('/admin/withdraw/getWithdrawPageList', params) }, //未完成

  // 获取商品评论分页列表
  getCommentPageList (params) { return axios.post('/admin/comment/getCommentPageList', params) },
  // 审核或拒绝一个咨询信息
  setCommentItem (params) { return axios.post('/admin/comment/setCommentItem', params) }, 
  // 删除一个商品评论
  delCommentItem (params) { return axios.post('/admin/comment/delCommentItem', params) },

  // 获取展示商品咨询分页列表
  getAskOrderPageList (params) { return axios.post('/admin/askorder/getAskOrderPageList', params) },
  // 获取一个咨询
  getAskOrderItem (params) { return axios.post('/admin/askorder/getAskOrderItem', params) },
   // 删除一个咨询信息
   delAskOrderItem (params) { return axios.post('/admin/askorder/delAskOrderItem', params) },

   // 获取支付方式分页列表
   getPaymentPageList (params) { return axios.post('/admin/payment/getPaymentPageList', params) },
   // 编辑一个支付方式
   setAlipayPaymentItem (params) { return axios.post('/admin/payment/setAlipayPaymentItem', params) },
   // 获取一个支付方式
   getPaymentItem (params) { return axios.post('/admin/payment/getPaymentItem', params) },

   // 获取积分明细分页列表
   getPointPageList (params) { return axios.post('/admin/memberpoint/getPointPageList', params) },
   // 审核一个积分明细
   setCheckItem (params) { return axios.post('/admin/memberpoint/setCheckItem', params) },
   // 撤销一个积分明细
   setCancelItem (params) { return axios.post('/admin/memberpoint/setCancelItem', params) },
   // 删除一个积分明细
   delPointItem (params) { return axios.post('/admin/memberpoint/delPointItem', params) },

   // 获取资金明细分页列表
   getMoneyPageList (params) { return axios.post('/admin/membermoney/getMoneyPageList', params) },

   // 获取消保明细分页列表
   xbGetMoneyPageList (params) { return axios.post('/admin/xbmoney/getMoneyPageList', params) },

   // 获取会员分页列表
   getUserList (params) { return axios.post('/admin/member/getUserList', params) },
   // 获取一个用户
   getUserItem (params) { return axios.post('/admin/member/getUserItem', params) },
   // 编辑一个用户
   setUserItem (params) { return axios.post('/admin/member/setUserItem', params) }, // 未完成
   // 删除一个用户
   delUserItem (params) { return axios.post('/admin/member/delUserItem', params) },

   // 获取用户等级分页列表
   getLevelList (params) { return axios.post('/admin/grade/getLevelList', params) },
}

export default newData