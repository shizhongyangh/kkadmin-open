var m=(t,e,n)=>new Promise((s,r)=>{var l=a=>{try{u(n.next(a))}catch(c){r(c)}},o=a=>{try{u(n.throw(a))}catch(c){r(c)}},u=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,o);u((n=n.apply(t,e)).next())});import{b as I,_ as C,r as h,a as z,ad as S}from"./index.580a301d.js";import{Q as F,R as A,am as g,j as w,bK as T,a0 as k,t as D,u as d,ai as N,r as p,ag as R,B as y,aQ as j,a1 as f,D as _,a2 as $,a6 as v,ae as O,K as P,a5 as b,aD as E,ap as K,a7 as Q,aC as V,aR as q,w as L}from"./vendor.bf608252.js";function U(t,e="value",n="change",s){const r=N(),l=r==null?void 0:r.emit,o=F({value:t[e]}),u=A(o),a=i=>{o.value=i};return g(()=>{o.value=t[e]}),[w({get(){return o.value},set(i){T(i,u.value)||(o.value=i,k(()=>{l==null||l(n,i,...D(d(s))||[])}))}}),a,u]}function G(t){const e=p(t),n=p(!1);let s;function r(){s&&window.clearInterval(s)}function l(){n.value=!1,r(),s=null}function o(){d(n)||!!s||(n.value=!0,s=setInterval(()=>{d(e)===1?(l(),e.value=t):e.value-=1},1e3))}function u(){e.value=t,l()}function a(){u(),o()}return R(()=>{u()}),{start:o,reset:u,restart:a,clear:r,stop:l,currentCount:e,isStart:n}}const H={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},J=y({name:"CountButton",components:{Button:j},props:H,setup(t){const e=p(!1),{currentCount:n,isStart:s,start:r,reset:l}=G(t.count),{t:o}=I(),u=w(()=>d(s)?o("component.countdown.sendText",[d(n)]):o("component.countdown.normalText"));g(()=>{t.value===void 0&&l()});function a(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&h(c)){e.value=!0;try{(yield c())&&r()}finally{e.value=!1}}else r()})}return{handleStart:a,currentCount:n,loading:e,getButtonText:u,isStart:s}}});function M(t,e,n,s,r,l){const o=f("Button");return _(),$(o,b(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[O(P(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var B=C(J,[["render",M]]);const W={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},X=y({name:"CountDownInput",components:{CountButton:B},inheritAttrs:!1,props:W,setup(t){const{prefixCls:e}=z("countdown-input"),[n]=U(t);return{prefixCls:e,state:n}}});function Y(t,e,n,s,r,l){const o=f("CountButton"),u=f("a-input");return _(),$(u,b(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),E({addonAfter:v(()=>[L(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[K(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:v(c=>[Q(t.$slots,a,V(q(c||{})))])}))]),1040,["class","size","value"])}var Z=C(X,[["render",Y]]);const nt=S(Z);S(B);export{nt as C,U as u};
