<template>
         <li class="list-group-item">
            <div class="handle">
              <a href="javascript:;" @click="deleteData(index)">删除</a>
            </div>
            <p class="user"><span >{{data.name}}</span><span>说:</span></p>
            <p class="centence">{{data.content}}</p>
          </li>
</template>

<script>
  import {mapActions} from 'vuex'
export default {
  name: 'For',
  props : {
  	data : Object,
  	index : Number
  },
  methods : {
    ...mapActions(['deleteData'])
  }
}
</script>

<style>
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
