# VUE

**vue2 文档链接：**[vue2](https://v2.cn.vuejs.org/v2/api/)

## 插值语法

**用于解析标签体内容**

```
{{ }}
```

- `{{xxx}},xxx`是 js 表达式，且可以直接读取到 data 中的所有属性

## 指令语法

**用于解析标签（包括：标签属性、标签体内容、绑定事件等）**

#### v-bind

**绑定数据**

```
<div v-bind:id=''></div>
<div :id=''></div>
```

- **单向绑定，数据只能从 data 流向页面**
- **`v-bind:`**可以缩写为** `:`**

#### v-model

**绑定数据**

```
<input type='text' v-model:id=''>
<input type='text' v-model=''>
```

- **双向绑定，数据不仅能从 data 流向页面还能从页面流向 data**
- **`v-model:value`**可以简写为** `v-model`**，因为 v-model 默认收集的就是 value 值
- **三个修饰符：**
  - `lazy`：失去焦点再收集数据
  - `number`：输入字符串转为有效的数字
  - `trim`：输入首尾空格过滤

> - `<input type="text">`，则 v-model 收集的是 value 值，用户输入的就是 value 值
> - `<input type="radio">`，则 v-model 收集的是 value 值，且要给标签配置 value 值
> - `<input type="checkbox">`
>   - **没有配置 input 的 value 属性，那么收集的就是 checked（勾选 or 未勾选，是布尔值）**
>   - **配置 input 的 value 属性：**
>     - **v-model 的初始值是非数组，那么收集的就是 checked（勾选 or 未勾选，是布尔值）**
>     - **v-model 的初始值是数组，那么收集的就是 value 组成的数组**

#### v-on

**绑定事件监听器**

```
<button v-on:click=''></button>
<button @click=''></button>
```

- **`v-on:`**可以简写为** `@`**

#### v-show

**条件渲染**

```
<div v-show="true"></div>
<div v-show="1 == 1"></div>
```

- **根据表达式之真假值，切换元素的 **`display` CSS
- **不展示的 DOM 元素未被移除，仅仅是将样式隐藏**

#### v-if

**条件渲染**

```
<div v-if="true"></div>
<div v-if="1 == 1"></div>
```

- **根据表达式的值的 **[truthiness](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建
- **不展示的 DOM 元素直接被移除**
- **可以跟** `<template>`结合使用，将提出它的内容作为条件块

#### v-else

**条件渲染**

```
<div v-if="true"></div>
<div v-else></div>
```

- **前一兄弟元素必须有 **`v-if` 或 `v-else-if`

#### v-else-if

**条件渲染**

```
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

- **前一兄弟元素必须有 **`v-if` 或 `v-else-if`

#### v-for

**列表渲染**

```
<div v-for="item in items" :key="item.id"></div>
```

- **用于展示列表数据**
- **可遍历：数组、对象、字符串、指定次数**
- `key`是虚拟 DOM 对象的标记，当数据发生变化时，Vue 会根据新数据生成新的虚拟 DOM，随后 Vue 进行新虚拟 DOM 与旧虚拟 DOM 的差异比较

#### v-text

**渲染文本**

```
<div v-text=''></div>
```

- **向其所在的节点中渲染文本内容**
- **与插值语法的区别，**`v-text`会替换掉节点当中的内容，`{{}}`则不会

#### v-html

```
<div v-html=''></div>
```

**渲染 html 结构**

- `v-html`会替换掉节点中所有的内容，`{{xx}}`则不会
- `v-html`可以识别 html 结构

> - **在网站上动态渲染任意 HTML 是非常危险的，容易导致 KSS 攻击**
> - **一定要在可信的内容上使用** `v-html`，永远不要用在用户提交的内容上

#### v-cloak

```
<div v-cloak></div>
```

- **本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉** `v-cloak`属性
- **使用 css 的** `display:none`配合 `v-cloak`可以解决网速慢时页面展示出现 `{{xxx}}`的问题

#### v-once

```
<div v-once></div>
```

- `v-once`所在节点在初始动态渲染后，就视为静态内容了
- **以后数据的改变不会引起** `v-once`所在结构的更新，可以用于优化性能

#### v-pre

```
<div v-pre></div>
```

- **跳过其所在节点的编译过程**
- **可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译**

#### 自定义指令

```
<div v-new=""></div>
```

```
// 局部指令
new Vue({
    directives:{
        new(element,binding){
            
        }
    }
})
new Vue({
    directives:{
        new:{
            // 指令与元素成功绑定时调用
            bind(elemnet,binding){
                
            },
            // 指令所在元素被插入页面时调用
            inserted(element,binding){
                
},
            // 指令所在模板结构被重新解析时调用
            update(element,binding){
                
            }        
        }
    }
})
// 全局指令
Vue.directive('new',function(element,binding){
    
})
Vue.directive('new',{
    bind(elemnet,binding){
                
            },
            // 指令所在元素被插入页面时调用
            inserted(element,binding){
                
},
            // 指令所在模板结构被重新解析时调用
            update(element,binding){
                
            }      
})
```

- **指令定义时不加** `v-`，但使用时要加 `v-`
- **指令名如果是多个单词，要使用 keabab-case 命名方式，不要用 camelCase 命名**

## el 与 data 的写法

### el

```
const v= new Vue({ //第一种
    el: ''
})

const v= new Vue({ //第二种
})
v.$mount('')
```

### data

```
new Vue({  //第一种
    el: '',
    data: {
        name: ''
    }
})

new Vue({  //第二种
    el; '',
    data()
})
```

## 事件

### 事件修饰符

| **属性**    | **描述**                                             |
| ----------- | ---------------------------------------------------- |
| **prevent** | **阻止默认事件**                                     |
| **stop**    | **阻止事件冒泡**                                     |
| **once**    | **事件只触发一次**                                   |
| **capture** | **使用事件的捕获模式**                               |
| **self**    | **只有 event.target 是当前操作的元素时才触发事件**   |
| **passive** | **事件的默认行为立即执行，无需等待事件回调执行完毕** |

### 键盘事件

- **Vue 中常用的案件别名**

| **键名**   | **描述**                         |
| ---------- | -------------------------------- |
| **enter**  | **回车**                         |
| **delete** | **删除（捕获“删除”和“退格”键）** |
| **esc**    | **退出**                         |
| **space**  | **空格**                         |
| **tab**    | **换行**                         |
| **up**     | **上**                           |
| **down**   | **下**                           |
| **left**   | **左**                           |
| **right**  | **右**                           |

- **Vue 未提供别名的按键，可以使用按键原始的 key 值去绑定，但注意要转为 kebab-case（短横线命名）**
  ```
  @keyup.caps-lock=''  // 例
  ```
- **系统修饰键：**`crtl alt shift meta(windows键)`

** 配合 keyup 使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发**

\*\* \*\* 配合 keydown 使用：正常触发事件

- **也可以使用 keyCode 去指定具体的按键（不推荐）**

```
@keyup.13='' // 例
```

- `Vue.config.keyCodes.自定义键名 = 键码` 可以去定制按键别名

```
Vue.config.keyCodes.huiche = 13;
```

## computed

**计算属性**

```
const vm = new Vue({
    el: '',
    data: {
        
    },
    computed: {
        fullName:{
        get(){
    return ;
},
            set(){
                
            }
        }          
    }
})
```

- **要用的属性不存在，要通过已有属性计算得来**

> **简写**
>
> ```
> computed: {
>  fullName(){
>      return ;
>  }
> }
> ```
>
> - **前提是只是用 get 方法时才能简写**

## watch

**监视属性**

```
const vm = new Vue({
    el: '',
    data: {
        isTrue: ''
    },
    watch: {
        isTrue: {
            immediate:true, // immediate为true，初始化时handler会调用
            handler(newValue,oldValue){ //newValue记录改变后的值，oldValue记录改变前的值
                
            }
        }
    }
})
```

> **另一种写法**
>
> ```
> vm.$watch('isTrue',{
>  immediate:ture,
>  handler(newValue,oldValue){
>
>  }
> })
> ```
>
> **简写**
>
> ```
> const vm = new Vue({
>  el: '',
>  data: {
>      isTrue: ''
>  },
>  watch: {
>      isTrue(newValue,oldValue){
>
>      }
>  }
> })
> ```
>
> **另一种写法简写**
>
> ```
> vm.$watch('isTrue',function(newValue,oldValue){
>
> })
> ```

### 深度监视

- **Vue 自身可以检测对象内部值的改变**
- **Vue 中的 watch 默认不检测对象内部值的改变（一层）**
- **配置** `deep:true`可以检测对象内部值的改变（多层）

## 绑定样式

### class

- **字符串写法（适用于样式的类名不确定，需要动态指定）**

```
.normal {
    
}
```

```
<div :class="mood"></div>
```

```
const vm = new Vue({
    el: '',
    data: {
        mood: 'normal'
    }
})
```

- **数组写法（适用于要绑定的样式个数不确定、名字也不确定）**

```
.normal {
    
}

.happy {
    
}

.sad {
    
}
```

```
<div :class="mood"></div>
```

```
const vm = new Vue({
    el: '',
    data: {
        arr:['happy','sad','normal']
    }
})
```

- **对象写法（适用于要绑定的样式个数确定、名字也确定，但是动态决定用不用）**

```
.normal {
    
}

.happy {
    
}

.sad {
    
}
```

```
<div :class="classObj"></div>
```

```
const vm = new Vue({
    el: '',
    data: {
        classObj:{
            normal:true, //启用
            happy:flase, //停用
            sad:flase
        }
    }
})
```

### style

- **对象写法**

```
<div :style="styleArr"></div>
```

```
const vm = new Vue({
    el: '',
    data: {
        styleObj:{
            fontsize: '0px',
            color: ''
        }
    }
})
```

- **数组写法**

```
<div :class="mood"></div>
```

```
const vm = new Vue({
    el: '',
    data: {
        styleArr:[{
            fontsize: '0px'
        },
        {
            color: ''
        }]
    },
})
```

## 监测数据

1. **Vue 会监视** `data`中所有层次的数据
2. **对象中的数据**
   - **通过 setter 实现监视，且要在** `new Vue`时就传入要监测的数据
   - **对象中后追加的属性，Vue 默认不做响应式处理**
   - **如需给后添加的属性做响应式，使用** `set()`方法
     ```
     Vue.set(target, propertyName/index, value)
     vm.$set(target, propertyName/index, value)
     ```
3. **数组中的数据**
   - **通过包裹数组更新元素的方法实现，本质就是做了两件事**
     1. **调用原生对应的方法对数组进行更新**
        `push()`、`pop()`、`shift()`、`unshift()`、`splice()`、`sort()`、`reverse()`
     2. **重新解析模板，进而更新页面**
4. `Vue.set()`和 `vm.$set()`不能给 vm 或 vm 的根数据对象添加属性

## 过滤器

```
// 局部过滤器
new Vue({
    el:'',
    data:'',
    filters:{
        format(value){
            
        }
    }
})
// 全局过滤器
Vue.filter('format',function(value){})
```

- **使用** `|`过滤：`{{ xxx | 过滤器名 }}` 或 `v-bind:属性 = " xxx | 过滤器名 "`
- **过滤器也可以接收额外参数、多个过滤器也可以串联**
- **并没有改变原本的数据，是产生新的对应的数据**

## 生命周期

![生命周期图例](https://v2.cn.vuejs.org/images/lifecycle.png)

`beforeCreate`

- **此时\*\***无法\*\*通过 vm 访问到 data 中的数据、methods 中配置的方法

`created`

- **此时\*\***可以\*\*通过 vm 访问到 data 中的数据、methods 中配置的方法

`beforeMount`

- **页面呈现的是\*\***未经 Vue 编译\*\*的 DOM 结构
- **所有对 DOM 的操作，最终都不奏效**

`mounted`

- **页面中呈现的是\*\***经过 Vue 编译\*\*的 DOM
- **对 DOM 的操作均有效（尽可能避免）至此初始化过程结束，一般在次进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件、等\*\***初始化操作\*\*

`beforeUpdate`

- **此时数据是新的，但页面是旧的，即页面尚未和数据保持同步**

`updated`

- **此时数据是新的，页面也是新的，即页面和数据保持同步**

`beforeDestroy`

- **此时 vm 中所有的 data、methods、指令等等，都处于可用状态，马上要执行销毁过程，一般在此阶段：关闭定时器、取消订阅消息、解绑自定义时间等收尾操作**

`destroyed`

> - **销毁后借助 Vue 开发者工具看不到任何信息**
> - **销毁后自定义事件会失效，但原生 DOM 事件依然有效**
> - **一般不会在 beforeDestroy 操作数据，因为即便操作数据，也不会再触发更新流程了**

## 组件

### 定义组件

```
const school = new Vue.extend({
    template:`
    <div>
    ...
    </div>
    `,
    //el:'',
    data(){
        return{
name:''
        }
}
})
```

- **不写** `el`,所有组件都要经过一个 vm 的管理，由 vm 中的 el 决定服务那个容器
- `data`必须写成函数：避免组件被复用时，数据存在引用关系
- **使用** `template`可以配置组件结构

### 注册组件

```
// 局部注册
new Vue({
el:'#root',
    data:{
        
    },
    components:{
        School:school
    }
})

// 全局注册
Vue.component('School',school)
```

### 使用组件

```
<body>
    <div id=root>
       <School></School>
    </div>
</body>
```

> 1. **关于组件名**
>    - **一个单词组成**
>      - **第一种写法（首字母小写）：**`school`
>      - **第二种写法（首字母大写）：**`School`
>    - **多个单词组成**
>      - **第一种写法（kabab-case 命名）：**`my-school`
>      - **第二种写法（CamelCase 命名）：**`MySchool`（需要 Vue 脚手架支持）
>    - **备注**
>      - **组件名尽可能回避 HTML 已有的元素名称**
>      - **可以使用 name 配置项指定组件在开发者工具中呈现的名字**
> 2. **关于组件标签**
>    - **第一种写法：**`<school></school>`
>    - **第二种写法：**`<school/>`
> 3. **简写方式**
>    - `const school = Vue.extend(options)`可简写为：`const school = options`

## Vue-cli

**Vue-cli 官网：**[Vue-cli](https://cli.vuejs.org/zh/)

```
├── node_modules
├── README.md 应用描述文件
├── babel.config.js babel的配置文件
├── package-lock.json 包版本控制文件
├── package.json 应用包配置文件
├── public
│   ├── favicon.ico 页面标签
│   └── index.html 主页面
├── src
│   ├── App.vue
│   ├── assets 存放静态文件
│   ├── components 存放文件
│   └── main.js 入口文件
└── vue.config.js
```

**创建脚手架**

```
vue create my-project // 在创建项目的目录下运行指令
```

**启动项目**

```
npm run serve // 项目目录下运行指令
```

## render

```
new Vue({
  render: h => h(App),
}).$mount('#app')

// 相当于
render(createElement){
    return createElement()
}
```

- `vue.runtime.esm.js`只有核心功能，没有模板解析器，不能使用 `template`配置项，需要使用 `render`函数接收到的 `createElement`函数去指定具体内容

## ref

```
<!-- 打标识 -->
<div>
    <h1 ref="addr"></h1>
</div>
```

```
// 获取元素
this.$refs.addr
```

- **beiyonglaigei 元素或子组件注册引用信息（id 的替代者）**
- **应用在 html 标签上获取的是真实的 DOM 结构，应用在组件标签上是组件实例对象**

## props

**让组件接受外部传过来的数据**

```
<!-- 传递数据 -->
<Demo name=' '></Demo>
```

```
// 接收数据

// 第一种方式（只接受）
props:['name']

// 第二种方式（限制类型）
props:{
name:String
}

// 第三种方式（限制类型、限制必要性、指定默认值）
props:{
name:{
type:String, // 类型
        required:true, // 必要性
        default:'tom' // 默认值
    }
}
```

- `props`是只读的，Vue 底层会检测你对 `props`的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 `props`的内容到 `data`中一份，然后去修改 `data`中的数据

## mixin

**把多个组件共用的配置提取成一个混入对象**

```
// 定义混合
{
    data(){
        
    },
    methods:{

    }
}

// 使用混入

// 全局混入
Vue.mixin(xxx)

// 局部混入
mixins:['xxx']
```

## use

**插件**

```
// 定义插件
export default {
    install(Vue)
    {
        Vue.filter(...)
    
    Vue.directive(...)
                  
    Vue.mixin(...)
        
        Vue.prototype.$myMethod = funtion() {...}
        Vue.prototype.$myProperty = xxx
    }
}
    
// 使用插件
Vue.use()
```

## scoped

**让样式在局部生效，防止冲突**

```
<style scoped>

</style>
```

## webStorage

1. **存储内容大小一般支持 5MB 左右**
2. **浏览器端通过** `Window.sessionStorage`和 `Window.localStorage`
3. **API：**
   - `xxxStorage.setItem('key','value')`
     **该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值**
   - `xxxStorage.getItem('key')`
     **该方法接受一个键名作为参数，返回键名对应的值**
   - `xxxStorage.removeItem('key','value')`
     **该方法接受一个键名作为参数，并把该键名从存储中删除**
   - `xxxStorage.clear()`
     **该方法会清空存储中的所有数据**
4. **备注：**
   - **SessionStorage 存储的内容会随着浏览器窗口关闭而消失**
   - **LocalStorage 存储的内容，需要手动清除才会消失**
   - `xxxStorage.getItem(xxx)`如果 xxx 对应的 value 获取不到，那 getItem 的返回值是 null
   - `JSON.parse(null)`的结果依旧是 null

## 组件的自定义事件

1. **一种组件间通信的方式，适用于：**`子组件===>父组件`
2. **使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件（事件的回调在 A 中）**
3. **绑定自定义事件：**
   1. **第一种方式，在父组件中：**`<Demo @abc="test"/>`或 `<Demo v-on:abd="test"/>`
   2. **第二种方式，在父组件中：**
      ```
      <Demo ref="demo/">
      ......
      mounted(){
      this.$refs.demo.$on('abc',this.test)
      }
      ```
   3. **若想让自定义事件只能触发一次，可以使用** `once`修饰符，或者 `$once`方法
4. **触发自定义事件：**`this.$emit('abc',数据)`
5. **解绑自定义事件：**`this.$off('abc')`
6. **组件上也可以绑定原生 DOM 事件，需要使用** `native`修饰词
7. **通过 this.$refs.xxx.**$**on('abc',回调)绑定自定义事件时，回调**要么配置在 methods 中，要么用箭头函数**，否则 this 指向会出错！**

## 全局事件总线

1. **一种组件间通信的方式，适用于**任意组件间通信
2. **安装全局事件总线**
   ```
   new Vue({
   ......
       beforeCreate(){
   Vue.prototype.$bus = this // 安装全局事件总线，$bus就是当前应用的vm
   }
       ......
   })
   ```
3. **使用全局总线：**
   1. **接受数据：A 组件想接收数据，则在 A 组件中给** `$bus`绑定自定义事件，事件的回调留在 A 组件自身
      ```
      methods(){
      demo(data){......}
      }
      ......
      mounted(){
          this.$bus.$on('xxxx',this.demo)
      }
      ```
   2. **提供数据：**`this.$bus.$emit('xxxx',数据)`
4. **最好在** `beforeDerstroy`钩子中，用 `$off`去解绑当前组件所用到的事件

## 消息订阅与发布

1. **一种组件间通信的方式，适用于**任意组件间通信
2. **使用步骤：**
   1. **安装 pubsub：**`npm i pubsub-js`
   2. **引入：**`import pubsub from 'pubsub-js'`
   3. **接收数据：A 组件想接收数据，则在 A 组件中订阅消息，订阅的回调**留在 A 组件自身
      ```
      methods(){
      demo(data){......}
      }
      ......
      mounted(){
          this.pid = pubsub.subscribe('xxx',this.demo) // 订阅消息
      }
      ```
   4. **提供数据：**`pubsub.publish('xxx',数据)`
   5. **最好在** `beforeDestroy`钩子中，用 `PubSub.unsubscribe(pid)`去取消订阅

## nextTick

1. **语法：**`this.nextTick(回调函数)`
2. **作用：在下一次 DOM 更新结束后执行其指定的回调**
3. **使用时间：当改变数据后，要基于更新后的新 DOM 进行某些操作时，要在 nextTick 所指定的回调函数中执行**
4. `this.$nextTick()`可以用作局部的数据更新后 DOM 更新结束后的操作，全局的可以用 `updated`生命周期函数

## Vue 封装的过度与动画

1. **准备好样式**
   - **元素进入的样式：**
     - `v-enter-from`：进入动画的起始状态
     - `v-enter-active`：进入动画的生效状态
     - `v-enter-to`：进入动画的结束状态
   - **元素离开的样式：**
     - `v-leave-from`：离开动画的起始状态
     - `v-leave-active`：离开动画的生效状态
     - `v-leave-to`：离开动画的结束状态
2. **使用** `<transition>`包裹要过度的元素，可配置 `name`属性，同时修改 `v-`为 `name的值-`
   ```
   <transition name="">
   ...
   </transition>
   ```
3. **若有多个元素需要过度，则需要使用：**`<transition-group>`，且每个元素都要指定 `key`值

## 配置代理

### 方法一

**在** `vue.config.js`中添加如下配置：

```
devServer:{
proxy:"http://localhost:5000"
}
```

**说明：**

1. **有点：配置简单，请求资源时直接发给前端(8080)即可**
2. **缺点：不能配置多个代理，不能灵活的控制请求是否走代理**
3. **工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求就会转发给服务器（优先匹配前端资源）**

### 方法二

**编写 vue.config.js 配置具体代理规则：**

```
module.exports = {
devServer: {
proxy: {
            '/api1': { // 匹配所有以 '/api1' 开头的请求路径
                target: 'http://localhost:5000', // 代理的基础路径
                changeOrigin: true,
                pathRewrite: {'^/api1':''}
            },
            '/api2': { // 匹配所有以 '/api2' 开头的请求路径
                target: 'http://localhost:5001', // 代理的基础路径
                changeOrigin: true,
                pathRewrite: {'^/api2':''}
            }
        }
    }
}
/*
changeOrigin设置为true时，服务器收到的请求头的host为,localhost:5000
changeOrigin设置为false时，服务器收到的请求头的host为,localhost:8080
changeOrigin默认值为true
*/
```

**说明：**

1. **优点：可以配置多个代理，且可以灵活的控制请求是否走代理**
2. **缺点：配置略微繁琐，请求资源时必须加前缀**

## 插槽

1. **作用：让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，适用于**父组件->子组件
2. **分类：默认插槽、具名插槽、作用于插槽**
3. **使用方式：**

   1. **默认插槽：**
      ```
      父组件中：
      <Category>
      <div>
                  html结构1
              </div>
      </Category>
      子组件：
      <template>
      <div>
                  <!-- 定义插槽 -->
                  <slot>默认插槽内容...</slot>
              </div>
      </template>
      ```
   2. **具名插槽：**
      ```
      父组件中：
      <Category>
              <template slot="center">
              <div>
                  html结构1
              </div>
              </template>
              
              <template v-slot:footer>
              <div>
                  html结构2
              </div>
              </template>
      </Category>
      子组件：
      <template>
      <div>
                  <!-- 定义插槽 -->
                  <slot name="center">默认插槽内容...</slot>
                  <slot name="footer">默认插槽内容...</slot>
              </div>
      </template>
      ```
   3. **作用域插槽：**

      1. **理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定**
      2. **具体编码：**

         ```
         父组件中：
         <Category>
         <template scope="scopeData">
                 <!-- 生成的是uL列表 -->
                     <ul>
                         <li v-for="g in scopeData.games" :key="g">{{g}}</li>
                     </ul>
                 </template>
         </Category>
         子组件中：
         <template>
         <div>
                     <slot :games="games">默认插槽内容...</slot>
                 </div>
         </template>

         <script>
         export default {
                     name: 'Category',
                     props:['title'].
                     // 数据在子组件自身
                     data {
                     return {
                     games:['game1','game2','game3','game4']
                 }
                 }
                 }
         </script>
         ```

## vuex

**专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信**

### 使用场景

1. **多个组件依赖于同一状态**
2. **来自不同组件的行为需要变更同一状态**

![](https://vuex.vuejs.org/vuex.png)

### 搭建环境

1. **创建文件：**`src/store/index.js`

   ```
   // 引入Vue核心库
   import Vue from 'vue'
   // 引入Vuex
   import Vuex from 'vuex'
   // 应用Vuex插件
   Vue.use(Vuex)

   // 准备action对象 响应组件中用户的动作
   const actions = {}
   // 准备mutations对象 修改state中的数据
   const mutations = {}
   // 准备state对象 保存具体的数据
   const state = {}

   // 创建并暴露store
   export default new Vuex.Store({
       actions,
       mutations,
       state
   })
   ```

2. **在** `main.js`中创建 `vm` 时传入 `store`配置项

   ```
   ......
   // 引入store
   import store from './store'
   ......

   // 创建vm
   new Vue({
   el:'#app'，
       render: h => h(App),
       store
   })

   ```

### 基本使用

1. **初始化数据，配置** `actions`、配置 `mutations`、操作文件 `store.js`

   ```
   // 引入Vue核心库
   import Vue from 'vue'
   // 引入Vuex
   import Vuex from 'vuex'
   // 应用Vuex插件
   Vue.use(Vuex)

   const actions = {
       // 响应组件中加的动作
       jia(context,value){
           context.commit('JIA',value)
       }
   }

   const mutations = {
       // 执行加
       JIA(state,value){
   state.sum += value
       }
   }

   // 初始化数据
   const state = {}

   // 创建并暴露store
   export default new Vuex.Store({
       actions,
       mutations,
       state
   })
   ```

2. **组件中读取 vuex 中的数据：**`$store.state.sum`
3. **组件中修改 vuex 中的数据：**`$store.dispatch('actions中的方法名',数据)`或 `$store.commit('mutations中的方法名',数据)`
   > **备注：若没有网络请求或其他业务逻辑，组件中也可以越过 actions 即不写** `dispatch`，直接编写 `commit`

### getters 的使用

1. **概念：当 state 中的数据需要经过加工后再使用时，可以使用 getters 加工**
2. **在 store.js 中追加 getters 配置**

   ```
   const getters = {
       bigSum(state){
   return state.sum * 10
       }
   }

   // 创建并暴露store
   export default new Vuex.store({
   ......
       getters
   })
   ```

### 四个 map 方法的使用

1. **mapState 方法**：用于帮助我们映射 `state`中的数据为计算属性

   ```
   computed: {
   //借助mapState生成计算属性：sum,school,subject（对象写法）
       ...mapState({sum:'sum',school:'school',subject:'subject'}),
       //借助mapState生成计算属性：sum,school,subject（数组写法）
       ...mapState(['sum','school','subject']),
   }
   ```

2. **mapGetters 方法**：用于帮助我们映射 `getters`中的数据为计算属性

   ```
   computed: {
   //借助mapGetters生成计算属性：bigSum（对象写法）
       ...mapGetters({bigSum:'bigSum'}),
       //借助mapGetters生成计算属性：bigSum（数组写法）
       ...mapGetters(['bigSum']),
   }
   ```

3. **mapActions 方法**：用于帮助我们生成与 `actions`对话的方法，即：包含 `$store.dispatch(xxx)`的函数

   ```
   methods: {
       //靠mapActions生成：incrementOdd、incrementWait(对象形式)
       ...mapActions(incrementOdd:'jiaOdd',incrementWait:'jiaWait')
       
       //靠mapActions生成：incrementOdd、incrementWait(数组形式)
       ...mapActions(['jiaOdd','jiaWait'])
   }
   ```

4. **mapMutations 方法**：用于帮助我们生成与 `mutations`对话的方法，即：包含 `$store.commit(xxx)`的函数

   ```
   methods: {
       //靠mapMutations生成：incrementOdd、incrementWait(对象形式)
       ...mapMutations(incrementOdd:'jiaOdd',incrementWait:'jiaWait')
       
       //靠mapMutations生成：incrementOdd、incrementWait(数组形式)
       ...mapMutations(['jiaOdd','jiaWait'])
   }
   ```

   > **备注：mapActions 与 mapMutations 使用时，若需要传递参数，在模板中绑定事件时传递好参数，否则参数是事件对象**

### 模块化+命名空间

1. **目的：让代码更好维护，让多种数据分类更加明确**
2. **修改** `store.js`
   ```
   const countAbout = {
       namespaced:true, // 开启命名空间
       state:{ x:1 },
       mutations: { ... },
       actions: { ... },
       getters: {
           bigSum(state){
   return state.sum *10;
           }
       }
   }
                   
   const personAbout = {
       namespaced:true, // 开启命名空间
       state: { ... },
       mutations: { ... },
       actions: { ... }
   }
                   
   export default new Vuex.store({
   modules: {
       countAbout,
           personAbout
       }                
   })
   ```
3. **开启命名空间后，组件中读取 state 数据：**
   ```
   // 方式一：自己直接读取
   this.$store.state.personAbout.list
   // 方式二：借助mapState读取
   ...mapState('countAbout',['sum','school','subject']),
   ```
4. **开启命名空间后，组件中读取 getters 数据：**
   ```
   // 方式一：自己读取读取
   this.$store.getters['personAbout/firstPersonName']
   // 方式二：借助mapGetters读取：
   ...mapGetters('countAbout',['bigSum'])
   ```
5. **开启命名空间后，组件中调用 dispatch：**
   ```
   // 方式一：自己直接dispatch
   this.$store.dispatch('personAbout/addPersonWang',person)
   // 方式二：借助mapActions：
   ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   ```
6. **开启命名空间后，组件中调用 commit：**
   ```
   // 方式一：自己直接commit
   this.$store.commit('personAbout/ADD_PERSON',person)
   // 方式二：借助mapMutations：
   ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'})
   ```

## 路由

1. **理解：一个路由（route）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理**
2. **前端路由：key 是路径，value 是组件**

### 基本使用

1. **安装 vue-router，命令：**`npm i vue-router@3 (默认是4对应vue3)`
2. **应用插件：**`Vue.use(VueRouter)`
3. **编写 router 配置项：**

   ```
   // 引入VueRouter
   import VueRouter from 'vue-router'
   // 引入Luyou组件
   import About from '../components/About'
   import Home from '../components/Home'

   // 创建router实例对象，去管理一组一组的路由规则
   export default new VueRouter({
       routes:[
           {
               path:'/about',
               compontent:About
           },
           {
               path:'/home',
               compontent:Home
           }
       ]
   })
   ```

4. **实现切换（active-cla）**
   ```
   <router-link active-class="active" to="/about">About</router-link>
   ```
5. **指定展示位置**
   ```
   <router-view></router-view>
   ```

### 几个注意点

1. **路由组件通常存放在** `pages`文件夹，一般组件通常存放在 `components`文件夹
2. **通过切换，隐藏了的路由组件，默认是被销毁掉的，需要的时候再去挂载**
3. **每个组件都有自己的** `$route`属性，里面存储着自己的路由信息
4. **整个应用只有一个 router，可以通过组件的** `$router`属性获取到

### 多级路由

1. **配置路由规则，使用 children 配置项：**
   ```
   routes:[
       {
           path:'/about',
           compontent:About
       },
       {
           path:'/home',
           compontent:Home,
           children:[ // 通过children配置子级路由
               {
                   path:'news', // 此处一定不要写： /news
                   component:News
               },
               {
   path:'news',
                   compontent:Messages
               }
           ]
       }
   ]
   ```
2. **跳转（要写完整路径）：**
   ```
   <router-link to="/home/news">News</router-link>
   ```

### 路由的 query 参数

1. **传递参数**

   ```
   <!-- 跳转并携带query参数,to的字符串写法-->
   <router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>

   <!--跳转并携带query参数,to的对象写法-->
   <router-link
   :to="{
       path:'/home/message/detail',
           query:{
           id:666,
            title:'你好'
           }
       }"
   >跳转</router-link>
   ```

2. **接收参数：**
   ```
   $route.query.id
   $route.query.title
   ```

### 命名路由

1. **作用：可以简化路由的跳转**
2. **使用**

   1. **给路由命名：**
      ```
      {
      path:'/demo',
          component:Demo,
          children:[
              {
                  path;'test',
                  component:Test,
                  children:[
                  {
                  name:'hello', // 给路由命名
                  path:'welcome',
                  component:Hello
              }
                  ]
              }
          ]
      }
      ```
   2. **简化跳转：**

      ```
      <!-- 简化前，需要写完整的路径 -->
      <router-link to="/demo/test/welcome">跳转</router-link>

      <!-- 简化后，直接通过名字跳转 -->
      <router-link :to="{name:'hello'}">跳转</router-link>

      <!-- 简化写法配合传递参数 -->
      <router-link
      :to="{
          name:'hello',
              query:{
              id:666,
               title:'你好'
              }
          }"
      >跳转</router-link>
      ```

### 路由的 params 参数

1. **配置路由，声明接收 params 参数**

   ```
   {
       path:'/home',
       component:Home,
       children:[
           {
               path:'news',
               component:News
           },
           {
               component:Message,
               children;[
               {
                       name:'xianqing',
               path:'detail/:id/:title', // 使用占位符声明接收params参数
               component:Detail
                   }
               ]
           }
       ]
   }
   ```

2. **传递参数**

   ```
   <!-- 跳转并携带params参数，to的字符串写法 -->
   <router-link :to="/home/message/detail/666/你好">跳转</router-link>

   <!-- 跳转并携带params参数，to的对象写法 -->
   <router-link
   :to="{
            name:'xianqing',
            params:{
       id:666,
            title:'你好'
            }
       }"
   >跳转</router-link>
   ```

   > **特别注意：路由携带 params 参数时，若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置！**

3. **接收参数：**

   ```
   $route.params.id
   $route.params.title
   ```

### 路由的 props 配置

**作用：让路由组件更方便的收到参数**

```
{
    name:'xianqing',
    path:'detail/:id',
    component:Detail,
    
    // 第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
    props:{a:900}
    
    // 第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Deatail组件
    props:true
    
    // 第三种写法：prop值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
    props(route){
return {
            id:route.query.id,
            title:route.query.title
        }
    }
}
```

### <**router-link>的 replace 属性**

1. **作用：控制路由跳转时操作浏览器历史记录的模式**
2. **浏览器的历史记录有两种写入方式：分别为** `push`和 `replace`，`push`是追加历史记录，`replace`是替换当前记录，路由跳转时候默认为 `push`
3. **如何开启** `replace`模式：`<router-link replace ......>News</router-link>`

### 编程式路由导航

1. **作用：不借助** `<router-link>`实现路由跳转，让路由跳转更加灵活
2. **具体编码：**

   ```
   // $router的两个API
   this.$router.push({
   name:'xiangqi',
   params:{
    id:xxx,
    title:xxx
   }
   })

   this.$router.replace({
   name:'xiangqi',
   params:{
    id:xxx,
    title:xxx
   }
   })

   this.$router.forward() // 前进
   this.$router.back() // 后退
   this.$router.go() //可前进可后退
   ```

### 缓存路由组件

1. **作用：让不展示的路由组件保持挂载，不被销毁**
2. **具体编码：**
   ```
   <keep-alive include="News">
   <router-view></router-view>
   </keep-alive>
   ```

### 两个新的生命周期钩子

1. **作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态**
2. **具体名字：**
   1. `activated`路由组件被激活时触发
   2. `deactivated`路由组件失活时触发

### 路由守卫

1. **作用：对路由进行权限控制**
2. **分类：全局守卫、独享守卫、组件内守卫**
3. **全局守卫：**

   ```
   // 全局前置守卫：初始化时执行、每次路由切换前执行
   router.beforeEach((to,from,next)=>{
   if(to.meta.isAuth){ // 判断当前路由是否需要进行权限控制
   if(locakStorage.getItem('school')===''){ //权限控制的具体规则
               next() // 放行
           }else{
               alert('暂无权限查看')
           }
       }else{
           next() // 放行
       }
   })

   // 全局后置守卫：初始化时执行、每次路由切换后执行
   router.afterEach((to,from)=>{
       if(to.meta.title){
   document.title = to.meta.title // 修改网页的title
       }else{
           document.title =  ''
       }
   })
   ```

4. **独享守卫**
   ```
   beforeEnter(to,from,next){
   if(to.meta.isAuth){ // 判断当前路由是否需要进行权限控制
   if(locakStorage.getItem('school')===''){ //权限控制的具体规则
               next() // 放行
           }else{
               alert('暂无权限查看')
           }
       }else{
           next() // 放行
       }
   }
   ```
5. **组件内守卫：**
   ```
   // 进入守卫：通过路由规则，进入该组件时被调用
   beforeRouteEnter(to,from,next){
       
   },
   // 离开守卫，通过路由规则，离开该组件时被调用
   beforeRouteLeave(to,from,next){
       
   }
   ```

### 路由器的两种工作模式

1. **对于一个 url 来说，什么是 hash 值？----- #及其后面的内容就是 hash 值**
2. **hash 值不会包含在 HTTP 请求中，即：hash 值不会带给服务器**
3. **hash 模式：**
   1. **地址中永远带着#号，不美观**
   2. **若以后将地址通过第三方手机 app 分享，若 app 检验严格，则地址会被标记为不合法**
   3. **兼容性较好**
4. **history 模式：**
   1. **地址干净，美观**
   2. **兼容性和 hash 模式相比略差**
   3. **应用部署上线时需要后端人员支持，解决刷新页面服务端 404 的问题**

## vue-electron

**问题解决方案**

```
npm install --ignore-scripts
并在生成module/electron文件夹下手动配置path.txt文件，内容electron.exe

node.js18 ssl问题 在运行electron:serve前输入$env:NODE_OPTIONS="--openssl-legacy-provider"
```

## Vite

**官网：**[https://vitejs.cn](https://vitejs.cn/)

```
## 创建工程
npm init vite-app <project-name>
npm init vue@latest
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

## setup

1. **理解：Vue3.0 中一个新的配置项，值为一个函数**
2. **setup 是所有 Composition API“表演的舞台”**
3. **组件中所用到的：数据、方法等等，均要配置在 setup 中**
4. **setup 函数的两种返回值**
   1. **若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用**
   2. **若返回一个渲染函数：则可以自定义渲染内容**
5. **注意点：**
   1. **尽量不要与 Vue2.x 配置混用**
      1. **Vue2.x 配置(data methods computed..)中可以访问到 setup 中的属性、方法**
      2. **但在 setup 中不能访问到 Vue2.x 配置(data methods computed...)**
      3. **如果有重名，setup 优先**
   2. **setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性**

```
export default {
setup(){
let a = '';
        function b(){

        };
        
        return {
a,
            b
        }
    }
}
```

> **注意点：**
>
> 1. **setup 执行的时机**
>    - **在 beforeCreate 之前执行一次，this 是 underfined**
> 2. **setup 的参数**
>    - **props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性**
>    - **context：上下文对象**
>      - **attrs：值为对象，包含：组件外部传递过来，但没有在 props 配置中声明的对象，相当于** `this.$attrs`
>      - **slots：收到的插槽内容，相当于** `this.$slots`
>      - **emit：分发自定义事件的函数，相当于** `this.$emit`

## ref

- **作用：定义一个响应式的数据**
- **语法：**`let xxx = ref(initValue)`
  - **创建一个包含响应式数据的引用对象（reference 对象，简称 ref 对象）**
  - **JS 中操作数据：**`xxx.value`
  - **模板中读取数据：不需要.value，直接** `<div>{{xxx}}</div>`
- **备注：**
  - **接收的数据可以是：基本类型、也可以是对象类型**
  - **基本类型的数据：响应式布局依然是靠** `Object.defineProperty()`的 `get`与 `set`完成的
  - **对象类型的数据：内部“求助”了 Vue3.0 中的一个新函数——**`reactive`函数

```
export default {
setup(){
let a = ref(1);
        function b(){
a.value = 2;
        };
        
        return {
a,
            b
        }
    }
}
```

## reactive

- **作用：定义一个对象类型的响应式数据（基本类型不要用它，要用** `ref`函数）
- **语法：**`const 代理对象 = reactive(源对象)`接收一个对象（或数组），返回一个代理对象（proxy 对象）
- `reactive`定义的响应式数据是深层次的
- **内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作**

## 响应式

### Vue3.0 的响应式

- **实现原理**
  - **通过 Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写，属性的添加，属性的删除等**
  - **通过 Reflect（反射）：对源对象的属性进行操作**
    ```
    new Proxy(data, {
    // 拦截读取属性值
        get(target, prop) {
    return Reflect.get(target, prop);
        },
        // 拦截设置属性值或添加新属性
        set(target, prop, value) {
    return Reflect.set(target, prop, value);
    },
        deleteProperty(target, prop) {
    return Reflect.deleteProperty(target, prop);
        }
    })
    ```

## computed

- **与 Vue2.x 中 computed 配置功能一致**
- **写法**

  ```
  import {computed} from 'vue'

  setup(){
  let fullName = computed(()=> {
  return person.firstName + '-' + person.lastName
      })
      
      let fullName = computed({
  get(){
  return person.firstName + '-' + person.lastName
          }
          set(value){
  const nameArr = value.split('-')
              person.firstName = nameArr[0]
          person.lastName = nameArr[1]
      }
      })
  }
  ```

## watch

- **与 Vue2.x 中 watch 配置功能一致**
- **两个小坑：**
  - **监视 reactive 定义的响应式数据时：oldvalue 无法正确获取，强制开启了深度监视（deep 配置失效）**
  - **监视 reactive 定义的响应式数据中某个属性时：deep 配置有效**

```
//监视ref定义的响应式数据
watch(sum,(newV,oldV)=>{

},{immediate:true});

//监视多个ref定义的响应式数据
watch([sum,,msg],(newV,oldV)=>{

});

//监视reactive所定义的一个响应式数据的全部属性
watch(person,(newV,oldV)=>{

});

//监视reactive所定义的一个响应式数据中的某个属性
watch(()=>person.name,(newV,oldV)=>{

});

//监视reactive所定义的一个响应式数据中的某些属性
watch([()=>person.name,()=>person.age],(newV,oldV)=>{

});

//特殊情况(监视属性为对象时)
watch(()=>person.job,(newV,oldV)=>{

},{deep:true});
```

## watchEffect

- **watch 的套路是：既要指明监视的属性，也要指明监视的回调**
- **watchEffect 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性**
- **watchEffect 有点像 computed：**

  - **但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值**
  - **而 wachEffect 更注重的是过程（回调函数的函数体），所以不用写返回值**

  ```
  //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调
  watchEffect(()=>{
  const x1 = sum.value;
      const x2 = person.age;
      console.log('watchEffect配置的回调执行了')
  })
  ```

## 生命周期

- **Vue3.0 中可以继续使用 Vue2.x 中的生命周期钩子，但有两个被更名**
  - `beforeDestroy`改名为 `beforeUnmount`
  - `destroyed`改名为 `unmounted`
- **Vue3.0 也提供了 Composition API 形式的生命周期钩子，与 Vue2.x 中钩子对应关系如下：**
  - `beforeCreate`->`setup()`
  - `created`->`setup()`
  - `beforeMount`->`onBeforeMount`
  - `mounted`->`onMounted`
  - `beforeUpdate`->`onBeforeUpdate`
  - `updated`->`onUpdated`
  - `beforeUnmount`->`onBeforeUnmount`
  - `unmounted`->`onmounted`

## hook

- **本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装**
- **类似于 vue2.x 中的 mixin**
- **自定义 hook 的优势：复用代码，让 setup 中的逻辑更清楚易懂**

## toRef

- **作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个数据**
- **语法：**`const name = toRef(person,'name')`
- **应用：要将响应式对象中的某个属性单独提供给外部使用时**
- **扩展：**`toRefs`与 `toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`

## shallowReactive 与 shallowRef

- **shallowReactive：只处理对象最外层属性的响应式（浅响应式）**
- **shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理**
- **什么时候使用？**
  - **如果有一个对象数据，结构比较深，但变化时只是外层属性变化---->shallowReactive**
  - **如果有一个对象数据,后续功能不会修改该对象中的属性，而是生新的对象来替换--->shallowRef**

## readonly 与 shallowReadonly

- **readonly：让一个响应式数据变为只读的（深只读）**
- **shallowReadonly：让一个响应式数据变为只读的（浅只读）**
- **应用场景：不希望数据被修改时**

## toRaw 与 markRaw

- **toRaw**
  - **作用：将一个** `reactive`生成的响应式对象转为普通对象
  - **使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新**
- **markRaw**
  - **作用：标记一个对象，使其永远不会再成为响应式对象**
  - **应用场景：**
    - **有些值不应该被设置为响应式的，例如复杂的第三方类库等**
    - **当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能**

## customRef

- **作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制**
- **实现防抖效果**

  ```
  <template>
  <input type="text" v-model="keyword">
  <h3>
          {{ keyword }}
      </h3>
  </template>

  <script>
  import {ref,customRef} from 'vue'
      export default {
          name: 'Demo',
          setup(){
  function myRef(value,delay){
                  
              }
          }
      }
  </script>
  ```

## provide 与 inject

- **作用：实现祖孙组件间通信**
- **套路：父组件有一个** `provide`选项来提供数据，子组件有一个 `inject`选项来开始使用这些数据
- **具体写法：**
  - **祖组件中：**
    ```
    setup(){
    let car = reactive({name:'奔驰',price:'40万'})
    provide('car',car)
    }
    ```
  - **后代组件中：**
    ```
    setup(props,context){
    const car = inject('car')
    return {car}
    }
    ```

## 响应式数据的判断

- `isRef`：检查一个值是否为一个 ref 对象
- `isReactive`：检查一个对象是否是由 `reactive`创建的响应式代理
- `isReadonly`：检查一个对象是否是由 `readonly`创建的只读代理
- `isProxy`：检查一个对象是否是由 `reactive`或者 `readonly`方法创建的代理

## 新的组件

### Fragment

- **在 vue2 中，：组件必须有一个根标签**
- **在 vue3 中：组件可以没有根标签，内部会将多个标签包含在一个 Fragment 虚拟元素中**
- **好处：减少标签层级，减小内存占用**

### Teleport

**teleport 是一种能够将我们的组件 html 结构移动到指定位置的技术**

```
<teleport to="移动位置">
<div v-if="isShow" class="mask">
    <div class="dialog">
        <h3>弹窗</h3>
            <button @click="isShow = false">关闭弹窗</button>
        </div>
    </div>
</teleport>
```

### Suspence

- **等待异步组件时渲染一些额外内容，让应用有更好的用户体验**
- **使用步骤：**
  - **异步引入组件**
    ```
    import {defineAsyncComponent} from 'vue'
    const child = defineAsyncComponent(()=>import('./components/Child.vue'))
    ```
  - **使用 Suspense 包裹组件，并配置好 default 与 fallback**
    ```
    <template>
    <div>
            <Suspense>
        <template v-slot:default>
    <Child/>
    </template>
    <template v-solt:fallback>
    <h3>
                        加载中...
                    </h3>
    </template>
        </Suspense>
        </div>
    </template>
    ```

## 全局 API 的调整

| **2.x 全局 API**             | **3.x 实例 API**                |
| ---------------------------- | ------------------------------- |
| **Vue.config.xxx**           | **app.config.xxx**              |
| **Vue.config.productionTip** | **移除**                        |
| **Vue.component**            | **app.component**               |
| **Vue.directive**            | **app.directive**               |
| **Vue.mixin**                | **app.mixin**                   |
| **Vue.use**                  | **app.use**                     |
| **Vue.prototype**            | **app.config.globalProperties** |
