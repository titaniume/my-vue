<template>
 <div>
   <a-tabs>
     <a-tab-pane key="Directives" tab="内置指令">
        <Directives/>
     </a-tab-pane>
     <a-tab-pane key="CustomerDirectives" tab="自定义指令">
        <CustomerDirectives/>
     </a-tab-pane>
   </a-tabs>
 </div>
</template>

<script>
import Directives from "./components/Directives";
import CustomerDirectives from "./components/CustomerDirectives";
export default {
  name:"index",
  components: {
    Directives,
    CustomerDirectives
  },
  data () {
    return {
    }
  },
  mounted () {},
  methods: {},
}
</script>
<style scoped>
</style>