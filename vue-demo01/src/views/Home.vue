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
        {id:5,name:'合理应用计算属性和侦听器'},
        {id:6,name:'生命周期的应用场景和函数式组件'},
        {id:7,name:'指令的本质'},
        {id:8,name:'常用高级特性provide/inject'},
        {id:9,name:'如何优雅的获取跨层级组件(拒绝递归)'}
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