var l=(e,r,t)=>new Promise((n,s)=>{var c=o=>{try{f(t.next(o))}catch(i){s(i)}},a=o=>{try{f(t.throw(o))}catch(i){s(i)}},f=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,a);f((t=t.apply(e,r)).next())});import{f as I}from"./vendor.bf608252.js";import{a7 as u,a8 as k,f as L}from"./index.580a301d.js";const p=I({id:"app-lock",state:()=>({lockInfo:u.getLocal(k)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(e){this.lockInfo=Object.assign({},this.lockInfo,e),u.setLocal(k,this.lockInfo,!0)},resetLockInfo(){u.removeLocal(k,!0),this.lockInfo=null},unLock(e){return l(this,null,function*(){var n;const r=L();return((n=this.lockInfo)==null?void 0:n.pwd)===e?(this.resetLockInfo(),!0):yield(()=>l(this,null,function*(){var s;try{const c=(s=r.getUserInfo)==null?void 0:s.username,a=yield r.login({username:c,password:e,goHome:!1,mode:"none"});return a&&this.resetLockInfo(),a}catch(c){return!1}}))()})}}});export{p as u};
