(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function A(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},V=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(R,(0,l.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},R=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,w=e.itemProp,y=e.loading,L=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,l.default)({opacity:I?1:0,transition:O?"opacity "+v+"ms":"none"},o),x="boolean"==typeof b?"lightgray":b,M={transitionDelay:v+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&M,{},o,{},f),P={title:t,alt:this.state.isVisible?"":a,style:z,className:m,itemProp:w};if(p){var T=p,W=g(p);return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),x&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&M)}),W.base64&&d.default.createElement(k,{ariaHidden:!0,src:W.base64,spreadProps:P,imageVariants:T,generateSources:N}),W.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,src:W.tracedSVG,spreadProps:P,imageVariants:T,generateSources:A}),this.state.isVisible&&d.default.createElement("picture",null,S(T),d.default.createElement(R,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,l.default)({alt:a,title:t,loading:y},W,{imageVariants:T}))}}))}if(h){var J=h,B=g(h),H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},n);return"inherit"===n.display&&delete H.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},x&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:x,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},O&&M)}),B.base64&&d.default.createElement(k,{ariaHidden:!0,src:B.base64,spreadProps:P,imageVariants:J,generateSources:N}),B.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,src:B.tracedSVG,spreadProps:P,imageVariants:J,generateSources:A}),this.state.isVisible&&d.default.createElement("picture",null,S(J),d.default.createElement(R,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,l.default)({alt:a,title:t,loading:y},B,{imageVariants:J}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:C,sizes:x,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var M=O;t.default=M},EocQ:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"id":"c55fb82e-840a-58c8-bfcf-1ffeb628b426","childImageSharp":{"id":"89230d65-9a2d-5cf8-aba4-bbe680014233","fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAAEmElEQVQ4y11VX0hbVxi/1r0ojM1N3CCibSeuDqWuVh9c3cMUOxS2MvChInNsswNffJhJjJpanKNip7GoGbKhlk3YQ1nt7GJoHetW8B8Fka3swTIVY6MmubnJTW5yk3vPt+87MVnqB5d77jnf+Z3f+X1/riAcs+zs7EwASH6+WFJSMmixWAJmszl07lzFKM7l0AL55OTkZB7fL1y58kVymDF39266Q2tXV9fO5uZTSNoztxv6+vr2srKy2pJOW1tbJ/BFjzA1PZ2YbGhoSAe60NLS8uiPPx8lceLhcJjF43EWVWNxmlheWYXLzc0r6PtectOHly4lMNKul19TUzM1M3MrBRSJRHXGGASDMpPlEPNLAdg/8Oi0Ftd0+PnOHairq5vFvaeew8o3GL7s/2ogKAUCBMRisVicgORQCAiIAA89XsADWADHqqqSn4aPTuOhoRthQ35+Lwc7efLU1ZXVVU5J1xkBsXBYQbAwC8oyc+8fgqJEQAoEQYlE+IEhlEDTNPCJfhYKhbkMK6trUFz8pl0wGo0SPw6NNqIDblDYwaEHVDWG8zpEo1E4bignCwSCnDnegmTQeq1WEAYGBugD9ZGICTtAB2KDN4Zf5uehqakJPF4vsQdMH2RRDA2NjfBg8TdAgYHYRo6Yj42N6YLVauWU99z7dEXAU4HAyYaHh0ll/t3T28vH3d09UF1dDTbbKPfhWqPONB4dHWWCyWwmccHrE0l87kTBIJucnOQgNN/a+gkfz9/7lbMnI4lISyJBGWWz2UAwd3VxQIwsixxppSgKf+MVOMiuaw+2t3fgfGUl/87NzQWn08mBSUMJ0ymqxuEbulHftWspwDieFpRDuMjTAibs33KAre3tVDA2NjagoKAACgsLOXOPT4RAMJiQaGQEhP7+/qMr+xgBebw+aETRP29rg7Pl5YD1yp1NJhNUVFTA1NQ0GAwGKC9/G6OvAuUhaU82Pj4OQk9PDwd07x8w0e/n7DBR4Y3TpwEbAzgcDu78w4+zUFVVBXl5eVBbWwt//f2EpxRZWFG4qhMTExgUUyIoGEnm90u0wNLzDeuXB4nepFkkovy/hpojASoE1F+FkRGbLmAaxKhIMJeo5ChqvBFQ3eLJXHTRL4EcDoEoJbTadImwuL7LgOkMswO8KBPV9/XBQaBOM39Um6qORkBYYsyHaUTOWL8QDCSAouIuwL9O+McdZTWWe+w75xMQRRFTHogU1NfXb1A5v47V8HBpeYVvQuoxLDtGqYPgXAK/EoLfnyFYYJdJw4VsZ64bPvj6Pvt0fIkDra+vQ3Nz8ypiFaSaYGZm5mednUbXrsuVal+kjx7XQIoqrGz2JrM+vA37N8uZPHYm7pcVuHH7MVh6rx7kvvJye3rTzkjriS+VlZUN2e12lfQkbTFpNR9Gv+ancXjt++uaLD3VYovdMGMf0t658C79El5NwzqRGpWWlqZ37bcuXnx/zuFYgBgy1GIac0XDzLR2H24tLEDL5Y8d6HM26VxxvvKF5/4rRUVFKbYdHR3pwI3t7e2PHQtOfW1pmZmMRhL9o+Si2dRJvhm8rxad4XP/AUg7ngLXKXWuAAAAAElFTkSuQmCC","width":269,"height":300,"src":"/static/a129882a9b5f25f835873597747130ea/b7312/new_logo.png","srcSet":"/static/a129882a9b5f25f835873597747130ea/b7312/new_logo.png 1x,\\n/static/a129882a9b5f25f835873597747130ea/4cc27/new_logo.png 1.5x"}}}}}')},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("Bl7J"),o=a("vrFN"),l=a("FqMQ"),d=(a("0mN4"),a("EocQ")),c=a("9eSz"),u=a.n(c),f=function(){var e=d.data;return i.a.createElement(u.a,{fixed:e.placeholderImage.childImageSharp.fixed})};t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(o.a,{title:"Home"}),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container logo centered"},i.a.createElement("div",{style:{display:"flex",alignItems:"left"}},i.a.createElement(f,{src:"/src/images/new_logo.png",alt:"logo",height:300}))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m12"},i.a.createElement("h1",{className:"header center "+l.baseColor+"-text"},"JSCraftCamp 2020"),i.a.createElement("h3",{className:"header center"},"Will return to Munich, July 10th - 11th 2020!"),i.a.createElement("h3",{className:"header center light"},"A BarCamp about JavaScript and Crafting Software"),i.a.createElement("h3",{className:"header center light"},i.a.createElement("a",{href:"/photos2018.html"},"Impressions from 2018"))))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m4 offset-m4"},i.a.createElement("h4",{className:"header center "+l.baseColor+"-text"},"Follow us on ",i.a.createElement("a",{href:"https://twitter.com/JSCraftCamp"},"Twitter ",i.a.createElement("img",{src:"img/twitter.png",alt:"twitter logo",style:{width:25}}))),i.a.createElement("p",{style:{textAlign:"center"}},"Be the first to know informations about JSCC20!")))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row flow-text"},i.a.createElement("div",{className:"col s12 m6"},i.a.createElement("h5",{className:"header center"},"JavaScript"),i.a.createElement("p",{className:"block"},"The focus of this BarCamp are JavaScript and related technologies. Possible topics are: Popular frameworks like Angular and React, the latest ECMAScript standard, languages like Elm or TypeScript which transpile to JavaScript, server-side programming with node.js, paradigms like event driven programming or future technologies like WebAssembly.")),i.a.createElement("div",{className:"col s12 m6"},i.a.createElement("h5",{className:"header center"},"Crafting Software"),i.a.createElement("p",{className:"block"},"Have you ever struggled with an huge old JavaScript codebase? Or rolled your eyes about an ",i.a.createElement("code",null,"'undefined' is not a function")," error? We will discuss which tools, practices and architecture patterns – from continuous integration to modular components – can help to create and maintain long-living, evolvable JavaScript applications."))),i.a.createElement("div",{className:"row flow-text"},i.a.createElement("div",{className:"col s12 m6"},i.a.createElement("h5",{className:"header center"},"BarCamp"),i.a.createElement("p",{className:"block"},"A barcamp – also called an unconference – is an event without any previously fixed agenda. All the participants meet in the morning and decide about the schedule for the day. Everyone can offer a session - from a short hands-on workshop to moderating a discussion. The goal is to make everything as participative as possible. Read more ",i.a.createElement("a",{target:"_blank",href:"https://en.wikipedia.org/wiki/Unconference"},"about BarCamp on Wikipedia"),".")),i.a.createElement("div",{className:"col s12 m6"},i.a.createElement("h5",{className:"header center"},"How to register?"),i.a.createElement("p",{className:"block"},"Attendance is ",i.a.createElement("strong",null,"free of charge")," and we encourage to sign up in advance. Registration happens by submitting your name and some other information via ",i.a.createElement("a",{href:"http://stackoverflow.com/questions/14680711/how-to-do-a-github-pull-request",target:"_blank"},"Pull Request"),". More infos and explanations can be found on the ",i.a.createElement(n.Link,{to:"registration"},"Registration Page.")))),!1,i.a.createElement("a",{name:"schedule"}),!1,!1,i.a.createElement("a",{name:"location"}),!1)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-057b1e40c7f6fa882a56.js.map