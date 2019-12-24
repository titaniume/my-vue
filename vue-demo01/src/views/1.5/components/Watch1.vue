<template>
 <div>
    {{ fullName }}
    <div>firstName: <a-input v-model="firstName" style="width:30%"/></div>
    <div>lastName: <a-input v-model="lastName"  style="width:30%"/></div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
      firstName: "jack",
      lastName: "titaniumes",
      fullName:"jack titaniumes"
    };
  },
  computed: {},
  watch: {
    //监听firstName、lastName
    firstName(val){
      this.fullName = val+"  "+this.lastName;
    },

    lastName(val){
      this.l = this.firstName+"  "+val;
    }
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
</style>