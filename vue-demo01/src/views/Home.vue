<template>
  <div class="home">
    <div class="box">
      <template v-for="item in menuList">
        <div :key="item.id">
          <p style="font-size:16px;">
            <router-link :to="`/1.${item.id}`">{{ `1.${item.id}`}}{{item.name}}</router-link>
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data(){
    return{
      menuList:[
        {id:1,name:'Vue三大核心概念(属性、事件、插槽)'},
        {id:2,name:'双向绑定和单向数据流不冲突'},
        {id:3,name:'虚拟Dom'},
        {id:4,name:'如何触发组件的更新'},
        {id:5,name:'合理应用计算属性和侦听器'}
      ]
    }
  }
};
</script>
<style scoped>
  .box{
    width: 50%;
    margin: 0 auto;
    text-align: left;
    font-weight: bold
  }
</style>