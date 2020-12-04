import article from '@/request/api/article'
//在这个文件中定义对状态值的操作，增删改查。
export default {//这里要注意不要在mutations里面进行异步操作
  ADD_BOOK (state, book) {
    state.bookList.push(book);
    return true;
  },

  // 获取城市
  GET_CITY (state, { ...params }) {  // 默认获取省 cityList
    let name = params.name || 'cityList'
    article.getCityList(params.id || 0).then(res => {
      state[name] = res.data
    })
  }
}