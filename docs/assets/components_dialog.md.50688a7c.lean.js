import{p as e,ac as n,D as c,o as r,c as D,z as y,G as l,B as o,R as t,a as p}from"./chunks/framework.bc40fd44.js";import"./chunks/index.4ed993c7.js";const F=t("",7),i={class:"wrap"},C=t("",3),g=JSON.parse('{"title":"dialog","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md","lastUpdated":1684847321000}'),A={name:"components/dialog.md"},h=Object.assign(A,{setup(d){return e(()=>{n(()=>import("./chunks/index.90363c5a.js"),["assets/chunks/index.90363c5a.js","assets/chunks/wz-base.0300f7d9.js"]),n(()=>import("./chunks/index.7848ed03.js"),["assets/chunks/index.7848ed03.js","assets/chunks/wz-base.0300f7d9.js","assets/chunks/index.90363c5a.js"]).then(s=>{window.dialog=s.Dialog,console.log(s.Dialog),window.dialogConfirm=()=>{dialog.alert({type:"confirm",title:"tit3le",submittext:"ok",canceltext:"cance222l",onsubmit:function(){alert("te")},oncancel:function(){alert("点击了取消")},content:"content"})},window.dialogCommon=()=>{dialog.alert({type:"common",title:"tit3le",submittext:"ok",canceltext:"cance222l",onsubmit:function(){alert("点击了确定")},oncancel:function(){alert("点击了取消")},content:"content"})}})}),(s,_)=>{const a=c("wz-button");return r(),D("div",null,[F,y("div",i,[l(a,{type:"primary",onclick:"dialogConfirm()"},{default:o(()=>[p("common")]),_:1}),l(a,{type:"common",onclick:"dialogCommon()"},{default:o(()=>[p("confirm")]),_:1})]),C])}}});export{g as __pageData,h as default};
