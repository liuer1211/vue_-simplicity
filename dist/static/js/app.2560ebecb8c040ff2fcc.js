webpackJsonp([1],{"/ZAN":function(t,e,n){t.exports=n.p+"static/img/bg8.2e4bac9.jpg"},"/mtA":function(t,e){},AZSL:function(t,e){t.exports={mainList:[{id:"1",img:"https://cn.bing.com/th?id=OHR.NarniaForest_ZH-CN8466850438_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4",tit:"登陆",cen:"极简风格",score:5},{id:"2",img:"https://cn.bing.com/th?id=OHR.HolidayNubble_ZH-CN8122183595_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4",tit:"九宫格",cen:"极简风格",score:4},{id:"3",img:"https://cn.bing.com/th?id=OHR.BabyGoat_ZH-CN7863798344_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4",tit:"置顶",cen:"极简风格",score:3.2},{id:"4",img:"https://cn.bing.com/th?id=OHR.TreCime_ZH-CN7609469681_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4",tit:"下拉加载",cen:"极简风格",score:2.5},{id:"5",img:"https://cn.bing.com/th?id=OHR.PolarExpress_ZH-CN9522496479_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4",tit:"图表",cen:"极简风格",score:2.9},{id:"6",img:"https://cn.bing.com/th?id=OHR.QueenoftheAndes_ZH-CN9019108680_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp&w=2880&h=1620&rs=1&c=4",tit:"新闻",cen:"极简风格",score:4.1}],swiperList:[{name:"phone",icon:"el-icon-phone"},{name:"star",icon:"el-icon-star-on"},{name:"picture",icon:"el-icon-picture"},{name:"goods",icon:"el-icon-s-goods"},{name:"camera",icon:"el-icon-video-camera-solid"},{name:"solid",icon:"el-icon-message-solid"},{name:"promotion",icon:"el-icon-s-promotion"},{name:"check",icon:"el-icon-s-check"},{name:"share",icon:"el-icon-share"},{name:"flag",icon:"el-icon-s-flag"},{name:"marketing",icon:"el-icon-s-marketing"},{name:"release",icon:"el-icon-s-release"},{name:"platform",icon:"el-icon-s-platform"},{name:"upload",icon:"el-icon-upload"}]}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},s,!1,function(t){n("fyhx")},null,null).exports,r=n("/ocq"),o=n("Xxa5"),c=n.n(o),u=n("exGp"),d=n.n(u),l=n("fZjL"),m=n.n(l),p=n("//Fk"),f=n.n(p),h=n("mtWM"),v=n.n(h);function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new f.a(function(i,s){var a=void 0;if("GET"===n){var r="";m()(e).forEach(function(t){r+=t+"="+e[t]+"&"}),""!==r&&(r=r.substring(0,r.lastIndexOf("&")),t=t+"?"+r),a=v.a.get(t)}else a=v.a.post(t,e);a.then(function(t){i(t,e)}).catch(function(t){s(t)})})}var _=function(){return g("/mainList")},w=n("Dd8w"),b=n.n(w),y=n("NYxO"),L={props:{seaActive:{type:String,default:""}},data:function(){return{name:""}},computed:b()({},Object(y.c)(["mainList"])),methods:b()({},Object(y.b)(["getMainList"]),{toSearch:function(){this.getMainList()},getMainListFilter:function(){for(var t=[],e=0;e<this.mainList.length;e++)(this.mainList[e].tit.indexOf(this.name)>-1||this.mainList[e].cen.indexOf(this.name)>-1)&&t.push(this.mainList[e]);this.$emit("getCodeChildren",t)}}),watch:{mainList:function(){var t=this;this.$nextTick(function(){t.getMainListFilter()})}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-main",class:t.seaActive},[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("el-button",{on:{click:function(e){return t.toSearch()}}},[t._v("搜索")])],1)},staticRenderFns:[]};var C=n("VU/8")(L,k,!1,function(t){n("cdGu")},"data-v-ab6b0c98",null).exports,x={props:{score:Number,size:Number},data:function(){return{list:["on","on","half","off","off"]}},computed:{starClasses:function(){for(var t=this.score,e=[],n=Math.floor(t),i=0;i<n;i++)e.push("on");for(10*t-10*n>=5&&e.push("half");e.length<5;)e.push("off");return e}},created:function(){}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"star"},this._l(this.starClasses,function(t,n){return e("span",{key:n,staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var H={components:{Search:C,Start:n("VU/8")(x,B,!1,function(t){n("eEul")},"data-v-2f4e8688",null).exports},data:function(){return{seaActive:"search-bg",mainList:[]}},created:function(){this.getInit()},methods:{getInit:function(){var t=this;return d()(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,t.mainList=n.data.data;case 4:case"end":return e.stop()}},e,t)}))()},setBodyBackGround:function(){document.body.style.backgroundImage="url("+n("/ZAN")+")",document.body.style.backgroundSize="100% 100%",document.body.style.backgroundPosition="center center",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundAttachment="fixed"},clearBodyBackGround:function(){document.body.style.backgroundImage=""},toPage:function(t){switch(t.id){case"1":return void this.$router.push({name:"login"});case"2":return void this.$router.push({name:"swiper"});default:return}},getCodeParent:function(t){this.mainList=t}},mounted:function(){this.setBodyBackGround()},beforeDestroy:function(){this.clearBodyBackGround()}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-main"},[n("Search",{attrs:{seaActive:t.seaActive},on:{getCodeChildren:t.getCodeParent}}),t._v(" "),n("div",{staticClass:"index-body"},[t.mainList.length>0?n("div",t._l(t.mainList,function(e,i){return n("div",{key:i,staticClass:"index-model-one upToBottom",on:{click:function(n){return t.toPage(e)}}},[n("div",{staticClass:"index-model-l"},[n("img",{staticClass:"index-model-l-img",attrs:{src:e.img}})]),t._v(" "),n("div",{staticClass:"index-model-r"},[n("h2",{staticClass:"over-font"},[t._v(t._s(e.tit))]),t._v(" "),n("p",{staticClass:"index-model-r-info over-font"},[t._v(t._s(e.cen))]),t._v(" "),n("div",{staticClass:"index-start"},[n("Start",{attrs:{score:e.score}})],1)])])}),0):n("div",{staticClass:"index-nodata"})])],1)},staticRenderFns:[]};var U=n("VU/8")(H,D,!1,function(t){n("paUD")},"data-v-0f2b3ab8",null).exports,N={data:function(){return{userName:"",userPassword:""}},methods:{setBodyBackGround:function(){document.body.style.background="#353434",document.body.style.backgroundImage=""},clearBodyBackGround:function(){document.body.style.background=""},toLogin:function(){""!==this.userName?""!==this.userPassword?this.getTip("success","登陆成功!"):this.getTip("error","密码不能为空!"):this.getTip("error","用户名不能为空!")},getTip:function(t,e){this.$message({message:e,duration:"2000",center:!0,offset:30,type:t})}},mounted:function(){this.setBodyBackGround()},beforeDestroy:function(){this.clearBodyBackGround()}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-main"},[t._m(0),t._v(" "),n("div",{staticClass:"login-model"},[n("el-input",{attrs:{placeholder:"请输入用户名/账号/手机号"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),n("el-input",{attrs:{placeholder:"请输入密码"},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}})],1),t._v(" "),n("div",{staticClass:"login-but"},[n("el-button",{on:{click:function(e){return t.toLogin()}}},[t._v("登陆")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-top"},[e("i",{staticClass:"el-icon-user"})])}]};var A=n("VU/8")(N,j,!1,function(t){n("ldhB")},"data-v-40e95cf9",null).exports,G=n("DNVT"),S=(n("mgS3"),{data:function(){return{}},computed:b()({},Object(y.c)(["swiperList"]),{swiperListArr:function(){var t=[],e=[];return this.swiperList.forEach(function(n){9===e.length&&(e=[]),0===e.length&&t.push(e),e.push(n)}),t}}),methods:b()({setBodyBackGround:function(){document.body.style.background="#353434",document.body.style.backgroundImage=""},clearBodyBackGround:function(){document.body.style.background=""}},Object(y.b)(["getSwiperList"])),watch:{swiperList:function(t){this.$nextTick(function(){new G.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})})}},mounted:function(){this.setBodyBackGround(),this.getSwiperList()},beforeDestroy:function(){this.clearBodyBackGround()}}),E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-main"},[n("div",{staticClass:"swiper-main-tit"},[t._v("九宫格")]),t._v(" "),n("div",{staticClass:"swiper-main-cen"},[t.swiperList.length?n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.swiperListArr,function(e,i){return n("div",{key:i,staticClass:"swiper-slide"},[n("div",{staticClass:"swiper-main-model"},t._l(e,function(e,i){return n("div",{key:i,staticClass:"swiper-model"},[t._m(0,!0),t._v(" "),n("div",{staticClass:"swiper-model-bot"},[t._v(t._s(e.name))])])}),0)])}),0)]):t._e(),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-model-up"},[e("div",{staticClass:"swiper-model-bg"},[e("i",{staticClass:"sw-icon"},[this._v("图")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-main-bot"},[e("div",{staticClass:"swiper-pagination"})])}]};var O=n("VU/8")(S,E,!1,function(t){n("/mtA")},"data-v-0e7c0780",null).exports;i.default.use(r.a);var R,$=new r.a({routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:U},{path:"/login",name:"login",component:A},{path:"/swiper",name:"swiper",component:O}]}),P=n("bOdI"),T=n.n(P),Z=(R={},T()(R,"receive_mainlist",function(t,e){var n=e.list;t.mainList=n}),T()(R,"receive_swiperlist",function(t,e){var n=e.list;t.swiperList=n}),R),F={getMainList:function(t){var e=this,n=t.commit;return d()(c.a.mark(function t(){var i,s,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:i=t.sent,1===(s=i.data).code&&(a=s.data,n("receive_mainlist",{list:a}));case 5:case"end":return t.stop()}},t,e)}))()},getSwiperList:function(t){var e=this,n=t.commit;return d()(c.a.mark(function t(){var i,s,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g("/swiperList");case 2:i=t.sent,1===(s=i.data).code&&(a=s.data,n("receive_swiperlist",{list:a}));case 5:case"end":return t.stop()}},t,e)}))()}},M=n("UjVw"),V=n.n(M);i.default.use(y.a);var I=new y.a.Store({state:{mainList:[],swiperList:[]},mutations:Z,actions:F,getters:V.a}),z=n("zL8q"),q=n.n(z),W=(n("tvR6"),n("uMhA"),n("zNUS")),J=n.n(W),Q=n("AZSL"),X=n.n(Q);J.a.mock("/mainList",{code:1,data:X.a.mainList}),J.a.mock("/swiperList",{code:1,data:X.a.swiperList}),i.default.use(q.a),i.default.config.productionTip=!1,new i.default({el:"#app",render:function(t){return t(a)},router:$,store:I})},UjVw:function(t,e){},cdGu:function(t,e){},eEul:function(t,e){},fyhx:function(t,e){},ldhB:function(t,e){},mgS3:function(t,e){},paUD:function(t,e){},tvR6:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2560ebecb8c040ff2fcc.js.map