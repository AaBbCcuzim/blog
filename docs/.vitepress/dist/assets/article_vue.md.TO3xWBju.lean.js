import{_ as l,c as t,m as s,t as e,a as n,a4 as a,o as i}from"./chunks/framework.ClEHkwpW.js";const G=JSON.parse('{"title":"VUE","description":"","frontmatter":{},"headers":[],"relativePath":"article/vue.md","filePath":"article/vue.md"}'),o={name:"article/vue.md"},c=a("",5),r=a("",38),d=s("li",null,[s("strong",null,"向其所在的节点中渲染文本内容")],-1),g=s("strong",null,"与插值语法的区别，",-1),u=s("code",null,"v-text",-1),h=a("",3),v=s("code",null,"v-html",-1),m=s("li",null,[s("code",null,"v-html"),n("可以识别 html 结构")],-1),b=a("",3),k=s("li",null,[s("strong",null,"本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉"),n(),s("code",null,"v-cloak"),n("属性")],-1),y=s("strong",null,"使用 css 的",-1),q=s("code",null,"display:none",-1),f=s("code",null,"v-cloak",-1),x=a("",64),C=s("strong",null,"使用",-1),_=s("code",null,"|",-1),V=s("code",null,'v-bind:属性 = " xxx | 过滤器名 "',-1),w=s("li",null,[s("strong",null,"过滤器也可以接收额外参数、多个过滤器也可以串联")],-1),P=s("li",null,[s("strong",null,"并没有改变原本的数据，是产生新的对应的数据")],-1),A=a("",135),S=s("li",null,[s("strong",null,"作用：定义一个响应式的数据")],-1),T=s("strong",null,"语法：",-1),j=s("code",null,"let xxx = ref(initValue)",-1),$=s("li",null,[s("strong",null,"创建一个包含响应式数据的引用对象（reference 对象，简称 ref 对象）")],-1),R=s("li",null,[s("strong",null,"JS 中操作数据："),s("code",null,"xxx.value")],-1),D=s("strong",null,"模板中读取数据：不需要.value，直接",-1),O=a("",1),I=a("",41);function N(p,M,E,W,B,U){return i(),t("div",null,[c,s("ul",null,[s("li",null,[s("code",null,e(p.xxx)+",xxx",1),n("是 js 表达式，且可以直接读取到 data 中的所有属性")])]),r,s("ul",null,[d,s("li",null,[g,u,n("会替换掉节点当中的内容，"),s("code",null,e(),1),n("则不会")])]),h,s("ul",null,[s("li",null,[v,n("会替换掉节点中所有的内容，"),s("code",null,e(p.xx),1),n("则不会")]),m]),b,s("ul",null,[k,s("li",null,[y,n(),q,n("配合 "),f,n("可以解决网速慢时页面展示出现 "),s("code",null,e(p.xxx),1),n("的问题")])]),x,s("ul",null,[s("li",null,[C,n(),_,n("过滤："),s("code",null,e(p.xxx|p.过滤器名),1),n(" 或 "),V]),w,P]),A,s("ul",null,[S,s("li",null,[T,j,s("ul",null,[$,R,s("li",null,[D,n(),s("code",null,"<div>"+e(p.xxx)+"</div>",1)])])]),O]),I])}const J=l(o,[["render",N]]);export{G as __pageData,J as default};