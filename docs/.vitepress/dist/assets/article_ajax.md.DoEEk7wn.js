import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.ClEHkwpW.js";const u=JSON.parse('{"title":"AJAX","description":"","frontmatter":{},"headers":[],"relativePath":"article/ajax.md","filePath":"article/ajax.md"}'),e={name:"article/ajax.md"},l=p(`<h1 id="ajax" tabindex="-1">AJAX <a class="header-anchor" href="#ajax" aria-label="Permalink to &quot;AJAX&quot;">​</a></h1><p><strong>AJAX 全称为 Asynchronous JavaScript And XML ，就是异步的 JS 和 XML。通过 AJAX 可以在浏览器中向服务器发送异步请求，最大的优势：<strong>无刷新获取数据</strong>。AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。</strong></p><h2 id="xhr" tabindex="-1">xhr <a class="header-anchor" href="#xhr" aria-label="Permalink to &quot;xhr&quot;">​</a></h2><p><strong>xhr api 文档：</strong><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest" target="_blank" rel="noreferrer">xhr</a></p><h2 id="axios" tabindex="-1">axios <a class="header-anchor" href="#axios" aria-label="Permalink to &quot;axios&quot;">​</a></h2><p><strong>axios 中文文档：</strong><a href="http://www.axios-js.com/zh-cn/docs/index.html" target="_blank" rel="noreferrer">axios</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// get 请求</span></span>
<span class="line"><span>axios.get(&#39;url&#39;,{</span></span>
<span class="line"><span>    // url 参数</span></span>
<span class="line"><span>    params: {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 请求头信息</span></span>
<span class="line"><span>    headers: {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).then(value =&gt; {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// post 请求</span></span>
<span class="line"><span>axios.post(&#39;url&#39;,{</span></span>
<span class="line"><span>    // 请求体</span></span>
<span class="line"><span>},{</span></span>
<span class="line"><span>    // url 参数</span></span>
<span class="line"><span>    params: {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 请求头信息</span></span>
<span class="line"><span>    headers: {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}).then(value =&gt; {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通用请求</span></span>
<span class="line"><span>axios({</span></span>
<span class="line"><span>    url: &#39;&#39;,</span></span>
<span class="line"><span>    // url 参数</span></span>
<span class="line"><span>    params: {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 请求头信息</span></span>
<span class="line"><span>    headers: {</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 请求体信息</span></span>
<span class="line"><span>    data: {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).then(value =&gt; {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>})</span></span></code></pre></div>`,7),i=[l];function t(c,r,o,h,d,x){return n(),a("div",null,i)}const g=s(e,[["render",t]]);export{u as __pageData,g as default};
