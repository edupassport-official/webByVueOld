"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[8702],{50988:function(e,t,a){var s=a(66252);const n={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},i=(0,s._)("path",{fill:"currentColor",d:"M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3l3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"},null,-1),l=[i];function o(e,t){return(0,s.wg)(),(0,s.iD)("svg",n,l)}t["Z"]={name:"ic-baseline-live-help",render:o}},42576:function(e,t,a){function s(){let e=window.innerHeight,t=document.querySelector(":root");e>0&&t&&t.style.setProperty("--i-window-height",`${e}px`)}a.d(t,{$C:function(){return o},B3:function(){return c},CL:function(){return u},H7:function(){return l},N8:function(){return n},Wv:function(){return i},l:function(){return r},lJ:function(){return s}});const n=e=>{let t=e.split(" "),a=t[1],s=a.slice(0,-3);return s},i=(e,t)=>(e=parseFloat(e),t=parseFloat(t),isNaN(e)||isNaN(t)?"-":t>0?Math.round((e-t)/t*1e4)/100:0===t?Math.round(1e4*(e-t))/100:0),l=e=>new Intl.NumberFormat("en-IN").format(e),o=()=>{let e=new Date,t=e.getFullYear(),a=e.getMonth()+1,s=e.getDate();return t+"-"+a+"-"+s},r=e=>{let t=new Date,a=new Date(t.getTime()-24*e*3600*1e3),s=a.getFullYear(),n=a.getMonth()+1,i=a.getDate();return s+"-"+n+"-"+i},c=e=>{let t=new Date,a=[];for(let s=1;s<=e;s++){let e=new Date(t.getTime()-24*s*3600*1e3),n=e.getFullYear(),i=e.getMonth()+1,l=e.getDate(),o=n+"-"+i+"-"+l;a.push([o,0])}return a},u=e=>{let t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1,n=t.getDate();return a+"-"+s+"-"+n}},56995:function(e,t,a){a.d(t,{Z:function(){return E}});var s=a(66252);const n={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},i=(0,s._)("path",{fill:"currentColor",d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"},null,-1),l=[i];function o(e,t){return(0,s.wg)(),(0,s.iD)("svg",n,l)}var r={name:"ic-round-more-vert",render:o};const c={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},u=(0,s._)("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"},null,-1),d=[u];function m(e,t){return(0,s.wg)(),(0,s.iD)("svg",c,d)}var g={name:"ic-baseline-close",render:m},h=a(50988),w=a(56612);const _=e=>((0,s.dD)("data-v-007ef7ef"),e=e(),(0,s.Cn)(),e),p={class:"menu-xll-bg-container"},v={class:"menu-btn-container"},f=(0,s.Uk)("Menu"),y=["Key"],M={key:0,class:"item-head_unread"},D={class:"contact-us-container"},k={class:"menu-mobile-bg"},S={class:"menu-mobile-container"},b=["Key"],C={key:0,class:"item-head_unread"},W=_((()=>(0,s._)("span",null,"Close",-1))),z=_((()=>(0,s._)("span",null,"More",-1))),L={key:2,class:"menu-mobile-more-show-container"},I=["Key"],K={key:0,class:"item-head_unread"};function U(e,t,a,n,i,l){const o=(0,s.up)("el-button"),c=(0,s.up)("el-image"),u=(0,s.up)("router-link"),d=(0,s.up)("el-scrollbar"),m=h.Z,_=(0,s.up)("el-icon"),U=g,x=r;return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",p,[(0,s._)("div",v,[(0,s.Wm)(o,{class:"menu-btn",type:"primary",onClick:t[0]||(t[0]=e=>l.showSideMenu())},{default:(0,s.w5)((()=>[f])),_:1})]),(0,s.Wm)(d,{class:"l-container"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.menuData,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"l-item l-item-margin",Key:t},[(0,s.Wm)(u,{to:{path:e.link},exact:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:(0,w.C_)(["xll-icon-image",n.selectedKeys===e.link?"router-img-active":""]),src:n.selectedKeys===e.link?e.icon_hover:e.icon},null,8,["class","src"]),(0,s._)("span",{class:(0,w.C_)(n.selectedKeys===e.link?"router-txt-active":"")},(0,w.zw)(e.menu_name_en),3)])),_:2},1032,["to"]),"MESSAGES"===e.menu_name_en&&l.unreadTotal>0?((0,s.wg)(),(0,s.iD)("div",M,(0,w.zw)(l.unreadTotal),1)):(0,s.kq)("",!0)],8,y)))),256))])),_:1}),(0,s._)("div",D,[(0,s.Wm)(_,{size:45,color:"#6648FF",onClick:t[1]||(t[1]=e=>l.contactUs())},{default:(0,s.w5)((()=>[(0,s.Wm)(m)])),_:1}),(0,s._)("span",{onClick:t[2]||(t[2]=e=>l.contactUs())},"Contact Us")])]),(0,s._)("div",k,[(0,s._)("div",S,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.menuData.slice(0,4),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"menu-mobile-item",Key:t},[(0,s.Wm)(u,{to:{path:e.link},exact:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:(0,w.C_)(["xll-icon-image",n.selectedKeys===e.link?"router-img-active":""]),src:n.selectedKeys===e.link?e.icon_hover:e.icon},null,8,["class","src"]),(0,s._)("span",{class:(0,w.C_)(n.selectedKeys===e.link?"router-txt-active":"")},(0,w.zw)(e.menu_name_en),3)])),_:2},1032,["to"]),"MESSAGES"===e.menu_name_en&&l.unreadTotal>0?((0,s.wg)(),(0,s.iD)("div",C,(0,w.zw)(l.unreadTotal),1)):(0,s.kq)("",!0)],8,b)))),256)),(0,s._)("div",{class:"menu-mobile-item-more-container",onClick:t[3]||(t[3]=e=>n.showMoreMenuItemsWithMobile())},[n.showMoreMenuItemsVisible?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Wm)(_,{class:"menu-mobile-item-more-icon",size:30},{default:(0,s.w5)((()=>[(0,s.Wm)(U)])),_:1}),W],64)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s.Wm)(_,{class:"menu-mobile-item-more-icon",size:30},{default:(0,s.w5)((()=>[(0,s.Wm)(x)])),_:1}),z],64)),n.showMoreMenuItemsVisible?((0,s.wg)(),(0,s.iD)("div",L,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.menuData.slice(4),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"menu-mobile-item menu-mobile-item-circle",Key:t},[(0,s.Wm)(u,{to:{path:e.link},exact:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:(0,w.C_)(["xll-icon-image",n.selectedKeys===e.link?"router-img-active":""]),src:n.selectedKeys===e.link?e.icon_hover:e.icon},null,8,["class","src"]),(0,s._)("span",{class:(0,w.C_)(n.selectedKeys===e.link?"router-txt-active":"")},(0,w.zw)(e.menu_name_en),3)])),_:2},1032,["to"]),"MESSAGES"===e.menu_name_en&&l.unreadTotal>0?((0,s.wg)(),(0,s.iD)("div",K,(0,w.zw)(l.unreadTotal),1)):(0,s.kq)("",!0)],8,I)))),256))])):(0,s.kq)("",!0)])])])])}var x=a(1474),T=a(41836),H=a(45323),q=a(33907),Y=a(28339),$=a(62931),P={name:"meSideMenu",setup(){const e=(0,q.oR)(),t=t=>e.commit("nowChatUserInfo",t),a=()=>e.commit("showChatStatus",!0),n=(0,Y.yj)(),i=n.meta.activeMenu,l=(0,$.iH)(i||n.path),o=(0,s.Fl)((()=>e.state.currentUser)),r=(0,$.iH)(!1);function c(){r.value=!r.value}return{showMoreMenuItemsVisible:r,showMoreMenuItemsWithMobile:c,setNowChatUserInfo:t,setShowChatStatus:a,selectedKeys:l,currentUser:o}},data(){return{defaultAvatar:H,accountInfo:{},accountPhotoValue:"",versionTime:(0,x.O1)(),activeMsg:!1,showSideMenuStatus:!0}},watch:{menuData(e){console.log(e)},unreadTotal(e){console.log(e)}},computed:{username:{get(){return this.$store.state.username}},userAvatar:{get(){return this.$store.state.userAvatar}},identity:{get(){return this.$store.state.identity}},menuData:{get(){return this.$store.state.menuData}},unreadTotal:{get(){return this.$store.state.imUnreadTotal}}},mounted(){let e=document.body.clientWidth;Math.floor(e)<768&&(this.showSideMenuStatus=!1),Math.floor(e)>=768&&Math.floor(e)<992&&(this.showSideMenuStatus=!0),Math.floor(e)>=992&&Math.floor(e)<1200&&(this.showSideMenuStatus=!0),Math.floor(e)>=1200&&(this.showSideMenuStatus=!0),window.onresize=()=>{let e=document.body.clientWidth;Math.floor(e)<768&&(this.showSideMenuStatus=!1),Math.floor(e)>=768&&Math.floor(e)<992&&(this.showSideMenuStatus=!0),Math.floor(e)>=992&&Math.floor(e)<1200&&(this.showSideMenuStatus=!0),Math.floor(e)>=1200&&(this.showSideMenuStatus=!0)}},methods:{contactUs(){window.open("https://forms.zohopublic.com/edupassport/form/ContactUs1/formperma/W3VqHmZCLc7oBTIm0cBDz43WsPoDWS0NrHdhGyqdadU","_blank")},showSideMenu(){this.showSideMenuStatus=!this.showSideMenuStatus},getUserMenuList(){let e=this,t={user_id:localStorage.getItem("uid"),identity:e.identity,company_id:localStorage.getItem("company_id"),create_user_id:localStorage.getItem("c_uid"),page:1,limit:1e3};(0,T.$Z)(t).then((t=>{if(200===t.code){let a=t.message.pc,s=a.filter((t=>t.identity==e.identity));this.$store.commit("menuData",s)}})).catch((e=>{console.log(e)}))},turnMyMessages(){this.setShowChatStatus()}}},N=a(48118);const A=(0,N.Z)(P,[["render",U],["__scopeId","data-v-007ef7ef"]]);var E=A},38702:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var s=a(56995),n=a(66252),i=a(56612);const l=e=>((0,n.dD)("data-v-2325dac7"),e=e(),(0,n.Cn)(),e),o={class:"bg"},r={class:"profile-container"},c={class:"profile-l-container"},u={class:"profile-r-container"},d={class:"deals-list-container"},m={class:"deals-list-t"},g=l((()=>(0,n._)("div",{class:"deals-list-label"},"My Deals",-1))),h={class:"deals-list-t-r"},w=(0,n.Uk)(" Offer a Deal "),_={key:0,class:"deals-list-content"},p={class:"deals-item"},v={class:"deals-item-bg"},f={class:"img-slot-background"},y={key:0,class:"list-item-tag actived-0"},M={key:1,class:"list-item-tag actived-1"},D={key:2,class:"list-item-tag actived-2"},k={class:"deals-item-c"},S={class:"deals-item-c-l"},b={class:"deals-item-c-r"},C={class:"deals-item-c-r-1"},W={class:"deals-item-c-r-2"},z={class:"deals-item-b"},L={class:"deals-item-b-l"},I=(0,n.Uk)(" unknown "),K={class:"deals-item-b-r"},U=(0,n.Uk)(" EDIT "),x=(0,n.Uk)(" DETAILS "),T={key:1,class:"deals-list-content-empty"},H={key:0,class:"deals-pagination"};function q(e,t,a,l,q,Y){const $=s.Z,P=(0,n.up)("el-button"),N=(0,n.up)("Picture"),A=(0,n.up)("el-icon"),E=(0,n.up)("el-image"),F=(0,n.up)("el-avatar"),Z=(0,n.up)("el-empty"),B=(0,n.up)("el-pagination"),V=(0,n.up)("el-scrollbar");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",r,[(0,n._)("div",c,[(0,n.Wm)($)]),(0,n._)("div",u,[(0,n.Wm)(V,{class:"profile-r-bg-container"},{default:(0,n.w5)((()=>[(0,n._)("div",d,[(0,n._)("div",m,[g,(0,n._)("div",h,[(0,n.Wm)(P,{type:"primary",class:"post-deal-btn",round:"",onClick:t[0]||(t[0]=e=>Y.postDeal())},{default:(0,n.w5)((()=>[w])),_:1})])]),q.dealsListData.length>0?((0,n.wg)(),(0,n.iD)("div",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(q.dealsListData,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"deals-item-container",key:t},[(0,n._)("div",p,[(0,n._)("div",v,[(0,n.Wm)(E,{class:"deals-item-background-img",src:e.company_info&&e.company_info.background_image?e.company_info.background_image:"",fit:"cover"},{error:(0,n.w5)((()=>[(0,n._)("div",f,[(0,n.Wm)(A,{size:80,color:"#808080"},{default:(0,n.w5)((()=>[(0,n.Wm)(N)])),_:1})])])),_:2},1032,["src"]),0==e.status?((0,n.wg)(),(0,n.iD)("div",y," Pending ")):(0,n.kq)("",!0),1==e.status?((0,n.wg)(),(0,n.iD)("div",M," Active ")):(0,n.kq)("",!0),2==e.status?((0,n.wg)(),(0,n.iD)("div",D," Rejected ")):(0,n.kq)("",!0)]),(0,n._)("div",k,[(0,n._)("div",S,[(0,n.Wm)(F,{class:"deals-logo",src:e.company_logo},null,8,["src"])]),(0,n._)("div",b,[(0,n._)("div",C,(0,i.zw)(e.company_name),1),(0,n._)("div",W,(0,i.zw)(e.title),1)])]),(0,n._)("div",z,[(0,n._)("div",L,[e.company_info&&e.company_info.category_name_en&&"0"!=e.company_info.category_name_en?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Uk)((0,i.zw)(e.company_info.category_name_en),1)],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[I],64))]),(0,n._)("div",K,[(0,n.Wm)(P,{link:"",onClick:t=>Y.turnEditDeal(e.id)},{default:(0,n.w5)((()=>[U])),_:2},1032,["onClick"]),(0,n.Wm)(P,{link:"",onClick:t=>Y.turnDealDetail(e.id)},{default:(0,n.w5)((()=>[x])),_:2},1032,["onClick"])])])])])))),128))])):((0,n.wg)(),(0,n.iD)("div",T,[(0,n.Wm)(Z,{description:"-"})]))]),q.dealsListData.length>0?((0,n.wg)(),(0,n.iD)("div",H,[(0,n.Wm)(B,{layout:"prev, pager, next","default-current-page":1,onSizeChange:Y.dealPageSizeChange,onCurrentChange:Y.dealPageChange,"current-page":q.dealPage,"page-size":q.dealLimit,total:q.dealTotalNum},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])):(0,n.kq)("",!0)])),_:1})])])])}var Y=a(41836),$=a(42576),P={name:"deals",components:{meSideMenu:s.Z},data(){return{userInfo:{},basicUserInfo:{},dealsListData:[],dealPage:1,dealLimit:10,dealTotalNum:0}},unmounted(){(0,$.lJ)(),window.onresize=null},mounted(){let e=document.body.clientWidth,t=Math.floor(e);t<=768&&(0,$.lJ)(),window.onresize=()=>{t<=768&&(0,$.lJ)()},this.getMyDeals(this.dealPage,this.dealLimit)},methods:{postDeal(){this.$router.push({path:"/deals/offer",query:{}})},turnDealDetail(e){this.$router.push({path:"/deals/detail",query:{id:e}})},turnEditDeal(e){this.$router.push({path:"/deals/offer",query:{deal_id:e}})},dealPageSizeChange(e){console.log(e)},dealPageChange(e){this.jobPage=e,this.getMyDeals(e,this.dealLimit),console.log(e)},getMyDeals(e,t){let a={token:localStorage.getItem("token"),page:e,limit:t};(0,Y.Jq)(a).then((e=>{console.log(e),200==e.code?(this.dealsListData=e.message.data,this.dealTotalNum=e.message.total):console.log(e.msg)})).catch((e=>{console.log(e),e.msg&&this.$message.error(e.msg),e.message&&this.$message.error(e.message)}))}}},N=a(48118);const A=(0,N.Z)(P,[["render",q],["__scopeId","data-v-2325dac7"]]);var E=A}}]);
//# sourceMappingURL=8702.28731bf8.js.map