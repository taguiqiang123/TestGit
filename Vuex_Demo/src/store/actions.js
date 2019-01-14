/**
 * 异步处理事件模块。action
 * */
export default {
  // 添加评论 原ADD模块
  addComment ({commit}, comment) {
    console.log(comment);
    commit('addComment', comment);
  },
  deleteData ({commit,state}, index) {
    console.log(index);
    commit('deleteData', {index});
  }
}
