# ES6

## let

**变量**

- **变量不能重复声明**
- **块级作用域**
- **不存在变量提升（在变量声明前使用）**
- **不影响作用域链**

## const

**常量**

- **一定要赋初始值**
- **一般常量使用大写**
- **常量值不能修改**
- **块级作用域**
- **对于数组和对象的元素修改，不算做对常量的修改，不会报错**

## 解构赋值

### 数组的解构

```
const ar = ['my_name','my_age','my_sex'];
let [name, age, sex] = ar;
```

### 对象的解构

```
const person = {
    name: '',
    age: '',
    sex: ''
};
let {name, age, sex} = person;
```

## 模板字符串

**ES6 引入新的声明字符串的方式 \*\***``\*\*

- **内容可以直接出现换行符**

```
let str = `<ul>
<li></li>
   </ul>`;
```

- **变量拼接**

```
let str = 'test';
let out = `${str} is successful`;
```

## 对象的简化写法

**ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法**

```
let name = '';
let age = '';
const person = {
    name,
    age,
    do(){ //省略: function
        
    }
}
```

## 箭头函数

**ES6 允许使用\*\***箭头（=>）\*\*定义函数

```
let fn = function(){
    
}

let fn = () => {
    
}
```

- **this 是静态的，this 始终指向函数声明时所在作用于下的 this 的值**
- **不能作为构造器实例化对象**
- **不能使用 arguments 变量**
- **当形参有且只有一个的时候，可以省略小括号**
- **当代码体只有一条语句的时候，可以省略大括号，return 同时省略，语句的执行结果就是函数的返回值**

## 函数参数默认值

**ES6 允许给函数参数赋初始值**

- **形参初始值**

```
function add(a,b=0) {
    return a+b;
}
let result = add(1);
```

- **与解构赋值结合**

```
function connect({host, username, password, port='80'}){
    
}
connect({
    host: '',
    username: '',
    password: '',
    port: 3306
})
```

## rest 参数

**ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments**

```
function fn(...args){
    console.log(args);
}
```

## 扩展运算符

**...** 扩展运算符能将数组转换为逗号分隔的参数序列

- **数组的合并**

```
const ar1 = ['a','b'];
cosnt ar2 = ['c','d'];
const ar3 = [...ar1,...ar2];
```

## symbol

**ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JS 语言的第七种数据类型，是一种类似字符串的数据类型**

```
//创建Symbol
let s = Symbol();
//添加标识的Symbol
let s = Symbol('id');
```

- **Symbol 的值是唯一的，用来解决命名冲突的问题**
- **Symbol 值不能与其他数据进行运算**
- **Symbol 定义的对象属性不能使用 for...in 循环遍历，但是可以使用** `Reflect.ownKeys`来获取对象的所有键名

## 迭代器

**迭代器是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署** `iterator`接口，就可以完成遍历操作

**工作原理**

1. **创建一个指针对象，指向当前数据结构的起始位置**
2. **第一次调用对象的** `next`方法，指针自动指向数据结构的第一个成员
3. **接下来不断调用** `next`方法，指针一直往后移动，直到指向最后一个成员
4. **每调用** `next`方法返回一个包含 `value`和 `done`属性的对象

```
const arr = ['a','b','c']

let iterator = arr[Symbol.iterator]()

iterator.next()
```

## 生成器

**异步编程函数**

```
function one(){
setTimeout(()=>{
console.log(111);
        iterator.next();
    })
}

function two(){
setTimeout(()=>{
console.log(222);
        iterator.next();
    })
}

function three(){
setTimeout(()=>{
console.log(333);
        iterator.next();
    })
}

function * gen(){
    yield one();
    yield two();
    yield three();
}

let iterator = gen();
iterator.next();
```

## Promise

```
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
        // reject('error');
    }, 1000);
});

p.then((value) => {
    console.log(value);
}, (reason) => {
    console.log(reason);  
});
```

> - **then 方法的返回结果是 Promise 对象，对象状态由回调函数的执行结果决定**
>   ```
>   p.then(value=>{
>   return new Promise((resolve,reject)=>{
>   resolve('ok')
>       })
>   })
>   ```
> - **链式调用**
>   ```
>   p.then(value=>{}).then(value=>{})
>   ```

```
const p = new Promise((resolve, reject) => {
    fs.readFile("./a.md",(err,data) => {
    resolve(data);
    });
});

p.then(value => {
return new Promise((resolve, reject) => {
        fs.readFile("./b.md",(err,data) => {
            resolve([value,data]);
        });
    });
}).then(value => {
return new Promise((resolve, reject) => {
        fs.readFile("./c.md",(err,data) => {
            value.push(data);
            resolve(value);
        });
    });
})
```

`catch`

```
p.catch((reason) => {
console.warn(reason)                  
})
```

## Set

**集合（成员的值唯一）**

| **api**    |              |
| ---------- | ------------ |
| **size**   | **元素个数** |
| **add**    | **添加元素** |
| **delete** | **删除元素** |
| **has**    | **检测元素** |
| **clear**  | **清空元素** |

**数组去重**

```
let arr = [1,1,2,2,3]
let result = [...new Set(arr)] // [1,2,3]
```

**交集**

```
let arr2 = [3,4,5]
let result = [...new Set(arr)].filter(item => {
 let s2 = new Set(arr2);
    if(s2.has(item)){
return true
    }else{
return false
    }
})
```

## Map

```
// 声明Map
let m = new Map();

//添加元素
m.set('a',b);
m.set('c',function(){
   console.log(1);
});

//size
m.size

//删除
m.delete('a')

//获取
m.get('a')
```

## Class

```
class Phone{
constructor(brand, price){
this.brand=brand;
        this.price=price;
    }
    
    call(){
        console.log("打电话");
    }
}

let onePlus = new Phone("1+0", 2999)
```

### 静态成员

```
class Phone{
    static name = '1+';
}

console.log(Phone.name);
```

### 继承

```
class SmartPhone extends Phone{
constuctor(brand, price, color, size){
super(brand, price);
        this.color = color;
        this.size =  size;
    }
    
    photo(){

    }
    
    playGame(){
        
    }
    
}

const xiaomi = new SmartPhone('小米',799,'黑色','4.7')
```

### 重写

**同名函数只能重写无法调用父类方法**

### getter 和 setter

```
class Phone{
    get price(){
return 100;
    }
    
    set price(new){

    }
}

let s = new Phone();

s.price = 'free'
```

## 数值扩展

- `Number.EPSILON`是 JS 表示的最小精度
- **二进制 0b1010，八进制 0o777，十六进制 0xff**
- `Number.isFinite`检测一个数值是否为有限数
- `Number.isNaN`检测一个数值是否为 NaN
- ` Number.parseInt``Number.parseFloat `字符串转整数
- `Number.isInteger`判断一个数是否为整数
- `Math.trunc`将数字的小数部分抹掉
- `Math.sign`判断一个数到底为正数、负数、还是零

## 对象扩展

- `Object.is`判断两个值是否完全相等
- `Object.assign`对象的合并
- `Object.setPrototypeOf`设置原型对象
- `Object.getPrototypeOf`获取原型对象

## 模块化

**模块功能主要由两个命令构成：**`export`和 `import`

- `export`命令用于规定模块的对外接口
- `import`命令用于输入其他模块提供的功能

```
<script type="module">

</script>
```

```
// 分别暴露
export let a=1;
export function b(){
    
}

// 统一暴露
let a=1;
function b(){
    
}
export {a,b};

// 默认暴露
export default {
    a:1,
    b(){
        
    }
}
```

```
// 通用方式
import * as 别名 from "./test.js"

// 解构赋值形式
import {a,b} from "./test.js"
import {a as aa,b} from "./test.js"
import {default as c} from "./test.js"

// 简便形式 针对默认暴露
import c from "./test.js"
```
