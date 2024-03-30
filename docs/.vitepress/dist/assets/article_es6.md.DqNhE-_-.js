import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.ClEHkwpW.js";const b=JSON.parse('{"title":"ES6","description":"","frontmatter":{},"headers":[],"relativePath":"article/es6.md","filePath":"article/es6.md"}'),e={name:"article/es6.md"},l=p(`<h1 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-label="Permalink to &quot;ES6&quot;">​</a></h1><h2 id="let" tabindex="-1">let <a class="header-anchor" href="#let" aria-label="Permalink to &quot;let&quot;">​</a></h2><p><strong>变量</strong></p><ul><li><strong>变量不能重复声明</strong></li><li><strong>块级作用域</strong></li><li><strong>不存在变量提升（在变量声明前使用）</strong></li><li><strong>不影响作用域链</strong></li></ul><h2 id="const" tabindex="-1">const <a class="header-anchor" href="#const" aria-label="Permalink to &quot;const&quot;">​</a></h2><p><strong>常量</strong></p><ul><li><strong>一定要赋初始值</strong></li><li><strong>一般常量使用大写</strong></li><li><strong>常量值不能修改</strong></li><li><strong>块级作用域</strong></li><li><strong>对于数组和对象的元素修改，不算做对常量的修改，不会报错</strong></li></ul><h2 id="解构赋值" tabindex="-1">解构赋值 <a class="header-anchor" href="#解构赋值" aria-label="Permalink to &quot;解构赋值&quot;">​</a></h2><h3 id="数组的解构" tabindex="-1">数组的解构 <a class="header-anchor" href="#数组的解构" aria-label="Permalink to &quot;数组的解构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const ar = [&#39;my_name&#39;,&#39;my_age&#39;,&#39;my_sex&#39;];</span></span>
<span class="line"><span>let [name, age, sex] = ar;</span></span></code></pre></div><h3 id="对象的解构" tabindex="-1">对象的解构 <a class="header-anchor" href="#对象的解构" aria-label="Permalink to &quot;对象的解构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const person = {</span></span>
<span class="line"><span>    name: &#39;&#39;,</span></span>
<span class="line"><span>    age: &#39;&#39;,</span></span>
<span class="line"><span>    sex: &#39;&#39;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>let {name, age, sex} = person;</span></span></code></pre></div><h2 id="模板字符串" tabindex="-1">模板字符串 <a class="header-anchor" href="#模板字符串" aria-label="Permalink to &quot;模板字符串&quot;">​</a></h2><p><strong>ES6 引入新的声明字符串的方式 **</strong>\`\`**</p><ul><li><strong>内容可以直接出现换行符</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str = \`&lt;ul&gt;</span></span>
<span class="line"><span>&lt;li&gt;&lt;/li&gt;</span></span>
<span class="line"><span>   &lt;/ul&gt;\`;</span></span></code></pre></div><ul><li><strong>变量拼接</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let str = &#39;test&#39;;</span></span>
<span class="line"><span>let out = \`\${str} is successful\`;</span></span></code></pre></div><h2 id="对象的简化写法" tabindex="-1">对象的简化写法 <a class="header-anchor" href="#对象的简化写法" aria-label="Permalink to &quot;对象的简化写法&quot;">​</a></h2><p><strong>ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let name = &#39;&#39;;</span></span>
<span class="line"><span>let age = &#39;&#39;;</span></span>
<span class="line"><span>const person = {</span></span>
<span class="line"><span>    name,</span></span>
<span class="line"><span>    age,</span></span>
<span class="line"><span>    do(){ //省略: function</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="箭头函数" tabindex="-1">箭头函数 <a class="header-anchor" href="#箭头函数" aria-label="Permalink to &quot;箭头函数&quot;">​</a></h2><p>**ES6 允许使用****箭头（=&gt;）**定义函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let fn = function(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let fn = () =&gt; {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>this 是静态的，this 始终指向函数声明时所在作用于下的 this 的值</strong></li><li><strong>不能作为构造器实例化对象</strong></li><li><strong>不能使用 arguments 变量</strong></li><li><strong>当形参有且只有一个的时候，可以省略小括号</strong></li><li><strong>当代码体只有一条语句的时候，可以省略大括号，return 同时省略，语句的执行结果就是函数的返回值</strong></li></ul><h2 id="函数参数默认值" tabindex="-1">函数参数默认值 <a class="header-anchor" href="#函数参数默认值" aria-label="Permalink to &quot;函数参数默认值&quot;">​</a></h2><p><strong>ES6 允许给函数参数赋初始值</strong></p><ul><li><strong>形参初始值</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function add(a,b=0) {</span></span>
<span class="line"><span>    return a+b;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let result = add(1);</span></span></code></pre></div><ul><li><strong>与解构赋值结合</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function connect({host, username, password, port=&#39;80&#39;}){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>connect({</span></span>
<span class="line"><span>    host: &#39;&#39;,</span></span>
<span class="line"><span>    username: &#39;&#39;,</span></span>
<span class="line"><span>    password: &#39;&#39;,</span></span>
<span class="line"><span>    port: 3306</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="rest-参数" tabindex="-1">rest 参数 <a class="header-anchor" href="#rest-参数" aria-label="Permalink to &quot;rest 参数&quot;">​</a></h2><p><strong>ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function fn(...args){</span></span>
<span class="line"><span>    console.log(args);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="扩展运算符" tabindex="-1">扩展运算符 <a class="header-anchor" href="#扩展运算符" aria-label="Permalink to &quot;扩展运算符&quot;">​</a></h2><p><strong>...</strong> 扩展运算符能将数组转换为逗号分隔的参数序列</p><ul><li><strong>数组的合并</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const ar1 = [&#39;a&#39;,&#39;b&#39;];</span></span>
<span class="line"><span>cosnt ar2 = [&#39;c&#39;,&#39;d&#39;];</span></span>
<span class="line"><span>const ar3 = [...ar1,...ar2];</span></span></code></pre></div><h2 id="symbol" tabindex="-1">symbol <a class="header-anchor" href="#symbol" aria-label="Permalink to &quot;symbol&quot;">​</a></h2><p><strong>ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JS 语言的第七种数据类型，是一种类似字符串的数据类型</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//创建Symbol</span></span>
<span class="line"><span>let s = Symbol();</span></span>
<span class="line"><span>//添加标识的Symbol</span></span>
<span class="line"><span>let s = Symbol(&#39;id&#39;);</span></span></code></pre></div><ul><li><strong>Symbol 的值是唯一的，用来解决命名冲突的问题</strong></li><li><strong>Symbol 值不能与其他数据进行运算</strong></li><li><strong>Symbol 定义的对象属性不能使用 for...in 循环遍历，但是可以使用</strong> <code>Reflect.ownKeys</code>来获取对象的所有键名</li></ul><h2 id="迭代器" tabindex="-1">迭代器 <a class="header-anchor" href="#迭代器" aria-label="Permalink to &quot;迭代器&quot;">​</a></h2><p><strong>迭代器是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署</strong> <code>iterator</code>接口，就可以完成遍历操作</p><p><strong>工作原理</strong></p><ol><li><strong>创建一个指针对象，指向当前数据结构的起始位置</strong></li><li><strong>第一次调用对象的</strong> <code>next</code>方法，指针自动指向数据结构的第一个成员</li><li><strong>接下来不断调用</strong> <code>next</code>方法，指针一直往后移动，直到指向最后一个成员</li><li><strong>每调用</strong> <code>next</code>方法返回一个包含 <code>value</code>和 <code>done</code>属性的对象</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const arr = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let iterator = arr[Symbol.iterator]()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>iterator.next()</span></span></code></pre></div><h2 id="生成器" tabindex="-1">生成器 <a class="header-anchor" href="#生成器" aria-label="Permalink to &quot;生成器&quot;">​</a></h2><p><strong>异步编程函数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function one(){</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>console.log(111);</span></span>
<span class="line"><span>        iterator.next();</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function two(){</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>console.log(222);</span></span>
<span class="line"><span>        iterator.next();</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function three(){</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>console.log(333);</span></span>
<span class="line"><span>        iterator.next();</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function * gen(){</span></span>
<span class="line"><span>    yield one();</span></span>
<span class="line"><span>    yield two();</span></span>
<span class="line"><span>    yield three();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let iterator = gen();</span></span>
<span class="line"><span>iterator.next();</span></span></code></pre></div><h2 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;Promise&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const p = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>        resolve(&#39;success&#39;);</span></span>
<span class="line"><span>        // reject(&#39;error&#39;);</span></span>
<span class="line"><span>    }, 1000);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p.then((value) =&gt; {</span></span>
<span class="line"><span>    console.log(value);</span></span>
<span class="line"><span>}, (reason) =&gt; {</span></span>
<span class="line"><span>    console.log(reason);  </span></span>
<span class="line"><span>});</span></span></code></pre></div><blockquote><ul><li><strong>then 方法的返回结果是 Promise 对象，对象状态由回调函数的执行结果决定</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>p.then(value=&gt;{</span></span>
<span class="line"><span>return new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span>resolve(&#39;ok&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>})</span></span></code></pre></div></li><li><strong>链式调用</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>p.then(value=&gt;{}).then(value=&gt;{})</span></span></code></pre></div></li></ul></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const p = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    fs.readFile(&quot;./a.md&quot;,(err,data) =&gt; {</span></span>
<span class="line"><span>    resolve(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p.then(value =&gt; {</span></span>
<span class="line"><span>return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>        fs.readFile(&quot;./b.md&quot;,(err,data) =&gt; {</span></span>
<span class="line"><span>            resolve([value,data]);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}).then(value =&gt; {</span></span>
<span class="line"><span>return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>        fs.readFile(&quot;./c.md&quot;,(err,data) =&gt; {</span></span>
<span class="line"><span>            value.push(data);</span></span>
<span class="line"><span>            resolve(value);</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><code>catch</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>p.catch((reason) =&gt; {</span></span>
<span class="line"><span>console.warn(reason)                  </span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;Set&quot;">​</a></h2><p><strong>集合（成员的值唯一）</strong></p><table><thead><tr><th><strong>api</strong></th><th></th></tr></thead><tbody><tr><td><strong>size</strong></td><td><strong>元素个数</strong></td></tr><tr><td><strong>add</strong></td><td><strong>添加元素</strong></td></tr><tr><td><strong>delete</strong></td><td><strong>删除元素</strong></td></tr><tr><td><strong>has</strong></td><td><strong>检测元素</strong></td></tr><tr><td><strong>clear</strong></td><td><strong>清空元素</strong></td></tr></tbody></table><p><strong>数组去重</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr = [1,1,2,2,3]</span></span>
<span class="line"><span>let result = [...new Set(arr)] // [1,2,3]</span></span></code></pre></div><p><strong>交集</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let arr2 = [3,4,5]</span></span>
<span class="line"><span>let result = [...new Set(arr)].filter(item =&gt; {</span></span>
<span class="line"><span> let s2 = new Set(arr2);</span></span>
<span class="line"><span>    if(s2.has(item)){</span></span>
<span class="line"><span>return true</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 声明Map</span></span>
<span class="line"><span>let m = new Map();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//添加元素</span></span>
<span class="line"><span>m.set(&#39;a&#39;,b);</span></span>
<span class="line"><span>m.set(&#39;c&#39;,function(){</span></span>
<span class="line"><span>   console.log(1);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//size</span></span>
<span class="line"><span>m.size</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除</span></span>
<span class="line"><span>m.delete(&#39;a&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//获取</span></span>
<span class="line"><span>m.get(&#39;a&#39;)</span></span></code></pre></div><h2 id="class" tabindex="-1">Class <a class="header-anchor" href="#class" aria-label="Permalink to &quot;Class&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Phone{</span></span>
<span class="line"><span>constructor(brand, price){</span></span>
<span class="line"><span>this.brand=brand;</span></span>
<span class="line"><span>        this.price=price;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    call(){</span></span>
<span class="line"><span>        console.log(&quot;打电话&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let onePlus = new Phone(&quot;1+0&quot;, 2999)</span></span></code></pre></div><h3 id="静态成员" tabindex="-1">静态成员 <a class="header-anchor" href="#静态成员" aria-label="Permalink to &quot;静态成员&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Phone{</span></span>
<span class="line"><span>    static name = &#39;1+&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Phone.name);</span></span></code></pre></div><h3 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class SmartPhone extends Phone{</span></span>
<span class="line"><span>constuctor(brand, price, color, size){</span></span>
<span class="line"><span>super(brand, price);</span></span>
<span class="line"><span>        this.color = color;</span></span>
<span class="line"><span>        this.size =  size;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    photo(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    playGame(){</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const xiaomi = new SmartPhone(&#39;小米&#39;,799,&#39;黑色&#39;,&#39;4.7&#39;)</span></span></code></pre></div><h3 id="重写" tabindex="-1">重写 <a class="header-anchor" href="#重写" aria-label="Permalink to &quot;重写&quot;">​</a></h3><p><strong>同名函数只能重写无法调用父类方法</strong></p><h3 id="getter-和-setter" tabindex="-1">getter 和 setter <a class="header-anchor" href="#getter-和-setter" aria-label="Permalink to &quot;getter 和 setter&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Phone{</span></span>
<span class="line"><span>    get price(){</span></span>
<span class="line"><span>return 100;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    set price(new){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let s = new Phone();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>s.price = &#39;free&#39;</span></span></code></pre></div><h2 id="数值扩展" tabindex="-1">数值扩展 <a class="header-anchor" href="#数值扩展" aria-label="Permalink to &quot;数值扩展&quot;">​</a></h2><ul><li><code>Number.EPSILON</code>是 JS 表示的最小精度</li><li><strong>二进制 0b1010，八进制 0o777，十六进制 0xff</strong></li><li><code>Number.isFinite</code>检测一个数值是否为有限数</li><li><code>Number.isNaN</code>检测一个数值是否为 NaN</li><li><code>Number.parseInt\`\`Number.parseFloat</code>字符串转整数</li><li><code>Number.isInteger</code>判断一个数是否为整数</li><li><code>Math.trunc</code>将数字的小数部分抹掉</li><li><code>Math.sign</code>判断一个数到底为正数、负数、还是零</li></ul><h2 id="对象扩展" tabindex="-1">对象扩展 <a class="header-anchor" href="#对象扩展" aria-label="Permalink to &quot;对象扩展&quot;">​</a></h2><ul><li><code>Object.is</code>判断两个值是否完全相等</li><li><code>Object.assign</code>对象的合并</li><li><code>Object.setPrototypeOf</code>设置原型对象</li><li><code>Object.getPrototypeOf</code>获取原型对象</li></ul><h2 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h2><p><strong>模块功能主要由两个命令构成：</strong><code>export</code>和 <code>import</code></p><ul><li><code>export</code>命令用于规定模块的对外接口</li><li><code>import</code>命令用于输入其他模块提供的功能</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;module&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 分别暴露</span></span>
<span class="line"><span>export let a=1;</span></span>
<span class="line"><span>export function b(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 统一暴露</span></span>
<span class="line"><span>let a=1;</span></span>
<span class="line"><span>function b(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export {a,b};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 默认暴露</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    a:1,</span></span>
<span class="line"><span>    b(){</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 通用方式</span></span>
<span class="line"><span>import * as 别名 from &quot;./test.js&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 解构赋值形式</span></span>
<span class="line"><span>import {a,b} from &quot;./test.js&quot;</span></span>
<span class="line"><span>import {a as aa,b} from &quot;./test.js&quot;</span></span>
<span class="line"><span>import {default as c} from &quot;./test.js&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 简便形式 针对默认暴露</span></span>
<span class="line"><span>import c from &quot;./test.js&quot;</span></span></code></pre></div>`,85),t=[l];function i(o,c,r,d,h,g){return n(),a("div",null,t)}const m=s(e,[["render",i]]);export{b as __pageData,m as default};
