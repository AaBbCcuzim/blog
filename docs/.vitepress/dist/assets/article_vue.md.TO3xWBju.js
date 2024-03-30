import{_ as l,c as t,m as s,t as e,a as n,a4 as a,o as i}from"./chunks/framework.ClEHkwpW.js";const G=JSON.parse('{"title":"VUE","description":"","frontmatter":{},"headers":[],"relativePath":"article/vue.md","filePath":"article/vue.md"}'),o={name:"article/vue.md"},c=a('<h1 id="vue" tabindex="-1">VUE <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;VUE&quot;">​</a></h1><p><strong>vue2 文档链接：</strong><a href="https://v2.cn.vuejs.org/v2/api/" target="_blank" rel="noreferrer">vue2</a></p><h2 id="插值语法" tabindex="-1">插值语法 <a class="header-anchor" href="#插值语法" aria-label="Permalink to &quot;插值语法&quot;">​</a></h2><p><strong>用于解析标签体内容</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{{ }}</span></span></code></pre></div>',5),r=a(`<h2 id="指令语法" tabindex="-1">指令语法 <a class="header-anchor" href="#指令语法" aria-label="Permalink to &quot;指令语法&quot;">​</a></h2><p><strong>用于解析标签（包括：标签属性、标签体内容、绑定事件等）</strong></p><h4 id="v-bind" tabindex="-1">v-bind <a class="header-anchor" href="#v-bind" aria-label="Permalink to &quot;v-bind&quot;">​</a></h4><p><strong>绑定数据</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-bind:id=&#39;&#39;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div :id=&#39;&#39;&gt;&lt;/div&gt;</span></span></code></pre></div><ul><li><strong>单向绑定，数据只能从 data 流向页面</strong></li><li><strong><code>v-bind:</code><strong>可以缩写为</strong> <code>:</code></strong></li></ul><h4 id="v-model" tabindex="-1">v-model <a class="header-anchor" href="#v-model" aria-label="Permalink to &quot;v-model&quot;">​</a></h4><p><strong>绑定数据</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;input type=&#39;text&#39; v-model:id=&#39;&#39;&gt;</span></span>
<span class="line"><span>&lt;input type=&#39;text&#39; v-model=&#39;&#39;&gt;</span></span></code></pre></div><ul><li><strong>双向绑定，数据不仅能从 data 流向页面还能从页面流向 data</strong></li><li><strong><code>v-model:value</code><strong>可以简写为</strong> <code>v-model</code></strong>，因为 v-model 默认收集的就是 value 值</li><li><strong>三个修饰符：</strong><ul><li><code>lazy</code>：失去焦点再收集数据</li><li><code>number</code>：输入字符串转为有效的数字</li><li><code>trim</code>：输入首尾空格过滤</li></ul></li></ul><blockquote><ul><li><code>&lt;input type=&quot;text&quot;&gt;</code>，则 v-model 收集的是 value 值，用户输入的就是 value 值</li><li><code>&lt;input type=&quot;radio&quot;&gt;</code>，则 v-model 收集的是 value 值，且要给标签配置 value 值</li><li><code>&lt;input type=&quot;checkbox&quot;&gt;</code><ul><li><strong>没有配置 input 的 value 属性，那么收集的就是 checked（勾选 or 未勾选，是布尔值）</strong></li><li><strong>配置 input 的 value 属性：</strong><ul><li><strong>v-model 的初始值是非数组，那么收集的就是 checked（勾选 or 未勾选，是布尔值）</strong></li><li><strong>v-model 的初始值是数组，那么收集的就是 value 组成的数组</strong></li></ul></li></ul></li></ul></blockquote><h4 id="v-on" tabindex="-1">v-on <a class="header-anchor" href="#v-on" aria-label="Permalink to &quot;v-on&quot;">​</a></h4><p><strong>绑定事件监听器</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;button v-on:click=&#39;&#39;&gt;&lt;/button&gt;</span></span>
<span class="line"><span>&lt;button @click=&#39;&#39;&gt;&lt;/button&gt;</span></span></code></pre></div><ul><li><strong><code>v-on:</code><strong>可以简写为</strong> <code>@</code></strong></li></ul><h4 id="v-show" tabindex="-1">v-show <a class="header-anchor" href="#v-show" aria-label="Permalink to &quot;v-show&quot;">​</a></h4><p><strong>条件渲染</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-show=&quot;true&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div v-show=&quot;1 == 1&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><ul><li>**根据表达式之真假值，切换元素的 **<code>display</code> CSS</li><li><strong>不展示的 DOM 元素未被移除，仅仅是将样式隐藏</strong></li></ul><h4 id="v-if" tabindex="-1">v-if <a class="header-anchor" href="#v-if" aria-label="Permalink to &quot;v-if&quot;">​</a></h4><p><strong>条件渲染</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-if=&quot;true&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div v-if=&quot;1 == 1&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><ul><li>**根据表达式的值的 **<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy" target="_blank" rel="noreferrer">truthiness</a> 来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建</li><li><strong>不展示的 DOM 元素直接被移除</strong></li><li><strong>可以跟</strong> <code>&lt;template&gt;</code>结合使用，将提出它的内容作为条件块</li></ul><h4 id="v-else" tabindex="-1">v-else <a class="header-anchor" href="#v-else" aria-label="Permalink to &quot;v-else&quot;">​</a></h4><p><strong>条件渲染</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-if=&quot;true&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div v-else&gt;&lt;/div&gt;</span></span></code></pre></div><ul><li>**前一兄弟元素必须有 **<code>v-if</code> 或 <code>v-else-if</code></li></ul><h4 id="v-else-if" tabindex="-1">v-else-if <a class="header-anchor" href="#v-else-if" aria-label="Permalink to &quot;v-else-if&quot;">​</a></h4><p><strong>条件渲染</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-if=&quot;type === &#39;A&#39;&quot;&gt;A&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div v-else-if=&quot;type === &#39;B&#39;&quot;&gt;B&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div v-else-if=&quot;type === &#39;C&#39;&quot;&gt;C&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div v-else&gt;Not A/B/C&lt;/div&gt;</span></span></code></pre></div><ul><li>**前一兄弟元素必须有 **<code>v-if</code> 或 <code>v-else-if</code></li></ul><h4 id="v-for" tabindex="-1">v-for <a class="header-anchor" href="#v-for" aria-label="Permalink to &quot;v-for&quot;">​</a></h4><p><strong>列表渲染</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-for=&quot;item in items&quot; :key=&quot;item.id&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><ul><li><strong>用于展示列表数据</strong></li><li><strong>可遍历：数组、对象、字符串、指定次数</strong></li><li><code>key</code>是虚拟 DOM 对象的标记，当数据发生变化时，Vue 会根据新数据生成新的虚拟 DOM，随后 Vue 进行新虚拟 DOM 与旧虚拟 DOM 的差异比较</li></ul><h4 id="v-text" tabindex="-1">v-text <a class="header-anchor" href="#v-text" aria-label="Permalink to &quot;v-text&quot;">​</a></h4><p><strong>渲染文本</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-text=&#39;&#39;&gt;&lt;/div&gt;</span></span></code></pre></div>`,38),d=s("li",null,[s("strong",null,"向其所在的节点中渲染文本内容")],-1),g=s("strong",null,"与插值语法的区别，",-1),u=s("code",null,"v-text",-1),h=a('<h4 id="v-html" tabindex="-1">v-html <a class="header-anchor" href="#v-html" aria-label="Permalink to &quot;v-html&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-html=&#39;&#39;&gt;&lt;/div&gt;</span></span></code></pre></div><p><strong>渲染 html 结构</strong></p>',3),v=s("code",null,"v-html",-1),m=s("li",null,[s("code",null,"v-html"),n("可以识别 html 结构")],-1),b=a('<blockquote><ul><li><strong>在网站上动态渲染任意 HTML 是非常危险的，容易导致 KSS 攻击</strong></li><li><strong>一定要在可信的内容上使用</strong> <code>v-html</code>，永远不要用在用户提交的内容上</li></ul></blockquote><h4 id="v-cloak" tabindex="-1">v-cloak <a class="header-anchor" href="#v-cloak" aria-label="Permalink to &quot;v-cloak&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-cloak&gt;&lt;/div&gt;</span></span></code></pre></div>',3),k=s("li",null,[s("strong",null,"本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉"),n(),s("code",null,"v-cloak"),n("属性")],-1),y=s("strong",null,"使用 css 的",-1),q=s("code",null,"display:none",-1),f=s("code",null,"v-cloak",-1),x=a(`<h4 id="v-once" tabindex="-1">v-once <a class="header-anchor" href="#v-once" aria-label="Permalink to &quot;v-once&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-once&gt;&lt;/div&gt;</span></span></code></pre></div><ul><li><code>v-once</code>所在节点在初始动态渲染后，就视为静态内容了</li><li><strong>以后数据的改变不会引起</strong> <code>v-once</code>所在结构的更新，可以用于优化性能</li></ul><h4 id="v-pre" tabindex="-1">v-pre <a class="header-anchor" href="#v-pre" aria-label="Permalink to &quot;v-pre&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-pre&gt;&lt;/div&gt;</span></span></code></pre></div><ul><li><strong>跳过其所在节点的编译过程</strong></li><li><strong>可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译</strong></li></ul><h4 id="自定义指令" tabindex="-1">自定义指令 <a class="header-anchor" href="#自定义指令" aria-label="Permalink to &quot;自定义指令&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-new=&quot;&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 局部指令</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>    directives:{</span></span>
<span class="line"><span>        new(element,binding){</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>    directives:{</span></span>
<span class="line"><span>        new:{</span></span>
<span class="line"><span>            // 指令与元素成功绑定时调用</span></span>
<span class="line"><span>            bind(elemnet,binding){</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // 指令所在元素被插入页面时调用</span></span>
<span class="line"><span>            inserted(element,binding){</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>            // 指令所在模板结构被重新解析时调用</span></span>
<span class="line"><span>            update(element,binding){</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>            }        </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 全局指令</span></span>
<span class="line"><span>Vue.directive(&#39;new&#39;,function(element,binding){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>Vue.directive(&#39;new&#39;,{</span></span>
<span class="line"><span>    bind(elemnet,binding){</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            // 指令所在元素被插入页面时调用</span></span>
<span class="line"><span>            inserted(element,binding){</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>            // 指令所在模板结构被重新解析时调用</span></span>
<span class="line"><span>            update(element,binding){</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>            }      </span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li><strong>指令定义时不加</strong> <code>v-</code>，但使用时要加 <code>v-</code></li><li><strong>指令名如果是多个单词，要使用 keabab-case 命名方式，不要用 camelCase 命名</strong></li></ul><h2 id="el-与-data-的写法" tabindex="-1">el 与 data 的写法 <a class="header-anchor" href="#el-与-data-的写法" aria-label="Permalink to &quot;el 与 data 的写法&quot;">​</a></h2><h3 id="el" tabindex="-1">el <a class="header-anchor" href="#el" aria-label="Permalink to &quot;el&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const v= new Vue({ //第一种</span></span>
<span class="line"><span>    el: &#39;&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const v= new Vue({ //第二种</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>v.$mount(&#39;&#39;)</span></span></code></pre></div><h3 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>new Vue({  //第一种</span></span>
<span class="line"><span>    el: &#39;&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        name: &#39;&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Vue({  //第二种</span></span>
<span class="line"><span>    el; &#39;&#39;,</span></span>
<span class="line"><span>    data()</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="事件修饰符" tabindex="-1">事件修饰符 <a class="header-anchor" href="#事件修饰符" aria-label="Permalink to &quot;事件修饰符&quot;">​</a></h3><table><thead><tr><th><strong>属性</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><strong>prevent</strong></td><td><strong>阻止默认事件</strong></td></tr><tr><td><strong>stop</strong></td><td><strong>阻止事件冒泡</strong></td></tr><tr><td><strong>once</strong></td><td><strong>事件只触发一次</strong></td></tr><tr><td><strong>capture</strong></td><td><strong>使用事件的捕获模式</strong></td></tr><tr><td><strong>self</strong></td><td><strong>只有 event.target 是当前操作的元素时才触发事件</strong></td></tr><tr><td><strong>passive</strong></td><td><strong>事件的默认行为立即执行，无需等待事件回调执行完毕</strong></td></tr></tbody></table><h3 id="键盘事件" tabindex="-1">键盘事件 <a class="header-anchor" href="#键盘事件" aria-label="Permalink to &quot;键盘事件&quot;">​</a></h3><ul><li><strong>Vue 中常用的案件别名</strong></li></ul><table><thead><tr><th><strong>键名</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><strong>enter</strong></td><td><strong>回车</strong></td></tr><tr><td><strong>delete</strong></td><td><strong>删除（捕获“删除”和“退格”键）</strong></td></tr><tr><td><strong>esc</strong></td><td><strong>退出</strong></td></tr><tr><td><strong>space</strong></td><td><strong>空格</strong></td></tr><tr><td><strong>tab</strong></td><td><strong>换行</strong></td></tr><tr><td><strong>up</strong></td><td><strong>上</strong></td></tr><tr><td><strong>down</strong></td><td><strong>下</strong></td></tr><tr><td><strong>left</strong></td><td><strong>左</strong></td></tr><tr><td><strong>right</strong></td><td><strong>右</strong></td></tr></tbody></table><ul><li><strong>Vue 未提供别名的按键，可以使用按键原始的 key 值去绑定，但注意要转为 kebab-case（短横线命名）</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@keyup.caps-lock=&#39;&#39;  // 例</span></span></code></pre></div></li><li><strong>系统修饰键：</strong><code>crtl alt shift meta(windows键)</code></li></ul><p>** 配合 keyup 使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发**</p><p>** ** 配合 keydown 使用：正常触发事件</p><ul><li><strong>也可以使用 keyCode 去指定具体的按键（不推荐）</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@keyup.13=&#39;&#39; // 例</span></span></code></pre></div><ul><li><code>Vue.config.keyCodes.自定义键名 = 键码</code> 可以去定制按键别名</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Vue.config.keyCodes.huiche = 13;</span></span></code></pre></div><h2 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed&quot;">​</a></h2><p><strong>计算属性</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const vm = new Vue({</span></span>
<span class="line"><span>    el: &#39;&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    computed: {</span></span>
<span class="line"><span>        fullName:{</span></span>
<span class="line"><span>        get(){</span></span>
<span class="line"><span>    return ;</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>            set(){</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }          </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li><strong>要用的属性不存在，要通过已有属性计算得来</strong></li></ul><blockquote><p><strong>简写</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>computed: {</span></span>
<span class="line"><span> fullName(){</span></span>
<span class="line"><span>     return ;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>前提是只是用 get 方法时才能简写</strong></li></ul></blockquote><h2 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h2><p><strong>监视属性</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const vm = new Vue({</span></span>
<span class="line"><span>    el: &#39;&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        isTrue: &#39;&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    watch: {</span></span>
<span class="line"><span>        isTrue: {</span></span>
<span class="line"><span>            immediate:true, // immediate为true，初始化时handler会调用</span></span>
<span class="line"><span>            handler(newValue,oldValue){ //newValue记录改变后的值，oldValue记录改变前的值</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><blockquote><p><strong>另一种写法</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vm.$watch(&#39;isTrue&#39;,{</span></span>
<span class="line"><span> immediate:ture,</span></span>
<span class="line"><span> handler(newValue,oldValue){</span></span>
<span class="line"><span></span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>简写</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const vm = new Vue({</span></span>
<span class="line"><span> el: &#39;&#39;,</span></span>
<span class="line"><span> data: {</span></span>
<span class="line"><span>     isTrue: &#39;&#39;</span></span>
<span class="line"><span> },</span></span>
<span class="line"><span> watch: {</span></span>
<span class="line"><span>     isTrue(newValue,oldValue){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><strong>另一种写法简写</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vm.$watch(&#39;isTrue&#39;,function(newValue,oldValue){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})</span></span></code></pre></div></blockquote><h3 id="深度监视" tabindex="-1">深度监视 <a class="header-anchor" href="#深度监视" aria-label="Permalink to &quot;深度监视&quot;">​</a></h3><ul><li><strong>Vue 自身可以检测对象内部值的改变</strong></li><li><strong>Vue 中的 watch 默认不检测对象内部值的改变（一层）</strong></li><li><strong>配置</strong> <code>deep:true</code>可以检测对象内部值的改变（多层）</li></ul><h2 id="绑定样式" tabindex="-1">绑定样式 <a class="header-anchor" href="#绑定样式" aria-label="Permalink to &quot;绑定样式&quot;">​</a></h2><h3 id="class" tabindex="-1">class <a class="header-anchor" href="#class" aria-label="Permalink to &quot;class&quot;">​</a></h3><ul><li><strong>字符串写法（适用于样式的类名不确定，需要动态指定）</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.normal {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div :class=&quot;mood&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const vm = new Vue({</span></span>
<span class="line"><span>    el: &#39;&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        mood: &#39;normal&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li><strong>数组写法（适用于要绑定的样式个数不确定、名字也不确定）</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.normal {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.happy {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.sad {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div :class=&quot;mood&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const vm = new Vue({</span></span>
<span class="line"><span>    el: &#39;&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        arr:[&#39;happy&#39;,&#39;sad&#39;,&#39;normal&#39;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li><strong>对象写法（适用于要绑定的样式个数确定、名字也确定，但是动态决定用不用）</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.normal {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.happy {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.sad {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div :class=&quot;classObj&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const vm = new Vue({</span></span>
<span class="line"><span>    el: &#39;&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        classObj:{</span></span>
<span class="line"><span>            normal:true, //启用</span></span>
<span class="line"><span>            happy:flase, //停用</span></span>
<span class="line"><span>            sad:flase</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h3><ul><li><strong>对象写法</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div :style=&quot;styleArr&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const vm = new Vue({</span></span>
<span class="line"><span>    el: &#39;&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        styleObj:{</span></span>
<span class="line"><span>            fontsize: &#39;0px&#39;,</span></span>
<span class="line"><span>            color: &#39;&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li><strong>数组写法</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div :class=&quot;mood&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const vm = new Vue({</span></span>
<span class="line"><span>    el: &#39;&#39;,</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span>        styleArr:[{</span></span>
<span class="line"><span>            fontsize: &#39;0px&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            color: &#39;&#39;</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>})</span></span></code></pre></div><h2 id="监测数据" tabindex="-1">监测数据 <a class="header-anchor" href="#监测数据" aria-label="Permalink to &quot;监测数据&quot;">​</a></h2><ol><li><strong>Vue 会监视</strong> <code>data</code>中所有层次的数据</li><li><strong>对象中的数据</strong><ul><li><strong>通过 setter 实现监视，且要在</strong> <code>new Vue</code>时就传入要监测的数据</li><li><strong>对象中后追加的属性，Vue 默认不做响应式处理</strong></li><li><strong>如需给后添加的属性做响应式，使用</strong> <code>set()</code>方法<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Vue.set(target, propertyName/index, value)</span></span>
<span class="line"><span>vm.$set(target, propertyName/index, value)</span></span></code></pre></div></li></ul></li><li><strong>数组中的数据</strong><ul><li><strong>通过包裹数组更新元素的方法实现，本质就是做了两件事</strong><ol><li><strong>调用原生对应的方法对数组进行更新</strong><code>push()</code>、<code>pop()</code>、<code>shift()</code>、<code>unshift()</code>、<code>splice()</code>、<code>sort()</code>、<code>reverse()</code></li><li><strong>重新解析模板，进而更新页面</strong></li></ol></li></ul></li><li><code>Vue.set()</code>和 <code>vm.$set()</code>不能给 vm 或 vm 的根数据对象添加属性</li></ol><h2 id="过滤器" tabindex="-1">过滤器 <a class="header-anchor" href="#过滤器" aria-label="Permalink to &quot;过滤器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 局部过滤器</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>    el:&#39;&#39;,</span></span>
<span class="line"><span>    data:&#39;&#39;,</span></span>
<span class="line"><span>    filters:{</span></span>
<span class="line"><span>        format(value){</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 全局过滤器</span></span>
<span class="line"><span>Vue.filter(&#39;format&#39;,function(value){})</span></span></code></pre></div>`,64),C=s("strong",null,"使用",-1),_=s("code",null,"|",-1),V=s("code",null,'v-bind:属性 = " xxx | 过滤器名 "',-1),w=s("li",null,[s("strong",null,"过滤器也可以接收额外参数、多个过滤器也可以串联")],-1),P=s("li",null,[s("strong",null,"并没有改变原本的数据，是产生新的对应的数据")],-1),A=a(`<h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><p><img src="https://v2.cn.vuejs.org/images/lifecycle.png" alt="生命周期图例"></p><p><code>beforeCreate</code></p><ul><li>**此时****无法**通过 vm 访问到 data 中的数据、methods 中配置的方法</li></ul><p><code>created</code></p><ul><li>**此时****可以**通过 vm 访问到 data 中的数据、methods 中配置的方法</li></ul><p><code>beforeMount</code></p><ul><li>**页面呈现的是****未经 Vue 编译**的 DOM 结构</li><li><strong>所有对 DOM 的操作，最终都不奏效</strong></li></ul><p><code>mounted</code></p><ul><li>**页面中呈现的是****经过 Vue 编译**的 DOM</li><li>**对 DOM 的操作均有效（尽可能避免）至此初始化过程结束，一般在次进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件、等****初始化操作**</li></ul><p><code>beforeUpdate</code></p><ul><li><strong>此时数据是新的，但页面是旧的，即页面尚未和数据保持同步</strong></li></ul><p><code>updated</code></p><ul><li><strong>此时数据是新的，页面也是新的，即页面和数据保持同步</strong></li></ul><p><code>beforeDestroy</code></p><ul><li><strong>此时 vm 中所有的 data、methods、指令等等，都处于可用状态，马上要执行销毁过程，一般在此阶段：关闭定时器、取消订阅消息、解绑自定义时间等收尾操作</strong></li></ul><p><code>destroyed</code></p><blockquote><ul><li><strong>销毁后借助 Vue 开发者工具看不到任何信息</strong></li><li><strong>销毁后自定义事件会失效，但原生 DOM 事件依然有效</strong></li><li><strong>一般不会在 beforeDestroy 操作数据，因为即便操作数据，也不会再触发更新流程了</strong></li></ul></blockquote><h2 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h2><h3 id="定义组件" tabindex="-1">定义组件 <a class="header-anchor" href="#定义组件" aria-label="Permalink to &quot;定义组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const school = new Vue.extend({</span></span>
<span class="line"><span>    template:\`</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    \`,</span></span>
<span class="line"><span>    //el:&#39;&#39;,</span></span>
<span class="line"><span>    data(){</span></span>
<span class="line"><span>        return{</span></span>
<span class="line"><span>name:&#39;&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>})</span></span></code></pre></div><ul><li><strong>不写</strong> <code>el</code>,所有组件都要经过一个 vm 的管理，由 vm 中的 el 决定服务那个容器</li><li><code>data</code>必须写成函数：避免组件被复用时，数据存在引用关系</li><li><strong>使用</strong> <code>template</code>可以配置组件结构</li></ul><h3 id="注册组件" tabindex="-1">注册组件 <a class="header-anchor" href="#注册组件" aria-label="Permalink to &quot;注册组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 局部注册</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>el:&#39;#root&#39;,</span></span>
<span class="line"><span>    data:{</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    components:{</span></span>
<span class="line"><span>        School:school</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局注册</span></span>
<span class="line"><span>Vue.component(&#39;School&#39;,school)</span></span></code></pre></div><h3 id="使用组件" tabindex="-1">使用组件 <a class="header-anchor" href="#使用组件" aria-label="Permalink to &quot;使用组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=root&gt;</span></span>
<span class="line"><span>       &lt;School&gt;&lt;/School&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre></div><blockquote><ol><li><strong>关于组件名</strong><ul><li><strong>一个单词组成</strong><ul><li><strong>第一种写法（首字母小写）：</strong><code>school</code></li><li><strong>第二种写法（首字母大写）：</strong><code>School</code></li></ul></li><li><strong>多个单词组成</strong><ul><li><strong>第一种写法（kabab-case 命名）：</strong><code>my-school</code></li><li><strong>第二种写法（CamelCase 命名）：</strong><code>MySchool</code>（需要 Vue 脚手架支持）</li></ul></li><li><strong>备注</strong><ul><li><strong>组件名尽可能回避 HTML 已有的元素名称</strong></li><li><strong>可以使用 name 配置项指定组件在开发者工具中呈现的名字</strong></li></ul></li></ul></li><li><strong>关于组件标签</strong><ul><li><strong>第一种写法：</strong><code>&lt;school&gt;&lt;/school&gt;</code></li><li><strong>第二种写法：</strong><code>&lt;school/&gt;</code></li></ul></li><li><strong>简写方式</strong><ul><li><code>const school = Vue.extend(options)</code>可简写为：<code>const school = options</code></li></ul></li></ol></blockquote><h2 id="vue-cli" tabindex="-1">Vue-cli <a class="header-anchor" href="#vue-cli" aria-label="Permalink to &quot;Vue-cli&quot;">​</a></h2><p><strong>Vue-cli 官网：</strong><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">Vue-cli</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── node_modules</span></span>
<span class="line"><span>├── README.md 应用描述文件</span></span>
<span class="line"><span>├── babel.config.js babel的配置文件</span></span>
<span class="line"><span>├── package-lock.json 包版本控制文件</span></span>
<span class="line"><span>├── package.json 应用包配置文件</span></span>
<span class="line"><span>├── public</span></span>
<span class="line"><span>│   ├── favicon.ico 页面标签</span></span>
<span class="line"><span>│   └── index.html 主页面</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>│   ├── App.vue</span></span>
<span class="line"><span>│   ├── assets 存放静态文件</span></span>
<span class="line"><span>│   ├── components 存放文件</span></span>
<span class="line"><span>│   └── main.js 入口文件</span></span>
<span class="line"><span>└── vue.config.js</span></span></code></pre></div><p><strong>创建脚手架</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vue create my-project // 在创建项目的目录下运行指令</span></span></code></pre></div><p><strong>启动项目</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm run serve // 项目目录下运行指令</span></span></code></pre></div><h2 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>new Vue({</span></span>
<span class="line"><span>  render: h =&gt; h(App),</span></span>
<span class="line"><span>}).$mount(&#39;#app&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 相当于</span></span>
<span class="line"><span>render(createElement){</span></span>
<span class="line"><span>    return createElement()</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><code>vue.runtime.esm.js</code>只有核心功能，没有模板解析器，不能使用 <code>template</code>配置项，需要使用 <code>render</code>函数接收到的 <code>createElement</code>函数去指定具体内容</li></ul><h2 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 打标识 --&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1 ref=&quot;addr&quot;&gt;&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 获取元素</span></span>
<span class="line"><span>this.$refs.addr</span></span></code></pre></div><ul><li><strong>beiyonglaigei 元素或子组件注册引用信息（id 的替代者）</strong></li><li><strong>应用在 html 标签上获取的是真实的 DOM 结构，应用在组件标签上是组件实例对象</strong></li></ul><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><p><strong>让组件接受外部传过来的数据</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 传递数据 --&gt;</span></span>
<span class="line"><span>&lt;Demo name=&#39; &#39;&gt;&lt;/Demo&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 接收数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第一种方式（只接受）</span></span>
<span class="line"><span>props:[&#39;name&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第二种方式（限制类型）</span></span>
<span class="line"><span>props:{</span></span>
<span class="line"><span>name:String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第三种方式（限制类型、限制必要性、指定默认值）</span></span>
<span class="line"><span>props:{</span></span>
<span class="line"><span>name:{</span></span>
<span class="line"><span>type:String, // 类型</span></span>
<span class="line"><span>        required:true, // 必要性</span></span>
<span class="line"><span>        default:&#39;tom&#39; // 默认值</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><code>props</code>是只读的，Vue 底层会检测你对 <code>props</code>的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 <code>props</code>的内容到 <code>data</code>中一份，然后去修改 <code>data</code>中的数据</li></ul><h2 id="mixin" tabindex="-1">mixin <a class="header-anchor" href="#mixin" aria-label="Permalink to &quot;mixin&quot;">​</a></h2><p><strong>把多个组件共用的配置提取成一个混入对象</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义混合</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    data(){</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods:{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用混入</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局混入</span></span>
<span class="line"><span>Vue.mixin(xxx)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 局部混入</span></span>
<span class="line"><span>mixins:[&#39;xxx&#39;]</span></span></code></pre></div><h2 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;use&quot;">​</a></h2><p><strong>插件</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 定义插件</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    install(Vue)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Vue.filter(...)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Vue.directive(...)</span></span>
<span class="line"><span>                  </span></span>
<span class="line"><span>    Vue.mixin(...)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        Vue.prototype.$myMethod = funtion() {...}</span></span>
<span class="line"><span>        Vue.prototype.$myProperty = xxx</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>// 使用插件</span></span>
<span class="line"><span>Vue.use()</span></span></code></pre></div><h2 id="scoped" tabindex="-1">scoped <a class="header-anchor" href="#scoped" aria-label="Permalink to &quot;scoped&quot;">​</a></h2><p><strong>让样式在局部生效，防止冲突</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="webstorage" tabindex="-1">webStorage <a class="header-anchor" href="#webstorage" aria-label="Permalink to &quot;webStorage&quot;">​</a></h2><ol><li><strong>存储内容大小一般支持 5MB 左右</strong></li><li><strong>浏览器端通过</strong> <code>Window.sessionStorage</code>和 <code>Window.localStorage</code></li><li><strong>API：</strong><ul><li><code>xxxStorage.setItem(&#39;key&#39;,&#39;value&#39;)</code><strong>该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值</strong></li><li><code>xxxStorage.getItem(&#39;key&#39;)</code><strong>该方法接受一个键名作为参数，返回键名对应的值</strong></li><li><code>xxxStorage.removeItem(&#39;key&#39;,&#39;value&#39;)</code><strong>该方法接受一个键名作为参数，并把该键名从存储中删除</strong></li><li><code>xxxStorage.clear()</code><strong>该方法会清空存储中的所有数据</strong></li></ul></li><li><strong>备注：</strong><ul><li><strong>SessionStorage 存储的内容会随着浏览器窗口关闭而消失</strong></li><li><strong>LocalStorage 存储的内容，需要手动清除才会消失</strong></li><li><code>xxxStorage.getItem(xxx)</code>如果 xxx 对应的 value 获取不到，那 getItem 的返回值是 null</li><li><code>JSON.parse(null)</code>的结果依旧是 null</li></ul></li></ol><h2 id="组件的自定义事件" tabindex="-1">组件的自定义事件 <a class="header-anchor" href="#组件的自定义事件" aria-label="Permalink to &quot;组件的自定义事件&quot;">​</a></h2><ol><li><strong>一种组件间通信的方式，适用于：</strong><code>子组件===&gt;父组件</code></li><li><strong>使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件（事件的回调在 A 中）</strong></li><li><strong>绑定自定义事件：</strong><ol><li><strong>第一种方式，在父组件中：</strong><code>&lt;Demo @abc=&quot;test&quot;/&gt;</code>或 <code>&lt;Demo v-on:abd=&quot;test&quot;/&gt;</code></li><li><strong>第二种方式，在父组件中：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Demo ref=&quot;demo/&quot;&gt;</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>mounted(){</span></span>
<span class="line"><span>this.$refs.demo.$on(&#39;abc&#39;,this.test)</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><strong>若想让自定义事件只能触发一次，可以使用</strong> <code>once</code>修饰符，或者 <code>$once</code>方法</li></ol></li><li><strong>触发自定义事件：</strong><code>this.$emit(&#39;abc&#39;,数据)</code></li><li><strong>解绑自定义事件：</strong><code>this.$off(&#39;abc&#39;)</code></li><li><strong>组件上也可以绑定原生 DOM 事件，需要使用</strong> <code>native</code>修饰词</li><li><strong>通过 this.$refs.xxx.</strong>$<strong>on(&#39;abc&#39;,回调)绑定自定义事件时，回调</strong>要么配置在 methods 中，要么用箭头函数**，否则 this 指向会出错！**</li></ol><h2 id="全局事件总线" tabindex="-1">全局事件总线 <a class="header-anchor" href="#全局事件总线" aria-label="Permalink to &quot;全局事件总线&quot;">​</a></h2><ol><li><strong>一种组件间通信的方式，适用于</strong>任意组件间通信</li><li><strong>安装全局事件总线</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>new Vue({</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>    beforeCreate(){</span></span>
<span class="line"><span>Vue.prototype.$bus = this // 安装全局事件总线，$bus就是当前应用的vm</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    ......</span></span>
<span class="line"><span>})</span></span></code></pre></div></li><li><strong>使用全局总线：</strong><ol><li><strong>接受数据：A 组件想接收数据，则在 A 组件中给</strong> <code>$bus</code>绑定自定义事件，事件的回调留在 A 组件自身<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>methods(){</span></span>
<span class="line"><span>demo(data){......}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>mounted(){</span></span>
<span class="line"><span>    this.$bus.$on(&#39;xxxx&#39;,this.demo)</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><strong>提供数据：</strong><code>this.$bus.$emit(&#39;xxxx&#39;,数据)</code></li></ol></li><li><strong>最好在</strong> <code>beforeDerstroy</code>钩子中，用 <code>$off</code>去解绑当前组件所用到的事件</li></ol><h2 id="消息订阅与发布" tabindex="-1">消息订阅与发布 <a class="header-anchor" href="#消息订阅与发布" aria-label="Permalink to &quot;消息订阅与发布&quot;">​</a></h2><ol><li><strong>一种组件间通信的方式，适用于</strong>任意组件间通信</li><li><strong>使用步骤：</strong><ol><li><strong>安装 pubsub：</strong><code>npm i pubsub-js</code></li><li><strong>引入：</strong><code>import pubsub from &#39;pubsub-js&#39;</code></li><li><strong>接收数据：A 组件想接收数据，则在 A 组件中订阅消息，订阅的回调</strong>留在 A 组件自身<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>methods(){</span></span>
<span class="line"><span>demo(data){......}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>mounted(){</span></span>
<span class="line"><span>    this.pid = pubsub.subscribe(&#39;xxx&#39;,this.demo) // 订阅消息</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><strong>提供数据：</strong><code>pubsub.publish(&#39;xxx&#39;,数据)</code></li><li><strong>最好在</strong> <code>beforeDestroy</code>钩子中，用 <code>PubSub.unsubscribe(pid)</code>去取消订阅</li></ol></li></ol><h2 id="nexttick" tabindex="-1">nextTick <a class="header-anchor" href="#nexttick" aria-label="Permalink to &quot;nextTick&quot;">​</a></h2><ol><li><strong>语法：</strong><code>this.nextTick(回调函数)</code></li><li><strong>作用：在下一次 DOM 更新结束后执行其指定的回调</strong></li><li><strong>使用时间：当改变数据后，要基于更新后的新 DOM 进行某些操作时，要在 nextTick 所指定的回调函数中执行</strong></li><li><code>this.$nextTick()</code>可以用作局部的数据更新后 DOM 更新结束后的操作，全局的可以用 <code>updated</code>生命周期函数</li></ol><h2 id="vue-封装的过度与动画" tabindex="-1">Vue 封装的过度与动画 <a class="header-anchor" href="#vue-封装的过度与动画" aria-label="Permalink to &quot;Vue 封装的过度与动画&quot;">​</a></h2><ol><li><strong>准备好样式</strong><ul><li><strong>元素进入的样式：</strong><ul><li><code>v-enter-from</code>：进入动画的起始状态</li><li><code>v-enter-active</code>：进入动画的生效状态</li><li><code>v-enter-to</code>：进入动画的结束状态</li></ul></li><li><strong>元素离开的样式：</strong><ul><li><code>v-leave-from</code>：离开动画的起始状态</li><li><code>v-leave-active</code>：离开动画的生效状态</li><li><code>v-leave-to</code>：离开动画的结束状态</li></ul></li></ul></li><li><strong>使用</strong> <code>&lt;transition&gt;</code>包裹要过度的元素，可配置 <code>name</code>属性，同时修改 <code>v-</code>为 <code>name的值-</code><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;transition name=&quot;&quot;&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;/transition&gt;</span></span></code></pre></div></li><li><strong>若有多个元素需要过度，则需要使用：</strong><code>&lt;transition-group&gt;</code>，且每个元素都要指定 <code>key</code>值</li></ol><h2 id="配置代理" tabindex="-1">配置代理 <a class="header-anchor" href="#配置代理" aria-label="Permalink to &quot;配置代理&quot;">​</a></h2><h3 id="方法一" tabindex="-1">方法一 <a class="header-anchor" href="#方法一" aria-label="Permalink to &quot;方法一&quot;">​</a></h3><p><strong>在</strong> <code>vue.config.js</code>中添加如下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>devServer:{</span></span>
<span class="line"><span>proxy:&quot;http://localhost:5000&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>说明：</strong></p><ol><li><strong>有点：配置简单，请求资源时直接发给前端(8080)即可</strong></li><li><strong>缺点：不能配置多个代理，不能灵活的控制请求是否走代理</strong></li><li><strong>工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求就会转发给服务器（优先匹配前端资源）</strong></li></ol><h3 id="方法二" tabindex="-1">方法二 <a class="header-anchor" href="#方法二" aria-label="Permalink to &quot;方法二&quot;">​</a></h3><p><strong>编写 vue.config.js 配置具体代理规则：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>devServer: {</span></span>
<span class="line"><span>proxy: {</span></span>
<span class="line"><span>            &#39;/api1&#39;: { // 匹配所有以 &#39;/api1&#39; 开头的请求路径</span></span>
<span class="line"><span>                target: &#39;http://localhost:5000&#39;, // 代理的基础路径</span></span>
<span class="line"><span>                changeOrigin: true,</span></span>
<span class="line"><span>                pathRewrite: {&#39;^/api1&#39;:&#39;&#39;}</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            &#39;/api2&#39;: { // 匹配所有以 &#39;/api2&#39; 开头的请求路径</span></span>
<span class="line"><span>                target: &#39;http://localhost:5001&#39;, // 代理的基础路径</span></span>
<span class="line"><span>                changeOrigin: true,</span></span>
<span class="line"><span>                pathRewrite: {&#39;^/api2&#39;:&#39;&#39;}</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>changeOrigin设置为true时，服务器收到的请求头的host为,localhost:5000</span></span>
<span class="line"><span>changeOrigin设置为false时，服务器收到的请求头的host为,localhost:8080</span></span>
<span class="line"><span>changeOrigin默认值为true</span></span>
<span class="line"><span>*/</span></span></code></pre></div><p><strong>说明：</strong></p><ol><li><strong>优点：可以配置多个代理，且可以灵活的控制请求是否走代理</strong></li><li><strong>缺点：配置略微繁琐，请求资源时必须加前缀</strong></li></ol><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><ol><li><p><strong>作用：让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，适用于</strong>父组件-&gt;子组件</p></li><li><p><strong>分类：默认插槽、具名插槽、作用于插槽</strong></p></li><li><p><strong>使用方式：</strong></p><ol><li><p><strong>默认插槽：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>父组件中：</span></span>
<span class="line"><span>&lt;Category&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>            html结构1</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/Category&gt;</span></span>
<span class="line"><span>子组件：</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>            &lt;!-- 定义插槽 --&gt;</span></span>
<span class="line"><span>            &lt;slot&gt;默认插槽内容...&lt;/slot&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div></li><li><p><strong>具名插槽：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>父组件中：</span></span>
<span class="line"><span>&lt;Category&gt;</span></span>
<span class="line"><span>        &lt;template slot=&quot;center&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            html结构1</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/template&gt;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &lt;template v-slot:footer&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            html结构2</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/Category&gt;</span></span>
<span class="line"><span>子组件：</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>            &lt;!-- 定义插槽 --&gt;</span></span>
<span class="line"><span>            &lt;slot name=&quot;center&quot;&gt;默认插槽内容...&lt;/slot&gt;</span></span>
<span class="line"><span>            &lt;slot name=&quot;footer&quot;&gt;默认插槽内容...&lt;/slot&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div></li><li><p><strong>作用域插槽：</strong></p><ol><li><p><strong>理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定</strong></p></li><li><p><strong>具体编码：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>父组件中：</span></span>
<span class="line"><span>&lt;Category&gt;</span></span>
<span class="line"><span>&lt;template scope=&quot;scopeData&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 生成的是uL列表 --&gt;</span></span>
<span class="line"><span>            &lt;ul&gt;</span></span>
<span class="line"><span>                &lt;li v-for=&quot;g in scopeData.games&quot; :key=&quot;g&quot;&gt;{{g}}&lt;/li&gt;</span></span>
<span class="line"><span>            &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/Category&gt;</span></span>
<span class="line"><span>子组件中：</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>            &lt;slot :games=&quot;games&quot;&gt;默认插槽内容...&lt;/slot&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>            name: &#39;Category&#39;,</span></span>
<span class="line"><span>            props:[&#39;title&#39;].</span></span>
<span class="line"><span>            // 数据在子组件自身</span></span>
<span class="line"><span>            data {</span></span>
<span class="line"><span>            return {</span></span>
<span class="line"><span>            games:[&#39;game1&#39;,&#39;game2&#39;,&#39;game3&#39;,&#39;game4&#39;]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div></li></ol></li></ol></li></ol><h2 id="vuex" tabindex="-1">vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;vuex&quot;">​</a></h2><p><strong>专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信</strong></p><h3 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h3><ol><li><strong>多个组件依赖于同一状态</strong></li><li><strong>来自不同组件的行为需要变更同一状态</strong></li></ol><p><img src="https://vuex.vuejs.org/vuex.png" alt=""></p><h3 id="搭建环境" tabindex="-1">搭建环境 <a class="header-anchor" href="#搭建环境" aria-label="Permalink to &quot;搭建环境&quot;">​</a></h3><ol><li><p><strong>创建文件：</strong><code>src/store/index.js</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 引入Vue核心库</span></span>
<span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>// 引入Vuex</span></span>
<span class="line"><span>import Vuex from &#39;vuex&#39;</span></span>
<span class="line"><span>// 应用Vuex插件</span></span>
<span class="line"><span>Vue.use(Vuex)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 准备action对象 响应组件中用户的动作</span></span>
<span class="line"><span>const actions = {}</span></span>
<span class="line"><span>// 准备mutations对象 修改state中的数据</span></span>
<span class="line"><span>const mutations = {}</span></span>
<span class="line"><span>// 准备state对象 保存具体的数据</span></span>
<span class="line"><span>const state = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建并暴露store</span></span>
<span class="line"><span>export default new Vuex.Store({</span></span>
<span class="line"><span>    actions,</span></span>
<span class="line"><span>    mutations,</span></span>
<span class="line"><span>    state</span></span>
<span class="line"><span>})</span></span></code></pre></div></li><li><p><strong>在</strong> <code>main.js</code>中创建 <code>vm</code> 时传入 <code>store</code>配置项</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>......</span></span>
<span class="line"><span>// 引入store</span></span>
<span class="line"><span>import store from &#39;./store&#39;</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建vm</span></span>
<span class="line"><span>new Vue({</span></span>
<span class="line"><span>el:&#39;#app&#39;，</span></span>
<span class="line"><span>    render: h =&gt; h(App),</span></span>
<span class="line"><span>    store</span></span>
<span class="line"><span>})</span></span></code></pre></div></li></ol><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><ol><li><p><strong>初始化数据，配置</strong> <code>actions</code>、配置 <code>mutations</code>、操作文件 <code>store.js</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 引入Vue核心库</span></span>
<span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>// 引入Vuex</span></span>
<span class="line"><span>import Vuex from &#39;vuex&#39;</span></span>
<span class="line"><span>// 应用Vuex插件</span></span>
<span class="line"><span>Vue.use(Vuex)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const actions = {</span></span>
<span class="line"><span>    // 响应组件中加的动作</span></span>
<span class="line"><span>    jia(context,value){</span></span>
<span class="line"><span>        context.commit(&#39;JIA&#39;,value)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const mutations = {</span></span>
<span class="line"><span>    // 执行加</span></span>
<span class="line"><span>    JIA(state,value){</span></span>
<span class="line"><span>state.sum += value</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化数据</span></span>
<span class="line"><span>const state = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建并暴露store</span></span>
<span class="line"><span>export default new Vuex.Store({</span></span>
<span class="line"><span>    actions,</span></span>
<span class="line"><span>    mutations,</span></span>
<span class="line"><span>    state</span></span>
<span class="line"><span>})</span></span></code></pre></div></li><li><p><strong>组件中读取 vuex 中的数据：</strong><code>$store.state.sum</code></p></li><li><p><strong>组件中修改 vuex 中的数据：</strong><code>$store.dispatch(&#39;actions中的方法名&#39;,数据)</code>或 <code>$store.commit(&#39;mutations中的方法名&#39;,数据)</code></p><blockquote><p><strong>备注：若没有网络请求或其他业务逻辑，组件中也可以越过 actions 即不写</strong> <code>dispatch</code>，直接编写 <code>commit</code></p></blockquote></li></ol><h3 id="getters-的使用" tabindex="-1">getters 的使用 <a class="header-anchor" href="#getters-的使用" aria-label="Permalink to &quot;getters 的使用&quot;">​</a></h3><ol><li><p><strong>概念：当 state 中的数据需要经过加工后再使用时，可以使用 getters 加工</strong></p></li><li><p><strong>在 store.js 中追加 getters 配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const getters = {</span></span>
<span class="line"><span>    bigSum(state){</span></span>
<span class="line"><span>return state.sum * 10</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建并暴露store</span></span>
<span class="line"><span>export default new Vuex.store({</span></span>
<span class="line"><span>......</span></span>
<span class="line"><span>    getters</span></span>
<span class="line"><span>})</span></span></code></pre></div></li></ol><h3 id="四个-map-方法的使用" tabindex="-1">四个 map 方法的使用 <a class="header-anchor" href="#四个-map-方法的使用" aria-label="Permalink to &quot;四个 map 方法的使用&quot;">​</a></h3><ol><li><p><strong>mapState 方法</strong>：用于帮助我们映射 <code>state</code>中的数据为计算属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>computed: {</span></span>
<span class="line"><span>//借助mapState生成计算属性：sum,school,subject（对象写法）</span></span>
<span class="line"><span>    ...mapState({sum:&#39;sum&#39;,school:&#39;school&#39;,subject:&#39;subject&#39;}),</span></span>
<span class="line"><span>    //借助mapState生成计算属性：sum,school,subject（数组写法）</span></span>
<span class="line"><span>    ...mapState([&#39;sum&#39;,&#39;school&#39;,&#39;subject&#39;]),</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>mapGetters 方法</strong>：用于帮助我们映射 <code>getters</code>中的数据为计算属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>computed: {</span></span>
<span class="line"><span>//借助mapGetters生成计算属性：bigSum（对象写法）</span></span>
<span class="line"><span>    ...mapGetters({bigSum:&#39;bigSum&#39;}),</span></span>
<span class="line"><span>    //借助mapGetters生成计算属性：bigSum（数组写法）</span></span>
<span class="line"><span>    ...mapGetters([&#39;bigSum&#39;]),</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>mapActions 方法</strong>：用于帮助我们生成与 <code>actions</code>对话的方法，即：包含 <code>$store.dispatch(xxx)</code>的函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>methods: {</span></span>
<span class="line"><span>    //靠mapActions生成：incrementOdd、incrementWait(对象形式)</span></span>
<span class="line"><span>    ...mapActions(incrementOdd:&#39;jiaOdd&#39;,incrementWait:&#39;jiaWait&#39;)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //靠mapActions生成：incrementOdd、incrementWait(数组形式)</span></span>
<span class="line"><span>    ...mapActions([&#39;jiaOdd&#39;,&#39;jiaWait&#39;])</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>mapMutations 方法</strong>：用于帮助我们生成与 <code>mutations</code>对话的方法，即：包含 <code>$store.commit(xxx)</code>的函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>methods: {</span></span>
<span class="line"><span>    //靠mapMutations生成：incrementOdd、incrementWait(对象形式)</span></span>
<span class="line"><span>    ...mapMutations(incrementOdd:&#39;jiaOdd&#39;,incrementWait:&#39;jiaWait&#39;)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //靠mapMutations生成：incrementOdd、incrementWait(数组形式)</span></span>
<span class="line"><span>    ...mapMutations([&#39;jiaOdd&#39;,&#39;jiaWait&#39;])</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p><strong>备注：mapActions 与 mapMutations 使用时，若需要传递参数，在模板中绑定事件时传递好参数，否则参数是事件对象</strong></p></blockquote></li></ol><h3 id="模块化-命名空间" tabindex="-1">模块化+命名空间 <a class="header-anchor" href="#模块化-命名空间" aria-label="Permalink to &quot;模块化+命名空间&quot;">​</a></h3><ol><li><strong>目的：让代码更好维护，让多种数据分类更加明确</strong></li><li><strong>修改</strong> <code>store.js</code><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const countAbout = {</span></span>
<span class="line"><span>    namespaced:true, // 开启命名空间</span></span>
<span class="line"><span>    state:{ x:1 },</span></span>
<span class="line"><span>    mutations: { ... },</span></span>
<span class="line"><span>    actions: { ... },</span></span>
<span class="line"><span>    getters: {</span></span>
<span class="line"><span>        bigSum(state){</span></span>
<span class="line"><span>return state.sum *10;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>const personAbout = {</span></span>
<span class="line"><span>    namespaced:true, // 开启命名空间</span></span>
<span class="line"><span>    state: { ... },</span></span>
<span class="line"><span>    mutations: { ... },</span></span>
<span class="line"><span>    actions: { ... }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>export default new Vuex.store({</span></span>
<span class="line"><span>modules: {</span></span>
<span class="line"><span>    countAbout,</span></span>
<span class="line"><span>        personAbout</span></span>
<span class="line"><span>    }                </span></span>
<span class="line"><span>})</span></span></code></pre></div></li><li><strong>开启命名空间后，组件中读取 state 数据：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方式一：自己直接读取</span></span>
<span class="line"><span>this.$store.state.personAbout.list</span></span>
<span class="line"><span>// 方式二：借助mapState读取</span></span>
<span class="line"><span>...mapState(&#39;countAbout&#39;,[&#39;sum&#39;,&#39;school&#39;,&#39;subject&#39;]),</span></span></code></pre></div></li><li><strong>开启命名空间后，组件中读取 getters 数据：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方式一：自己读取读取</span></span>
<span class="line"><span>this.$store.getters[&#39;personAbout/firstPersonName&#39;]</span></span>
<span class="line"><span>// 方式二：借助mapGetters读取：</span></span>
<span class="line"><span>...mapGetters(&#39;countAbout&#39;,[&#39;bigSum&#39;])</span></span></code></pre></div></li><li><strong>开启命名空间后，组件中调用 dispatch：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方式一：自己直接dispatch</span></span>
<span class="line"><span>this.$store.dispatch(&#39;personAbout/addPersonWang&#39;,person)</span></span>
<span class="line"><span>// 方式二：借助mapActions：</span></span>
<span class="line"><span>...mapActions(&#39;countAbout&#39;,{incrementOdd:&#39;jiaOdd&#39;,incrementWait:&#39;jiaWait&#39;})</span></span></code></pre></div></li><li><strong>开启命名空间后，组件中调用 commit：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方式一：自己直接commit</span></span>
<span class="line"><span>this.$store.commit(&#39;personAbout/ADD_PERSON&#39;,person)</span></span>
<span class="line"><span>// 方式二：借助mapMutations：</span></span>
<span class="line"><span>...mapMutations(&#39;countAbout&#39;,{increment:&#39;JIA&#39;,decrement:&#39;JIAN&#39;})</span></span></code></pre></div></li></ol><h2 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h2><ol><li><strong>理解：一个路由（route）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理</strong></li><li><strong>前端路由：key 是路径，value 是组件</strong></li></ol><h3 id="基本使用-1" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用-1" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><ol><li><p><strong>安装 vue-router，命令：</strong><code>npm i vue-router@3 (默认是4对应vue3)</code></p></li><li><p><strong>应用插件：</strong><code>Vue.use(VueRouter)</code></p></li><li><p><strong>编写 router 配置项：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 引入VueRouter</span></span>
<span class="line"><span>import VueRouter from &#39;vue-router&#39;</span></span>
<span class="line"><span>// 引入Luyou组件</span></span>
<span class="line"><span>import About from &#39;../components/About&#39;</span></span>
<span class="line"><span>import Home from &#39;../components/Home&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建router实例对象，去管理一组一组的路由规则</span></span>
<span class="line"><span>export default new VueRouter({</span></span>
<span class="line"><span>    routes:[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            path:&#39;/about&#39;,</span></span>
<span class="line"><span>            compontent:About</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            path:&#39;/home&#39;,</span></span>
<span class="line"><span>            compontent:Home</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>})</span></span></code></pre></div></li><li><p><strong>实现切换（active-cla）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;router-link active-class=&quot;active&quot; to=&quot;/about&quot;&gt;About&lt;/router-link&gt;</span></span></code></pre></div></li><li><p><strong>指定展示位置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;router-view&gt;&lt;/router-view&gt;</span></span></code></pre></div></li></ol><h3 id="几个注意点" tabindex="-1">几个注意点 <a class="header-anchor" href="#几个注意点" aria-label="Permalink to &quot;几个注意点&quot;">​</a></h3><ol><li><strong>路由组件通常存放在</strong> <code>pages</code>文件夹，一般组件通常存放在 <code>components</code>文件夹</li><li><strong>通过切换，隐藏了的路由组件，默认是被销毁掉的，需要的时候再去挂载</strong></li><li><strong>每个组件都有自己的</strong> <code>$route</code>属性，里面存储着自己的路由信息</li><li><strong>整个应用只有一个 router，可以通过组件的</strong> <code>$router</code>属性获取到</li></ol><h3 id="多级路由" tabindex="-1">多级路由 <a class="header-anchor" href="#多级路由" aria-label="Permalink to &quot;多级路由&quot;">​</a></h3><ol><li><strong>配置路由规则，使用 children 配置项：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>routes:[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        path:&#39;/about&#39;,</span></span>
<span class="line"><span>        compontent:About</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        path:&#39;/home&#39;,</span></span>
<span class="line"><span>        compontent:Home,</span></span>
<span class="line"><span>        children:[ // 通过children配置子级路由</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                path:&#39;news&#39;, // 此处一定不要写： /news</span></span>
<span class="line"><span>                component:News</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>path:&#39;news&#39;,</span></span>
<span class="line"><span>                compontent:Messages</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre></div></li><li><strong>跳转（要写完整路径）：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;router-link to=&quot;/home/news&quot;&gt;News&lt;/router-link&gt;</span></span></code></pre></div></li></ol><h3 id="路由的-query-参数" tabindex="-1">路由的 query 参数 <a class="header-anchor" href="#路由的-query-参数" aria-label="Permalink to &quot;路由的 query 参数&quot;">​</a></h3><ol><li><p><strong>传递参数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 跳转并携带query参数,to的字符串写法--&gt;</span></span>
<span class="line"><span>&lt;router-link :to=&quot;/home/message/detail?id=666&amp;title=你好&quot;&gt;跳转&lt;/router-link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!--跳转并携带query参数,to的对象写法--&gt;</span></span>
<span class="line"><span>&lt;router-link</span></span>
<span class="line"><span>:to=&quot;{</span></span>
<span class="line"><span>    path:&#39;/home/message/detail&#39;,</span></span>
<span class="line"><span>        query:{</span></span>
<span class="line"><span>        id:666,</span></span>
<span class="line"><span>         title:&#39;你好&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }&quot;</span></span>
<span class="line"><span>&gt;跳转&lt;/router-link&gt;</span></span></code></pre></div></li><li><p><strong>接收参数：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$route.query.id</span></span>
<span class="line"><span>$route.query.title</span></span></code></pre></div></li></ol><h3 id="命名路由" tabindex="-1">命名路由 <a class="header-anchor" href="#命名路由" aria-label="Permalink to &quot;命名路由&quot;">​</a></h3><ol><li><p><strong>作用：可以简化路由的跳转</strong></p></li><li><p><strong>使用</strong></p><ol><li><p><strong>给路由命名：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>path:&#39;/demo&#39;,</span></span>
<span class="line"><span>    component:Demo,</span></span>
<span class="line"><span>    children:[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            path;&#39;test&#39;,</span></span>
<span class="line"><span>            component:Test,</span></span>
<span class="line"><span>            children:[</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>            name:&#39;hello&#39;, // 给路由命名</span></span>
<span class="line"><span>            path:&#39;welcome&#39;,</span></span>
<span class="line"><span>            component:Hello</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>简化跳转：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 简化前，需要写完整的路径 --&gt;</span></span>
<span class="line"><span>&lt;router-link to=&quot;/demo/test/welcome&quot;&gt;跳转&lt;/router-link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 简化后，直接通过名字跳转 --&gt;</span></span>
<span class="line"><span>&lt;router-link :to=&quot;{name:&#39;hello&#39;}&quot;&gt;跳转&lt;/router-link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 简化写法配合传递参数 --&gt;</span></span>
<span class="line"><span>&lt;router-link</span></span>
<span class="line"><span>:to=&quot;{</span></span>
<span class="line"><span>    name:&#39;hello&#39;,</span></span>
<span class="line"><span>        query:{</span></span>
<span class="line"><span>        id:666,</span></span>
<span class="line"><span>         title:&#39;你好&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }&quot;</span></span>
<span class="line"><span>&gt;跳转&lt;/router-link&gt;</span></span></code></pre></div></li></ol></li></ol><h3 id="路由的-params-参数" tabindex="-1">路由的 params 参数 <a class="header-anchor" href="#路由的-params-参数" aria-label="Permalink to &quot;路由的 params 参数&quot;">​</a></h3><ol><li><p><strong>配置路由，声明接收 params 参数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    path:&#39;/home&#39;,</span></span>
<span class="line"><span>    component:Home,</span></span>
<span class="line"><span>    children:[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            path:&#39;news&#39;,</span></span>
<span class="line"><span>            component:News</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            component:Message,</span></span>
<span class="line"><span>            children;[</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                    name:&#39;xianqing&#39;,</span></span>
<span class="line"><span>            path:&#39;detail/:id/:title&#39;, // 使用占位符声明接收params参数</span></span>
<span class="line"><span>            component:Detail</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>传递参数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 跳转并携带params参数，to的字符串写法 --&gt;</span></span>
<span class="line"><span>&lt;router-link :to=&quot;/home/message/detail/666/你好&quot;&gt;跳转&lt;/router-link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 跳转并携带params参数，to的对象写法 --&gt;</span></span>
<span class="line"><span>&lt;router-link</span></span>
<span class="line"><span>:to=&quot;{</span></span>
<span class="line"><span>         name:&#39;xianqing&#39;,</span></span>
<span class="line"><span>         params:{</span></span>
<span class="line"><span>    id:666,</span></span>
<span class="line"><span>         title:&#39;你好&#39;</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>    }&quot;</span></span>
<span class="line"><span>&gt;跳转&lt;/router-link&gt;</span></span></code></pre></div><blockquote><p><strong>特别注意：路由携带 params 参数时，若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置！</strong></p></blockquote></li><li><p><strong>接收参数：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$route.params.id</span></span>
<span class="line"><span>$route.params.title</span></span></code></pre></div></li></ol><h3 id="路由的-props-配置" tabindex="-1">路由的 props 配置 <a class="header-anchor" href="#路由的-props-配置" aria-label="Permalink to &quot;路由的 props 配置&quot;">​</a></h3><p><strong>作用：让路由组件更方便的收到参数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    name:&#39;xianqing&#39;,</span></span>
<span class="line"><span>    path:&#39;detail/:id&#39;,</span></span>
<span class="line"><span>    component:Detail,</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件</span></span>
<span class="line"><span>    props:{a:900}</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Deatail组件</span></span>
<span class="line"><span>    props:true</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 第三种写法：prop值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件</span></span>
<span class="line"><span>    props(route){</span></span>
<span class="line"><span>return {</span></span>
<span class="line"><span>            id:route.query.id,</span></span>
<span class="line"><span>            title:route.query.title</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="router-link-的-replace-属性" tabindex="-1">&lt;<strong>router-link&gt;的 replace 属性</strong> <a class="header-anchor" href="#router-link-的-replace-属性" aria-label="Permalink to &quot;&lt;**router-link&gt;的 replace 属性**&quot;">​</a></h3><ol><li><strong>作用：控制路由跳转时操作浏览器历史记录的模式</strong></li><li><strong>浏览器的历史记录有两种写入方式：分别为</strong> <code>push</code>和 <code>replace</code>，<code>push</code>是追加历史记录，<code>replace</code>是替换当前记录，路由跳转时候默认为 <code>push</code></li><li><strong>如何开启</strong> <code>replace</code>模式：<code>&lt;router-link replace ......&gt;News&lt;/router-link&gt;</code></li></ol><h3 id="编程式路由导航" tabindex="-1">编程式路由导航 <a class="header-anchor" href="#编程式路由导航" aria-label="Permalink to &quot;编程式路由导航&quot;">​</a></h3><ol><li><p><strong>作用：不借助</strong> <code>&lt;router-link&gt;</code>实现路由跳转，让路由跳转更加灵活</p></li><li><p><strong>具体编码：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// $router的两个API</span></span>
<span class="line"><span>this.$router.push({</span></span>
<span class="line"><span>name:&#39;xiangqi&#39;,</span></span>
<span class="line"><span>params:{</span></span>
<span class="line"><span> id:xxx,</span></span>
<span class="line"><span> title:xxx</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$router.replace({</span></span>
<span class="line"><span>name:&#39;xiangqi&#39;,</span></span>
<span class="line"><span>params:{</span></span>
<span class="line"><span> id:xxx,</span></span>
<span class="line"><span> title:xxx</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>this.$router.forward() // 前进</span></span>
<span class="line"><span>this.$router.back() // 后退</span></span>
<span class="line"><span>this.$router.go() //可前进可后退</span></span></code></pre></div></li></ol><h3 id="缓存路由组件" tabindex="-1">缓存路由组件 <a class="header-anchor" href="#缓存路由组件" aria-label="Permalink to &quot;缓存路由组件&quot;">​</a></h3><ol><li><strong>作用：让不展示的路由组件保持挂载，不被销毁</strong></li><li><strong>具体编码：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;keep-alive include=&quot;News&quot;&gt;</span></span>
<span class="line"><span>&lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>&lt;/keep-alive&gt;</span></span></code></pre></div></li></ol><h3 id="两个新的生命周期钩子" tabindex="-1">两个新的生命周期钩子 <a class="header-anchor" href="#两个新的生命周期钩子" aria-label="Permalink to &quot;两个新的生命周期钩子&quot;">​</a></h3><ol><li><strong>作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态</strong></li><li><strong>具体名字：</strong><ol><li><code>activated</code>路由组件被激活时触发</li><li><code>deactivated</code>路由组件失活时触发</li></ol></li></ol><h3 id="路由守卫" tabindex="-1">路由守卫 <a class="header-anchor" href="#路由守卫" aria-label="Permalink to &quot;路由守卫&quot;">​</a></h3><ol><li><p><strong>作用：对路由进行权限控制</strong></p></li><li><p><strong>分类：全局守卫、独享守卫、组件内守卫</strong></p></li><li><p><strong>全局守卫：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 全局前置守卫：初始化时执行、每次路由切换前执行</span></span>
<span class="line"><span>router.beforeEach((to,from,next)=&gt;{</span></span>
<span class="line"><span>if(to.meta.isAuth){ // 判断当前路由是否需要进行权限控制</span></span>
<span class="line"><span>if(locakStorage.getItem(&#39;school&#39;)===&#39;&#39;){ //权限控制的具体规则</span></span>
<span class="line"><span>            next() // 放行</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            alert(&#39;暂无权限查看&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        next() // 放行</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局后置守卫：初始化时执行、每次路由切换后执行</span></span>
<span class="line"><span>router.afterEach((to,from)=&gt;{</span></span>
<span class="line"><span>    if(to.meta.title){</span></span>
<span class="line"><span>document.title = to.meta.title // 修改网页的title</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        document.title =  &#39;&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div></li><li><p><strong>独享守卫</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>beforeEnter(to,from,next){</span></span>
<span class="line"><span>if(to.meta.isAuth){ // 判断当前路由是否需要进行权限控制</span></span>
<span class="line"><span>if(locakStorage.getItem(&#39;school&#39;)===&#39;&#39;){ //权限控制的具体规则</span></span>
<span class="line"><span>            next() // 放行</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>            alert(&#39;暂无权限查看&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        next() // 放行</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><strong>组件内守卫：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 进入守卫：通过路由规则，进入该组件时被调用</span></span>
<span class="line"><span>beforeRouteEnter(to,from,next){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>// 离开守卫，通过路由规则，离开该组件时被调用</span></span>
<span class="line"><span>beforeRouteLeave(to,from,next){</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ol><h3 id="路由器的两种工作模式" tabindex="-1">路由器的两种工作模式 <a class="header-anchor" href="#路由器的两种工作模式" aria-label="Permalink to &quot;路由器的两种工作模式&quot;">​</a></h3><ol><li><strong>对于一个 url 来说，什么是 hash 值？----- #及其后面的内容就是 hash 值</strong></li><li><strong>hash 值不会包含在 HTTP 请求中，即：hash 值不会带给服务器</strong></li><li><strong>hash 模式：</strong><ol><li><strong>地址中永远带着#号，不美观</strong></li><li><strong>若以后将地址通过第三方手机 app 分享，若 app 检验严格，则地址会被标记为不合法</strong></li><li><strong>兼容性较好</strong></li></ol></li><li><strong>history 模式：</strong><ol><li><strong>地址干净，美观</strong></li><li><strong>兼容性和 hash 模式相比略差</strong></li><li><strong>应用部署上线时需要后端人员支持，解决刷新页面服务端 404 的问题</strong></li></ol></li></ol><h2 id="vue-electron" tabindex="-1">vue-electron <a class="header-anchor" href="#vue-electron" aria-label="Permalink to &quot;vue-electron&quot;">​</a></h2><p><strong>问题解决方案</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install --ignore-scripts</span></span>
<span class="line"><span>并在生成module/electron文件夹下手动配置path.txt文件，内容electron.exe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>node.js18 ssl问题 在运行electron:serve前输入$env:NODE_OPTIONS=&quot;--openssl-legacy-provider&quot;</span></span></code></pre></div><h2 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;Vite&quot;">​</a></h2><p><strong>官网：</strong><a href="https://vitejs.cn/" target="_blank" rel="noreferrer">https://vitejs.cn</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>## 创建工程</span></span>
<span class="line"><span>npm init vite-app &lt;project-name&gt;</span></span>
<span class="line"><span>npm init vue@latest</span></span>
<span class="line"><span>## 进入工程目录</span></span>
<span class="line"><span>cd &lt;project-name&gt;</span></span>
<span class="line"><span>## 安装依赖</span></span>
<span class="line"><span>npm install</span></span>
<span class="line"><span>## 运行</span></span>
<span class="line"><span>npm run dev</span></span></code></pre></div><h2 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;setup&quot;">​</a></h2><ol><li><strong>理解：Vue3.0 中一个新的配置项，值为一个函数</strong></li><li><strong>setup 是所有 Composition API“表演的舞台”</strong></li><li><strong>组件中所用到的：数据、方法等等，均要配置在 setup 中</strong></li><li><strong>setup 函数的两种返回值</strong><ol><li><strong>若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用</strong></li><li><strong>若返回一个渲染函数：则可以自定义渲染内容</strong></li></ol></li><li><strong>注意点：</strong><ol><li><strong>尽量不要与 Vue2.x 配置混用</strong><ol><li><strong>Vue2.x 配置(data methods computed..)中可以访问到 setup 中的属性、方法</strong></li><li><strong>但在 setup 中不能访问到 Vue2.x 配置(data methods computed...)</strong></li><li><strong>如果有重名，setup 优先</strong></li></ol></li><li><strong>setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性</strong></li></ol></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>setup(){</span></span>
<span class="line"><span>let a = &#39;&#39;;</span></span>
<span class="line"><span>        function b(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>a,</span></span>
<span class="line"><span>            b</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p><strong>注意点：</strong></p><ol><li><strong>setup 执行的时机</strong><ul><li><strong>在 beforeCreate 之前执行一次，this 是 underfined</strong></li></ul></li><li><strong>setup 的参数</strong><ul><li><strong>props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性</strong></li><li><strong>context：上下文对象</strong><ul><li><strong>attrs：值为对象，包含：组件外部传递过来，但没有在 props 配置中声明的对象，相当于</strong> <code>this.$attrs</code></li><li><strong>slots：收到的插槽内容，相当于</strong> <code>this.$slots</code></li><li><strong>emit：分发自定义事件的函数，相当于</strong> <code>this.$emit</code></li></ul></li></ul></li></ol></blockquote><h2 id="ref-1" tabindex="-1">ref <a class="header-anchor" href="#ref-1" aria-label="Permalink to &quot;ref&quot;">​</a></h2>`,135),S=s("li",null,[s("strong",null,"作用：定义一个响应式的数据")],-1),T=s("strong",null,"语法：",-1),j=s("code",null,"let xxx = ref(initValue)",-1),$=s("li",null,[s("strong",null,"创建一个包含响应式数据的引用对象（reference 对象，简称 ref 对象）")],-1),R=s("li",null,[s("strong",null,"JS 中操作数据："),s("code",null,"xxx.value")],-1),D=s("strong",null,"模板中读取数据：不需要.value，直接",-1),O=a("<li><strong>备注：</strong><ul><li><strong>接收的数据可以是：基本类型、也可以是对象类型</strong></li><li><strong>基本类型的数据：响应式布局依然是靠</strong> <code>Object.defineProperty()</code>的 <code>get</code>与 <code>set</code>完成的</li><li><strong>对象类型的数据：内部“求助”了 Vue3.0 中的一个新函数——</strong><code>reactive</code>函数</li></ul></li>",1),I=a(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>setup(){</span></span>
<span class="line"><span>let a = ref(1);</span></span>
<span class="line"><span>        function b(){</span></span>
<span class="line"><span>a.value = 2;</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>a,</span></span>
<span class="line"><span>            b</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="reactive" tabindex="-1">reactive <a class="header-anchor" href="#reactive" aria-label="Permalink to &quot;reactive&quot;">​</a></h2><ul><li><strong>作用：定义一个对象类型的响应式数据（基本类型不要用它，要用</strong> <code>ref</code>函数）</li><li><strong>语法：</strong><code>const 代理对象 = reactive(源对象)</code>接收一个对象（或数组），返回一个代理对象（proxy 对象）</li><li><code>reactive</code>定义的响应式数据是深层次的</li><li><strong>内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作</strong></li></ul><h2 id="响应式" tabindex="-1">响应式 <a class="header-anchor" href="#响应式" aria-label="Permalink to &quot;响应式&quot;">​</a></h2><h3 id="vue3-0-的响应式" tabindex="-1">Vue3.0 的响应式 <a class="header-anchor" href="#vue3-0-的响应式" aria-label="Permalink to &quot;Vue3.0 的响应式&quot;">​</a></h3><ul><li><strong>实现原理</strong><ul><li><strong>通过 Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写，属性的添加，属性的删除等</strong></li><li><strong>通过 Reflect（反射）：对源对象的属性进行操作</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>new Proxy(data, {</span></span>
<span class="line"><span>// 拦截读取属性值</span></span>
<span class="line"><span>    get(target, prop) {</span></span>
<span class="line"><span>return Reflect.get(target, prop);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 拦截设置属性值或添加新属性</span></span>
<span class="line"><span>    set(target, prop, value) {</span></span>
<span class="line"><span>return Reflect.set(target, prop, value);</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>    deleteProperty(target, prop) {</span></span>
<span class="line"><span>return Reflect.deleteProperty(target, prop);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div></li></ul></li></ul><h2 id="computed-1" tabindex="-1">computed <a class="header-anchor" href="#computed-1" aria-label="Permalink to &quot;computed&quot;">​</a></h2><ul><li><p><strong>与 Vue2.x 中 computed 配置功能一致</strong></p></li><li><p><strong>写法</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import {computed} from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setup(){</span></span>
<span class="line"><span>let fullName = computed(()=&gt; {</span></span>
<span class="line"><span>return person.firstName + &#39;-&#39; + person.lastName</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    let fullName = computed({</span></span>
<span class="line"><span>get(){</span></span>
<span class="line"><span>return person.firstName + &#39;-&#39; + person.lastName</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        set(value){</span></span>
<span class="line"><span>const nameArr = value.split(&#39;-&#39;)</span></span>
<span class="line"><span>            person.firstName = nameArr[0]</span></span>
<span class="line"><span>        person.lastName = nameArr[1]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h2 id="watch-1" tabindex="-1">watch <a class="header-anchor" href="#watch-1" aria-label="Permalink to &quot;watch&quot;">​</a></h2><ul><li><strong>与 Vue2.x 中 watch 配置功能一致</strong></li><li><strong>两个小坑：</strong><ul><li><strong>监视 reactive 定义的响应式数据时：oldvalue 无法正确获取，强制开启了深度监视（deep 配置失效）</strong></li><li><strong>监视 reactive 定义的响应式数据中某个属性时：deep 配置有效</strong></li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//监视ref定义的响应式数据</span></span>
<span class="line"><span>watch(sum,(newV,oldV)=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>},{immediate:true});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//监视多个ref定义的响应式数据</span></span>
<span class="line"><span>watch([sum,,msg],(newV,oldV)=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//监视reactive所定义的一个响应式数据的全部属性</span></span>
<span class="line"><span>watch(person,(newV,oldV)=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//监视reactive所定义的一个响应式数据中的某个属性</span></span>
<span class="line"><span>watch(()=&gt;person.name,(newV,oldV)=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//监视reactive所定义的一个响应式数据中的某些属性</span></span>
<span class="line"><span>watch([()=&gt;person.name,()=&gt;person.age],(newV,oldV)=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//特殊情况(监视属性为对象时)</span></span>
<span class="line"><span>watch(()=&gt;person.job,(newV,oldV)=&gt;{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>},{deep:true});</span></span></code></pre></div><h2 id="watcheffect" tabindex="-1">watchEffect <a class="header-anchor" href="#watcheffect" aria-label="Permalink to &quot;watchEffect&quot;">​</a></h2><ul><li><p><strong>watch 的套路是：既要指明监视的属性，也要指明监视的回调</strong></p></li><li><p><strong>watchEffect 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性</strong></p></li><li><p><strong>watchEffect 有点像 computed：</strong></p><ul><li><strong>但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值</strong></li><li><strong>而 wachEffect 更注重的是过程（回调函数的函数体），所以不用写返回值</strong></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调</span></span>
<span class="line"><span>watchEffect(()=&gt;{</span></span>
<span class="line"><span>const x1 = sum.value;</span></span>
<span class="line"><span>    const x2 = person.age;</span></span>
<span class="line"><span>    console.log(&#39;watchEffect配置的回调执行了&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div></li></ul><h2 id="生命周期-1" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期-1" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><ul><li><strong>Vue3.0 中可以继续使用 Vue2.x 中的生命周期钩子，但有两个被更名</strong><ul><li><code>beforeDestroy</code>改名为 <code>beforeUnmount</code></li><li><code>destroyed</code>改名为 <code>unmounted</code></li></ul></li><li><strong>Vue3.0 也提供了 Composition API 形式的生命周期钩子，与 Vue2.x 中钩子对应关系如下：</strong><ul><li><code>beforeCreate</code>-&gt;<code>setup()</code></li><li><code>created</code>-&gt;<code>setup()</code></li><li><code>beforeMount</code>-&gt;<code>onBeforeMount</code></li><li><code>mounted</code>-&gt;<code>onMounted</code></li><li><code>beforeUpdate</code>-&gt;<code>onBeforeUpdate</code></li><li><code>updated</code>-&gt;<code>onUpdated</code></li><li><code>beforeUnmount</code>-&gt;<code>onBeforeUnmount</code></li><li><code>unmounted</code>-&gt;<code>onmounted</code></li></ul></li></ul><h2 id="hook" tabindex="-1">hook <a class="header-anchor" href="#hook" aria-label="Permalink to &quot;hook&quot;">​</a></h2><ul><li><strong>本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装</strong></li><li><strong>类似于 vue2.x 中的 mixin</strong></li><li><strong>自定义 hook 的优势：复用代码，让 setup 中的逻辑更清楚易懂</strong></li></ul><h2 id="toref" tabindex="-1">toRef <a class="header-anchor" href="#toref" aria-label="Permalink to &quot;toRef&quot;">​</a></h2><ul><li><strong>作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个数据</strong></li><li><strong>语法：</strong><code>const name = toRef(person,&#39;name&#39;)</code></li><li><strong>应用：要将响应式对象中的某个属性单独提供给外部使用时</strong></li><li><strong>扩展：</strong><code>toRefs</code>与 <code>toRef</code>功能一致，但可以批量创建多个 ref 对象，语法：<code>toRefs(person)</code></li></ul><h2 id="shallowreactive-与-shallowref" tabindex="-1">shallowReactive 与 shallowRef <a class="header-anchor" href="#shallowreactive-与-shallowref" aria-label="Permalink to &quot;shallowReactive 与 shallowRef&quot;">​</a></h2><ul><li><strong>shallowReactive：只处理对象最外层属性的响应式（浅响应式）</strong></li><li><strong>shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理</strong></li><li><strong>什么时候使用？</strong><ul><li><strong>如果有一个对象数据，结构比较深，但变化时只是外层属性变化----&gt;shallowReactive</strong></li><li><strong>如果有一个对象数据,后续功能不会修改该对象中的属性，而是生新的对象来替换---&gt;shallowRef</strong></li></ul></li></ul><h2 id="readonly-与-shallowreadonly" tabindex="-1">readonly 与 shallowReadonly <a class="header-anchor" href="#readonly-与-shallowreadonly" aria-label="Permalink to &quot;readonly 与 shallowReadonly&quot;">​</a></h2><ul><li><strong>readonly：让一个响应式数据变为只读的（深只读）</strong></li><li><strong>shallowReadonly：让一个响应式数据变为只读的（浅只读）</strong></li><li><strong>应用场景：不希望数据被修改时</strong></li></ul><h2 id="toraw-与-markraw" tabindex="-1">toRaw 与 markRaw <a class="header-anchor" href="#toraw-与-markraw" aria-label="Permalink to &quot;toRaw 与 markRaw&quot;">​</a></h2><ul><li><strong>toRaw</strong><ul><li><strong>作用：将一个</strong> <code>reactive</code>生成的响应式对象转为普通对象</li><li><strong>使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新</strong></li></ul></li><li><strong>markRaw</strong><ul><li><strong>作用：标记一个对象，使其永远不会再成为响应式对象</strong></li><li><strong>应用场景：</strong><ul><li><strong>有些值不应该被设置为响应式的，例如复杂的第三方类库等</strong></li><li><strong>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能</strong></li></ul></li></ul></li></ul><h2 id="customref" tabindex="-1">customRef <a class="header-anchor" href="#customref" aria-label="Permalink to &quot;customRef&quot;">​</a></h2><ul><li><p><strong>作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制</strong></p></li><li><p><strong>实现防抖效果</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;text&quot; v-model=&quot;keyword&quot;&gt;</span></span>
<span class="line"><span>&lt;h3&gt;</span></span>
<span class="line"><span>        {{ keyword }}</span></span>
<span class="line"><span>    &lt;/h3&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import {ref,customRef} from &#39;vue&#39;</span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>        name: &#39;Demo&#39;,</span></span>
<span class="line"><span>        setup(){</span></span>
<span class="line"><span>function myRef(value,delay){</span></span>
<span class="line"><span>                </span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div></li></ul><h2 id="provide-与-inject" tabindex="-1">provide 与 inject <a class="header-anchor" href="#provide-与-inject" aria-label="Permalink to &quot;provide 与 inject&quot;">​</a></h2><ul><li><strong>作用：实现祖孙组件间通信</strong></li><li><strong>套路：父组件有一个</strong> <code>provide</code>选项来提供数据，子组件有一个 <code>inject</code>选项来开始使用这些数据</li><li><strong>具体写法：</strong><ul><li><strong>祖组件中：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>setup(){</span></span>
<span class="line"><span>let car = reactive({name:&#39;奔驰&#39;,price:&#39;40万&#39;})</span></span>
<span class="line"><span>provide(&#39;car&#39;,car)</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><strong>后代组件中：</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>setup(props,context){</span></span>
<span class="line"><span>const car = inject(&#39;car&#39;)</span></span>
<span class="line"><span>return {car}</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul></li></ul><h2 id="响应式数据的判断" tabindex="-1">响应式数据的判断 <a class="header-anchor" href="#响应式数据的判断" aria-label="Permalink to &quot;响应式数据的判断&quot;">​</a></h2><ul><li><code>isRef</code>：检查一个值是否为一个 ref 对象</li><li><code>isReactive</code>：检查一个对象是否是由 <code>reactive</code>创建的响应式代理</li><li><code>isReadonly</code>：检查一个对象是否是由 <code>readonly</code>创建的只读代理</li><li><code>isProxy</code>：检查一个对象是否是由 <code>reactive</code>或者 <code>readonly</code>方法创建的代理</li></ul><h2 id="新的组件" tabindex="-1">新的组件 <a class="header-anchor" href="#新的组件" aria-label="Permalink to &quot;新的组件&quot;">​</a></h2><h3 id="fragment" tabindex="-1">Fragment <a class="header-anchor" href="#fragment" aria-label="Permalink to &quot;Fragment&quot;">​</a></h3><ul><li><strong>在 vue2 中，：组件必须有一个根标签</strong></li><li><strong>在 vue3 中：组件可以没有根标签，内部会将多个标签包含在一个 Fragment 虚拟元素中</strong></li><li><strong>好处：减少标签层级，减小内存占用</strong></li></ul><h3 id="teleport" tabindex="-1">Teleport <a class="header-anchor" href="#teleport" aria-label="Permalink to &quot;Teleport&quot;">​</a></h3><p><strong>teleport 是一种能够将我们的组件 html 结构移动到指定位置的技术</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;teleport to=&quot;移动位置&quot;&gt;</span></span>
<span class="line"><span>&lt;div v-if=&quot;isShow&quot; class=&quot;mask&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;dialog&quot;&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;弹窗&lt;/h3&gt;</span></span>
<span class="line"><span>            &lt;button @click=&quot;isShow = false&quot;&gt;关闭弹窗&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/teleport&gt;</span></span></code></pre></div><h3 id="suspence" tabindex="-1">Suspence <a class="header-anchor" href="#suspence" aria-label="Permalink to &quot;Suspence&quot;">​</a></h3><ul><li><strong>等待异步组件时渲染一些额外内容，让应用有更好的用户体验</strong></li><li><strong>使用步骤：</strong><ul><li><strong>异步引入组件</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import {defineAsyncComponent} from &#39;vue&#39;</span></span>
<span class="line"><span>const child = defineAsyncComponent(()=&gt;import(&#39;./components/Child.vue&#39;))</span></span></code></pre></div></li><li><strong>使用 Suspense 包裹组件，并配置好 default 与 fallback</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>        &lt;Suspense&gt;</span></span>
<span class="line"><span>    &lt;template v-slot:default&gt;</span></span>
<span class="line"><span>&lt;Child/&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;template v-solt:fallback&gt;</span></span>
<span class="line"><span>&lt;h3&gt;</span></span>
<span class="line"><span>                    加载中...</span></span>
<span class="line"><span>                &lt;/h3&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/Suspense&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div></li></ul></li></ul><h2 id="全局-api-的调整" tabindex="-1">全局 API 的调整 <a class="header-anchor" href="#全局-api-的调整" aria-label="Permalink to &quot;全局 API 的调整&quot;">​</a></h2><table><thead><tr><th><strong>2.x 全局 API</strong></th><th><strong>3.x 实例 API</strong></th></tr></thead><tbody><tr><td><strong>Vue.config.xxx</strong></td><td><strong>app.config.xxx</strong></td></tr><tr><td><strong>Vue.config.productionTip</strong></td><td><strong>移除</strong></td></tr><tr><td><strong>Vue.component</strong></td><td><strong>app.component</strong></td></tr><tr><td><strong>Vue.directive</strong></td><td><strong>app.directive</strong></td></tr><tr><td><strong>Vue.mixin</strong></td><td><strong>app.mixin</strong></td></tr><tr><td><strong>Vue.use</strong></td><td><strong>app.use</strong></td></tr><tr><td><strong>Vue.prototype</strong></td><td><strong>app.config.globalProperties</strong></td></tr></tbody></table>`,41);function N(p,M,E,W,B,U){return i(),t("div",null,[c,s("ul",null,[s("li",null,[s("code",null,e(p.xxx)+",xxx",1),n("是 js 表达式，且可以直接读取到 data 中的所有属性")])]),r,s("ul",null,[d,s("li",null,[g,u,n("会替换掉节点当中的内容，"),s("code",null,e(),1),n("则不会")])]),h,s("ul",null,[s("li",null,[v,n("会替换掉节点中所有的内容，"),s("code",null,e(p.xx),1),n("则不会")]),m]),b,s("ul",null,[k,s("li",null,[y,n(),q,n("配合 "),f,n("可以解决网速慢时页面展示出现 "),s("code",null,e(p.xxx),1),n("的问题")])]),x,s("ul",null,[s("li",null,[C,n(),_,n("过滤："),s("code",null,e(p.xxx|p.过滤器名),1),n(" 或 "),V]),w,P]),A,s("ul",null,[S,s("li",null,[T,j,s("ul",null,[$,R,s("li",null,[D,n(),s("code",null,"<div>"+e(p.xxx)+"</div>",1)])])]),O]),I])}const J=l(o,[["render",N]]);export{G as __pageData,J as default};
