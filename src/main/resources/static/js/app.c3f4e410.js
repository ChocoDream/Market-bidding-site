(function(t){function e(e){for(var a,c,s=e[0],o=e[1],u=e[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0140":function(t,e,n){},"034f":function(t,e,n){"use strict";n("85ec")},"090a":function(t,e,n){},"0ce9":function(t,e,n){},1247:function(t,e,n){},"1b05":function(t,e,n){"use strict";n("0ce9")},"2e3c":function(t,e,n){"use strict";n("ade7")},"2f08":function(t,e,n){"use strict";n("c376")},"3a80":function(t,e,n){"use strict";n("5b81")},"3e2d":function(t,e,n){},"4a74":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,i,r,c,s,o,u,l,d,f,b,p,h,m,v,g,O,j,y,w,_,C,x,k,S,A,$,D,R,z,L,T,I,U,P,E,M,B,N,W,q,F,Q,H,J,V,K,G=n("2b0e"),X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar",{on:{toggleSlider:t.toggleSlider}}),t.showSlider?n("SliderMenu",{on:{toggleSlider:t.toggleSlider}}):t._e(),n("router-view")],1)},Y=[],Z=(n("99af"),n("d4ec")),tt=n("bee2"),et=n("257e"),nt=n("262e"),at=n("2caf"),it=n("ade3"),rt=n("60a3"),ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("h1",{staticClass:"title"},[t._v("D3mTr@din'Bo!z")]),n("i",{staticClass:"material-icons",on:{click:t.toggleMenu}},[t._v("menu")])])},st=[],ot=Object(rt["a"])(a=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){return Object(Z["a"])(this,n),e.apply(this,arguments)}return Object(tt["a"])(n,[{key:"toggleMenu",value:function(){this.$emit("toggleSlider")}}]),n}(rt["c"]))||a,ut=ot,lt=(n("d871"),n("2877")),dt=Object(lt["a"])(ut,ct,st,!1,null,"0f531df0",null),ft=dt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider-menu"},[n("div",{staticClass:"menu-icon"},[n("i",{staticClass:"material-icons",on:{click:t.toggleMenu}},[t._v("clear")])]),t.user?n("div",{staticClass:"user"},[t._v(" "+t._s(t.user.username)+" ")]):t._e(),n("div",t._l(t.menuItems,(function(e,a){return n("div",{key:a,staticClass:"menu-item"},[n("div",{staticClass:"choice"},[n("span",{on:{click:function(n){return t.handleClick(e)}}},[t._v(" "+t._s(e.title)+" ")])])])})),0)])},pt=[],ht=(n("4de4"),n("caad"),n("2532"),Object(rt["a"])((r=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){var t;Object(Z["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(it["a"])(Object(et["a"])(t),"defaultMenuItems",[{title:"Log In",route:"/login",userStatus:["offline"]},{title:"Log Out",route:"/logout",userStatus:["online"]},{title:"Create Auction",route:"/create-auction",userStatus:["online"]},{title:"Register",route:"/register",userStatus:["offline"]},{title:"Home",route:"/",userStatus:["offline","online"]}]),t}return Object(tt["a"])(n,[{key:"toggleMenu",value:function(){this.$emit("toggleSlider")}},{key:"handleClick",value:function(t){this.$router.push(t.route),this.toggleMenu()}},{key:"menuItems",get:function(){return this.isUserLoggedIn?this.defaultMenuItems.filter((function(t){return t.userStatus.includes("online")})):this.defaultMenuItems.filter((function(t){return t.userStatus.includes("offline")}))}},{key:"isUserLoggedIn",get:function(){return!!this.$store.state.loggedInUser}},{key:"user",get:function(){return this.$store.state.loggedInUser}}]),n}(rt["c"]),i=r))||i),mt=ht,vt=(n("ff91"),Object(lt["a"])(mt,bt,pt,!1,null,"7b7f780a",null)),gt=vt.exports,Ot=(c=Object(rt["a"])({components:{NavBar:ft,SliderMenu:gt}}),c((o=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){var t;Object(Z["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(it["a"])(Object(et["a"])(t),"showSlider",!1),t}return Object(tt["a"])(n,[{key:"toggleSlider",value:function(){this.showSlider=!this.showSlider}}]),n}(rt["c"]),s=o))||s),jt=Ot,yt=(n("034f"),Object(lt["a"])(jt,X,Y,!1,null,null,null)),wt=yt.exports,_t=n("8c4f"),Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page bg-pic"},[n("div",{staticClass:"bg-grey"},[t._v("HEADER D3mTr@din'Bo!z")]),t._m(0),n("Search"),n("AuctionList")],1)},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background"},[a("img",{attrs:{src:n("62a1"),alt:""}})])}],kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-wrapper"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.executeSearch(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{id:"search-field",type:"text",placeholder:"Type in your search..."},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),n("button",{staticClass:"btn btn-primary",attrs:{id:"search"}},[t._v("Search")])])])])},St=[],At=Object(rt["a"])((l=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){var t;Object(Z["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(it["a"])(Object(et["a"])(t),"searchQuery",""),t}return Object(tt["a"])(n,[{key:"executeSearch",value:function(){this.$store.dispatch("fetchAllAuctionsWithQuery",this.searchQuery)}}]),n}(rt["c"]),u=l))||u,$t=At,Dt=(n("2e3c"),Object(lt["a"])($t,kt,St,!1,null,"3b08f263",null)),Rt=Dt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"class-based-tutorial container"},[n("div",{staticClass:" bg-white"},[t.searchWord?n("h5",{staticClass:"word"},[t._v('"'+t._s(t.searchWord)+'"')]):n("h5",[t._v("Auctions")]),n("div",{staticClass:"line"}),t.auctions&&!t.auctions.length?n("h5",{staticClass:"mt-3 word text-center"},[t._v(" No auctions found. ")]):t._e()]),n("div",{staticClass:"row"},t._l(t.auctions,(function(t){return n("AuctionListItem",{key:t.auction_id,staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 mt-3",attrs:{auction:t}})})),1)])},Lt=[],Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item",on:{click:t.navigate}},[n("div",{staticClass:"card h-100 mb-6"},[n("div",{},[n("img",{staticClass:"card-img-top",attrs:{src:t.auction.image_URL,alt:"Card image cap"}}),n("div",{staticClass:"card-body row"},[n("p",{staticClass:"card-title font-italic text-truncate col-12"},[t._v(" "+t._s(t.auction.title)+" ")]),n("div",{staticClass:"col-12"},[n("CurrentBid",{attrs:{fontSize:12,showTitle:!1,startPrice:t.auction.start_price,bids:t.bids}})],1),n("div",{staticClass:"col-12"},[n("AuctionTimer",{attrs:{fontSize:12,showTitle:!1,endDate:t.auction.end_date}})],1)])])])])},It=[],Ut=(n("96cf"),n("1da1")),Pt=n("6b7b"),Et=n("63ae"),Mt=(n("f890"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auction-details"},[t.showTitle?n("h3",{staticClass:"title",style:t.standardFontSize},[t._v("Ends:")]):t._e(),n("span",{staticClass:"time-left primary",class:{urgent:t.isUrgent},style:t.standardFontSize},[t._v(" "+t._s(t.timeLeft)+" ")])])}),Bt=[],Nt=(n("a9e3"),d=Object(rt["b"])({type:Number,required:!0}),f=Object(rt["b"])({type:Boolean,default:!0}),b=Object(rt["b"])({type:Number,default:18}),Object(rt["a"])((O=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){var t;Object(Z["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(Pt["a"])(Object(et["a"])(t),"endDate",m,Object(et["a"])(t)),Object(Pt["a"])(Object(et["a"])(t),"showTitle",v,Object(et["a"])(t)),Object(Pt["a"])(Object(et["a"])(t),"fontSize",g,Object(et["a"])(t)),Object(it["a"])(Object(et["a"])(t),"timer",null),Object(it["a"])(Object(et["a"])(t),"countdown",0),t}return Object(tt["a"])(n,[{key:"getReadableCountdown",value:function(t){var e=this.getTimeObject(t);return e.weeks>0?new Date(this.endDate).toDateString():e.days>1?"".concat(e.days," days"):e.days>0?"".concat(e.days," day ").concat(e.hours," h"):e.hours>1?"".concat(e.hours," h ").concat(e.minutes," min"):e.hours>0?"".concat(e.hours," h ").concat(e.minutes," min ").concat(e.seconds," sec"):e.minutes>0?"".concat(e.minutes," min ").concat(e.seconds," sec"):"".concat(e.seconds," sec")}},{key:"getTimeObject",value:function(t){var e=1e3,n=60*e,a=60*n,i=24*a,r=7*i,c={};return c.weeks=Math.floor(t/r),t-=c.weeks*r,c.days=Math.floor(t/i),t-=c.days*i,c.hours=Math.floor(t/a),t-=c.hours*a,c.minutes=Math.floor(t/n),t-=c.minutes*n,c.seconds=Math.floor(t/e),c}},{key:"created",value:function(){var t=this;this.countdown=this.endDate-Date.now(),this.timer=setInterval((function(){t.countdown-=1e3}),1e3)}},{key:"destroyed",value:function(){clearInterval(this.timer)}},{key:"timeLeft",get:function(){return this.countdown<=0?"Expired":this.getReadableCountdown(this.countdown)}},{key:"isUrgent",get:function(){return this.countdown<6e4&&this.countdown>0}},{key:"standardFontSize",get:function(){return{fontSize:this.fontSize+"px"}}}]),n}(rt["c"]),h=O,m=Object(Et["a"])(h.prototype,"endDate",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=Object(Et["a"])(h.prototype,"showTitle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=Object(Et["a"])(h.prototype,"fontSize",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=h))||p),Wt=Nt,qt=(n("6984"),Object(lt["a"])(Wt,Mt,Bt,!1,null,"c1c79fa8",null)),Ft=qt.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auction-details"},[t.showTitle?n("h3",{staticClass:"title",style:t.standardFontSize},[t._v(t._s(t.title))]):t._e(),n("div",{staticClass:"bid-info"},[n("span",{staticClass:"current-bid",style:t.standardFontSize},[t._v(t._s(t.currentPrice))]),t.hasBids?n("span",{staticClass:"bids-counter",style:t.bidCounterFontSize},[t._v(" "+t._s(t.numberOfBids)+" ")]):t._e()])])},Ht=[],Jt=(j=Object(rt["b"])({type:Number,required:!0}),y=Object(rt["b"])({type:Array,default:[]}),w=Object(rt["b"])({type:Boolean,default:!0}),_=Object(rt["b"])({type:Number,default:18}),Object(rt["a"])((D=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){var t;Object(Z["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(Pt["a"])(Object(et["a"])(t),"startPrice",k,Object(et["a"])(t)),Object(Pt["a"])(Object(et["a"])(t),"bids",S,Object(et["a"])(t)),Object(Pt["a"])(Object(et["a"])(t),"showTitle",A,Object(et["a"])(t)),Object(Pt["a"])(Object(et["a"])(t),"fontSize",$,Object(et["a"])(t)),t}return Object(tt["a"])(n,[{key:"hasBids",get:function(){return this.bids.length}},{key:"title",get:function(){return this.hasBids?"Highest bid:":"Starting price:"}},{key:"currentPrice",get:function(){var t=this.hasBids?this.bids[0].bid_price:this.startPrice;return"".concat(t," SEK")}},{key:"numberOfBids",get:function(){var t=this.bids.length,e="- ".concat(t," bid");return t>1?e+"s":e}},{key:"standardFontSize",get:function(){return{fontSize:this.fontSize+"px"}}},{key:"bidCounterFontSize",get:function(){return{fontSize:.8*this.fontSize+"px"}}}]),n}(rt["c"]),x=D,k=Object(Et["a"])(x.prototype,"startPrice",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=Object(Et["a"])(x.prototype,"bids",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=Object(Et["a"])(x.prototype,"showTitle",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=Object(Et["a"])(x.prototype,"fontSize",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=x))||C),Vt=Jt,Kt=(n("f008"),Object(lt["a"])(Vt,Qt,Ht,!1,null,"60fac3a8",null)),Gt=Kt.exports,Xt=(n("d3b7"),function(){var t=Object(Ut["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/v1/bids/auction/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Yt=(R=Object(rt["a"])({components:{AuctionTimer:Ft,CurrentBid:Gt}}),z=Object(rt["b"])({required:!0}),R((U=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){var t;Object(Z["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(Pt["a"])(Object(et["a"])(t),"auction",I,Object(et["a"])(t)),Object(it["a"])(Object(et["a"])(t),"bids",[]),t}return Object(tt["a"])(n,[{key:"created",value:function(){var t=Object(Ut["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Xt(this.auction.auction_id);case 2:this.bids=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"navigate",value:function(){this.$store.commit("setAuction",this.auction),this.$router.push({path:"auction/".concat(this.auction.auction_id)})}}]),n}(rt["c"]),T=U,I=Object(Et["a"])(T.prototype,"auction",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=T))||L),Zt=Yt,te=(n("8f47"),Object(lt["a"])(Zt,Tt,It,!1,null,"0a3596e3",null)),ee=te.exports,ne=(P=Object(rt["a"])({components:{AuctionListItem:ee}}),P((M=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){var t;Object(Z["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(it["a"])(Object(et["a"])(t),"auctioner",[]),t}return Object(tt["a"])(n,[{key:"created",value:function(){}},{key:"searchWord",get:function(){return this.$store.state.searchWord}},{key:"auctions",get:function(){return this.$store.state.auctions}}]),n}(rt["c"]),E=M))||E),ae=ne,ie=(n("3a80"),Object(lt["a"])(ae,zt,Lt,!1,null,"1ec11027",null)),re=ie.exports,ce=(B=Object(rt["a"])({components:{Search:Rt,AuctionList:re}}),B(N=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){return Object(Z["a"])(this,n),e.apply(this,arguments)}return Object(tt["a"])(n,[{key:"created",value:function(){this.$store.dispatch("fetchAllAuctionsWithQuery","")}}]),n}(rt["c"]))||N),se=ce,oe=(n("da4f"),Object(lt["a"])(se,Ct,xt,!1,null,"8e7256e0",null)),ue=oe.exports,le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-wrapper"},[n("h2",{staticClass:"text-primary"},[t._v("Log in")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("input",{staticClass:"form-control",attrs:{id:"username",type:"text",required:"",placeholder:"Username.."}}),n("input",{staticClass:"form-control",attrs:{id:"password",type:"password",required:"",placeholder:"Password.."}}),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"submit"}},[t._v(" Log in ")]),n("button",{staticClass:"btn btn-primary"},[t._v("Register")])])])},de=[],fe=(W=Object(rt["a"])({components:{}}),W(q=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){return Object(Z["a"])(this,n),e.apply(this,arguments)}return Object(tt["a"])(n,[{key:"login",value:function(t){var e={username:t.target.username.value,password:t.target.password.value};this.attemptLogIn(e)}},{key:"attemptLogIn",value:function(){var t=Object(Ut["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="username="+encodeURIComponent(e.username)+"&password="+encodeURIComponent(e.password),t.next=3,fetch("/auth/login",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n});case 3:if(a=t.sent,console.log(a),!a.url.includes("error")){t.next=9;break}console.log("ERROR: Login failed."),t.next=13;break;case 9:return console.log("SUCCESS: Login succeeded"),t.next=12,this.$store.dispatch("whoami");case 12:this.$router.push("/");case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(rt["c"]))||q),be=fe,pe=(n("2f08"),Object(lt["a"])(be,le,de,!1,null,"7adeb5d2",null)),he=pe.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.processing?t._e():n("div",{staticClass:"detailed-auction container"},[n("div",{staticClass:"auction-header row"},[n("div",{staticClass:"back-arrow col-2"},[n("button",{on:{click:t.goBack}},[n("svg",{staticClass:"bi bi-arrow-left",attrs:{height:"25px",viewBox:"0 0 16 16",fill:"#288781",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}})])])]),n("h2",{staticClass:"auction-title col-10"},[t._v(" "+t._s(t.auction.title)+" ")]),n("div",{staticClass:"divider"})]),n("div",{staticClass:"content"},[n("div",{staticClass:"row image"},[n("img",{attrs:{src:t.auction.image_URL,alt:t.imageAlt}})]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 col-sm-5 col-md-4 col-lg-3 offset-sm-1 offset-md-2 offset-lg-3"},[n("CurrentBid",{attrs:{startPrice:t.auction.start_price,bids:t.bids}})],1),n("div",{staticClass:"col-6 col-sm-5 col-md-4 col-lg-3"},[n("AuctionTimer",{attrs:{endDate:t.auction.end_date}})],1)]),n("div",{staticClass:"row auction-description"},[n("h4",{staticClass:"title col-12"},[t._v("Description")]),n("div",{staticClass:"divider"}),n("p",{staticClass:"description col-12"},[t._v('"'+t._s(t.auction.description)+'"')])])])])},ve=[],ge=(F=Object(rt["a"])({components:{CurrentBid:Gt,AuctionTimer:Ft}}),F((H=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){var t;Object(Z["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(it["a"])(Object(et["a"])(t),"bids",[]),Object(it["a"])(Object(et["a"])(t),"processing",!0),t}return Object(tt["a"])(n,[{key:"goBack",value:function(){this.$router.go(-1)}},{key:"created",value:function(){var t=Object(Ut["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=this.$route.params.id,(null===(e=this.auction)||void 0===e?void 0:e.auction_id)==n){t.next=4;break}return t.next=4,this.$store.dispatch("fetchAuction",n);case 4:return t.next=6,Xt(n);case 6:this.bids=t.sent,this.processing=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"auction",get:function(){return this.$store.state.auction}},{key:"imageAlt",get:function(){return"Image of ".concat(this.auction.title,".")}}]),n}(rt["c"]),Q=H))||Q),Oe=ge,je=(n("b993"),Object(lt["a"])(Oe,me,ve,!1,null,"5d93ca5a",null)),ye=je.exports,we=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"text-center header-text mb-3 mt-3 italic"},[t._v("Create auction")]),n("form",{staticClass:"w-75 mx-auto",on:{submit:function(e){return e.preventDefault(),t.createAuction(e)}}},[n("label",{staticClass:"text-primary font-italic"},[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.auction.title,expression:"auction.title"}],staticClass:"form-control mb-3 ",attrs:{type:"text",required:""},domProps:{value:t.auction.title},on:{input:function(e){e.target.composing||t.$set(t.auction,"title",e.target.value)}}}),n("label",{staticClass:"text-primary font-italic"},[t._v("Description")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.auction.description,expression:"auction.description"}],staticClass:"form-control mb-3",attrs:{type:"text",required:""},domProps:{value:t.auction.description},on:{input:function(e){e.target.composing||t.$set(t.auction,"description",e.target.value)}}}),n("label",{staticClass:"text-primary font-italic"},[t._v("Auction end date")]),n("datepicker",{staticClass:"mb-3",attrs:{"bootstrap-styling":"",minimumView:"day",maximumView:"month",placeholder:"Select Date","disabled-dates":this.disabledDates},model:{value:t.auction.end_date,callback:function(e){t.$set(t.auction,"end_date",e)},expression:"auction.end_date"}}),n("label",{staticClass:"text-primary font-italic"},[t._v("Starting price")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.auction.start_price,expression:"auction.start_price"}],staticClass:"form-control mb-3",attrs:{type:"text",pattern:"[0-9]*",required:""},domProps:{value:t.auction.start_price},on:{input:function(e){e.target.composing||t.$set(t.auction,"start_price",e.target.value)}}}),n("label",{staticClass:"text-primary font-italic"},[t._v("Image Url")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.auction.image_URL,expression:"auction.image_URL"}],staticClass:"form-control mb-4",attrs:{type:"text",required:""},domProps:{value:t.auction.image_URL},on:{input:function(e){e.target.composing||t.$set(t.auction,"image_URL",e.target.value)}}}),t._m(0)],1)])},_e=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center-button"},[n("button",{staticClass:"btn btn-primary w-75 ",attrs:{type:"submit"}},[t._v(" Create auction ")])])}],Ce=(n("a4d3"),n("e01a"),n("c35a"),n("fa33")),xe=(J=Object(rt["a"])({components:{Datepicker:Ce["a"]}}),J((K=function(t){Object(nt["a"])(n,t);var e=Object(at["a"])(n);function n(){var t;Object(Z["a"])(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(it["a"])(Object(et["a"])(t),"date",new Date),Object(it["a"])(Object(et["a"])(t),"minDate",new Date((new Date).setDate(t.date.getDate()+1))),Object(it["a"])(Object(et["a"])(t),"disabledDates",{to:new Date((new Date).setDate(t.date.getDate())),from:new Date((new Date).setDate(t.date.getDate()+30))}),Object(it["a"])(Object(et["a"])(t),"auction",{description:null,end_date:t.minDate,image_URL:null,start_price:null,title:null}),t}return Object(tt["a"])(n,[{key:"created",value:function(){this.$store.state.loggedInUser||this.$router.push({path:"/login"})}},{key:"createAuction",value:function(){var t=Object(Ut["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.user){t.next=9;break}return e={end_date:this.auction.end_date.getTime(),start_price:Number.parseFloat(this.auction.start_price),title:this.auction.title,description:this.auction.description,image_URL:this.auction.image_URL,user:this.user.user_id},t.next=4,fetch("/api/v1/auctions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 4:return n=t.sent,t.next=7,n.json();case 7:n=t.sent,this.$router.push({path:"auction/".concat(n.auction_id)});case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(rt["c"]),V=K))||V),ke=xe,Se=(n("1b05"),Object(lt["a"])(ke,we,_e,!1,null,"1d15bf6b",null)),Ae=Se.exports;G["a"].use(_t["a"]);var $e=[{path:"/",name:"Home",component:ue},{path:"/login",name:"Login",component:he},{path:"/auction/:id",name:"Auction",component:ye},{path:"/create-auction",name:"CreateAuction",component:Ae}],De=new _t["a"]({mode:"history",base:"/",routes:$e}),Re=De,ze=n("2f62");G["a"].use(ze["a"]);var Le=new ze["a"].Store({state:{loggedInUser:null,auction:null,auctions:null,searchWord:""},mutations:{setAuction:function(t,e){t.auction=e},setAuctions:function(t,e){t.auctions=e},setSearchWord:function(t,e){t.searchWord=e},setloggedInUser:function(t,e){t.loggedInUser=e}},actions:{fetchAuction:function(t,e){return Object(Ut["a"])(regeneratorRuntime.mark((function n(){var a,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,fetch("/api/v1/auctions/".concat(e));case 3:return i=n.sent,n.next=6,i.json();case 6:r=n.sent,a("setAuction",r);case 8:case"end":return n.stop()}}),n)})))()},fetchAllAuctionsWithQuery:function(t,e){return Object(Ut["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,fetch("/api/v1/auctions?search=".concat(e));case 3:return i=n.sent,n.next=6,i.json();case 6:i=n.sent,a("setAuctions",i),a("setSearchWord",e);case 9:case"end":return n.stop()}}),n)})))()},whoami:function(t){return Object(Ut["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("/auth/whoami");case 3:return a=e.sent,e.prev=4,e.next=7,a.json();case 7:a=e.sent,console.log(a),n("setloggedInUser",a),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](4),e.t0.printStackTrace(),console.log("Not authenticated");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))()}},modules:{}});n("ab8b"),n("1247");G["a"].config.productionTip=!1,new G["a"]({router:Re,store:Le,render:function(t){return t(wt)}}).$mount("#app")},"5b81":function(t,e,n){},"62a1":function(t,e,n){t.exports=n.p+"img/auction1.2462796f.jpg"},6984:function(t,e,n){"use strict";n("4a74")},"85ec":function(t,e,n){},"866a":function(t,e,n){},"8f47":function(t,e,n){"use strict";n("3e2d")},a1a6:function(t,e,n){},ade7:function(t,e,n){},b993:function(t,e,n){"use strict";n("090a")},bfc5:function(t,e,n){},c376:function(t,e,n){},d871:function(t,e,n){"use strict";n("0140")},da4f:function(t,e,n){"use strict";n("866a")},f008:function(t,e,n){"use strict";n("bfc5")},ff91:function(t,e,n){"use strict";n("a1a6")}});
//# sourceMappingURL=app.c3f4e410.js.map