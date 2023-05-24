import{p as t,ac as p,D as r,o as c,c as D,z as n,G as e,B as o,R as y,a as s}from"./chunks/framework.bc40fd44.js";import"./chunks/index.4ed993c7.js";const F=y(`<h1 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;message&quot;">​</a></h1><p>信息组件,推荐全局黑暗模式</p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">使用方式,用mode new 出来之后就可以使用里面的createToast 方法了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 引入 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;"> &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// import Message from &quot;./index.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Message </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/webzen-ui/src/component/wz-message/index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Message</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">light</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createToast</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">你1好</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">light</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h2><p>第一个参数是类型 支持 四个类型 <code>info</code>, <code>success</code>,<code>error</code>,<code>warning</code></p><p>第二个参数是 文本内容</p><p>第三个参数是持续时间</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#electrolux_message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> message </span><span style="color:#89DDFF;">=new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">res</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#82AAFF;">createToast</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">createToast</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">createToast</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">createToast</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warning</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,9),i={class:"wrap"},C=n("h2",{id:"黑夜白天模式",tabindex:"-1"},[s("黑夜白天模式 "),n("a",{class:"header-anchor",href:"#黑夜白天模式","aria-label":'Permalink to "黑夜白天模式"'},"​")],-1),A={class:"wrap"},q=JSON.parse('{"title":"message","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md","lastUpdated":1684479143000}'),d={name:"components/message.md"},h=Object.assign(d,{setup(m){return t(()=>{p(()=>import("./chunks/index.73258b17.js"),["assets/chunks/index.73258b17.js","assets/chunks/wz-base.0300f7d9.js"]),p(()=>import("./chunks/index.ada06616.js"),["assets/chunks/index.ada06616.js","assets/chunks/wz-base.0300f7d9.js"]),p(()=>import("./chunks/index.88000928.js"),[]).then(l=>{console.log(l.default),window.res=l.default})}),(l,u)=>{const a=r("wz-button");return c(),D("div",null,[F,n("div",i,[e(a,{type:"primary",onclick:'document.querySelector("#electrolux_message")?.remove(); let message =new res({mode:"dark"}); message.createToast("success","success",2000)'},{default:o(()=>[s("success")]),_:1}),e(a,{type:"common",onclick:'document.querySelector("#electrolux_message")?.remove(); let message =new res({mode:"dark"}); message.createToast("info","info",2000)'},{default:o(()=>[s("info")]),_:1}),e(a,{type:"default",onclick:'document.querySelector("#electrolux_message")?.remove(); let message =new res({mode:"dark"}); message.createToast("warning","warning",2000)'},{default:o(()=>[s("warning")]),_:1}),e(a,{type:"danger",onclick:'document.querySelector("#electrolux_message")?.remove(); let message =new res({mode:"dark"}); message.createToast("error","error",2000)'},{default:o(()=>[s("error")]),_:1})]),C,n("div",A,[e(a,{type:"primary",onclick:'document.querySelector("#electrolux_message")?.remove(); let message =new res({mode:"light"}); message.createToast("info","你1好",2000,"light")'},{default:o(()=>[s("白天模式")]),_:1}),e(a,{type:"danger",onclick:'document.querySelector("#electrolux_message")?.remove(); let message =new res({mode:"dark"}); message.createToast("info","你1好",2000,"dark")'},{default:o(()=>[s("黑夜模式")]),_:1})])])}}});export{q as __pageData,h as default};
