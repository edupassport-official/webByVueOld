"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[7789],{7789:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var s=a(6995),n=a(6252),i=a(6612);const l=e=>((0,n.dD)("data-v-fa8bbdf6"),e=e(),(0,n.Cn)(),e),o={class:"bg"},r={class:"favorites-container"},c={class:"purchase-btn-contianer"},d=(0,n.Uk)("Purchase"),g={class:"list-container"},m=l((()=>(0,n._)("div",{class:"list-label"},[(0,n._)("h3",null,"Purchased Advertisement Slots"),(0,n._)("div",{class:"list-label-underline"})],-1))),u={key:0,class:"list-item-l"},p={class:"list-item-r"},h={key:0},f={key:1,class:"list-item-desc"},y={class:"list-item-redeem-container"},w=(0,n.Uk)("Redeem"),_=(0,n.Uk)("Pay"),k={class:"list-item-type"},b={key:0},v={key:1,class:"empty-tips"},C={key:0,class:"list-pagination"};function D(e,t,a,l,D,A){const z=s.Z,x=(0,n.up)("el-col"),S=(0,n.up)("el-button"),q=(0,n.up)("el-image"),W=(0,n.up)("el-pagination"),M=(0,n.up)("el-row");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",r,[(0,n.Wm)(M,{align:"top",justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{xs:24,sm:24,md:4,lg:4,xl:4},{default:(0,n.w5)((()=>[(0,n.Wm)(z)])),_:1}),(0,n.Wm)(x,{class:"list-col",xs:24,sm:24,md:20,lg:20,xl:20},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.Wm)(S,{type:"primary",round:"",onClick:t[0]||(t[0]=e=>A.turnPurchase())},{default:(0,n.w5)((()=>[d])),_:1})]),(0,n._)("div",g,[m,D.myAdsData.length>0?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(D.myAdsData,((e,a)=>((0,n.wg)(),(0,n.iD)("div",{class:"list-item",key:a},[e.parent_info?((0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(q,{class:"list-item-l-img",src:e.parent_info.image_url},null,8,["src"])])):(0,n.kq)("",!0),(0,n._)("div",p,[e.parent_info?((0,n.wg)(),(0,n.iD)("h3",h,(0,i.zw)(e.parent_info.title_en),1)):(0,n.kq)("",!0),e.parent_info?((0,n.wg)(),(0,n.iD)("div",f,(0,i.zw)(e.parent_info.desc_en),1)):(0,n.kq)("",!0),(0,n._)("div",y,[1==e.is_pay?((0,n.wg)(),(0,n.j4)(S,{key:0,class:"list-item-redeem-btn",type:"primary",round:"",onClick:t=>A.redeem(e)},{default:(0,n.w5)((()=>[w])),_:2},1032,["onClick"])):((0,n.wg)(),(0,n.j4)(S,{key:1,class:"list-item-redeem-btn",type:"warning",round:"",onClick:t[1]||(t[1]=e=>A.pay())},{default:(0,n.w5)((()=>[_])),_:1}))])]),(0,n._)("div",k,[e.ad_category.name_en?((0,n.wg)(),(0,n.iD)("span",b,(0,i.zw)(e.ad_category.name_en),1)):(0,n.kq)("",!0)])])))),128)):((0,n.wg)(),(0,n.iD)("div",v," You have no ads yet. "))]),D.myAdsData.length>0?((0,n.wg)(),(0,n.iD)("div",C,[(0,n.Wm)(W,{layout:"prev, pager, next","default-current-page":1,onSizeChange:A.pageSizeChange,onCurrentChange:A.pageChange,"current-page":D.page,"page-size":D.limit,total:D.totalNum},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])):(0,n.kq)("",!0)])),_:1})])),_:1})])])}var A=a(1836),z=a(4116),x=a(4276),S={name:"ads",components:{meSideMenu:s.Z},data(){return{dashboardAdsImg:z,myAdsData:[],page:1,limit:8,totalNum:0}},mounted(){this.getMyAdsList(this.page,this.limit)},methods:{turnPurchase(){this.$router.push("/me/ads/platform")},getMyAdsList(e,t){let a={token:localStorage.getItem("token"),page:e,limit:t};(0,A.jL)(a).then((e=>{console.log(e),200==e.code&&(this.myAdsData=e.message.data,this.totalNum=e.message.total)})).catch((e=>{console.log(e),e.msg&&this.$message.error(e.msg),e.message&&this.$message.error(e.message)}))},pageSizeChange(e){console.log(e)},pageChange(e){this.page=e,this.getMyAdsList(e,this.limit),console.log(e)},redeem(e){let t=JSON.stringify(e);this.$router.push({path:"/me/ads/redeem",query:{info:(0,x.cv)(t)}})},pay(){this.$msgbox({title:"Notice",message:"Oops! Our system is down at the moment. Don’t worry our Account Manager has been notified and will be in touch with you soon.",dangerouslyUseHTMLString:!1,type:"warning",center:!0,showCancelButton:!0,cancelButtonText:"Cancel",confirmButtonText:"Confirm","round-button":!0,callback(e){console.log(e),"confirm"===e&&(console.log("用户点击确定"),window.open("https://salesiq.zoho.com/signaturesupport.ls?widgetcode=75672d291fd9d5fcab53ffa3194f32598809c21f9b5284cbaf3493087cdd2e0d1a2010ab7b6727677d37b27582c0e9c4","_blank"))}})}}},q=a(8118);const W=(0,q.Z)(S,[["render",D],["__scopeId","data-v-fa8bbdf6"]]);var M=W},4116:function(e,t,a){e.exports=a.p+"img/2.58f8e2b8.png"}}]);
//# sourceMappingURL=7789.c3ca18a1.js.map