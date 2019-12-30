<template>
  <div>
    <div>
     <h2>v-text</h2>
     <div v-text="'hello vue'">hello hello</div>
    </div>
    <h2>v-html</h2>
    <div v-html="'<span style=color:red;font-weight:bolder>测试v-html</span>'"></div>
    <h2>v-show</h2>
    <div v-show="show">show vue</div>
     <a-button type="primary" @click="show=!show" >change show </a-button>
    <h2>v-if v-else-if v-else</h2>
    <div v-if="number==1">hello one{{number}}</div>
    <div v-else-if="number==2">hello tow {{number}}</div>
    <div v-else>hello other {{number}}</div>
    <h2>v-for v-bind</h2>
    <div v-for="num in [1,2,3,4,5,6,7,8,9]" v-bind:key="num">hello num{{num}}</div>
    <h2>v-on</h2>
    <a-button type="primary" v-on:click="number=number + 1" >numuber++</a-button>
    <h2>v-model</h2>
    <div>
      <a-input v-model="message" style="width:30%"/>
    </div>
    <h2>v-pre</h2>
     <div v-pre>{{ 这里的内容不会被编译 }}</div>
     <h2>v-once</h2>
     <div v-once>{{number}}</div>
  </div>
</template>

<script>
export default {
  name:"Directives",
  data () {
    return {
      show:true,
      number:1,
      message:"今天是2019年12月30日下午14:55分",
    }
  }
}
</script>
<style scoped>
</style>