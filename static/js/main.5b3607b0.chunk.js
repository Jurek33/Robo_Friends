(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=n(6),s=(n(27),n(3)),l=n(4),u=n(7),h=n(5),d=n(8),b=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:" tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?300x300")}),a.a.createElement("h2",null,t),a.a.createElement("h3",null,n))},E=function(e){var t=e.robots,n=t.map((function(e,n){return a.a.createElement(b,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return a.a.createElement("div",null,n)},m=function(e){var t=e.SearchChange;return a.a.createElement("input",{onChange:t,className:"pa2 ba b--yellow bg-light-yellow",type:"search",placeholder:"Find a Robot"})},p=(n(28),function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px",height:"650px"}},e.children)}),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null," Something went wrong ... "):this.props.children}}]),t}(r.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",null," Loading "):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f2"}," RoboFriends "),a.a.createElement(m,{SearchChange:n}),a.a.createElement(p,null,a.a.createElement(g,null,a.a.createElement(E,{robots:c}))))}}]),t}(r.Component),O=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(f);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(29);var v={searchField:""},y={isPending:!1,robots:[],error:""},R=n(1),S=n(15),j=n(16),w=Object(S.createLogger)(),C=Object(R.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(R.d)(C,Object(R.a)(j.a,w));c.a.render(a.a.createElement(i.a,{store:_},a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5b3607b0.chunk.js.map