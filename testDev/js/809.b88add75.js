"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[809],{4809:function(a,e,t){t.r(e),t.d(e,{default:function(){return Z}});var s=t(6252),o=t(3577);const l=a=>((0,s.dD)("data-v-c44fdddc"),a=a(),(0,s.Cn)(),a),n={class:"bg"},i={class:"job-title"},c={class:"job-address-salary"},d={class:"job-address"},r={class:"job-desc-container"},u=l((()=>(0,s._)("div",{class:"job-desc-label"},"Deal Description",-1))),p=l((()=>(0,s._)("div",{class:"job-desc-label-underline"},null,-1))),m={class:"job-desc-content"},_={key:0,class:"job-tags"},b={class:"address-container"},v=l((()=>(0,s._)("div",{class:"address-label"},"Address & Location",-1))),g=l((()=>(0,s._)("div",{class:"address-label-underline"},null,-1))),w={class:"address-content"},D={class:"address-address"},f=l((()=>(0,s._)("b",null,"Address:",-1))),y=l((()=>(0,s._)("div",{class:"address-location"},[(0,s._)("b",null,"Location: "),(0,s._)("div",{class:"map-container"},[(0,s._)("div",{id:"mapContainer",class:"basemap"})])],-1))),k={class:"company-bio-container"},h=l((()=>(0,s._)("div",{class:"company-bio-label"},"Company Bio",-1))),C=l((()=>(0,s._)("div",{class:"company-bio-label-underline"},null,-1))),j={class:"company-bio-content"},I={class:"company-logo-container"},J={key:0,class:"company-bio-text"},z={class:"view-profile-btn-container"},L=(0,s.Uk)("View Profile"),x={key:0,class:"contact-container"},W=l((()=>(0,s._)("div",{class:"contact-label"},"Contact Person",-1))),q={class:"contact-content"},T={class:"contact-l"},M={class:"contact-r"},U={class:"contact-r-t"},H={class:"contact-r-b"},S=(0,s.Uk)("Let's Chat!");function A(a,e,t,l,A,B){const G=(0,s.up)("el-col"),N=(0,s.up)("el-image"),O=(0,s.up)("el-button"),P=(0,s.up)("el-row");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",null,[(0,s.Wm)(P,{class:"detail-row",align:"top",justify:"start"},{default:(0,s.w5)((()=>[(0,s.Wm)(G,{class:"detail-l-col",xs:24,sm:24,md:16,lg:16,xl:16},{default:(0,s.w5)((()=>[(0,s._)("div",i,(0,o.zw)(A.detailData.title),1),(0,s._)("div",c,[(0,s._)("div",d,(0,o.zw)(A.detailData.location),1)]),(0,s._)("div",r,[u,p,(0,s._)("div",m,(0,o.zw)(A.detailData.desc),1),A.detailData.tags?((0,s.wg)(),(0,s.iD)("div",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(A.detailData.tags,((a,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"job-tag",key:e},(0,o.zw)(a.tag_name_en),1)))),128))])):(0,s.kq)("",!0)]),(0,s._)("div",b,[v,g,(0,s._)("div",w,[(0,s._)("div",D,[f,(0,s._)("span",null,(0,o.zw)(A.detailData.location),1)]),y])])])),_:1}),(0,s.Wm)(G,{xs:24,sm:24,md:8,lg:8,xl:8},{default:(0,s.w5)((()=>[(0,s._)("div",k,[h,C,(0,s._)("div",j,[(0,s._)("div",I,[A.detailData.userInfo?((0,s.wg)(),(0,s.j4)(N,{key:0,class:"company-logo",src:A.detailData.userInfo.logo},null,8,["src"])):(0,s.kq)("",!0)]),A.detailData.userInfo?((0,s.wg)(),(0,s.iD)("div",J,(0,o.zw)(A.detailData.userInfo.vendor_bio),1)):(0,s.kq)("",!0),(0,s._)("div",z,[(0,s.Wm)(O,{class:"view-profile-btn",type:"primary",round:""},{default:(0,s.w5)((()=>[L])),_:1})])])]),A.detailData.userInfo?((0,s.wg)(),(0,s.iD)("div",x,[W,(0,s._)("div",q,[(0,s._)("div",T,[(0,s.Wm)(N,{class:"contact-profile-photo",src:A.detailData.userInfo.profile_photo},null,8,["src"])]),(0,s._)("div",M,[(0,s._)("div",U," Hi I am "+(0,o.zw)(A.detailData.userInfo.first_name)+" from "+(0,o.zw)(A.detailData.userInfo.vendor_name_en)+". ",1),(0,s._)("div",H,[(0,s.Wm)(O,{type:"primary"},{default:(0,s.w5)((()=>[S])),_:1})])])])])):(0,s.kq)("",!0)])),_:1})])),_:1})])])}var B=t(6158),G=t.n(B),N=t(9651),O=t.n(N),P=t(43),Q={name:"detail",data(){return{accessToken:"pk.eyJ1Ijoic3JrbGluZ2UiLCJhIjoiY2t2NnR4anI2OWU5NDJ3bWE1dHd3c3h1aSJ9.O0JfjqiyBBkFuf4G-DQ-DQ",mapStyle:"mapbox://styles/mapbox/streets-v11",detailData:{},otherJobsData:[]}},components:{},mounted(){let a=this.$route.query.id;this.getDealDetail(a)},methods:{initMap(a,e){G().accessToken=this.accessToken;const t=new(G().Map)({container:"mapContainer",center:[a,e],style:this.mapStyle,zoom:12}),s=new(G().NavigationControl);t.addControl(s,"top-right");const o=new(G().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0});t.addControl(o,"top-right");const l=new(O())({accessToken:this.accessToken,mapboxgl:G()});t.addControl(l,"top-left");const n=new(G().Marker);n.setLngLat([a,e]).addTo(t)},getDealDetail(a){let e={deal_id:a,token:localStorage.getItem("token")};(0,P.kR)(e).then((a=>{if(console.log(a),200==a.code){this.detailData=a.message,this.initMap(a.message.lng,a.message.lat);let e=a.message.user_id;this.getCompanyJobList(e)}}))},getCompanyJobList(a){let e={user_id:a,is_open:1,status:1,page:1,limit:5};(0,P.kM)(e).then((a=>{console.log(a),200==a.code&&(this.otherJobsData=a.message.data)}))}}},R=t(8118);const Y=(0,R.Z)(Q,[["render",A],["__scopeId","data-v-c44fdddc"]]);var Z=Y}}]);
//# sourceMappingURL=809.b88add75.js.map