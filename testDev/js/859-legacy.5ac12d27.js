(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[859],{9382:function(e,a,n){"use strict";n.d(a,{Z:function(){return U}});var t=n(6252),i=n(3577),r={class:"profile-l-container"},o={class:"profile-photo-container"},l={class:"l-container"},u={class:"l-item"},s=(0,t.Uk)("Overview"),c={class:"l-item"},d=(0,t.Uk)("My Favorites"),m={class:"l-item"},f=(0,t.Uk)("My Account & Profile"),g=(0,t.Uk)("My Account & Profile"),p=(0,t.Uk)("My Account & Profile"),b={key:0,class:"l-item"},h=(0,t.Uk)("My Jobs"),y={key:1,class:"l-item"},v=(0,t.Uk)("My Deals"),k={key:2,class:"l-item"},w=(0,t.Uk)("Post a Job"),_={key:3,class:"l-item"},S=(0,t.Uk)("Offer a Deal"),C={class:"l-item"},F=(0,t.Uk)("Privacy Policy"),M={key:4,class:"l-item"},x=(0,t.Uk)("My Applications");function V(e,a,n,V,I,W){var P=(0,t.up)("el-image"),A=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",o,[(0,t.Wm)(P,{class:"profile-photo",src:""!=W.userAvatar?W.userAvatar:I.defaultAvatar},null,8,["src"]),(0,t._)("div",null,[(0,t._)("span",null,(0,i.zw)(W.username),1)])]),(0,t._)("div",l,[(0,t._)("div",u,[(0,t.Wm)(A,{to:"/overview",exact:""},{default:(0,t.w5)((function(){return[s]})),_:1})]),(0,t._)("div",c,[(0,t.Wm)(A,{to:"/favorites",exact:""},{default:(0,t.w5)((function(){return[d]})),_:1})]),(0,t._)("div",m,[1==W.identity?((0,t.wg)(),(0,t.j4)(A,{key:0,to:"/educator/profile",exact:""},{default:(0,t.w5)((function(){return[f]})),_:1})):(0,t.kq)("",!0),2==W.identity?((0,t.wg)(),(0,t.j4)(A,{key:1,to:"/business/profile",exact:""},{default:(0,t.w5)((function(){return[g]})),_:1})):(0,t.kq)("",!0),3==W.identity?((0,t.wg)(),(0,t.j4)(A,{key:2,to:"/vendor/profile",exact:""},{default:(0,t.w5)((function(){return[p]})),_:1})):(0,t.kq)("",!0)]),2==W.identity?((0,t.wg)(),(0,t.iD)("div",b,[(0,t.Wm)(A,{to:"/jobs/myJobs",exact:""},{default:(0,t.w5)((function(){return[h]})),_:1})])):(0,t.kq)("",!0),3==W.identity?((0,t.wg)(),(0,t.iD)("div",y,[(0,t.Wm)(A,{to:"/deals/myDeals",exact:""},{default:(0,t.w5)((function(){return[v]})),_:1})])):(0,t.kq)("",!0),2==W.identity?((0,t.wg)(),(0,t.iD)("div",k,[(0,t.Wm)(A,{to:{path:"/jobs/post",query:{version_time:I.versionTime}},exact:""},{default:(0,t.w5)((function(){return[w]})),_:1},8,["to"])])):(0,t.kq)("",!0),3==W.identity?((0,t.wg)(),(0,t.iD)("div",_,[(0,t.Wm)(A,{to:"/deals/offer",exact:""},{default:(0,t.w5)((function(){return[S]})),_:1})])):(0,t.kq)("",!0),(0,t._)("div",C,[(0,t.Wm)(A,{to:"/privacy/policy",exact:""},{default:(0,t.w5)((function(){return[F]})),_:1})]),2==W.identity?((0,t.wg)(),(0,t.iD)("div",M,[(0,t.Wm)(A,{to:"/",exact:""},{default:(0,t.w5)((function(){return[x]})),_:1})])):(0,t.kq)("",!0)])])}var I=n(2325),W=n(43),P=n(5323),A={name:"meSideMenu",data:function(){return{defaultAvatar:P,accountInfo:{},accountPhotoValue:"",versionTime:(0,I.O1)()}},computed:{username:{get:function(){return this.$store.state.username}},userAvatar:{get:function(){return this.$store.state.userAvatar}},identity:{get:function(){return this.$store.state.identity}}},mounted:function(){},methods:{getBasicInfo:function(){var e=this,a=localStorage.getItem("uid"),n=localStorage.getItem("identity"),t={id:a,token:localStorage.getItem("token")};(0,W.zP)(t).then((function(a){console.log(a),200==a.code&&(e.phone=a.message.phone,1==n&&a.message.educator_info&&(e.accountInfo=a.message.educator_info,e.accountPhotoValue=a.message.educator_info.profile_photo),2==n&&a.message.business_info&&(e.accountInfo=a.message.business_info,e.accountPhotoValue=a.message.business_info.logo),3==n&&a.message.vendor_info&&(e.accountInfo=a.message.vendor_info,e.accountPhotoValue=a.message.vendor_info.logo))}))}}},j=n(8118);const T=(0,j.Z)(A,[["render",V],["__scopeId","data-v-79687bfd"]]);var U=T},2859:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return C}});n(8309),n(4553);var t=n(6252),i=n(3577),r={class:"bg"},o={class:"basic-container"},l={class:"basic-breadcrumb-container"},u=(0,t.Uk)("Home"),s=(0,t.Uk)("Profile"),c=(0,t.Uk)("Basic"),d={class:"basic-form"},m={key:0,class:"category-parent"},f=["onClick"],g=["onClick"],p=(0,t.Uk)(" Submit "),b=(0,t.Uk)("Reset");function h(e,a,n,h,y,v){var k=(0,t.up)("meSideMenu"),w=(0,t.up)("el-col"),_=(0,t.up)("el-breadcrumb-item"),S=(0,t.up)("el-breadcrumb"),C=(0,t.up)("el-input"),F=(0,t.up)("el-form-item"),M=(0,t.up)("el-option"),x=(0,t.up)("el-select"),V=(0,t.up)("el-date-picker"),I=(0,t.up)("el-switch"),W=(0,t.up)("el-button"),P=(0,t.up)("el-form"),A=(0,t.up)("el-row");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",o,[(0,t.Wm)(A,{align:"top",justify:"center"},{default:(0,t.w5)((function(){return[(0,t.Wm)(w,{xs:24,sm:24,md:4,lg:4,xl:4},{default:(0,t.w5)((function(){return[(0,t.Wm)(k)]})),_:1}),(0,t.Wm)(w,{class:"basic-r-container",xs:24,sm:24,md:20,lg:20,xl:20},{default:(0,t.w5)((function(){return[(0,t._)("div",l,[(0,t.Wm)(S,{separator:"/"},{default:(0,t.w5)((function(){return[(0,t.Wm)(_,{to:{path:"/"}},{default:(0,t.w5)((function(){return[u]})),_:1}),(0,t.Wm)(_,{to:{path:"/educator/profile"}},{default:(0,t.w5)((function(){return[s]})),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((function(){return[c]})),_:1})]})),_:1})]),(0,t._)("div",d,[(0,t.Wm)(P,{ref:"basicForm",model:y.basicForm,rules:y.basicRules,"label-width":"120px","label-position":"top",class:"demo-ruleForm"},{default:(0,t.w5)((function(){return[(0,t.Wm)(F,{label:"First Name",prop:"first_name"},{default:(0,t.w5)((function(){return[(0,t.Wm)(C,{modelValue:y.basicForm.first_name,"onUpdate:modelValue":a[0]||(a[0]=function(e){return y.basicForm.first_name=e}),placeholder:"First Name"},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(F,{label:"Last Name",prop:"last_name"},{default:(0,t.w5)((function(){return[(0,t.Wm)(C,{modelValue:y.basicForm.last_name,"onUpdate:modelValue":a[1]||(a[1]=function(e){return y.basicForm.last_name=e}),placeholder:"Last Name"},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(F,{label:"Email",prop:"email"},{default:(0,t.w5)((function(){return[(0,t.Wm)(C,{modelValue:y.basicForm.email,"onUpdate:modelValue":a[2]||(a[2]=function(e){return y.basicForm.email=e}),placeholder:"Email"},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(F,{label:"Wechat ID",prop:"wx_id"},{default:(0,t.w5)((function(){return[(0,t.Wm)(C,{modelValue:y.basicForm.wx_id,"onUpdate:modelValue":a[3]||(a[3]=function(e){return y.basicForm.wx_id=e}),placeholder:"Wechat ID"},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(F,{label:"Gender"},{default:(0,t.w5)((function(){return[(0,t.Wm)(x,{modelValue:y.basicForm.sex,"onUpdate:modelValue":a[4]||(a[4]=function(e){return y.basicForm.sex=e}),placeholder:"Select your gender"},{default:(0,t.w5)((function(){return[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.sexOptions,(function(e,a){return(0,t.wg)(),(0,t.j4)(M,{key:a,label:e.object_en,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),(0,t.Wm)(F,{label:"Nationality"},{default:(0,t.w5)((function(){return[(0,t.Wm)(x,{modelValue:y.basicForm.nationality,"onUpdate:modelValue":a[5]||(a[5]=function(e){return y.basicForm.nationality=e}),filterable:"",placeholder:"Select your nationality"},{default:(0,t.w5)((function(){return[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.nationalityOptions,(function(e,a){return(0,t.wg)(),(0,t.j4)(M,{key:a,label:e.name,value:e.name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),(0,t.Wm)(F,{label:"Birthdate",prop:"birthday"},{default:(0,t.w5)((function(){return[(0,t.Wm)(V,{modelValue:y.basicForm.birthday,"onUpdate:modelValue":a[6]||(a[6]=function(e){return y.basicForm.birthday=e}),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(F,{label:"Location"},{default:(0,t.w5)((function(){return[(0,t.Wm)(x,{modelValue:y.basicForm.province,"onUpdate:modelValue":a[7]||(a[7]=function(e){return y.basicForm.province=e}),onChange:v.provinceChange,placeholder:"Select Province"},{default:(0,t.w5)((function(){return[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.provinceOptions,(function(e,a){return(0,t.wg)(),(0,t.j4)(M,{key:a,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"]),(0,t.Wm)(x,{modelValue:y.basicForm.city,"onUpdate:modelValue":a[8]||(a[8]=function(e){return y.basicForm.city=e}),onChange:v.cityChange,placeholder:"Select City"},{default:(0,t.w5)((function(){return[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.cityOptions,(function(e,a){return(0,t.wg)(),(0,t.j4)(M,{key:a,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"]),(0,t.Wm)(x,{modelValue:y.basicForm.district,"onUpdate:modelValue":a[9]||(a[9]=function(e){return y.basicForm.district=e}),onChange:v.districtChange,placeholder:"Select District"},{default:(0,t.w5)((function(){return[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.districtOptions,(function(e,a){return(0,t.wg)(),(0,t.j4)(M,{key:a,label:e.Pinyin,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])]})),_:1}),(0,t.Wm)(F,{label:"Job Seeking"},{default:(0,t.w5)((function(){return[(0,t.Wm)(I,{modelValue:y.basicForm.is_seeking,"onUpdate:modelValue":a[10]||(a[10]=function(e){return y.basicForm.is_seeking=e})},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(F,{label:"Public Profile"},{default:(0,t.w5)((function(){return[(0,t.Wm)(I,{modelValue:y.basicForm.is_public,"onUpdate:modelValue":a[11]||(a[11]=function(e){return y.basicForm.is_public=e})},null,8,["modelValue"])]})),_:1}),(0,t.Wm)(F,{label:"Education Type(Up to 3)"},{default:(0,t.w5)((function(){return[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.subCateOptions,(function(e,a){return(0,t.wg)(),(0,t.iD)("div",{class:"categories-tags",key:a},[e["children"].length>0?((0,t.wg)(),(0,t.iD)("div",m)):(0,t.kq)("",!0),0===e["children"].length?((0,t.wg)(),(0,t.iD)("div",{key:1,class:(0,i.C_)(["categories-tags-item",-1==y.selectEducatorTypeList.findIndex((function(a){return a.id===e.id}))?"":"tag-active"]),onClick:function(a){return v.selectEducatorType(e)}},(0,i.zw)(e.identity_name),11,f)):(0,t.kq)("",!0),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e["children"],(function(e,a){return(0,t.wg)(),(0,t.iD)("div",{class:(0,i.C_)(["categories-tags-item",-1==y.selectEducatorTypeList.findIndex((function(a){return a.id===e.id}))?"":"tag-active"]),key:a,onClick:function(a){return v.selectEducatorType(e)}},(0,i.zw)(e.identity_name),11,g)})),128))])})),128))]})),_:1}),(0,t.Wm)(F,null,{default:(0,t.w5)((function(){return[(0,t.Wm)(W,{type:"primary",onClick:a[12]||(a[12]=function(e){return v.submitForm("basicForm")})},{default:(0,t.w5)((function(){return[p]})),_:1}),(0,t.Wm)(W,{onClick:a[13]||(a[13]=function(e){return v.resetForm("basicForm")})},{default:(0,t.w5)((function(){return[b]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])])]})),_:1})]})),_:1})])])}n(1539),n(4747),n(9600),n(561);var y=n(9382),v=n(43),k=n(5589),w={name:"basic",components:{meSideMenu:y.Z},data:function(){return{basicForm:{first_name:"",last_name:"",email:"",sex:"",nationality:"",birthday:"",location:"",country:"",province:"",city:"",district:"",address:"",is_seeking:0,is_public:0,wx_id:"",sub_identity:"",token:localStorage.getItem("token")},basicRules:{first_name:[{required:!0,message:"Please input first name",trigger:"blur"}],last_name:[{required:!0,message:"Please input last name",trigger:"blur"}],wx_id:[{required:!0,message:"Please input wechat id",trigger:"blur"}],email:[{type:"email",required:!0,message:"Please input email",trigger:"blur"}],birthday:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}]},sexOptions:[{value:1,object_en:"Male",object_cn:"男"},{value:2,object_en:"Female",object_cn:"女"},{value:3,object_en:"No Gender Requirements",object_cn:"无性别要求"}],nationalityOptions:k.i,provinceOptions:[],cityOptions:[],districtOptions:[],subCateOptions:[],selectEducatorTypeList:[]}},mounted:function(){this.getAllAreas(0),this.getSubCateList()},methods:{submitForm:function(e){var a=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var n=a.selectEducatorTypeList,t=[];n.forEach((function(e){t.push(e.id)}));var i=a.basicForm.birthday,r=i.getFullYear(),o=i.getMonth()+1,l=i.getDate();a.basicForm.birthday=[r,o,l].join("-"),a.basicForm.sub_identity=t.join(","),a.basicForm.is_public?a.basicForm.is_public=1:a.basicForm.is_public=0,a.basicForm.is_seeking?a.basicForm.is_seeking=1:a.basicForm.is_seeking=0;var u=Object.assign({},a.basicForm);(0,v.GU)(u).then((function(e){console.log(e),200==e.code&&a.$router.push("/educator/profile")}))}))},resetForm:function(e){this.$refs[e].resetFields()},handleChange:function(e){console.log(e)},getAllAreas:function(e){var a=this,n={pid:e};(0,v.Yu)(n).then((function(e){console.log(e),200==e.code&&(a.provinceOptions=e.message)}))},getAllCitys:function(e){var a=this,n={pid:e};(0,v.Yu)(n).then((function(e){console.log(e),200==e.code&&(a.cityOptions=e.message)}))},getAllDistricts:function(e){var a=this,n={pid:e};(0,v.Yu)(n).then((function(e){console.log(e),200==e.code&&(a.districtOptions=e.message)}))},provinceChange:function(e){console.log(e),this.getAllCitys(e)},cityChange:function(e){console.log(e),this.getAllDistricts(e)},districtChange:function(e){console.log(e)},getSubCateList:function(){var e=this,a={pid:1,tree:1};(0,v._k)(a).then((function(a){console.log(a),200==a.code&&(e.subCateOptions=a.message)}))},selectEducatorType:function(e){if(-1==this.selectEducatorTypeList.findIndex((function(a){return a.id===e.id}))){if(this.selectEducatorTypeList.length>2){var a=this.selectEducatorTypeList.length-1;this.selectEducatorTypeList.splice(a,1)}this.selectEducatorTypeList.push(e)}else this.selectEducatorTypeList.splice(this.selectEducatorTypeList.findIndex((function(a){return a.id===e.id})),1)}}},_=n(8118);const S=(0,_.Z)(w,[["render",h],["__scopeId","data-v-3c2ac2cc"]]);var C=S},8533:function(e,a,n){"use strict";var t=n(2092).forEach,i=n(9341),r=i("forEach");e.exports=r?[].forEach:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)}},2092:function(e,a,n){var t=n(9974),i=n(1702),r=n(8361),o=n(7908),l=n(6244),u=n(5417),s=i([].push),c=function(e){var a=1==e,n=2==e,i=3==e,c=4==e,d=6==e,m=7==e,f=5==e||d;return function(g,p,b,h){for(var y,v,k=o(g),w=r(k),_=t(p,b),S=l(w),C=0,F=h||u,M=a?F(g,S):n||m?F(g,0):void 0;S>C;C++)if((f||C in w)&&(y=w[C],v=_(y,C,k),e))if(a)M[C]=v;else if(v)switch(e){case 3:return!0;case 5:return y;case 6:return C;case 2:s(M,y)}else switch(e){case 4:return!1;case 7:s(M,y)}return d?-1:i||c?c:M}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},1194:function(e,a,n){var t=n(7293),i=n(5112),r=n(7392),o=i("species");e.exports=function(e){return r>=51||!t((function(){var a=[],n=a.constructor={};return n[o]=function(){return{foo:1}},1!==a[e](Boolean).foo}))}},9341:function(e,a,n){"use strict";var t=n(7293);e.exports=function(e,a){var n=[][e];return!!n&&t((function(){n.call(null,a||function(){throw 1},1)}))}},7475:function(e,a,n){var t=n(7854),i=n(3157),r=n(4411),o=n(111),l=n(5112),u=l("species"),s=t.Array;e.exports=function(e){var a;return i(e)&&(a=e.constructor,r(a)&&(a===s||i(a.prototype))?a=void 0:o(a)&&(a=a[u],null===a&&(a=void 0))),void 0===a?s:a}},5417:function(e,a,n){var t=n(7475);e.exports=function(e,a){return new(t(e))(0===a?0:a)}},6135:function(e,a,n){"use strict";var t=n(4948),i=n(3070),r=n(9114);e.exports=function(e,a,n){var o=t(a);o in e?i.f(e,o,r(0,n)):e[o]=n}},3157:function(e,a,n){var t=n(4326);e.exports=Array.isArray||function(e){return"Array"==t(e)}},4553:function(e,a,n){"use strict";var t=n(2109),i=n(2092).findIndex,r=n(1223),o="findIndex",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),t({target:"Array",proto:!0,forced:l},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(o)},9600:function(e,a,n){"use strict";var t=n(2109),i=n(1702),r=n(8361),o=n(5656),l=n(9341),u=i([].join),s=r!=Object,c=l("join",",");t({target:"Array",proto:!0,forced:s||!c},{join:function(e){return u(o(this),void 0===e?",":e)}})},561:function(e,a,n){"use strict";var t=n(2109),i=n(7854),r=n(1400),o=n(9303),l=n(6244),u=n(7908),s=n(5417),c=n(6135),d=n(1194),m=d("splice"),f=i.TypeError,g=Math.max,p=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";t({target:"Array",proto:!0,forced:!m},{splice:function(e,a){var n,t,i,d,m,y,v=u(this),k=l(v),w=r(e,k),_=arguments.length;if(0===_?n=t=0:1===_?(n=0,t=k-w):(n=_-2,t=p(g(o(a),0),k-w)),k+n-t>b)throw f(h);for(i=s(v,t),d=0;d<t;d++)m=w+d,m in v&&c(i,d,v[m]);if(i.length=t,n<t){for(d=w;d<k-t;d++)m=d+t,y=d+n,m in v?v[y]=v[m]:delete v[y];for(d=k;d>k-t+n;d--)delete v[d-1]}else if(n>t)for(d=k-t;d>w;d--)m=d+t-1,y=d+n-1,m in v?v[y]=v[m]:delete v[y];for(d=0;d<n;d++)v[d+w]=arguments[d+2];return v.length=k-t+n,i}})},8309:function(e,a,n){var t=n(9781),i=n(6530).EXISTS,r=n(1702),o=n(3070).f,l=Function.prototype,u=r(l.toString),s=/^\s*function ([^ (]*)/,c=r(s.exec),d="name";t&&!i&&o(l,d,{configurable:!0,get:function(){try{return c(s,u(this))[1]}catch(e){return""}}})},4747:function(e,a,n){var t=n(7854),i=n(8324),r=n(8509),o=n(8533),l=n(8880),u=function(e){if(e&&e.forEach!==o)try{l(e,"forEach",o)}catch(a){e.forEach=o}};for(var s in i)i[s]&&u(t[s]&&t[s].prototype);u(r)},5589:function(e,a,n){"use strict";n.d(a,{i:function(){return l}});for(var t=["阿富汗","阿尔巴尼亚","阿尔及利亚","美属萨摩亚群岛","安道尔","安哥拉共和国","安圭拉","安提瓜岛","阿根廷","亚美尼亚","阿鲁巴","澳大利亚","奥地利共和国","阿塞拜疆共和国","巴哈马国","巴林王国","孟加拉人民共和国","巴巴多斯","白俄罗斯共和国","比利时王国 (België)","伯利兹","贝宁共和国 (Bénin)","百慕大群岛","不丹王国","玻利维亚国","波斯尼亚和黑塞哥维那","博茨瓦纳","巴西联邦共和国","英属印度洋领地","英属维尔京群岛","文莱达鲁萨兰国","保加利亚共和国","布基纳法索","布隆迪共和国","柬埔寨王国","喀麦隆共和国","加拿大","佛得角共和国","荷兰王国","开曼群岛","中非共和国","乍得共和国","智利共和国","中国","圣诞岛","科科斯群岛","哥伦比亚共和国","科摩罗联盟","刚果民主共和国","刚果共和国","库克群岛","哥斯达黎加共和国","科特迪瓦","克罗地亚共和国","古巴共和国","库拉索","塞浦路斯","捷克共和国","丹麦","吉布提共和国","多米尼克国","多米尼加共和国","厄瓜多尔","埃及","萨尔瓦","赤道几内亚","厄立特里亚","爱沙尼亚共和国","埃塞俄比亚","马尔维纳斯群岛","法罗群岛","斐济共和国","芬兰","法国","法属圭亚那","法属波利尼西亚","加蓬","冈比亚","格鲁吉亚","德国","加纳","直布罗陀","希腊","格陵兰","格林纳达","瓜德罗普岛","关岛","危地马拉","根西","几内亚","几内亚比绍共和国","圭亚那","海地","洪都拉斯","中国香港","匈牙利","冰岛","印度","印度尼西亚","地拉那","伊拉克共和国","爱尔兰","马恩岛","以色列国","意大利","牙买加","日本","泽西","约旦哈希姆王国","哈萨克斯坦共和国","肯尼亚","基里巴斯","科索沃","科威特国","吉尔吉斯共和国","老挝人民民主共和国","拉脱维亚共和国","黎巴嫩共和国","莱索托","利比里亚","利比亚","列支敦士登","立陶宛共和国","卢森堡","中國澳門","马其顿","马达加斯加共和国","马拉维","马来西亚","马尔代夫","马里","马耳他","马绍尔群岛共和国","马提尼克岛","毛里塔尼亚","毛里求斯","马约特","墨西哥","密克罗尼西亚","摩尔多瓦共和国","摩纳哥","蒙古","黑山共和国","蒙特塞拉特岛","摩洛哥","莫桑比克","缅甸联邦共和国","纳米比亚","瑙鲁","尼泊尔","荷兰","新喀里多尼亚","新西兰","尼加拉瓜","尼日尔","尼日利亚","纽埃","诺福克岛","North Korea (조선 민주주의 인민 공화국)","北马里亚纳群岛","挪威","阿曼苏丹国","巴基斯坦","帕劳共和国","巴勒斯坦国","巴拿马","巴布亚新几内亚独立国","巴拉圭","秘鲁","菲律宾共和国","波兰","葡萄牙","波多黎各岛","卡塔尔国","留尼旺岛","罗马尼亚","俄罗斯","卢旺达","圣巴托洛缪岛","圣海伦娜岛","圣基茨和尼维斯联邦","圣卢西亚","圣马丁岛","圣皮埃尔岛和密克隆岛","圣文森特和格林纳丁斯","西萨摩亚","圣马利诺","São Tomé and Príncipe (São Tomé e Príncipe)","沙特阿拉伯王国","塞内加尔","塞尔维亚共和国","塞舌尔","塞拉利昂共和国","新加坡","圣马丁岛","斯洛伐克共和国","斯洛文尼亚","所罗门群岛","索马里","南非","韩国","南苏丹共和国","西班牙","斯里兰卡","苏丹","苏里南","斯瓦尔巴群岛","斯威士兰","瑞典","瑞士","阿拉伯叙利亚共和国","中国台灣","塔吉克斯坦共和国","坦桑尼亚","泰国","东帝汶民主共和国","多哥","托克劳群岛","汤加","特立尼达和多巴哥共和国","突尼斯","土耳其","土库曼斯坦","特克斯和凯科斯群岛","图瓦卢","美属维尔京群岛","乌干达共和国","乌克兰","阿拉伯联合酋长国","大不列颠联合王国","美国","乌拉圭","乌兹别克斯坦共和国","瓦努阿图","梵蒂冈","委内瑞拉","越南","瓦利斯群岛和富图纳群岛","阿拉伯撒哈拉民主共和国","也门共和国","赞比亚","津巴布韦","奥兰群岛"],i=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (中国香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1",4,["876","658"]],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (中國澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (中国台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]],r=0;r<i.length;r++){var o=i[r];i[r]={name:o[0],nameCN:t[r],iso2:o[1],dialCode:o[2],priority:o[3]||0,areaCodes:o[4]||null}}var l=i}}]);
//# sourceMappingURL=859-legacy.5ac12d27.js.map