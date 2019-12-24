<template>
  <div>
    {{ fullName }}
    <div>firstName: <a-input v-model="firstName" style="width:30%"/></div>
    <div>lastName: <a-input v-model="lastName"  style="width:30%"/></div>
  </div>
</template>
<script>
export default {
  name:"ComputedVsWatch",
  data: function() {
    return {
      firstName: "jack",
      lastName: "titaniumes"
    };
  },
  computed: {
    //计算属性方式
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },
  watch: {
    //监听器输出
    fullName: function(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    }
  }
};
</script>


