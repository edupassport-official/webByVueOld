"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[391],{6391:function(a,e,t){t.r(e),t.d(e,{default:function(){return Y}});var s=t(6252),o=t(3577);const l=a=>((0,s.dD)("data-v-21e58c4e"),a=a(),(0,s.Cn)(),a),n={class:"bg"},i={class:"job-title"},c={class:"job-address-salary"},d={class:"job-address"},r={class:"job-desc-container"},u=l((()=>(0,s._)("div",{class:"job-desc-label"},"Deal Description",-1))),p=l((()=>(0,s._)("div",{class:"job-desc-label-underline"},null,-1))),m={class:"job-desc-content"},_={key:0,class:"job-tags"},b={class:"address-container"},g=l((()=>(0,s._)("div",{class:"address-label"},"Address & Location",-1))),v=l((()=>(0,s._)("div",{class:"address-label-underline"},null,-1))),D={class:"address-content"},w={class:"address-address"},f=l((()=>(0,s._)("b",null,"Address:",-1))),k=l((()=>(0,s._)("div",{class:"address-location"},[(0,s._)("b",null,"Location: "),(0,s._)("div",{class:"map-container"},[(0,s._)("div",{id:"mapContainer",class:"basemap"})])],-1))),y={class:"company-bio-container"},h=l((()=>(0,s._)("div",{class:"company-bio-label"},"Company Bio",-1))),C=l((()=>(0,s._)("div",{class:"company-bio-label-underline"},null,-1))),j={class:"company-bio-content"},I={class:"company-logo-container"},J={key:0,class:"company-bio-text"},z={key:0,class:"contact-container"},L=l((()=>(0,s._)("div",{class:"contact-label"},"Contact Person",-1))),x={class:"contact-content"},W={class:"contact-l"},q={class:"contact-r"},T={class:"contact-r-t"},M={class:"contact-r-b"},H=(0,s.Uk)("Let's Chat!");function S(a,e,t,l,S,U){const A=(0,s.up)("el-col"),B=(0,s.up)("el-image"),G=(0,s.up)("el-button"),N=(0,s.up)("el-row");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",null,[(0,s.Wm)(N,{class:"detail-row",align:"top",justify:"start"},{default:(0,s.w5)((()=>[(0,s.Wm)(A,{class:"detail-l-col",xs:24,sm:24,md:16,lg:16,xl:16},{default:(0,s.w5)((()=>[(0,s._)("div",i,(0,o.zw)(S.detailData.title),1),(0,s._)("div",c,[(0,s._)("div",d,(0,o.zw)(S.detailData.location),1)]),(0,s._)("div",r,[u,p,(0,s._)("div",m,(0,o.zw)(S.detailData.desc),1),S.detailData.tags?((0,s.wg)(),(0,s.iD)("div",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(S.detailData.tags,((a,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"job-tag",key:e},(0,o.zw)(a.tag_name_en),1)))),128))])):(0,s.kq)("",!0)]),(0,s._)("div",b,[g,v,(0,s._)("div",D,[(0,s._)("div",w,[f,(0,s._)("span",null,(0,o.zw)(S.detailData.location),1)]),k])])])),_:1}),(0,s.Wm)(A,{xs:24,sm:24,md:8,lg:8,xl:8},{default:(0,s.w5)((()=>[(0,s._)("div",y,[h,C,(0,s._)("div",j,[(0,s._)("div",I,[S.detailData.userInfo?((0,s.wg)(),(0,s.j4)(B,{key:0,class:"company-logo",src:S.detailData.userInfo.logo},null,8,["src"])):(0,s.kq)("",!0)]),S.detailData.userInfo?((0,s.wg)(),(0,s.iD)("div",J,(0,o.zw)(S.detailData.userInfo.vendor_bio),1)):(0,s.kq)("",!0)])]),S.detailData.userInfo?((0,s.wg)(),(0,s.iD)("div",z,[L,(0,s._)("div",x,[(0,s._)("div",W,[(0,s.Wm)(B,{class:"contact-profile-photo",src:S.detailData.userInfo.profile_photo},null,8,["src"])]),(0,s._)("div",q,[(0,s._)("div",T," Hi I am "+(0,o.zw)(S.detailData.userInfo.first_name)+" from "+(0,o.zw)(S.detailData.userInfo.vendor_name_en)+". ",1),(0,s._)("div",M,[(0,s.Wm)(G,{type:"primary"},{default:(0,s.w5)((()=>[H])),_:1})])])])])):(0,s.kq)("",!0)])),_:1})])),_:1})])])}var U=t(6158),A=t.n(U),B=t(9651),G=t.n(B),N=t(43),O={name:"detail",data(){return{accessToken:"pk.eyJ1Ijoic3JrbGluZ2UiLCJhIjoiY2t2NnR4anI2OWU5NDJ3bWE1dHd3c3h1aSJ9.O0JfjqiyBBkFuf4G-DQ-DQ",mapStyle:"mapbox://styles/mapbox/streets-v11",detailData:{},otherJobsData:[]}},components:{},mounted(){let a=this.$route.query.id;this.getDealDetail(a)},methods:{initMap(a,e){A().accessToken=this.accessToken;const t=new(A().Map)({container:"mapContainer",center:[a,e],style:this.mapStyle,zoom:12}),s=new(A().NavigationControl);t.addControl(s,"top-right");const o=new(A().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0});t.addControl(o,"top-right");const l=new(G())({accessToken:this.accessToken,mapboxgl:A()});t.addControl(l,"top-left");const n=new(A().Marker);n.setLngLat([a,e]).addTo(t)},getDealDetail(a){let e={deal_id:a,token:localStorage.getItem("token")};(0,N.kR)(e).then((a=>{if(console.log(a),200==a.code){this.detailData=a.message,this.initMap(a.message.lng,a.message.lat);let e=a.message.user_id;this.getCompanyJobList(e)}}))},getCompanyJobList(a){let e={user_id:a,is_open:1,status:1,page:1,limit:5};(0,N.kM)(e).then((a=>{console.log(a),200==a.code&&(this.otherJobsData=a.message.data)}))}}},Q=t(8118);const R=(0,Q.Z)(O,[["render",S],["__scopeId","data-v-21e58c4e"]]);var Y=R}}]);
//# sourceMappingURL=391.10e882ae.js.map