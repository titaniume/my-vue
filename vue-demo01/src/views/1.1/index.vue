<template>
  <div>
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="属性" key="1">
        <Props
          name="时光是世间最强大的力量!"
          :type="type"
          :list="list"
          :isVisible="true"
          :on-change="handlePropChange"
          title="属性测试"
          class="test1"
          :class="['test2']"
          :style="{ marginTop: '10px' }"
          style="margin-left:10px"
        />
      </a-tab-pane>
      <a-tab-pane tab="事件" key="2" forceRender>
        <Event :name="name" @changeVaue="handleEventChange"></Event>
      </a-tab-pane>
      <a-tab-pane tab="插槽" key="3">
        <Slot>
          <h2>2.6 新语法</h2>
          <p>默认插槽:default solt</p>
          <template v-slot:testSlot>
            <p>具名插槽1</p>
            <p>具名插槽2</p>
          </template>
          <!--作用域插槽就可以通过子组件绑定数据传递给父组件。 -->
          <template v-slot:testSlot2="{ value }">
            作用域插槽:{{ value }}
          </template>
        </Slot>
        <br />
        <h2>老语法</h2>
        <Slot>
          <p>默认插槽:default solt</p>
          <p slot="testSlot">具名插槽1</p>
          <p slot="testSlot">具名插槽2</p>
          <p slot="testSlot2" slot-scope="{ value }">作用域插槽:{{ value }}</p>
        </Slot>
      </a-tab-pane>
      <a-tab-pane tab="大属性" key="4">
        <BigProps :name="bigPropsName" :on-change="handleBigPropChange" />
      </a-tab-pane>
      <!-- 根据用户身份进行对应模块显示  会员(会员)  非会员(UserInfo)-->
      <a-tab-pane key="5" tab="会员中心显示方案一">
          <div>
            <a-button type="primary" @click="isMember =!isMember">{{isMember ?"普通用户":"会员专区"}}</a-button>
            <UserInfo v-if="!isMember"/>
            <MemberInfo v-else/>
          </div>
      </a-tab-pane>
      <!-- Vue有提供一个内置组件 component ，渲染一个“元组件”为动态组件。根据 is 的值，来决定哪个组件被渲染 -->
      <a-tab-pane key="6" tab="会员中心显示方案二">
        <div>
          <a-button type="primary" @click="isMember =!isMember">{{isMember ?"普通用户":"会员专区"}}</a-button>
          <component :is="userComponentName" title="component好用啊"></component>
        </div>
     </a-tab-pane>
     <!-- 
       现在，我们通过动态import的形式导入了子组件，配合computed按条件渲染对应的子组件
       当我们改变isMember这个变量就可以实现动态切换组件了。这样做的好处在于，
       当我们使用动态导入的时候，webpack会将与导入函数匹配的每个文件单独创建一个chunk，
       也就是我们常说的分包加载，而不会一次性加载全部组件
      -->
     <a-tab-pane key="7" tab="会员中心显示方案三">
        <div>
           <a-button type="primary" @click="isMember =!isMember">{{isMember ?"普通用户":"会员专区"}}</a-button>
             <component :is="userComponentImstance" title="component就是好用哟"/>
        </div>
     </a-tab-pane>
     <!-- 
       进入不同的组件 Seckill秒杀、Group团购、Limit限购、Bargain砍价 
      -->
     <a-tab-pane key="8" tab="商城首页动态加载模块">
       <h2>假设这是一个商城首页</h2>
       <a-button type="primary" @click="loadRand" >随机加载模块</a-button>
       <component :is="item.imstance" v-for="(item ,i) in componentImstances" :info="item" :key="i" :modelInfo="item"/>
     </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Props from "./Props";
import Event from "./Event";
import Slot from "./Slot";
import BigProps from "./BigProps";
import MemberInfo from "./MemberInfo";
import UserInfo from './UserInfo';
export default {
  name: "index",
  components: {
    Props,
    Event,
    Slot,
    BigProps,
    MemberInfo,
    UserInfo
  },
  data() {
    return {
      type: "success",
      list: ["aaaa", "bbbb", "cccc"],
      name: "",
      bigPropsName: "大属性Name",
      isMember:false,
      moduleList:[
         {
          type: "Bargain",
          title: "砍价",
          startTime: "2019-12-01",
          endTime: "2019-01-01"
        },
        {
          type: "Seckill",
          title: "秒杀",
          startTime: "2019-12-05",
          endTime: "2019-01-01"
        },
        {
          type: "Limit",
          title: "限购",
          startTime: "2019-12-07",
          endTime: "2019-01-01"
        },
        {
          type: "Group",
          title: "团购",
          startTime: "2019-12-11",
          endTime: "2019-01-01"
        }
      ]
    };
  },
  created() {
    console.log("init...........");
  },
  computed:{
    userComponentName(){
      let { isMember } = this;
      return isMember ? "MemberInfo" :"UserInfo";
    },
     userComponentImstance() {
      let { isMember } = this;
      let pathName = isMember ? "MemberInfo" : "UserInfo";
      //通过import动态导入组件 配合webpack实现组件分离
      return () => import(`/${pathName}`);
    },
     componentImstances() {
      let { moduleList } = this;
      return moduleList.map(item => {
        item.imstance = () => {
          return new Promise((resove, reject) => {
            let imstance = import(`../1.1/components/${item.type}`);
            imstance.then(res => {
              resove(res);
            });
            imstance.catch(e => {
              resove(import("../1.1/components/Error"));
            });
          });
        };
        return item;
      });
    }
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    handlePropChange(val) {
      this.type = val;
    },
    handleEventChange(val) {
      //接收子组件传递的值
      this.name = val;
    },
    handleBigPropChange(val) {
      this.bigPropsName = val;
    },
    loadRand(){
      let { moduleList } = this;
      let resultArr = [];
      while(moduleList.length > 0){
        var index = Math.floor(Math.random() * moduleList.length);
        resultArr.push(moduleList[index]);
        moduleList.splice(index, 1);
      }
      this.moduleList = resultArr;
    }
  }
};
</script>
<style scoped>
/* 单独在父组件自定义样式，这样和其他组件互不干扰 */
.test1 {
  color: deepskyblue;
}
.test2 {
  font-size: 14px;
}
</style>
