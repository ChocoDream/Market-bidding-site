(function(t){function e(e){for(var r,i,s=e[0],o=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11fa":function(t,e,n){},"2e3c":function(t,e,n){"use strict";n("ade7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a,c,i,s,o,u,l,f,p,d,h,b,v=n("2b0e"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},y=[],g={},O=g,j=n("2877"),_=Object(j["a"])(O,m,y,!1,null,null,null),w=_.exports,x=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page bg-pic"},[n("div",{staticClass:"bg-grey"},[t._v("HEADER D3mTr@din'Bo!z")]),t._m(0),n("Search"),n("AuctionList")],1)},A=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"background"},[r("img",{attrs:{src:n("62a1"),alt:""}})])}],k=n("d4ec"),$=n("bee2"),S=n("262e"),B=n("2caf"),E=n("60a3"),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-wrapper"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.executeSearch(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{id:"search-field",type:"text",placeholder:"Type in your search..."},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),n("button",{staticClass:"btn btn-primary",attrs:{id:"search"}},[t._v("Search")])])])])},P=[],R=(n("99af"),n("257e")),L=n("ade3"),T=Object(E["a"])((a=function(t){Object(S["a"])(n,t);var e=Object(B["a"])(n);function n(){var t;Object(k["a"])(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a)),Object(L["a"])(Object(R["a"])(t),"searchQuery",""),t}return Object($["a"])(n,[{key:"executeSearch",value:function(){this.$store.dispatch("fetchAllAuctionsWithQuery",this.searchQuery)}}]),n}(E["c"]),r=a))||r,I=T,M=(n("2e3c"),Object(j["a"])(I,Q,P,!1,null,"3b08f263",null)),D=M.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"class-based-tutorial container"},[t._m(0),n("div",{staticClass:"row"},t._l(t.auctions,(function(t){return n("AuctionListItem",{key:t.auction_id,staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 mt-3",attrs:{auction:t}})})),1)])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:" bg-white"},[n("h5",{staticClass:"pt-2"},[t._v("Auctions")]),n("div",{staticClass:"line"})])}],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"card h-100 mb-6"},[n("div",{},[n("img",{staticClass:"card-img-top",attrs:{src:t.auction.image_URL,alt:"Card image cap"}}),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-title font-italic"},[t._v(t._s(t.auction.title))]),n("p",{staticClass:"card-title"},[n("span",{staticClass:"price-font"},[t._v(t._s(t.highestBid))]),t._v(" kr - "),n("span",{staticClass:"text-right"},[t._v(t._s(t.amountOfBids)+" bids")])])])])])])},J=[],q=(n("d3b7"),n("96cf"),n("1da1")),N=n("6b7b"),U=n("63ae"),F=(n("f890"),c=Object(E["a"])({components:{}}),i=Object(E["b"])({required:!0}),c((l=function(t){Object(S["a"])(n,t);var e=Object(B["a"])(n);function n(){var t;Object(k["a"])(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a)),Object(N["a"])(Object(R["a"])(t),"auction",u,Object(R["a"])(t)),Object(L["a"])(Object(R["a"])(t),"bids",[]),t}return Object($["a"])(n,[{key:"created",value:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBidByAuctionId(this.auction.auction_id);case 2:this.bids=t.sent,console.log(this.bids);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getBidByAuctionId",value:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/v1/bids/auction/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"amountOfBids",get:function(){return this.bids.length}},{key:"highestBid",get:function(){return this.bids.length>0?this.bids[0].bid_price:this.auction.start_price}}]),n}(E["c"]),o=l,u=Object(U["a"])(o.prototype,"auction",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=o))||s),G=F,K=(n("d85a"),Object(j["a"])(G,H,J,!1,null,"3eaad050",null)),V=K.exports,X=(f=Object(E["a"])({components:{AuctionListItem:V}}),f((d=function(t){Object(S["a"])(n,t);var e=Object(B["a"])(n);function n(){var t;Object(k["a"])(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=e.call.apply(e,[this].concat(a)),Object(L["a"])(Object(R["a"])(t),"auctioner",[]),t}return Object($["a"])(n,[{key:"created",value:function(){}},{key:"auctions",get:function(){return console.log(this.$store.state.auctions),this.$store.state.auctions}}]),n}(E["c"]),p=d))||p),Y=X,Z=(n("c166"),Object(j["a"])(Y,W,z,!1,null,"431922cb",null)),tt=Z.exports,et=(h=Object(E["a"])({components:{Search:D,AuctionList:tt}}),h(b=function(t){Object(S["a"])(n,t);var e=Object(B["a"])(n);function n(){return Object(k["a"])(this,n),e.apply(this,arguments)}return Object($["a"])(n,[{key:"created",value:function(){this.$store.dispatch("fetchAllAuctionsWithQuery","")}}]),n}(E["c"]))||b),nt=et,rt=(n("da4f"),Object(j["a"])(nt,C,A,!1,null,"8e7256e0",null)),at=rt.exports;v["a"].use(x["a"]);var ct=[{path:"/",name:"Home",component:at}],it=new x["a"]({mode:"history",base:"/",routes:ct}),st=it,ot=n("2f62");v["a"].use(ot["a"]);var ut=new ot["a"].Store({state:{auctions:null},mutations:{updateAuctions:function(t,e){t.auctions=e}},actions:{fetchAllAuctionsWithQuery:function(t,e){return Object(q["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,fetch("/api/v1/auctions?search=".concat(e));case 3:return a=n.sent,n.next=6,a.json();case 6:a=n.sent,r("updateAuctions",a);case 8:case"end":return n.stop()}}),n)})))()}},modules:{}});n("ab8b");v["a"].config.productionTip=!1,new v["a"]({router:st,store:ut,render:function(t){return t(w)}}).$mount("#app")},"62a1":function(t,e,n){t.exports=n.p+"img/auction1.2462796f.jpg"},6389:function(t,e,n){},"866a":function(t,e,n){},ade7:function(t,e,n){},c166:function(t,e,n){"use strict";n("11fa")},d85a:function(t,e,n){"use strict";n("6389")},da4f:function(t,e,n){"use strict";n("866a")}});
//# sourceMappingURL=app.3d94e093.js.map