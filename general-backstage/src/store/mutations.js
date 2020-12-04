//在这个文件中定义对状态值的操作，增删改查。
export default {//这里要注意不要在mutations里面进行异步操作
  ADD_BOOK (state, book) {
    state.bookList.push(book);
    return true;
  },
  DELETE_BOOK (state, id) {

  }
}