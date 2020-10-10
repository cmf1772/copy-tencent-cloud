// 管理直接更新states的方法
export default {
  // 存储访问端
  updateAgent(state, data) {
    sessionStorage.setItem('isWechat', data)
    if (sessionStorage.getItem('isWechat') == "false") {
      state.isWechat = false;
      return;
    };
    if (sessionStorage.getItem('isWechat') == "true") {
      state.isWechat = true;
      return;
    };
    state.isWechat = sessionStorage.getItem('isWechat');
  },
  // 存储selectedOrderId的值
  setselectedOrderId(state, data) {
    sessionStorage.setItem('selectedOrderId', data)
    state.selectedOrderId = sessionStorage.getItem('selectedOrderId')
  },
  //用户信息发生变化存储
  updateUserInfo(state, data) {
    state.user_id = data['user_id'];
    state.user_name = data['user_name'];
    state.user_tel = data['user_tel'];
    state.face = data['user_face'];
  },
  //设置用户是否登录
  setUserLogin( state, data){
    localStorage.setItem('_M_LOGIN',data);
    state.isLogin = data
  },
  //设置用户信息
  setUser(state, data){
    localStorage.setItem('_M_User',JSON.stringify(data));
    state.user = data
  },
  //设置用户Token
  setToken(state, data){
    localStorage.setItem('_M_Key',JSON.stringify(data));
    state.token = data
  },
  //设置用户详情
  setUserInfo(state, data){
    localStorage.setItem('_M_User_Info',JSON.stringify(data));
    state.userInfo = data
  },

  //设置用户收藏列表
  setUserStarList( state, data){
    localStorage.setItem('_M_Star_List',JSON.stringify(data));
    state.userStarList = data
  }
}
