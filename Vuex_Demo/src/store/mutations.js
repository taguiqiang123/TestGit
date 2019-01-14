/**
 * 同步处理模块。只对数据进行操作
 * */
export default {
  // 添加评论 原ADD模块
  addComment (state,comment) {
    state.lis.unshift(comment);
  },
  deleteData (state,index) {
    state.lis.splice(index.index, 1);
  }
}
