var p=(t,a,r)=>new Promise((c,n)=>{var l=e=>{try{i(r.next(e))}catch(o){n(o)}},s=e=>{try{i(r.throw(e))}catch(o){n(o)}},i=e=>e.done?c(e.value):Promise.resolve(e.value).then(l,s);i((r=r.apply(t,a)).next())});import{B as d,u as f}from"./useTable.f36c63db.js";import{T as h}from"./useForm.01b1f7e0.js";import{u as b}from"./index.8841adab.js";import{M as g,c as T,s as w}from"./MenuDrawer.90404b4c.js";import{h as C}from"./friend.3c2ad92a.js";import{_,f as D}from"./index.580a301d.js";import{B,a1 as m,D as F,F as S,w as u,a6 as R}from"./vendor.bf608252.js";import"./index.57fa35c4.js";import"./index.1c69aa79.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.fa2c8833.js";/* empty css               *//* empty css               *//* empty css               */import"./index.5c16517e.js";/* empty css                */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css              *//* empty css               */import"./index.038777e3.js";import"./download.d03446b3.js";/* empty css               */import"./index.0eaeb1a8.js";const E=B({name:"FriendList",components:{BasicTable:d,MenuDrawer:g,TableAction:h},setup(){const[t,{openDrawer:a}]=b(),[r,{reload:c}]=f({title:"\u53CB\u94FE\u5217\u8868",api:C,columns:T,formConfig:{labelWidth:120,schemas:w},isTreeTable:!1,pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!0,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),{userInfo:n}=D();function l(){a(!0,{isUpdate:!1,record:{from:n==null?void 0:n._id}})}function s(o){a(!0,{record:o,isUpdate:!0})}function i(o){return p(this,null,function*(){e()})}function e(){c()}return{registerTable:r,registerDrawer:t,handleCreate:l,handleEdit:s,handleDelete:i,handleSuccess:e}}});function v(t,a,r,c,n,l){const s=m("TableAction"),i=m("BasicTable"),e=m("MenuDrawer");return F(),S("div",null,[u(i,{onRegister:t.registerTable},{action:R(({record:o})=>[u(s,{actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),u(e,{onRegister:t.registerDrawer,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])])}var te=_(E,[["render",v]]);export{te as default};
