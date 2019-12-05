# vue-demo01

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 属性

**props**

子组件通过props 接收父组件的值

props类型

- String
- Array
- Boolean
- Function

定义属性

~~~javascript
list: {
     type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
 },
~~~

属性里面也可以做校验

~~~javascript
type:{
      validator:function(value){
       // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].includes(value);
      }
  },
~~~



### 事件

子组件发送事件给父组件，父组件可以接收

子组件

~~~javascript
 this.$emit('changeVaue', e.target.value);
~~~

父组件

~~~javascript
  <Event :name="name" @changeVaue="handleEventChange"></Event>

   handleEventChange(val){
     //接收子组件传递的值
     this.name = val;
 }
~~~

### 插槽

**插槽是为了将父组件中的子组件模板数据正常显示**



>具名插槽其实就是在父组件中添加一个 `slot='自定义名字'` 的属性，
> 然后在子组件中的 `` 里面添加 `name='自定义名字'` 即可
> 如果父组件中有一部分没有添加 `slot` 属性，则此处就是`默认的插槽`，在子组件中的 `` 直接就是使用的父组件的默认插槽部分

子组件

~~~javascript
    <slot/>
    <slot name="testSlot"/>
~~~

父组件

~~~javascript
<p>默认插槽:default solt</p>
<template v-slot:testSlot>
    <p>具名插槽1</p>
    <p>具名插槽2</p>
</template>
~~~





>
>
>父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。
> 不过，作用域插槽就是父组件在调用子组件的时候给子组件传了一个插槽，这个插槽为作用域插槽，该插槽必须放在template标签里面，同时声明从子组件接收的数据放在一个自定义属性内，并定义该数据的渲染方式

子组件

~~~javascript
<slot name="testSlot2" v-bind="{value}"/>
    
  data () {
    return {
      value:"测试值"
    }
  }
~~~

父组件

~~~javascript
  <template v-slot:testSlot2="{value}">
  	作用域插槽:{{value}}
  </template>
~~~

