(function(t){function e(e){for(var a,i,s=e[0],o=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},c=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"090a":function(t,e,n){},1247:function(t,e,n){},"2e3c":function(t,e,n){"use strict";n("ade7")},"3a80":function(t,e,n){"use strict";n("5b81")},"441e":function(t,e,n){},"4a7a":function(t,e,n){"use strict";n("a6bc")},"555a":function(t,e,n){"use strict";n("bd5c")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r,c,i,s,o,u,l,d,f,h,b,p,v,m,g,O,j,y,w,_,C,k,x,S,A,$,I,R,M,L,B,E,P,D,T,U=n("2b0e"),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar",{on:{toggleSlider:t.toggleSlider}}),t.showSlider?n("SliderMenu",{on:{toggleSlider:t.toggleSlider}}):t._e(),n("router-view")],1)},Q=[],z=(n("99af"),n("d4ec")),N=n("bee2"),H=n("257e"),q=n("262e"),J=n("2caf"),K=n("ade3"),F=n("60a3"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("h1",{staticClass:"title"},[t._v("D3mTr@din'Bo!z")]),n("i",{staticClass:"material-icons",on:{click:t.toggleMenu}},[t._v("menu")])])},V=[],X=Object(F["a"])(a=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){return Object(z["a"])(this,n),e.apply(this,arguments)}return Object(N["a"])(n,[{key:"toggleMenu",value:function(){this.$emit("toggleSlider")}}]),n}(F["c"]))||a,Y=X,Z=(n("4a7a"),n("2877")),tt=Object(Z["a"])(Y,G,V,!1,null,"35e86e61",null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider-menu"},[n("div",{staticClass:"menu-icon"},[n("i",{staticClass:"material-icons",on:{click:t.toggleMenu}},[t._v("clear")])]),t.user?n("div",{staticClass:"user"},[t._v(" "+t._s(t.user.username)+" ")]):t._e(),n("div",t._l(t.menuItems,(function(e,a){return n("div",{key:a,staticClass:"menu-item"},[n("router-link",{staticClass:"choice",attrs:{to:e.route}},[t._v(t._s(e.title))])],1)})),0)])},at=[],rt=(n("4de4"),n("caad"),n("2532"),Object(F["a"])((c=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){var t;Object(z["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(K["a"])(Object(H["a"])(t),"defaultMenuItems",[{title:"Log In",route:"/login",userStatus:["offline"]},{title:"Log Out",route:"/logout",userStatus:["online"]},{title:"Create Auction",route:"/create-auction",userStatus:["online"]},{title:"Register",route:"/register",userStatus:["offline"]},{title:"Home",route:"/",userStatus:["offline","online"]}]),t}return Object(N["a"])(n,[{key:"toggleMenu",value:function(){this.$emit("toggleSlider")}},{key:"menuItems",get:function(){return this.isUserLoggedIn?this.defaultMenuItems.filter((function(t){return t.userStatus.includes("online")})):this.defaultMenuItems.filter((function(t){return t.userStatus.includes("offline")}))}},{key:"isUserLoggedIn",get:function(){return!!this.$store.state.loggedInUser}},{key:"user",get:function(){return this.$store.state.loggedInUser}}]),n}(F["c"]),r=c))||r),ct=rt,it=(n("b0e3"),Object(Z["a"])(ct,nt,at,!1,null,"3b2890ae",null)),st=it.exports,ot=(i=Object(F["a"])({components:{NavBar:et,SliderMenu:st}}),i((o=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){var t;Object(z["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(K["a"])(Object(H["a"])(t),"showSlider",!1),t}return Object(N["a"])(n,[{key:"toggleSlider",value:function(){this.showSlider=!this.showSlider}}]),n}(F["c"]),s=o))||s),ut=ot,lt=(n("034f"),Object(Z["a"])(ut,W,Q,!1,null,null,null)),dt=lt.exports,ft=n("8c4f"),ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page bg-pic"},[n("div",{staticClass:"bg-grey"},[t._v("HEADER D3mTr@din'Bo!z")]),t._m(0),n("Search"),n("AuctionList")],1)},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background"},[a("img",{attrs:{src:n("62a1"),alt:""}})])}],pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-wrapper"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.executeSearch(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{id:"search-field",type:"text",placeholder:"Type in your search..."},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),n("button",{staticClass:"btn btn-primary",attrs:{id:"search"}},[t._v("Search")])])])])},vt=[],mt=Object(F["a"])((l=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){var t;Object(z["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(K["a"])(Object(H["a"])(t),"searchQuery",""),t}return Object(N["a"])(n,[{key:"executeSearch",value:function(){this.$store.dispatch("fetchAllAuctionsWithQuery",this.searchQuery)}}]),n}(F["c"]),u=l))||u,gt=mt,Ot=(n("2e3c"),Object(Z["a"])(gt,pt,vt,!1,null,"3b08f263",null)),jt=Ot.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"class-based-tutorial container"},[n("div",{staticClass:" bg-white"},[t.searchWord?n("h5",{staticClass:"word"},[t._v('"'+t._s(t.searchWord)+'"')]):n("h5",[t._v("Auctions")]),n("div",{staticClass:"line"}),t.auctions&&!t.auctions.length?n("h5",{staticClass:"mt-3 word text-center"},[t._v(" No auctions found. ")]):t._e()]),n("div",{staticClass:"row"},t._l(t.auctions,(function(t){return n("AuctionListItem",{key:t.auction_id,staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 mt-3",attrs:{auction:t}})})),1)])},wt=[],_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item",on:{click:t.navigate}},[n("div",{staticClass:"card h-100 mb-6"},[n("div",{},[n("img",{staticClass:"card-img-top",attrs:{src:t.auction.image_URL,alt:"Card image cap"}}),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-title font-italic text-truncate"},[t._v(t._s(t.auction.title))]),n("div",{staticClass:"row"},[n("div",{staticClass:"current-bid-container col-12"},[n("CurrentBid",{attrs:{startPrice:t.auction.start_price,bids:t.bids}})],1),n("div",{staticClass:"col-12"},[n("AuctionTimer",{attrs:{endDate:t.auction.end_date}})],1)])])])])])},Ct=[],kt=(n("96cf"),n("1da1")),xt=n("6b7b"),St=n("63ae"),At=(n("f890"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auction-details"},[n("h3",{staticClass:"title"},[t._v("Expires:")]),n("span",{staticClass:"time-left",class:{urgent:t.isUrgent}},[t._v(t._s(t.timeLeft))])])}),$t=[],It=(n("a9e3"),d=Object(F["b"])({type:Number,required:!0}),Object(F["a"])((p=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){var t;Object(z["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(xt["a"])(Object(H["a"])(t),"endDate",b,Object(H["a"])(t)),Object(K["a"])(Object(H["a"])(t),"timer",null),Object(K["a"])(Object(H["a"])(t),"countdown",0),t}return Object(N["a"])(n,[{key:"getReadableCountdown",value:function(t){var e=this.getTimeObject(t);return e.weeks>0?new Date(this.endDate).toDateString():e.days>1?"".concat(e.days," days"):e.days>0?"".concat(e.days," day ").concat(e.hours," h"):e.hours>1?"".concat(e.hours," h ").concat(e.minutes," min"):e.hours>0?"".concat(e.hours," h ").concat(e.minutes," min ").concat(e.seconds," sec"):e.minutes>0?"".concat(e.minutes," min ").concat(e.seconds," sec"):"".concat(e.seconds," sec")}},{key:"getTimeObject",value:function(t){var e=1e3,n=60*e,a=60*n,r=24*a,c=7*r,i={};return i.weeks=Math.floor(t/c),t-=i.weeks*c,i.days=Math.floor(t/r),t-=i.days*r,i.hours=Math.floor(t/a),t-=i.hours*a,i.minutes=Math.floor(t/n),t-=i.minutes*n,i.seconds=Math.floor(t/e),i}},{key:"created",value:function(){var t=this;this.countdown=this.endDate-Date.now(),this.timer=setInterval((function(){t.countdown-=1e3}),1e3)}},{key:"destroyed",value:function(){clearInterval(this.timer)}},{key:"timeLeft",get:function(){return this.countdown<=0?"Expired":this.getReadableCountdown(this.countdown)}},{key:"isUrgent",get:function(){return this.countdown<6e4&&this.countdown>0}}]),n}(F["c"]),h=p,b=Object(St["a"])(h.prototype,"endDate",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=h))||f),Rt=It,Mt=(n("555a"),Object(Z["a"])(Rt,At,$t,!1,null,"5143e896",null)),Lt=Mt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auction-details"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"bid-info"},[n("span",{staticClass:"current-bid"},[t._v(t._s(t.currentPrice))]),t.hasBids?n("span",{staticClass:"bids-counter"},[t._v(t._s(t.numberOfBids))]):t._e()])])},Et=[],Pt=(v=Object(F["b"])({type:Number,required:!0}),m=Object(F["b"])({type:Array,default:[]}),Object(F["a"])((w=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){var t;Object(z["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(xt["a"])(Object(H["a"])(t),"startPrice",j,Object(H["a"])(t)),Object(xt["a"])(Object(H["a"])(t),"bids",y,Object(H["a"])(t)),t}return Object(N["a"])(n,[{key:"hasBids",get:function(){return this.bids.length}},{key:"title",get:function(){return this.hasBids?"Highest bid:":"Starting price:"}},{key:"currentPrice",get:function(){var t=this.hasBids?this.bids[0].bid_price:this.startPrice;return"".concat(t," SEK")}},{key:"numberOfBids",get:function(){var t=this.bids.length,e="- ".concat(t," bid");return t>1?e+"s":e}}]),n}(F["c"]),O=w,j=Object(St["a"])(O.prototype,"startPrice",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=Object(St["a"])(O.prototype,"bids",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=O))||g),Dt=Pt,Tt=(n("bd6f"),Object(Z["a"])(Dt,Bt,Et,!1,null,"4c1f6aea",null)),Ut=Tt.exports,Wt=(n("d3b7"),function(){var t=Object(kt["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/v1/bids/auction/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Qt=(_=Object(F["a"])({components:{AuctionTimer:Lt,CurrentBid:Ut}}),C=Object(F["b"])({required:!0}),_((A=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){var t;Object(z["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(xt["a"])(Object(H["a"])(t),"auction",S,Object(H["a"])(t)),Object(K["a"])(Object(H["a"])(t),"bids",[]),t}return Object(N["a"])(n,[{key:"created",value:function(){var t=Object(kt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Wt(this.auction.auction_id);case 2:this.bids=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"navigate",value:function(){this.$store.commit("setAuction",this.auction),this.$router.push({path:"auction/".concat(this.auction.auction_id)})}}]),n}(F["c"]),x=A,S=Object(St["a"])(x.prototype,"auction",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=x))||k),zt=Qt,Nt=(n("cff0"),Object(Z["a"])(zt,_t,Ct,!1,null,"8f5db340",null)),Ht=Nt.exports,qt=($=Object(F["a"])({components:{AuctionListItem:Ht}}),$((R=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){var t;Object(z["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(K["a"])(Object(H["a"])(t),"auctioner",[]),t}return Object(N["a"])(n,[{key:"created",value:function(){}},{key:"searchWord",get:function(){return this.$store.state.searchWord}},{key:"auctions",get:function(){return this.$store.state.auctions}}]),n}(F["c"]),I=R))||I),Jt=qt,Kt=(n("3a80"),Object(Z["a"])(Jt,yt,wt,!1,null,"1ec11027",null)),Ft=Kt.exports,Gt=(M=Object(F["a"])({components:{Search:jt,AuctionList:Ft}}),M(L=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){return Object(z["a"])(this,n),e.apply(this,arguments)}return Object(N["a"])(n,[{key:"created",value:function(){this.$store.dispatch("fetchAllAuctionsWithQuery","")}}]),n}(F["c"]))||L),Vt=Gt,Xt=(n("da4f"),Object(Z["a"])(Vt,ht,bt,!1,null,"8e7256e0",null)),Yt=Xt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-wrapper"},[n("h2",{staticClass:"text-primary"},[t._v("Log in")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("input",{staticClass:"form-control",attrs:{id:"username",type:"text",required:"",placeholder:"Username.."}}),n("input",{staticClass:"form-control",attrs:{id:"password",type:"password",required:"",placeholder:"Password.."}}),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"submit"}},[t._v(" Log in ")]),n("button",{staticClass:"btn btn-primary"},[t._v("Register")])])])},te=[],ee=(B=Object(F["a"])({components:{}}),B(E=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){return Object(z["a"])(this,n),e.apply(this,arguments)}return Object(N["a"])(n,[{key:"login",value:function(t){var e={username:t.target.username.value,password:t.target.password.value};this.attemptLogIn(e)}},{key:"attemptLogIn",value:function(){var t=Object(kt["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="username="+encodeURIComponent(e.username)+"&password="+encodeURIComponent(e.password),t.next=3,fetch("/login",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n});case 3:if(a=t.sent,!a.url.includes("error")){t.next=8;break}console.log("Wrong username/password"),t.next=12;break;case 8:return console.log("Successfully logged in"),t.next=11,this.$store.dispatch("whoami");case 11:this.$router.push("/");case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(F["c"]))||E),ne=ee,ae=(n("9e04"),Object(Z["a"])(ne,Zt,te,!1,null,"a5758998",null)),re=ae.exports,ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.processing?t._e():n("div",{staticClass:"detailed-auction container"},[n("div",{staticClass:"auction-header row"},[n("div",{staticClass:"back-arrow col-2"},[n("button",{on:{click:t.goBack}},[n("svg",{staticClass:"bi bi-arrow-left",attrs:{height:"25px",viewBox:"0 0 16 16",fill:"#288781",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}})])])]),n("h2",{staticClass:"auction-title col-10"},[t._v(" "+t._s(t.auction.title)+" ")]),n("div",{staticClass:"divider"})]),n("div",{staticClass:"content"},[n("div",{staticClass:"row image"},[n("img",{attrs:{src:t.auction.image_URL,alt:t.imageAlt}})]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-sm-5 col-md-4 col-lg-3 offset-sm-1 offset-md-2 offset-lg-3"},[n("CurrentBid",{attrs:{startPrice:t.auction.start_price,bids:t.bids}})],1),n("div",{staticClass:"col-6 col-sm-5 col-md-4 col-lg-3"},[n("AuctionTimer",{attrs:{endDate:t.auction.end_date}})],1)]),n("div",{staticClass:"row auction-description"},[n("h4",{staticClass:"title col-12"},[t._v("Description")]),n("div",{staticClass:"divider"}),n("p",{staticClass:"description col-12"},[t._v('"'+t._s(t.auction.description)+'"')])])])])},ie=[],se=(P=Object(F["a"])({components:{CurrentBid:Ut,AuctionTimer:Lt}}),P((T=function(t){Object(q["a"])(n,t);var e=Object(J["a"])(n);function n(){var t;Object(z["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(K["a"])(Object(H["a"])(t),"bids",[]),Object(K["a"])(Object(H["a"])(t),"processing",!0),t}return Object(N["a"])(n,[{key:"goBack",value:function(){this.$router.go(-1)}},{key:"created",value:function(){var t=Object(kt["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=this.$route.params.id,(null===(e=this.auction)||void 0===e?void 0:e.auction_id)==n){t.next=4;break}return t.next=4,this.$store.dispatch("fetchAuction",n);case 4:return t.next=6,Wt(n);case 6:this.bids=t.sent,this.processing=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"auction",get:function(){return this.$store.state.auction}},{key:"imageAlt",get:function(){return"Image of ".concat(this.auction.title,".")}}]),n}(F["c"]),D=T))||D),oe=se,ue=(n("b993"),Object(Z["a"])(oe,ce,ie,!1,null,"5d93ca5a",null)),le=ue.exports;U["a"].use(ft["a"]);var de=[{path:"/",name:"Home",component:Yt},{path:"/login",name:"Login",component:re},{path:"/auction/:id",name:"Auction",component:le}],fe=new ft["a"]({mode:"history",base:"/",routes:de}),he=fe,be=n("2f62");U["a"].use(be["a"]);var pe=new be["a"].Store({state:{loggedInUser:null,auction:null,auctions:null,searchWord:""},mutations:{setAuction:function(t,e){t.auction=e},setAuctions:function(t,e){t.auctions=e},setSearchWord:function(t,e){t.searchWord=e},setloggedInUser:function(t,e){t.loggedInUser=e}},actions:{fetchAuction:function(t,e){return Object(kt["a"])(regeneratorRuntime.mark((function n(){var a,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,fetch("/api/v1/auctions/".concat(e));case 3:return r=n.sent,n.next=6,r.json();case 6:c=n.sent,a("setAuction",c);case 8:case"end":return n.stop()}}),n)})))()},fetchAllAuctionsWithQuery:function(t,e){return Object(kt["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,fetch("/api/v1/auctions?search=".concat(e));case 3:return r=n.sent,n.next=6,r.json();case 6:r=n.sent,a("setAuctions",r),a("setSearchWord",e);case 9:case"end":return n.stop()}}),n)})))()},whoami:function(t){return Object(kt["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("/auth/whoami");case 3:return a=e.sent,e.prev=4,e.next=7,a.json();case 7:a=e.sent,n("setloggedInUser",a),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](4),e.t0.printStackTrace(),console.log("Not authenticated");case 15:case"end":return e.stop()}}),e,null,[[4,11]])})))()}},modules:{}});n("ab8b"),n("1247");U["a"].config.productionTip=!1,new U["a"]({router:he,store:pe,render:function(t){return t(dt)}}).$mount("#app")},"5b81":function(t,e,n){},6104:function(t,e,n){},"62a1":function(t,e,n){t.exports=n.p+"img/auction1.2462796f.jpg"},6931:function(t,e,n){},"85ec":function(t,e,n){},"866a":function(t,e,n){},"9e04":function(t,e,n){"use strict";n("441e")},a6bc:function(t,e,n){},ade7:function(t,e,n){},b0e3:function(t,e,n){"use strict";n("6931")},b993:function(t,e,n){"use strict";n("090a")},bd5c:function(t,e,n){},bd6f:function(t,e,n){"use strict";n("eb00")},cff0:function(t,e,n){"use strict";n("6104")},da4f:function(t,e,n){"use strict";n("866a")},eb00:function(t,e,n){}});
//# sourceMappingURL=app.8e77dbb7.js.map