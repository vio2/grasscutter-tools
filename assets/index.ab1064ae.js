import{_ as j,b as X}from"./MyButton.vuevuetypescriptsetuptruelang.1e6dfe34.js";import{p as h,l as R,c as J,g as Y}from"./api.43cf5ed0.js";import{_ as O,a as Z}from"./MyDivider.vuevuetypescriptsetuptruelang.51a5bb0b.js";import{_ as W}from"./InputNumber.71425069.js";import{_ as G}from"./InputGroup.e5cb0293.js";import{h as I,a as ee,t as N,v as E,b as H,w as te,d as T,e as le,u as Q,A as ne,r as U,bq as oe,g as B,i as ae,bu as se,bV as ie,ae as ue,bU as re,m as de,B as P,C as D,M as me,J as u,I as o,b3 as A,bg as y,bW as ce,D as F,E as v,K as e,bI as pe,H as ve,X as fe,b5 as _e,bD as xe}from"./index.cc829fc2.js";import{_ as ge}from"./Switch.ce0e6d45.js";import{_ as be}from"./Space.675c9aba.js";import{u as ye}from"./use-compitable.a0183567.js";import{_ as Ve}from"./Cascader.22fee3e2.js";import"./Tooltip.78d8c0c4.js";import"./get-slot.5d64528d.js";import"./utils.127699b4.js";import"./ChevronRight.52a4f7d2.js";import"./Checkbox.85b5e5ca.js";import"./Selection.be1938cc.js";import"./Tag.75d70c4f.js";const ke=I("svg",{viewBox:"0 0 512 512"},I("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),we=ee("rate",{display:"inline-flex",flexWrap:"nowrap"},[N("&:hover",[E("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),E("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[N("&:not(:first-child)",`
 margin-left: 6px;
 `),H("active",`
 color: var(--n-item-color-active);
 `)]),te("readonly",`
 cursor: pointer;
 `,[E("item",[N("&:hover",`
 transform: scale(1.05);
 `),N("&:active",`
 transform: scale(0.96);
 `)])]),E("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[H("active",`
 color: var(--n-item-color-active);
 `)])]),he=Object.assign(Object.assign({},Q.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),$e=T({name:"Rate",props:he,setup(s){const{mergedClsPrefixRef:t,inlineThemeDisabled:k}=le(s),n=Q("Rate","-rate",we,ie,s,t),m=ne(s,"value"),g=U(s.defaultValue),f=U(null),r=oe(s),c=ye(m,g);function b(i){const{"onUpdate:value":d,onUpdateValue:x}=s,{nTriggerFormChange:_,nTriggerFormInput:L}=r;d&&P(d,i),x&&P(x,i),g.value=i,_(),L()}function $(i,d){return s.allowHalf?d.offsetX>=Math.floor(d.currentTarget.offsetWidth/2)?i+1:i+.5:i+1}let w=!1;function l(i,d){w||(f.value=$(i,d))}function M(){f.value=null}function C(i,d){var x;const{clearable:_}=s,L=$(i,d);_&&L===c.value?(w=!0,(x=s.onClear)===null||x===void 0||x.call(s),f.value=null,b(null)):b(L)}function p(){w=!1}const S=B(()=>{const{size:i}=s,{self:d}=n.value;return typeof i=="number"?`${i}px`:d[ue("size",i)]}),z=B(()=>{const{common:{cubicBezierEaseInOut:i},self:d}=n.value,{itemColor:x,itemColorActive:_}=d,{color:L}=s;return{"--n-bezier":i,"--n-item-color":x,"--n-item-color-active":L||_,"--n-item-size":S.value}}),V=k?ae("rate",B(()=>{const i=S.value,{color:d}=s;let x="";return i&&(x+=i[0]),d&&(x+=re(d)),x}),z,s):void 0;return{mergedClsPrefix:t,mergedValue:c,hoverIndex:f,handleMouseMove:l,handleClick:C,handleMouseLeave:M,handleMouseEnterSomeStar:p,cssVars:k?void 0:z,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){const{readonly:s,hoverIndex:t,mergedValue:k,mergedClsPrefix:n,onRender:m,$slots:{default:g}}=this;return m==null||m(),I("div",{class:[`${n}-rate`,{[`${n}-rate--readonly`]:s},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},se(this.count,(f,r)=>{const c=g?g():I(de,{clsPrefix:n},{default:()=>ke}),b=t!==null?r+1<=t:r+1<=(k||0);return I("div",{key:r,class:[`${n}-rate__item`,b&&`${n}-rate__item--active`],onClick:s?void 0:$=>{this.handleClick(r,$)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:s?void 0:$=>{this.handleMouseMove(r,$)}},c,this.allowHalf?I("div",{class:[`${n}-rate__half`,{[`${n}-rate__half--active`]:!b&&t!==null?r+.5<=t:r+.5<=(k||0)}]},c):null)}))}}),Ce=T({__name:"MyInputGroup",props:{modelValue:null,disable:{type:Boolean},label:null,min:{default:0},max:null,text:null,command:null},emits:["update:modelValue"],setup(s){const t=s;async function k(){var m;const n=await h(t.command+" "+t.modelValue);(n==null?void 0:n.code)==200&&((m=window.$message)==null||m.success(n.msg))}return(n,m)=>{const g=O,f=W,r=j,c=G;return D(),me(c,null,{default:u(()=>[o(g,null,{default:u(()=>[A(y(s.label),1)]),_:1}),o(f,{value:s.modelValue,min:s.min,max:s.max,disabled:s.disable,style:ce({width:s.max.toString().length+5+"rem"}),"onUpdate:value":m[0]||(m[0]=b=>n.$emit("update:modelValue",b))},null,8,["value","min","max","disabled","style"]),o(r,{text:s.text,disabled:s.disable,onClickAsync:k},null,8,["text","disabled"])]),_:1})}}}),Le={class:"flex justify-center"},Ue={class:"text-4 mr-4"},Me=T({__name:"MySwitch",props:{modelValue:{type:Boolean},text:null,disable:{type:Boolean},command:null},emits:["update:modelValue"],setup(s,{emit:t}){const k=s,n=U(!1);async function m(f){var r;n.value=!0;try{const c=await h(k.command+" "+f);(c==null?void 0:c.code)==200?((r=window.$message)==null||r.success(c.msg),t("update:modelValue",f)):t("update:modelValue",!f)}catch{}finally{n.value=!1}}const g=pe(m,1e3);return(f,r)=>{const c=ge;return D(),F("div",Le,[v("span",Ue,y(s.text),1),o(c,{value:s.modelValue,loading:n.value,disabled:s.disable,"onUpdate:value":e(g)},null,8,["value","loading","disabled","onUpdate:value"])])}}}),Ae={class:"inline-block",viewBox:"0 0 48 48",width:"1em",height:"1em"},Ie=["id"],Se=v("g",{fill:"none",stroke:"#fff","stroke-linejoin":"round","stroke-width":"4"},[v("rect",{width:"34",height:"22",x:"7",y:"22.048",fill:"#555",rx:"2"}),v("path",{"stroke-linecap":"round",d:"M14 22v-7.995c-.005-5.135 3.923-9.438 9.086-9.954S32.967 6.974 34 12.006M24 30v6"})],-1),ze=[Se],Be=["mask"];function Re(s,t){return D(),F("svg",Ae,[v("mask",{id:s.idMap.svgIDa},ze,8,Ie),v("path",{fill:"currentColor",d:"M0 0h48v48H0z",mask:"url(#"+s.idMap.svgIDa+")"},null,8,Be)])}const Ne={name:"icon-park-twotone-unlock",render:Re,data(){return{idMap:{svgIDa:"uicons-"+(()=>Math.random().toString(36).substr(2,10))()}}}},Ee={class:"px-10"},Te={class:"flex-col items-center gap-y-5 mb-5"},De={class:"flex-col gap-y-2"},Fe={class:"flex-center"},He={class:"text-4"},Pe={class:"flex"},je={class:"flex-col items-center gap-y-5"},Oe={class:"text-4"},ut=T({__name:"index",setup(s){const{t,tm:k}=ve(),n=fe({worldLevel:0,bpLevel:0,towerLevel:0,playerLevel:1,skillN:0,skillE:0,skillQ:0,avatarLevel:0,constellation:0,fetterLevel:0}),m=U(1),g=U(1),f=U(4),r=B(()=>` lv${m.value} r${g.value} ${f.value}*`),c=B(()=>k("data.weather")),b=U(null);async function $(){var p;if(!b.value)return;const[w,l]=b.value.split("_"),M=`w ${["sunny","cloudy","rain","thunderstorm","snow","mist"][Number(w)]} ${l}`,C=await h(M);(C==null?void 0:C.code)===200&&((p=window.$message)==null||p.success(C.msg))}return _e(async()=>{const w=await Y();(w==null?void 0:w.code)===200?(Object.assign(n,w.data),b.value=`${n.climateType}_${n.weatherId}`):Object.assign(n,{})}),(w,l)=>{const M=Z,C=Ne,p=j,S=xe,z=X,V=Me,i=be,d=W,x=$e,_=Ce,L=Ve,q=O,K=G;return D(),F("div",Ee,[o(M,{title:e(t)("general settings")},null,8,["title"]),v("div",Te,[o(i,{class:"items-center"},{default:u(()=>[o(p,{text:e(t)("unlock map"),onClickAsync:l[0]||(l[0]=a=>e(h)("setprop unlockmap 1"))},{default:u(()=>[o(C)]),_:1},8,["text"]),o(z,{"show-icon":!1},{trigger:u(()=>[o(S,null,{default:u(()=>[A(y(e(t)("level-up all")),1)]),_:1})]),action:u(()=>[o(p,{text:e(t)("all"),onClickAsync:l[1]||(l[1]=a=>e(R)(0))},null,8,["text"]),o(p,{text:e(t)("avatar lv"),onClickAsync:l[2]||(l[2]=a=>e(R)(1))},null,8,["text"]),o(p,{text:e(t)("talent lv"),onClickAsync:l[3]||(l[3]=a=>e(R)(2))},null,8,["text"]),o(p,{text:e(t)("friendship"),onClickAsync:l[4]||(l[4]=a=>e(R)(3))},null,8,["text"])]),default:u(()=>[A(" "+y(e(t)("level-up all options")),1)]),_:1}),o(V,{modelValue:n.inGodMode,"onUpdate:modelValue":l[5]||(l[5]=a=>n.inGodMode=a),text:e(t)("god mode"),command:"prop god"},null,8,["modelValue","text"]),o(V,{modelValue:n.unLimitedStamina,"onUpdate:modelValue":l[6]||(l[6]=a=>n.unLimitedStamina=a),text:e(t)("un stamina"),command:"prop ns"},null,8,["modelValue","text"]),o(V,{modelValue:n.unLimitedEnergy,"onUpdate:modelValue":l[7]||(l[7]=a=>n.unLimitedEnergy=a),text:e(t)("un energy"),command:"prop ue"},null,8,["modelValue","text"])]),_:1}),o(i,null,{default:u(()=>[o(z,{"show-icon":!1},{trigger:u(()=>[o(S,null,{default:u(()=>[A(y(e(t)("clear inventory")),1)]),_:1})]),action:u(()=>[v("div",De,[o(i,{class:"items-center"},{default:u(()=>[v("span",null,y(e(t)("max lv"))+": ",1),o(d,{value:m.value,"onUpdate:value":l[8]||(l[8]=a=>m.value=a),min:0,max:90,class:"w-35"},null,8,["value"])]),_:1}),o(i,{class:"items-center"},{default:u(()=>[v("span",null,y(e(t)("max refinement"))+": ",1),o(d,{value:g.value,"onUpdate:value":l[9]||(l[9]=a=>g.value=a),min:0,max:5,class:"w-30"},null,8,["value"])]),_:1}),o(i,{class:"items-center"},{default:u(()=>[v("span",null,y(e(t)("max rarity"))+": ",1),o(x,{value:f.value,"onUpdate:value":l[10]||(l[10]=a=>f.value=a)},null,8,["value"])]),_:1}),v("div",Fe,[o(p,{text:e(t)("all"),onClickAsync:l[11]||(l[11]=a=>e(h)("clear all"+e(r)))},null,8,["text"]),o(p,{text:e(t)("weapons"),onClickAsync:l[12]||(l[12]=a=>e(h)("clear wp"+e(r)))},null,8,["text"]),o(p,{text:e(t)("artifacts"),onClickAsync:l[13]||(l[13]=a=>e(h)("clear art"+e(r)))},null,8,["text"]),o(p,{text:e(t)("materials"),onClickAsync:l[14]||(l[14]=a=>e(h)("clear mat"+e(r)))},null,8,["text"])])])]),default:u(()=>[A(" "+y(e(t)("select a option")),1)]),_:1}),o(p,{text:e(t)("unlock open"),onClickAsync:l[15]||(l[15]=a=>e(h)("unlockall"))},null,8,["text"]),o(p,{text:e(t)("no cd"),onClickAsync:e(J)},{tooltip:u(()=>[v("span",null,y(e(t)("all avatars cd 100%")),1)]),_:1},8,["text","onClickAsync"]),o(_,{modelValue:n.playerLevel,"onUpdate:modelValue":l[16]||(l[16]=a=>n.playerLevel=a),label:e(t)("player lv"),text:e(t)("edit"),min:1,max:60,command:"prop player_level"},null,8,["modelValue","label","text"])]),_:1}),o(i,null,{default:u(()=>[o(_,{modelValue:n.worldLevel,"onUpdate:modelValue":l[17]||(l[17]=a=>n.worldLevel=a),label:e(t)("world lv"),text:e(t)("edit"),max:8,command:"prop wl"},null,8,["modelValue","label","text"]),o(_,{modelValue:n.bpLevel,"onUpdate:modelValue":l[18]||(l[18]=a=>n.bpLevel=a),label:e(t)("bp lv"),text:e(t)("edit"),max:50,command:"prop bp"},null,8,["modelValue","label","text"]),o(_,{modelValue:n.towerLevel,"onUpdate:modelValue":l[19]||(l[19]=a=>n.towerLevel=a),label:e(t)("tower lv"),text:e(t)("edit"),max:12,command:"prop tower"},null,8,["modelValue","label","text"])]),_:1}),o(i,{class:"items-center"},{default:u(()=>[v("span",He,y(e(t)("weather")),1),v("div",Pe,[o(L,{value:b.value,"onUpdate:value":l[20]||(l[20]=a=>b.value=a),filterable:"","expand-trigger":"hover","check-strategy":"child",options:e(c),class:"w-100"},null,8,["value","options"]),o(p,{text:e(t)("edit"),onClickAsync:$},null,8,["text"])]),o(V,{modelValue:n.lockWeather,"onUpdate:modelValue":l[21]||(l[21]=a=>n.lockWeather=a),text:e(t)("lock weather"),command:"prop is_weather_locked"},null,8,["modelValue","text"]),o(V,{modelValue:n.lockGameTime,"onUpdate:modelValue":l[22]||(l[22]=a=>n.lockGameTime=a),text:e(t)("lock time"),command:"prop is_game_time_locked"},null,8,["modelValue","text"])]),_:1})]),o(M,{title:e(t)("current avatar")},null,8,["title"]),v("div",je,[o(i,{class:"items-center"},{default:u(()=>[v("span",Oe,y(e(t)("talent lv")),1),o(_,{modelValue:n.skillN,"onUpdate:modelValue":l[23]||(l[23]=a=>n.skillN=a),label:"N",text:e(t)("edit"),max:15,command:"talent n"},null,8,["modelValue","text"]),o(_,{modelValue:n.skillE,"onUpdate:modelValue":l[24]||(l[24]=a=>n.skillE=a),label:"E",text:e(t)("edit"),max:12,command:"talent e"},null,8,["modelValue","text"]),o(_,{modelValue:n.skillQ,"onUpdate:modelValue":l[25]||(l[25]=a=>n.skillQ=a),label:"Q",text:e(t)("edit"),max:12,command:"talent q"},null,8,["modelValue","text"])]),_:1}),o(i,null,{default:u(()=>[o(K,{class:"w-42 text-center"},{default:u(()=>[o(q,null,{default:u(()=>[A(y(e(t)("avatar lv")),1)]),_:1}),o(d,{value:n.avatarLevel,"show-button":!1,disabled:""},null,8,["value"])]),_:1}),o(_,{modelValue:n.constellation,"onUpdate:modelValue":l[26]||(l[26]=a=>n.constellation=a),label:e(t)("constellation"),text:e(t)("edit"),max:6,command:"setConst"},null,8,["modelValue","label","text"]),o(_,{modelValue:n.fetterLevel,"onUpdate:modelValue":l[27]||(l[27]=a=>n.fetterLevel=a),label:e(t)("friendship"),text:e(t)("edit"),max:10,command:"setFetterLevel"},null,8,["modelValue","label","text"])]),_:1})])])}}});export{ut as default};
