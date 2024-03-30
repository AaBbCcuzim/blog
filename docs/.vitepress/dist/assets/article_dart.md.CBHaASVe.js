import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.ClEHkwpW.js";const b=JSON.parse('{"title":"Dart","description":"","frontmatter":{},"headers":[],"relativePath":"article/dart.md","filePath":"article/dart.md"}'),e={name:"article/dart.md"},l=p(`<h1 id="dart" tabindex="-1">Dart <a class="header-anchor" href="#dart" aria-label="Permalink to &quot;Dart&quot;">​</a></h1><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p><strong>dart 是一个强大的脚本类语言，可以不预先定义变量类型，自动会类型推断</strong></p><p><strong>dart 中定义的变量可以通过</strong> <code>var</code>关键字，也可以通过类型来声明变量</p><h2 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h2><ul><li><code>final</code>和 <code>const</code>修饰符</li><li><code>const</code>值不变，一开始就得赋值</li><li><code>final</code>可以开始不赋值，只能赋值一次；而 <code>final</code>不仅有 <code>const</code>编译时常量的特性，最重要的是它是运行时常量，并且 <code>final</code>是惰性初始化，即在运行时第一次使用前才初始化</li></ul><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><h3 id="字符串类型" tabindex="-1">字符串类型 <a class="header-anchor" href="#字符串类型" aria-label="Permalink to &quot;字符串类型&quot;">​</a></h3><h4 id="字符串定义的几种方式" tabindex="-1">字符串定义的几种方式 <a class="header-anchor" href="#字符串定义的几种方式" aria-label="Permalink to &quot;字符串定义的几种方式&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var str = ‘abc’;</span></span>
<span class="line"><span>String str = &#39;abc&#39;;</span></span>
<span class="line"><span>String str = &#39;&#39;&#39;</span></span>
<span class="line"><span>abc</span></span>
<span class="line"><span>abc</span></span>
<span class="line"><span>&#39;&#39;&#39;;</span></span>
<span class="line"><span>String str = &quot;&quot;&quot;</span></span>
<span class="line"><span>    abc</span></span>
<span class="line"><span>abc</span></span>
<span class="line"><span>&quot;&quot;&quot;;</span></span></code></pre></div><h4 id="字符串的拼接" tabindex="-1">字符串的拼接 <a class="header-anchor" href="#字符串的拼接" aria-label="Permalink to &quot;字符串的拼接&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String str1 = &#39;hello&#39;;</span></span>
<span class="line"><span>String str2 = &#39;Dart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;$str1 $str2&quot;);</span></span>
<span class="line"><span>print(str1 + &quot; &quot; + str2);</span></span></code></pre></div><h3 id="数值类型" tabindex="-1">数值类型 <a class="header-anchor" href="#数值类型" aria-label="Permalink to &quot;数值类型&quot;">​</a></h3><h4 id="int" tabindex="-1">int <a class="header-anchor" href="#int" aria-label="Permalink to &quot;int&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>int a = 1;</span></span></code></pre></div><h4 id="double" tabindex="-1">double <a class="header-anchor" href="#double" aria-label="Permalink to &quot;double&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>double b = 1.0;</span></span></code></pre></div><h3 id="布尔类型" tabindex="-1">布尔类型 <a class="header-anchor" href="#布尔类型" aria-label="Permalink to &quot;布尔类型&quot;">​</a></h3><h4 id="bool" tabindex="-1">bool <a class="header-anchor" href="#bool" aria-label="Permalink to &quot;bool&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>bool flag = true;</span></span></code></pre></div><h3 id="数据类型-1" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型-1" aria-label="Permalink to &quot;数据类型&quot;">​</a></h3><h4 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var l = [&quot;a&quot;,1,true];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(l.length);</span></span>
<span class="line"><span>print(l[0]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var l1 = &lt;int&gt;[1,2,3];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var l2 = [];</span></span>
<span class="line"><span>l2.add(1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var l3 = new List(); //新版本无法使用</span></span>
<span class="line"><span>var l4 = List.filled(length, fill); //无法增加数据，无法修改长度</span></span></code></pre></div><h4 id="maps" tabindex="-1">Maps <a class="header-anchor" href="#maps" aria-label="Permalink to &quot;Maps&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var person = {</span></span>
<span class="line"><span>&quot;name&quot;: &quot;Tom&quot;,</span></span>
<span class="line"><span>    &quot;age&quot;: 20,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(person);</span></span>
<span class="line"><span>print(person[&quot;name&quot;]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var p = new Map();</span></span>
<span class="line"><span>p[&quot;name&quot;] = &quot;Tom&quot;;</span></span></code></pre></div><h3 id="判断类型" tabindex="-1">判断类型 <a class="header-anchor" href="#判断类型" aria-label="Permalink to &quot;判断类型&quot;">​</a></h3><h4 id="is" tabindex="-1">is <a class="header-anchor" href="#is" aria-label="Permalink to &quot;is&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var str = &quot;abc&quot;;</span></span>
<span class="line"><span>print(str is String);</span></span></code></pre></div><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><h3 id="算术运算符" tabindex="-1">算术运算符 <a class="header-anchor" href="#算术运算符" aria-label="Permalink to &quot;算术运算符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>a+b // 加</span></span>
<span class="line"><span>a-b // 减</span></span>
<span class="line"><span>a*b // 乘</span></span>
<span class="line"><span>a/b // 除</span></span>
<span class="line"><span>a%b // 取余</span></span>
<span class="line"><span>a~/b // 取整</span></span></code></pre></div><h3 id="关系运算符" tabindex="-1">关系运算符 <a class="header-anchor" href="#关系运算符" aria-label="Permalink to &quot;关系运算符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>a==b // 等于</span></span>
<span class="line"><span>a!=b // 不等</span></span>
<span class="line"><span>a&gt;b // 大于</span></span>
<span class="line"><span>a&lt;b // 小于</span></span>
<span class="line"><span>a&gt;=b // 大于等于</span></span>
<span class="line"><span>a&lt;=b // 小于等于</span></span></code></pre></div><h3 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>! // 取反</span></span>
<span class="line"><span>&amp;&amp; // and</span></span>
<span class="line"><span>|| // or</span></span></code></pre></div><h3 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-label="Permalink to &quot;赋值运算符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>a = 1</span></span>
<span class="line"><span>a ??= 1 // 表示a为空的话把1赋值给a</span></span>
<span class="line"><span>a += 1</span></span>
<span class="line"><span>a -= 1</span></span>
<span class="line"><span>a *= 1</span></span>
<span class="line"><span>a /= 1</span></span>
<span class="line"><span>a %= 1</span></span>
<span class="line"><span>a ~/= 1</span></span></code></pre></div><h3 id="条件运算符" tabindex="-1">条件运算符 <a class="header-anchor" href="#条件运算符" aria-label="Permalink to &quot;条件运算符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>if(){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}else{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>switch(){</span></span>
<span class="line"><span>    case &quot;&quot;:</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>       break;</span></span>
<span class="line"><span>    defalut:</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>       break;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a = flag ? 1 : 0; // 三目运算符</span></span>
<span class="line"><span></span></span>
<span class="line"><span>b = a ?? 10 // a为空b为1，a不为空b为a</span></span></code></pre></div><h3 id="类型转换" tabindex="-1">类型转换 <a class="header-anchor" href="#类型转换" aria-label="Permalink to &quot;类型转换&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>toString() // num -&gt; string</span></span>
<span class="line"><span>int.parse() // int -&gt; string</span></span>
<span class="line"><span>double.parse() // double -&gt; string</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>str.isEmpty // 判断字符串是否为空</span></span>
<span class="line"><span>a.isNaN</span></span></code></pre></div><h2 id="循环结构" tabindex="-1">循环结构 <a class="header-anchor" href="#循环结构" aria-label="Permalink to &quot;循环结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for(int i=1;i&lt;=10;i++){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>do{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}while();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>continue;</span></span></code></pre></div><h2 id="list-1" tabindex="-1">List <a class="header-anchor" href="#list-1" aria-label="Permalink to &quot;List&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th><strong>属性</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td><strong>length</strong></td><td><strong>长度</strong></td></tr><tr><td><strong>reversed</strong></td><td><strong>含义</strong></td></tr><tr><td><strong>isEmpty</strong></td><td><strong>是否为空</strong></td></tr><tr><td><strong>isNotEmpty</strong></td><td><strong>是否不为空</strong></td></tr></tbody></table><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><table><thead><tr><th><strong>方法</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td><strong>add()</strong></td><td><strong>增加</strong></td></tr><tr><td><strong>addAll()</strong></td><td><strong>拼接数组</strong></td></tr><tr><td><strong>indexOf()</strong></td><td><strong>查找 传入具体值</strong></td></tr><tr><td><strong>remove()</strong></td><td><strong>删除 传入具体值</strong></td></tr><tr><td><strong>removeAt()</strong></td><td><strong>删除 传入具体值索引</strong></td></tr><tr><td><strong>fillRange(start,end,value)</strong></td><td><strong>修改</strong></td></tr><tr><td><strong>insert(index,value)</strong></td><td><strong>指定位置插入</strong></td></tr><tr><td><strong>insertAll(index,list)</strong></td><td><strong>指定位置插入 List</strong></td></tr><tr><td><strong>toList()</strong></td><td><strong>其他类型转换成 List</strong></td></tr><tr><td><strong>join()</strong></td><td><strong>List 转换成字符串</strong></td></tr><tr><td><strong>spilt()</strong></td><td><strong>字符串转换成 List</strong></td></tr><tr><td><strong>forEach()</strong></td><td><strong>（ Set,Map 类似）</strong></td></tr><tr><td><strong>map()</strong></td><td><strong>修改 List （ Set,Map 类似）</strong></td></tr><tr><td><strong>where()</strong></td><td><strong>过滤 List（ Set,Map 类似）</strong></td></tr><tr><td><strong>any</strong></td><td><strong>判断集合内容（有一个即可）（ Set,Map 类似）</strong></td></tr><tr><td><strong>every</strong></td><td><strong>判断集合内容（需全部满足）（ Set,Map 类似）</strong></td></tr></tbody></table><h2 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;Set&quot;">​</a></h2><p><strong>Set 是没有顺序且不能重复的集合，所以不能通过索引去获取值</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//去重</span></span>
<span class="line"><span>List a = [1,1,2];</span></span>
<span class="line"><span>var b = new Set();</span></span>
<span class="line"><span>b.addAll(a);</span></span>
<span class="line"><span>var c = b.toList();</span></span></code></pre></div><h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h2><h3 id="属性-1" tabindex="-1">属性 <a class="header-anchor" href="#属性-1" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th><strong>属性</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td><strong>keys</strong></td><td><strong>获取所有的 key 值</strong></td></tr><tr><td><strong>values</strong></td><td><strong>获取所有的 value 值</strong></td></tr><tr><td><strong>isEmpty</strong></td><td><strong>是否为空</strong></td></tr><tr><td><strong>isNotEmpty</strong></td><td><strong>是否不为空</strong></td></tr></tbody></table><h3 id="方法-1" tabindex="-1">方法 <a class="header-anchor" href="#方法-1" aria-label="Permalink to &quot;方法&quot;">​</a></h3><table><thead><tr><th><strong>方法</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td><strong>addAll()</strong></td><td><strong>增加</strong></td></tr><tr><td><strong>remove(key)</strong></td><td><strong>删除</strong></td></tr><tr><td><strong>containsValue()</strong></td><td><strong>查看是否有某映射值</strong></td></tr></tbody></table><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>int f();</span></span>
<span class="line"><span>String f();</span></span>
<span class="line"><span>void f();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可选参数</span></span>
<span class="line"><span>void f(int a,[int b]){ // []内为可选参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>// 默认参数</span></span>
<span class="line"><span>void f(int a,[int b=1]){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 命名参数</span></span>
<span class="line"><span>void f(int a,{int b}){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>f(1,b:2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 箭头函数</span></span>
<span class="line"><span>list.foreach((value){</span></span>
<span class="line"><span>print();</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>list.foreach((value)=&gt;print());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 匿名函数</span></span>
<span class="line"><span>var f = (){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自执行方法</span></span>
<span class="line"><span>((){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//闭包</span></span>
<span class="line"><span>fn(){</span></span>
<span class="line"><span>    var a = 123;</span></span>
<span class="line"><span>    return(){</span></span>
<span class="line"><span>        a++;</span></span>
<span class="line"><span>        print(a);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var b = fn();</span></span>
<span class="line"><span>b();</span></span>
<span class="line"><span>b();</span></span></code></pre></div><h2 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h2><p><strong>Dart 是一门使用类和单继承的面向对象语言，所有的对象都是类的实例，并且所有的类都是 Object 的子类</strong></p><h3 id="类的创建和使用" tabindex="-1">类的创建和使用 <a class="header-anchor" href="#类的创建和使用" aria-label="Permalink to &quot;类的创建和使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>    String name = &quot;Tom&quot;;</span></span>
<span class="line"><span>    int age = 23;</span></span>
<span class="line"><span>    void getInfo(){</span></span>
<span class="line"><span>print(&quot;$name-$age&quot;);</span></span>
<span class="line"><span>        print(&quot;$this.name&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void main(){</span></span>
<span class="line"><span>Person p = new Person();</span></span>
<span class="line"><span>    print(p.name);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="类的默认构造函数" tabindex="-1">类的默认构造函数 <a class="header-anchor" href="#类的默认构造函数" aria-label="Permalink to &quot;类的默认构造函数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>    String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>Person(String name,int age){</span></span>
<span class="line"><span>this.name = name;</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 简写</span></span>
<span class="line"><span>    // Person(this.name,this.age);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="类的命名构造函数" tabindex="-1">类的命名构造函数 <a class="header-anchor" href="#类的命名构造函数" aria-label="Permalink to &quot;类的命名构造函数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>    String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>Person.new(){</span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person p = Person.new();</span></span></code></pre></div><h3 id="类的私有方法和私有属性" tabindex="-1">类的私有方法和私有属性 <a class="header-anchor" href="#类的私有方法和私有属性" aria-label="Permalink to &quot;类的私有方法和私有属性&quot;">​</a></h3><p><strong>Dart 和其他面向对象语言不一样，Dart 中没有</strong> <code>public\`\`private\`\`protected</code>这些访问修饰符，但可以使用 <code>_</code>把一个属性或者方法定义成私有</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Animal{</span></span>
<span class="line"><span>String _name;</span></span>
<span class="line"><span>    void _run(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="类中的-getter-和-setter-修饰符" tabindex="-1">类中的 getter 和 setter 修饰符 <a class="header-anchor" href="#类中的-getter-和-setter-修饰符" aria-label="Permalink to &quot;类中的 getter 和 setter 修饰符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Rect{</span></span>
<span class="line"><span>int height;</span></span>
<span class="line"><span>    int width;</span></span>
<span class="line"><span>    get area{</span></span>
<span class="line"><span>        return this.height * this.width;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    set areaH(value){</span></span>
<span class="line"><span>        this.height = value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Rect r = new Rect();</span></span>
<span class="line"><span>print(r.area);</span></span>
<span class="line"><span>r.areaH = 1;</span></span></code></pre></div><h3 id="类中的初始化列表" tabindex="-1">类中的初始化列表 <a class="header-anchor" href="#类中的初始化列表" aria-label="Permalink to &quot;类中的初始化列表&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Rect{</span></span>
<span class="line"><span>int height;</span></span>
<span class="line"><span>    int width;</span></span>
<span class="line"><span>    Rect():height=1,width=2{</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="类中的静态成员" tabindex="-1">类中的静态成员 <a class="header-anchor" href="#类中的静态成员" aria-label="Permalink to &quot;类中的静态成员&quot;">​</a></h3><ul><li><strong>使用</strong> <code>static</code>关键字来实现类级别的变量和函数</li><li><strong>静态方法不能访问非静态成员，非静态方法可以访问静态成员</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>static String name = &#39;张三&#39;;</span></span>
<span class="line"><span>    static void show(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>print(Person.name);</span></span>
<span class="line"><span>    Person.show();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="类与对象操作符" tabindex="-1">类与对象操作符 <a class="header-anchor" href="#类与对象操作符" aria-label="Permalink to &quot;类与对象操作符&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    Person(this.name,this.age);</span></span>
<span class="line"><span>    void printInfo(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>    // 条件运算</span></span>
<span class="line"><span>    Person p;</span></span>
<span class="line"><span>    p?.printInfo(); // 不会报错</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 类型判断</span></span>
<span class="line"><span>    print(p is Person);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 类型转换</span></span>
<span class="line"><span>    var p1;</span></span>
<span class="line"><span>    p1 = &#39;&#39;;</span></span>
<span class="line"><span>    (p1 as Person).printInfo();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 级联操作</span></span>
<span class="line"><span>    p..name=&quot;李四&quot;</span></span>
<span class="line"><span>     ..age=30</span></span>
<span class="line"><span>     ..printInfo();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="类的继承" tabindex="-1">类的继承 <a class="header-anchor" href="#类的继承" aria-label="Permalink to &quot;类的继承&quot;">​</a></h3><ul><li><strong>子类使用</strong> <code>extends</code>关键词来继承父类</li><li><strong>子类会继承父类里面可见的属性和方法，但是不会继承构造函数</strong></li><li><strong>子类能覆写父类的方法（建议加上</strong> <code>@override</code>注解）</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>String name;</span></span>
<span class="line"><span>    int age;</span></span>
<span class="line"><span>    Person(this.name,this.age);</span></span>
<span class="line"><span>    Person.new(this.name,this.age);</span></span>
<span class="line"><span>    void printInfo(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    run(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Web extends Person {</span></span>
<span class="line"><span>    Web(String name, num age):super(name,age){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //Web(String name, num age):super.new(name,age){</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>    //}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    run(){</span></span>
<span class="line"><span>        super.work(); // 子类调用父类的方法</span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="抽象类" tabindex="-1">抽象类 <a class="header-anchor" href="#抽象类" aria-label="Permalink to &quot;抽象类&quot;">​</a></h3><ul><li><strong>Dart 抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口</strong><ul><li><strong>抽象类通过</strong> <code>abstract</code>关键字来定义</li><li><strong>Dart 中的抽象方法不能用 abstract 声明，Dart 中没有方法体的方法我们称为抽象方法</strong></li><li><strong>如果子类继承抽象类必须得实现里面的抽象方法</strong></li><li><strong>如果抽象类当作接口实现的话必须得实现抽象类里面定义的所有属性和方法</strong></li><li><strong>抽象类不能被实例化，只有继承它的子类可以</strong></li></ul></li><li><code>extends</code>抽象类和 <code>implements</code>的区别 <ul><li><strong>如果要复用抽象类里面的方法，并且要用抽象方法约束自类的话我们就用 extends 继承抽象类</strong></li><li><strong>如果只是把抽象类当作标准的话我们就用 implements 实现抽象类</strong></li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>abstract class Animal{</span></span>
<span class="line"><span>    eat(); // 抽象方法</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Dog extends Animal{</span></span>
<span class="line"><span>    @override</span></span>
<span class="line"><span>    eat(){</span></span>
<span class="line"><span>print(&#39;&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    printInfo(){</span></span>
<span class="line"><span>print(&#39;&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="多态" tabindex="-1">多态 <a class="header-anchor" href="#多态" aria-label="Permalink to &quot;多态&quot;">​</a></h3><ul><li><strong>允许将子类类型的指针赋值给父类类型的指针，同一个函数调用会有不同的执行效果</strong></li><li><strong>子类的实例赋值给父类的引用</strong></li><li><strong>多态就是父类定义一个方法不去实现，让继承它的子类去实现，每个子类有不同的表现</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Animal dog = new Dog();</span></span>
<span class="line"><span>Animal cat = new Cat();</span></span></code></pre></div><h3 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-label="Permalink to &quot;接口&quot;">​</a></h3><ul><li><strong>dart 的接口没有 interface 关键字定义接口，而是普通类或抽象类都可以作为接口被实现</strong></li><li><strong>但是 dart 的接口有点奇怪，如果实现的类是普通类，会将普通类和抽象中的属性的方法全部都要覆写一遍</strong></li><li><strong>而因为抽象类可以定义抽象方法，普通类不可以，所以一般如果要实现像 Java 接口那样的方式，一般会使用抽象类</strong></li><li><strong>建议使用抽象类定义接口</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>abstract class DB{</span></span>
<span class="line"><span>add();</span></span>
<span class="line"><span>    save();</span></span>
<span class="line"><span>    delete();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Mysql implements DB{</span></span>
<span class="line"><span>@overrride</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Mssql implements DB{</span></span>
<span class="line"><span>@overrride</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="一个类实现多个接口" tabindex="-1">一个类实现多个接口 <a class="header-anchor" href="#一个类实现多个接口" aria-label="Permalink to &quot;一个类实现多个接口&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>abstract class A {</span></span>
<span class="line"><span>  printA();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>abstract class B {</span></span>
<span class="line"><span>  printB();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class C implements A, B {</span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  printA() {</span></span>
<span class="line"><span>    print(&#39;A&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  @override</span></span>
<span class="line"><span>  printB() {</span></span>
<span class="line"><span>    print(&#39;B&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="mixins" tabindex="-1">mixins <a class="header-anchor" href="#mixins" aria-label="Permalink to &quot;mixins&quot;">​</a></h3><ul><li><strong>作为 mixins 的类只能继承自 Object，不能继承其他类</strong></li><li><strong>作为 mixins 的类不能有构造函数</strong></li><li><strong>一个类可以 mixins 多个 mixins 类</strong></li><li><strong>mixins 绝不是继承，也不是接口，而是一种全新的特性</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class A{</span></span>
<span class="line"><span>void printA(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class B{</span></span>
<span class="line"><span>    void printB(){</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class C with A,B{</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="泛型" tabindex="-1">泛型 <a class="header-anchor" href="#泛型" aria-label="Permalink to &quot;泛型&quot;">​</a></h2><h3 id="泛型方法" tabindex="-1">泛型方法 <a class="header-anchor" href="#泛型方法" aria-label="Permalink to &quot;泛型方法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>T getData&lt;T&gt;(T value){</span></span>
<span class="line"><span>return value;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>    getData&lt;int&gt;(21);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="泛型类" tabindex="-1">泛型类 <a class="header-anchor" href="#泛型类" aria-label="Permalink to &quot;泛型类&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class myList&lt;T&gt; {</span></span>
<span class="line"><span>    List list = &lt;T&gt;[];</span></span>
<span class="line"><span>    void add(T value){</span></span>
<span class="line"><span>        this.list.add（value);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>    MyList l = new MyList&lt;String&gt;();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="泛型接口" tabindex="-1">泛型接口 <a class="header-anchor" href="#泛型接口" aria-label="Permalink to &quot;泛型接口&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>abstract class Cache&lt;T&gt;{</span></span>
<span class="line"><span>void setByKey(Strin key,T value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class FileCache&lt;T&gt; implements Cache&lt;T&gt;{</span></span>
<span class="line"><span>@override</span></span>
<span class="line"><span>    void setBykey(Strin key,T value){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="库" tabindex="-1">库 <a class="header-anchor" href="#库" aria-label="Permalink to &quot;库&quot;">​</a></h2><ul><li><strong>自定义库</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;x/x.dart&#39;</span></span></code></pre></div></li><li><strong>系统内置库</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;dart:math&#39;;</span></span>
<span class="line"><span>import &#39;dart:io&#39;;</span></span>
<span class="line"><span>import &#39;dart:convert&#39;;</span></span></code></pre></div></li><li><strong>Pub 包管理系统中的库</strong><a href="https://pub.dev/packages" target="_blank" rel="noreferrer">https://pub.dev/packages</a><a href="https://pub.flutter-io.cn/packages" target="_blank" rel="noreferrer">https://pub.flutter-io.cn/packages</a><a href="https://pub.dartlang.org/fluter/" target="_blank" rel="noreferrer">https://pub.dartlang.org/fluter/</a><ul><li><strong>需要在自己项目根目录新建一个</strong> <code>pubspec.yaml</code></li><li><strong>在</strong> <code>pubspec.yaml</code>文件中配置名称、描述、依赖等信息</li><li><strong>然后运行</strong> <code>pub get</code>获取包下载到本地</li><li><strong>项目中引入库</strong> <code>import &#39;package:http.dart&#39; as http;</code></li></ul></li></ul><h3 id="部分引入" tabindex="-1">部分引入 <a class="header-anchor" href="#部分引入" aria-label="Permalink to &quot;部分引入&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;x/x.dart&#39; show getAge; // 只有getAge能使用</span></span>
<span class="line"><span>import &#39;x/x.dart&#39; hide getName; // 只有getAge无法使用</span></span></code></pre></div><h3 id="延迟加载" tabindex="-1">延迟加载 <a class="header-anchor" href="#延迟加载" aria-label="Permalink to &quot;延迟加载&quot;">​</a></h3><ul><li><strong>也称为懒加载，可以在需要的时候再进行加载，可以减少 APP 的启动时间</strong></li><li><strong>懒加载使用 deferred as 关键字来指定，如下</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import &#39;package:deferred/hello.dart&#39; deferred as hello;</span></span></code></pre></div></li><li><strong>当需要使用的时候，需要使用</strong> <code>loadLibrary()</code>方法来加载<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>greet() async{</span></span>
<span class="line"><span>await hello.loadLibrary();</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h2 id="null-safety-以及可空类型" tabindex="-1">Null safety 以及可空类型 <a class="header-anchor" href="#null-safety-以及可空类型" aria-label="Permalink to &quot;Null safety 以及可空类型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>int a = 1;</span></span>
<span class="line"><span>a = null; // 不被允许</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int? a = 1;</span></span>
<span class="line"><span>a = null; // 允许</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String? get(){</span></span>
<span class="line"><span>reutrn null;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>String? str = &#39;is&#39;;</span></span>
<span class="line"><span>str = null;</span></span>
<span class="line"><span>print(str!.length); // ! 类型断言：如果str不等于null会打印str的长度，如果等于null会抛出异常</span></span></code></pre></div><h2 id="late" tabindex="-1">late <a class="header-anchor" href="#late" aria-label="Permalink to &quot;late&quot;">​</a></h2><p><strong>延迟初始化</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Person{</span></span>
<span class="line"><span>    late String name;</span></span>
<span class="line"><span>    late int age;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    void setName(String name){</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="required" tabindex="-1">required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;required&quot;">​</a></h2><p><strong>用于允许根据需要标记任何命名参数（函数或类），使得他们不为空，因为可选参数中必须有个 required</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>String printUserInfo(String username, {required int age,required String sex}){</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>printUserInfo(&#39;Tom&#39;,age: 20,sex: &#39;男&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="identical" tabindex="-1">identical <a class="header-anchor" href="#identical" aria-label="Permalink to &quot;identical&quot;">​</a></h2><p><strong>检查两个引用是否指向同一个对象</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var o1 = Object();</span></span>
<span class="line"><span>var o2 = Object();</span></span>
<span class="line"><span>print(identical(o1,o2)); // false</span></span>
<span class="line"><span>print(identical(o1,o1)); // true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var o1 = const Object();</span></span>
<span class="line"><span>var o2 = const Object();</span></span>
<span class="line"><span>print(identical(o1,o2)); // true</span></span>
<span class="line"><span>print(identical(o1,o1)); // true</span></span>
<span class="line"><span>// const关键字在多个地方创建相同的对象的时候，内存中只保留了一个对象</span></span></code></pre></div><h2 id="常量构造函数" tabindex="-1">常量构造函数 <a class="header-anchor" href="#常量构造函数" aria-label="Permalink to &quot;常量构造函数&quot;">​</a></h2><ul><li><strong>常量构造函数需以 const 关键字修饰</strong></li><li><strong>const 构造函数必须用于成员变量都是 final 的类</strong></li><li><strong>如果实例化时不加 const 修饰符，即使调用的是常量构造函数，实例化的对象也不是常量实体</strong></li><li><strong>实例化常量构造函数的时候，多个地方创建这个对象，如果传入的值相同，只会保留一个对象</strong></li><li><strong>Flutter 中 const 修饰不仅仅是节省组件构建时的内存开销，Fluter 在需要重新构组件</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Container{</span></span>
<span class="line"><span>    final int width;</span></span>
<span class="line"><span>    final int height;</span></span>
<span class="line"><span>    const Container({required this.width,required this.height});</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main(){</span></span>
<span class="line"><span>    var c1 = const Container(width:100,height:100);</span></span>
<span class="line"><span>    var c2 = const Container(width:100,height:100);</span></span>
<span class="line"><span>    print(identical(c1,c2)); // true</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,122),t=[l];function i(c,o,r,d,h,g){return n(),a("div",null,t)}const v=s(e,[["render",i]]);export{b as __pageData,v as default};
