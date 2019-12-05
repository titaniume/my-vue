<template>
  <div>
    <p>name:{{ name || "****" }}</p>
    <input :value="name" @change="handleChange" />
  </div>
</template>

<script>
export default {
  nmme: "Event",
  props: {
    name: {
      type: String
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    handleChange(e) {
      //input 里面的值发生改变就触发这个方法
      //向父组件发送自定义事件 changeVaue 参数是输入的值
      this.$emit("changeVaue", e.target.value);
    }
  }
};
</script>
<style scoped></style>
