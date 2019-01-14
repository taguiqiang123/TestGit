<template>
      <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 v-show="getLis.length === 0">暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
      		<For v-for="(comment, index) in getLis" :key="index" :data="comment" :index="index"/>
        </ul>
      </div>
</template>

<script>
import For from './For.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'Item',
  // 声明接受属性 ：这个属性就会成为组件对象的属性
  computed : {
    ...mapGetters(['getLis'])
  },
  components: {
    For
  }
}
</script>

<style>
</style>
