<template>
  <div>
    <p> <a-button type="primary" @click="handleNameChange">change this.name1</a-button> </p> 
     <p><a-button type="primary" @click="handleInfoChange">change this.info</a-button> </p> 
     <p><a-button type="primary" @click="handleListChange">change this.list</a-button> </p> 
    <PropsAndData :name="name" :info="info" :list="list"></PropsAndData>
  </div>
</template>

<script>
import PropsAndData from "./PropsAndData";
export default {
  name: "index",
  props: {},
  components: {
    PropsAndData
  },
  data() {
    //this.name = name;  //name不在data里，不会做响应式更新
    return {
      name:"",
      // info: {}, //、info未定义具体的number属性，虽然在data里面，数据发生了变化，但引用类型的地址未发生变化，所以也不会触发组件更新。
      info:{
         number: undefined
      },
      list: []
    };
  },
  methods: {
    handleNameChange() {
      this.name = "Data Update" + Math.random();
      console.log("this.name 发生了变化，但是并没有触发子组件更新", this.name);
    },
    handleInfoChange() {
      this.info.number = 1;
      // this.$set(this.info,"title","测试");
      console.log("this.info 发生了变化，但是并没有触发子组件更新", this.info);
    },
    handleListChange() {
      this.list.push(1, 2, 4, 5);
      console.log("this.info 发生了变化，但是并没有触发子组件更新", this.info);
    }
  }
};
</script>
<style scoped></style>
