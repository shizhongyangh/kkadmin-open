var f=(o,r,n)=>new Promise((l,a)=>{var u=e=>{try{t(n.next(e))}catch(s){a(s)}},i=e=>{try{t(n.throw(e))}catch(s){a(s)}},t=e=>e.done?l(e.value):Promise.resolve(e.value).then(u,i);t((n=n.apply(o,r)).next())});import{B as h,u as b}from"./useTable.f36c63db.js";import{T as g}from"./useForm.01b1f7e0.js";import{u as T}from"./index.8841adab.js";import{M as _,c as C,s as B}from"./MenuDrawer.565e3849.js";import{p as w}from"./friend.3c2ad92a.js";import{_ as D}from"./index.580a301d.js";import{B as E,a1 as c,D as F,F as S,w as m,a6 as p,ae as R}from"./vendor.bf608252.js";import"./index.57fa35c4.js";import"./index.1c69aa79.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.fa2c8833.js";/* empty css               *//* empty css               *//* empty css               */import"./index.5c16517e.js";/* empty css                */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css              *//* empty css               */import"./index.038777e3.js";import"./download.d03446b3.js";/* empty css               */import"./index.0eaeb1a8.js";const k=E({name:"FriendTagList",components:{BasicTable:h,MenuDrawer:_,TableAction:g},setup(){const[o,{openDrawer:r}]=T(),[n,{reload:l}]=b({title:"\u53CB\u94FE\u6807\u7B7E\u5217\u8868",api:w,columns:C,formConfig:{labelWidth:120,schemas:B},isTreeTable:!1,pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!0,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function a(){r(!0,{isUpdate:!1})}function u(e){r(!0,{record:e,isUpdate:!0})}function i(e){return f(this,null,function*(){t()})}function t(){l()}return{registerTable:n,registerDrawer:o,handleCreate:a,handleEdit:u,handleDelete:i,handleSuccess:t}}}),y=R(" \u65B0\u589E\u6807\u7B7E ");function v(o,r,n,l,a,u){const i=c("a-button"),t=c("TableAction"),e=c("BasicTable"),s=c("MenuDrawer");return F(),S("div",null,[m(e,{onRegister:o.registerTable},{toolbar:p(()=>[m(i,{type:"primary",onClick:o.handleCreate},{default:p(()=>[y]),_:1},8,["onClick"])]),action:p(({record:d})=>[m(t,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,d)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,d)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),m(s,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var re=D(k,[["render",v]]);export{re as default};
