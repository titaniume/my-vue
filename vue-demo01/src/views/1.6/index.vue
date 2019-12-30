<template>
  <div>
    <a-tabs>
      <a-tab-pane key="clock" tab="时钟">
           <a-button type="primary" @click="destroyClock = !destroyClock"> {{ destroyClock ? "加载时钟" : "销毁时钟" }}</a-button>
        <Clock v-if="!destroyClock" />
      </a-tab-pane>
      <a-tab-pane key="Functional" tab="函数式组件">
        <Functional :name="name" />
        <TempVar
          :var1="`hello ${name}`"
          :var2="destroyClock ? 'hello vue' : 'hello world'"
        >
          <template v-slot="{ var1, var2 }">
            {{ var1 }}
            {{ var2 }}
          </template>
        </TempVar>
      </a-tab-pane>
      <a-tab-pane key="Spike" tab="秒杀组件" >
        <Spike :start-time="startTime" :end-time="endTime"></Spike>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import moment from "moment";
import Clock from "./components/Clock";
import Functional from "./components/Functional"
import TempVar  from "./components/TempVar";
import Spike from "./components/Spike";
export default {
  name: 'index',
  components: {
    Clock,
    Functional,
    TempVar,
    Spike
  },
  data() {
    return {
       destroyClock: false,
        name: "vue",
        startTime: moment("2019-12-30 11:41:00"),
        endTime: moment("2019-12-30 11:43:00")
    };
  },
};
</script>
<style lang='scss' scoped>
</style>