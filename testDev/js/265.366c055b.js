"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[265],{8742:function(e,s,t){t.d(s,{Z:function(){return L}});var i=t(6252),a=t(3577);const l={class:"profile-l-container"},o={class:"profile-photo-container"},n={class:"l-container"},c={class:"l-item"},d=(0,i.Uk)("Overview"),m={class:"l-item"},r=(0,i.Uk)("My Favorites"),u={class:"l-item"},_=(0,i.Uk)("My Account & Profile"),g=(0,i.Uk)("My Account & Profile"),v=(0,i.Uk)("My Account & Profile"),f={key:0,class:"l-item"},y=(0,i.Uk)("My Jobs"),k={key:1,class:"l-item"},w=(0,i.Uk)("My Deals"),b={key:2,class:"l-item"},p=(0,i.Uk)("Post a Job"),h={key:3,class:"l-item"},j=(0,i.Uk)("Offer a Deal"),D={class:"l-item"},x=(0,i.Uk)("Privacy Policy"),U={key:4,class:"l-item"},q=(0,i.Uk)("My Applications");function W(e,s,t,W,M,P){const z=(0,i.up)("el-image"),A=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",o,[P.userAvatar?((0,i.wg)(),(0,i.j4)(z,{key:0,class:"profile-photo",src:P.userAvatar},null,8,["src"])):(0,i.kq)("",!0),(0,i._)("div",null,[(0,i._)("span",null,(0,a.zw)(P.username),1)])]),(0,i._)("div",n,[(0,i._)("div",c,[(0,i.Wm)(A,{to:"/overview",exact:""},{default:(0,i.w5)((()=>[d])),_:1})]),(0,i._)("div",m,[(0,i.Wm)(A,{to:"/favorites",exact:""},{default:(0,i.w5)((()=>[r])),_:1})]),(0,i._)("div",u,[1==P.identity?((0,i.wg)(),(0,i.j4)(A,{key:0,to:"/educator/profile",exact:""},{default:(0,i.w5)((()=>[_])),_:1})):(0,i.kq)("",!0),2==P.identity?((0,i.wg)(),(0,i.j4)(A,{key:1,to:"/business/profile",exact:""},{default:(0,i.w5)((()=>[g])),_:1})):(0,i.kq)("",!0),3==P.identity?((0,i.wg)(),(0,i.j4)(A,{key:2,to:"/vendor/profile",exact:""},{default:(0,i.w5)((()=>[v])),_:1})):(0,i.kq)("",!0)]),2==P.identity?((0,i.wg)(),(0,i.iD)("div",f,[(0,i.Wm)(A,{to:"/jobs/myJobs",exact:""},{default:(0,i.w5)((()=>[y])),_:1})])):(0,i.kq)("",!0),3==P.identity?((0,i.wg)(),(0,i.iD)("div",k,[(0,i.Wm)(A,{to:"/deals/myDeals",exact:""},{default:(0,i.w5)((()=>[w])),_:1})])):(0,i.kq)("",!0),2==P.identity?((0,i.wg)(),(0,i.iD)("div",b,[(0,i.Wm)(A,{to:{path:"/jobs/post",query:{version_time:M.versionTime}},exact:""},{default:(0,i.w5)((()=>[p])),_:1},8,["to"])])):(0,i.kq)("",!0),3==P.identity?((0,i.wg)(),(0,i.iD)("div",h,[(0,i.Wm)(A,{to:"/deals/offer",exact:""},{default:(0,i.w5)((()=>[j])),_:1})])):(0,i.kq)("",!0),(0,i._)("div",D,[(0,i.Wm)(A,{to:"/",exact:""},{default:(0,i.w5)((()=>[x])),_:1})]),2==P.identity?((0,i.wg)(),(0,i.iD)("div",U,[(0,i.Wm)(A,{to:"/",exact:""},{default:(0,i.w5)((()=>[q])),_:1})])):(0,i.kq)("",!0)])])}var M=t(2325),P=t(6565),z={name:"meSideMenu",data(){return{accountInfo:{},accountPhotoValue:"",versionTime:(0,M.O1)()}},computed:{username:{get(){return this.$store.state.username}},userAvatar:{get(){return this.$store.state.userAvatar}},identity:{get(){return this.$store.state.identity}}},mounted(){},methods:{getBasicInfo(){let e=localStorage.getItem("uid"),s=localStorage.getItem("identity"),t={id:e,token:localStorage.getItem("token")};(0,P.zP)(t).then((e=>{console.log(e),200==e.code&&(this.phone=e.message.phone,1==s&&e.message.educator_info&&(this.accountInfo=e.message.educator_info,this.accountPhotoValue=e.message.educator_info.profile_photo),2==s&&e.message.business_info&&(this.accountInfo=e.message.business_info,this.accountPhotoValue=e.message.business_info.logo),3==s&&e.message.vendor_info&&(this.accountInfo=e.message.vendor_info,this.accountPhotoValue=e.message.vendor_info.logo))}))}}},A=t(8118);const I=(0,A.Z)(z,[["render",W],["__scopeId","data-v-c3de7384"]]);var L=I},7265:function(e,s,t){t.r(s),t.d(s,{default:function(){return G}});var i=t(6252),a=t(3577);const l=e=>((0,i.dD)("data-v-e15ba142"),e=e(),(0,i.Cn)(),e),o={class:"bg"},n={class:"favorites-container"},c={class:"jobs-container"},d=l((()=>(0,i._)("div",{class:"jobs-label"},"Jobs",-1))),m={class:"jobs-list-content"},r={class:"jobs-list-item-l"},u={class:"jobs-list-item-r"},_={class:"jobs-list-item-title"},g={class:"jobs-list-item-name"},v={class:"jobs-list-item-address"},f={class:"jobs-list-item-desc"},y=l((()=>(0,i._)("div",{class:"jobs-list-item-readmore"}," Read More... ",-1))),k={class:"jobs-list-item-b"},w={class:"jobs-list-item-b-l"},b={class:"jobs-list-item-work-type"},p=l((()=>(0,i._)("i",{class:"iconfont el-icon-alishijian"},null,-1))),h=(0,i.Uk)("FT"),j=(0,i.Uk)("PT"),D=(0,i.Uk)("S"),x={key:0,class:"jobs-list-item-gender"},U=l((()=>(0,i._)("i",{class:"iconfont el-icon-alimale-female"},null,-1))),q=(0,i.Uk)("Male"),W=(0,i.Uk)("Female"),M=l((()=>(0,i._)("view",{class:"jobs-list-item-work-exp"},[(0,i._)("i",{class:"iconfont el-icon-aligongzuojingyan"}),(0,i.Uk)(" 1-2 yrs ")],-1))),P={class:"jobs-list-item-b-r"},z={class:"jobs-list-item-date"},A={class:"jobs-list-item-salary"},I={class:"deals-container"},L=l((()=>(0,i._)("div",{class:"deals-label"},"Deals",-1))),J={class:"deals-content"},H={class:"deals-item-t"},S={class:"deals-item-t-l"},T=l((()=>(0,i._)("div",{class:"deals-item-t-r"},[(0,i._)("i",{class:"iconfont el-icon-alixll-heart xll-heart-icon"})],-1))),Y=l((()=>(0,i._)("div",{class:"deals-item-tag-container"},[(0,i._)("div",{class:"deals-item-tag"},"Deal")],-1))),C={class:"deals-item-name-container"},F={class:"deals-item-title"},N={class:"deals-item-name"},V=l((()=>(0,i._)("div",{class:"deals-item-b"},[(0,i._)("div",{class:"deals-item-b-l"}," Category "),(0,i._)("div",{class:"deals-item-b-r"}," Los Angeles, USA ")],-1))),Z={class:"ads-container"};function $(e,s,t,l,$,O){const K=(0,i.up)("meSideMenu"),R=(0,i.up)("el-col"),B=(0,i.up)("el-image"),E=(0,i.up)("router-link"),G=(0,i.up)("Calendar"),Q=(0,i.up)("el-icon"),X=(0,i.up)("el-row");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",n,[(0,i.Wm)(X,{align:"top",justify:"center"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{xs:24,sm:24,md:4,lg:4,xl:4},{default:(0,i.w5)((()=>[(0,i.Wm)(K)])),_:1}),(0,i.Wm)(R,{xs:24,sm:24,md:20,lg:20,xl:20},{default:(0,i.w5)((()=>[(0,i._)("div",c,[d,(0,i._)("div",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)($.myJobsData,((s,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"jobs-list-item",key:t},[(0,i._)("div",r,[(0,i.Wm)(B,{class:"jobs-item-logo",src:s.logo,fit:"cover"},null,8,["src"])]),(0,i._)("div",u,[(0,i._)("div",_,[(0,i.Wm)(E,{to:{path:"/jobs/detail",query:{id:s.id}}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(s.job_title),1)])),_:2},1032,["to"])]),(0,i._)("div",g,(0,a.zw)(s.business_name),1),(0,i._)("div",v,(0,a.zw)(s.address),1),(0,i._)("div",f,(0,a.zw)(s.desc),1),y]),(0,i._)("div",k,[(0,i._)("div",w,[(0,i._)("view",b,[p,1==s.employment_type?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[h],64)):(0,i.kq)("",!0),2==s.employment_type?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[j],64)):(0,i.kq)("",!0),3==s.employment_type?((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[D],64)):(0,i.kq)("",!0)]),1==s.sex||2==s.sex?((0,i.wg)(),(0,i.iD)("view",x,[U,1==s.sex?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[q],64)):(0,i.kq)("",!0),2==s.sex?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[W],64)):(0,i.kq)("",!0)])):(0,i.kq)("",!0),M]),(0,i._)("div",P,[(0,i._)("view",z,[(0,i.Wm)(Q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(G)])),_:1}),(0,i.Uk)("  "+(0,a.zw)(e.$filters.howLongFormat(s.c_time)),1)]),(0,i._)("view",A,(0,a.zw)(s.currency)+" "+(0,a.zw)(s.salary_min)+" - "+(0,a.zw)(s.salary_max),1)])])])))),128))])]),(0,i._)("div",I,[L,(0,i._)("div",J,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)($.myDealsData,((e,s)=>((0,i.wg)(),(0,i.iD)("div",{class:"deals-item",key:s},[(0,i._)("div",{class:"deals-item-bg",style:(0,a.j5)("background-image:url("+e.user_info.profile_photo+")")},[(0,i._)("div",H,[(0,i._)("div",S,[e.user_info?((0,i.wg)(),(0,i.j4)(B,{key:0,class:"deals-logo",src:e.user_info.logo},null,8,["src"])):(0,i.kq)("",!0)]),T]),Y,(0,i._)("div",C,[(0,i._)("div",F,(0,a.zw)(e.desc),1),(0,i._)("div",N,[e.user_info?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,a.zw)(e.user_info.vendor_name_en),1)],64)):(0,i.kq)("",!0)])])],4),V])))),128))])]),(0,i._)("div",Z,[(0,i.Wm)(B)])])),_:1})])),_:1})])])}var O=t(6565),K=t(8742),R={name:"favorites",components:{meSideMenu:K.Z},data(){return{myJobsData:[],jobPage:1,jobLimit:2,jobTotalNum:0,myDealsData:[],dealPage:1,dealLimit:4,dealTotalNum:0}},mounted(){this.getMyJobsList(this.jobPage,this.jobLimit),this.getMyDealsList(this.dealPage,this.dealLimit)},methods:{getMyJobsList(e,s){let t={page:e,limit:s};(0,O.DR)(t).then((e=>{200==e.code?(this.myJobsData=e.message.data,this.jobTotalNum=e.message.total):console.log(e.msg)}))},getMyDealsList(e,s){let t={page:e,limit:s};(0,O.wD)(t).then((e=>{console.log(e),200==e.code&&(this.myDealsData=e.message.data,this.dealTotalNum=e.message.total)})).catch((e=>{console.log(e.response)}))}}},B=t(8118);const E=(0,B.Z)(R,[["render",$],["__scopeId","data-v-e15ba142"]]);var G=E}}]);
//# sourceMappingURL=265.366c055b.js.map