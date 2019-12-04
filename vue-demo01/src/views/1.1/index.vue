<template>
    <div>
        <a-tabs defaultActiveKey="1" @change="callback">
          <a-tab-pane tab="属性" key="1">
            <Props 
             name="时光是世间最强大的力量!"
             type="danger"
             :list="list"
             :isVisible="true"
             :on-change="handleChange"
            />
          </a-tab-pane>
          <a-tab-pane tab="事件" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
          <a-tab-pane tab="插槽" key="3">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import Props from "./Props";
export default {
    name:"index",
    components:{
      Props
    },
    data(){
        return{
          list:["aaaa","bbbb","cccc"]
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
      handleChange(e){
        alert(e)
      }
    }
}
</script>