var h=(v,r,n)=>new Promise((a,d)=>{var p=o=>{try{l(n.next(o))}catch(i){d(i)}},f=o=>{try{l(n.throw(o))}catch(i){d(i)}},l=o=>o.done?a(o.value):Promise.resolve(o.value).then(p,f);l((n=n.apply(v,r)).next())});import{B as N,aX as F,ao as b,r as w,Q as B,j as C,u as e,D as E,F as K,G as k,H as I,w as t,a6 as u,aQ as R,ae as T,K as $,aY as z,ab as M}from"./vendor.bf608252.js";/* empty css              *//* empty css               */import{u as U,a as V,L as G,_ as P,b as Q}from"./LoginFormTitle.4f336614.js";import{b as j,a as q,f as H,h as O}from"./index.580a301d.js";const ee=N({setup(v){const r=F.Item,n=b.Password,{t:a}=j(),{notification:d,createErrorModal:p}=O(),{prefixCls:f}=q("login"),l=H(),{setLoginState:o,getLoginState:i}=U(),{getFormRules:L}=V(),x=w(),g=w(!1);w(!1);const c=B({account:"",password:""}),{validForm:D}=Q(x),S=C(()=>e(i)===G.LOGIN);function _(){return h(this,null,function*(){const m=yield D();if(!!m)try{g.value=!0;const s=yield l.login({password:m.password,username:m.account,mode:"none"});s&&d.success({message:a("sys.login.loginSuccessTitle"),description:`${a("sys.login.loginSuccessDesc")}: ${s.nickName||s.userName}`,duration:3})}catch(s){p({title:a("sys.api.errorTip"),content:s.message||a("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${f}`)||document.body})}finally{g.value=!1}})}return(m,s)=>(E(),K(M,null,[k(t(P,{class:"enter-x"},null,512),[[I,e(S)]]),k(t(e(F),{class:"p-4 enter-x",model:e(c),rules:e(L),ref_key:"formRef",ref:x,onKeypress:z(_,["enter"])},{default:u(()=>[t(e(r),{name:"account",class:"enter-x"},{default:u(()=>[t(e(b),{size:"large",value:e(c).account,"onUpdate:value":s[0]||(s[0]=y=>e(c).account=y),placeholder:e(a)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),t(e(r),{name:"password",class:"enter-x"},{default:u(()=>[t(e(n),{size:"large",visibilityToggle:"",value:e(c).password,"onUpdate:value":s[1]||(s[1]=y=>e(c).password=y),placeholder:e(a)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),t(e(r),{class:"enter-x"},{default:u(()=>[t(e(R),{type:"primary",size:"large",block:"",onClick:_,loading:g.value},{default:u(()=>[T($(e(a)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules","onKeypress"]),[[I,e(S)]])],64))}});export{ee as default};
