(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"C/Hi":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var s=n("q1tI"),a=n.n(s),r=n("clbO"),o=n("nOHt"),i=n("vOnD").b.main.withConfig({displayName:"stylesearch__Container",componentId:"sc-1r65ojp-0"})(["background:var(--wrapper);.hero{background:var(--button);color:var(--wrapper);padding:2rem;.container{h1,p{margin:0;padding:0;}h1{font-size:4em;}a{font-size:1.6rem;margin-left:0.39em;cursor:pointer;text-transform:uppercase;font-weight:700 !important;}}}.results-thumb{height:100%;padding:2rem;img{width:100%;}}"]),l=n("YFqc"),u=n.n(l),p=a.a.createElement;function f(){var e=Object(o.useRouter)().query.searchs;return p(a.a.Fragment,null,e&&r.a.filter((function(t){return t.name==e})).map((function(e){return p(i,{className:"page",key:e.id},p("div",{className:"hero"},p("div",{className:"container"},p("h1",null,e.name),p(u.a,{href:"/home"},p("a",null,"BACK")),p("a",{href:e.donwload,download:e.name},"| Download | ",e.name))),p("div",{className:"results-thumb"},p("img",{src:e.thumbnail,alt:e.name})))})))}},"W+FA":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/results/[searchs]",function(){return n("C/Hi")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var s=n("lwsE"),a=n("W8MJ"),r=n("7W2i"),o=n("a1gu"),i=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(s,arguments,a)}else n=s.apply(this,arguments);return o(this,n)}}var u=n("TqRt"),p=n("284h");t.__esModule=!0,t.default=void 0;var f,c=p(n("q1tI")),d=n("QmWs"),h=n("g/15"),m=u(n("nOHt")),g=n("elyg");function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var w=new Map,y=window.IntersectionObserver,b={};function k(){return f||(y?f=new y((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var S=function(e){r(n,e);var t=l(n);function n(e){var a;return s(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,s=null;return function(a,r){if(s&&a===t&&r===n)return s;var o=e(a,r);return t=a,n=r,s=o,o}}((function(e,t){return{href:(0,g.addBasePath)(v(e)),as:t?(0,g.addBasePath)(v(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,s=t.target;if("A"!==n||!(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=a.formatUrls(a.props.href,a.props.as),o=r.href,i=r.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var l=window.location.pathname;o=(0,d.resolve)(l,o),i=i?(0,d.resolve)(l,i):o,e.preventDefault();var u=a.props.scroll;null==u&&(u=i.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](o,i,{shallow:a.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,s=t.as,a=(0,d.resolve)(e,n);return[a,s?(0,d.resolve)(e,s):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),w.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}w.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),s=n.href,a=n.as;"string"===typeof t&&(t=c.default.createElement("a",null,t));var r=c.Children.only(t),o={ref:function(t){e.handleRef(t),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(t):"object"===typeof r.ref&&(r.ref.current=t))},onMouseEnter:function(t){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(o.href=a||s),c.default.cloneElement(r,o)}}]),n}(c.Component);t.default=S},clbO:function(e,t,n){"use strict";t.a=[{id:1,type:"Sans Serif",name:"Dolce Vita",thumbnail:"/assets/images/Fonts/sans/dolce.png",donwload:"/assets/Zips/sans/dolce-vita.zip",default:"home"},{id:2,type:"Sans Serif",name:"Dream Orphans",thumbnail:"/assets/images/Fonts/sans/dream.png",donwload:"/assets/Zips/sans/dream-orphans.zip",default:"home"},{id:3,type:"Sans Serif",name:"Keep Calm",thumbnail:"/assets/images/Fonts/sans/keep.png",donwload:"/assets/Zips/sans/keep-calm-medium.zip",default:"home"},{id:4,type:"Sans Serif",name:"Lemon Milk",thumbnail:"/assets/images/Fonts/sans/lemon.png",donwload:"/assets/Zips/sans/lemon-milk.zip",default:"home"},{id:5,type:"Sans Serif",name:"Ailerons",thumbnail:"/assets/images/Fonts/sans/ailerons.png",donwload:"/assets/Zips/sans/ailerons.zip",default:"home"},{id:6,type:"Serif",name:"Goldoni",thumbnail:"/assets/images/Fonts/serif/goldoni.png",donwload:"/assets/Zips/serif/goldoni.zip",default:"home"},{id:7,type:"Serif",name:"Rufina",thumbnail:"/assets/images/Fonts/serif/rufina.png",donwload:"/assets/Zips/serif/rufina.zip",default:"home"},{id:8,type:"Serif",name:"Spinwerad",thumbnail:"/assets/images/Fonts/serif/spinwerad.png",donwload:"/assets/Zips/serif/spinwerad.zip",default:"home"},{id:9,type:"Serif",name:"Stowe",thumbnail:"/assets/images/Fonts/serif/stowe.png",donwload:"/assets/Zips/serif/stowe-titling.zip",default:"home"},{id:10,type:"Sans Serif",name:"Lombok",thumbnail:"/assets/images/Fonts/sans/lombok.png",donwload:"/assets/Zips/sans/Lombok-Font.zip",default:"home"}]}},[["W+FA",0,2,1,3]]]);