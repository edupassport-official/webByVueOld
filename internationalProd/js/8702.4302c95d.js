"use strict";(self["webpackChunkeslweb"]=self["webpackChunkeslweb"]||[]).push([[8702],{2576:function(e,a,t){function s(){let e=window.innerHeight,a=document.querySelector(":root");e>0&&a&&a.style.setProperty("--i-window-height",`${e}px`)}t.d(a,{N8:function(){return l},lJ:function(){return s}});const l=e=>{let a=e.split(" "),t=a[1],s=t.slice(0,-3);return s}},8702:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var s=t(6995),l=t(6252),i=t(6612);const n=e=>((0,l.dD)("data-v-2325dac7"),e=e(),(0,l.Cn)(),e),o={class:"bg"},d={class:"profile-container"},c={class:"profile-l-container"},r={class:"profile-r-container"},g={class:"deals-list-container"},u={class:"deals-list-t"},m=n((()=>(0,l._)("div",{class:"deals-list-label"},"My Deals",-1))),p={class:"deals-list-t-r"},_=(0,l.Uk)(" Offer a Deal "),h={key:0,class:"deals-list-content"},v={class:"deals-item"},f={class:"deals-item-bg"},y={class:"img-slot-background"},k={key:0,class:"list-item-tag actived-0"},w={key:1,class:"list-item-tag actived-1"},D={key:2,class:"list-item-tag actived-2"},b={class:"deals-item-c"},C={class:"deals-item-c-l"},z={class:"deals-item-c-r"},W={class:"deals-item-c-r-1"},P={class:"deals-item-c-r-2"},L={class:"deals-item-b"},q={class:"deals-item-b-l"},S=(0,l.Uk)(" unknown "),I={class:"deals-item-b-r"},M=(0,l.Uk)(" EDIT "),U=(0,l.Uk)(" DETAILS "),$={key:1,class:"deals-list-content-empty"},J={key:0,class:"deals-pagination"};function T(e,a,t,n,T,E){const H=s.Z,N=(0,l.up)("el-button"),Y=(0,l.up)("Picture"),Z=(0,l.up)("el-icon"),j=(0,l.up)("el-image"),x=(0,l.up)("el-avatar"),A=(0,l.up)("el-empty"),K=(0,l.up)("el-pagination"),O=(0,l.up)("el-scrollbar");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",d,[(0,l._)("div",c,[(0,l.Wm)(H)]),(0,l._)("div",r,[(0,l.Wm)(O,{class:"profile-r-bg-container"},{default:(0,l.w5)((()=>[(0,l._)("div",g,[(0,l._)("div",u,[m,(0,l._)("div",p,[(0,l.Wm)(N,{type:"primary",class:"post-deal-btn",round:"",onClick:a[0]||(a[0]=e=>E.postDeal())},{default:(0,l.w5)((()=>[_])),_:1})])]),T.dealsListData.length>0?((0,l.wg)(),(0,l.iD)("div",h,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(T.dealsListData,((e,a)=>((0,l.wg)(),(0,l.iD)("div",{class:"deals-item-container",key:a},[(0,l._)("div",v,[(0,l._)("div",f,[(0,l.Wm)(j,{class:"deals-item-background-img",src:e.company_info&&e.company_info.background_image?e.company_info.background_image:"",fit:"cover"},{error:(0,l.w5)((()=>[(0,l._)("div",y,[(0,l.Wm)(Z,{size:80,color:"#808080"},{default:(0,l.w5)((()=>[(0,l.Wm)(Y)])),_:1})])])),_:2},1032,["src"]),0==e.status?((0,l.wg)(),(0,l.iD)("div",k," Pending ")):(0,l.kq)("",!0),1==e.status?((0,l.wg)(),(0,l.iD)("div",w," Active ")):(0,l.kq)("",!0),2==e.status?((0,l.wg)(),(0,l.iD)("div",D," Rejected ")):(0,l.kq)("",!0)]),(0,l._)("div",b,[(0,l._)("div",C,[(0,l.Wm)(x,{class:"deals-logo",src:e.company_logo},null,8,["src"])]),(0,l._)("div",z,[(0,l._)("div",W,(0,i.zw)(e.company_name),1),(0,l._)("div",P,(0,i.zw)(e.title),1)])]),(0,l._)("div",L,[(0,l._)("div",q,[e.company_info&&e.company_info.category_name_en&&"0"!=e.company_info.category_name_en?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Uk)((0,i.zw)(e.company_info.category_name_en),1)],64)):((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[S],64))]),(0,l._)("div",I,[(0,l.Wm)(N,{link:"",onClick:a=>E.turnEditDeal(e.id)},{default:(0,l.w5)((()=>[M])),_:2},1032,["onClick"]),(0,l.Wm)(N,{link:"",onClick:a=>E.turnDealDetail(e.id)},{default:(0,l.w5)((()=>[U])),_:2},1032,["onClick"])])])])])))),128))])):((0,l.wg)(),(0,l.iD)("div",$,[(0,l.Wm)(A,{description:"-"})]))]),T.dealsListData.length>0?((0,l.wg)(),(0,l.iD)("div",J,[(0,l.Wm)(K,{layout:"prev, pager, next","default-current-page":1,onSizeChange:E.dealPageSizeChange,onCurrentChange:E.dealPageChange,"current-page":T.dealPage,"page-size":T.dealLimit,total:T.dealTotalNum},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])):(0,l.kq)("",!0)])),_:1})])])])}var E=t(1836),H=t(2576),N={name:"deals",components:{meSideMenu:s.Z},data(){return{userInfo:{},basicUserInfo:{},dealsListData:[],dealPage:1,dealLimit:10,dealTotalNum:0}},unmounted(){(0,H.lJ)(),window.onresize=null},mounted(){let e=document.body.clientWidth,a=Math.floor(e);a<=768&&(0,H.lJ)(),window.onresize=()=>{a<=768&&(0,H.lJ)()},this.getMyDeals(this.dealPage,this.dealLimit)},methods:{postDeal(){this.$router.push({path:"/deals/offer",query:{}})},turnDealDetail(e){this.$router.push({path:"/deals/detail",query:{id:e}})},turnEditDeal(e){this.$router.push({path:"/deals/offer",query:{deal_id:e}})},dealPageSizeChange(e){console.log(e)},dealPageChange(e){this.jobPage=e,this.getMyDeals(e,this.dealLimit),console.log(e)},getMyDeals(e,a){let t={token:localStorage.getItem("token"),page:e,limit:a};(0,E.Jq)(t).then((e=>{console.log(e),200==e.code?(this.dealsListData=e.message.data,this.dealTotalNum=e.message.total):console.log(e.msg)})).catch((e=>{console.log(e),e.msg&&this.$message.error(e.msg),e.message&&this.$message.error(e.message)}))}}},Y=t(8118);const Z=(0,Y.Z)(N,[["render",T],["__scopeId","data-v-2325dac7"]]);var j=Z}}]);
//# sourceMappingURL=8702.4302c95d.js.map