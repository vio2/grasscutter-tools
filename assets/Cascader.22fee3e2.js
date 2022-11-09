import{a as I,b$ as ht,d as re,bx as vt,A as j,r as x,_ as mt,h as d,T as xe,c as gt,j as Ce,g as v,n as ue,bd as pt,m as Ae,N as bt,b7 as ce,aj as Ee,aW as Ue,be as yt,b0 as wt,t as de,ac as Ve,v as we,b as q,e as Rt,u as He,bq as kt,c0 as xt,W as $e,p as Ct,an as St,i as Mt,c1 as Tt,a3 as Nt,aZ as Ft,bN as Pt,c2 as _t,B as ee}from"./index.cc829fc2.js";import{F as Ot,h as Fe,V as Kt,u as Lt,d as It,e as Bt,N as At,c as qe,a as Vt,S as $t}from"./utils.127699b4.js";import{C as zt}from"./ChevronRight.52a4f7d2.js";import{_ as jt}from"./Checkbox.85b5e5ca.js";import{u as Dt,o as ke,V as Et,b as Ut,c as ze}from"./Tooltip.78d8c0c4.js";import{u as je}from"./use-compitable.a0183567.js";import{N as Ht}from"./Selection.be1938cc.js";const qt=I("base-menu-mask",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 padding: 14px;
 overflow: hidden;
`,[ht()]),Wt=re({name:"BaseMenuMask",props:{clsPrefix:{type:String,required:!0}},setup(t){vt("-base-menu-mask",qt,j(t,"clsPrefix"));const a=x(null);let l=null;const s=x(!1);return mt(()=>{l!==null&&window.clearTimeout(l)}),Object.assign({message:a,show:s},{showOnce(p,P=1500){l&&window.clearTimeout(l),s.value=!0,a.value=p,l=window.setTimeout(()=>{s.value=!1,a.value=null},P)}})},render(){return d(xe,{name:"fade-in-transition"},{default:()=>this.show?d("div",{class:`${this.clsPrefix}-base-menu-mask`},this.message):null})}});function Re(t){return t?t.map(a=>a.rawNode):null}function Zt(t,a,l,s){const h=[],p=[];function P(m){for(const k of m){if(k.disabled)continue;const{rawNode:b}=k;p.push(b),(k.isLeaf||!a)&&h.push({label:Pe(k,s,l),value:k.key,rawNode:k.rawNode,path:Array.from(p)}),!k.isLeaf&&k.children&&P(k.children),p.pop()}}return P(t),h}function Pe(t,a,l){const s=[];for(;t;)s.push(t.rawNode[l]),t=t.parent;return s.reverse().join(a)}const fe=gt("n-cascader"),De=re({name:"NCascaderOption",props:{tmNode:{type:Object,required:!0}},setup(t){const{expandTriggerRef:a,remoteRef:l,multipleRef:s,mergedValueRef:h,checkedKeysRef:p,indeterminateKeysRef:P,hoverKeyPathRef:m,keyboardKeyRef:k,loadingKeySetRef:b,cascadeRef:C,mergedCheckStrategyRef:B,onLoadRef:K,mergedClsPrefixRef:W,mergedThemeRef:Z,labelFieldRef:te,updateHoverKey:g,updateKeyboardKey:R,addLoadingKey:T,deleteLoadingKey:S,closeMenu:L,doCheck:$,doUncheck:ne,renderLabelRef:le}=Ce(fe),V=v(()=>t.tmNode.key),u=v(()=>{const{value:M}=a,{value:U}=l;return!U&&M==="hover"}),N=v(()=>{if(u.value)return ie}),A=v(()=>{if(u.value)return se}),_=ue(()=>{const{value:M}=s;return M?p.value.includes(V.value):h.value===V.value}),D=ue(()=>s.value?P.value.includes(V.value):!1),G=ue(()=>m.value.includes(V.value)),he=ue(()=>{const{value:M}=k;return M===null?!1:M===V.value}),Se=ue(()=>l.value?b.value.has(V.value):!1),Me=v(()=>{if(s.value&&C.value||B.value!=="child")return!0}),z=v(()=>t.tmNode.isLeaf),ae=v(()=>t.tmNode.disabled),E=v(()=>t.tmNode.rawNode[te.value]),J=v(()=>t.tmNode.shallowLoaded);function X(M){if(ae.value)return;const{value:U}=l,{value:O}=b,{value:me}=K,{value:F}=V,{value:ge}=z,{value:pe}=J;Fe(M,"checkbox")||(U&&!pe&&!O.has(F)&&me&&(T(F),me(t.tmNode.rawNode).then(()=>{S(F)}).catch(()=>{S(F)})),g(F),R(F)),ge&&ve()}function ie(){if(!u.value||ae.value)return;const{value:M}=V;g(M),R(M)}function se(){!u.value||ie()}function Te(){const{value:M}=z;M||ve()}function ve(){const{value:M}=s,{value:U}=V;M?D.value||_.value?ne(U):$(U):($(U),L(!0))}return{checkStrategy:B,multiple:s,cascade:C,checked:_,indeterminate:D,hoverPending:G,keyboardPending:he,isLoading:Se,showCheckbox:Me,isLeaf:z,disabled:ae,label:E,mergedClsPrefix:W,mergedTheme:Z,handleClick:X,handleCheckboxUpdateValue:Te,mergedHandleMouseEnter:N,mergedHandleMouseMove:A,renderLabel:le}},render(){const{mergedClsPrefix:t,renderLabel:a}=this;return d("div",{class:[`${t}-cascader-option`,{[`${t}-cascader-option--pending`]:this.keyboardPending||this.hoverPending,[`${t}-cascader-option--disabled`]:this.disabled,[`${t}-cascader-option--show-prefix`]:this.showCheckbox}],onMouseenter:this.mergedHandleMouseEnter,onMousemove:this.mergedHandleMouseMove,onClick:this.handleClick},this.showCheckbox?d("div",{class:`${t}-cascader-option__prefix`},d(jt,{focusable:!1,"data-checkbox":!0,disabled:this.disabled,checked:this.checked,indeterminate:this.indeterminate,theme:this.mergedTheme.peers.Checkbox,themeOverrides:this.mergedTheme.peerOverrides.Checkbox,onUpdateChecked:this.handleCheckboxUpdateValue})):null,d("span",{class:`${t}-cascader-option__label`},a?a(this.tmNode.rawNode,this.checked):this.label),d("div",{class:`${t}-cascader-option__suffix`},d("div",{class:`${t}-cascader-option-icon-placeholder`},this.isLeaf?this.checkStrategy==="child"&&!(this.multiple&&this.cascade)?d(xe,{name:"fade-in-scale-up-transition"},{default:()=>this.checked?d(Ae,{clsPrefix:t,class:`${t}-cascader-option-icon ${t}-cascader-option-icon--checkmark`},{default:()=>d(Ot,null)}):null}):null:d(pt,{clsPrefix:t,scale:.85,strokeWidth:24,show:this.isLoading,class:`${t}-cascader-option-icon`},{default:()=>d(Ae,{clsPrefix:t,key:"arrow",class:`${t}-cascader-option-icon ${t}-cascader-option-icon--arrow`},{default:()=>d(zt,null)})}))))}}),Gt=re({name:"CascaderSubmenu",props:{depth:{type:Number,required:!0},tmNodes:{type:Array,required:!0}},setup(){const{virtualScrollRef:t,mergedClsPrefixRef:a,mergedThemeRef:l,optionHeightRef:s}=Ce(fe),h=x(null),p=x(null),P={scroll(m,k){var b,C;t.value?(b=p.value)===null||b===void 0||b.scrollTo({index:m}):(C=h.value)===null||C===void 0||C.scrollTo({index:m,elSize:k})}};return Object.assign({mergedClsPrefix:a,mergedTheme:l,scrollbarInstRef:h,vlInstRef:p,virtualScroll:t,itemSize:v(()=>ce(s.value)),handleVlScroll:()=>{var m;(m=h.value)===null||m===void 0||m.sync()},getVlContainer:()=>{var m;return(m=p.value)===null||m===void 0?void 0:m.listElRef},getVlContent:()=>{var m;return(m=p.value)===null||m===void 0?void 0:m.itemsElRef}},P)},render(){const{mergedClsPrefix:t,mergedTheme:a,virtualScroll:l}=this;return d("div",{class:[l&&`${t}-cascader-submenu--virtual`,`${t}-cascader-submenu`]},d(bt,{ref:"scrollbarInstRef",theme:a.peers.Scrollbar,themeOverrides:a.peerOverrides.Scrollbar,container:l?this.getVlContainer:void 0,content:l?this.getVlContent:void 0},{default:()=>l?d(Kt,{items:this.tmNodes,itemSize:this.itemSize,onScroll:this.handleVlScroll,showScrollbar:!1,ref:"vlInstRef"},{default:({item:s})=>d(De,{key:s.key,tmNode:s})}):this.tmNodes.map(s=>d(De,{key:s.key,tmNode:s}))}))}}),Jt=re({name:"NCascaderMenu",props:{value:[String,Number,Array],placement:{type:String,default:"bottom-start"},show:Boolean,menuModel:{type:Array,required:!0},loading:Boolean,onFocus:{type:Function,required:!0},onBlur:{type:Function,required:!0},onKeydown:{type:Function,required:!0},onMousedown:{type:Function,required:!0},onTabout:{type:Function,required:!0}},setup(t){const{localeRef:a,isMountedRef:l,mergedClsPrefixRef:s,syncCascaderMenuPosition:h,handleCascaderMenuClickOutside:p,mergedThemeRef:P}=Ce(fe),m=[],k=x(null),b=x(null);function C(){h()}Lt(b,C);function B(g){var R;const{value:{loadingRequiredMessage:T}}=a;(R=k.value)===null||R===void 0||R.showOnce(T(g))}function K(g){p(g)}function W(g){const{value:R}=b;!R||R.contains(g.relatedTarget)||t.onFocus(g)}function Z(g){const{value:R}=b;!R||R.contains(g.relatedTarget)||t.onBlur(g)}return Object.assign({isMounted:l,mergedClsPrefix:s,selfElRef:b,submenuInstRefs:m,maskInstRef:k,mergedTheme:P,handleFocusin:W,handleFocusout:Z,handleClickOutside:K},{scroll(g,R,T){const S=m[g];S&&S.scroll(R,T)},showErrorMessage:B})},render(){const{submenuInstRefs:t,mergedClsPrefix:a,mergedTheme:l}=this;return d(xe,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.show?Ee(d("div",{tabindex:"0",ref:"selfElRef",class:`${a}-cascader-menu`,onMousedown:this.onMousedown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeydown:this.onKeydown},this.menuModel[0].length?d("div",{class:`${a}-cascader-submenu-wrapper`},this.menuModel.map((s,h)=>d(Gt,{ref:p=>{p&&(t[h]=p)},key:h,tmNodes:s,depth:h+1})),d(Wt,{clsPrefix:a,ref:"maskInstRef"})):d("div",{class:`${a}-cascader-menu__empty`},yt(this.$slots.empty,()=>[d(Bt,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty})])),wt(this.$slots.action,s=>s&&d("div",{class:`${a}-cascader-menu-action`,"data-action":!0},s)),d(It,{onFocus:this.onTabout})),[[Ue,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),Qt=re({name:"NCascaderSelectMenu",props:{value:{type:[String,Number,Array],default:null},show:Boolean,pattern:{type:String,default:""},multiple:Boolean,tmNodes:{type:Array,default:()=>[]},filter:Function,labelField:{type:String,required:!0},separator:{type:String,required:!0}},setup(t){const{isMountedRef:a,mergedValueRef:l,mergedClsPrefixRef:s,mergedThemeRef:h,mergedCheckStrategyRef:p,syncSelectMenuPosition:P,closeMenu:m,handleSelectMenuClickOutside:k,doUncheck:b,doCheck:C,clearPattern:B}=Ce(fe),K=x(null),W=v(()=>Zt(t.tmNodes,p.value==="child",t.labelField,t.separator)),Z=v(()=>{const{filter:u}=t;if(u)return u;const{labelField:N}=t;return(A,_,D)=>D.some(G=>G[N]&&~G[N].indexOf(A))}),te=v(()=>{const{pattern:u}=t,{value:N}=Z;return(u?W.value.filter(A=>N(u,A.rawNode,A.path)):W.value).map(A=>({value:A.value,label:A.label}))}),g=v(()=>qe(te.value,Vt("value","children")));function R(){P()}function T(u){S(u)}function S(u){if(t.multiple){const{value:N}=l;Array.isArray(N)?N.includes(u.key)?b(u.key):C(u.key):N===null&&C(u.key),B()}else C(u.key),m(!0)}function L(){var u;(u=K.value)===null||u===void 0||u.prev()}function $(){var u;(u=K.value)===null||u===void 0||u.next()}function ne(){var u;if(K){const N=(u=K.value)===null||u===void 0?void 0:u.getPendingTmNode();return N&&S(N),!0}return!1}function le(u){k(u)}return Object.assign({isMounted:a,mergedTheme:h,mergedClsPrefix:s,menuInstRef:K,selectTreeMate:g,handleResize:R,handleToggle:T,handleClickOutside:le},{prev:L,next:$,enter:ne})},render(){const{mergedClsPrefix:t,isMounted:a,mergedTheme:l}=this;return d(xe,{name:"fade-in-scale-up-transition",appear:a},{default:()=>this.show?Ee(d(At,{ref:"menuInstRef",onResize:this.handleResize,clsPrefix:t,class:`${t}-cascader-menu`,autoPending:!0,themeOverrides:l.peerOverrides.InternalSelectMenu,theme:l.peers.InternalSelectMenu,treeMate:this.selectTreeMate,multiple:this.multiple,value:this.value,onToggle:this.handleToggle}),[[Ue,this.handleClickOutside,void 0,{capture:!0}]]):null})}}),Xt=de([I("cascader-menu",`
 outline: none;
 position: relative;
 margin: 4px 0;
 display: flex;
 flex-flow: column nowrap;
 border-radius: var(--n-menu-border-radius);
 overflow: hidden;
 box-shadow: var(--n-menu-box-shadow);
 color: var(--n-option-text-color);
 background-color: var(--n-menu-color);
 `,[Ve({transformOrigin:"inherit",duration:"0.2s"}),we("empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),I("scrollbar",{width:"100%"}),I("base-menu-mask",{backgroundColor:"var(--n-menu-mask-color)"}),I("base-loading",{color:"var(--n-loading-color)"}),I("cascader-submenu-wrapper",`
 position: relative;
 display: flex;
 flex-wrap: nowrap;
 `),I("cascader-submenu",`
 height: var(--n-menu-height);
 min-width: var(--n-column-width);
 position: relative;
 `,[q("virtual",`
 width: var(--n-column-width);
 `),I("scrollbar-content",{position:"relative"}),de("&:first-child",`
 border-top-left-radius: var(--n-menu-border-radius);
 border-bottom-left-radius: var(--n-menu-border-radius);
 `),de("&:last-child",`
 border-top-right-radius: var(--n-menu-border-radius);
 border-bottom-right-radius: var(--n-menu-border-radius);
 `),de("&:not(:first-child)",`
 border-left: 1px solid var(--n-menu-divider-color);
 `)]),I("cascader-menu-action",`
 box-sizing: border-box;
 padding: 8px;
 border-top: 1px solid var(--n-menu-divider-color);
 `),I("cascader-option",`
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 padding: 0 0 0 18px;
 box-sizing: border-box;
 min-width: 182px;
 background-color: #0000;
 display: flex;
 align-items: center;
 white-space: nowrap;
 position: relative;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color 0.2s var(--n-bezier);
 `,[q("show-prefix",{paddingLeft:0}),we("label",`
 flex: 1 0 0;
 overflow: hidden;
 text-overflow: ellipsis;
 `),we("prefix",{width:"32px",display:"flex",alignItems:"center",justifyContent:"center"}),we("suffix",{width:"32px",display:"flex",alignItems:"center",justifyContent:"center"}),I("cascader-option-icon-placeholder",{lineHeight:0,position:"relative",width:"16px",height:"16px",fontSize:"16px"},[I("cascader-option-icon",[q("checkmark",{color:"var(--n-option-check-mark-color)"},[Ve({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})]),q("arrow",{color:"var(--n-option-arrow-color)"})])]),q("selected",{color:"var(--n-option-text-color-active)"}),q("active",{color:"var(--n-option-text-color-active)",backgroundColor:"var(--n-option-color-hover)"}),q("pending",{backgroundColor:"var(--n-option-color-hover)"}),de("&:hover",{backgroundColor:"var(--n-option-color-hover)"}),q("disabled",`
 color: var(--n-option-text-color-disabled);
 background-color: #0000;
 cursor: not-allowed;
 `,[I("cascader-option-icon",[q("arrow",{color:"var(--n-option-text-color-disabled)"})])])])]),I("cascader",`
 z-index: auto;
 position: relative;
 width: 100%;
 `)]),Yt=Object.assign(Object.assign({},He.props),{allowCheckingNotLoaded:Boolean,to:ke.propTo,bordered:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},value:[String,Number,Array],defaultValue:{type:[String,Number,Array],default:null},placeholder:String,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},disabledField:{type:String,default:"disabled"},expandTrigger:{type:String,default:"click"},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},remote:Boolean,onLoad:Function,separator:{type:String,default:" / "},filter:Function,placement:{type:String,default:"bottom-start"},cascade:{type:Boolean,default:!0},leafOnly:Boolean,showPath:{type:Boolean,default:!0},show:{type:Boolean,default:void 0},maxTagCount:[String,Number],menuProps:Object,filterMenuProps:Object,virtualScroll:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},valueField:{type:String,default:"value"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},renderLabel:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onBlur:Function,onFocus:Function,onChange:[Function,Array]}),sn=re({name:"Cascader",props:Yt,setup(t){const{mergedBorderedRef:a,mergedClsPrefixRef:l,namespaceRef:s,inlineThemeDisabled:h}=Rt(t),p=He("Cascader","-cascader",Xt,Tt,t,l),{localeRef:P}=Dt("Cascader"),m=x(t.defaultValue),k=v(()=>t.value),b=je(k,m),C=v(()=>t.leafOnly?"child":t.checkStrategy),B=x(""),K=kt(t),{mergedSizeRef:W,mergedDisabledRef:Z,mergedStatusRef:te}=K,g=x(null),R=x(null),T=x(null),S=x(null),L=x(null),$=x(new Set),ne=x(null),le=x(null),V=ke(t),u=x(!1),N=e=>{$.value.add(e)},A=e=>{$.value.delete(e)},_=v(()=>{const{valueField:e,childrenField:n,disabledField:o}=t;return qe(t.options,{getDisabled(f){return f[o]},getKey(f){return f[e]},getChildren(f){return f[n]}})}),D=v(()=>{const{cascade:e,multiple:n}=t;return n&&Array.isArray(b.value)?_.value.getCheckedKeys(b.value,{cascade:e,allowNotLoaded:t.allowCheckingNotLoaded}):{checkedKeys:[],indeterminateKeys:[]}}),G=v(()=>D.value.checkedKeys),he=v(()=>D.value.indeterminateKeys),Se=v(()=>{const{treeNodePath:e,treeNode:n}=_.value.getPath(L.value);let o;return n===null?o=[_.value.treeNodes]:(o=e.map(f=>f.siblings),!n.isLeaf&&!$.value.has(n.key)&&n.children&&o.push(n.children)),o}),Me=v(()=>{const{keyPath:e}=_.value.getPath(L.value);return e}),z=v(()=>p.value.self.optionHeight);xt(t.options)&&$e(t.options,(e,n)=>{e!==n&&(L.value=null,S.value=null)});function ae(e){const{onUpdateShow:n,"onUpdate:show":o}=t;n&&ee(n,e),o&&ee(o,e),M.value=e}function E(e,n,o){const{onUpdateValue:f,"onUpdate:value":r,onChange:y}=t,{nTriggerFormInput:i,nTriggerFormChange:w}=K;f&&ee(f,e,n,o),r&&ee(r,e,n,o),y&&ee(y,e,n,o),m.value=e,i(),w()}function J(e){S.value=e}function X(e){L.value=e}function ie(e){var n;const{cascade:o,multiple:f,filterable:r}=t,{value:{check:y,getNode:i,getPath:w}}=_;if(f)try{const{checkedKeys:c}=y(e,D.value.checkedKeys,{cascade:o,checkStrategy:C.value,allowNotLoaded:t.allowCheckingNotLoaded});E(c,c.map(Q=>{var H;return((H=i(Q))===null||H===void 0?void 0:H.rawNode)||null}),c.map(Q=>{var H;return Re((H=w(Q))===null||H===void 0?void 0:H.treeNodePath)})),r&&Ne(),S.value=e,L.value=e}catch(c){if(c instanceof $t){if(g.value){const Q=i(e);Q!==null&&g.value.showErrorMessage(Q.rawNode[t.labelField])}}else throw c}else if(C.value==="child"){const c=i(e);if(c!=null&&c.isLeaf)E(e,c.rawNode,Re(w(e).treeNodePath));else return!1}else{const c=i(e);E(e,(c==null?void 0:c.rawNode)||null,Re((n=w(e))===null||n===void 0?void 0:n.treeNodePath))}return!0}function se(e){const{cascade:n,multiple:o}=t;if(o){const{value:{uncheck:f,getNode:r,getPath:y}}=_,{checkedKeys:i}=f(e,D.value.checkedKeys,{cascade:n,checkStrategy:C.value,allowNotLoaded:t.allowCheckingNotLoaded});E(i,i.map(w=>{var c;return((c=r(w))===null||c===void 0?void 0:c.rawNode)||null}),i.map(w=>{var c;return Re((c=y(w))===null||c===void 0?void 0:c.treeNodePath)})),S.value=e,L.value=e}}const Te=v(()=>{if(t.multiple){const{showPath:e,separator:n,labelField:o,cascade:f}=t,{getCheckedKeys:r,getNode:y}=_.value;return r(G.value,{cascade:f,checkStrategy:C.value,allowNotLoaded:t.allowCheckingNotLoaded}).checkedKeys.map(w=>{const c=y(w);return c===null?{label:String(w),value:w}:{label:e?Pe(c,n,o):c.rawNode[o],value:c.key}})}else return[]}),ve=v(()=>{const{multiple:e,showPath:n,separator:o,labelField:f}=t,{value:r}=b;if(!e&&!Array.isArray(r)){const{getNode:y}=_.value;if(r===null)return null;const i=y(r);return i===null?{label:String(r),value:r}:{label:n?Pe(i,o,f):i.rawNode[f],value:i.key}}else return null}),M=x(!1),U=j(t,"show"),O=je(U,M),me=v(()=>{const{placeholder:e}=t;return e!==void 0?e:P.value.placeholder}),F=v(()=>!!(t.filterable&&B.value));$e(O,e=>{if(!e||t.multiple)return;const{value:n}=b;!Array.isArray(n)&&n!==null?(S.value=n,L.value=n,Nt(()=>{var o;if(!O.value)return;const{value:f}=L;if(b.value!==null){const r=_.value.getNode(f);r&&((o=g.value)===null||o===void 0||o.scroll(r.level,r.index,ce(z.value)))}})):(S.value=null,L.value=null)},{immediate:!0});function ge(e){const{onBlur:n}=t,{nTriggerFormBlur:o}=K;n&&ee(n,e),o()}function pe(e){const{onFocus:n}=t,{nTriggerFormFocus:o}=K;n&&ee(n,e),o()}function Ne(){var e;(e=T.value)===null||e===void 0||e.focusInput()}function We(){var e;(e=T.value)===null||e===void 0||e.focus()}function be(){Z.value||(B.value="",ae(!0),t.filterable&&Ne())}function Y(e=!1){e&&We(),ae(!1),B.value=""}function _e(e){var n;F.value||O.value&&(!((n=T.value)===null||n===void 0)&&n.$el.contains(Ft(e))||Y())}function Ze(e){!F.value||_e(e)}function Oe(){t.clearFilterAfterSelect&&(B.value="")}function ye(e){var n,o,f;const{value:r}=S,{value:y}=_;switch(e){case"prev":if(r!==null){const i=y.getPrev(r,{loop:!0});i!==null&&(J(i.key),(n=g.value)===null||n===void 0||n.scroll(i.level,i.index,ce(z.value)))}break;case"next":if(r===null){const i=y.getFirstAvailableNode();i!==null&&(J(i.key),(o=g.value)===null||o===void 0||o.scroll(i.level,i.index,ce(z.value)))}else{const i=y.getNext(r,{loop:!0});i!==null&&(J(i.key),(f=g.value)===null||f===void 0||f.scroll(i.level,i.index,ce(z.value)))}break;case"child":if(r!==null){const i=y.getNode(r);if(i!==null)if(i.shallowLoaded){const w=y.getChild(r);w!==null&&(X(r),J(w.key))}else{const{value:w}=$;if(!w.has(r)){N(r),X(r);const{onLoad:c}=t;c&&c(i.rawNode).then(()=>{A(r)}).catch(()=>{A(r)})}}}break;case"parent":if(r!==null){const i=y.getParent(r);if(i!==null){J(i.key);const w=i.getParent();X(w===null?null:w.key)}}break}}function Ke(e){var n,o;switch(e.key){case" ":case"ArrowDown":case"ArrowUp":if(t.filterable&&O.value)break;e.preventDefault();break}if(!Fe(e,"action"))switch(e.key){case" ":if(t.filterable)return;case"Enter":if(!O.value)be();else{const{value:f}=F,{value:r}=S;if(f)R.value&&R.value.enter()&&Oe();else if(r!==null)if(G.value.includes(r)||he.value.includes(r))se(r);else{const y=ie(r);!t.multiple&&y&&Y(!0)}}break;case"ArrowUp":e.preventDefault(),O.value&&(F.value?(n=R.value)===null||n===void 0||n.prev():ye("prev"));break;case"ArrowDown":e.preventDefault(),O.value?F.value?(o=R.value)===null||o===void 0||o.next():ye("next"):be();break;case"ArrowLeft":e.preventDefault(),O.value&&!F.value&&ye("parent");break;case"ArrowRight":e.preventDefault(),O.value&&!F.value&&ye("child");break;case"Escape":O.value&&(Pt(e),Y(!0))}}function Ge(e){Ke(e)}function Je(e){e.stopPropagation(),t.multiple?E([],[],[]):E(null,null,null)}function Qe(e){var n;!((n=g.value)===null||n===void 0)&&n.$el.contains(e.relatedTarget)||(u.value=!0,pe(e))}function Xe(e){var n;!((n=g.value)===null||n===void 0)&&n.$el.contains(e.relatedTarget)||(u.value=!1,ge(e),Y())}function Ye(e){var n;!((n=T.value)===null||n===void 0)&&n.$el.contains(e.relatedTarget)||(u.value=!0,pe(e))}function et(e){var n;!((n=T.value)===null||n===void 0)&&n.$el.contains(e.relatedTarget)||(u.value=!1,ge(e))}function tt(e){Fe(e,"action")||t.multiple&&t.filter&&(e.preventDefault(),Ne())}function nt(){Y(!0)}function lt(){t.filterable?be():O.value?Y(!0):be()}function at(e){B.value=e.target.value}function ot(e){const{multiple:n}=t,{value:o}=b;n&&Array.isArray(o)&&e.value!==void 0?se(e.value):E(null,null,null)}function Le(){var e;(e=ne.value)===null||e===void 0||e.syncPosition()}function Ie(){var e;(e=le.value)===null||e===void 0||e.syncPosition()}function rt(){O.value&&(F.value?Le():Ie())}Ct(fe,{mergedClsPrefixRef:l,mergedThemeRef:p,mergedValueRef:b,checkedKeysRef:G,indeterminateKeysRef:he,hoverKeyPathRef:Me,mergedCheckStrategyRef:C,cascadeRef:j(t,"cascade"),multipleRef:j(t,"multiple"),keyboardKeyRef:S,hoverKeyRef:L,remoteRef:j(t,"remote"),loadingKeySetRef:$,expandTriggerRef:j(t,"expandTrigger"),isMountedRef:St(),onLoadRef:j(t,"onLoad"),virtualScrollRef:j(t,"virtualScroll"),optionHeightRef:z,localeRef:P,labelFieldRef:j(t,"labelField"),renderLabelRef:j(t,"renderLabel"),syncCascaderMenuPosition:Ie,syncSelectMenuPosition:Le,updateKeyboardKey:J,updateHoverKey:X,addLoadingKey:N,deleteLoadingKey:A,doCheck:ie,doUncheck:se,closeMenu:Y,handleSelectMenuClickOutside:Ze,handleCascaderMenuClickOutside:_e,clearPattern:Oe});const it={focus:()=>{var e;(e=T.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=T.value)===null||e===void 0||e.blur()}},Be=v(()=>{const{self:{optionArrowColor:e,optionTextColor:n,optionTextColorActive:o,optionTextColorDisabled:f,optionCheckMarkColor:r,menuColor:y,menuBoxShadow:i,menuDividerColor:w,menuBorderRadius:c,menuHeight:Q,optionColorHover:H,optionHeight:st,optionFontSize:ut,loadingColor:dt,columnWidth:ct},common:{cubicBezierEaseInOut:ft}}=p.value;return{"--n-bezier":ft,"--n-menu-border-radius":c,"--n-menu-box-shadow":i,"--n-menu-height":Q,"--n-column-width":ct,"--n-menu-color":y,"--n-menu-divider-color":w,"--n-option-height":st,"--n-option-font-size":ut,"--n-option-text-color":n,"--n-option-text-color-disabled":f,"--n-option-text-color-active":o,"--n-option-color-hover":H,"--n-option-check-mark-color":r,"--n-option-arrow-color":e,"--n-menu-mask-color":_t(y,{alpha:.75}),"--n-loading-color":dt}}),oe=h?Mt("cascader",void 0,Be,t):void 0;return Object.assign(Object.assign({},it),{handleTriggerResize:rt,mergedStatus:te,selectMenuFollowerRef:ne,cascaderMenuFollowerRef:le,triggerInstRef:T,selectMenuInstRef:R,cascaderMenuInstRef:g,mergedBordered:a,mergedClsPrefix:l,namespace:s,mergedValue:b,mergedShow:O,showSelectMenu:F,pattern:B,treeMate:_,mergedSize:W,mergedDisabled:Z,localizedPlaceholder:me,selectedOption:ve,selectedOptions:Te,adjustedTo:V,menuModel:Se,handleMenuTabout:nt,handleMenuFocus:Ye,handleMenuBlur:et,handleMenuKeydown:Ge,handleMenuMousedown:tt,handleTriggerFocus:Qe,handleTriggerBlur:Xe,handleTriggerClick:lt,handleClear:Je,handleDeleteOption:ot,handlePatternInput:at,handleKeydown:Ke,focused:u,optionHeight:z,mergedTheme:p,cssVars:h?void 0:Be,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender})},render(){const{mergedClsPrefix:t}=this;return d("div",{class:`${t}-cascader`},d(Et,null,{default:()=>[d(Ut,null,{default:()=>d(Ht,{onResize:this.handleTriggerResize,ref:"triggerInstRef",status:this.mergedStatus,clsPrefix:t,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,active:this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,focused:this.focused,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onClick:this.handleTriggerClick,onClear:this.handleClear,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onKeydown:this.handleKeydown},{arrow:()=>{var a,l;return(l=(a=this.$slots).arrow)===null||l===void 0?void 0:l.call(a)}})}),d(ze,{key:"cascaderMenu",ref:"cascaderMenuFollowerRef",show:this.mergedShow&&!this.showSelectMenu,containerClass:this.namespace,placement:this.placement,width:this.options.length?void 0:"target",teleportDisabled:this.adjustedTo===ke.tdkey,to:this.adjustedTo},{default:()=>{var a;(a=this.onRender)===null||a===void 0||a.call(this);const{menuProps:l}=this;return d(Jt,Object.assign({},l,{ref:"cascaderMenuInstRef",class:[this.themeClass,l==null?void 0:l.class],value:this.mergedValue,show:this.mergedShow&&!this.showSelectMenu,menuModel:this.menuModel,style:[this.cssVars,l==null?void 0:l.style],onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onMousedown:this.handleMenuMousedown,onTabout:this.handleMenuTabout}),{action:()=>{var s,h;return(h=(s=this.$slots).action)===null||h===void 0?void 0:h.call(s)},empty:()=>{var s,h;return(h=(s=this.$slots).empty)===null||h===void 0?void 0:h.call(s)}})}}),d(ze,{key:"selectMenu",ref:"selectMenuFollowerRef",show:this.mergedShow&&this.showSelectMenu,containerClass:this.namespace,width:"target",placement:this.placement,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ke.tdkey},{default:()=>{var a;(a=this.onRender)===null||a===void 0||a.call(this);const{filterMenuProps:l}=this;return d(Qt,Object.assign({},l,{ref:"selectMenuInstRef",class:[this.themeClass,l==null?void 0:l.class],value:this.mergedValue,show:this.mergedShow&&this.showSelectMenu,pattern:this.pattern,multiple:this.multiple,tmNodes:this.treeMate.treeNodes,filter:this.filter,labelField:this.labelField,separator:this.separator,style:[this.cssVars,l==null?void 0:l.style]}))}})]}))}});export{sn as _};
