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
      clearTimeout(this.firstTimeout);
      this.firstTimeout = setTimeout(()=>{
          this.fullName = val+"  "+this.lastName;
      },500);  
    },
    lastName(val){
      clearTimeout(this.lastTimeout);
      this.lastTimeout= setTimeout(() =>{
          this.fullName = this.firstName+"  "+val;
      },500);
    }
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
</style>