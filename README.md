## 组件基本用法

### 属性

我们写了一大堆的HTML后发现不少类似重复的地方，我们可以按照拆分的方法，拆分HTML。除了拆分HTML之外，我们还可以拆分针对这段HTM书写的逻辑，甚至是样式。拆分后的HTML，逻辑，样式组合在一起，我们称之为组件。

```html
 <div id="app">
     <ul>
         <li>
             <input type="checkbox">
             <span>跑步</span>
             <button>删除</button>
         </li>
     </ul>
     <ul>
         <li>
             <input type="checkbox">
             <span>引体向上</span>
             <button>删除</button>
         </li>
     </ul>
     <ul>
         <li>
             <input type="checkbox">
             <span>登山</span>
             <button>删除</button>
         </li>
     </ul>
</div>
```

上面代码可以看大li标签的内容越来也多，似乎可以把它独立出来，在Vue中通过以下代码就可以将这部分代码独立出来.

通过Vue.component定义(注册)一个组件，起名为todo-item,组件的HTML写在template上。

```vue
Vue.component('todo-item',{
        template:`
        <li>
            <input type="checkbox">
            <span>跑步</span>
            <button>删除</button>
        </li>
        `
    });
```

然后就可以看到下的方式来使用这个组件了

```html
 <div id="app">
     <ul>
         <todo-item></todo-item>
     	 <todo-item></todo-item>
     	 <todo-item></todo-item>
     </ul>
 </div>
```

当然前提是你要先new Vue一个实例，并添加挂载点

```javascript
 new Vue({
	//提供一个挂载点，我们就可以在里面使用 todo-item了
	el:'#app',
});
```

这样是清爽多了，但是变成了三个跑步，我们还缺少“引体向上”、“登山” 怎么办？这就要用Vue的属性了。

我们在调用方法时候，可以传递不同的参数，方法也可以接收参数，执行不同的逻辑加载组件也同样可以传递不同的参数(属性)、组件也可以接收参数(属性)	来显示不同的内容

```vue
	Vue.component('todo-item',{
                //声明能接受的参数(属性)
                props:['hobby'],
                //{{hobby}} 使用传递过过来的hobby
                template:`
                    <li>
                        <input type="checkbox">
                        <span>{{hobby}}</span>
                        <button>删除</button>
                    </li>
                `
         });

     <div id="app">
        <todo-item hobby="跑步"></todo-item>
         <todo-item hobby="引体向上"></todo-item>
         <todo-item hobby="登山"></todo-item>
     </div>
```

我们在精简一下

```vue
  <div id="app">
     <ul>
           <todo-item v-for="item in hobbyList" :hobby="item"></todo-item>
     </ul>
 </div>

 new Vue({
	el:'#app',
	data(){
	return{
		hobbyList:['跑步','引体向上','登山']
		}
	}
});
```

### 事件 

我现在已经学完了Vue属性，想要从hobbyList里面把它删除，好像并不容易。这时候我们需要给button绑定一个事件，当然Vue提供给我们一个简单的方式进行绑定事件，用@xxx就可以进行事件绑定了(这里的xxx指的是任一字符串)，根据你的实际需要来命名就行

```vue
Vue.component('todo-item',{
    //声明能接受的参数(属性)
    props:['hobby'],
    //{{hobby}} 使用传递过过来的hobby
    template:`
    <li>
        <input type="checkbox">
        <span>{{hobby}}</span>
        <button @click="handleClick">删除</button>
    </li>
    `,
    methods:{
        handleClick(){
		this.$emit('');
        }
    }
});
```

然后我们把点击事件告诉我们的上层(父组件)，Vue同样给我们提供了一个API:this.$emit('XXX',.....),我们既然是做删除操作，那就叫delete好了，我们还可以传递更多参数，如this.hobby;

```javascript
 handleClick(){
     this.$emit('delete',this.hobby);
 }
```

​	上层组件还缺少一个用来接收delete的地方，我们可以通过@delete 的方式来绑定一个用来接收delete事件的方法：

```vue
  <todo-item v-for="item in hobbyList" :hobby="item" @delete="handleClick"></todo-item>

```

最后我们只需要在methods字段定义一个handleDelete方法，改变list数组就完成了我们的删除

```vue
  new Vue({
    //提供一个挂载点，我们就可以在里面使用 todo-item了
    el:'#app',
    data(){
        return{
         	hobbyList:['跑步','引体向上','登山']
        }
    },methods:{
        handleDelete(item){
            const index = this.hobbyList.findIndex(a=>a===item);
            //console.log(index)
            this.hobbyList.splice(index,1);
        }
    }
});

```

### 插槽

我们想在bobbyList中的跑步前面价格图标icon，我们怎么办？还好Vue早就替我们想到了，我们不能在通过属性传递这些带有标签的内容，而是通过一种名叫插槽的东西进行传递

```vue
<div id="app">
     <ul>
           <todo-item v-for="item in hobbyList" :hobby="item" @delete="handleDelete">
          		<span>我是Icon</span>
         </todo-item>
     </ul>
 </div>

```

当然我们不能再使用双括号来解析，我们需要使用<slot></slot>这种写法来解析:

```vue
 template:`
    <li>
        <input type="checkbox">
        <span>{{hobby}}</span>
        <slot></slot>
        <button @click="handleClick">删除</button>
    </li>
    `,

```

这种我们称之为默认插槽，我们现在想更进一步，添加连个图标，一个在文字前面，一个在文字后面，没问题；

```vue
<todo-item v-for="item in hobbyList" :hobby="item" @delete="handleDelete">
      <span>我是Icon默认插槽</span>
      <span slot="prefixIcon">我是前缀Icon</span>
      <span slot="suffixIcon">我是后缀Icon</span>
</todo-item>


```

同样在template中需要更改:

```vue
template:`
    <li>
        <input type="checkbox">
        <slot name="prefixIcon"></slot>
        <span>{{hobby}}</span>
        <slot name="suffixIcon"></slot>
        <slot></slot>
        <button @click="handleClick">删除</button>
    </li>
    `,

```

这便是具名插槽。

如果想让功能更加丰富，比如想根据input checkbox的是否选择来改变图标的颜色改怎么做?

第一步，记录我们input的选中状态，我们使用Vue的v-model进行input的双向绑定:

```vue
    Vue.component('todo-item',{
                //声明能接受的参数(属性)
                props:['hobby'],
                //{{hobby}} 使用传递过过来的hobby
                data(){
                    return{
                        checked:false //默认不选中
                    }
                },
                template:`
                    <li>
                        <input type="checkbox"  v-model="checked">
                        <slot name="prefixIcon"></slot>
                        <span>{{hobby}}</span>
                        <slot name="suffixIcon"></slot>
                        <slot></slot>
                        <button @click="handleClick">删除</button>
                    </li>
                `,
                methods:{
                    handleClick(){
                        this.$emit('delete',this.hobby);
                    }
                }
            });

```

状态有了，现在需要把这个状态传递给上层:

```vue
    <slot name="prefixIcon" v-bind="{checked}"></slot>

```

接收到状态后并根据状态提供不同颜色的图标:

```vue
  <span slot="prefixIcon" slot-scope="props" :style="{color:props.checked ? 'red': 'blue'}">我是前缀Icon</span>

```

这就是我们的作用域插槽。

## 理解单文件组件

### 创建Vue Cli脚手架

- 安装

  ```
  npm install -g @vue/cli
  
  ```

- 创建一个项目

  ```
  vue create hello-world
  
  ```

  