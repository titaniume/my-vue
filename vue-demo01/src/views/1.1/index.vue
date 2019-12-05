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
              :style="{marginTop:'10px'}"
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
              <template v-slot:testSlot2="{value}">
                作用域插槽:{{value}}
              </template>
           </Slot>
            <br/>
            <h2>老语法</h2>
            <Slot>
               <p>默认插槽:default solt</p>
               <p slot="testSlot">具名插槽1</p>
               <p slot="testSlot">具名插槽2</p>
               <p slot="testSlot2" slot-scope="{value}">作用域插槽:{{value}}</p>
            </Slot>
          </a-tab-pane>
          <a-tab-pane tab="大属性" key="4">
            <BigProps
              :name="bigPropsName"
              :on-change="handleBigPropChange"
            />
          </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import Props from "./Props";
import Event from "./Event";
import Slot from "./Slot";
import BigProps from "./BigProps";
export default {
    name:"index",
    components:{
      Props,
      Event,
      Slot,
      BigProps
    },
    data(){
        return{
          type:"success",
          list:["aaaa","bbbb","cccc"],
          name:"",
          bigPropsName:"大属性Name"
        }
    },
    created(){
        console.log("init...........");
    },
    mounted(){

    },
    methods:{
      callback(key) {
        console.log(key);
      },
      handlePropChange(val){
         this.type = val;
      },
      handleEventChange(val){
         //接收子组件传递的值
        this.name = val;
      },
      handleBigPropChange(val){
        this.bigPropsName = val;
      },
    }
}
</script>
<style scoped>
  /* 单独在父组件自定义样式，这样和其他组件互不干扰 */
  .test1{
      color: deepskyblue
  }
  .test2{
    font-size: 14px;
  }
</style>