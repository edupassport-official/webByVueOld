"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[142],{2776:function(a,e,s){s.d(e,{Z:function(){return D}});var t=s(6252),l=s(3577);const i=a=>((0,t.dD)("data-v-5abe61cc"),a=a(),(0,t.Cn)(),a),n={class:"articles-container"},o=i((()=>(0,t._)("div",{class:"articles-label"},"Latest Industry Articles",-1))),c={class:"articles-content"},d={class:"articles-item-l"},r={class:"articles-item-r"},u={class:"articles-title"},_={class:"articles-date"};function b(a,e,s,i,b,p){const m=(0,t.up)("el-image"),v=(0,t.up)("el-link");return(0,t.wg)(),(0,t.iD)("div",n,[o,(0,t._)("div",c,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(b.articleListData,((e,s)=>((0,t.wg)(),(0,t.iD)("div",{class:"articles-item",key:s},[(0,t._)("div",d,[(0,t.Wm)(m,{class:"articles-item-banner",src:""!=e.user_url?e.user_url:e.url,fit:"cover"},null,8,["src"])]),(0,t._)("div",r,[(0,t._)("div",u,[(0,t.Wm)(v,{class:"articles-title-link",href:e.link,target:"_blank",underline:!1},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(e.title),1)])),_:2},1032,["href"])]),(0,t._)("div",_,(0,l.zw)(a.$filters.newsDateFormat(e.u_time)),1)])])))),128))])])}var p=s(43),m={name:"latestIndustryNews",data(){return{articleListData:[]}},mounted(){this.getAdsList()},methods:{getAdsList(){let a=localStorage.getItem("identity"),e={page:1,limit:1e4};(0,p.tb)(e).then((e=>{if(console.log(e),200==e.code){let s=e.message,t=[];0!=a&&a||(t=s.filter((a=>"guest_industry_news"==a.name))),1==a&&(t=s.filter((a=>"educator_industry_news"==a.name))),2==a&&(t=s.filter((a=>"business_industry_news"==a.name))),3==a&&(t=s.filter((a=>"vendor_industry_news"==a.name)));let l=t[0].data;this.articleListData=l,this.articleListLimitData=l.slice(0,2)}}))}}},v=s(8118);const g=(0,v.Z)(m,[["render",b],["__scopeId","data-v-5abe61cc"]]);var D=g},9142:function(a,e,s){s.r(e),s.d(e,{default:function(){return Fa}});var t=s(6252),l=s(3577);const i=a=>((0,t.dD)("data-v-a01aa34e"),a=a(),(0,t.Cn)(),a),n={class:"bg"},o={class:"job-title"},c={class:"job-address-salary"},d={class:"job-address"},r={class:"job-salary"},u={class:"job-desc-container"},_=i((()=>(0,t._)("div",{class:"job-desc-label"},"Job Description",-1))),b=i((()=>(0,t._)("div",{class:"job-desc-label-underline"},null,-1))),p={class:"job-desc-content"},m={class:"job-tags"},v={key:0,class:"job-tag"},g={key:1,class:"job-tag"},D={key:2,class:"job-tag"},w={key:3,class:"job-tag"},y={key:4,class:"job-tag"},k={class:"job-details-container"},h=i((()=>(0,t._)("div",{class:"job-details-label"},"Job Details",-1))),j=i((()=>(0,t._)("div",{class:"job-details-label-underline"},null,-1))),f={class:"job-details-content"},z={class:"application-deadline"},q=i((()=>(0,t._)("b",null,"Application: ",-1))),C={class:"start-date"},J=i((()=>(0,t._)("b",null,"Start Date: ",-1))),L={class:"number-vacancies"},S=i((()=>(0,t._)("b",null,"Number of Vacancies: ",-1))),x={class:"class-size"},I=i((()=>(0,t._)("b",null,"Class Size: ",-1))),A={key:0,class:"subjects"},W=i((()=>(0,t._)("b",null,"Subject(s):",-1))),T=i((()=>(0,t._)("div",{class:"working-hours"},null,-1))),H={key:1,class:"student-ages"},M=i((()=>(0,t._)("b",null,"Student Ages",-1))),N={class:"compensation-container"},U=i((()=>(0,t._)("div",{class:"compensation-label"},"Compensation",-1))),O=i((()=>(0,t._)("div",{class:"compensation-label-underline"},null,-1))),Y={class:"compensation-content"},E={class:"compensation-salary"},K=i((()=>(0,t._)("b",null,"Salary: ",-1))),Z={class:"compensation-payment"},B=i((()=>(0,t._)("b",null,"Payment: ",-1))),P={class:"compensation-class-size"},$=i((()=>(0,t._)("b",null,"Class Size: ",-1))),F={key:0,class:"compensation-benefits"},G=i((()=>(0,t._)("b",null,"Benefits:",-1))),Q={class:"qua-container"},R=i((()=>(0,t._)("div",{class:"qua-label"},"Qualification Requirements",-1))),V=i((()=>(0,t._)("div",{class:"qua-label-underline"},null,-1))),X={class:"qua-content"},aa={class:"qua-teach-exp"},ea=i((()=>(0,t._)("b",null,"Teaching Experience: ",-1))),sa={class:"qua-age"},ta=i((()=>(0,t._)("b",null,"Age: ",-1))),la={class:"qua-education-req"},ia=i((()=>(0,t._)("b",null,"Minimum Education Requirements: ",-1))),na={class:"address-container"},oa=i((()=>(0,t._)("div",{class:"address-label"},"Address & Location",-1))),ca=i((()=>(0,t._)("div",{class:"address-label-underline"},null,-1))),da={class:"address-content"},ra={class:"address-address"},ua=i((()=>(0,t._)("b",null,"Address:",-1))),_a=i((()=>(0,t._)("div",{class:"address-location"},[(0,t._)("b",null,"Location: "),(0,t._)("div",{class:"map-container"},[(0,t._)("div",{id:"mapContainer",class:"basemap"})])],-1))),ba={class:"apply-btn-container"},pa=(0,t.Uk)("Apply Now!"),ma={class:"company-bio-container"},va=i((()=>(0,t._)("div",{class:"company-bio-label"},"Company Bio",-1))),ga=i((()=>(0,t._)("div",{class:"company-bio-label-underline"},null,-1))),Da={class:"company-bio-content"},wa={class:"company-logo-container"},ya={key:0,class:"company-bio-text"},ka={key:0,class:"contact-container"},ha=i((()=>(0,t._)("div",{class:"contact-label"},"Contact Person",-1))),ja={class:"contact-content"},fa={class:"contact-l"},za={class:"contact-r"},qa={class:"contact-r-t"},Ca={class:"contact-r-b"},Ja=(0,t.Uk)("Let's Chat!"),La={class:"other-jobs-container"},Sa={class:"other-jobs-label"},xa=(0,t.Uk)(" Other Jobs by "),Ia={key:0},Aa={class:"other-jobs-content"},Wa={class:"other-jobs-l"},Ta={class:"other-jobs-r"},Ha={class:"other-jobs-r-t"},Ma={class:"other-jobs-r-b"};function Na(a,e,s,i,Na,Ua){const Oa=(0,t.up)("el-button"),Ya=(0,t.up)("el-col"),Ea=(0,t.up)("el-image"),Ka=(0,t.up)("router-link"),Za=(0,t.up)("latestIndustryNews"),Ba=(0,t.up)("el-row");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(Ba,{class:"detail-row",align:"top",justify:"start"},{default:(0,t.w5)((()=>[(0,t.Wm)(Ya,{class:"detail-l-col",xs:24,sm:24,md:16,lg:16,xl:16},{default:(0,t.w5)((()=>[(0,t._)("div",o,(0,l.zw)(Na.detailData.job_title),1),(0,t._)("div",c,[(0,t._)("div",d,(0,l.zw)(Na.detailData.address),1),(0,t._)("div",r,(0,l.zw)(Na.detailData.currency)+(0,l.zw)(Na.detailData.salary_min)+" - "+(0,l.zw)(Na.detailData.salary_max),1)]),(0,t._)("div",u,[_,b,(0,t._)("div",p,(0,l.zw)(Na.detailData.desc),1),(0,t._)("div",m,[1==Na.detailData.employment_type?((0,t.wg)(),(0,t.iD)("div",v,"FullTime")):(0,t.kq)("",!0),2==Na.detailData.employment_type?((0,t.wg)(),(0,t.iD)("div",g,"PartTime")):(0,t.kq)("",!0),3==Na.detailData.employment_type?((0,t.wg)(),(0,t.iD)("div",D,"Seasonal")):(0,t.kq)("",!0),1==Na.detailData.is_equal?((0,t.wg)(),(0,t.iD)("div",w,"Equal Opportunity")):(0,t.kq)("",!0),1==Na.detailData.is_online?((0,t.wg)(),(0,t.iD)("div",y,"Online")):(0,t.kq)("",!0)])]),(0,t._)("div",k,[h,j,(0,t._)("div",f,[(0,t._)("div",z,[q,(0,t._)("span",null,(0,l.zw)(Na.detailData.apply_due_date),1)]),(0,t._)("div",C,[J,(0,t._)("span",null,(0,l.zw)(Na.detailData.entry_date),1)]),(0,t._)("div",L,[S,(0,t._)("span",null,(0,l.zw)(Na.detailData.numbers),1)]),(0,t._)("div",x,[I,(0,t._)("span",null,(0,l.zw)(Na.detailData.class_size)+" Students",1)]),Na.detailData.subject?((0,t.wg)(),(0,t.iD)("div",A,[W,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Na.detailData.subject,((a,e)=>((0,t.wg)(),(0,t.iD)("span",{key:e},(0,l.zw)(a.object_en),1)))),128))])):(0,t.kq)("",!0),T,Na.detailData.age_to_teach?((0,t.wg)(),(0,t.iD)("div",H,[M,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Na.detailData.age_to_teach,((a,e)=>((0,t.wg)(),(0,t.iD)("span",{key:e},(0,l.zw)(a.object_en),1)))),128))])):(0,t.kq)("",!0)])]),(0,t._)("div",N,[U,O,(0,t._)("div",Y,[(0,t._)("div",E,[K,(0,t._)("span",null,(0,l.zw)(Na.detailData.currency)+(0,l.zw)(Na.detailData.salary_min)+" - "+(0,l.zw)(Na.detailData.salary_max),1)]),(0,t._)("div",Z,[B,(0,t._)("span",null,(0,l.zw)(Na.detailData.payment_period_en),1)]),(0,t._)("div",P,[$,(0,t._)("span",null,(0,l.zw)(Na.detailData.class_size),1)]),Na.detailData.benefits?((0,t.wg)(),(0,t.iD)("div",F,[G,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Na.detailData.benefits,((a,e)=>((0,t.wg)(),(0,t.iD)("span",{key:e},(0,l.zw)(a.object_en),1)))),128))])):(0,t.kq)("",!0)])]),(0,t._)("div",Q,[R,V,(0,t._)("div",X,[(0,t._)("div",aa,[ea,(0,t._)("span",null,(0,l.zw)(Na.detailData.teaching_times_en),1)]),(0,t._)("div",sa,[ta,(0,t._)("span",null,(0,l.zw)(Na.detailData.age_min)+" - "+(0,l.zw)(Na.detailData.age_max),1)]),(0,t._)("div",la,[ia,(0,t._)("span",null,(0,l.zw)(Na.detailData.education_en),1)])])]),(0,t._)("div",na,[oa,ca,(0,t._)("div",da,[(0,t._)("div",ra,[ua,(0,t._)("span",null,(0,l.zw)(Na.detailData.address),1)]),_a])]),(0,t._)("div",ba,[(0,t.Wm)(Oa,{class:"apply-btn",type:"primary",round:"",onClick:e[0]||(e[0]=a=>Ua.applyJobs(Na.detailData.id))},{default:(0,t.w5)((()=>[pa])),_:1})])])),_:1}),(0,t.Wm)(Ya,{xs:24,sm:24,md:8,lg:8,xl:8},{default:(0,t.w5)((()=>[(0,t._)("div",ma,[va,ga,(0,t._)("div",Da,[(0,t._)("div",wa,[Na.detailData.business?((0,t.wg)(),(0,t.j4)(Ea,{key:0,class:"company-logo",src:Na.detailData.business.logo},null,8,["src"])):(0,t.kq)("",!0)]),Na.detailData.business?((0,t.wg)(),(0,t.iD)("div",ya,(0,l.zw)(Na.detailData.business.business_bio),1)):(0,t.kq)("",!0)])]),Na.detailData.business?((0,t.wg)(),(0,t.iD)("div",ka,[ha,(0,t._)("div",ja,[(0,t._)("div",fa,[(0,t.Wm)(Ea,{class:"contact-profile-photo",src:Na.detailData.business.profile_photo},null,8,["src"])]),(0,t._)("div",za,[(0,t._)("div",qa," Hi I am "+(0,l.zw)(Na.detailData.business.first_name)+" from "+(0,l.zw)(Na.detailData.business.business_name)+". ",1),(0,t._)("div",Ca,[(0,t.Wm)(Oa,{type:"primary"},{default:(0,t.w5)((()=>[Ja])),_:1})])])])])):(0,t.kq)("",!0),(0,t._)("div",La,[(0,t._)("div",Sa,[xa,Na.detailData.business?((0,t.wg)(),(0,t.iD)("span",Ia,(0,l.zw)(Na.detailData.business.business_name),1)):(0,t.kq)("",!0)]),(0,t._)("div",Aa,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Na.otherJobsData,((a,e)=>((0,t.wg)(),(0,t.iD)("div",{class:"other-jobs-item",key:e},[(0,t._)("div",Wa,[Na.detailData.business?((0,t.wg)(),(0,t.j4)(Ea,{key:0,class:"other-jobs-logo",src:Na.detailData.business.logo},null,8,["src"])):(0,t.kq)("",!0)]),(0,t._)("div",Ta,[(0,t._)("div",Ha,[(0,t.Wm)(Ka,{to:{path:"/jobs/detail",query:{id:a.id}}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,l.zw)(a.job_title),1)])),_:2},1032,["to"])]),(0,t._)("div",Ma,(0,l.zw)(a.refresh_time),1)])])))),128))])]),(0,t.Wm)(Za)])),_:1})])),_:1})])}var Ua=s(6158),Oa=s.n(Ua),Ya=s(9651),Ea=s.n(Ya),Ka=s(43),Za=s(2776),Ba={name:"detail",data(){return{accessToken:"pk.eyJ1Ijoic3JrbGluZ2UiLCJhIjoiY2t2NnR4anI2OWU5NDJ3bWE1dHd3c3h1aSJ9.O0JfjqiyBBkFuf4G-DQ-DQ",mapStyle:"mapbox://styles/mapbox/streets-v11",detailData:{},otherJobsData:[]}},components:{latestIndustryNews:Za.Z},mounted(){let a=this.$route.query.id;this.getJobDetail(a)},methods:{initMap(a,e){Oa().accessToken=this.accessToken;const s=new(Oa().Map)({container:"mapContainer",center:[a,e],style:this.mapStyle,zoom:12}),t=new(Oa().NavigationControl);s.addControl(t,"top-right");const l=new(Oa().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0});s.addControl(l,"top-right");const i=new(Ea())({accessToken:this.accessToken,mapboxgl:Oa()});s.addControl(i,"top-left");const n=new(Oa().Marker);n.setLngLat([a,e]).addTo(s)},getJobDetail(a){let e={job_id:a};(0,Ka.MM)(e).then((a=>{if(console.log(a),200==a.code){this.detailData=a.message,this.initMap(a.message.lng,a.message.lat);let e=a.message.user_id;this.getCompanyJobList(e)}}))},getCompanyJobList(a){let e={user_id:a,is_open:1,status:1,page:1,limit:5};(0,Ka.kM)(e).then((a=>{console.log(a),200==a.code&&(this.otherJobsData=a.message.data)}))},applyJobs(a){let e=localStorage.getItem("identity"),s=localStorage.getItem("token");if(1==e){let e={job_id:a,token:s};(0,Ka.P)(e).then((a=>{200==a.code&&this.$message.success("Apply Success")}))}else this.$message.warning("Only Educator Can Apply")}}},Pa=s(8118);const $a=(0,Pa.Z)(Ba,[["render",Na],["__scopeId","data-v-a01aa34e"]]);var Fa=$a}}]);
//# sourceMappingURL=142.eac4f086.js.map