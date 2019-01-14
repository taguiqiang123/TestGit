<template>
<div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论{{$store.state.data}} </h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <List />
      <Item />
    </div>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'
import List from './List.vue'
import Item from './Item.vue'
export default {
  name: 'Add',
  computed : {
    ...mapGetters(['getlis'])
  },
  components: {
    List,
    Item
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reply {
  margin-top: 0px;
}

li {
  transition: .5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
