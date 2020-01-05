(this["webpackJsonpcocktails-menu-app"]=this["webpackJsonpcocktails-menu-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(45)},37:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=(a(37),a(38),a(12)),i=a(13),l=a(15),u=a(14),m=a(16),d=(a(39),a(9));function p(){return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement(d.b,{to:"/",className:"navbar-brand"},r.a.createElement("i",{className:"fas fa-cocktail fa-2x"})," COCKTAILS"))}var h=a(17);function E(){return r.a.createElement("div",{className:"container"},r.a.createElement(I,null),r.a.createElement(N,null))}var f=a(4),g=function(e,t){return fetch("".concat("https://the-cocktail-db.p.rapidapi.com/").concat(e).concat(t),{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"9625f60069msh7df0d5a3ae5a4ddp1d759ejsn0cce4042f495"}})},b=[{text:"Name",value:"strDrink"},{text:"ID",value:"idDrink"}],v=function(){return{type:"LOADING"}},w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getDrinkDetails(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.itemDetails,t=e.strDrink,a=e.strCategory,n=e.strAlcoholic,c=e.strGlass,o=e.strInstructions,s=e.strDrinkThumb;return this.props.loading?r.a.createElement(_,null):r.a.createElement("div",{className:"Details"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row py-5"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{className:"img-fluid",src:s,alt:""})),r.a.createElement(d.b,{className:"closeButton",to:"/"},r.a.createElement("i",{className:"fas fa-arrow-left fa-3x text-dark"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("p",null,r.a.createElement("strong",null,"Name: "),t),r.a.createElement("p",null,r.a.createElement("strong",null,"Category: "),a),"Alcoholic"===n?r.a.createElement("p",null,r.a.createElement("strong",null,"Alcoholic: "),"Yes"):r.a.createElement("p",null,r.a.createElement("strong",null,"Alcoholic:")," No"),r.a.createElement("p",null,r.a.createElement("strong",null,"Glass: "),c),r.a.createElement("p",null,r.a.createElement("strong",null,"Instructions:")," ",o)))))}}]),t}(r.a.Component),y=Object(f.b)((function(e){return{itemDetails:e.itemDetails,loading:e.loading}}),(function(e){return{getDrinkDetails:function(t){var a;e((a=t,function(e){e(v()),g("lookup.php?i=",a).then((function(e){return e.json()})).then((function(t){document.body.scrollTop=0,document.documentElement.scrollTop=0,setTimeout((function(){return e({type:"GET_DRINK_DETAILS",data:t})}),800)}))}))}}}))(w);function O(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:E}),r.a.createElement(h.a,{exact:!0,path:"/details/:id",component:y}))}function k(e){return r.a.createElement("div",{className:"col-6 col-md-4"},r.a.createElement(d.b,{to:"/details/".concat(e.idDrink)},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("img",{className:"card-img-top",src:e.strDrinkThumb,alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.strDrink),r.a.createElement("button",{className:"btn btn-dark btn-sm"},"More Info")))))}var N=Object(f.b)((function(e){return{loading:e.loading,datas:e.datas,showingItemsLower:e.showingItemsLower,showingItemsUpper:e.showingItemsUpper}}))((function(e){var t=e.showingItemsLower,a=e.showingItemsUpper,n=e.datas;return e.loading?r.a.createElement(S,null):r.a.createElement("div",{className:"Drinks"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("p",{className:"lead"},t+1," - ",a>n.length?n.length:a," of ",n.length," results")),n.slice(t,a).map((function(e){return r.a.createElement(k,Object.assign({key:e.idDrink},e))})),r.a.createElement(D,null)))})),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getOptions()}},{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"sort"},"Drink Name"),r.a.createElement("input",{className:"form-control",value:this.props.searchValue,onChange:function(t){return e.props.searchDrink(t.target.value)},placeholder:"Enter your drinks name..."}))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"cocktailFilter"},"Drink Type "),r.a.createElement("select",{className:"form-control",id:"cocktailFilter",onChange:function(t){return e.props.selectedChange(t.target.value)}},this.props.options.map((function(e){return r.a.createElement("option",{key:e.strCategory,value:e.strCategory},e.strCategory)}))))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"sort"},"Sort by"),r.a.createElement("select",{className:"form-control",id:"sort",onChange:function(t){return e.props.sortItems(t.target.value)}},b.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.text)})))))))}}]),t}(r.a.Component),I=Object(f.b)((function(e){return{currentFilter:e.cocktailFilter,options:e.options,searchValue:e.searchValue}}),(function(e){return{selectedChange:function(t){return e((a=t,function(e){e(v()),g("filter.php?c=",a).then((function(e){return e.json()})).then((function(t){setTimeout((function(){return e({type:"SELECTED_CHANGE",data:t})}),800)}))}));var a},getOptions:function(){return e((function(e){g("list.php?c=list","").then((function(e){return e.json()})).then((function(t){return e({type:"GET_OPTIONS",data:t})}))}))},sortItems:function(t){return e({type:"SORT_ITEMS",sort:t})},searchDrink:function(t){return e(function(e){return{type:"SEARCH_DRINK",val:e}}(t))}}}))(j),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"buttons d-flex justify-content-between"},0===this.props.showingItemsLower?r.a.createElement("button",{disabled:!0,onClick:function(){return e.props.previousPage()},className:"btn btn-dark"},"\xab Previous"):r.a.createElement("button",{onClick:function(){return e.props.previousPage()},className:"btn btn-dark"},"\xab Previous"),this.props.showingItemsUpper>=this.props.datas.length?r.a.createElement("button",{disabled:!0,onClick:function(){return e.props.nextPage()},className:"btn btn-dark"},"Next \xbb"):r.a.createElement("button",{onClick:function(){return e.props.nextPage()},className:"btn btn-dark"},"Next \xbb")))}}]),t}(r.a.Component),D=Object(f.b)((function(e){return{datas:e.datas,showingItemsLower:e.showingItemsLower,showingItemsUpper:e.showingItemsUpper}}),(function(e){return{nextPage:function(){e({type:"NEXT_PAGE"})},previousPage:function(){e({type:"PREVIOUS_PAGE"})}}}))(x),C=a(22),T=function(){return r.a.createElement(C.a,{height:400,width:1100,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"0",y:"48",rx:"5",ry:"5",width:"350",height:"350"}),r.a.createElement("rect",{x:"380",y:"48",rx:"0",ry:"0",width:"100",height:"15"}),r.a.createElement("rect",{x:"380",y:"87",rx:"0",ry:"0",width:"140",height:"15"}),r.a.createElement("rect",{x:"380",y:"126",rx:"0",ry:"0",width:"120",height:"15"}),r.a.createElement("rect",{x:"380",y:"165",rx:"0",ry:"0",width:"140",height:"15"}),r.a.createElement("rect",{x:"380",y:"204",rx:"0",ry:"0",width:"280",height:"15"}))};function _(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(T,null))))}var L=function(){return r.a.createElement(C.a,{height:600,width:1110,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"0",y:"46",rx:"5",ry:"5",width:"253",height:"253"}),r.a.createElement("rect",{x:"283",y:"46",rx:"5",ry:"5",width:"253",height:"253"}),r.a.createElement("rect",{x:"566",y:"46",rx:"5",ry:"5",width:"253",height:"253"}),r.a.createElement("rect",{x:"849",y:"46",rx:"5",ry:"5",width:"253",height:"253"}),r.a.createElement("rect",{x:"0",y:"347",rx:"5",ry:"5",width:"253",height:"253"}),r.a.createElement("rect",{x:"283",y:"347",rx:"5",ry:"5",width:"253",height:"253"}),r.a.createElement("rect",{x:"566",y:"347",rx:"5",ry:"5",width:"253",height:"253"}),r.a.createElement("rect",{x:"849",y:"347",rx:"5",ry:"5",width:"253",height:"253"}))};function S(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(L,null)))}var A=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getDrinks()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(O,null))}}]),t}(r.a.Component),G=Object(f.b)(null,(function(e){return{getDrinks:function(){return e((function(e){g("filter.php?c=","Ordinary Drink").then((function(e){return e.json()})).then((function(t){setTimeout((function(){return e({type:"GET_DRINKS",data:t})}),800)}))}))}}}))(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(18),U=a(31),R=a(11),F=a(7),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{datas:[],_datas:[],options:[],itemDetails:[],cocktailFilter:"Ordinary Drink",showingItemsLower:0,showingItemsUpper:12,loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(F.a)({},e,{loading:!0});case"GET_DRINKS":return Object(F.a)({},e,{datas:Object(R.a)(t.data.drinks),_datas:Object(R.a)(t.data.drinks)});case"GET_OPTIONS":return Object(F.a)({},e,{options:Object(R.a)(t.data.drinks)});case"SEARCH_DRINK":return Object(F.a)({},e,{datas:Object(R.a)(e._datas.filter((function(e){return e.strDrink.toLowerCase().indexOf(t.val.toLowerCase())>-1}))),showingItemsLower:0,showingItemsUpper:12});case"SELECTED_CHANGE":return Object(F.a)({},e,{datas:Object(R.a)(t.data.drinks),_datas:Object(R.a)(t.data.drinks),showingItemsLower:0,showingItemsUpper:12,loading:!1});case"GET_DRINK_DETAILS":return Object(F.a)({},e,{itemDetails:t.data.drinks[0],loading:!1});case"SORT_ITEMS":if("idDrink"===t.sort)return Object(F.a)({},e,{datas:Object(R.a)(e.datas.sort((function(e,a){return e[t.sort]-a[t.sort]})))});if("strDrink"===t.sort)return Object(F.a)({},e,{datas:Object(R.a)(e.datas.sort((function(e,a){var n=e[t.sort].toLowerCase(),r=a[t.sort].toLowerCase();return n<r?-1:n>r?1:0})))});case"NEXT_PAGE":return document.body.scrollTop=0,document.documentElement.scrollTop=0,Object(F.a)({},e,{showingItemsLower:e.showingItemsLower+12,showingItemsUpper:e.showingItemsUpper+12});case"PREVIOUS_PAGE":return document.body.scrollTop=0,document.documentElement.scrollTop=0,Object(F.a)({},e,{showingItemsLower:e.showingItemsLower-12,showingItemsUpper:e.showingItemsUpper-12});default:return e}},M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.c,V=Object(P.d)(K,M(Object(P.a)(U.a)));o.a.render(r.a.createElement(d.a,null,r.a.createElement((function(e){return r.a.createElement(f.a,{store:V},r.a.createElement(G,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.e6a7eead.chunk.js.map