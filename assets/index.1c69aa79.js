var te=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var j=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&j(e,n,t[n]);if(V)for(var n of V(t))re.call(t,n)&&j(e,n,t[n]);return e},K=(e,t)=>oe(e,ne(t));var L=(e,t,n)=>new Promise(($,u)=>{var b=r=>{try{i(n.next(r))}catch(H){u(H)}},p=r=>{try{i(n.throw(r))}catch(H){u(H)}},i=r=>r.done?$(r.value):Promise.resolve(r.value).then(b,p);i((n=n.apply(e,t)).next())});import{a as Z,l as se,_ as q,aa as ie,ab as ce,ac as ge,p as d,ad as G}from"./index.580a301d.js";import{B as O,D as T,F as A,J as I,a7 as y,L as E,Y as Q,$ as le,a0 as N,be as ue,r as B,u as F,bf as fe,T as x,bg as de,S as pe,j as C,o as J,a1 as U,a2 as X,aD as he,ap as me,a6 as D,aC as He,aR as Ce,ab as Fe,ae as $e,K as be,a5 as ve,ad as Y}from"./vendor.bf608252.js";/* empty css               *//* empty css               */import{u as ye}from"./useWindowSizeFn.011a8160.js";import{a as _e}from"./useContentViewHeight.fa2c8833.js";const Pe=O({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=Z("page-footer"),{getCalcContentWidth:t}=se();return{prefixCls:e,getCalcContentWidth:t}}});function Se(e,t,n,$,u,b){return T(),A("div",{class:E(e.prefixCls),style:Q({width:e.getCalcContentWidth})},[I("div",{class:E(`${e.prefixCls}__left`)},[y(e.$slots,"left",{},void 0,!0)],2),y(e.$slots,"default",{},void 0,!0),I("div",{class:E(`${e.prefixCls}__right`)},[y(e.$slots,"right",{},void 0,!0)],2)],6)}var ee=q(Pe,[["render",Se],["__scopeId","data-v-3661f935"]]);function Re(e){let t;le(()=>{e(),N(()=>{t=!0})}),ue(()=>{t&&e()})}function we(e,t,n,$,u=0,b=B(0)){const p=B(null),{footerHeightRef:i}=_e();let r={useLayoutFooter:!0};const H=a=>{r=a};function z(){N(()=>{w()})}function _(a,P="all"){var l,m,S,v;function h(o){return Number(o.replace(/[^\d]/g,""))}let g=0;const f="0px";if(a){const o=getComputedStyle(a),c=h((l=o==null?void 0:o.marginTop)!=null?l:f),s=h((m=o==null?void 0:o.marginBottom)!=null?m:f),k=h((S=o==null?void 0:o.paddingTop)!=null?S:f),M=h((v=o==null?void 0:o.paddingBottom)!=null?v:f);P==="all"?(g+=c,g+=s,g+=k,g+=M):P==="top"?(g+=c,g+=k):(g+=s,g+=M)}return g}function R(a){return a==null?null:a instanceof HTMLDivElement?a:a.$el}function w(){return L(this,null,function*(){var v;if(!e.value)return;yield N();const a=R(F(t));if(!a)return;const{bottomIncludeBody:P}=ie(a);let h=0;n.forEach(o=>{var c,s;h+=(s=(c=R(F(o)))==null?void 0:c.offsetHeight)!=null?s:0});let g=(v=_(a))!=null?v:0;$.forEach(o=>{g+=_(R(F(o)))});let f=0;function l(o,c){if(o&&c){const s=o.parentElement;s&&(ce(c)?s.classList.contains(c)?f+=_(s,"bottom"):(f+=_(s,"bottom"),l(s,c)):ge(c)&&c>0&&(f+=_(s,"bottom"),l(s,--c)))}}fe(u)?l(a,F(u)):l(a,u);let m=P-F(i)-F(b)-h-g-f;const S=()=>{var o;(o=r.elements)==null||o.forEach(c=>{var s,k;m+=(k=(s=R(F(c)))==null?void 0:s.offsetHeight)!=null?k:0})};r.useLayoutFooter&&F(i)>0,S(),p.value=m})}return Re(()=>{N(()=>{w()})}),ye(()=>{w()},50,{immediate:!0}),x(()=>[i.value],()=>{w()},{flush:"post",immediate:!0}),{redoHeight:z,setCompensation:H,contentHeight:p}}const Be=O({name:"PageWrapper",components:{PageFooter:ee,PageHeader:de},inheritAttrs:!1,props:{title:d.string,dense:d.bool,ghost:d.bool,content:d.string,contentStyle:{type:Object},contentBackground:d.bool,contentFullHeight:d.bool,contentClass:d.string,fixedHeight:d.bool,upwardSpace:d.oneOfType([d.number,d.string]).def(0)},setup(e,{slots:t,attrs:n}){const $=B(null),u=B(null),b=B(null),p=B(null),{prefixCls:i}=Z("page-wrapper");pe(Ee,C(()=>e.fixedHeight));const r=C(()=>e.contentFullHeight),H=C(()=>e.upwardSpace),{redoHeight:z,setCompensation:_,contentHeight:R}=we(r,$,[u,p],[b],H);_({useLayoutFooter:!0,elements:[p]});const w=C(()=>{var l;return[i,{[`${i}--dense`]:e.dense},(l=n.class)!=null?l:{}]}),a=C(()=>e.content||(t==null?void 0:t.headerContent)||e.title||h.value.length),P=C(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)),h=C(()=>Object.keys(J(t,"default","leftFooter","rightFooter","headerContent"))),g=C(()=>{const{contentFullHeight:l,contentStyle:m,fixedHeight:S}=e;if(!l)return W({},m);const v=`${F(R)}px`;return W(K(W({},m),{minHeight:v}),S?{height:v}:{})}),f=C(()=>{const{contentBackground:l,contentClass:m}=e;return[`${i}-content`,m,{[`${i}-content-bg`]:l}]});return x(()=>[P.value],()=>{z()},{flush:"post",immediate:!0}),{getContentStyle:g,wrapperRef:$,headerRef:u,contentRef:b,footerRef:p,getClass:w,getHeaderSlots:h,prefixCls:i,getShowHeader:a,getShowFooter:P,omit:J,getContentClass:f}}});function ke(e,t,n,$,u,b){const p=U("PageHeader"),i=U("PageFooter");return T(),A("div",{class:E(e.getClass),ref:"wrapperRef"},[e.getShowHeader?(T(),X(p,ve({key:0,ghost:e.ghost,title:e.title},e.omit(e.$attrs,"class"),{ref:"headerRef"}),he({default:D(()=>[e.content?(T(),A(Fe,{key:0},[$e(be(e.content),1)],64)):y(e.$slots,"headerContent",{key:1})]),_:2},[me(e.getHeaderSlots,r=>({name:r,fn:D(H=>[y(e.$slots,r,He(Ce(H||{})))])}))]),1040,["ghost","title"])):Y("",!0),I("div",{class:E(["overflow-hidden",e.getContentClass]),style:Q(e.getContentStyle),ref:"contentRef"},[y(e.$slots,"default")],6),e.getShowFooter?(T(),X(i,{key:1,ref:"footerRef"},{left:D(()=>[y(e.$slots,"leftFooter")]),right:D(()=>[y(e.$slots,"rightFooter")]),_:3},512)):Y("",!0)],2)}var Te=q(Be,[["render",ke]]);G(ee);const Ve=G(Te),Ee="PageWrapperFixedHeight";export{Ve as P,Ee as a,Re as o};
