(this["webpackJsonpgnome-app"]=this["webpackJsonpgnome-app"]||[]).push([[0],{132:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(22),o=t.n(i),c=t(3),l=t(2),u=t(151),s=t(16),d=Object(s.a)(),f={home:"/"},m=t(32),b=t.n(m),p=t(21),g=t(59),h=t(60),x=t.n(h),v=Object(l.selector)({key:"currentData",get:function(){var e=Object(g.a)(b.a.mark((function e(){var n,t,r,a,i,o,c,l,u,s,d,f;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");case 2:return n=e.sent,t=n.data,r=void 0===t?{}:t,a=Object.keys(r),i=new Set,o=new Set,c="",l="",u="",s=0,d=0,f=0,a.forEach((function(e){return r[e].forEach((function(e){var n=e.hair_color,t=e.professions,r=e.age,a=e.height,m=e.weight;r>s&&(s=r),a>f&&(f=a),m>d&&(d=m),(""===c||r<c)&&(c=r),(""===u||a<u)&&(u=a),(""===l||m<l)&&(l=m),i.add(n),o=new Set([].concat(Object(p.a)(o),Object(p.a)(t)))}))})),e.abrupt("return",{data:r,hairFilter:Array.from(i),proffesionFilter:Array.from(o),locationFilters:a,ageFilters:{min:c,max:s},heightFilters:{min:u,max:f},weightFilters:{min:l,max:d}});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),w=t(61),y=t.n(w),j=Object(l.atom)({key:"dataState",default:{}}),E=(Object(l.atom)({key:"locationFilterState",default:[]}),Object(l.atom)({key:"filteredLocationState",default:""})),O=Object(l.atom)({key:"filteredHairState",default:""}),k=Object(l.atom)({key:"filteredProfessionsState",default:[]}),F=Object(l.atom)({key:"filteredAgeState",default:[]}),z=Object(l.atom)({key:"filteredHeightState",default:[]}),S=Object(l.atom)({key:"filteredWeightState",default:[]}),R=Object(l.selector)({key:"dataFiltered",get:function(e){var n=e.get,t=n(v),r=t.data,a=t.ageFilters,i=t.weightFilters,o=t.heightFilters,c=n(E);if(!c)return[];var l=r[c],u=n(O),s=n(k),d=n(F),f=n(z),m=n(S);return u&&(l=l.filter((function(e){return e.hair_color===u}))),y.a.isEmpty(s)||(l=l.filter((function(e){var n=e.professions,t=void 0===n?[]:n;return s.some((function(e){return t.includes(e)}))}))),d[0]===a.min&&d[1]===a.max||(l=l.filter((function(e){var n=e.age;return n>d[0]&&n<d[1]}))),f[0]===o.min&&f[1]===o.max||(l=l.filter((function(e){var n=e.height;return n>f[0]&&n<f[1]}))),m[0]===i.min&&m[1]===i.max||(l=l.filter((function(e){var n=e.weight;return n>m[0]&&n<m[1]}))),l}}),V=t(6),P=function(e){var n=e.fill,t=e.className;return a.a.createElement("svg",{className:t,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z",fill:n}))};P.defaultProps={fill:"#17C15B",className:""};var C=P,L=t(62),D=t(63),A=t(74),H=t(75),N=function(e){Object(H.a)(t,e);var n=Object(A.a)(t);function t(e){var r;return Object(L.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(D.a)(t,[{key:"render",value:function(){var e=this.state.hasError,n=this.props,t=n.fallback,r=n.children;return e?t:r}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(a.a.Component);N.defaultProps={fallback:a.a.createElement(a.a.Fragment,null),children:a.a.createElement(a.a.Fragment,null)};var q=N,B=t(4);function T(){var e=Object(B.a)(["\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n"]);return T=function(){return e},e}function I(){var e=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return I=function(){return e},e}function _(){var e=Object(B.a)(["\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  background: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-right: 1rem;\n"]);return _=function(){return e},e}var W=c.c.div(_(),(function(e){return e.src})),Y=c.c.div(I()),M=c.c.div(T()),J=t(67),K=t.n(J),U=t(68),Z=t.n(U),G=t(69),Q=t.n(G),X=t(70),$=t.n(X),ee=t(71),ne=t.n(ee),te=t(72),re=t.n(te),ae=[{name:"Hawk",src:K.a},{name:"Uravity",src:Z.a},{name:"Spiderman",src:Q.a},{name:"Creati",src:$.a},{name:"Batman",src:ne.a},{name:"Wonderwoman",src:re.a}],ie=function(){var e=Math.floor(Math.random()*ae.length);return ae[e]}(),oe=ie.name,ce=ie.src,le=function(){return a.a.createElement(Y,null,a.a.createElement(W,{src:ce}),a.a.createElement(M,null,oe))},ue=t(152),se=t(154),de=t(148);function fe(){var e=Object(B.a)(["\n  width: 14rem;\n  margin: 0 auto;\n"]);return fe=function(){return e},e}function me(){var e=Object(B.a)(["\n  display: flex;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  align-items: center;\n  transition: all 0.2s;\n\n  &.selected {\n    background-color: #eaeaea;\n    &:hover {\n      background-color: #eaeaea;\n    }\n\n    .icon-arrow {\n      opacity: 1;\n    }\n  }\n\n  :hover {\n    background-color: #eaeaea;\n\n    .icon-arrow {\n      opacity: 1;\n    }\n  }\n"]);return me=function(){return e},e}function be(){var e=Object(B.a)(["\n  transition: all 0.2s;\n  padding: 0;\n"]);return be=function(){return e},e}function pe(){var e=Object(B.a)(["\n  text-align: left;\n  border-radius: 0 0 8px 8px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-height: 14rem;\n  overflow-y: scroll;\n  background: #fff;\n  display: ",";\n\n  :hover {\n    .selected {\n      background-color: #fff;\n    }\n  }\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  .icon-arrow {\n    opacity: 0;\n    transition: all 0.2s;\n    margin: 3px 10px;\n    display: inline-block;\n  }\n"]);return pe=function(){return e},e}function ge(){var e=Object(B.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 1rem;\n\n  @media screen and (max-width: 991px) {\n    /* start of large tablet styles */\n  }\n\n  @media screen and (max-width: 767px) {\n    /* start of medium tablet styles */\n  }\n\n  @media screen and (max-width: 479px) {\n    /* start of phone styles */\n  }\n"]);return ge=function(){return e},e}var he=Object(de.a)((function(){return{button:{margin:"0 auto",width:"100%",textAlign:"left",fontFamily:"Inter"}}})),xe=c.c.div(ge()),ve=c.c.div(pe(),(function(e){return e.display})),we=c.c.div(be()),ye=c.c.div(me()),je=c.c.div(fe()),Ee=function(){var e=he(),n=Object(r.useState)("none"),t=Object(V.a)(n,2),i=t[0],o=t[1],c=Object(l.useRecoilValue)(v).locationFilters,u=Object(l.useRecoilState)(E),s=Object(V.a)(u,2),d=s[0],f=s[1];Object(r.useEffect)((function(){f(c[0])}),[c]);return a.a.createElement(xe,null,a.a.createElement(je,null,a.a.createElement(ue.a,{endIcon:a.a.createElement(se.a,{width:"24",height:"24"}),"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(){o("block")},className:e.button},d),a.a.createElement("div",{style:{height:0,border:"1px solid ".concat("none"===i?"#fff":"rgba(51, 51, 51, 0.24)"),position:"relative"}},a.a.createElement(ve,{display:i},c.map((function(e){return a.a.createElement(ye,{key:e,onClick:function(){return function(e){e!==d&&f(e),o("none")}(e)}},a.a.createElement(we,{padding:"8px 0"},e),a.a.createElement(C,{className:"icon-arrow"}))}))))),a.a.createElement(le,null))};function Oe(){var e=Object(B.a)(["\n  width: 100%;\n  border-radius: 8px;\n  font-weight: bold;\n  font-size: 1.2rem;\n  cursor: pointer;\n  text-align: center;\n  transition: all 0.2s;\n  padding: 1rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: ",";\n\n  :hover {\n    background-color: ",";\n  }\n"]);return Oe=function(){return e},e}function ke(){var e=Object(B.a)(["\n  border-radius: 8px;\n  background-color: ",";\n  color: ",";\n  width: 21%;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);\n  transition: all 0.2s;\n  overflow-y: scroll;\n  cursor: ",";\n  margin: 1rem;\n  height: 10rem;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  :hover {\n    transform: ",";\n    box-shadow: ",";\n  }\n\n  :active {\n    transform: ",";\n    box-shadow: ",";\n  }\n\n  @media screen and (max-width: 1320px) {\n    width: 30%;\n  }\n\n  @media screen and (max-width: 991px) {\n    width: 38%;\n    margin: 0.75rem;\n  }\n\n  @media screen and (max-width: 767px) {\n    width: 45%;\n    margin: 0.5rem;\n  }\n\n  @media screen and (max-width: 479px) {\n    width: 80%;\n  }\n"]);return ke=function(){return e},e}var Fe=c.c.div(ke(),(function(e){return e.theme.colors[e.color]}),(function(e){return e.theme.colors.white}),(function(e){return e.focused?"":"pointer"}),(function(e){return e.focused?null:"translateY(-2px)"}),(function(e){return e.focused?null:"0 6px 10px rgba(51, 51, 51, 0.2)"}),(function(e){return e.focused?null:"translate(-1px)"}),(function(e){return e.focused?null:"0 2px 6px rgba(51, 51, 51, 0.4)"})),ze=c.c.div(Oe(),(function(e){return e.marginTop}),(function(e){return e.focused?"rgba(51, 51, 51, 0.1)":""})),Se=function(e){var n=e.color,t=e.value,i=e.type,o=e.filters,c=e.setValue,l=Object(r.useState)(!1),u=Object(V.a)(l,2),s=u[0],d=u[1],f=Object(r.useRef)(),m=function(){return d(!1)};return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};Object(r.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&n()}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,n])}(f,m),a.a.createElement(Fe,{ref:f,color:n,onClick:function(){return d(!0)},focused:s},s?o.map((function(e){return a.a.createElement(ze,{onClick:function(n){return function(e,n){n.stopPropagation(),c(e),m()}(e,n)},focused:s,key:e},e)})):a.a.createElement(ze,{marginTop:"3.2rem",focused:s},""===t?i:t))};Se.defaultProps={color:"black",value:"",type:"",filters:[],setValue:function(){}};var Re=Se,Ve=t(153);function Pe(){var e=Object(B.a)(["\n  width: 100%;\n  border-radius: 8px;\n  font-weight: bold;\n  font-size: 1.2rem;\n  cursor: pointer;\n  text-align: center;\n  transition: all 0.2s;\n  padding: 1rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: ",";\n\n  :hover {\n    background-color: ",";\n  }\n"]);return Pe=function(){return e},e}function Ce(){var e=Object(B.a)(["\n  border-radius: 8px;\n  background-color: ",";\n  color: ",";\n  width: 21%;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);\n  transition: all 0.2s;\n  overflow-y: scroll;\n  height: 10rem;\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  .slider {\n    width: 75%;\n    margin: auto;\n    font-family: Inter;\n    color: ",";\n  }\n\n  @media screen and (max-width: 1320px) {\n    width: 30%;\n  }\n\n  @media screen and (max-width: 991px) {\n    width: 38%;\n    margin: 0.75rem;\n  }\n\n  @media screen and (max-width: 767px) {\n    width: 45%;\n    margin: 0.5rem;\n  }\n\n  @media screen and (max-width: 479px) {\n    width: 80%;\n  }\n"]);return Ce=function(){return e},e}var Le=c.c.div(Ce(),(function(e){return e.theme.colors[e.color]}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.black})),De=c.c.div(Pe(),(function(e){return e.marginTop}),(function(e){return e.focused?"rgba(51, 51, 51, 0.1)":""})),Ae=function(e){var n=e.color,t=e.value,i=e.type,o=e.filters,c=e.setValue,l=o.min,u=o.max,s=Object(r.useState)([l,u]),d=Object(V.a)(s,2),f=d[0],m=d[1],b=function(e,n){var t=Object(r.useState)(e),a=Object(V.a)(t,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){var t=setTimeout((function(){o(e)}),n);return function(){clearTimeout(t)}}),[e,n]),i}(f,250);Object(r.useEffect)((function(){b!==t&&c(b)}),[b]);var p=function(){switch(i){case"Age":return"years";case"Height":return"Cm";case"Weight":return"Kg";default:return""}}(),g=[{value:l,label:"".concat(l," ").concat(p)},{value:u,label:"".concat(u," ").concat(p)}];return a.a.createElement(Le,{color:n},a.a.createElement(De,null,i),a.a.createElement(Ve.a,{color:"secondary",value:f,onChange:function(e,n){m(n)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:function(e){return"".concat((n=e,Number.parseFloat(n).toFixed(2))," ").concat(p);var n},min:l,max:u,marks:g,step:1,className:"slider"}))};Ae.defaultProps={color:"black",value:[0,100],type:"",filters:{},setValue:function(){}};var He=Ae,Ne=t(73),qe=t(150);function Be(){var e=Object(B.a)(["\n  margin: 1.5rem 0;\n  justify-content: center;\n"]);return Be=function(){return e},e}function Te(){var e=Object(B.a)(["\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return Te=function(){return e},e}function Ie(){var e=Object(B.a)(["\n  font-size: 0.75rem;\n  padding-top: 0.5rem;\n"]);return Ie=function(){return e},e}function _e(){var e=Object(B.a)(["\n  color: ",";\n"]);return _e=function(){return e},e}function We(){var e=Object(B.a)(["\n  font-weight: 500;\n"]);return We=function(){return e},e}function Ye(){var e=Object(B.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin: 1rem 0;\n"]);return Ye=function(){return e},e}function Me(){var e=Object(B.a)(["\n  background: #ffffff;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n  width: 20rem;\n  padding: 1rem;\n  margin: 0 1.25rem 1.5rem;\n"]);return Me=function(){return e},e}var Je=c.c.div(Me()),Ke=c.c.div(Ye()),Ue=c.c.div(We()),Ze=c.c.div(_e(),(function(e){return e.theme.colors.gray40l})),Ge=Object(c.c)(Ze)(Ie()),Qe=c.c.div(Te(),(function(e){return e.src})),Xe=Object(c.c)(Ke)(Be());function $e(e){var n=e.imageSrc,t=Object(Ne.useImage)({srcList:n}).src;return a.a.createElement(Qe,{src:t})}$e.defaultProps={imageSrc:""};var en=function(e){var n=e.name,t=e.age,i=e.friends,o=e.hair,c=e.height,l=e.professions,u=e.thumbnail,s=e.weight,d=e.refProp,f=function(e){return Number.parseFloat(e).toFixed(2)};return a.a.createElement(Je,{ref:d},a.a.createElement(Ke,null,a.a.createElement(Ue,null,n),a.a.createElement(Ze,null,t,"y")),a.a.createElement(Xe,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(qe.a,{variant:"circle",width:80,height:80})},a.a.createElement($e,{imageSrc:u}))),a.a.createElement(Ke,null,a.a.createElement(Ge,null,"Hair: ",o),a.a.createElement(Ge,null,"Height: ",f(c)),a.a.createElement(Ge,null,"Weight: ",f(s))),a.a.createElement(Ke,{style:{flexDirection:"column"}},a.a.createElement(Ze,{style:{paddingTop:"0.5rem"}},"Proffessions:"),a.a.createElement(Ge,null,l.join(", "))),a.a.createElement(Ke,{style:{flexDirection:"column"}},a.a.createElement(Ze,{style:{paddingTop:"0.5rem"}},"Friends:"),a.a.createElement(Ge,null,i.join(", "))))};en.defaultProps={name:"",age:0,friends:[],hair:"",height:0,professions:[],thumbnail:"",weight:0,refProp:function(){}};var nn=en;function tn(){var e=Object(B.a)(["\n  margin: 1.5rem 0;\n  justify-content: center;\n"]);return tn=function(){return e},e}function rn(){var e=Object(B.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin: 1rem 0;\n"]);return rn=function(){return e},e}function an(){var e=Object(B.a)(["\n  background: #ffffff;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n  width: 20rem;\n  padding: 1rem;\n  margin: 0 1.25rem 1.5rem;\n"]);return an=function(){return e},e}var on=c.c.div(an()),cn=c.c.div(rn()),ln=Object(c.c)(cn)(tn()),un=function(){return a.a.createElement(on,null,a.a.createElement(cn,null,a.a.createElement(qe.a,{variant:"text",width:60}),a.a.createElement(qe.a,{variant:"text",width:60})),a.a.createElement(ln,null,a.a.createElement(qe.a,{variant:"circle",width:80,height:80})),a.a.createElement(cn,null,a.a.createElement(qe.a,{variant:"text",width:60}),a.a.createElement(qe.a,{variant:"text",width:60}),a.a.createElement(qe.a,{variant:"text",width:60})),a.a.createElement(cn,{style:{flexDirection:"column"}},a.a.createElement(qe.a,{variant:"rect",width:288,height:55})),a.a.createElement(cn,{style:{flexDirection:"column"}},a.a.createElement(qe.a,{variant:"rect",width:288,height:55})))};function sn(){var e=Object(B.a)(["\n  border-radius: 8px;\n  background-color: ",";\n  color: ",";\n  width: 21%;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);\n  transition: all 0.2s;\n  overflow-y: scroll;\n  cursor: ",";\n  margin: 1rem;\n  height: 10rem;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (max-width: 1320px) {\n    width: 30%;\n  }\n\n  @media screen and (max-width: 991px) {\n    width: 38%;\n    margin: 0.75rem;\n  }\n\n  @media screen and (max-width: 767px) {\n    width: 45%;\n    margin: 0.5rem;\n  }\n\n  @media screen and (max-width: 479px) {\n    width: 80%;\n  }\n"]);return sn=function(){return e},e}var dn=c.c.div(sn(),(function(e){return e.theme.colors[e.color]}),(function(e){return e.theme.colors.white}),(function(e){return e.focused?"":"pointer"})),fn=function(e){var n=e.color;return a.a.createElement(dn,{color:n},a.a.createElement(qe.a,{variant:"text",width:"80%",style:{margin:"2rem 0 0 1rem"}}),a.a.createElement(qe.a,{variant:"text",width:"80%",style:{margin:"2rem 0 0 1rem"}}))};fn.defaultProps={color:"black"};var mn=fn,bn=function(){var e=Object(l.useRecoilState)(O),n=Object(V.a)(e,2),t=n[0],r=n[1],i=Object(l.useRecoilValue)(v).hairFilter;return a.a.createElement(Re,{type:"Hair",value:t,setValue:r,filters:i,color:"verdigris"})},pn=function(){var e=Object(l.useRecoilState)(k),n=Object(V.a)(e,2),t=n[0],r=n[1],i=Object(l.useRecoilValue)(v).proffesionFilter,o=t.join(", ");return a.a.createElement(Re,{type:"Profession",value:o,setValue:function(e){t.find((function(n){return e===n}))?r(t.filter((function(n){return e!==n}))):r([].concat(Object(p.a)(t),[e]))},filters:i,color:"cgBlue"})},gn=function(){var e=Object(l.useRecoilState)(F),n=Object(V.a)(e,2),t=n[0],i=n[1],o=Object(l.useRecoilValue)(v).ageFilters;return Object(r.useEffect)((function(){var e=o.min,n=o.max;i([e,n])}),[o,i]),a.a.createElement(He,{type:"Age",value:t,setValue:function(e){return i(e)},filters:o,color:"LightYellow"})},hn=function(){var e=Object(l.useRecoilState)(z),n=Object(V.a)(e,2),t=n[0],i=n[1],o=Object(l.useRecoilValue)(v).heightFilters;return Object(r.useEffect)((function(){var e=o.min,n=o.max;i([e,n])}),[o,i]),a.a.createElement(He,{type:"Height",value:t,setValue:i,filters:o,color:"peachPuff"})},xn=function(){var e=Object(l.useRecoilState)(S),n=Object(V.a)(e,2),t=n[0],i=n[1],o=Object(l.useRecoilValue)(v).weightFilters;return Object(r.useEffect)((function(){var e=o.min,n=o.max;i([e,n])}),[o,i]),a.a.createElement(He,{type:"Weight",value:t,setValue:i,filters:o,color:"bittersweet"})},vn=[1,2,3,4,5,6,7,8,9,10],wn=function(){var e=Object(r.useState)([]),n=Object(V.a)(e,2),t=n[0],i=n[1],o=Object(r.useState)(1),c=Object(V.a)(o,2),u=c[0],s=c[1],d=Object(r.useState)(1),f=Object(V.a)(d,2),m=f[0],b=f[1],g=Object(r.useState)(!0),h=Object(V.a)(g,2),x=h[0],v=h[1],w=Object(l.useRecoilValue)(R),y=Object(r.useRef)(),j=Object(r.useCallback)((function(e){m||(y.current&&y.current.disconnect(),y.current=new IntersectionObserver((function(e){e[0].isIntersecting&&x&&s((function(e){return e+1}))})),e&&y.current.observe(e))}),[m,x]);return Object(r.useEffect)((function(){i([]),s(1)}),[w]),Object(r.useEffect)((function(){b(!0);var e=w.slice(20*(u-1),20*u);setTimeout((function(){i((function(n){var t=e.filter((function(e){var t=e.id;return!n.map((function(e){return e.id})).some((function(e){return e===t}))}));return[].concat(Object(p.a)(n),Object(p.a)(t))})),v(e.length>0),b(!1)}),300)}),[u,w]),a.a.createElement(a.a.Fragment,null,t.map((function(e,n){var r=e.age,i=e.friends,o=e.hair_color,c=e.height,l=e.id,u=e.name,s=e.professions,d=e.thumbnail,f=e.weight;return a.a.createElement(nn,{age:r,friends:i,hair:o,height:c,key:l,name:u,professions:s,thumbnail:d,weight:f,refProp:t.length===n+1?j:null})})),m&&vn.map((function(e){return a.a.createElement(un,{key:e})})))};function yn(){var e=Object(B.a)(["\n  justify-content: space-evenly;\n"]);return yn=function(){return e},e}function jn(){var e=Object(B.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 5rem 2rem;\n  flex-wrap: wrap;\n\n  @media screen and (max-width: 991px) {\n    padding: 4rem 2rem;\n  }\n\n  @media screen and (max-width: 767px) {\n    padding: 3rem 1.5rem;\n  }\n\n  @media screen and (max-width: 479px) {\n    padding: 2rem 1rem;\n  }\n"]);return jn=function(){return e},e}var En=c.c.div(jn()),On=Object(c.c)(En)(yn()),kn=function(){var e=Object(l.useRecoilValue)(v).data,n=Object(l.useSetRecoilState)(j);return Object(r.useEffect)((function(){n(e)}),[e,n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Ee,null),a.a.createElement(En,null,a.a.createElement(bn,null),a.a.createElement(pn,null),a.a.createElement(gn,null),a.a.createElement(hn,null),a.a.createElement(xn,null)),a.a.createElement(On,null,a.a.createElement(wn,null)))};function Fn(){var e=Object(B.a)(["\n  justify-content: space-evenly;\n"]);return Fn=function(){return e},e}function zn(){var e=Object(B.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 160px 2rem;\n  flex-wrap: wrap;\n\n  @media screen and (max-width: 991px) {\n    padding: 4rem 2rem;\n  }\n\n  @media screen and (max-width: 767px) {\n    padding: 3rem 1.5rem;\n  }\n\n  @media screen and (max-width: 479px) {\n    padding: 2rem 1rem;\n  }\n"]);return zn=function(){return e},e}var Sn=c.c.div(zn()),Rn=Object(c.c)(Sn)(Fn()),Vn=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],Pn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Sn,null,a.a.createElement(mn,{color:"verdigris"}),a.a.createElement(mn,{color:"cgBlue"}),a.a.createElement(mn,{color:"LightYellow"}),a.a.createElement(mn,{color:"peachPuff"}),a.a.createElement(mn,{color:"bittersweet"})),a.a.createElement(Rn,null,Vn.map((function(e){return a.a.createElement(un,{key:e})}))))},Cn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.c,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(Pn,null)},a.a.createElement(u.a,{path:f.home,component:kn}))))};function Ln(){var e=Object(B.a)(['\n  body {\n    background-color: white;\n    padding:0;\n    margin:0;\n    font-family: Inter;\n  }\n\n/* Normalize */\n  a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;outline:0}button:focus,input:focus,select:focus,textarea:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\'\';content:none}table{border-collapse:collapse;border-spacing:0}strong{}a{text-decoration:none}textarea{resize:none}.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}* html .clearfix{height:1%}.clearfix{display:block}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}body{-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-text-size-adjust: 100%;}a.active,a.focus,a.visited,a.hover{ text-decoration: none; }\n*:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\n\n/* Form reset */\ninput,label,select,button,textarea{margin:0;border:0;padding:0;display:inline-block;vertical-align:middle;white-space:normal;background:none;line-height:1;font-size:13px;font-family:Arial}input:focus{outline:0}input,textarea{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}button,input[type=reset],input[type=button],input[type=submit],input[type=checkbox],input[type=radio],select{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type=checkbox],input[type=radio]{width:13px;height:13px}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}::-webkit-search-decoration{display:none}button,input[type="reset"],input[type="button"],input[type="submit"]{overflow:visible;width:auto}::-webkit-file-upload-button{padding:0;border:0;background:none}textarea{vertical-align:top;overflow:auto}select[multiple]{vertical-align:top}input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display: none;}input,label,select,button,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-border-radius: 0;-moz-border-radius: 0; border-radius: 0;}input[type=range]{-webkit-appearance: none; width: 100%;}input[type=range]::-webkit-slider-thumb {-webkit-appearance: none;}input[type=range]:focus{outline: none;}input[type=range]::-ms-track {width:100%; cursor: pointer; background: transparent; border-color: transparent; color: transparent; }\n\n  input[type=number]::-webkit-inner-spin-button,\n  input[type=number]::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n']);return Ln=function(){return e},e}var Dn=Object(c.b)(Ln()),An={colors:{cgBlue:"#0081A7",verdigris:"#00AFB9",LightYellow:"#FDFCDC",peachPuff:"#FED9B7",bittersweet:"#F07167",white:"#ffffff",black:"#333333",gray40l:"#666666",gray:"#4D4D4D",gray99l:"#FCFCFC"}},Hn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Dn,null),a.a.createElement(l.RecoilRoot,null,a.a.createElement(c.a,{theme:An},a.a.createElement(q,{fallback:a.a.createElement("div",null,"error")},a.a.createElement(u.b,{history:d},a.a.createElement(Cn,null))))))};o.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(Hn,null)),document.getElementById("root"))},67:function(e,n,t){e.exports=t.p+"static/media/3e9957afe36f31ebb249691f0a9e3098.862d721d.jpg"},68:function(e,n,t){e.exports=t.p+"static/media/9f66e5bc9742c03206b48dfad838849a.af57f8d9.jpg"},69:function(e,n,t){e.exports=t.p+"static/media/39.f743e406.png"},70:function(e,n,t){e.exports=t.p+"static/media/49095c3ab6870e315be99a7548ae25e7.9f29f6f5.jpg"},71:function(e,n,t){e.exports=t.p+"static/media/NicePng_batman-png_25335.a8efcf81.png"},72:function(e,n,t){e.exports=t.p+"static/media/wonderwoman_2017.b67d3ee3.jpg"},80:function(e,n,t){e.exports=t(132)}},[[80,1,2]]]);
//# sourceMappingURL=main.42d50f6f.chunk.js.map