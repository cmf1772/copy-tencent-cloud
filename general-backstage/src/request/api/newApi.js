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
   // 添加一个用户等级
   addLevelItem (params) { return axios.post('/admin/grade/addLevelItem', params) },
   // 删除一个用户等级
   delLevelItem (params) { return axios.post('/admin/grade/delLevelItem', params) },
   // 获取一个用户等级
   getLevelItem (params) { return axios.post('/admin/grade/getLevelItem', params) },
   // 编辑一个用户等级
   setLevelItem (params) { return axios.post('/admin/grade/setLevelItem', params) },
   
   // 获取推荐基本设置
   getBasicItem (params) { return axios.post('/admin/affiliate/getBasicItem', params) }, //未完成  不明白需求

   // 获取动态分页列表
   getSharePageList (params) { return axios.post('/admin/share/getSharePageList', params) },
   // 删除一个动态
   delShareItem (params) { return axios.post('/admin/share/delShareItem', params) },

   // 获取圈子分页列表
   getCommunityPageList (params) { return axios.post('/admin/community/getCommunityPageList', params) },
   // 获取一个圈子
   getCommunityItem (params) { return axios.post('/admin/community/getCommunityItem', params) },
   // 审核一个圈子
   setCheckItem (params) { return axios.post('/admin/community/setCheckItem', params) },
   // 驳回一个圈子
   setBackItem (params) { return axios.post('/admin/community/setBackItem', params) },
   // 删除一个圈子
   delCommunityItem (params) { return axios.post('/admin/community/delCommunityItem', params) },
   // 编辑一个圈子
   setCommunityItem (params) { return axios.post('/admin/community/setCommunityItem', params) },

   // 获取圈子成员分页列表
   getCommunityMemberPageList (params) { return axios.post('/admin/communitymember/getCommunityMemberPageList', params) }, //接口走不通

   // 获取话题分页列表
   getCommunityTopicPageList (params) { return axios.post('/admin/communitytopic/getCommunityTopicPageList', params) }, // 传t:1报错
   // 获取一个话题
   commGetCommunityItem (params) { return axios.post('/admin/communitytopic/getCommunityItem', params) }, // 传uid 获取不到信息
   // 删除一个话题
   delCommunityTopicItem (params) { return axios.post('/admin/communitytopic/delCommunityTopicItem', params) },
}
export default newData