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

## 属性、事件、插槽

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

## 如何触发组件的更新

Vue 的数据驱动如下图

![img](https://upload-images.jianshu.io/upload_images/11092615-64b101bdf8b5e77e.png)

数据包含：1、父元素的属性 2、组件自身的状态 3、状态管理器，vuex、Vue.Observable

![img](https://upload-images.jianshu.io/upload_images/11092615-a68238df411616c1.png)

哪些数据做依赖收集，哪些不需要。

Vue实例化的时候，会对Data做一些getter和setter转化（对数据做了中间的代理层，取和设置都会经过代理层，可以在代理层做任何事情）

组件渲染时（也是render）,需要去获取data，用到了就放到watch里面。



1、name不在data里，不会做响应式更新

2、info未定义具体的number属性，虽然在data里面，数据发生了变化，但引用类型的地址未发生变化，所以也不会触发组件更新。

3、模板中并未使用b，所以也不会触发组件的更新

4、this.$forceUpdate()：强制更新的意思 不管数据是否变化

