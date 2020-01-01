vue-demo01

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



## 虚拟DOM

![image-20191209221304685](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209213027759.png)

原来我们都是使用jq直接操作dom，系统越来越复杂操作的dom也多 这样操作的事件也错综复杂 这样就引入了vue

![image-20191209221326946](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221326946.png)

使用vue底层将数据映射到dom、数据的变化导致dom的更新、dom的变化也很耗性能

那么单数据变化后怎样减少dom的更新?

![image-20191209221342041](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221342041.png)

虚拟dom的概念被提出。我们的数据不是渲染到真实的dom节点上而是先通过数据和模板生成一个类似dom树的结构（josn对象）这个对象称为虚拟dom 然后通过算法比较老dom和新dom 最终要改变的真实dom，用算法尽可能的复用老dom 减少因为dom更新带来的性能消耗

![image-20191209221401629](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221401629.png)

通常不会跨层级节点移动 同层级比较 减低复杂度

**下面有几种假设的场景**

1. 移动

   ![image-20191209221448363](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221448363.png)

   ![image-20191209221519948](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221519948.png)

   同级节点没有相同的类型

2. 删除新建

![image-20191209221554277](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221554277.png)

同层节点没有相同类型的，C会先删除 然后再B下面新建C,E,F 算法不能达到最优化 （C直接到B下面）

3. 删除新建

   ![image-20191209221625942](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221625942.png)

   删除C ,E ,F 比较第二层发现C不见了 然后再新建G,E,F

4. 更新删除新建（无key）

   ![image-20191209221658033](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221658033.png)

   

![image-20191209221714749](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221714749.png)

算法认为B1改为B2 B2变B1 比较到后面时候 会直接再B2后面新建E,F (E,F如何复用？加key)

5. 移动（有key）

   ![image-20191209221803593](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221803593.png)

   每一个节点都有唯一的标识符 进化成了场景一 ，原来通过类型判断 ，现在通过key判断 是唯一的

6. 插入（有key）

![image-20191209221823821](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191209221823821.png)

有key 后面的就不会替换 而是直接插入B4

**注意:自定义组件若有使用的for选好 然后 :key 使用的是index 只是查询没有什么问题 如果list会动态变化 (删除，添加) 那就会有问题**



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

数组支持响应式更新的方法:push pop shift unshift splice sort reverse

不支持:filter  concat slice

##  合理应用计算属性和侦听器

**计算属性 computed**

- 减少模板中计算逻辑
- 数据缓存
- 依赖固定的数据类型(响应式数据)

**监听`器Watch**

- 更加灵活、通用
- watch 中可以执行任何逻辑、如函数字节流、Ajax异步获取数据、甚至操作DOM

**computed VS watch**

- computed能做的 、watch都能做、反之不行
- 能用computed的尽量用computed

## 生命周期的应用场景和函数式组件

### 生命周期

![image-20191226223724862](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191226223724862.png)



**创建阶段**

![image-20191226223827289](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191226223724862.png)



**更新阶段**

![image-20191226223915094](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191226223915094.png)



**销毁阶段**

![image-20191226224035677](https://github.com/titaniume/my-vue/blob/master/vue-demo01/img/image-20191226224035677.png)

### 函数式组件



- functional:true
- 无状态、无实例、没有this上下文、无生命周期 通常用于

## 指令的本质

### 内置指令

- v-text
- v-html
- v-show
- v-if
- v-else
- v-else-if
- v-for
- v-on
- v-bind
- v-model
- v-slot
- v-pre
- v-cloak
- v-once

**标志位、语法糖**

编译阶段会把template 编译成render函数时候会把这些语法糖编译成js代码 这也就是jsx和render函数不支持内置指令的原因。

### 自定义指令

- bind
- inserted
- update
- componentUpdated
- unbind

生命周期钩子

## 常用高级特性provide/inject

**组件通信**

![image-20191231233118375](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191231233118375.png)

孙子组件或更深层次的组件通信

A 节点和E 节点通信 E

A节点provide 提供数据  E节点inject注入数据 ，E节点通过层及冒泡去A节点取数据



**1.provide就相当于加强版父组件prop**

**2.inject就相当于加强版子组件的props** 

因为以上两者可以在父组件与子组件、孙子组件、曾孙子...组件数据交互，也就是说不仅限于prop的父子组件数据交互，只要在上一层级的声明的provide，那么下一层级无论多深都能够通过inject来访问到provide的数据

缺点:

这么做也是有明显的缺点的，在任意层级都能访问导致数据追踪比较困难，不知道是哪一个层级声明了这个或者不知道哪一层级或若干个层级使用了，因此这个属性通常并不建议使用能用vuex的使用vuex，不能用的多传参几层，但是在做组件库开发时，不对vuex进行依赖，且不知道用户使用环境的情况下可以很好的使用


