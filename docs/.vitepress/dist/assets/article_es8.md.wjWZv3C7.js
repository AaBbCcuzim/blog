import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.ClEHkwpW.js";const _=JSON.parse('{"title":"ES8","description":"","frontmatter":{},"headers":[],"relativePath":"article/es8.md","filePath":"article/es8.md"}'),c={name:"article/es8.md"},i=e(`<h1 id="es8" tabindex="-1">ES8 <a class="header-anchor" href="#es8" aria-label="Permalink to &quot;ES8&quot;">​</a></h1><h2 id="async-和-await" tabindex="-1">async 和 await <a class="header-anchor" href="#async-和-await" aria-label="Permalink to &quot;async 和 await&quot;">​</a></h2><p><strong>async 和 await 两种语法结合可以让异步代码像同步代码一样</strong></p><h3 id="async" tabindex="-1">async <a class="header-anchor" href="#async" aria-label="Permalink to &quot;async&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>async function fn(){</span></span>
<span class="line"><span>return new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><strong>返回的结果不是一个</strong> <code>Promise</code>类型对象，返回的结果就是成功 <code>Promise</code>对象</li><li><strong>抛出错误，返回的结果是一个失败的</strong> <code>Promise</code></li><li><strong>返回的结果如果是一个</strong> <code>Promise</code>对象，则状态与该对象一致</li></ul><h3 id="await" tabindex="-1">await <a class="header-anchor" href="#await" aria-label="Permalink to &quot;await&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const p = new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main(){</span></span>
<span class="line"><span>    try{</span></span>
<span class="line"><span>        let result = await p;</span></span>
<span class="line"><span>        console.log(result);</span></span>
<span class="line"><span>    } catch(e) {</span></span>
<span class="line"><span>        console.log(e);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><code>await</code>必须写在 <code>async</code>函数中</li><li><code>await</code>右侧的表达式一般为 <code>promise</code>对象</li><li><code>await</code>返回的是 <code>promise</code>成功的值</li><li><code>await</code>的 <code>promise</code>失败了，就会抛出异常，需要通过 <code>try...catch</code>捕获处理</li></ul>`,9),t=[i];function o(p,l,r,d,h,u){return n(),s("div",null,t)}const g=a(c,[["render",o]]);export{_ as __pageData,g as default};
