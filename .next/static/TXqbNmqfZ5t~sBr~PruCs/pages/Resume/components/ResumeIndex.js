(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});r(400);var n=r(13),a=r(0),o=r.n(a),i=r(10),s=r.n(i),c=r(35);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var r,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["PureComponent"]),r=t,(i=[{key:"render",value:function(){return o.a.createElement("div",{className:"resume-index-wrapper"},o.a.createElement("div",{className:"avatar-wrapper"},o.a.createElement("img",{src:"/images/resume/avatar.jpg",className:"avatar",alt:"avatar"})),o.a.createElement("div",{className:"name-wrapper"},o.a.createElement("h1",{className:"name"},n.h.Name)),o.a.createElement("div",{className:"signature-wrapper"},o.a.createElement("p",{className:"signature"},n.h.Signature)),o.a.createElement("div",{className:"social-accounts-wrapper"},o.a.createElement("ul",{className:"social-accounts"},n.g.map(function(e){var t=e.type,r=e.icon,n=e.link;return o.a.createElement("li",{className:s()("social-account","social-account-".concat(t)),key:t},o.a.createElement(c.a,{src:"/images/resume/circle.svg",className:"social-account-circle"}),o.a.createElement("a",{className:"account-link",href:n,target:"_blank",rel:"noopener noreferrer external nofollow"},o.a.createElement(c.a,{src:r})))}))))}}])&&u(r.prototype,i),l&&u(r,l),t}()},35:function(e,t,r){"use strict";var n=r(90),a=r.n(n),o=r(91),i=r.n(o),s=r(92),c=r.n(s),l=function(e){return e.cloneNode(!0)},u={},f=[],p=function(e,t){f[e]=f[e]||[],f[e].push(t)},m=function(e,t){var r="file:"===window.location.protocol;if(void 0!==u[e])u[e]instanceof SVGSVGElement?t(l(u[e])):p(e,t);else{if(!window.XMLHttpRequest)return t("Browser does not support XMLHttpRequest"),!1;u[e]={},p(e,t);var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){if(404===n.status||null===n.responseXML)return t("Unable to load SVG file: "+e),r&&t("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),t(),!1;if(!(200===n.status||r&&0===n.status))return t("There was a problem injecting the SVG: "+n.status+" "+n.statusText),!1;if(n.responseXML instanceof Document)u[e]=n.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var a;try{a=(new DOMParser).parseFromString(n.responseText,"text/xml")}catch(e){a=void 0}if(!a||a.getElementsByTagName("parsererror").length)return t("Unable to parse SVG file: "+e),!1;u[e]=a.documentElement}!function(e){for(var t=0,r=f[e].length;t<r;t++)!function(t){setTimeout(function(){f[e][t](l(u[e]))},0)}(t)}(e)}},n.open("GET",e),n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()}},d=function(e){for(var t={},r=(e=e.split(" ")).length,n=[];r--;)t.hasOwnProperty(e[r])||(t[e[r]]=1,n.unshift(e[r]));return n.join(" ")},v="http://www.w3.org/1999/xlink",h=[],y={},g=0,b=function(e,t,r,n,a){var o=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),i=e.getAttribute("data-src")||e.getAttribute("src");if(/\.svg/i.test(i))if(o)-1===h.indexOf(e)&&(h.push(e),e.setAttribute("src",""),m(i,function(r){if(void 0===r||"string"==typeof r)return a(r),!1;var o=e.getAttribute("id");o&&r.setAttribute("id",o);var s=e.getAttribute("title");s&&r.setAttribute("title",s);var c=[].concat(r.getAttribute("class")||[],"injected-svg",e.getAttribute("class")||[]).join(" ");r.setAttribute("class",d(c));var l=e.getAttribute("style");l&&r.setAttribute("style",l);var u=[].filter.call(e.attributes,function(e){return/^data-\w[\w-]*$/.test(e.name)});if(Array.prototype.forEach.call(u,function(e){e.name&&e.value&&r.setAttribute(e.name,e.value)}),n){var f,p,m,b,w,S={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(S).forEach(function(e){f=e,m=S[e];for(var t=0,n=(p=r.querySelectorAll("defs "+f+"[id]")).length;t<n;t++){var a;b=p[t].id,w=b+"-"+g,Array.prototype.forEach.call(m,function(e){for(var t=0,n=(a=r.querySelectorAll("["+e+'*="'+b+'"]')).length;t<n;t++)a[t].setAttribute(e,"url(#"+w+")")});for(var o=r.querySelectorAll("[*|href]"),i=[],s=0,c=o.length;s<c;s++)o[s].getAttributeNS(v,"href").toString()==="#"+p[t].id&&i.push(o[s]);for(var l=0,u=i.length;l<u;l++)i[l].setAttributeNS(v,"href","#"+w);p[t].id=w}})}r.removeAttribute("xmlns:a");for(var E,A,j=r.querySelectorAll("script"),k=[],x=0,N=j.length;x<N;x++)(A=j[x].getAttribute("type"))&&"application/ecmascript"!==A&&"application/javascript"!==A||(E=j[x].innerText||j[x].textContent,k.push(E),r.removeChild(j[x]));if(k.length>0&&("always"===t||"once"===t&&!y[i])){for(var O=0,G=k.length;O<G;O++)new Function(k[O])(window);y[i]=!0}var C=r.querySelectorAll("style");Array.prototype.forEach.call(C,function(e){e.textContent+=""}),r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r.setAttribute("xmlns:xlink",v),e.parentNode.replaceChild(r,e),delete h[h.indexOf(e)],e=null,g++,a(r)}));else{var s=e.getAttribute("data-fallback")||e.getAttribute("data-png");s?(e.setAttribute("src",s),a(null)):r?(e.setAttribute("src",r+"/"+i.split("/").pop().replace(".svg",".png")),a(null)):a("This browser does not support SVG and no PNG fallback was defined.")}else a("Attempted to inject a file with a non-svg extension: "+i)},w=function(e,t,r){var n=void 0===t?{}:t,a=n.evalScripts,o=void 0===a?"always":a,i=n.pngFallback,s=void 0!==i&&i,c=n.each,l=n.renumerateIRIElements,u=void 0===l||l;if(void 0!==e.length){var f=0;Array.prototype.forEach.call(e,function(t){b(t,o,s,u,function(t){c&&"function"==typeof c&&c(t),r&&e.length===++f&&r(f)})})}else e?b(e,o,s,u,function(t){c&&"function"==typeof c&&c(t),r&&r(1),e=null}):r&&r(0)},S=(r(1),r(0)),E=r(152),A=r.n(E),j=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).container=void 0,t.refCallback=function(e){t.container=e},t}c()(t,e);var r=t.prototype;return r.renderSVG=function(){if(this.container instanceof Node){var e=this.props,t=e.evalScripts,r=e.onInjected,n=e.renumerateIRIElements,a=e.src,o=e.svgClassName,i=e.svgStyle,s=document.createElement("div");s.innerHTML=A.a.renderToStaticMarkup(Object(S.createElement)("div",null,Object(S.createElement)("div",{className:o,"data-src":a,style:i})));var c=this.container.appendChild(s.firstChild);w(c.firstChild,{each:r,evalScripts:t,renumerateIRIElements:n})}},r.removeSVG=function(){this.container instanceof Node&&this.container.firstChild instanceof Node&&this.container.removeChild(this.container.firstChild)},r.componentDidMount=function(){this.renderSVG()},r.componentDidUpdate=function(){this.removeSVG(),this.renderSVG()},r.componentWillUnmount=function(){this.removeSVG()},r.render=function(){var e=this.props,t=(e.evalScripts,e.onInjected,e.renumerateIRIElements,e.src,e.svgClassName,e.svgStyle,i()(e,["evalScripts","onInjected","renumerateIRIElements","src","svgClassName","svgStyle"]));return Object(S.createElement)("div",a()({},t,{ref:this.refCallback}))},t}(S.Component);j.defaultProps={evalScripts:"never",onInjected:function(){},renumerateIRIElements:!0,svgClassName:null,svgStyle:{}},j.propTypes={};t.a=j},885:function(e,t,r){__NEXT_REGISTER_PAGE("/Resume/components/ResumeIndex",function(){return e.exports=r(148),{page:e.exports.default}})},90:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},91:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}},92:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}}},[[885,0,1,2]]]);