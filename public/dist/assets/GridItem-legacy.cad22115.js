!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.0cfd29b7.js","./Folder-legacy.ce784a0f.js","./index-legacy.148099bc.js","./useUtil-legacy.2d313c84.js","./index-legacy.fdae79ad.js","./ImageWithError-legacy.c3782457.js","./icon-legacy.2713e339.js","./Layout-legacy.0e65ff60.js"],(function(t){"use strict";var n,r,o,i,a,l,u,c,s,f,g,d,b,h,y,m,p,j,v,w,$,x,A,S,k;return{setters:[function(e){n=e.e,r=e.a3,o=e.ad,i=e.c,a=e.k,l=e.aA,u=e.V,c=e.v,s=e.az,f=e.aC,g=e.cs,d=e.ag,b=e.ac,h=e.S,y=e.bJ,m=e.ab,p=e.aL},function(e){j=e.b},function(e){v=e.u},function(e){w=e.d},function(e){$=e.p},function(e){x=e.I},function(e){A=e.g,S=e.O},function(e){k=e.M}],execute:function(){t("G",(function(t){if((0,w().isHide)(t.obj))return null;var I=v().setPathAs,M=n(o,{get color(){return r()},boxSize:"$12",get as(){return A(t.obj)}}),z=e(i(!1),2),C=z[0],E=z[1],O=a((function(){return l()&&(C()||t.obj.selected)})),L=j({id:1}).show;return n(k.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(u,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:c()}},as:$,get href(){return t.obj.name},onMouseEnter:function(){E(!0),I(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){E(!1)},onContextMenu:function(e){s((function(){f(!1),g(t.index,!0,!0)})),L(e,{props:t.obj})},get children(){return[n(d,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===S.IMAGE&&(e.stopPropagation(),e.preventDefault(),b.emit("gallery",t.obj.name))},pos:"relative",get children(){return[n(h,{get when(){return O()},get children(){return n(y,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){g(t.index,e.target.checked)}})}}),n(h,{get when(){return t.obj.thumb},fallback:M,get children(){return n(x,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(m,{size:"lg"})},fallbackErr:M,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),n(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})}))}}}))}();
