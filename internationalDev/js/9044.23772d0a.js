"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[9044],{78283:function(e,n,t){t.d(n,{Dk:function(){return u},ie:function(){return a},p6:function(){return l}});var i=t(44276);function l(e){e=e||Date.now();let n=new Date(e),t=n.getMonth()<9?"0"+(n.getMonth()+1):n.getMonth()+1;return t+="-",t+=n.getDate()<10?"0"+n.getDate():n.getDate(),t+=" ",t+=n.getHours(),t+=":",t+=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes(),t}function a(e){return encodeURIComponent((0,i.cv)(e))}function u(e){return(0,i.Jx)(decodeURIComponent(e))}},12525:function(e,n,t){t.d(n,{Z:function(){return g}});var i=t(66252),l=t(56612);const a={class:"resend-code"};function u(e,n,t,u,o,s){const r=(0,i.up)("el-button");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(r,{class:"resend-code-btn",type:"primary",link:"",loading:u.checkCodeBtn.loading,disabled:u.checkCodeBtn.disabled,onClick:n[0]||(n[0]=e=>u.sendCode())},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(u.checkCodeBtn.text),1)])),_:1},8,["loading","disabled"])])}var o=t(62931),s=t(41836),r=t(76552),d={name:"checkCodeButton",props:{email:{type:String,default:""},text:{type:String,default:"Resend Code"},type:{type:String,default:""},successText:{type:String,default:""}},setup(e,n){const t=(0,o.qj)({text:e.text,loading:!1,disabled:!1,duration:60,timer:null}),l=()=>{60!==t.duration&&(t.disabled=!0,t.loading=!0),t.timer&&clearInterval(t.timer),t.timer=setInterval((()=>{const n=t.duration--;t.text=`00:${n} S`,t.loading=!0,t.disabled=!0,n<=0&&(clearInterval(t.timer),t.duration=60,t.text=e.text,t.disabled=!1,t.loading=!1),console.log(t)}),1e3)};function a(){if(!e.email)return(0,r.z8)({type:"warning",message:"Enter a valid email address",grouping:!0}),!1;l();let t={email:e.email};"email-forgot"===e.type&&(0,s.WK)(t).then((t=>{console.log(t),200==t.code&&(n.emit("complete"),(0,r.z8)({type:"success",message:e.successText,grouping:!0}))})).catch((e=>{e.msg?(0,r.z8)({type:"error",message:e.msg,grouping:!0}):e.message&&(0,r.z8)({type:"error",message:e.message,grouping:!0})})),"email-register"===e.type&&(0,s.h1)(t).then((t=>{console.log(t),200==t.code&&(n.emit("complete"),(0,r.z8)({type:"success",message:e.successText,grouping:!0}))})).catch((e=>{e.msg?(0,r.z8)({type:"error",message:e.msg,grouping:!0}):e.message&&(0,r.z8)({type:"error",message:e.message,grouping:!0})}))}return(0,i.bv)((()=>{l()})),{checkCodeBtn:t,getCheckCodeTimer:l,sendCode:a}}},c=t(48118);const p=(0,c.Z)(d,[["render",u],["__scopeId","data-v-7f31ce66"]]);var g=p},69029:function(e,n,t){t.d(n,{Z:function(){return b}});var i=t(66252),l=t(58061);const a=e=>((0,i.dD)("data-v-483e7c00"),e=e(),(0,i.Cn)(),e),u=a((()=>(0,i._)("input",{class:"input-box-space",disabled:"","data-index":"-1"},null,-1))),o=a((()=>(0,i._)("input",{class:"input-box-space",disabled:"","data-index":"-1"},null,-1))),s=a((()=>(0,i._)("input",{class:"input-box-space",disabled:"","data-index":"-1"},null,-1))),r=a((()=>(0,i._)("input",{class:"input-box-space",disabled:"","data-index":"-1"},null,-1))),d=a((()=>(0,i._)("input",{class:"input-box-space",disabled:"","data-index":"-1"},null,-1)));function c(e,n,t,a,c,p){return(0,i.wg)(),(0,i.iD)("div",{class:"input-box",onPaste:n[6]||(n[6]=(...e)=>a.paste&&a.paste(...e)),onKeydown:n[7]||(n[7]=(...e)=>a.keydown&&a.keydown(...e)),onKeyup:n[8]||(n[8]=(...e)=>a.keyup&&a.keyup(...e)),onInput:n[9]||(n[9]=(...e)=>a.inputEvent&&a.inputEvent(...e))},[(0,i.wy)((0,i._)("input",{maxlength:"1",min:"0",max:"9","data-index":"0",oninput:"value=value.replace(/[^\\d]/g,'')","onUpdate:modelValue":n[0]||(n[0]=e=>a.input[0]=e),ref:"firstInput"},null,512),[[l.nr,a.input[0],void 0,{trim:!0,number:!0}]]),u,(0,i.wy)((0,i._)("input",{maxlength:"1",min:"0",max:"9","data-index":"1",oninput:"value=value.replace(/[^\\d]/g,'')","onUpdate:modelValue":n[1]||(n[1]=e=>a.input[1]=e)},null,512),[[l.nr,a.input[1],void 0,{trim:!0,number:!0}]]),o,(0,i.wy)((0,i._)("input",{maxlength:"1",min:"0",max:"9","data-index":"2",oninput:"value=value.replace(/[^\\d]/g,'')","onUpdate:modelValue":n[2]||(n[2]=e=>a.input[2]=e)},null,512),[[l.nr,a.input[2],void 0,{trim:!0,number:!0}]]),s,(0,i.wy)((0,i._)("input",{maxlength:"1",min:"0",max:"9","data-index":"3",oninput:"value=value.replace(/[^\\d]/g,'')","onUpdate:modelValue":n[3]||(n[3]=e=>a.input[3]=e)},null,512),[[l.nr,a.input[3],void 0,{trim:!0,number:!0}]]),r,(0,i.wy)((0,i._)("input",{maxlength:"1",min:"0",max:"9","data-index":"4",oninput:"value=value.replace(/[^\\d]/g,'')","onUpdate:modelValue":n[4]||(n[4]=e=>a.input[4]=e)},null,512),[[l.nr,a.input[4],void 0,{trim:!0,number:!0}]]),d,(0,i.wy)((0,i._)("input",{maxlength:"1",min:"0",max:"9","data-index":"5",oninput:"value=value.replace(/[^\\d]/g,'')","onUpdate:modelValue":n[5]||(n[5]=e=>a.input[5]=e)},null,512),[[l.nr,a.input[5],void 0,{trim:!0,number:!0}]])],32)}var p=t(62931),g={name:"sixInputVerificationCode",setup(e,n){const t=(0,p.iH)(["","","","","",""]),l=(0,p.iH)([]);function a(e){let n=1*e.target.dataset.index,i=e.target;t.value[n]=i.value.slice(0,1)}function u(e){let i=1*e.target.dataset.index,l=e.target;"Backspace"===e.key?(t.value[i].length>0?t.value[i]="":l.previousElementSibling&&("-1"===l.previousElementSibling.dataset.index?l.previousElementSibling.previousElementSibling.focus():l.previousElementSibling.focus(),t.value[i-1]=""),n.emit("disabled",!0)):"Delete"===e.key?(t.value[i].length>0?t.value[i]="":l.nextElementSibling&&(t.value[i=1]=""),l.nextElementSibling&&("-1"===l.nextElementSibling.dataset.index?l.nextElementSibling.nextElementSibling.focus():l.nextElementSibling.focus()),n.emit("disabled",!0)):"Home"===e.key?l.parentElement.children[0]&&l.parentElement.children[0].focus():"End"===e.key?l.parentElement.children[t.value.length+4]&&l.parentElement.children[t.value.length+4].focus():"ArrowLeft"===e.key?l.previousElementSibling&&("-1"===l.previousElementSibling.dataset.index?l.previousElementSibling.previousElementSibling.focus():l.previousElementSibling.focus()):"ArrowRight"===e.key?l.nextElementSibling&&("-1"===l.nextElementSibling.dataset.index?l.nextElementSibling.nextElementSibling.focus():l.nextElementSibling.focus()):"ArrowUp"===e.key?1*t.value[i]<9&&(t.value[i]=(1*t.value[i]+1).toString()):"ArrowDown"===e.key&&1*t.value[i]>0&&(t.value[i]=(1*t.value[i]-1).toString())}function o(e){let i=1*e.target.dataset.index,l=e.target;"Enter"===e.key?t.value[i]="":/Digit|Numpad/i.test(e.code)?(t.value[i]=e.code.replace(/Digit|Numpad/i,""),l.nextElementSibling&&("-1"===l.nextElementSibling.dataset.index?l.nextElementSibling.nextElementSibling.focus():l.nextElementSibling&&l.nextElementSibling.focus()),5===i&&6===t.value.join("").length&&(document.activeElement.blur(),n.emit("complete",t.value),n.emit("disabled",!1))):""===t.value[i]&&(t.value[i]="")}function s(e){let i=e.target.dataset.index;e.wheelDelta>0?1*t.value[i]<9&&(t.value[i]=(1*t.value[i]+1).toString()):e.wheelDelta<0?1*t.value[i]>0&&(t.value[i]=(1*t.value[i]-1).toString()):"Enter"===e.key&&6===t.value.join("").length&&(document.activeElement.blur(),n.emit("complete",t.value),n.emit("disabled",!1))}function r(e){e.clipboardData.items[0].getAsString((e=>{6===e.toString().length&&(t.value=e.split(""),document.activeElement.blur(),n.emit("complete",t.value),n.emit("disabled",!1))}))}const d=(0,p.iH)(null);return(0,i.bv)((()=>{d.value.focus()})),{input:t,firstInput:d,pasteResult:l,inputEvent:a,keydown:u,keyup:o,mousewheel:s,paste:r}}},m=t(48118);const v=(0,m.Z)(g,[["render",c],["__scopeId","data-v-483e7c00"]]);var b=v},38740:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var i=t(62146),l=t(12525),a=t(69029),u=t(66252);const o=e=>((0,u.dD)("data-v-2fa488b6"),e=e(),(0,u.Cn)(),e),s={class:"signup-bg"},r={class:"signup-m"},d={class:"signup-back-btn-container"},c=(0,u.Uk)(" Back "),p=o((()=>(0,u._)("div",{class:"signup-m-label"},"Verification Code",-1))),g=o((()=>(0,u._)("div",{class:"signup-m-tips"}," A verification code has been sent to your email address. ",-1))),m={class:"signup-m-form"},v={class:"continue-btn-container"},b=(0,u.Uk)(" Next "),f=o((()=>(0,u._)("div",{class:"signup-b"},[(0,u._)("div",{class:"signup-copyright"}," © EDU Passport 2023 ")],-1))),x={class:"signup-r-container"},y=o((()=>(0,u._)("div",{class:"signup-r-label"}," Signup Progress ",-1)));function S(e,n,t,o,S,h){const k=(0,u.up)("el-image"),w=(0,u.up)("Back"),E=(0,u.up)("el-icon"),_=(0,u.up)("el-button"),C=a.Z,D=(0,u.up)("el-form-item"),I=l.Z,W=(0,u.up)("el-form"),z=(0,u.up)("el-col"),U=i.Z,B=(0,u.up)("el-row");return(0,u.wg)(),(0,u.iD)("div",s,[(0,u.Wm)(B,{justify:"center",align:"top",class:"signup-container"},{default:(0,u.w5)((()=>[(0,u.Wm)(z,{class:"signup-l-col",xs:24,sm:24,md:12,lg:12,xl:12},{default:(0,u.w5)((()=>[(0,u._)("div",{class:"signup-t",onClick:n[0]||(n[0]=e=>o.turnHome())},[(0,u.Wm)(k,{class:"signup-t-logo",src:S.imgLogo},null,8,["src"])]),(0,u._)("div",r,[(0,u._)("div",d,[(0,u.Wm)(_,{size:"small",plain:"",onClick:n[1]||(n[1]=e=>o.turnBack())},{default:(0,u.w5)((()=>[(0,u.Wm)(E,{style:{"margin-right":"10px"}},{default:(0,u.w5)((()=>[(0,u.Wm)(w)])),_:1}),c])),_:1})]),p,g,(0,u._)("div",m,[(0,u.Wm)(W,{model:o.signForm,rules:o.signRules,ref:"signForms","label-width":"100px","label-position":"top",class:"demo-ruleForm"},{default:(0,u.w5)((()=>[(0,u.Wm)(D,{label:"6-Digit-Code",prop:"code"},{default:(0,u.w5)((()=>[(0,u.Wm)(C,{onDisabled:o.disabledNext,onComplete:o.sixCodeComplete},null,8,["onDisabled","onComplete"])])),_:1}),(0,u.Wm)(I,{type:"email-register",email:o.formInfoDecode.email,text:"Resend Code","success-text":"Resend Code Successfully"},null,8,["email"]),(0,u._)("div",v,[(0,u.Wm)(_,{class:"continue-btn",size:"large",type:"primary",loading:o.nextLoadingStatus,disabled:o.nextDisabledStatus,onClick:n[2]||(n[2]=e=>o.continueNextStep())},{default:(0,u.w5)((()=>[b])),_:1},8,["loading","disabled"])])])),_:1},8,["model","rules"])])]),f])),_:1}),(0,u.Wm)(z,{class:"signup-r-col",xs:0,sm:0,md:12,lg:12,xl:12},{default:(0,u.w5)((()=>[(0,u._)("div",x,[y,(0,u.Wm)(U,{userType:o.userType,"step-index":o.userStepIndex},null,8,["userType","step-index"])])])),_:1})])),_:1})])}var h=t(9575),k=t(28339),w=t(62931),E=t(78283),_=t(41836),C=t(76552),D={name:"accountVerification",components:{stepComponent:i.Z,sixInputVerificationCode:a.Z,checkCodeButton:l.Z},data(){return{imgLogo:h}},setup(){const e=(0,k.tv)(),n=(0,k.yj)(),t=n.query.type,i=(0,w.iH)(3),l=(0,w.iH)(!1),a=(0,w.iH)(!0);function o(){return e.push("/")}function s(){return e.push("/login")}const r=n.query.formInfo,d=JSON.parse((0,E.Dk)(r)),c=(0,w.iH)(null),p=(0,w.qj)({code:""}),g=(0,w.qj)({code:[{required:!0,message:"Please fill out your code.",trigger:"blur"}]});function m(e){console.log(e),p.code=e.join("")}function v(e){console.log(e),a.value=e}function b(){e.go(-1)}function f(){if(console.log(d),console.log(p),!p.code||""===p.code)return(0,C.z8)({type:"warning",message:"Enter your verification code",grouping:!0});l.value=!0;let i={email:d.email,code:p.code};(0,_.A5)(i).then((i=>{if(200==i.code){let i=(0,E.Dk)(n.query.formInfo),a=JSON.parse(i),u=Object.assign(a,p),o=(0,E.ie)(JSON.stringify(u));e.push({path:"/signup/passwordSetup",query:{type:t,formInfo:o}}),l.value=!1}})).catch((e=>{console.log(e),l.value=!1,e.msg?(0,C.z8)({type:"warning",message:e.msg,grouping:!0}):e.message&&(0,C.z8)({type:"warning",message:e.message,grouping:!0})}))}return(0,u.bv)((()=>{"school"!==t&&"recruiter"!==t&&"other"!==t||(i.value=4)})),{userStepIndex:i,nextDisabledStatus:a,formInfoDecode:d,signForms:c,signForm:p,signRules:g,userType:t,nextLoadingStatus:l,turnBack:b,continueNextStep:f,turnHome:o,backToLogin:s,sixCodeComplete:m,disabledNext:v}}},I=t(48118);const W=(0,I.Z)(D,[["render",S],["__scopeId","data-v-2fa488b6"]]);var z=W}}]);
//# sourceMappingURL=9044.23772d0a.js.map