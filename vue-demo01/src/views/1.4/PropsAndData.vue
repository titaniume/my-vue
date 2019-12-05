<template>
  <div>
    <p>props.name:{{ name }}</p>
    <p>props.info:{{ info }}</p>
    <p>props.list:{{ list }}</p>
    <p>
      <a-button type="danger" @click="handleBChange">change data.b</a-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "PropsAndData",
  props: {
    name: {
      type: String
    },
    info: {
      type: Object
    },
    list: {
      type: Array
    }
  },
  components: {},
  data() {
    return {
      a: "hello",
      b: "world"
    };
  },
  updated() {
    console.log("触发 PropsAndData updated");
  },
  methods: {
    handleBChange() {
      this.b = "B Change" + Math.random();  //模板template中并没有用到b所有并没有更新
      console.log("data.b 发生了变化，但是并没有触发子组件更新", this.b);
    }
  }
};
</script>
<style scoped></style>
