import article from '@/request/api/article'
//在这个文件中定义对状态值的操作，增删改查。
export default {//这里要注意不要在mutations里面进行异步操作
  ADD_BOOK (state, book) {
    state.bookList.push(book);
    return true;
  },

  SET_UPLOAD_URL (state) {
    article.getUploadUrl().then(res => {
      state.getUploadUrl = res.data.upload_url
    })
  },

  // 获取城市
  GET_CITY (state, { ...params }) {  // 默认获取省 cityList
    let name = params.name || 'cityList'
    article.getCityList(params.id || 0).then(res => {
      state[name] = res.data
    })
  },

  CHANGE_TYPE (state) {
    var agent = navigator.userAgent.toLowerCase();
    var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
      state.computerType = 'windows32'
    }
    if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
      state.computerType = 'windows64'
    }
    if (isMac) {
      state.computerType = 'mac'
    }
  },

  SET_TOKEN (state, token) {
    state.token = token
  },

  //  获取 文件地址接口
  GET_UPLOAD_TOKEN (state, uptoken) {
    article.getUploadToken().then(res => {
      state.upToken = res.data.token.token
    })
  },

  // 上传地址
  GET_UPLOAD_URL (state, uptoken) {
    article.getUploadUrl().then(res => {
      state.getUploadUrl = res.data.upload_url
    })
  },

  GET_CATEGORY_LIST (state, token) {
    article.getCategoryList({
      token: JSON.parse(state.token).token
    }).then(res => {
      state.getCategoryList = res.data
    })
  },

  GET_SUB_LIST (state, uid) {
    article.getSubList({
      uid: uid,
      token: JSON.parse(state.token).token
    }).then(res => {
      state.getSubList = res.data
    })
  },

  // this.$message({
  //   showClose: true,
  //   message: '恭喜你，这是一条成功消息',
  //   type: 'success'
  // });
}