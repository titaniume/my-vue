<template>
  <div>
    <p>
      <a-button type="primary" @click="handleNameChange"
        >change this.name</a-button
      >
    </p>
    <p>
      <a-button type="primary" @click="handleInfoChange"
        >change this.info</a-button
      >
    </p>
    <p>
      <a-button type="primary" @click="handleListChange"
        >change this.list</a-button
      >
    </p>
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
    //this.name = name; 
    return {
      name: "",
      // info: {}, 
      info:  {
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
