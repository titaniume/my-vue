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



##  双向绑定和单项数据流不冲突

你可以用 `v-model` 指令在表单 ``、`` 及 `` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

> `v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 `data` 选项中声明初始值。

`v-model` 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

![image-20191207103709085](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191207103709085.png)

- text 和 textarea 元素使用 `value` 属性和 `input` 事件；
- checkbox 和 radio 使用 `checked` 属性和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。

> 对于需要使用[输入法](https://zh.wikipedia.org/wiki/输入法) (如中文、日文、韩文等) 的语言，你会发现 `v-model` 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 `input` 事件。

**vue的双向绑定本质还是单项数据流 v-model只是一种简写形式，目的是为了写更少的代码完成同样的功能**



## 虚拟DOM

![image-20191209213027759](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209213027759.png)

原来我们都是使用jq直接操作dom，系统越来越复杂操作的dom也多 这样操作的事件也错综复杂 这样就引入了vue

![image-20191209213103576](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209213103576.png)



使用vue底层将数据映射到dom、数据的变化导致dom的更新、dom的变化也很耗性能

那么单数据变化后怎样减少dom的更新? 

![image-20191209213737270](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209213737270.png)

虚拟dom的概念被提出。我们的数据不是渲染到真实的dom节点上而是先通过数据和模板生成一个类似dom树的结构（josn对象）这个对象称为虚拟dom 然后通过算法比较老dom和新dom 最终要改变的真实dom，用算法尽可能的复用老dom 减少因为dom更新带来的性能消耗

![image-20191209214323460](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209214323460.png)

同层级比较 减低复杂度

**下面有几种假设的场景**

1. 移动

   ​	![image-20191209215050875](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209215050875.png)

   ![image-20191209214826041](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209214835629.png)

   同级节点没有相同的类型

2.  删除新建

   **![image-20191209215119894](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209215119894.png)**

   同层节点没有相同类型的，C会先删除 然后再B下面新建C,E,F  算法不能达到最优化 （C直接到B下面）

3. 删除新建

   ![image-20191209215320903](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209215320903.png)

   删除C ,E ,F 比较第二层发现C不见了 然后再新建G,E,F

4. 更新删除新建（无key）

   ![image-20191209215520526](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209215520526.png)

   ​		

![image-20191209215616833](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209215616833.png)

算法认为B1改为B2  B2变B1  比较到后面时候 会直接再B2后面新建E,F (E,F如何复用？加key)

5. 移动（有key）

   ![image-20191209215926974](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209215926974.png)

   每一个节点都有唯一的标识符 进化成了场景一 ，原来通过类型判断 ，现在通过key判断 是唯一的

6. 插入（有key）



![image-20191209220132485](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209220132485.png)



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