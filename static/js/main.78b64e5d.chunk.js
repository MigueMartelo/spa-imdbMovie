(this["webpackJsonpsearch-movies"]=this["webpackJsonpsearch-movies"]||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),o=a(5),m=(a(23),a(6)),s=a(7),i=function(e){var t=e.children;return c.a.createElement("h1",{className:"title"},t)},u=function(e){var t=e.onResults,a=Object(n.useState)(""),l=Object(s.a)(a,2),r=l[0],o=l[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("http://www.omdbapi.com/?apikey=".concat("99f2c4bc","&s=").concat(r)).then((function(e){return e.json()})).then((function(e){var a=e.Search,n=void 0===a?[]:a,c=e.totalResults,l=void 0===c?"0":c;console.log({Search:n,totalResults:l}),t(n)}))}},c.a.createElement("div",{className:"field has-addons"},c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",onChange:function(e){o(e.target.value)},type:"text",placeholder:"Movie to search..."})),c.a.createElement("div",{className:"control"},c.a.createElement("button",{className:"button is-info"},"Search"))))},E=function(e){var t=e.poster,a=e.title,n=e.year,l=e.id;return c.a.createElement(o.b,{to:"/detail/".concat(l),className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image"},c.a.createElement("img",{src:t,alt:a}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-4"},a),c.a.createElement("p",{className:"subtitle is-6"},n)))))},d=function(e){var t=e.movies;return c.a.createElement("div",{className:"MoviesList"},t.map((function(e){return c.a.createElement("div",{className:"MoviesList-item",key:e.imdbID},c.a.createElement(E,{id:e.imdbID,title:e.Title,poster:e.Poster,year:e.Year}),";")})))},v=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(!1),m=Object(s.a)(o,2),E=m[0],v=m[1];return c.a.createElement("div",null,c.a.createElement(i,null,"Search Movies"),c.a.createElement("div",{className:"SearchForm-wrapper"},c.a.createElement(u,{onResults:function(e){r(e),v(!0)}})),E?0===l.length?c.a.createElement("p",null,"Sorry!",c.a.createElement("span",{role:"img","aria-label":"Emoji"},"\ud83d\ude1e"),"Results not found!"):c.a.createElement(d,{movies:l}):c.a.createElement("small",null,"Use the form to search a movie"))},f=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)((function(){!function(e){var t=e.id;fetch("http://www.omdbapi.com/?apikey=".concat("99f2c4bc","&i=").concat(t)).then((function(e){return e.json()})).then((function(e){console.log({data:e}),r(e)}))}({id:e.match.params.id})}),[e.match]);var m=l.Title,i=l.Poster,u=l.Actors,E=l.Metascore,d=l.Plot;return c.a.createElement("div",null,c.a.createElement(o.b,{to:"/"},"Go Home"),c.a.createElement("h1",null,m),c.a.createElement("img",{src:i,alt:m}),c.a.createElement("h3",null,u),c.a.createElement("p",null,E),c.a.createElement("p",null,d))},p=function(){return c.a.createElement("div",null,c.a.createElement("h1",{style:{style:"#000",fontSize:30}},"404!"),c.a.createElement("h2",null,"Page not found"),c.a.createElement(o.b,{to:"/"},"Back to Home"))};a(29),a(30);var h=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:v}),c.a.createElement(m.a,{path:"/detail/:id",component:f}),c.a.createElement(m.a,{component:p})))};r.a.render(c.a.createElement(o.a,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.78b64e5d.chunk.js.map