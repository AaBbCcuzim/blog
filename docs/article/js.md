# JS

## 输入输出

| **方法**             | **说明**                           | **归属**   |
| -------------------- | ---------------------------------- | ---------- |
| **alert(msg)**       | **浏览器弹出警示框**               | **浏览器** |
| **console.log(msg)** | **浏览器控制台打印输出信息**       | **浏览器** |
| **prompt(info)**     | **浏览器弹出输入框，用户可以输入** | **浏览器** |

## 数据类型

### Number

**JavaScript 中数值的最大和最小值**

```
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
```

**JavaScript 中数值的特殊值**

```
Infinity //代表正无穷大，大于任何数值
-Infinity //代表负无穷大，小于任何数值
NaN //Not a number ,代表一个非数值
```

**isNaN()**

```
isNaN() // 这个办法用来判断非数字，并返回一个值，如果是数字返回的是false，如果不是数字返回的是true
```

**parseInt()**

```
parseInt(string) // 将string类型转换成整数数值型
```

**parseFloat()**

```
parseFloat(string) // 将string类型转成浮点数数值型
```

**Number()**

```
Number() // 将string类型转换为数值型
```

\*_-_\*\*

**通过算数运算隐式转换为数值型**

### String

**转义符**

| **转义符** | **解释说明** |
| ---------- | ------------ |
| **\n**     | **换行符**   |
| \*\*\*\*   | **斜杠**     |
| \*\*'\*\*  | **单引号**   |
| \*\*"\*\*  | **双引号**   |
| \*\*t\*\*  | **tab 缩进** |
| \*\*b\*\*  | **空格**     |

**.\*\***length\*\*

**可以通过字符串变量的属性 length 获取整个字符串的长度**

**+**

**多个字符串之间可以使用+进行拼接，其拼接方式为字符串+任何类型=拼接之后的新字符串**

**拼接前会把与字符串相加的任何类型转成字符串，再拼接成一个新的字符串**

**String()**

```
String() //转换成字符串
```

**.toString()**

```
变量.toString() //转成字符串
```

### Boolean

**布尔型和数字型相加的时候，true 的值为 1，false 的值为 0**

**Boolean()**

```
Boolean() // 其他类型转成布尔值 代表空，否定的值会被转换成false，如''、NaN、null、undefined 气郁质都会被转换为true
```

### Undefined

**变量声明后未赋值**

### Null

**变量声明后为空值**

### typeof

```
typeof 变量 //获取检测变量的数据类型
```

## Math

**Math 所有属性和方法都是静态的**

| **方法**          | **说明**                     |
| ----------------- | ---------------------------- |
| **Math.PI**       | **圆周率**                   |
| **Math.floor()**  | **向下取整**                 |
| **Math.ceil()**   | **向上取整**                 |
| **Math.round()**  | **四舍五入**                 |
| **Math.abs()**    | **绝对值**                   |
| **Math.max()**    | **最大值**                   |
| **Math.min()**    | **最小值**                   |
| **Math.random()** | **随机数 返回[0,1)的浮点数** |

> **返回包含两个数在内的区间的随机整数：**
>
> **Math.random()\*(max-min+1)+min; // max 右边界,min 左边界**

## Date

**需要调用 Date()构造函数来实例化日期对象**

> **new Date(); // 返回当前时间**
>
> **new Date('2023-1-25'); //返回参数里面的时间**

| **方法**          | **说明**                          |
| ----------------- | --------------------------------- |
| **getFullYear()** | **获取当年**                      |
| **getMonth()**    | **获取当月（0-11）**              |
| **getData()**     | **获取当天日期**                  |
| **getDay()**      | **获取星期几（周日 0 到周六 6）** |
| **getHours()**    | **获取当前小时**                  |
| **getMinutes()**  | **获取当前分钟**                  |
| **getSeconds()**  | **获取当前秒钟**                  |
| **valueOf()**     | **获取总的毫秒数**                |
| **getTime()**     | **获取总的毫秒数**                |

> **+new Date(); // 返回总的毫秒数**
>
> **H5 新增 Date.now()返回总的毫秒数**

## Array

| **方法**            | **说明**                                                                                |
| ------------------- | --------------------------------------------------------------------------------------- |
| **Array.isArray()** | **检测是否为数组返回布尔值**                                                            |
| **push()**          | **数组末尾添加元素并会返回新数组长度**                                                  |
| **unshift()**       | **数组前面添加元素并会返回新数组长度**                                                  |
| **pop()**           | **数组末尾删除元素并会返回删除的元素**                                                  |
| **shift()**         | **数组前面删除元素并会返回删除的元素**                                                  |
| **reverse()**       | **翻转数组**                                                                            |
| **sort()**          | **数组排序**                                                                            |
| **indexOf()**       | **从前往后查找指定元素的第一个索引号 如果不存在返回-1**                                 |
| **lastIndexOf()**   | **从后往前查找指定元素的第一个索引号 如果不存在返回-1**                                 |
| **toString()**      | **将数组转换为字符串**                                                                  |
| **join('分隔符')**  | **将数组转换为字符串并规定间隔符样式**                                                  |
| **concat()**        | **连接两个或多个数组 不影响元素组 返回一个新的数组**                                    |
| **slice()**         | **数组截取 slice(begin,end) 返回被截取的新数组**                                        |
| **splice()**        | **数组删除 splice(第几个开始，要删除几个数) 返回被删除的新数组 注意，这个会影响原数组** |

> **instanceof:**
>
> **obj instansceof Array 检测是否为数组返回布尔值**
>
> **sort():**
>
> **sort(function(a,b) {**
>
> \*\* \*\*return a - b; // 升序
>
> \*\* \*\*return b - a; // 降序
>
> **});**

## String

| **方法**                                   | **说明**                                                         |
| ------------------------------------------ | ---------------------------------------------------------------- |
| **indexOf('要查找的字符',开始的位置)**     | **返回指定内容在原字符串中第一次出现的位置，如果找不到就返回-1** |
| **lastIndexOf()**                          | **从后往前，同 indexOf()一样**                                   |
| **charAt(index)**                          | **返回指定位置的字符**                                           |
| **charCodeAt(index)**                      | **获取指定位置处字符的 ASCII 码**                                |
| **concat()**                               | **连接两个或多个字符串**                                         |
| **substr(start,length)**                   | **截取从 start 开始长 length 的字符串**                          |
| **slice(start,end)**                       | **从 start 开始，截取到 end，end 取不到**                        |
| **substring(start,end)**                   | **从 start 开始，截取到 end，end 取不到**                        |
| **replace('被替换的字符','替换为的字符')** | **替换符合条件的第一个字符**                                     |
| **split('分隔符')**                        | **转换为数组**                                                   |

> **str[index] // 获取指定位置处字符 H5 新增**

## DOM

### console

#### dir

**打印返回的元素对象，更好的查看里面的属性和方法**

```
console.dir()
```

### getElementById

**通过 id 属性获取元素**

```
document.getElementById()
```

### getElementsByTagName

**返回带有指定标签名的对象的集合**

```
document.getElementsByTagName()
element.getElementsByTagName()
```

### getElementsByClassName

**通过类名获取元素集合**

```
document.getElementsByClassName()
```

### querySelector

**返回指定选择器的第一个元素**

```
document.querySelector()
```

- **区分选择器需要加上对应的符号**

### querySelectorAll

**返回指定选择器的所有元素对象集合**

```
document.querySelectorAll()
```

### body

**返回 body 元素对象**

```
document.body
```

### documentElement

**返回 html 元素对象**

```
document.documentElement
```

### 事件

| **事件**         | **触发条件**                                                    |
| ---------------- | --------------------------------------------------------------- |
| **onclick**      | **鼠标点击左键触发**                                            |
| **onmouseover**  | **鼠标经过触发。经过自身盒子和子盒子都会触发**                  |
| **onmouseenter** | **鼠标经过触发。只经过自身盒子触发**                            |
| **onmouseout**   | **鼠标离开触发**                                                |
| **onfocus**      | **获得鼠标焦点触发**                                            |
| **onblur**       | **失去鼠标焦点触发**                                            |
| **onmousemove**  | **鼠标移动触发**                                                |
| **onmouseup**    | **鼠标弹起触发**                                                |
| **onmousedown**  | **鼠标按下触发**                                                |
| **onkeyup**      | **某个键盘按键被松开时触发**                                    |
| **onkeydown**    | **某个键盘按键被按下时触发**                                    |
| **onkeypress**   | **某个键盘按键被按下时触发 但它不识别功能键 （ctrl,shift 等）** |
| **onscroll**     | **滚动条变化时触发**                                            |

> **如果使用 addEventListener 上述事件不需要加 on**

| **事件**        | **说明**                             |
| --------------- | ------------------------------------ |
| **contextmenu** | **右键菜单（通常用于禁用右键菜单）** |
| **selectstart** | **选中文字（通常用于禁止选中文字）** |

#### addEventListener

**注册事件**

```
eventTarget.addEventListener(type,listener[,useCapture])
```

- **type：事件类型字符串，比如 click、mouseover，注意这里不要带 on**
- **listener：事件处理函数，事件发生时，会调用该监听函数**
- **useCapture：可选参数，是一个布尔值，默认是 false。**

#### removeEventListener

**删除事件**

```
eventTarget.removeEventListener(type,listener[,useCapture])
```

| **事件对象属性方法**    | **说明**                                                        |
| ----------------------- | --------------------------------------------------------------- |
| **e.target**            | **返回触发事件的对象 标准**                                     |
| **e.srcElement**        | **返回触发事件的对象 非标准 ie6-8**                             |
| **e.type**              | **返回事件的类型**                                              |
| **e.cancelBubble**      | **该属性阻止冒泡 非标准 ie6-8**                                 |
| **e.returnValue**       | **该属性阻止默认事件（默认行为）非标准 ie6-8 比如不让链接跳转** |
| **e.preventDefault()**  | **该方法阻止默认事件（默认行为）标准 比如不让跳转链接**         |
| **e.stopPropagation()** | **阻止冒泡 标准**                                               |
| **e.clientX**           | **返回鼠标相对于浏览器窗口可视区的 X 坐标**                     |
| **e.clientY**           | **返回鼠标相对于浏览器窗口可视区的 Y 坐标**                     |
| **e.pageX**             | **返回鼠标相对于文档页面的 X 坐标**                             |
| **e.pageY**             | **返回鼠标相对于文档页面的 Y 坐标**                             |
| **e.screenX**           | **返回鼠标相对于电脑屏幕的 X 坐标**                             |
| **e.screenY**           | **返回鼠标相对于电脑屏幕的 Y 坐标**                             |
| **e.keyCode**           | **返回该键的 ASCII 值**                                         |

- **e.keyCode 返回的 ASCII 码，onkeydown 和 onkeyup 不区分字母大小写，onkeypress 区分字母大小写**

### innerText

**从起始位置到终止位置的内容，但它去除 html 标签，同时空格和换行也会去掉**

```
element.innerText
```

### innerHTML

**从起始位置到终止位置的内容，包括 html 标签，同时保留空格和换行**

```
element.innerHTML
```

### 修改元素属性

```
元素.属性 = '' //自带的
```

> **H5 新增自定义属性：**
>
> ```
> element.dataset.属性
> element.dataset['属性']
> ```
>
> - **H5 规定所有自定义属性以 data-开头**
> - **dataset 是一个存放了所有以 data-开头的自定义属性集合**

### 修改样式属性

```
element.style.css样式 = ''
element.className = ''
```

- **JS 里面的样式采取驼峰命名法 比如 fontSize、backgroundColor**
- **JS 修改 style 样式操作，产生的是行内样式，css 权重比较高**
- **className 会直接更改元素的类名，会覆盖原先的类名**

### getAttribute

**获取自定义的属性**

```
element.getAttribute('属性');
```

### setAttribute

**修改自定义属性**

```
element.setAttribute('属性','值');
```

### removeAttribute

**移除自定义属性**

```
element.removeAttribute('属性','值');
```

### 节点

#### parentNode

**获取元素的父级节点**

```
element.parentNode
```

- **返回最近的一个父节点**
- **如果指定的节点没有父节点则返回 null**

#### childNodes

**获取元素的子级节点**

```
element.childNodes
```

- **返回值里面包含了所有的子节点，包括元素节点，文本节点**

#### children

**获取元素的子级节点**

```
element.children
```

- **获取所有的子元素节点**

#### firstChild

**返回第一个子节点**

```
element.firstchild
```

- **返回所有的节点，找不到则返回 null**

#### firstElementChild

**返回第一个子元素节点**

```
element.firstElementChild
```

- **返回子元素节点，找不到则返回 null**

#### lastChild

**返回最后一个子节点**

```
element.lastChild
```

- **返回所有的节点，找不到则返回 null**

#### lastElementChild

**返回最后一个子元素节点**

```
element.lastElementChild
```

- **返回子元素节点，找不到则返回 null**

#### nextSibling

**返回当前元素的下一个兄弟节点**

```
element.nextSibling
```

- **下一个兄弟节点包含元素节点或者文本节点等**

#### nextElementSibling

**返回当前元素的下一个兄弟节点**

```
element.nextElementSibling
```

- **下一个兄弟元素节点**

#### previousSibling

**返回当前元素的上一个兄弟节点**

```
element.previousSibling
```

- **上一个兄弟节点包含元素节点或者文本节点等**

#### previousElementSibling

**返回当前元素的上一个兄弟节点**

```
element.previousElementSibling
```

- **上一个兄弟元素节点**

#### createElement

**创建元素节点**

```
document.createElement('tagName')
```

#### appendChild

**添加元素节点**

```
node.appendChild(child)
```

- **将节点添加到指定父节点的子节点列表末尾**

#### insertBefore

**添加元素节点**

```
node.insertBefore(child,指定元素)
```

- **将节点添加到父节点的指定子节点前面**

#### removeChild

**删除元素节点**

```
node.removeChild(child)
```

- **删除一个子结点，返回删除的节点**

#### cloneNode

**克隆节点**

```
node.cloneNode()
```

- **如果括号参数为空或者为 false，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点、**
- **如果括号参数为 true，则是深度拷贝，会复制节点本身以及里面的所有子节点**

### write

```
document.write()
```

- **直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘**

### offset

**偏移量**

- **获取元素距离带有定位父元素的位置**
- **获取元素自身的大小**
- **返回的数值不带单位**

| **属性**                 | **作用**                                                           |
| ------------------------ | ------------------------------------------------------------------ |
| **element.offsetParent** | **返回作为该元素带有定位的父级元素 如果父级都没有定位则返回 body** |
| **element.offsetTop**    | **返回元素相对带有定位父元素上方的偏移**                           |
| **element.offsetLeft**   | **返回元素相对带有定位父元素左边框的偏移**                         |
| **element.offsetWidth**  | **返回自身包括 padding、边框、内容区的宽度，返回数值不带单位**     |
| **element.offsetHeight** | **返回自身包括 padding、边框、内容区的高度，返回数值不带单位**     |

### client

**可视区**

| **属性**                 | **作用**                                                           |
| ------------------------ | ------------------------------------------------------------------ |
| **element.clientTop**    | **返回元素上边框的大小**                                           |
| **element.clientLeft**   | **返回元素左边框的大小**                                           |
| **element.clientWidth**  | **返回自身包括 padding、内容区的宽度，不含边框，返回数值不带单位** |
| **element.clientHeight** | **返回自身包括 padding、内容区的高度，不含边框，返回数值不带单位** |

### scroll

**滚动**

| **属性**                 | **作用**                                           |
| ------------------------ | -------------------------------------------------- |
| **element.scrollTop**    | **返回被卷去的上侧距离，返回数值不带单位**         |
| **element.scrollLeft**   | **返回被卷去的左侧距离，返回数值不带单位**         |
| **element.scrollWidth**  | **返回自身实际的宽度，不含边框，返回数值不带单位** |
| **element.scrollHeight** | **返回自身实际的宽度，不含边框，返回数值不带单位** |

## BOM

### 事件

| **事件**             | **触发条件**                                                                                             |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| **onload**           | **窗口加载事件。当文档内容完全加载完成会触发该事件（包括图像、脚本文件、CSS 文件等），就调用的处理函数** |
| **DOMContentLoaded** | **窗口加载事件。当文档内容完全加载完成会触发该事件（不包括图像、flash、CSS 文件等），就调用的处理函数**  |
| **onresize**         | **窗口大小变化触发**                                                                                     |

| **事件对象属性方法**  | **说明**           |
| --------------------- | ------------------ |
| **window.innerWidth** | **当前屏幕的宽度** |

### setTimeout

**定时器**

```
window.setTimeout(调用函数,[延迟的毫秒数])
```

- **执行一次调用函数**
- **window 可以省略**
- **调用函数可以直接写函数，或者写函数名或者采取字符串'函数名()'三种形式**
- **延迟的毫秒数省略默认时 0**
- **定时器可以赋值给一个标识符**

### clearTimeout

**停止定时器**

```
window.clearTimeout(timeoutID)
```

### setInterval

**定时器**

```
window.setInterval(调用函数,[延迟的毫秒数])
```

- **反复执行调用函数**
- **window 可以省略**
- **调用函数可以直接写函数，或者写函数名或者采取字符串'函数名()'三种形式**
- **延迟的毫秒数省略默认时 0**
- **定时器可以赋值给一个标识符**

### clearInterval

**停止定时器**

```
window.clearInterval(timeoutID)
```

### location

| **对象属性**          | **返回值**                          |
| --------------------- | ----------------------------------- |
| **location.href**     | **获取或设置 整个 URL**             |
| **location.host**     | **返回主机（域名）**                |
| **location.port**     | **返回端口号 如果未写返回空字符串** |
| **location.pathname** | **返回路径**                        |
| **location.search**   | **返回参数**                        |
| **location.hash**     | **返回片段 #后面内容**              |

| **对象方法**           | **返回值**                                         |
| ---------------------- | -------------------------------------------------- |
| **location.assign()**  | **跟 href 一样，可以跳转页面**                     |
| **location.replace()** | **替换当前页面，以为不记录历史，所以不能后退页面** |
| **location.reload()**  | **重新加载页面，相当于刷新按钮**                   |

### navigator

### history

| **对象方法**          | **作用**                                                         |
| --------------------- | ---------------------------------------------------------------- |
| **history.back()**    | **可以后退功能**                                                 |
| **history.forward()** | **前进功能**                                                     |
| **history.go(参数)**  | **前进后退功能 参数如果是 1 前进 1 个页面如果是-1 后退一个页面** |
