"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[9049],{31842:function(e,t,i){var s=i(66252);const o={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 13 24",width:"1.2em",height:"1.2em"},a=(0,s._)("path",{fill:"currentColor",d:"M0 2.089v21.912l6.546-6.26l6.545 6.26V2.089A2.11 2.11 0 0 0 10.982 0l-.077.001h.004h-8.726L2.11 0A2.109 2.109 0 0 0 .001 2.088v.001z"},null,-1),n=[a];function c(e,t){return(0,s.wg)(),(0,s.iD)("svg",o,n)}t["Z"]={name:"fontisto-favorite",render:c}},50988:function(e,t,i){var s=i(66252);const o={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},a=(0,s._)("path",{fill:"currentColor",d:"M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3l3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"},null,-1),n=[a];function c(e,t){return(0,s.wg)(),(0,s.iD)("svg",o,n)}t["Z"]={name:"ic-baseline-live-help",render:c}},42576:function(e,t,i){function s(){let e=window.innerHeight,t=document.querySelector(":root");e>0&&t&&t.style.setProperty("--i-window-height",`${e}px`)}i.d(t,{$C:function(){return c},B3:function(){return r},CL:function(){return u},H7:function(){return n},N8:function(){return o},Wv:function(){return a},l:function(){return l},lJ:function(){return s}});const o=e=>{let t=e.split(" "),i=t[1],s=i.slice(0,-3);return s},a=(e,t)=>(e=parseFloat(e),t=parseFloat(t),isNaN(e)||isNaN(t)?"-":t>0?Math.round((e-t)/t*1e4)/100:0===t?Math.round(1e4*(e-t))/100:0),n=e=>new Intl.NumberFormat("en-IN").format(e),c=()=>{let e=new Date,t=e.getFullYear(),i=e.getMonth()+1,s=e.getDate();return t+"-"+i+"-"+s},l=e=>{let t=new Date,i=new Date(t.getTime()-24*e*3600*1e3),s=i.getFullYear(),o=i.getMonth()+1,a=i.getDate();return s+"-"+o+"-"+a},r=e=>{let t=new Date,i=[];for(let s=1;s<=e;s++){let e=new Date(t.getTime()-24*s*3600*1e3),o=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),c=o+"-"+a+"-"+n;i.push([c,0])}return i},u=e=>{let t=new Date(e),i=t.getFullYear(),s=t.getMonth()+1,o=t.getDate();return i+"-"+s+"-"+o}},66582:function(e,t,i){i.d(t,{Z:function(){return g}});var s=i(66252),o=i(56612);function a(e,t,i,a,n,c){const l=(0,s.up)("el-button");return"link"===i.btnStyle?((0,s.wg)(),(0,s.j4)(l,{key:0,link:"",style:{color:"#6650B3"},type:"primary",onClick:t[0]||(t[0]=e=>c.chat()),disabled:i.targetUser.user_id+"#"+i.identity+"#"+i.targetUser.id==a.currentUser.uuid},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(i.text),1)])),_:1},8,["disabled"])):"primary"===i.btnStyle?((0,s.wg)(),(0,s.j4)(l,{key:1,round:"",type:"primary",onClick:t[1]||(t[1]=e=>c.chat()),disabled:i.targetUser.user_id+"#"+i.identity+"#"+i.targetUser.id==a.currentUser.uuid},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(i.text),1)])),_:1},8,["disabled"])):((0,s.wg)(),(0,s.j4)(l,{key:2,link:"",type:"primary",onClick:t[2]||(t[2]=e=>c.chat()),disabled:i.targetUser.user_id+"#"+i.identity+"#"+i.targetUser.id==a.currentUser.uuid},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(i.text),1)])),_:1},8,["disabled"]))}var n=i(62931),c=i(33907),l=i(28339),r=i(44276),u=i(41836),d={name:"chatComponent",props:["text","targetUser","identity","btnStyle"],setup(){let e=(0,n.iH)(null);const t=t=>{e.value=t},i=(0,c.oR)(),o=(0,l.tv)(),a=e=>i.commit("nowChatUserInfo",e),r=()=>i.commit("showChatStatus",!0);function u(){o.push({path:"/chat/messages"})}const d=i.state.currentUser,m=(0,s.f3)("GoEasy"),h=(0,s.f3)("goEasy");let g=(0,n.iH)(0);function f(){h.connect({id:d.uuid,data:{name:d.name,avatar:d.avatar,companyId:d.companyId,identity:d.identity,uid:d.uid},onSuccess:function(){console.log("GoEasy connect successfully.")},onFailed:function(e){console.log("Failed to connect GoEasy, code:"+e.code+",error:"+e.content)},onProgress:function(e){console.log("GoEasy is connecting",e)}})}function p(e){g.value=e.unreadTotal}let _=localStorage.getItem("token");return(0,s.wF)((()=>{_&&("disconnected"===h.getConnectionStatus()&&f(),h.im.on(m.IM_EVENT.CONVERSATIONS_UPDATED,p))})),{thumbsSwiper:e,setThumbsSwiper:t,setNowChatUserInfo:a,setShowChatStatus:r,currentUser:d,turnChatPage:u}},data(){return{}},methods:{chat(){let e=this.targetUser,t=this.identity,i=e.user_id+"#"+this.identity+"#"+e.id;if(i==e.user_id)return!1;let s=localStorage.getItem("token");if(!s||""===s)return this.$router.push("/login");let o="",a="";1==t&&(o=e.name,a=e.profile_photo?e.profile_photo:"https://oss.esl-passport.cn/educator.png"),2!=t&&3!=t&&4!=t&&5!=t||(o=e.display_name,a=e.logo?e.logo:"https://oss.esl-passport.cn/educator.png");let n={uuid:i,name:o,avatar:a},c=encodeURI((0,r.cv)(JSON.stringify(n))),l="/chat/messages/privatechat/"+e.user_id;this.addChatToDatabase(e.user_id,this.identity,e.id),this.$router.push({path:l,query:{str:c}})},addChatToDatabase(e,t,i){let s={to_user_id:e,to_identity:t,to_company_id:i};(0,u.I6)(s).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}}},m=i(48118);const h=(0,m.Z)(d,[["render",a]]);var g=h},56995:function(e,t,i){i.d(t,{Z:function(){return P}});var s=i(66252);const o={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},a=(0,s._)("path",{fill:"currentColor",d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"},null,-1),n=[a];function c(e,t){return(0,s.wg)(),(0,s.iD)("svg",o,n)}var l={name:"ic-round-more-vert",render:c};const r={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},u=(0,s._)("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"},null,-1),d=[u];function m(e,t){return(0,s.wg)(),(0,s.iD)("svg",r,d)}var h={name:"ic-baseline-close",render:m},g=i(50988),f=i(56612);const p=e=>((0,s.dD)("data-v-007ef7ef"),e=e(),(0,s.Cn)(),e),_={class:"menu-xll-bg-container"},w={class:"menu-btn-container"},v=(0,s.Uk)("Menu"),b=["Key"],y={key:0,class:"item-head_unread"},k={class:"contact-us-container"},M={class:"menu-mobile-bg"},S={class:"menu-mobile-container"},D=["Key"],x={key:0,class:"item-head_unread"},L=p((()=>(0,s._)("span",null,"Close",-1))),C=p((()=>(0,s._)("span",null,"More",-1))),U={key:2,class:"menu-mobile-more-show-container"},T=["Key"],j={key:0,class:"item-head_unread"};function W(e,t,i,o,a,n){const c=(0,s.up)("el-button"),r=(0,s.up)("el-image"),u=(0,s.up)("router-link"),d=(0,s.up)("el-scrollbar"),m=g.Z,p=(0,s.up)("el-icon"),W=h,z=l;return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",_,[(0,s._)("div",w,[(0,s.Wm)(c,{class:"menu-btn",type:"primary",onClick:t[0]||(t[0]=e=>n.showSideMenu())},{default:(0,s.w5)((()=>[v])),_:1})]),(0,s.Wm)(d,{class:"l-container"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.menuData,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"l-item l-item-margin",Key:t},[(0,s.Wm)(u,{to:{path:e.link},exact:""},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{class:(0,f.C_)(["xll-icon-image",o.selectedKeys===e.link?"router-img-active":""]),src:o.selectedKeys===e.link?e.icon_hover:e.icon},null,8,["class","src"]),(0,s._)("span",{class:(0,f.C_)(o.selectedKeys===e.link?"router-txt-active":"")},(0,f.zw)(e.menu_name_en),3)])),_:2},1032,["to"]),"MESSAGES"===e.menu_name_en&&n.unreadTotal>0?((0,s.wg)(),(0,s.iD)("div",y,(0,f.zw)(n.unreadTotal),1)):(0,s.kq)("",!0)],8,b)))),256))])),_:1}),(0,s._)("div",k,[(0,s.Wm)(p,{size:45,color:"#6648FF",onClick:t[1]||(t[1]=e=>n.contactUs())},{default:(0,s.w5)((()=>[(0,s.Wm)(m)])),_:1}),(0,s._)("span",{onClick:t[2]||(t[2]=e=>n.contactUs())},"Contact Us")])]),(0,s._)("div",M,[(0,s._)("div",S,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.menuData.slice(0,4),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"menu-mobile-item",Key:t},[(0,s.Wm)(u,{to:{path:e.link},exact:""},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{class:(0,f.C_)(["xll-icon-image",o.selectedKeys===e.link?"router-img-active":""]),src:o.selectedKeys===e.link?e.icon_hover:e.icon},null,8,["class","src"]),(0,s._)("span",{class:(0,f.C_)(o.selectedKeys===e.link?"router-txt-active":"")},(0,f.zw)(e.menu_name_en),3)])),_:2},1032,["to"]),"MESSAGES"===e.menu_name_en&&n.unreadTotal>0?((0,s.wg)(),(0,s.iD)("div",x,(0,f.zw)(n.unreadTotal),1)):(0,s.kq)("",!0)],8,D)))),256)),(0,s._)("div",{class:"menu-mobile-item-more-container",onClick:t[3]||(t[3]=e=>o.showMoreMenuItemsWithMobile())},[o.showMoreMenuItemsVisible?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Wm)(p,{class:"menu-mobile-item-more-icon",size:30},{default:(0,s.w5)((()=>[(0,s.Wm)(W)])),_:1}),L],64)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s.Wm)(p,{class:"menu-mobile-item-more-icon",size:30},{default:(0,s.w5)((()=>[(0,s.Wm)(z)])),_:1}),C],64)),o.showMoreMenuItemsVisible?((0,s.wg)(),(0,s.iD)("div",U,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.menuData.slice(4),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"menu-mobile-item menu-mobile-item-circle",Key:t},[(0,s.Wm)(u,{to:{path:e.link},exact:""},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{class:(0,f.C_)(["xll-icon-image",o.selectedKeys===e.link?"router-img-active":""]),src:o.selectedKeys===e.link?e.icon_hover:e.icon},null,8,["class","src"]),(0,s._)("span",{class:(0,f.C_)(o.selectedKeys===e.link?"router-txt-active":"")},(0,f.zw)(e.menu_name_en),3)])),_:2},1032,["to"]),"MESSAGES"===e.menu_name_en&&n.unreadTotal>0?((0,s.wg)(),(0,s.iD)("div",j,(0,f.zw)(n.unreadTotal),1)):(0,s.kq)("",!0)],8,T)))),256))])):(0,s.kq)("",!0)])])])])}var z=i(1474),I=i(41836),F=i(45323),E=i(33907),H=i(28339),Y=i(62931),K={name:"meSideMenu",setup(){const e=(0,E.oR)(),t=t=>e.commit("nowChatUserInfo",t),i=()=>e.commit("showChatStatus",!0),o=(0,H.yj)(),a=o.meta.activeMenu,n=(0,Y.iH)(a||o.path),c=(0,s.Fl)((()=>e.state.currentUser)),l=(0,Y.iH)(!1);function r(){l.value=!l.value}return{showMoreMenuItemsVisible:l,showMoreMenuItemsWithMobile:r,setNowChatUserInfo:t,setShowChatStatus:i,selectedKeys:n,currentUser:c}},data(){return{defaultAvatar:F,accountInfo:{},accountPhotoValue:"",versionTime:(0,z.O1)(),activeMsg:!1,showSideMenuStatus:!0}},watch:{menuData(e){console.log(e)},unreadTotal(e){console.log(e)}},computed:{username:{get(){return this.$store.state.username}},userAvatar:{get(){return this.$store.state.userAvatar}},identity:{get(){return this.$store.state.identity}},menuData:{get(){return this.$store.state.menuData}},unreadTotal:{get(){return this.$store.state.imUnreadTotal}}},mounted(){let e=document.body.clientWidth;Math.floor(e)<768&&(this.showSideMenuStatus=!1),Math.floor(e)>=768&&Math.floor(e)<992&&(this.showSideMenuStatus=!0),Math.floor(e)>=992&&Math.floor(e)<1200&&(this.showSideMenuStatus=!0),Math.floor(e)>=1200&&(this.showSideMenuStatus=!0),window.onresize=()=>{let e=document.body.clientWidth;Math.floor(e)<768&&(this.showSideMenuStatus=!1),Math.floor(e)>=768&&Math.floor(e)<992&&(this.showSideMenuStatus=!0),Math.floor(e)>=992&&Math.floor(e)<1200&&(this.showSideMenuStatus=!0),Math.floor(e)>=1200&&(this.showSideMenuStatus=!0)}},methods:{contactUs(){window.open("https://forms.zohopublic.com/edupassport/form/ContactUs1/formperma/W3VqHmZCLc7oBTIm0cBDz43WsPoDWS0NrHdhGyqdadU","_blank")},showSideMenu(){this.showSideMenuStatus=!this.showSideMenuStatus},getUserMenuList(){let e=this,t={user_id:localStorage.getItem("uid"),identity:e.identity,company_id:localStorage.getItem("company_id"),create_user_id:localStorage.getItem("c_uid"),page:1,limit:1e3};(0,I.$Z)(t).then((t=>{if(200===t.code){let i=t.message.pc,s=i.filter((t=>t.identity==e.identity));this.$store.commit("menuData",s)}})).catch((e=>{console.log(e)}))},turnMyMessages(){this.setShowChatStatus()}}},$=i(48118);const V=(0,$.Z)(K,[["render",W],["__scopeId","data-v-007ef7ef"]]);var P=V},89049:function(e,t,i){i.r(t),i.d(t,{default:function(){return nt}});var s=i(66252);const o={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},a=(0,s._)("path",{fill:"currentColor",d:"M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"},null,-1),n=(0,s._)("path",{fill:"currentColor",d:"M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"},null,-1),c=(0,s._)("path",{fill:"currentColor",d:"M512 512a96 96 0 1 0 0-192a96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320a160 160 0 0 1 0 320z"},null,-1),l=[a,n,c];function r(e,t){return(0,s.wg)(),(0,s.iD)("svg",o,l)}var u={name:"ep-location-information",render:r},d=i(66582),m=i(31842),h=i(56995),g=i(56612);const f=e=>((0,s.dD)("data-v-6ac1efd2"),e=e(),(0,s.Cn)(),e),p={class:"bg"},_={class:"educator-container"},w={class:"educator-l-container"},v={class:"educator-r-container"},b={class:"educator-r-container-bg"},y={class:"account-profile-t"},k={class:"account-profile-t-l"},M=(0,s.Uk)(" Back "),S={class:"account-profile-t-r"},D=(0,s.Uk)(" FAVORITED "),x=(0,s.Uk)(" FAVORITED "),L=(0,s.Uk)(" >"),C={class:"profile-1-container"},U={class:"basic-info-images-container"},T={class:"basic-info-six-pic-1"},j={class:"basic-info-c-container"},W={class:"basic-info-c-l"},z={class:"basic-info-c-name"},I={class:"basic-info-c-title"},F={class:"basic-info-c-nationality"},E={class:"basic-info-c-r"},H=(0,s.Uk)(" close "),Y=(0,s.Uk)(" read more "),K={class:"basic-info-c-r-b"},$={class:"basic-info-c-hobbies"},V={class:"basic-info-c-hobby"},P={class:"basic-info-c-hobbies"},A={class:"profile-2-container"},B={class:"exp-container"},q=f((()=>(0,s._)("div",{class:"exp-label"},"Experience",-1))),N={class:"exp-years"},Z={class:"exp-c-container"},O={class:"exp-c-item-l"},R={class:"exp-c-item-r"},G={class:"exp-c-item-1"},J={class:"exp-c-item-2"},Q={class:"exp-c-item-3"},X={class:"exp-c-item-3"},ee={class:"exp-c-item-4"},te=(0,s.Uk)(" close "),ie=(0,s.Uk)(" read more "),se={class:"profile-3-container"},oe={class:"education-container"},ae=f((()=>(0,s._)("div",{class:"education-label"},"Education",-1))),ne={class:"education-c-container"},ce={class:"education-c-item-l"},le={class:"education-c-item-r"},re={class:"education-c-item-r-1"},ue={class:"education-c-item-r-2"},de={class:"education-c-item-r-3"},me={class:"education-c-item-r-4"},he=(0,s.Uk)(" close "),ge=(0,s.Uk)(" read more "),fe={class:"profile-4-container"},pe={class:"languages-container"},_e=f((()=>(0,s._)("div",{class:"languages-label"}," Languages ",-1))),we={key:0,class:"languages-c-container"},ve={class:"languages-c-item-l"},be={class:"languages-c-item-r"},ye={key:0},ke={key:1},Me={key:2},Se={key:3},De={class:"profile-5-container"},xe={class:"preferences-container"},Le=f((()=>(0,s._)("div",{class:"preferences-label"},"Preferences",-1))),Ce={class:"preferences-c-container"},Ue={class:"preferences-c-item"},Te=f((()=>(0,s._)("div",{class:"preferences-c-item-label"},"Places lived",-1))),je={class:"object-show-container"},We={class:"preferences-c-item"},ze=f((()=>(0,s._)("div",{class:"preferences-c-item-label"},"Places traveled",-1))),Ie={class:"object-show-container"},Fe={class:"preferences-c-item"},Ee=f((()=>(0,s._)("div",{class:"preferences-c-item-label"},"Certifications",-1))),He={class:"object-show-container"},Ye={class:"preferences-c-item"},Ke=f((()=>(0,s._)("div",{class:"preferences-c-item-label"},"Subject to Teach",-1))),$e={class:"object-show-container"},Ve={class:"preferences-c-item"},Pe=f((()=>(0,s._)("div",{class:"preferences-c-item-label"},"Preferred Job Type",-1))),Ae={class:"object-show-container"},Be={class:"preferences-c-item"},qe=f((()=>(0,s._)("div",{class:"preferences-c-item-label"}," Preferred Age To Teach",-1))),Ne={class:"object-show-container"},Ze={class:"preferences-c-item"},Oe=f((()=>(0,s._)("div",{class:"preferences-c-item-label"},"Preferred Benefits",-1))),Re={class:"object-show-container"};function Ge(e,t,i,o,a,n){const c=h.Z,l=(0,s.up)("ArrowLeft"),r=(0,s.up)("el-icon"),f=(0,s.up)("el-button"),Ge=m.Z,Je=(0,s.up)("CollectionTag"),Qe=d.Z,Xe=(0,s.up)("el-avatar"),et=u,tt=(0,s.up)("el-col"),it=(0,s.up)("el-row"),st=(0,s.up)("el-scrollbar"),ot=(0,s.up)("el-image"),at=(0,s.up)("swiper-slide"),nt=(0,s.up)("swiper"),ct=(0,s.up)("el-dialog");return(0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("div",_,[(0,s._)("div",w,[(0,s.Wm)(c)]),(0,s._)("div",v,[(0,s._)("div",b,[(0,s._)("div",y,[(0,s._)("div",k,[(0,s.Wm)(f,{class:"account-profile-back-btn",type:"primary",link:"",onClick:t[0]||(t[0]=e=>n.backToAccountHome())},{default:(0,s.w5)((()=>[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l)])),_:1}),M])),_:1})]),(0,s._)("div",S,[a.isFromOther?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[a.isFavorite?((0,s.wg)(),(0,s.j4)(f,{key:0,class:"account-profile-cancel-btn",plain:"",round:"",onClick:t[1]||(t[1]=e=>n.cancelFavorite(a.educatorContact.id,4))},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{color:"#6650B3",size:20},{default:(0,s.w5)((()=>[(0,s.Wm)(Ge)])),_:1}),D])),_:1})):(0,s.kq)("",!0),a.isFavorite?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(f,{key:1,class:"account-profile-cancel-btn",plain:"",round:"",onClick:t[2]||(t[2]=e=>n.addFavorite(a.educatorContact.id,4,a.educatorContact.name,a.educatorContact.profile_photo))},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{size:20},{default:(0,s.w5)((()=>[(0,s.Wm)(Je)])),_:1}),x])),_:1})),(0,s.Wm)(Qe,{text:"SEND A MESSAGE","target-user":a.educatorContact,onOnSuccess:n.chatSuccess,"btn-style":"primary",identity:1},{default:(0,s.w5)((()=>[L])),_:1},8,["target-user","onOnSuccess"])],64)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[],64))])]),(0,s.Wm)(st,{class:"profile-c-container"},{default:(0,s.w5)((()=>[(0,s._)("div",C,[(0,s._)("div",{class:"profile-background-container",style:(0,g.j5)("background-image:url("+a.backgroundUrl+")")},null,4),(0,s.Wm)(it,{gutter:0},{default:(0,s.w5)((()=>[(0,s.Wm)(tt,{span:24,class:"basic-info-1-container"},{default:(0,s.w5)((()=>[(0,s._)("div",U,[(0,s.Wm)(Xe,{class:"basic-info-profile-photo",src:a.profilePhotoUrl},null,8,["src"]),(0,s._)("div",{class:"basic-info-six-pic-container",onClick:t[3]||(t[3]=e=>a.imagesDialogVisible=!0)},[(0,s._)("div",T,[(0,s.Wm)(Xe,{class:"basic-info-six-pic",src:a.profilePhotoUrl},null,8,["src"])])])]),(0,s._)("div",j,[(0,s._)("div",W,[(0,s._)("div",z,(0,g.zw)(a.educatorContact.name),1),(0,s._)("div",I,(0,g.zw)(a.educatorContact.job_title),1),(0,s._)("div",F,(0,g.zw)(a.educatorContact.nationality),1)]),(0,s._)("div",E,[(0,s._)("p",null,[(0,s.Uk)((0,g.zw)(e.$filters.textEllipsis(a.educatorContact.bio,a.bioTextLength))+" ",1),e.$filters.textEllipsisStatus(a.educatorContact.bio,a.bioTextLength)?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[-1===a.bioTextLength?((0,s.wg)(),(0,s.j4)(f,{key:0,class:"readmore-btn",link:"",type:"primary",onClick:t[4]||(t[4]=e=>n.closeMoreForBio())},{default:(0,s.w5)((()=>[H])),_:1})):((0,s.wg)(),(0,s.j4)(f,{key:1,class:"readmore-btn",link:"",type:"primary",onClick:t[5]||(t[5]=e=>n.readMoreForBio())},{default:(0,s.w5)((()=>[Y])),_:1}))],64)):(0,s.kq)("",!0)]),(0,s._)("div",K,[(0,s._)("div",$,[(0,s._)("div",V,[(0,s.Wm)(r,{color:"#6648ff"},{default:(0,s.w5)((()=>[(0,s.Wm)(et)])),_:1}),(0,s.Uk)(" "+(0,g.zw)(a.educatorContact.address),1)])]),(0,s._)("div",P,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.hobbiesList,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"basic-info-c-hobby",key:t}," #"+(0,g.zw)(e),1)))),128))])])])])])),_:1})])),_:1})]),(0,s._)("div",A,[(0,s._)("div",B,[q,(0,s._)("div",N,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.teachExpList,((e,t)=>((0,s.wg)(),(0,s.iD)(s.HY,{key:t},[(0,s.Uk)((0,g.zw)(e.object_en),1)],64)))),128))]),(0,s._)("div",Z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.workInfo,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{class:"exp-c-item",key:i},[(0,s._)("div",O,[(0,s.Wm)(Xe,{class:"exp-c-item-l-icon"})]),(0,s._)("div",R,[(0,s._)("div",G,(0,g.zw)(t.title),1),(0,s._)("div",J,(0,g.zw)(t.company_name),1),(0,s._)("div",Q,(0,g.zw)(e.$filters.ymdFormatTimestamp(t.work_time_from))+" - "+(0,g.zw)(e.$filters.ymdFormatTimestamp(t.work_time_to)),1),(0,s._)("div",X,(0,g.zw)(t.location),1),(0,s._)("div",ee,[(0,s.Uk)((0,g.zw)(e.$filters.textEllipsis(t.teaching_experience,t.len))+" ",1),e.$filters.textEllipsisStatus(t.teaching_experience,t.len)?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[-1===t.len?((0,s.wg)(),(0,s.j4)(f,{key:0,class:"readmore-btn",link:"",type:"primary",onClick:e=>n.closeMoreForWorkExp(i)},{default:(0,s.w5)((()=>[te])),_:2},1032,["onClick"])):((0,s.wg)(),(0,s.j4)(f,{key:1,class:"readmore-btn",link:"",type:"primary",onClick:e=>n.readMoreForWorkExp(i)},{default:(0,s.w5)((()=>[ie])),_:2},1032,["onClick"]))],64)):(0,s.kq)("",!0)])])])))),128))])])]),(0,s._)("div",se,[(0,s._)("div",oe,[ae,(0,s._)("div",ne,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.educationInfo,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{class:"education-c-item",key:i},[(0,s._)("div",ce,[(0,s.Wm)(Xe,{class:"education-c-item-l-icon"})]),(0,s._)("div",le,[(0,s._)("div",re,(0,g.zw)(t.school_name),1),(0,s._)("div",ue,(0,g.zw)(t.degree),1),(0,s._)("div",de,(0,g.zw)(e.$filters.ymdFormatTimestamp(t.start_time))+"-"+(0,g.zw)(e.$filters.ymdFormatTimestamp(t.end_time)),1),(0,s._)("div",me,[(0,s.Uk)((0,g.zw)(e.$filters.textEllipsis(t.field_of_study,t.len))+" ",1),e.$filters.textEllipsisStatus(t.field_of_study,t.len)?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[-1===t.len?((0,s.wg)(),(0,s.j4)(f,{key:0,class:"readmore-btn",link:"",type:"primary",onClick:e=>n.closeMoreForEducation(i)},{default:(0,s.w5)((()=>[he])),_:2},1032,["onClick"])):((0,s.wg)(),(0,s.j4)(f,{key:1,class:"readmore-btn",link:"",type:"primary",onClick:e=>n.readMoreForEducation(i)},{default:(0,s.w5)((()=>[ge])),_:2},1032,["onClick"]))],64)):(0,s.kq)("",!0)])])])))),128))])])]),(0,s._)("div",fe,[(0,s._)("div",pe,[_e,a.educatorContact.languages?((0,s.wg)(),(0,s.iD)("div",we,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.educatorContact.languages,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"languages-c-item",key:t},[(0,s._)("div",ve,(0,g.zw)(e.object_en),1),(0,s._)("div",be,[1==e.object_score?((0,s.wg)(),(0,s.iD)("span",ye," Native ")):(0,s.kq)("",!0),2==e.object_score?((0,s.wg)(),(0,s.iD)("span",ke," Fluent ")):(0,s.kq)("",!0),3==e.object_score?((0,s.wg)(),(0,s.iD)("span",Me," Conversational ")):(0,s.kq)("",!0),4==e.object_score?((0,s.wg)(),(0,s.iD)("span",Se," Beginner ")):(0,s.kq)("",!0)])])))),128))])):(0,s.kq)("",!0)])]),(0,s._)("div",De,[(0,s._)("div",xe,[Le,(0,s._)("div",Ce,[(0,s.Wm)(it,{gutter:50},{default:(0,s.w5)((()=>[(0,s.Wm)(tt,{xs:24,sm:24,md:6,lg:6,xl:6},{default:(0,s.w5)((()=>[(0,s._)("div",Ue,[Te,(0,s._)("div",je,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.countriesLivedList,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"object-show-item",key:t},(0,g.zw)(e.object_en),1)))),128))])])])),_:1}),(0,s.Wm)(tt,{xs:24,sm:24,md:6,lg:6,xl:6},{default:(0,s.w5)((()=>[(0,s._)("div",We,[ze,(0,s._)("div",Ie,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.countriesTraveledList,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"object-show-item",key:t},(0,g.zw)(e.object_en),1)))),128))])])])),_:1}),(0,s.Wm)(tt,{xs:24,sm:24,md:6,lg:6,xl:6},{default:(0,s.w5)((()=>[(0,s._)("div",Fe,[Ee,(0,s._)("div",He,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.certificationsList,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"object-show-item",key:t},(0,g.zw)(e.object_en),1)))),128))])])])),_:1}),(0,s.Wm)(tt,{xs:24,sm:24,md:6,lg:6,xl:6},{default:(0,s.w5)((()=>[(0,s._)("div",Ye,[Ke,(0,s._)("div",$e,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.subjectList,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"object-show-item",key:t},(0,g.zw)(e.object_en),1)))),128))])])])),_:1})])),_:1}),(0,s.Wm)(it,{gutter:50},{default:(0,s.w5)((()=>[(0,s.Wm)(tt,{xs:24,sm:24,md:6,lg:6,xl:6},{default:(0,s.w5)((()=>[(0,s._)("div",Ve,[Pe,(0,s._)("div",Ae,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.jobTypeList,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"object-show-item",key:t},(0,g.zw)(e.object_en),1)))),128))])])])),_:1}),(0,s.Wm)(tt,{xs:24,sm:24,md:6,lg:6,xl:6},{default:(0,s.w5)((()=>[(0,s._)("div",Be,[qe,(0,s._)("div",Ne,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.ageToTeachList,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"object-show-item",key:t},(0,g.zw)(e.object_en),1)))),128))])])])),_:1}),(0,s.Wm)(tt,{xs:24,sm:24,md:6,lg:6,xl:6},{default:(0,s.w5)((()=>[(0,s._)("div",Ze,[Oe,(0,s._)("div",Re,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.benefitsList,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"object-show-item",key:t},(0,g.zw)(e.object_en),1)))),128))])])])),_:1})])),_:1})])])])])),_:1})])])]),(0,s.Wm)(ct,{modelValue:a.imagesDialogVisible,"onUpdate:modelValue":t[6]||(t[6]=e=>a.imagesDialogVisible=e),fullscreen:""},{default:(0,s.w5)((()=>[(0,s.Wm)(nt,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},slidesPerView:3,spaceBetween:50,navigation:!0,thumbs:{swiper:o.thumbsSwiper},class:"mySwiper2"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.accountImageFileList,((e,t)=>((0,s.wg)(),(0,s.j4)(at,{key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(ot,{src:e.url},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["thumbs"]),(0,s.Wm)(nt,{onSwiper:o.setThumbsSwiper,spaceBetween:20,slidesPerView:5,freeMode:!0,watchSlidesProgress:!0,class:"mySwiper"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.accountImageFileList,((e,t)=>((0,s.wg)(),(0,s.j4)(at,{key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(ot,{src:e.url},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["onSwiper"])])),_:1},8,["modelValue"])])}var Je=i(73181),Qe=i(71911),Xe=i(62931),et=i(41836),tt=i(44276),it=i(42576);Qe.ZP.use([Qe.pt,Qe.Rv,Qe.W_,Qe.tl,Qe.o3,Qe.LG]);var st={name:"profile",components:{meSideMenu:h.Z,Swiper:Je.t,SwiperSlide:Je.o,chatButton:d.Z},setup(){let e=(0,Xe.iH)(null);const t=t=>{e.value=t};return{thumbsSwiper:e,setThumbsSwiper:t}},data(){return{imagesDialogVisible:!1,educatorContact:{},userContact:{},certificationsList:[],educationInfo:[],teachExpList:[],countriesLivedList:[],countriesTraveledList:[],languagesList:[],locationList:[],jobTypeList:[],ageToTeachList:[],regionList:[],benefitsList:[],subjectList:[],userImagesList:[],workInfo:[],hobbiesList:[],profilePhotoUrl:"",backgroundUrl:"",accountImageFileList:[],introVideoUrl:"",resumeUrl:"",isFromOther:!1,isFavorite:!1,bioTextLength:140}},unmounted(){(0,it.lJ)(),window.onresize=null},mounted(){let e=document.body.clientWidth,t=Math.floor(e);t<=768&&(0,it.lJ)(),window.onresize=()=>{t<=768&&(0,it.lJ)()};let i=this.$route.query.str;if(i){let e=(0,tt.Jx)(i),t=JSON.parse(e);"other"==t.from?(this.isFromOther=!0,this.getUserInfoForVisitor(t.uid,t.cid),this.addUserBrowsingHistory(t.cid)):(this.getUserInfo(),this.updateEducatorProfile())}else this.getUserInfo(),this.updateEducatorProfile()},methods:{addUserBrowsingHistory(e){let t={type:4,type_id:e};(0,et.Z7)(t).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))},readMoreForBio(){this.bioTextLength=-1},closeMoreForBio(){this.bioTextLength=140},readMoreForWorkExp(e){this.workInfo[e]["len"]=-1},closeMoreForWorkExp(e){this.workInfo[e]["len"]=240},readMoreForEducation(e){this.educationInfo[e]["len"]=-1},closeMoreForEducation(e){this.educationInfo[e]["len"]=240},chatSuccess(){this.$router.push({path:"/chat/messages"})},cancelFavorite(e,t){let i={token:localStorage.getItem("token"),type:e,type_id:t};(0,et.Bv)(i).then((e=>{console.log(e),200==e.code&&(this.isFavorite=!1)})).catch((e=>{console.log(e),this.$message.error(e.msg)}))},addFavorite(e,t,i,s){let o={token:localStorage.getItem("token"),type:t,type_id:e,type_title:i,type_url:s};(0,et.q8)(o).then((e=>{console.log(e),200==e.code&&(this.$message.success("Success"),this.isFavorite=!0)})).catch((e=>{console.log(e),this.$message.error(e.msg)}))},backToAccountHome(){this.$router.push("/account/home")},updateEducatorProfile(){let e={token:localStorage.getItem("token")};(0,et.nr)(e).then((e=>{console.log(e)})).catch((e=>{console.log(e),this.$message.error(e.msg)}))},getUserInfoForVisitor(e,t){let i={user_id:e,company_id:t,identity:1};(0,et.Vd)(i).then((e=>{if(console.log(e),200==e.code){let t=e.message.user_contact,i=e.message.user_contact.educator_contact;if(t&&(this.userContact=t),i&&(this.educatorContact=i),i.Teaching_certificate&&(this.certificationsList=i.Teaching_certificate),i.places_lived&&(this.countriesLivedList=i.places_lived),i.places_traveled&&(this.countriesTraveledList=i.places_traveled),i.languages&&(this.languagesList=i.languages),i.Location&&(this.locationList=i.Location),i.job_type&&(this.jobTypeList=i.job_type),i.age_to_teach&&(this.ageToTeachList=i.age_to_teach),i.region&&(this.regionList=i.region),i.benefits&&(this.benefitsList=i.benefits),i.subject&&(this.subjectList=i.subject),i.images){let e=i.images;if(e.length>0){let t=[];e.forEach((e=>{let i={name:"",url:e.url};t.push(i)})),this.accountImageFileList=t,console.log(this.accountImageFileList)}}if(i.work_info){let e=i.work_info;e.forEach((e=>{e.len=240})),this.workInfo=e}if(i.education_info){let e=i.education_info;e.forEach((e=>{e.len=240})),this.educationInfo=e}i.Teaching_experience&&(this.teachExpList=i.Teaching_experience);let s=i.hobbies;s&&(this.hobbiesList=s.split(",")),t.headimgurl&&(this.profilePhotoUrl=t.headimgurl),i.background_image&&(this.backgroundUrl=i.background_image);let o=i.video_url,a=i.resume_pdf;o&&(this.introVideoUrl=o),a&&(this.resumeUrl=a)}})).catch((e=>{console.log(e),this.$message.error(e.msg)}))},getUserInfo(){let e={identity:1};(0,et.Lk)(e).then((e=>{if(console.log(e),200==e.code){let t=e.message.user_contact,i=e.message.user_contact.educator_contact;if(t&&(this.userContact=t),i&&(this.educatorContact=i),i.Teaching_certificate&&(this.certificationsList=i.Teaching_certificate),i.places_lived&&(this.countriesLivedList=i.places_lived),i.places_traveled&&(this.countriesTraveledList=i.places_traveled),i.languages&&(this.languagesList=i.languages),i.Location&&(this.locationList=i.Location),i.job_type&&(this.jobTypeList=i.job_type),i.age_to_teach&&(this.ageToTeachList=i.age_to_teach),i.region&&(this.regionList=i.region),i.benefits&&(this.benefitsList=i.benefits),i.subject&&(this.subjectList=i.subject),i.images){let e=i.images;if(e.length>0){let t=[];e.forEach((e=>{let i={name:"",url:e.url};t.push(i)})),this.accountImageFileList=t}}if(i.work_info){let e=i.work_info;e.forEach((e=>{e.len=240})),this.workInfo=e}if(i.education_info){let e=i.education_info;e.forEach((e=>{e.len=240})),this.educationInfo=e}i.Teaching_experience&&(this.teachExpList=i.Teaching_experience);let s=i.hobbies;s&&(this.hobbiesList=s.split(",")),t.headimgurl&&(this.profilePhotoUrl=t.headimgurl),i.background_image&&(this.backgroundUrl=i.background_image);let o=i.video_url,a=i.resume_pdf;o&&(this.introVideoUrl=o),a&&(this.resumeUrl=a)}})).catch((e=>{console.log(e),this.$message.error(e.msg)}))},exportPdf(){window.print()}}},ot=i(48118);const at=(0,ot.Z)(st,[["render",Ge],["__scopeId","data-v-6ac1efd2"]]);var nt=at}}]);
//# sourceMappingURL=9049.3639d63e.js.map