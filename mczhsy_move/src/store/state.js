// 状态对象
export default {
    user: localStorage.getItem('_M_User')  == 'undefined'? null : JSON.parse(localStorage.getItem('_M_User')),   //用户资料
    isLogin: localStorage.getItem('_M_LOGIN')? Boolean(parseInt(localStorage.getItem('_M_LOGIN'))) :0 ,   //是否登录
    token: localStorage.getItem('_M_Key')  == 'undefined'? null : JSON.parse(localStorage.getItem('_M_Key')), //token
    userInfo: localStorage.getItem('_M_User_Info') == 'undefined'?null : JSON.parse(localStorage.getItem('_M_User_Info')),  //用户个人信息
    userStarList:localStorage.getItem('_M_Star_List') == 'undefined'?null : JSON.parse(localStorage.getItem('_M_Star_List')),   //收藏夹
}
