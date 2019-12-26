<template>
  <div>
    {{ log("render") }}
    {{ now }}
    <a-button type="primary" @click="start = !start">{{ start ? "停止" : "开始" }}</a-button>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data: function() {
    console.log("data");
    this.moment = moment;
    this.log = window.console.log;
    return {
      now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      start: false
    };
  },
  watch: {
    start() {
      this.startClock();
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    this.startClock();
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    //清空定时器，不清空内存泄漏
    clearInterval(this.clockInterval);
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    startClock() {
      clearInterval(this.clockInterval);
      if (this.start) {
        this.clockInterval = setInterval(() => {
          this.now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        }, 1000);
      }
    }
  }
};
</script>
