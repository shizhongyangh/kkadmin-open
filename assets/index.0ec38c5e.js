var be=Object.defineProperty;var x=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var X=(e,n,r)=>n in e?be(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,k=(e,n)=>{for(var r in n||(n={}))Be.call(n,r)&&X(e,r,n[r]);if(x)for(var r of x(n))Ge.call(n,r)&&X(e,r,n[r]);return e};import{B as he,u as We}from"./index.8841adab.js";import{B as Y,j as Pe,w as i,u as o,bs as l,ab as f,a5 as Fe,a1 as v,D as me,F as we}from"./vendor.bf608252.js";/* empty css                */import{z as c,aM as K,aN as G,aO as A,M as U,k as I,aP as V,b as Q,Z as y,Q as Z,aQ as j,aR as z,N as q,aS as He,aT as xe,aU as Xe,aV as ke,Y as ve,l as Ke,d as Ve,aW as $e,aX as Ye,aY as Qe,_ as Ze,I as je}from"./index.580a301d.js";import{c as d,u as ze,a as qe}from"./index.13c58462.js";const Je=d(()=>c(()=>import("./TypePicker.d354c376.js"),["assets/TypePicker.d354c376.js","assets/TypePicker.924a78db.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.580a301d.js","assets/index.007abcad.css"])),h=d(()=>c(()=>import("./ThemeColorPicker.8fb31087.js"),["assets/ThemeColorPicker.8fb31087.js","assets/ThemeColorPicker.8eb61909.css","assets/index.00780982.css","assets/index.17eb4c41.css","assets/index.5aa8aa0e.css","assets/index.580a301d.js","assets/index.007abcad.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.8841adab.js","assets/index.5c7227e9.css","assets/index.13c58462.js","assets/index.f8c87140.css","assets/index.1704ec3c.js","assets/index.bdbca534.css","assets/useWindowSizeFn.011a8160.js","assets/useContentViewHeight.fa2c8833.js","assets/lock.9c730cc1.js"])),et=d(()=>c(()=>import("./SettingFooter.1bffeb5c.js"),["assets/SettingFooter.1bffeb5c.js","assets/SettingFooter.992d2e6e.css","assets/index.580a301d.js","assets/index.007abcad.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css"])),_=d(()=>c(()=>import("./SwitchItem.d5016f5c.js"),["assets/SwitchItem.d5016f5c.js","assets/SwitchItem.98df2ed8.css","assets/index.b82c690c.css","assets/index.00780982.css","assets/index.17eb4c41.css","assets/index.5aa8aa0e.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.580a301d.js","assets/index.007abcad.css","assets/index.8841adab.js","assets/index.5c7227e9.css","assets/index.13c58462.js","assets/index.f8c87140.css","assets/index.1704ec3c.js","assets/index.bdbca534.css","assets/useWindowSizeFn.011a8160.js","assets/useContentViewHeight.fa2c8833.js","assets/lock.9c730cc1.js"])),R=d(()=>c(()=>import("./SelectItem.82caf73f.js"),["assets/SelectItem.82caf73f.js","assets/SelectItem.23f09fa5.css","assets/index.00780982.css","assets/index.17eb4c41.css","assets/index.5aa8aa0e.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.580a301d.js","assets/index.007abcad.css","assets/index.8841adab.js","assets/index.5c7227e9.css","assets/index.13c58462.js","assets/index.f8c87140.css","assets/index.1704ec3c.js","assets/index.bdbca534.css","assets/useWindowSizeFn.011a8160.js","assets/useContentViewHeight.fa2c8833.js","assets/lock.9c730cc1.js"])),$=d(()=>c(()=>import("./InputNumberItem.0077d472.js"),["assets/InputNumberItem.0077d472.js","assets/InputNumberItem.d046fc48.css","assets/index.4023821a.css","assets/index.00780982.css","assets/index.17eb4c41.css","assets/index.5aa8aa0e.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.580a301d.js","assets/index.007abcad.css","assets/index.8841adab.js","assets/index.5c7227e9.css","assets/index.13c58462.js","assets/index.f8c87140.css","assets/index.1704ec3c.js","assets/index.bdbca534.css","assets/useWindowSizeFn.011a8160.js","assets/useContentViewHeight.fa2c8833.js","assets/lock.9c730cc1.js"])),{t:a}=Q();var t=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.LOCK_TIME=25]="LOCK_TIME",e[e.FULL_CONTENT=26]="FULL_CONTENT",e[e.CONTENT_MODE=27]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=30]="GRAY_MODE",e[e.COLOR_WEAK=31]="COLOR_WEAK",e[e.SHOW_LOGO=32]="SHOW_LOGO",e[e.SHOW_FOOTER=33]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=35]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION",e))(t||{});const tt=[{value:K.FULL,label:a("layout.setting.contentModeFull")},{value:K.FIXED,label:a("layout.setting.contentModeFixed")}],ot=[{value:G.CENTER,label:a("layout.setting.topMenuAlignRight")},{value:G.START,label:a("layout.setting.topMenuAlignLeft")},{value:G.END,label:a("layout.setting.topMenuAlignCenter")}],nt=e=>[{value:y.NONE,label:a("layout.setting.menuTriggerNone")},{value:y.FOOTER,label:a("layout.setting.menuTriggerBottom")},...e?[]:[{value:y.HEADER,label:a("layout.setting.menuTriggerTop")}]],it=[A.ZOOM_FADE,A.FADE,A.ZOOM_OUT,A.FADE_SIDE,A.FADE_BOTTOM,A.FADE_SCALE].map(e=>({label:e,value:e})),st=[{title:a("layout.setting.menuTypeSidebar"),mode:U.INLINE,type:I.SIDEBAR},{title:a("layout.setting.menuTypeMix"),mode:U.INLINE,type:I.MIX},{title:a("layout.setting.menuTypeTopMenu"),mode:U.HORIZONTAL,type:I.TOP_MENU},{title:a("layout.setting.menuTypeMixSidebar"),mode:U.INLINE,type:I.MIX_SIDEBAR}],_t=[{value:V.HOVER,label:a("layout.setting.triggerHover")},{value:V.CLICK,label:a("layout.setting.triggerClick")}];function rt(e,n){const r=Z(),O=at(e,n);r.setProjectConfig(O),e===t.CHANGE_THEME&&(j(),z())}function at(e,n){const r=Z(),{getThemeColor:O,getDarkMode:D}=q();switch(e){case t.CHANGE_LAYOUT:const{mode:C,type:N,split:u}=n;return{menuSetting:k({mode:C,type:N,collapsed:!1,show:!0,hidden:!1},u===void 0?{split:u}:{})};case t.CHANGE_THEME_COLOR:return O.value===n?{}:(ke(n),{themeColor:n});case t.CHANGE_THEME:return D.value===n?{}:(Xe(n),{});case t.MENU_HAS_DRAG:return{menuSetting:{canDrag:n}};case t.MENU_ACCORDION:return{menuSetting:{accordion:n}};case t.MENU_TRIGGER:return{menuSetting:{trigger:n}};case t.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:n}};case t.MENU_COLLAPSED:return{menuSetting:{collapsed:n}};case t.MENU_WIDTH:return{menuSetting:{menuWidth:n}};case t.MENU_SHOW_SIDEBAR:return{menuSetting:{show:n}};case t.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:n}};case t.MENU_THEME:return z(n),{menuSetting:{bgColor:n}};case t.MENU_SPLIT:return{menuSetting:{split:n}};case t.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:n}};case t.MENU_FIXED:return{menuSetting:{fixed:n}};case t.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:n}};case t.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:n}};case t.OPEN_PAGE_LOADING:return r.setPageLoading(!1),{transitionSetting:{openPageLoading:n}};case t.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:n}};case t.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:n}};case t.OPEN_PROGRESS:return{transitionSetting:{openNProgress:n}};case t.LOCK_TIME:return{lockTime:n};case t.FULL_CONTENT:return{fullContent:n};case t.CONTENT_MODE:return{contentMode:n};case t.SHOW_BREADCRUMB:return{showBreadCrumb:n};case t.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:n};case t.GRAY_MODE:return xe(n),{grayMode:n};case t.SHOW_FOOTER:return{showFooter:n};case t.COLOR_WEAK:return He(n),{colorWeak:n};case t.SHOW_LOGO:return{showLogo:n};case t.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:n}};case t.TABS_SHOW:return{multiTabsSetting:{show:n}};case t.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:n}};case t.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:n}};case t.HEADER_THEME:return j(n),{headerSetting:{bgColor:n}};case t.HEADER_SEARCH:return{headerSetting:{showSearch:n}};case t.HEADER_FIXED:return{headerSetting:{fixed:n}};case t.HEADER_SHOW:return{headerSetting:{show:n}};default:return{}}}const{t:s}=Q();var lt=Y({name:"SettingDrawer",setup(e,{attrs:n}){const{getContentMode:r,getShowFooter:O,getShowBreadCrumb:D,getShowBreadCrumbIcon:C,getShowLogo:N,getFullContent:u,getColorWeak:b,getGrayMode:J,getLockTime:ee,getShowDarkModeToggle:W,getThemeColor:te}=q(),{getOpenPageLoading:oe,getBasicTransition:ne,getEnableTransition:P,getOpenNProgress:ie}=ve(),{getIsHorizontal:B,getShowMenu:F,getMenuType:m,getTrigger:se,getCollapsedShowTitle:_e,getMenuFixed:re,getCollapsed:w,getCanDrag:ae,getTopMenuAlign:le,getAccordion:Ee,getMenuWidth:ge,getMenuBgColor:Oe,getIsTopMenu:ue,getSplit:p,getIsMixSidebar:E,getCloseMixSidebarOnChange:Se,getMixSideTrigger:Te,getMixSideFixed:Me}=Ke(),{getShowHeader:S,getFixed:Ae,getHeaderBgColor:ce,getShowSearch:de}=ze(),{getShowMultipleTab:L,getShowQuick:Ne,getShowRedo:Re,getShowFold:Ie}=qe(),g=Pe(()=>o(F)&&!o(B));function De(){return i(f,null,[i(Je,{menuTypeList:st,handler:T=>{rt(t.CHANGE_LAYOUT,{mode:T.mode,type:T.type,split:o(B)?!1:void 0})},def:o(m)},null)])}function Ce(){return i(h,{colorList:Ye,def:o(ce),event:t.HEADER_THEME},null)}function pe(){return i(h,{colorList:Qe,def:o(Oe),event:t.MENU_THEME},null)}function Le(){return i(h,{colorList:$e,def:o(te),event:t.CHANGE_THEME_COLOR},null)}function fe(){let T=o(se);const H=nt(o(p));return H.some(M=>M.value===T)||(T=y.FOOTER),i(f,null,[i(_,{title:s("layout.setting.splitMenu"),event:t.MENU_SPLIT,def:o(p),disabled:!o(g)||o(m)!==I.MIX},null),i(_,{title:s("layout.setting.mixSidebarFixed"),event:t.MENU_FIXED_MIX_SIDEBAR,def:o(Me),disabled:!o(E)},null),i(_,{title:s("layout.setting.closeMixSidebarOnChange"),event:t.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:o(Se),disabled:!o(E)},null),i(_,{title:s("layout.setting.menuCollapse"),event:t.MENU_COLLAPSED,def:o(w),disabled:!o(g)},null),i(_,{title:s("layout.setting.menuDrag"),event:t.MENU_HAS_DRAG,def:o(ae),disabled:!o(g)},null),i(_,{title:s("layout.setting.menuSearch"),event:t.HEADER_SEARCH,def:o(de),disabled:!o(S)},null),i(_,{title:s("layout.setting.menuAccordion"),event:t.MENU_ACCORDION,def:o(Ee),disabled:!o(g)},null),i(_,{title:s("layout.setting.collapseMenuDisplayName"),event:t.MENU_COLLAPSED_SHOW_TITLE,def:o(_e),disabled:!o(g)||!o(w)||o(E)},null),i(_,{title:s("layout.setting.fixedHeader"),event:t.HEADER_FIXED,def:o(Ae),disabled:!o(S)},null),i(_,{title:s("layout.setting.fixedSideBar"),event:t.MENU_FIXED,def:o(re),disabled:!o(g)||o(E)},null),i(R,{title:s("layout.setting.mixSidebarTrigger"),event:t.MENU_TRIGGER_MIX_SIDEBAR,def:o(Te),options:_t,disabled:!o(E)},null),i(R,{title:s("layout.setting.topMenuLayout"),event:t.MENU_TOP_ALIGN,def:o(le),options:ot,disabled:!o(S)||o(p)||!o(ue)&&!o(p)||o(E)},null),i(R,{title:s("layout.setting.menuCollapseButton"),event:t.MENU_TRIGGER,def:T,options:H,disabled:!o(g)||o(E)},null),i(R,{title:s("layout.setting.contentMode"),event:t.CONTENT_MODE,def:o(r),options:tt},null),i($,{title:s("layout.setting.autoScreenLock"),min:0,event:t.LOCK_TIME,defaultValue:o(ee),formatter:M=>parseInt(M)===0?`0(${s("layout.setting.notAutoScreenLock")})`:`${M}${s("layout.setting.minute")}`},null),i($,{title:s("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:t.MENU_WIDTH,disabled:!o(g),defaultValue:o(ge),formatter:M=>`${parseInt(M)}px`},null)])}function Ue(){return i(f,null,[i(_,{title:s("layout.setting.breadcrumb"),event:t.SHOW_BREADCRUMB,def:o(D),disabled:!o(S)},null),i(_,{title:s("layout.setting.breadcrumbIcon"),event:t.SHOW_BREADCRUMB_ICON,def:o(C),disabled:!o(S)},null),i(_,{title:s("layout.setting.tabs"),event:t.TABS_SHOW,def:o(L)},null),i(_,{title:s("layout.setting.tabsRedoBtn"),event:t.TABS_SHOW_REDO,def:o(Re),disabled:!o(L)},null),i(_,{title:s("layout.setting.tabsQuickBtn"),event:t.TABS_SHOW_QUICK,def:o(Ne),disabled:!o(L)},null),i(_,{title:s("layout.setting.tabsFoldBtn"),event:t.TABS_SHOW_FOLD,def:o(Ie),disabled:!o(L)},null),i(_,{title:s("layout.setting.sidebar"),event:t.MENU_SHOW_SIDEBAR,def:o(F),disabled:o(B)},null),i(_,{title:s("layout.setting.header"),event:t.HEADER_SHOW,def:o(S)},null),i(_,{title:"Logo",event:t.SHOW_LOGO,def:o(N),disabled:o(E)},null),i(_,{title:s("layout.setting.footer"),event:t.SHOW_FOOTER,def:o(O)},null),i(_,{title:s("layout.setting.fullContent"),event:t.FULL_CONTENT,def:o(u)},null),i(_,{title:s("layout.setting.grayMode"),event:t.GRAY_MODE,def:o(J)},null),i(_,{title:s("layout.setting.colorWeak"),event:t.COLOR_WEAK,def:o(b)},null)])}function ye(){return i(f,null,[i(_,{title:s("layout.setting.progress"),event:t.OPEN_PROGRESS,def:o(ie)},null),i(_,{title:s("layout.setting.switchLoading"),event:t.OPEN_PAGE_LOADING,def:o(oe)},null),i(_,{title:s("layout.setting.switchAnimation"),event:t.OPEN_ROUTE_TRANSITION,def:o(P)},null),i(R,{title:s("layout.setting.animationType"),event:t.ROUTER_TRANSITION,def:o(ne),options:it,disabled:!o(P)},null)])}return()=>i(he,Fe(n,{title:s("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[o(W)&&i(l,null,{default:()=>s("layout.setting.darkMode")}),o(W)&&i(Ve,{class:"mx-auto"},null),i(l,null,{default:()=>s("layout.setting.navMode")}),De(),i(l,null,{default:()=>s("layout.setting.sysTheme")}),Le(),i(l,null,{default:()=>s("layout.setting.headerTheme")}),Ce(),i(l,null,{default:()=>s("layout.setting.sidebarTheme")}),pe(),i(l,null,{default:()=>s("layout.setting.interfaceFunction")}),fe(),i(l,null,{default:()=>s("layout.setting.interfaceDisplay")}),Ue(),i(l,null,{default:()=>s("layout.setting.animation")}),ye(),i(l,null,null),i(et,null,null)]})}});const Et=Y({name:"SettingButton",components:{SettingDrawer:lt,Icon:je},setup(){const[e,{openDrawer:n}]=We();return{register:e,openDrawer:n}}});function gt(e,n,r,O,D,C){const N=v("Icon"),u=v("SettingDrawer");return me(),we("div",{onClick:n[0]||(n[0]=b=>e.openDrawer(!0))},[i(N,{icon:"ion:settings-outline"}),i(u,{onRegister:e.register},null,8,["onRegister"])])}var Ot=Ze(Et,[["render",gt]]),Nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ot});export{rt as b,Nt as i};
