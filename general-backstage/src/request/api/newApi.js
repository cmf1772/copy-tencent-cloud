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
   getCommunityMemberPageList (params) { return axios.post('/admin/communitymember/getCommunityMemberPageList', params) },
   // 删除一个圈子成员
   delCommunityMemberItem (params) { return axios.post('/admin/communitymember/delCommunityMemberItem', params) },

   // 获取话题分页列表
   getCommunityTopicPageList (params) { return axios.post('/admin/communitytopic/getCommunityTopicPageList', params) }, // 传t:1报错
   // 获取一个话题
   getCommunityTopicItem (params) { return axios.post('/admin/communitytopic/getCommunityTopicItem', params) },
   // 编辑一个话题
   setCommunityTopicItem (params) { return axios.post('/admin/communitytopic/setCommunityTopicItem', params) },
   // 删除一个话题
   delCommunityTopicItem (params) { return axios.post('/admin/communitytopic/delCommunityTopicItem', params) },

   // 获取话题评论分页列表
   getCommunityCommentPageList (params) { return axios.post('/admin/communitycomment/getCommunityCommentPageList', params) },
   // 删除一个话题评论
   delCommunityTopicItem (params) { return axios.post('/admin/communitycomment/delCommunityTopicItem', params) },

   // 获取短视频分页列表
   getShortVideoPageList (params) { return axios.post('/admin/mssp/getShortVideoPageList', params) },
   // 核准一个短视频
   setPassItem (params) { return axios.post('/admin/mssp/setPassItem', params) },
   // 设未审一个短视频
   setRenewItem (params) { return axios.post('/admin/mssp/setRenewItem', params) },
  
   // ------------------- 吃喝分类 ------------------------------- 
   // 获取全部分类列表
   getCategoryList (params) { return axios.post('/admin/mcyxcategory/getCategoryList', params) },
   // 获取分类分页列表
   getCategoryPageList (params) { return axios.post('/admin/mcyxcategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   getSubList (params) { return axios.post('/admin/mcyxcategory/getSubList', params) },
   // 删除一个分类
   delCategoryItem (params) { return axios.post('/admin/mcyxcategory/delCategoryItem', params) },
   // 添加一个分类
   addCategoryItem (params) { return axios.post('/admin/mcyxcategory/addCategoryItem', params) },
    // 获取一个分类
    getCategoryItem (params) { return axios.post('/admin/mcyxcategory/getCategoryItem', params) },
    // 编辑一个分类
    setCategoryItem (params) { return axios.post('/admin/mcyxcategory/setCategoryItem', params) },
    // 批量删除分类
    batDelCategoryItem (params) { return axios.post('/admin/mcyxcategory/batDelCategoryItem', params) },
    // 更新分类列表
    createLevelCat (params) { return axios.post('/admin/mcyxcategory/createLevelCat', params) },
    // 分类层次自动纠错
    correct (params) { return axios.post('/admin/mcyxcategory/correct', params) },
    // 复制一个分类
    copyCategoryItem (params) { return axios.post('/admin/mcyxcategory/copyCategoryItem', params) },
   
   // -------------- 吃喝VIP分类 -------------------- 
   // 获取全部分类列表
   getCategoryListVIP (params) { return axios.post('/admin/mcyxcategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   getCategoryPageListVIP (params) { return axios.post('/admin/mcyxcategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   getSubListVIP (params) { return axios.post('/admin/mcyxcategoryvip/getSubList', params) },
   // 删除一个分类
   delCategoryItemVIP (params) { return axios.post('/admin/mcyxcategoryvip/delCategoryItem', params) },
   // 添加一个分类
   addCategoryItemVIP (params) { return axios.post('/admin/mcyxcategoryvip/addCategoryItem', params) },
    // 获取一个分类
    getCategoryItemVIP (params) { return axios.post('/admin/mcyxcategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    setCategoryItemVIP (params) { return axios.post('/admin/mcyxcategoryvip/setCategoryItem', params) },
    // 批量删除分类
    batDelCategoryItemVIP (params) { return axios.post('/admin/mcyxcategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    createLevelCatVIP (params) { return axios.post('/admin/mcyxcategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    correctVIP (params) { return axios.post('/admin/mcyxcategoryvip/correct', params) },
    // 复制一个分类
    copyCategoryItemVIP (params) { return axios.post('/admin/mcyxcategoryvip/copyCategoryItem', params) },

    // ------------------- 玩乐分类 ------------------------------- 
   // 获取全部分类列表
   WLgetCategoryList (params) { return axios.post('/admin/mcpxcategory/getCategoryList', params) },
   // 获取分类分页列表
   WLgetCategoryPageList (params) { return axios.post('/admin/mcpxcategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   WLgetSubList (params) { return axios.post('/admin/mcpxcategory/getSubList', params) },
   // 删除一个分类
   WLdelCategoryItem (params) { return axios.post('/admin/mcpxcategory/delCategoryItem', params) },
   // 添加一个分类
   WLaddCategoryItem (params) { return axios.post('/admin/mcpxcategory/addCategoryItem', params) },
    // 获取一个分类
    WLgetCategoryItem (params) { return axios.post('/admin/mcpxcategory/getCategoryItem', params) },
    // 编辑一个分类
    WLsetCategoryItem (params) { return axios.post('/admin/mcpxcategory/setCategoryItem', params) },
    // 批量删除分类
    WLbatDelCategoryItem (params) { return axios.post('/admin/mcpxcategory/batDelCategoryItem', params) },
    // 更新分类列表
    WLcreateLevelCat (params) { return axios.post('/admin/mcpxcategory/createLevelCat', params) },
    // 分类层次自动纠错
    WLcorrect (params) { return axios.post('/admin/mcpxcategory/correct', params) },
    // 复制一个分类
    WLcopyCategoryItem (params) { return axios.post('/admin/mcpxcategory/copyCategoryItem', params) },

    // ------------------- 玩乐分类VIP ------------------------------- 
   // 获取全部分类列表
   WLgetCategoryListVIP (params) { return axios.post('/admin/mcpxcategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   WLgetCategoryPageListVIP (params) { return axios.post('/admin/mcpxcategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   WLgetSubListVIP (params) { return axios.post('/admin/mcpxcategoryvip/getSubList', params) },
   // 删除一个分类
   WLdelCategoryItemVIP (params) { return axios.post('/admin/mcpxcategoryvip/delCategoryItem', params) },
   // 添加一个分类
   WLaddCategoryItemVIP (params) { return axios.post('/admin/mcpxcategoryvip/addCategoryItem', params) },
    // 获取一个分类
    WLgetCategoryItemVIP (params) { return axios.post('/admin/mcpxcategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    WLsetCategoryItemVIP (params) { return axios.post('/admin/mcpxcategoryvip/setCategoryItem', params) },
    // 批量删除分类
    WLbatDelCategoryItemVIP (params) { return axios.post('/admin/mcpxcategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    WLcreateLevelCatVIP (params) { return axios.post('/admin/mcpxcategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    WLcorrect (params) { return axios.post('/admin/mcpxcategoryvip/correct', params) },
    // 复制一个分类
    WLcopyCategoryItemVIP (params) { return axios.post('/admin/mcpxcategoryvip/copyCategoryItem', params) },

    // ------------------- 服饰分类 ------------------------------- 
   // 获取全部分类列表
   FSgetCategoryList (params) { return axios.post('/admin/mcfwcategory/getCategoryList', params) },
   // 获取分类分页列表
   FSgetCategoryPageList (params) { return axios.post('/admin/mcfwcategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   FSgetSubList (params) { return axios.post('/admin/mcfwcategory/getSubList', params) },
   // 删除一个分类
   FSdelCategoryItem (params) { return axios.post('/admin/mcfwcategory/delCategoryItem', params) },
   // 添加一个分类
   FSaddCategoryItem (params) { return axios.post('/admin/mcfwcategory/addCategoryItem', params) },
    // 获取一个分类
    FSgetCategoryItem (params) { return axios.post('/admin/mcfwcategory/getCategoryItem', params) },
    // 编辑一个分类
    FSsetCategoryItem (params) { return axios.post('/admin/mcfwcategory/setCategoryItem', params) },
    // 批量删除分类
    FSbatDelCategoryItem (params) { return axios.post('/admin/mcfwcategory/batDelCategoryItem', params) },
    // 更新分类列表
    FScreateLevelCat (params) { return axios.post('/admin/mcfwcategory/createLevelCat', params) },
    // 分类层次自动纠错
    FScorrect (params) { return axios.post('/admin/mcfwcategory/correct', params) },
    // 复制一个分类
    FScopyCategoryItem (params) { return axios.post('/admin/mcfwcategory/copyCategoryItem', params) },

    // ------------------- 服饰分类VIP ------------------------------- 
   // 获取全部分类列表
   FSgetCategoryListVIP (params) { return axios.post('/admin/mcfwcategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   FSgetCategoryPageListVIP (params) { return axios.post('/admin/mcfwcategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   FSgetSubListVIP (params) { return axios.post('/admin/mcfwcategoryvip/getSubList', params) },
   // 删除一个分类
   FSdelCategoryItemVIP (params) { return axios.post('/admin/mcfwcategoryvip/delCategoryItem', params) },
   // 添加一个分类
   FSaddCategoryItemVIP (params) { return axios.post('/admin/mcfwcategoryvip/addCategoryItem', params) },
    // 获取一个分类
    FSgetCategoryItemVIP (params) { return axios.post('/admin/mcfwcategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    FSsetCategoryItemVIP (params) { return axios.post('/admin/mcfwcategoryvip/setCategoryItem', params) },
    // 批量删除分类
    FSbatDelCategoryItemVIP (params) { return axios.post('/admin/mcfwcategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    FScreateLevelCatVIP (params) { return axios.post('/admin/mcfwcategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    FScorrect (params) { return axios.post('/admin/mcfwcategoryvip/correct', params) },
    // 复制一个分类
    FScopyCategoryItemVIP (params) { return axios.post('/admin/mcfwcategoryvip/copyCategoryItem', params) },

    // ------------------- 丽人分类 ------------------------------- 
   // 获取全部分类列表
   LRgetCategoryList (params) { return axios.post('/admin/mcfxcategory/getCategoryList', params) },
   // 获取分类分页列表
   LRgetCategoryPageList (params) { return axios.post('/admin/mcfxcategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   LRgetSubList (params) { return axios.post('/admin/mcfxcategory/getSubList', params) },
   // 删除一个分类
   LRdelCategoryItem (params) { return axios.post('/admin/mcfxcategory/delCategoryItem', params) },
   // 添加一个分类
   LRaddCategoryItem (params) { return axios.post('/admin/mcfxcategory/addCategoryItem', params) },
    // 获取一个分类
    LRgetCategoryItem (params) { return axios.post('/admin/mcfxcategory/getCategoryItem', params) },
    // 编辑一个分类
    LRsetCategoryItem (params) { return axios.post('/admin/mcfxcategory/setCategoryItem', params) },
    // 批量删除分类
    LRbatDelCategoryItem (params) { return axios.post('/admin/mcfxcategory/batDelCategoryItem', params) },
    // 更新分类列表
    LRcreateLevelCat (params) { return axios.post('/admin/mcfxcategory/createLevelCat', params) },
    // 分类层次自动纠错
    LRcorrect (params) { return axios.post('/admin/mcfxcategory/correct', params) },
    // 复制一个分类
    LRcopyCategoryItem (params) { return axios.post('/admin/mcfxcategory/copyCategoryItem', params) },

    // ------------------- 丽人分类VIP ------------------------------- 
   // 获取全部分类列表
   LRgetCategoryListVIP (params) { return axios.post('/admin/mcfxcategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   LRgetCategoryPageListVIP (params) { return axios.post('/admin/mcfxcategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   LRgetSubListVIP (params) { return axios.post('/admin/mcfxcategoryvip/getSubList', params) },
   // 删除一个分类
   LRdelCategoryItemVIP (params) { return axios.post('/admin/mcfxcategoryvip/delCategoryItem', params) },
   // 添加一个分类
   LRaddCategoryItemVIP (params) { return axios.post('/admin/mcfxcategoryvip/addCategoryItem', params) },
    // 获取一个分类
    LRgetCategoryItemVIP (params) { return axios.post('/admin/mcfxcategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    LRsetCategoryItemVIP (params) { return axios.post('/admin/mcfxcategoryvip/setCategoryItem', params) },
    // 批量删除分类
    LRbatDelCategoryItemVIP (params) { return axios.post('/admin/mcfxcategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    LRcreateLevelCatVIP (params) { return axios.post('/admin/mcfxcategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    LRcorrect (params) { return axios.post('/admin/mcfxcategoryvip/correct', params) },
    // 复制一个分类
    LRcopyCategoryItemVIP (params) { return axios.post('/admin/mcfxcategoryvip/copyCategoryItem', params) },

    // ------------------- 百货分类 ------------------------------- 
   // 获取全部分类列表
   BHgetCategoryList (params) { return axios.post('/admin/mccxcategory/getCategoryList', params) },
   // 获取分类分页列表
   BHgetCategoryPageList (params) { return axios.post('/admin/mccxcategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   BHgetSubList (params) { return axios.post('/admin/mccxcategory/getSubList', params) },
   // 删除一个分类
   BHdelCategoryItem (params) { return axios.post('/admin/mccxcategory/delCategoryItem', params) },
   // 添加一个分类
   BHaddCategoryItem (params) { return axios.post('/admin/mccxcategory/addCategoryItem', params) },
    // 获取一个分类
    BHgetCategoryItem (params) { return axios.post('/admin/mccxcategory/getCategoryItem', params) },
    // 编辑一个分类
    BHsetCategoryItem (params) { return axios.post('/admin/mccxcategory/setCategoryItem', params) },
    // 批量删除分类
    BHbatDelCategoryItem (params) { return axios.post('/admin/mccxcategory/batDelCategoryItem', params) },
    // 更新分类列表
    BHcreateLevelCat (params) { return axios.post('/admin/mccxcategory/createLevelCat', params) },
    // 分类层次自动纠错
    BHcorrect (params) { return axios.post('/admin/mccxcategory/correct', params) },
    // 复制一个分类
    BHcopyCategoryItem (params) { return axios.post('/admin/mccxcategory/copyCategoryItem', params) },

    // ------------------- 百货分类VIP ------------------------------- 
   // 获取全部分类列表
   BHgetCategoryListVIP (params) { return axios.post('/admin/mccxcategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   BHgetCategoryPageListVIP (params) { return axios.post('/admin/mccxcategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   BHgetSubListVIP (params) { return axios.post('/admin/mccxcategoryvip/getSubList', params) },
   // 删除一个分类
   BHdelCategoryItemVIP (params) { return axios.post('/admin/mccxcategoryvip/delCategoryItem', params) },
   // 添加一个分类
   BHaddCategoryItemVIP (params) { return axios.post('/admin/mccxcategoryvip/addCategoryItem', params) },
    // 获取一个分类
    BHgetCategoryItemVIP (params) { return axios.post('/admin/mccxcategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    BHsetCategoryItemVIP (params) { return axios.post('/admin/mccxcategoryvip/setCategoryItem', params) },
    // 批量删除分类
    BHbatDelCategoryItemVIP (params) { return axios.post('/admin/mccxcategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    BHcreateLevelCatVIP (params) { return axios.post('/admin/mccxcategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    BHcorrect (params) { return axios.post('/admin/mccxcategoryvip/correct', params) },
    // 复制一个分类
    BHcopyCategoryItemVIP (params) { return axios.post('/admin/mccxcategoryvip/copyCategoryItem', params) },

    // ------------------- 闲置分类 ------------------------------- 
   // 获取全部分类列表
   XZgetCategoryList (params) { return axios.post('/admin/mczxcategory/getCategoryList', params) },
   // 获取分类分页列表
   XZgetCategoryPageList (params) { return axios.post('/admin/mczxcategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   XZgetSubList (params) { return axios.post('/admin/mczxcategory/getSubList', params) },
   // 删除一个分类
   XZdelCategoryItem (params) { return axios.post('/admin/mczxcategory/delCategoryItem', params) },
   // 添加一个分类
   XZaddCategoryItem (params) { return axios.post('/admin/mczxcategory/addCategoryItem', params) },
    // 获取一个分类
    XZgetCategoryItem (params) { return axios.post('/admin/mczxcategory/getCategoryItem', params) },
    // 编辑一个分类
    XZsetCategoryItem (params) { return axios.post('/admin/mczxcategory/setCategoryItem', params) },
    // 批量删除分类
    XZbatDelCategoryItem (params) { return axios.post('/admin/mczxcategory/batDelCategoryItem', params) },
    // 更新分类列表
    XZcreateLevelCat (params) { return axios.post('/admin/mczxcategory/createLevelCat', params) },
    // 分类层次自动纠错
    XZcorrect (params) { return axios.post('/admin/mczxcategory/correct', params) },
    // 复制一个分类
    XZcopyCategoryItem (params) { return axios.post('/admin/mczxcategory/copyCategoryItem', params) },

    // ------------------- 闲置分类VIP ------------------------------- 
   // 获取全部分类列表
   XZgetCategoryListVIP (params) { return axios.post('/admin/mczxcategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   XZgetCategoryPageListVIP (params) { return axios.post('/admin/mczxcategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   XZgetSubListVIP (params) { return axios.post('/admin/mczxcategoryvip/getSubList', params) },
   // 删除一个分类
   XZdelCategoryItemVIP (params) { return axios.post('/admin/mczxcategoryvip/delCategoryItem', params) },
   // 添加一个分类
   XZaddCategoryItemVIP (params) { return axios.post('/admin/mczxcategoryvip/addCategoryItem', params) },
    // 获取一个分类
    XZgetCategoryItemVIP (params) { return axios.post('/admin/mczxcategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    XZsetCategoryItemVIP (params) { return axios.post('/admin/mczxcategoryvip/setCategoryItem', params) },
    // 批量删除分类
    XZbatDelCategoryItemVIP (params) { return axios.post('/admin/mczxcategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    XZcreateLevelCatVIP (params) { return axios.post('/admin/mczxcategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    XZcorrect (params) { return axios.post('/admin/mczxcategoryvip/correct', params) },
    // 复制一个分类
    XZcopyCategoryItemVIP (params) { return axios.post('/admin/mczxcategoryvip/copyCategoryItem', params) },

    // ------------------- 健康分类 ------------------------------- 
   // 获取全部分类列表
   JKgetCategoryList (params) { return axios.post('/admin/mczscategory/getCategoryList', params) },
   // 获取分类分页列表
   JKgetCategoryPageList (params) { return axios.post('/admin/mczscategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   JKgetSubList (params) { return axios.post('/admin/mczscategory/getSubList', params) },
   // 删除一个分类
   JKdelCategoryItem (params) { return axios.post('/admin/mczscategory/delCategoryItem', params) },
   // 添加一个分类
   JKaddCategoryItem (params) { return axios.post('/admin/mczscategory/addCategoryItem', params) },
    // 获取一个分类
    JKgetCategoryItem (params) { return axios.post('/admin/mczscategory/getCategoryItem', params) },
    // 编辑一个分类
    JKsetCategoryItem (params) { return axios.post('/admin/mczscategory/setCategoryItem', params) },
    // 批量删除分类
    JKbatDelCategoryItem (params) { return axios.post('/admin/mczscategory/batDelCategoryItem', params) },
    // 更新分类列表
    JKcreateLevelCat (params) { return axios.post('/admin/mczscategory/createLevelCat', params) },
    // 分类层次自动纠错
    JKcorrect (params) { return axios.post('/admin/mczscategory/correct', params) },
    // 复制一个分类
    JKcopyCategoryItem (params) { return axios.post('/admin/mczscategory/copyCategoryItem', params) },

    // ------------------- 健康分类VIP ------------------------------- 
   // 获取全部分类列表
   JKgetCategoryListVIP (params) { return axios.post('/admin/mczscategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   JKgetCategoryPageListVIP (params) { return axios.post('/admin/mczscategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   JKgetSubListVIP (params) { return axios.post('/admin/mczscategoryvip/getSubList', params) },
   // 删除一个分类
   JKdelCategoryItemVIP (params) { return axios.post('/admin/mczscategoryvip/delCategoryItem', params) },
   // 添加一个分类
   JKaddCategoryItemVIP (params) { return axios.post('/admin/mczscategoryvip/addCategoryItem', params) },
    // 获取一个分类
    JKgetCategoryItemVIP (params) { return axios.post('/admin/mczscategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    JKsetCategoryItemVIP (params) { return axios.post('/admin/mczscategoryvip/setCategoryItem', params) },
    // 批量删除分类
    JKbatDelCategoryItemVIP (params) { return axios.post('/admin/mczscategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    JKcreateLevelCatVIP (params) { return axios.post('/admin/mczscategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    JKcorrect (params) { return axios.post('/admin/mczscategoryvip/correct', params) },
    // 复制一个分类
    JKcopyCategoryItemVIP (params) { return axios.post('/admin/mczscategoryvip/copyCategoryItem', params) },

    // ------------------- 生活分类 ------------------------------- 
   // 获取全部分类列表
   SHgetCategoryList (params) { return axios.post('/admin/mcctcategory/getCategoryList', params) },
   // 获取分类分页列表
   SHgetCategoryPageList (params) { return axios.post('/admin/mcctcategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   SHgetSubList (params) { return axios.post('/admin/mcctcategory/getSubList', params) },
   // 删除一个分类
   SHdelCategoryItem (params) { return axios.post('/admin/mcctcategory/delCategoryItem', params) },
   // 添加一个分类
   SHaddCategoryItem (params) { return axios.post('/admin/mcctcategory/addCategoryItem', params) },
    // 获取一个分类
    SHgetCategoryItem (params) { return axios.post('/admin/mcctcategory/getCategoryItem', params) },
    // 编辑一个分类
    SHsetCategoryItem (params) { return axios.post('/admin/mcctcategory/setCategoryItem', params) },
    // 批量删除分类
    SHbatDelCategoryItem (params) { return axios.post('/admin/mcctcategory/batDelCategoryItem', params) },
    // 更新分类列表
    SHcreateLevelCat (params) { return axios.post('/admin/mcctcategory/createLevelCat', params) },
    // 分类层次自动纠错
    SHcorrect (params) { return axios.post('/admin/mcctcategory/correct', params) },
    // 复制一个分类
    SHcopyCategoryItem (params) { return axios.post('/admin/mcctcategory/copyCategoryItem', params) },

    // ------------------- 生活分类VIP ------------------------------- 
   // 获取全部分类列表
   SHgetCategoryListVIP (params) { return axios.post('/admin/mcctcategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   SHgetCategoryPageListVIP (params) { return axios.post('/admin/mcctcategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   SHgetSubListVIP (params) { return axios.post('/admin/mcctcategoryvip/getSubList', params) },
   // 删除一个分类
   SHdelCategoryItemVIP (params) { return axios.post('/admin/mcctcategoryvip/delCategoryItem', params) },
   // 添加一个分类
   SHaddCategoryItemVIP (params) { return axios.post('/admin/mcctcategoryvip/addCategoryItem', params) },
    // 获取一个分类
    SHgetCategoryItemVIP (params) { return axios.post('/admin/mcctcategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    SHsetCategoryItemVIP (params) { return axios.post('/admin/mcctcategoryvip/setCategoryItem', params) },
    // 批量删除分类
    SHbatDelCategoryItemVIP (params) { return axios.post('/admin/mcctcategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    SHcreateLevelCatVIP (params) { return axios.post('/admin/mcctcategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    SHcorrect (params) { return axios.post('/admin/mcctcategoryvip/correct', params) },
    // 复制一个分类
    SHcopyCategoryItemVIP (params) { return axios.post('/admin/mcctcategoryvip/copyCategoryItem', params) },

    // ------------------- 房产分类 ------------------------------- 
   // 获取全部分类列表
   FCgetCategoryList (params) { return axios.post('/admin/mczzcategory/getCategoryList', params) },
   // 获取分类分页列表
   FCgetCategoryPageList (params) { return axios.post('/admin/mczzcategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   FCgetSubList (params) { return axios.post('/admin/mczzcategory/getSubList', params) },
   // 删除一个分类
   FCdelCategoryItem (params) { return axios.post('/admin/mczzcategory/delCategoryItem', params) },
   // 添加一个分类
   FCaddCategoryItem (params) { return axios.post('/admin/mczzcategory/addCategoryItem', params) },
    // 获取一个分类
    FCgetCategoryItem (params) { return axios.post('/admin/mczzcategory/getCategoryItem', params) },
    // 编辑一个分类
    FCsetCategoryItem (params) { return axios.post('/admin/mczzcategory/setCategoryItem', params) },
    // 批量删除分类
    FCbatDelCategoryItem (params) { return axios.post('/admin/mczzcategory/batDelCategoryItem', params) },
    // 更新分类列表
    FCcreateLevelCat (params) { return axios.post('/admin/mczzcategory/createLevelCat', params) },
    // 分类层次自动纠错
    FCcorrect (params) { return axios.post('/admin/mczzcategory/correct', params) },
    // 复制一个分类
    FCcopyCategoryItem (params) { return axios.post('/admin/mczzcategory/copyCategoryItem', params) },

    // ------------------- 房产分类VIP ------------------------------- 
   // 获取全部分类列表
   FCgetCategoryListVIP (params) { return axios.post('/admin/mczzcategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   FCgetCategoryPageListVIP (params) { return axios.post('/admin/mczzcategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   FCgetSubListVIP (params) { return axios.post('/admin/mczzcategoryvip/getSubList', params) },
   // 删除一个分类
   FCdelCategoryItemVIP (params) { return axios.post('/admin/mczzcategoryvip/delCategoryItem', params) },
   // 添加一个分类
   FCaddCategoryItemVIP (params) { return axios.post('/admin/mczzcategoryvip/addCategoryItem', params) },
    // 获取一个分类
    FCgetCategoryItemVIP (params) { return axios.post('/admin/mczzcategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    FCsetCategoryItemVIP (params) { return axios.post('/admin/mczzcategoryvip/setCategoryItem', params) },
    // 批量删除分类
    FCbatDelCategoryItemVIP (params) { return axios.post('/admin/mczzcategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    FCcreateLevelCatVIP (params) { return axios.post('/admin/mczzcategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    FCcorrect (params) { return axios.post('/admin/mczzcategoryvip/correct', params) },
    // 复制一个分类
    FCcopyCategoryItemVIP (params) { return axios.post('/admin/mczzcategoryvip/copyCategoryItem', params) },

    // ------------------- 汽车分类 ------------------------------- 
   // 获取全部分类列表
   QCgetCategoryList (params) { return axios.post('/admin/mcglcategory/getCategoryList', params) },
   // 获取分类分页列表
   QCgetCategoryPageList (params) { return axios.post('/admin/mcglcategory/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   QCgetSubList (params) { return axios.post('/admin/mcglcategory/getSubList', params) },
   // 删除一个分类
   QCdelCategoryItem (params) { return axios.post('/admin/mcglcategory/delCategoryItem', params) },
   // 添加一个分类
   QCaddCategoryItem (params) { return axios.post('/admin/mcglcategory/addCategoryItem', params) },
    // 获取一个分类
    QCgetCategoryItem (params) { return axios.post('/admin/mcglcategory/getCategoryItem', params) },
    // 编辑一个分类
    QCsetCategoryItem (params) { return axios.post('/admin/mcglcategory/setCategoryItem', params) },
    // 批量删除分类
    QCbatDelCategoryItem (params) { return axios.post('/admin/mcglcategory/batDelCategoryItem', params) },
    // 更新分类列表
    QCcreateLevelCat (params) { return axios.post('/admin/mcglcategory/createLevelCat', params) },
    // 分类层次自动纠错
    QCcorrect (params) { return axios.post('/admin/mcglcategory/correct', params) },
    // 复制一个分类
    QCcopyCategoryItem (params) { return axios.post('/admin/mcglcategory/copyCategoryItem', params) },

    // ------------------- 汽车分类VIP ------------------------------- 
   // 获取全部分类列表
   QCgetCategoryListVIP (params) { return axios.post('/admin/mcglcategoryvip/getCategoryList', params) },
   // 获取分类分页列表
   QCgetCategoryPageListVIP (params) { return axios.post('/admin/mcglcategoryvip/getCategoryPageList', params) },
   // 获取指定分类的子分类列表
   QCgetSubListVIP (params) { return axios.post('/admin/mcglcategoryvip/getSubList', params) },
   // 删除一个分类
   QCdelCategoryItemVIP (params) { return axios.post('/admin/mcglcategoryvip/delCategoryItem', params) },
   // 添加一个分类
   QCaddCategoryItemVIP (params) { return axios.post('/admin/mcglcategoryvip/addCategoryItem', params) },
    // 获取一个分类
    QCgetCategoryItemVIP (params) { return axios.post('/admin/mcglcategoryvip/getCategoryItem', params) },
    // 编辑一个分类
    QCsetCategoryItemVIP (params) { return axios.post('/admin/mcglcategoryvip/setCategoryItem', params) },
    // 批量删除分类
    QCbatDelCategoryItemVIP (params) { return axios.post('/admin/mcglcategoryvip/batDelCategoryItem', params) },
    // 更新分类列表
    QCcreateLevelCatVIP (params) { return axios.post('/admin/mcglcategoryvip/createLevelCat', params) },
    // 分类层次自动纠错
    QCcorrect (params) { return axios.post('/admin/mcglcategoryvip/correct', params) },
    // 复制一个分类
    QCcopyCategoryItemVIP (params) { return axios.post('/admin/mcglcategoryvip/copyCategoryItem', params) },

   // -------------- 吃喝商品 --------------
   // 获取供应信息分页列表
   getWantSupplyPageList (params) { return axios.post('/admin/mcyxwantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    delPostItem (params) { return axios.post('/admin/mcyxwantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    setOdItem (params) { return axios.post('/admin/mcyxwantsupply/setOdItem', params) },
    // 获取一个供应信息
    getWantSupplyItem (params) { return axios.post('/admin/mcyxwantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    setWantSupplyItem (params) { return axios.post('/admin/mcyxwantsupply/setWantSupplyItem', params) },

   // -------------- 吃喝商品vip --------------
   // 获取供应信息分页列表
   getWantSupplyPageListVIP (params) { return axios.post('/admin/mcyxwantsupplyvip/getWantSupplyPageList', params) },
   // 删除一个供应信息
   delPostItemVIP (params) { return axios.post('/admin/mcyxwantsupplyvip/delPostItem', params) },
   // 编辑一个供应权重排序
   setOdItemVIP (params) { return axios.post('/admin/mcyxwantsupplyvip/setOdItem', params) },
   // 获取一个供应信息
   getWantSupplyItemVIP (params) { return axios.post('/admin/mcyxwantsupplyvip/getWantSupplyItem', params) },
   // 编辑一个供应信息
   setWantSupplyItemVIP (params) { return axios.post('/admin/mcyxwantsupplyvip/setWantSupplyItem', params) },

   // -------------- 吃喝需求 --------------
   // 获取求购信息分页列表
   getWantBuyPageList (params) { return axios.post('/admin/mcyxwantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   delWantBuyItem (params) { return axios.post('/admin/mcyxwantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   setOdItemBuy (params) { return axios.post('/admin/mcyxwantbuy/setOdItem', params) },
   // 获取一个求购信息
   getWantBuyItem (params) { return axios.post('/admin/mcyxwantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   setWantBuyItem (params) { return axios.post('/admin/mcyxwantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   setCheckItemBuy (params) { return axios.post('/admin/mcyxwantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   setBackItemBuy (params) { return axios.post('/admin/mcyxwantbuy/setBackItem', params) },

   // -------------- 吃喝需求VIP --------------
   // 获取求购信息分页列表
   getWantBuyPageListVIP (params) { return axios.post('/admin/mcyxwantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   delWantBuyItemVIP (params) { return axios.post('/admin/mcyxwantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   setOdItemBuyVIP (params) { return axios.post('/admin/mcyxwantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   getWantBuyItemVIP (params) { return axios.post('/admin/mcyxwantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   setWantBuyItemVIP (params) { return axios.post('/admin/mcyxwantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   setCheckItemBuyVIP (params) { return axios.post('/admin/mcyxwantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   setBackItemBuyVIP (params) { return axios.post('/admin/mcyxwantbuyvip/setBackItem', params) },

   // -------------- 用户留言 --------------
   // 获取留言信息分页列表
   getWantMsgPageList (params) { return axios.post('/admin/mcyxwantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   delWantMsgItem (params) { return axios.post('/admin/mcyxwantmsg/delWantMsgItem', params) }, 

      // -------------- 客户留言VIP --------------
   // 获取留言信息分页列表
   getWantMsgPageListVIP (params) { return axios.post('/admin/mcyxwantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   delWantMsgItemVIP (params) { return axios.post('/admin/mcyxwantmsgvip/delWantMsgItem', params) }, 

   // -------------- 客户订单 --------------
   // 获取订单分页列表 
   getOrderPageList (params) { return axios.post('/admin/mcyxordersupply/getOrderPageList', params) },  
   // 删除一个订单
   delOrderItem (params) { return axios.post('/admin/mcyxordersupply/delOrderItem', params) }, 
   // 获取一个订单
   getOrderItem (params) { return axios.post('/admin/mcyxordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   setOrderItem (params) { return axios.post('/admin/mcyxordersupply/setOrderItem', params) }, 

   // -------------- 退货通道 --------------
   // 获取订单分页列表
   CHgetBackOrderPageList (params) { return axios.post('/admin/mcyxbackordersupply/getBackOrderPageList', params) }, 
   // 删除一个订单
   CHdelBackOrderItem (params) { return axios.post('/admin/mcyxbackordersupply/delBackOrderItem', params) }, 
   // 获取一个订单
   CHgetBackOrderItem (params) { return axios.post('/admin/mcyxbackordersupply/getBackOrderItem', params) }, 
   // 编辑一个订单
   CHsetBackOrderItem (params) { return axios.post('/admin/mcyxbackordersupply/setBackOrderItem', params) }, 

   // -------------- 玩乐商品 --------------
    // 获取供应信息分页列表
    WLgetWantSupplyPageList (params) { return axios.post('/admin/mcpxwantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    WLdelPostItem (params) { return axios.post('/admin/mcpxwantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    WLsetOdItem (params) { return axios.post('/admin/mcpxwantsupply/setOdItem', params) },
    // 获取一个供应信息
    WLgetWantSupplyItem (params) { return axios.post('/admin/mcpxwantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    WLsetWantSupplyItem (params) { return axios.post('/admin/mcpxwantsupply/setWantSupplyItem', params) },

    // -------------- 玩乐商品VIP --------------
   // 获取供应信息分页列表
   WLgetWantSupplyPageListVIP (params) { return axios.post('/admin/mcpxwantsupplyvip/getWantSupplyPageList', params) },
   // 删除一个供应信息
   WLdelPostItemVIP (params) { return axios.post('/admin/mcpxwantsupplyvip/delPostItem', params) },
   // 编辑一个供应权重排序
   WLsetOdItemVIP (params) { return axios.post('/admin/mcpxwantsupplyvip/setOdItem', params) },
   // 获取一个供应信息
   WLgetWantSupplyItemVIP (params) { return axios.post('/admin/mcpxwantsupplyvip/getWantSupplyItem', params) },
   // 编辑一个供应信息
   WLsetWantSupplyItemVIP (params) { return axios.post('/admin/mcpxwantsupplyvip/setWantSupplyItem', params) },

   // -------------- 玩乐需求 --------------
   // 获取求购信息分页列表
   WLgetWantBuyPageList (params) { return axios.post('/admin/mcpxwantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   WLdelWantBuyItem (params) { return axios.post('/admin/mcpxwantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   WLsetOdItemBuy (params) { return axios.post('/admin/mcpxwantbuy/setOdItem', params) },
   // 获取一个求购信息
   WLgetWantBuyItem (params) { return axios.post('/admin/mcpxwantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   WLsetWantBuyItem (params) { return axios.post('/admin/mcpxwantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   WLsetCheckItemBuy (params) { return axios.post('/admin/mcpxwantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   WLsetBackItemBuy (params) { return axios.post('/admin/mcpxwantbuy/setBackItem', params) },

   // -------------- 吃喝需求VIP --------------
   // 获取求购信息分页列表
   WLgetWantBuyPageListVIP (params) { return axios.post('/admin/mcpxwantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   WLdelWantBuyItemVIP (params) { return axios.post('/admin/mcpxwantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   WLsetOdItemBuyVIP (params) { return axios.post('/admin/mcpxwantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   WLgetWantBuyItemVIP (params) { return axios.post('/admin/mcpxwantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   WLsetWantBuyItemVIP (params) { return axios.post('/admin/mcpxwantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   WLsetCheckItemBuyVIP (params) { return axios.post('/admin/mcpxwantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   WLsetBackItemBuyVIP (params) { return axios.post('/admin/mcpxwantbuyvip/setBackItem', params) },

   // -------------- 玩乐-商机留言 --------------
   // 获取留言信息分页列表
   SJgetWantMsgPageList (params) { return axios.post('/admin/wantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   SJdelWantMsgItem (params) { return axios.post('/admin/wantmsg/delWantMsgItem', params) }, 

   // -------------- 玩乐-商机留言VIP --------------
   // 获取留言信息分页列表
   SJgetWantMsgPageListVIP (params) { return axios.post('/admin/wantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   SJdelWantMsgItemVIP (params) { return axios.post('/admin/wantmsgvip/delWantMsgItem', params) }, 

   // -------------- 玩乐-客户订单 --------------
   // 获取订单分页列表
   WLgetOrderPageList (params) { return axios.post('/admin/mcpxordersupply/getOrderPageList', params) }, 
   // 删除一个订单
   WLdelOrderItem (params) { return axios.post('/admin/mcpxordersupply/delOrderItem', params) }, 
   // 获取一个订单
   WLgetOrderItem (params) { return axios.post('/admin/mcpxordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   WLsetOrderItem (params) { return axios.post('/admin/mcpxordersupply/setOrderItem', params) }, 

   // -------------- 玩乐-退货通道 --------------
   // 获取订单分页列表
   WLgetBackOrderPageList (params) { return axios.post('/admin/mcpxbackordersupply/getBackOrderPageList', params) }, 
   // 删除一个订单
   WLdelBackOrderItem (params) { return axios.post('/admin/mcpxbackordersupply/delBackOrderItem', params) }, 
   // 获取一个订单
   WLgetBackOrderItem (params) { return axios.post('/admin/mcpxbackordersupply/getBackOrderItem', params) }, 
   // 编辑一个订单
   WLsetBackOrderItem (params) { return axios.post('/admin/mcpxbackordersupply/setBackOrderItem', params) }, 

   // -------------- 服饰商品 --------------
    // 获取供应信息分页列表
    FSgetWantSupplyPageList (params) { return axios.post('/admin/mcfwwantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    FSdelPostItem (params) { return axios.post('/admin/mcfwwantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    FSsetOdItem (params) { return axios.post('/admin/mcfwwantsupply/setOdItem', params) },
    // 获取一个供应信息
    FSgetWantSupplyItem (params) { return axios.post('/admin/mcfwwantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    FSsetWantSupplyItem (params) { return axios.post('/admin/mcfwwantsupply/setWantSupplyItem', params) },

    // -------------- 服饰商品VIP --------------
    // 获取供应信息分页列表
    FSgetWantSupplyPageListVIP (params) { return axios.post('/admin/mcfwwantsupplyvip/getWantSupplyPageList', params) },
    // 删除一个供应信息
    FSdelPostItemVIP (params) { return axios.post('/admin/mcfwwantsupplyvip/delPostItem', params) },
    // 编辑一个供应权重排序
    FSsetOdItemVIP (params) { return axios.post('/admin/mcfwwantsupplyvip/setOdItem', params) },
    // 获取一个供应信息
    FSgetWantSupplyItemVIP (params) { return axios.post('/admin/mcfwwantsupplyvip/getWantSupplyItem', params) },
    // 编辑一个供应信息
    FSsetWantSupplyItemVIP (params) { return axios.post('/admin/mcfwwantsupplyvip/setWantSupplyItem', params) },

    // -------------- 服饰需求 --------------
   // 获取求购信息分页列表
   FSgetWantBuyPageList (params) { return axios.post('/admin/mcfwwantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   FSdelWantBuyItem (params) { return axios.post('/admin/mcfwwantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   FSsetOdItemBuy (params) { return axios.post('/admin/mcfwwantbuy/setOdItem', params) },
   // 获取一个求购信息
   FSgetWantBuyItem (params) { return axios.post('/admin/mcfwwantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   FSsetWantBuyItem (params) { return axios.post('/admin/mcfwwantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   FSsetCheckItemBuy (params) { return axios.post('/admin/mcfwwantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   FSsetBackItemBuy (params) { return axios.post('/admin/mcfwwantbuy/setBackItem', params) },

   // -------------- 服饰需求VIP --------------
   // 获取求购信息分页列表
   FSgetWantBuyPageListVIP (params) { return axios.post('/admin/mcfwwantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   FSdelWantBuyItemVIP (params) { return axios.post('/admin/mcfwwantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   FSsetOdItemBuyVIP (params) { return axios.post('/admin/mcfwwantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   FSgetWantBuyItemVIP (params) { return axios.post('/admin/mcfwwantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   FSsetWantBuyItemVIP (params) { return axios.post('/admin/mcfwwantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   FSsetCheckItemBuyVIP (params) { return axios.post('/admin/mcfwwantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   FSsetBackItemBuyVIP (params) { return axios.post('/admin/mcfwwantbuyvip/setBackItem', params) },

    // -------------- 服饰-用户留言 --------------
   // 获取留言信息分页列表
   FSgetWantMsgPageList (params) { return axios.post('/admin/mcfwwantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   FSdelWantMsgItem (params) { return axios.post('/admin/mcfwwantmsg/delWantMsgItem', params) }, 

   // -------------- 服饰-用户留言VIP --------------
   // 获取留言信息分页列表
   FSgetWantMsgPageListVIP (params) { return axios.post('/admin/mcfwwantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   FSdelWantMsgItemVIP (params) { return axios.post('/admin/mcfwwantmsgvip/delWantMsgItem', params) }, 

   // -------------- 服饰-客户订单 --------------
   // 获取订单分页列表
   FSgetOrderPageList (params) { return axios.post('/admin/mcfwordersupply/getOrderPageList', params) }, 
   // 删除一个订单
   FSdelOrderItem (params) { return axios.post('/admin/mcfwordersupply/delOrderItem', params) }, 
   // 获取一个订单
   FSgetOrderItem (params) { return axios.post('/admin/mcfwordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   FSsetOrderItem (params) { return axios.post('/admin/mcfwordersupply/setOrderItem', params) }, 

   // -------------- 服饰-退货通道 --------------
   // 获取订单分页列表
   FSgetBackOrderPageList (params) { return axios.post('/admin/mcfwbackordersupply/getBackOrderPageList', params) }, 
   // 删除一个订单
   FSdelBackOrderItem (params) { return axios.post('/admin/mcfwbackordersupply/delBackOrderItem', params) }, 
   // 获取一个订单
   FSgetBackOrderItem (params) { return axios.post('/admin/mcfwbackordersupply/getBackOrderItem', params) }, 
   // 编辑一个订单
   FSsetBackOrderItem (params) { return axios.post('/admin/mcfwbackordersupply/setBackOrderItem', params) }, 

   // -------------- 丽人商品 --------------
    // 获取供应信息分页列表
    LRgetWantSupplyPageList (params) { return axios.post('/admin/mcfxwantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    LRdelPostItem (params) { return axios.post('/admin/mcfxwantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    LRsetOdItem (params) { return axios.post('/admin/mcfxwantsupply/setOdItem', params) },
    // 获取一个供应信息
    LRgetWantSupplyItem (params) { return axios.post('/admin/mcfxwantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    LRsetWantSupplyItem (params) { return axios.post('/admin/mcfxwantsupply/setWantSupplyItem', params) },

    // -------------- 丽人商品VIP --------------
    // 获取供应信息分页列表
    LRgetWantSupplyPageListVIP (params) { return axios.post('/admin/mcfxwantsupplyvip/getWantSupplyPageList', params) },
    // 删除一个供应信息
    LRdelPostItemVIP (params) { return axios.post('/admin/mcfxwantsupplyvip/delPostItem', params) },
    // 编辑一个供应权重排序
    LRsetOdItemVIP (params) { return axios.post('/admin/mcfxwantsupplyvip/setOdItem', params) },
    // 获取一个供应信息
    LRgetWantSupplyItemVIP (params) { return axios.post('/admin/mcfxwantsupplyvip/getWantSupplyItem', params) },
    // 编辑一个供应信息
    LRsetWantSupplyItemVIP (params) { return axios.post('/admin/mcfxwantsupplyvip/setWantSupplyItem', params) },

    // -------------- 丽人需求 --------------
   // 获取求购信息分页列表
   LRgetWantBuyPageList (params) { return axios.post('/admin/mcfxwantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   LRdelWantBuyItem (params) { return axios.post('/admin/mcfxwantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   LRsetOdItemBuy (params) { return axios.post('/admin/mcfxwantbuy/setOdItem', params) },
   // 获取一个求购信息
   LRgetWantBuyItem (params) { return axios.post('/admin/mcfxwantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   LRsetWantBuyItem (params) { return axios.post('/admin/mcfxwantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   LRsetCheckItemBuy (params) { return axios.post('/admin/mcfxwantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   LRsetBackItemBuy (params) { return axios.post('/admin/mcfxwantbuy/setBackItem', params) },

   // -------------- 丽人需求VIP --------------
   // 获取求购信息分页列表
   LRgetWantBuyPageListVIP (params) { return axios.post('/admin/mcfxwantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   LRdelWantBuyItemVIP (params) { return axios.post('/admin/mcfxwantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   LRsetOdItemBuyVIP (params) { return axios.post('/admin/mcfxwantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   LRgetWantBuyItemVIP (params) { return axios.post('/admin/mcfxwantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   LRsetWantBuyItemVIP (params) { return axios.post('/admin/mcfxwantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   LRsetCheckItemBuyVIP (params) { return axios.post('/admin/mcfxwantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   LRsetBackItemBuyVIP (params) { return axios.post('/admin/mcfxwantbuyvip/setBackItem', params) },

    // -------------- 丽人-用户留言 --------------
   // 获取留言信息分页列表
   LRgetWantMsgPageList (params) { return axios.post('/admin/mcfxwantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   LRdelWantMsgItem (params) { return axios.post('/admin/mcfxwantmsg/delWantMsgItem', params) },

    // -------------- 丽人-用户留言VIP --------------
   // 获取留言信息分页列表
   LRgetWantMsgPageListVIP (params) { return axios.post('/admin/mcfxwantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   LRdelWantMsgItemVIP (params) { return axios.post('/admin/mcfxwantmsgvip/delWantMsgItem', params) },

   // -------------- 丽人-客户订单 --------------
   // 获取订单分页列表
   LRgetOrderPageList (params) { return axios.post('/admin/mcfxordersupply/getOrderPageList', params) }, 
   // 删除一个订单
   LRdelOrderItem (params) { return axios.post('/admin/mcfxordersupply/delOrderItem', params) }, 
   // 获取一个订单
   LRgetOrderItem (params) { return axios.post('/admin/mcfxordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   LRsetOrderItem (params) { return axios.post('/admin/mcfxordersupply/setOrderItem', params) }, 

   // -------------- 丽人-退货通道 --------------
   // 获取订单分页列表
   LRgetBackOrderPageList (params) { return axios.post('/admin/mcfxbackordersupply/getBackOrderPageList', params) }, 
   // 删除一个订单
   LRdelBackOrderItem (params) { return axios.post('/admin/mcfxbackordersupply/delBackOrderItem', params) }, 
   // 获取一个订单
   LRgetBackOrderItem (params) { return axios.post('/admin/mcfxbackordersupply/getBackOrderItem', params) }, 
   // 编辑一个订单
   LRsetBackOrderItem (params) { return axios.post('/admin/mcfxbackordersupply/setBackOrderItem', params) },

   // -------------- 百货商品 --------------
    // 获取供应信息分页列表
    BHgetWantSupplyPageList (params) { return axios.post('/admin/mccxwantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    BHdelPostItem (params) { return axios.post('/admin/mccxwantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    BHsetOdItem (params) { return axios.post('/admin/mccxwantsupply/setOdItem', params) },
    // 获取一个供应信息
    BHgetWantSupplyItem (params) { return axios.post('/admin/mccxwantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    BHsetWantSupplyItem (params) { return axios.post('/admin/mccxwantsupply/setWantSupplyItem', params) },

    // -------------- 百货商品VIP --------------
    // 获取供应信息分页列表
    BHgetWantSupplyPageListVIP (params) { return axios.post('/admin/mccxwantsupplyvip/getWantSupplyPageList', params) },
    // 删除一个供应信息
    BHdelPostItemVIP (params) { return axios.post('/admin/mccxwantsupplyvip/delPostItem', params) },
    // 编辑一个供应权重排序
    BHsetOdItemVIP (params) { return axios.post('/admin/mccxwantsupplyvip/setOdItem', params) },
    // 获取一个供应信息
    BHgetWantSupplyItemVIP (params) { return axios.post('/admin/mccxwantsupplyvip/getWantSupplyItem', params) },
    // 编辑一个供应信息
    BHsetWantSupplyItemVIP (params) { return axios.post('/admin/mccxwantsupplyvip/setWantSupplyItem', params) },

    // -------------- 百货需求 --------------
   // 获取求购信息分页列表
   BHgetWantBuyPageList (params) { return axios.post('/admin/mccxwantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   BHdelWantBuyItem (params) { return axios.post('/admin/mccxwantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   BHsetOdItemBuy (params) { return axios.post('/admin/mccxwantbuy/setOdItem', params) },
   // 获取一个求购信息
   BHgetWantBuyItem (params) { return axios.post('/admin/mccxwantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   BHsetWantBuyItem (params) { return axios.post('/admin/mccxwantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   BHsetCheckItemBuy (params) { return axios.post('/admin/mccxwantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   BHsetBackItemBuy (params) { return axios.post('/admin/mccxwantbuy/setBackItem', params) },

    // -------------- 百货需求VIP --------------
   // 获取求购信息分页列表
   BHgetWantBuyPageListVIP (params) { return axios.post('/admin/mccxwantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   BHdelWantBuyItemVIP (params) { return axios.post('/admin/mccxwantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   BHsetOdItemBuy (params) { return axios.post('/admin/mccxwantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   BHgetWantBuyItemVIP (params) { return axios.post('/admin/mccxwantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   BHsetWantBuyItemVIP (params) { return axios.post('/admin/mccxwantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   BHsetCheckItemBuyVIP (params) { return axios.post('/admin/mccxwantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   BHsetBackItemBuyVIP (params) { return axios.post('/admin/mccxwantbuyvip/setBackItem', params) },

   // -------------- 百货-用户留言 --------------
   // 获取留言信息分页列表
   BHgetWantMsgPageList (params) { return axios.post('/admin/mccxwantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   BHdelWantMsgItem (params) { return axios.post('/admin/mccxwantmsg/delWantMsgItem', params) },

   // -------------- 百货-用户留言VIP --------------
   // 获取留言信息分页列表
   BHgetWantMsgPageListVIP (params) { return axios.post('/admin/mccxwantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   BHdelWantMsgItemVIP (params) { return axios.post('/admin/mccxwantmsgvip/delWantMsgItem', params) },

   // -------------- 百货-客户订单 --------------
   // 获取订单分页列表
   BHgetOrderPageList (params) { return axios.post('/admin/mccxordersupply/getOrderPageList', params) }, 
   // 删除一个订单
   BHdelOrderItem (params) { return axios.post('/admin/mccxordersupply/delOrderItem', params) }, 
   // 获取一个订单
   BHgetOrderItem (params) { return axios.post('/admin/mccxordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   BHsetOrderItem (params) { return axios.post('/admin/mccxordersupply/setOrderItem', params) }, 

   // -------------- 百货-退货通道 --------------
   // 获取订单分页列表
   BHgetBackOrderPageList (params) { return axios.post('/admin/mccxbackordersupply/getBackOrderPageList', params) }, 
   // 删除一个订单
   BHdelBackOrderItem (params) { return axios.post('/admin/mccxbackordersupply/delBackOrderItem', params) }, 
   // 获取一个订单
   BHgetBackOrderItem (params) { return axios.post('/admin/mccxbackordersupply/getBackOrderItem', params) }, 
   // 编辑一个订单
   BHsetBackOrderItem (params) { return axios.post('/admin/mccxbackordersupply/setBackOrderItem', params) },

   // -------------- 闲置商品 --------------
    // 获取供应信息分页列表
    XZgetWantSupplyPageList (params) { return axios.post('/admin/mczxwantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    XZdelPostItem (params) { return axios.post('/admin/mczxwantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    XZsetOdItem (params) { return axios.post('/admin/mczxwantsupply/setOdItem', params) },
    // 获取一个供应信息
    XZgetWantSupplyItem (params) { return axios.post('/admin/mczxwantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    XZsetWantSupplyItem (params) { return axios.post('/admin/mczxwantsupply/setWantSupplyItem', params) },

  // -------------- 闲置商品VIP --------------
    // 获取供应信息分页列表
    XZgetWantSupplyPageListVIP (params) { return axios.post('/admin/mczxwantsupplyvip/getWantSupplyPageList', params) },
    // 删除一个供应信息
    XZdelPostItemVIP (params) { return axios.post('/admin/mczxwantsupplyvip/delPostItem', params) },
    // 编辑一个供应权重排序
    XZsetOdItemVIP (params) { return axios.post('/admin/mczxwantsupplyvip/setOdItem', params) },
    // 获取一个供应信息
    XZgetWantSupplyItemVIP (params) { return axios.post('/admin/mczxwantsupplyvip/getWantSupplyItem', params) },
    // 编辑一个供应信息
    XZsetWantSupplyItemVIP (params) { return axios.post('/admin/mczxwantsupplyvip/setWantSupplyItem', params) },

    // -------------- 闲置需求 --------------
   // 获取求购信息分页列表
   XZgetWantBuyPageList (params) { return axios.post('/admin/mczxwantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   XZdelWantBuyItem (params) { return axios.post('/admin/mczxwantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   XZsetOdItemBuy (params) { return axios.post('/admin/mczxwantbuy/setOdItem', params) },
   // 获取一个求购信息
   XZgetWantBuyItem (params) { return axios.post('/admin/mczxwantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   XZsetWantBuyItem (params) { return axios.post('/admin/mczxwantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   XZsetCheckItemBuy (params) { return axios.post('/admin/mczxwantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   XZsetBackItemBuy (params) { return axios.post('/admin/mczxwantbuy/setBackItem', params) },

   // -------------- 闲置需求VIP --------------
   // 获取求购信息分页列表
   XZgetWantBuyPageListVIP (params) { return axios.post('/admin/mczxwantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   XZdelWantBuyItemVIP (params) { return axios.post('/admin/mczxwantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   XZsetOdItemBuyVIP (params) { return axios.post('/admin/mczxwantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   XZgetWantBuyItemVIP (params) { return axios.post('/admin/mczxwantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   XZsetWantBuyItemVIP (params) { return axios.post('/admin/mczxwantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   XZsetCheckItemBuyVIP (params) { return axios.post('/admin/mczxwantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   XZsetBackItemBuyVIP (params) { return axios.post('/admin/mczxwantbuyvip/setBackItem', params) },

   // -------------- 闲置-用户留言 --------------
   // 获取留言信息分页列表
   XZgetWantMsgPageList (params) { return axios.post('/admin/mczxwantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   XZdelWantMsgItem (params) { return axios.post('/admin/mczxwantmsg/delWantMsgItem', params) },

    // -------------- 闲置-用户留言VIP --------------
   // 获取留言信息分页列表
   XZgetWantMsgPageListVIP (params) { return axios.post('/admin/mczxwantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   XZdelWantMsgItemVIP (params) { return axios.post('/admin/mczxwantmsgvip/delWantMsgItem', params) },

   // -------------- 闲置-客户订单 --------------
   // 获取订单分页列表
   XZgetOrderPageList (params) { return axios.post('/admin/mczxordersupply/getOrderPageList', params) }, 
   // 删除一个订单
   XZdelOrderItem (params) { return axios.post('/admin/mczxordersupply/delOrderItem', params) }, 
   // 获取一个订单
   XZgetOrderItem (params) { return axios.post('/admin/mczxordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   XZsetOrderItem (params) { return axios.post('/admin/mczxordersupply/setOrderItem', params) }, 

   // -------------- 闲置-退货通道 --------------
   // 获取订单分页列表
   XZgetBackOrderPageList (params) { return axios.post('/admin/mczxbackordersupply/getBackOrderPageList', params) }, 
   // 删除一个订单
   XZdelBackOrderItem (params) { return axios.post('/admin/mczxbackordersupply/delBackOrderItem', params) }, 
   // 获取一个订单
   XZgetBackOrderItem (params) { return axios.post('/admin/mczxbackordersupply/getBackOrderItem', params) }, 
   // 编辑一个订单
   XZsetBackOrderItem (params) { return axios.post('/admin/mczxbackordersupply/setBackOrderItem', params) },

   // -------------- 健康商品 --------------
    // 获取供应信息分页列表
    JKgetWantSupplyPageList (params) { return axios.post('/admin/mczswantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    JKdelPostItem (params) { return axios.post('/admin/mczswantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    JKsetOdItem (params) { return axios.post('/admin/mczswantsupply/setOdItem', params) },
    // 获取一个供应信息
    JKgetWantSupplyItem (params) { return axios.post('/admin/mczswantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    JKsetWantSupplyItem (params) { return axios.post('/admin/mczswantsupply/setWantSupplyItem', params) },

    // -------------- 健康商品VIP --------------
    // 获取供应信息分页列表
    JKgetWantSupplyPageListVIP (params) { return axios.post('/admin/mczswantsupplyvip/getWantSupplyPageList', params) },
    // 删除一个供应信息
    JKdelPostItemVIP (params) { return axios.post('/admin/mczswantsupplyvip/delPostItem', params) },
    // 编辑一个供应权重排序
    JKsetOdItemVIP (params) { return axios.post('/admin/mczswantsupplyvip/setOdItem', params) },
    // 获取一个供应信息
    JKgetWantSupplyItemVIP (params) { return axios.post('/admin/mczswantsupplyvip/getWantSupplyItem', params) },
    // 编辑一个供应信息
    JKsetWantSupplyItemVIP (params) { return axios.post('/admin/mczswantsupplyvip/setWantSupplyItem', params) },

    // -------------- 健康需求 --------------
   // 获取求购信息分页列表
   JKgetWantBuyPageList (params) { return axios.post('/admin/mczswantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   JKdelWantBuyItem (params) { return axios.post('/admin/mczswantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   JKsetOdItemBuy (params) { return axios.post('/admin/mczswantbuy/setOdItem', params) },
   // 获取一个求购信息
   JKgetWantBuyItem (params) { return axios.post('/admin/mczswantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   JKsetWantBuyItem (params) { return axios.post('/admin/mczswantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   JKsetCheckItemBuy (params) { return axios.post('/admin/mczswantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   JKsetBackItemBuy (params) { return axios.post('/admin/mczswantbuy/setBackItem', params) },

    // -------------- 健康需求VIP --------------
   // 获取求购信息分页列表
   JKgetWantBuyPageListVIP (params) { return axios.post('/admin/mczswantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   JKdelWantBuyItemVIP (params) { return axios.post('/admin/mczswantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   JKsetOdItemBuyVIP (params) { return axios.post('/admin/mczswantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   JKgetWantBuyItemVIP (params) { return axios.post('/admin/mczswantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   JKsetWantBuyItemVIP (params) { return axios.post('/admin/mczswantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   JKsetCheckItemBuyVIP (params) { return axios.post('/admin/mczswantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   JKsetBackItemBuyVIP (params) { return axios.post('/admin/mczswantbuyvip/setBackItem', params) },

   // -------------- 健康-用户留言 --------------
   // 获取留言信息分页列表
   JKgetWantMsgPageList (params) { return axios.post('/admin/mczswantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   JKdelWantMsgItem (params) { return axios.post('/admin/mczswantmsg/delWantMsgItem', params) },

    // -------------- 健康-用户留言VIP --------------
   // 获取留言信息分页列表
   JKgetWantMsgPageListVIP (params) { return axios.post('/admin/mczswantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   JKdelWantMsgItemVIP (params) { return axios.post('/admin/mczswantmsgvip/delWantMsgItem', params) },

   // -------------- 健康-客户订单 --------------
   // 获取订单分页列表
   JKgetOrderPageList (params) { return axios.post('/admin/mczsordersupply/getOrderPageList', params) }, 
   // 删除一个订单
   JKdelOrderItem (params) { return axios.post('/admin/mczsordersupply/delOrderItem', params) }, 
   // 获取一个订单
   JKgetOrderItem (params) { return axios.post('/admin/mczsordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   JKsetOrderItem (params) { return axios.post('/admin/mczsordersupply/setOrderItem', params) }, 

   // -------------- 健康-退货通道 --------------
   // 获取订单分页列表
   JKgetBackOrderPageList (params) { return axios.post('/admin/mczsbackordersupply/getBackOrderPageList', params) }, 
   // 删除一个订单
   JKdelBackOrderItem (params) { return axios.post('/admin/mczsbackordersupply/delBackOrderItem', params) }, 
   // 获取一个订单
   JKgetBackOrderItem (params) { return axios.post('/admin/mczsbackordersupply/getBackOrderItem', params) }, 
   // 编辑一个订单
   JKsetBackOrderItem (params) { return axios.post('/admin/mczsbackordersupply/setBackOrderItem', params) },

   // -------------- 生活商品 --------------
    // 获取供应信息分页列表
    SHgetWantSupplyPageList (params) { return axios.post('/admin/mcctwantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    SHdelPostItem (params) { return axios.post('/admin/mcctwantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    SHsetOdItem (params) { return axios.post('/admin/mcctwantsupply/setOdItem', params) },
    // 获取一个供应信息
    SHgetWantSupplyItem (params) { return axios.post('/admin/mcctwantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    SHsetWantSupplyItem (params) { return axios.post('/admin/mcctwantsupply/setWantSupplyItem', params) },

    // -------------- 生活商品VIP --------------
    // 获取供应信息分页列表
    SHgetWantSupplyPageListVIP (params) { return axios.post('/admin/mcctwantsupplyvip/getWantSupplyPageList', params) },
    // 删除一个供应信息
    SHdelPostItemVIP (params) { return axios.post('/admin/mcctwantsupplyvip/delPostItem', params) },
    // 编辑一个供应权重排序
    SHsetOdItemVIP (params) { return axios.post('/admin/mcctwantsupplyvip/setOdItem', params) },
    // 获取一个供应信息
    SHgetWantSupplyItemVIP (params) { return axios.post('/admin/mcctwantsupplyvip/getWantSupplyItem', params) },
    // 编辑一个供应信息
    SHsetWantSupplyItemVIP (params) { return axios.post('/admin/mcctwantsupplyvip/setWantSupplyItem', params) },

    // -------------- 生活需求 --------------
   // 获取求购信息分页列表
   SHgetWantBuyPageList (params) { return axios.post('/admin/mcctwantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   SHdelWantBuyItem (params) { return axios.post('/admin/mcctwantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   SHsetOdItemBuy (params) { return axios.post('/admin/mcctwantbuy/setOdItem', params) },
   // 获取一个求购信息
   SHgetWantBuyItem (params) { return axios.post('/admin/mcctwantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   SHsetWantBuyItem (params) { return axios.post('/admin/mcctwantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   SHsetCheckItemBuy (params) { return axios.post('/admin/mcctwantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   SHsetBackItemBuy (params) { return axios.post('/admin/mcctwantbuy/setBackItem', params) },

   // -------------- 生活需求VIP --------------
   // 获取求购信息分页列表
   SHgetWantBuyPageListVIP (params) { return axios.post('/admin/mcctwantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   SHdelWantBuyItemVIP (params) { return axios.post('/admin/mcctwantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   SHsetOdItemBuyVIP (params) { return axios.post('/admin/mcctwantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   SHgetWantBuyItemVIP (params) { return axios.post('/admin/mcctwantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   SHsetWantBuyItemVIP (params) { return axios.post('/admin/mcctwantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   SHsetCheckItemBuyVIP (params) { return axios.post('/admin/mcctwantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   SHsetBackItemBuyVIP (params) { return axios.post('/admin/mcctwantbuyvip/setBackItem', params) },

   // -------------- 生活-用户留言 --------------
   // 获取留言信息分页列表
   SHgetWantMsgPageList (params) { return axios.post('/admin/mcctwantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   SHdelWantMsgItem (params) { return axios.post('/admin/mcctwantmsg/delWantMsgItem', params) },

    // -------------- 生活-用户留言VIP --------------
   // 获取留言信息分页列表
   SHgetWantMsgPageListVIP (params) { return axios.post('/admin/mcctwantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   SHdelWantMsgItemVIP (params) { return axios.post('/admin/mcctwantmsgvip/delWantMsgItem', params) },

   // -------------- 生活-客户订单 --------------
   // 获取订单分页列表
   SHgetOrderPageList (params) { return axios.post('/admin/mcctordersupply/getOrderPageList', params) }, 
   // 删除一个订单
   SHdelOrderItem (params) { return axios.post('/admin/mcctordersupply/delOrderItem', params) }, 
   // 获取一个订单
   SHgetOrderItem (params) { return axios.post('/admin/mcctordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   SHsetOrderItem (params) { return axios.post('/admin/mcctordersupply/setOrderItem', params) }, 

   // -------------- 生活-退货通道 --------------
   // 获取订单分页列表
   SHgetBackOrderPageList (params) { return axios.post('/admin/mcctbackordersupply/getBackOrderPageList', params) }, 
   // 删除一个订单
   SHdelBackOrderItem (params) { return axios.post('/admin/mcctbackordersupply/delBackOrderItem', params) }, 
   // 获取一个订单
   SHgetBackOrderItem (params) { return axios.post('/admin/mcctbackordersupply/getBackOrderItem', params) }, 
   // 编辑一个订单
   SHsetBackOrderItem (params) { return axios.post('/admin/mcctbackordersupply/setBackOrderItem', params) },

   // -------------- 房产商品 --------------
    // 获取供应信息分页列表
    FCgetWantSupplyPageList (params) { return axios.post('/admin/mczzwantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    FCdelPostItem (params) { return axios.post('/admin/mczzwantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    FCsetOdItem (params) { return axios.post('/admin/mczzwantsupply/setOdItem', params) },
    // 获取一个供应信息
    FCgetWantSupplyItem (params) { return axios.post('/admin/mczzwantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    FCsetWantSupplyItem (params) { return axios.post('/admin/mczzwantsupply/setWantSupplyItem', params) },

    // -------------- 房产商品VIP --------------
    // 获取供应信息分页列表
    FCgetWantSupplyPageListVIP (params) { return axios.post('/admin/mczzwantsupplyvip/getWantSupplyPageList', params) },
    // 删除一个供应信息
    FCdelPostItemVIP (params) { return axios.post('/admin/mczzwantsupplyvip/delPostItem', params) },
    // 编辑一个供应权重排序
    FCsetOdItemVIP (params) { return axios.post('/admin/mczzwantsupplyvip/setOdItem', params) },
    // 获取一个供应信息
    FCgetWantSupplyItemVIP (params) { return axios.post('/admin/mczzwantsupplyvip/getWantSupplyItem', params) },
    // 编辑一个供应信息
    FCsetWantSupplyItemVIP (params) { return axios.post('/admin/mczzwantsupplyvip/setWantSupplyItem', params) },

    // -------------- 房产需求 --------------
   // 获取求购信息分页列表
   FCgetWantBuyPageList (params) { return axios.post('/admin/mczzwantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   FCdelWantBuyItem (params) { return axios.post('/admin/mczzwantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   FCsetOdItemBuy (params) { return axios.post('/admin/mczzwantbuy/setOdItem', params) },
   // 获取一个求购信息
   FCgetWantBuyItem (params) { return axios.post('/admin/mczzwantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   FCsetWantBuyItem (params) { return axios.post('/admin/mczzwantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   FCsetCheckItemBuy (params) { return axios.post('/admin/mczzwantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   FCsetBackItemBuy (params) { return axios.post('/admin/mczzwantbuy/setBackItem', params) },

   // -------------- 房产需求VIP --------------
   // 获取求购信息分页列表
   FCgetWantBuyPageListVIP (params) { return axios.post('/admin/mczzwantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   FCdelWantBuyItemVIP (params) { return axios.post('/admin/mczzwantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   FCsetOdItemBuyVIP (params) { return axios.post('/admin/mczzwantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   FCgetWantBuyItemVIP (params) { return axios.post('/admin/mczzwantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   FCsetWantBuyItemVIP (params) { return axios.post('/admin/mczzwantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   FCsetCheckItemBuyVIP (params) { return axios.post('/admin/mczzwantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   FCsetBackItemBuyVIP (params) { return axios.post('/admin/mczzwantbuyvip/setBackItem', params) },

   // -------------- 房产-用户留言 --------------
   // 获取留言信息分页列表
   FCgetWantMsgPageList (params) { return axios.post('/admin/mczzwantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   FCdelWantMsgItem (params) { return axios.post('/admin/mczzwantmsg/delWantMsgItem', params) },

    // -------------- 房产-用户留言VIP --------------
   // 获取留言信息分页列表
   FCgetWantMsgPageListVIP (params) { return axios.post('/admin/mczzwantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   FCdelWantMsgItemVIP (params) { return axios.post('/admin/mczzwantmsgvip/delWantMsgItem', params) },

   // -------------- 房产-客户订单 --------------
   // 获取订单分页列表
   FCgetOrderPageList (params) { return axios.post('/admin/mczzordersupply/getOrderPageList', params) }, 
   // 删除一个订单
   FCdelOrderItem (params) { return axios.post('/admin/mczzordersupply/delOrderItem', params) }, 
   // 获取一个订单
   FCgetOrderItem (params) { return axios.post('/admin/mczzordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   FCsetOrderItem (params) { return axios.post('/admin/mczzordersupply/setOrderItem', params) }, 

   // -------------- 房产-退货通道 --------------
   // 获取订单分页列表
   FCgetBackOrderPageList (params) { return axios.post('/admin/mczzbackordersupply/getBackOrderPageList', params) }, 
   // 删除一个订单
   FCdelBackOrderItem (params) { return axios.post('/admin/mczzbackordersupply/delBackOrderItem', params) }, 
   // 获取一个订单
   FCgetBackOrderItem (params) { return axios.post('/admin/mczzbackordersupply/getBackOrderItem', params) }, 
   // 编辑一个订单
   FCsetBackOrderItem (params) { return axios.post('/admin/mczzbackordersupply/setBackOrderItem', params) },

    // -------------- 汽车商品 --------------
    // 获取供应信息分页列表
    QCgetWantSupplyPageList (params) { return axios.post('/admin/mcglwantsupply/getWantSupplyPageList', params) },
    // 删除一个供应信息
    QCdelPostItem (params) { return axios.post('/admin/mcglwantsupply/delPostItem', params) },
    // 编辑一个供应权重排序
    QCsetOdItem (params) { return axios.post('/admin/mcglwantsupply/setOdItem', params) },
    // 获取一个供应信息
    QCgetWantSupplyItem (params) { return axios.post('/admin/mcglwantsupply/getWantSupplyItem', params) },
    // 编辑一个供应信息
    QCsetWantSupplyItem (params) { return axios.post('/admin/mcglwantsupply/setWantSupplyItem', params) },

    // -------------- 汽车商品VIP --------------
    // 获取供应信息分页列表
    QCgetWantSupplyPageListVIP (params) { return axios.post('/admin/mcglwantsupplyvip/getWantSupplyPageList', params) },
    // 删除一个供应信息
    QCdelPostItemVIP (params) { return axios.post('/admin/mcglwantsupplyvip/delPostItem', params) },
    // 编辑一个供应权重排序
    QCsetOdItemVIP (params) { return axios.post('/admin/mcglwantsupplyvip/setOdItem', params) },
    // 获取一个供应信息
    QCgetWantSupplyItemVIP (params) { return axios.post('/admin/mcglwantsupplyvip/getWantSupplyItem', params) },
    // 编辑一个供应信息
    QCsetWantSupplyItemVIP (params) { return axios.post('/admin/mcglwantsupplyvip/setWantSupplyItem', params) },

    // -------------- 汽车需求 --------------
   // 获取求购信息分页列表
   QCgetWantBuyPageList (params) { return axios.post('/admin/mcglwantbuy/getWantBuyPageList', params) },
   // 删除一个求购信息
   QCdelWantBuyItem (params) { return axios.post('/admin/mcglwantbuy/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   QCsetOdItemBuy (params) { return axios.post('/admin/mcglwantbuy/setOdItem', params) },
   // 获取一个求购信息
   QCgetWantBuyItem (params) { return axios.post('/admin/mcglwantbuy/getWantBuyItem', params) },
   // 编辑一个求购信息
   QCsetWantBuyItem (params) { return axios.post('/admin/mcglwantbuy/setWantBuyItem', params) },
   // 审核一个求购信息
   QCsetCheckItemBuy (params) { return axios.post('/admin/mcglwantbuy/setCheckItem', params) },
   // 驳回一个求购信息
   QCsetBackItemBuy (params) { return axios.post('/admin/mcglwantbuy/setBackItem', params) },

   // -------------- 汽车需求VIP --------------
   // 获取求购信息分页列表
   QCgetWantBuyPageListVIP (params) { return axios.post('/admin/mcglwantbuyvip/getWantBuyPageList', params) },
   // 删除一个求购信息
   QCdelWantBuyItemVIP (params) { return axios.post('/admin/mcglwantbuyvip/delWantBuyItem', params) },
   // 编辑一个求购权重排序
   QCsetOdItemBuyVIP (params) { return axios.post('/admin/mcglwantbuyvip/setOdItem', params) },
   // 获取一个求购信息
   QCgetWantBuyItemVIP (params) { return axios.post('/admin/mcglwantbuyvip/getWantBuyItem', params) },
   // 编辑一个求购信息
   QCsetWantBuyItemVIP (params) { return axios.post('/admin/mcglwantbuyvip/setWantBuyItem', params) },
   // 审核一个求购信息
   QCsetCheckItemBuyVIP (params) { return axios.post('/admin/mcglwantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   QCsetBackItemBuyVIP (params) { return axios.post('/admin/mcglwantbuyvip/setBackItem', params) },

   // -------------- 汽车-用户留言 --------------
   // 获取留言信息分页列表
   QCgetWantMsgPageList (params) { return axios.post('/admin/mcglwantmsg/getWantMsgPageList', params) },
   // 删除一个留言信息
   QCdelWantMsgItem (params) { return axios.post('/admin/mcglwantmsg/delWantMsgItem', params) },

    // -------------- 汽车-用户留言VIP --------------
   // 获取留言信息分页列表
   QCgetWantMsgPageListVIP (params) { return axios.post('/admin/mcglwantmsgvip/getWantMsgPageList', params) },
   // 删除一个留言信息
   QCdelWantMsgItemVIP (params) { return axios.post('/admin/mcglwantmsgvip/delWantMsgItem', params) },

   // -------------- 汽车-客户订单 --------------
   // 获取订单分页列表
   QCgetOrderPageList (params) { return axios.post('/admin/mcglordersupply/getOrderPageList', params) }, 
   // 删除一个订单
   QCdelOrderItem (params) { return axios.post('/admin/mcglordersupply/delOrderItem', params) }, 
   // 获取一个订单
   QCgetOrderItem (params) { return axios.post('/admin/mcglordersupply/getOrderItem', params) }, 
   // 编辑一个订单
   QCsetOrderItem (params) { return axios.post('/admin/mcglordersupply/setOrderItem', params) }, 

   // -------------- 营销管理 --------------
   // 获取云集商品分页列表
   getStoragePageList (params) { return axios.post('/admin/goodsstorage/getStoragePageList', params) }, 
   // 删除一个云集商品
   delStorageItem (params) { return axios.post('/admin/goodsstorage/delStorageItem', params) },
   // 审核一个云集商品
   setCheckItem (params) { return axios.post('/admin/goodsstorage/setCheckItem', params) },
   // 批量审核云集商品
   batEdit (params) { return axios.post('/admin/goodsstorage/batEdit', params) },

   // 获取云仓商品分页列表
   YCgetStoragePageList (params) { return axios.post('/admin/pfgoodsstorage/getStoragePageList', params) }, 
   // 删除一个云仓商品
   YCdelStorageItem (params) { return axios.post('/admin/pfgoodsstorage/delStorageItem', params) },
   // 审核一个云仓商品
   YCsetCheckItem (params) { return axios.post('/admin/pfgoodsstorage/setCheckItem', params) },
   // 批量审核云仓商品
   YCbatEdit (params) { return axios.post('/admin/pfgoodsstorage/batEdit', params) },

   // 获取抽奖活动分页列表
   getLuckyActPageList (params) { return axios.post('/admin/luckyact/getLuckyActPageList', params) },
   // 添加一个抽奖活动
   addLuckyActItem (params) { return axios.post('/admin/luckyact/addLuckyActItem', params) },
   // 获取一个抽奖活动
   getLuckyActItem (params) { return axios.post('/admin/luckyact/getLuckyActItem', params) },
   // 编辑一个抽奖活动
   setLuckyActItem (params) { return axios.post('/admin/luckyact/setLuckyActItem', params) },
   // 删除一个抽奖活动
   delLuckyActItem (params) { return axios.post('/admin/luckyact/delLuckyActItem', params) },

   // 获取抽奖结果分页列表
   getLuckyRecPageList (params) { return axios.post('/admin/luckyrec/getLuckyRecPageList', params) },
   // 发货一个抽奖结果
   setCheckItem (params) { return axios.post('/admin/luckyrec/setCheckItem', params) },
   // 删除一个抽奖结果
   delLuckyRecItem (params) { return axios.post('/admin/luckyrec/delLuckyRecItem', params) },
   // 获取一个抽奖结果
   getLuckyRecItem (params) { return axios.post('/admin/luckyrec/getLuckyRecItem', params) },
   // 编辑一个抽奖结果
   setLuckyRecItem (params) { return axios.post('/admin/luckyrec/setLuckyRecItem', params) },

   // 获取优惠券分页列表
   getCouponPageList (params) { return axios.post('/admin/coupon/getCouponPageList', params) },
   // 获取一个优惠券
   getCouponItem (params) { return axios.post('/admin/coupon/getCouponItem', params) },
   // 编辑一个优惠券
   setCouponItem (params) { return axios.post('/admin/coupon/setCouponItem', params) },
   // 删除一个优惠券
   delCouponItem (params) { return axios.post('/admin/coupon/delCouponItem', params) },
   // 批量审核优惠券
   setBatCheckItem (params) { return axios.post('/admin/coupon/setBatCheckItem', params) },

   // 获取积分商品分页列表
   getChangeGdPageList (params) { return axios.post('/admin/changegd/getChangeGdPageList', params) },

   // 获取广告分页列表
   getAdPageList (params) { return axios.post('/admin/rcmad/getAdPageList', params) },
    // 获取广告初始化数据
    getInitData (params) { return axios.post('/admin/rcmad/getInitData', params) },

   // -----------------------   服务管理  --------------------
   // 获取供应信息分页列表
   FWgetWantSupplyPageList (params) { return axios.post('/admin/wantsupply/getWantSupplyPageList', params) },
   // 编辑一个供应权重排序
   FWsetOdItem (params) { return axios.post('/admin/wantsupply/setOdItem', params) },
   // 获取一个供应信息
   FWgetWantSupplyItem (params) { return axios.post('/admin/wantsupply/getWantSupplyItem', params) },
   // 编辑一个供应信息
   FWsetWantSupplyItem (params) { return axios.post('/admin/wantsupply/setWantSupplyItem', params) },
   // 删除一个供应信息
   FWdelPostItem (params) { return axios.post('/admin/wantsupply/delPostItem', params) },
   // 审核一个供应信息
   FWsetCheckItem (params) { return axios.post('/admin/wantsupply/setCheckItem', params) },
   // 驳回一个供应信息
   FWsetBackItem (params) { return axios.post('/admin/wantsupply/setBackItem', params) },

    // 获取求购信息分页列表
    QGgetWantBuyPageList (params) { return axios.post('/admin/wantbuy/getWantBuyPageList', params) },
    // 编辑一个求购权重排序
    QGsetOdItem (params) { return axios.post('/admin/wantbuy/setOdItem', params) },
    // 获取一个供应信息
    QGgetWantBuyItem (params) { return axios.post('/admin/wantbuy/getWantBuyItem', params) },
    // 编辑一个求购信息
    QGsetWantBuyItem (params) { return axios.post('/admin/wantbuy/setWantBuyItem', params) },
    // 删除一个求购信息
    QGdelWantBuyItem (params) { return axios.post('/admin/wantbuy/delWantBuyItem', params) },
    // 审核一个求购信息
    QGsetCheckItem (params) { return axios.post('/admin/wantbuy/setCheckItem', params) },
    // 驳回一个求购信息
    QGsetBackItem (params) { return axios.post('/admin/wantbuy/setBackItem', params) },
    
   // 获取留言信息分页列表
   LYgetWantMsgPageList (params) { return axios.post('/admin/wantmsg/getWantMsgPageList', params) },
   // 删除留言信息
   LYdelWantMsgItem (params) { return axios.post('/admin/wantmsg/delWantMsgItem', params) },
   // 批量删除留言信息
   LYbatDelWantMsgItem (params) { return axios.post('/admin/wantmsg/batDelWantMsgItem', params) },

  // --------- 拼车订单-客户订单 -----------
   // 获取订单分页列表
   PCgetOrderPageList (params) { return axios.post('/admin/ordersupply/getOrderPageList', params) },
   // 获取一个订单
   PCgetOrderItem (params) { return axios.post('/admin/ordersupply/getOrderItem', params) },
   // 编辑一个订单
   PCsetOrderItem (params) { return axios.post('/admin/ordersupply/setOrderItem', params) },
   // 删除一个订单
   PCdelOrderItem (params) { return axios.post('/admin/ordersupply/delOrderItem', params) },

    // 获取供应退货订单分页列表
    PCgetBackOrderPageList (params) { return axios.post('/admin/backordersupply/getBackOrderPageList', params) },
    // 获取一个供应退货订单
    PCgetBackOrderItem (params) { return axios.post('/admin/backordersupply/getBackOrderItem', params) },
    // 审核一个供应退货订单
    PCsetBackOrderItem (params) { return axios.post('/admin/backordersupply/setBackOrderItem', params) },
    // 删除一个供应退货订单
    PCdelBackOrderItem (params) { return axios.post('/admin/backordersupply/delBackOrderItem', params) },

   // 获取供应信息分页列表
   FWgetWantSupplyPageListVIP (params) { return axios.post('/admin/wantsupplyvip/getWantSupplyPageList', params) },
   // 编辑一个供应权重排序
   FWsetOdItemVIP (params) { return axios.post('/admin/wantsupplyvip/setOdItem', params) },
   // 获取一个供应信息
   FWgetWantSupplyItemVIP (params) { return axios.post('/admin/wantsupplyvip/getWantSupplyItem', params) },
   // 编辑一个供应信息
   FWsetWantSupplyItemVIP (params) { return axios.post('/admin/wantsupplyvip/setWantSupplyItem', params) },
   // 删除一个供应信息
   FWdelPostItemVIP (params) { return axios.post('/admin/wantsupplyvip/delPostItem', params) },
   // 审核一个供应信息
   FWsetCheckItemVIP (params) { return axios.post('/admin/wantsupplyvip/setCheckItem', params) },
   // 驳回一个供应信息
   FWsetBackItemVIP (params) { return axios.post('/admin/wantsupplyvip/setBackItem', params) },

   // 获取求购信息分页列表
   QGgetWantBuyPageListVIP (params) { return axios.post('/admin/wantbuyvip/getWantBuyPageList', params) },
   // 编辑一个求购权重排序
   QGsetOdItemVIP (params) { return axios.post('/admin/wantbuyvip/setOdItem', params) }, // 未完成
   // 获取一个供应信息
   QGgetWantBuyItemVIP (params) { return axios.post('/admin/wantbuyvip/getWantBuyItem', params) }, // 未完成
   // 编辑一个求购信息
   QGsetWantBuyItemVIP (params) { return axios.post('/admin/wantbuyvip/setWantBuyItem', params) },
   // 删除一个求购信息
   QGdelWantBuyItemVIP (params) { return axios.post('/admin/wantbuyvip/delWantBuyItem', params) },
   // 审核一个求购信息
   QGsetCheckItemVIP (params) { return axios.post('/admin/wantbuyvip/setCheckItem', params) },
   // 驳回一个求购信息
   QGsetBackItemVIP (params) { return axios.post('/admin/wantbuyvip/setBackItem', params) },

   // 获取留言信息分页列表
   LYgetWantMsgPageListVIP (params) { return axios.post('/admin/wantmsgvip/getWantMsgPageList', params) },
   // 删除留言信息
   LYdelWantMsgItemVIP (params) { return axios.post('/admin/wantmsgvip/delWantMsgItem', params) },
   // 批量删除留言信息
   LYbatDelWantMsgItemVIP (params) { return axios.post('/admin/wantmsgvip/batDelWantMsgItem', params) },
   




   // 获取商品分类
   getBoardPageList (params) { return axios.post('/admin/board/getBoardPageList', params) }, // order_field: "od",  order_type: "desc"
   getBoardSubList (params) { return axios.post('/admin/board/getBoardSubList', params) }, // uid
  }
export default newData