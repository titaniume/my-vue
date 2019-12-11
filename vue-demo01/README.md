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

![image-20191209221304685](https://github.com/titaniume/my-vue/blob/master/vue-demo01/jq.png)

原来我们都是使用jq直接操作dom，系统越来越复杂操作的dom也多 这样操作的事件也错综复杂 这样就引入了vue

![image-20191209221326946](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221326946.png)

使用vue底层将数据映射到dom、数据的变化导致dom的更新、dom的变化也很耗性能

那么单数据变化后怎样减少dom的更新?

![image-20191209221342041](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221342041.png)

虚拟dom的概念被提出。我们的数据不是渲染到真实的dom节点上而是先通过数据和模板生成一个类似dom树的结构（josn对象）这个对象称为虚拟dom 然后通过算法比较老dom和新dom 最终要改变的真实dom，用算法尽可能的复用老dom 减少因为dom更新带来的性能消耗

![image-20191209221401629](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221401629.png)

通常不会跨层级节点移动 同层级比较 减低复杂度

**下面有几种假设的场景**

1. 移动

   ![image-20191209221448363](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221448363.png)

   ![image-20191209221519948](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221519948.png)

   同级节点没有相同的类型

2. 删除新建

![image-20191209221554277](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221554277.png)

同层节点没有相同类型的，C会先删除 然后再B下面新建C,E,F 算法不能达到最优化 （C直接到B下面）

3. 删除新建

   ![image-20191209221625942](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221625942.png)

   删除C ,E ,F 比较第二层发现C不见了 然后再新建G,E,F

4. 更新删除新建（无key）

   ![image-20191209221658033](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221658033.png)

   

![image-20191209221714749](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221714749.png)

算法认为B1改为B2 B2变B1 比较到后面时候 会直接再B2后面新建E,F (E,F如何复用？加key)

5. 移动（有key）

   ![image-20191209221803593](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221803593.png)

   每一个节点都有唯一的标识符 进化成了场景一 ，原来通过类型判断 ，现在通过key判断 是唯一的

6. 插入（有key）

![image-20191209221823821](C:\Users\huangrenfie\AppData\Roaming\Typora\typora-user-images\image-20191209221823821.png)

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
