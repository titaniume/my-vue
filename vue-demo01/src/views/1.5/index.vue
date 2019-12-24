<template>
  <div>
    <a-tabs>
      <a-tab-pane key="Computed" tab="计算属性">
        <Computed />
      </a-tab-pane>
      <a-tab-pane key="Watch" tab="侦听器">
        <Watch />
      </a-tab-pane>
      <a-tab-pane key="vs" tab="计算属性 vs 侦听器">
        <ComputedVsWatch />
        <br />
        <Watch1/>
      </a-tab-pane>
      <a-tab-pane key="Watch1_pro" tab="防抖版">
        <WatchPro />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Computed from "./components/Computed";
import ComputedVsWatch from "./components/ComputedVsWatch";
import Watch from "./components/Watch";
import Watch1 from "./components/Watch1";
import WatchPro from "./components/WatchPro";
export default {
  components: {
    Computed,
    ComputedVsWatch,
    Watch,
    Watch1,
    WatchPro
  }
};
</script>
