<template>
  <div>
    <a-tabs>
      <a-tab-pane key="ChildrenA1" tab="1 移动">
        <ChildrenA1 />
      </a-tab-pane>
      <a-tab-pane key="ChildrenA2" tab="2—删除新建">
        <ChildrenA2 />
      </a-tab-pane>
      <a-tab-pane key="ChildrenA3" tab="3—删除新建">
        <ChildrenA3 />
      </a-tab-pane>
      <a-tab-pane key="ChildrenA4" tab="4-更新删除新建">
        <ChildrenA4 />
      </a-tab-pane>
      <a-tab-pane key="ChildrenA5" tab="5—移动(有key)">
        <ChildrenA5 />
      </a-tab-pane>
      <a-tab-pane key="ChildrenA6" tab="6—更新插入(无key)">
        <ChildrenA6 />
      </a-tab-pane>
      <a-tab-pane key="ChildrenA7" tab="7—插入(有key)">
        <ChildrenA7 />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>

import ChildrenA1 from "./components/ChildrenA1";
import ChildrenA2 from "./components/ChildrenA2";
import ChildrenA3 from "./components/ChildrenA3";
import ChildrenA4 from "./components/ChildrenA4";
import ChildrenA5 from "./components/ChildrenA5";
import ChildrenA6 from "./components/ChildrenA6";
import ChildrenA7 from "./components/ChildrenA7";
export default {
  name: 'index',
  props: {},
  components: {
    ChildrenA1,
    ChildrenA2,
    ChildrenA3,
    ChildrenA4,
    ChildrenA5,
    ChildrenA6,
    ChildrenA7
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
.border,
.border1,
.border2 {
  border: 1px solid #000;
  padding: 10px 0;
  margin: 10px 10px 0;
}
.border1 {
  border-color: #ccc;
}
.border2 {
  border-color: #eee;
}
</style>