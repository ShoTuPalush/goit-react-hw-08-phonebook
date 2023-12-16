"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[464],{464:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var r=t(3433),a=t(4942),i=t(3366),o=t(7462),c=t(2791),s=t(3733),u=t(1184),l=t(8519),d=t(4419),m=t(6934),p=t(1402),f=t(3967);var v=c.createContext(),x=t(5878),g=t(1217);function h(n){return(0,g.Z)("MuiGrid",n)}var Z=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],b=(0,x.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,r.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,r.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,r.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,r.Z)(Z.map((function(n){return"grid-xs-".concat(n)}))),(0,r.Z)(Z.map((function(n){return"grid-sm-".concat(n)}))),(0,r.Z)(Z.map((function(n){return"grid-md-".concat(n)}))),(0,r.Z)(Z.map((function(n){return"grid-lg-".concat(n)}))),(0,r.Z)(Z.map((function(n){return"grid-xl-".concat(n)}))))),w=t(184),S=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function j(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function k(n){var e=n.breakpoints,t=n.values,r="";Object.keys(t).forEach((function(n){""===r&&0!==t[n]&&(r=n)}));var a=Object.keys(e).sort((function(n,t){return e[n]-e[t]}));return a.slice(0,a.indexOf(r))}var y=(0,m.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState,a=t.container,i=t.direction,o=t.item,c=t.spacing,s=t.wrap,u=t.zeroMinWidth,l=t.breakpoints,d=[];a&&(d=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]];var r=[];return e.forEach((function(e){var a=n[e];Number(a)>0&&r.push(t["spacing-".concat(e,"-").concat(String(a))])})),r}(c,l,e));var m=[];return l.forEach((function(n){var r=t[n];r&&m.push(e["grid-".concat(n,"-").concat(String(r))])})),[e.root,a&&e.container,o&&e.item,u&&e.zeroMinWidth].concat((0,r.Z)(d),["row"!==i&&e["direction-xs-".concat(String(i))],"wrap"!==s&&e["wrap-xs-".concat(String(s))]],m)}})((function(n){var e=n.ownerState;return(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,t=n.ownerState,r=(0,u.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,u.k9)({theme:e},r,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(b.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,i=t.rowSpacing,o={};if(r&&0!==i){var c,s=(0,u.P$)({values:i,breakpoints:e.breakpoints.values});"object"===typeof s&&(c=k({breakpoints:e.breakpoints.values,values:s})),o=(0,u.k9)({theme:e},s,(function(n,t){var r,i=e.spacing(n);return"0px"!==i?(0,a.Z)({marginTop:"-".concat(j(i))},"& > .".concat(b.item),{paddingTop:j(i)}):null!=(r=c)&&r.includes(t)?{}:(0,a.Z)({marginTop:0},"& > .".concat(b.item),{paddingTop:0})}))}return o}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,i=t.columnSpacing,o={};if(r&&0!==i){var c,s=(0,u.P$)({values:i,breakpoints:e.breakpoints.values});"object"===typeof s&&(c=k({breakpoints:e.breakpoints.values,values:s})),o=(0,u.k9)({theme:e},s,(function(n,t){var r,i=e.spacing(n);return"0px"!==i?(0,a.Z)({width:"calc(100% + ".concat(j(i),")"),marginLeft:"-".concat(j(i))},"& > .".concat(b.item),{paddingLeft:j(i)}):null!=(r=c)&&r.includes(t)?{}:(0,a.Z)({width:"100%",marginLeft:0},"& > .".concat(b.item),{paddingLeft:0})}))}return o}),(function(n){var e,t=n.theme,r=n.ownerState;return t.breakpoints.keys.reduce((function(n,a){var i={};if(r[a]&&(e=r[a]),!e)return n;if(!0===e)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,u.P$)({values:r.columns,breakpoints:t.breakpoints.values}),s="object"===typeof c?c[a]:c;if(void 0===s||null===s)return n;var l="".concat(Math.round(e/s*1e8)/1e6,"%"),d={};if(r.container&&r.item&&0!==r.columnSpacing){var m=t.spacing(r.columnSpacing);if("0px"!==m){var p="calc(".concat(l," + ").concat(j(m),")");d={flexBasis:p,maxWidth:p}}}i=(0,o.Z)({flexBasis:l,flexGrow:0,maxWidth:l},d)}return 0===t.breakpoints.values[a]?Object.assign(n,i):n[t.breakpoints.up(a)]=i,n}),{})}));var C=function(n){var e=n.classes,t=n.container,a=n.direction,i=n.item,o=n.spacing,c=n.wrap,s=n.zeroMinWidth,u=n.breakpoints,l=[];t&&(l=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var t=[];return e.forEach((function(e){var r=n[e];if(Number(r)>0){var a="spacing-".concat(e,"-").concat(String(r));t.push(a)}})),t}(o,u));var m=[];u.forEach((function(e){var t=n[e];t&&m.push("grid-".concat(e,"-").concat(String(t)))}));var p={root:["root",t&&"container",i&&"item",s&&"zeroMinWidth"].concat((0,r.Z)(l),["row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==c&&"wrap-xs-".concat(String(c))],m)};return(0,d.Z)(p,h,e)},M=c.forwardRef((function(n,e){var t=(0,p.Z)({props:n,name:"MuiGrid"}),r=(0,f.Z)().breakpoints,a=(0,l.Z)(t),u=a.className,d=a.columns,m=a.columnSpacing,x=a.component,g=void 0===x?"div":x,h=a.container,Z=void 0!==h&&h,b=a.direction,j=void 0===b?"row":b,k=a.item,M=void 0!==k&&k,z=a.rowSpacing,N=a.spacing,W=void 0===N?0:N,R=a.wrap,P=void 0===R?"wrap":R,A=a.zeroMinWidth,E=void 0!==A&&A,G=(0,i.Z)(a,S),L=z||W,F=m||W,B=c.useContext(v),D=Z?d||12:B,I={},T=(0,o.Z)({},G);r.keys.forEach((function(n){null!=G[n]&&(I[n]=G[n],delete T[n])}));var _=(0,o.Z)({},a,{columns:D,container:Z,direction:j,item:M,rowSpacing:L,columnSpacing:F,wrap:P,zeroMinWidth:E,spacing:W},I,{breakpoints:r.keys}),O=C(_);return(0,w.jsx)(v.Provider,{value:D,children:(0,w.jsx)(y,(0,o.Z)({ownerState:_,className:(0,s.Z)(O.root,u),as:g,ref:e},T))})})),z=M,N=t(4420),W=t(3553),R=function(n){return n.contacts.isLoading},P=function(n){return n.contacts.error},A=(0,W.P1)([function(n){return n.contacts.items},function(n){return n.filter.value}],(function(n,e){return(0,r.Z)(n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})))})),E=t(9439),G=t(697);function L(n){return(0,g.Z)("MuiCardContent",n)}(0,x.Z)("MuiCardContent",["root"]);var F=["className","component"],B=(0,m.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),D=c.forwardRef((function(n,e){var t=(0,p.Z)({props:n,name:"MuiCardContent"}),r=t.className,a=t.component,c=void 0===a?"div":a,u=(0,i.Z)(t,F),l=(0,o.Z)({},t,{component:c}),m=function(n){var e=n.classes;return(0,d.Z)({root:["root"]},L,e)}(l);return(0,w.jsx)(B,(0,o.Z)({as:c,className:(0,s.Z)(m.root,r),ownerState:l,ref:e},u))})),I=t(890),T=t(3984);function _(n){return(0,g.Z)("MuiCardActions",n)}(0,x.Z)("MuiCardActions",["root","spacing"]);var O=["disableSpacing","className"],$=(0,m.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,!t.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,o.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),V=c.forwardRef((function(n,e){var t=(0,p.Z)({props:n,name:"MuiCardActions"}),r=t.disableSpacing,a=void 0!==r&&r,c=t.className,u=(0,i.Z)(t,O),l=(0,o.Z)({},t,{disableSpacing:a}),m=function(n){var e=n.classes,t={root:["root",!n.disableSpacing&&"spacing"]};return(0,d.Z)(t,_,e)}(l);return(0,w.jsx)($,(0,o.Z)({className:(0,s.Z)(m.root,c),ownerState:l,ref:e},u))})),U=t(4294),q=t(3634),H=function(n){var e=n.contact,t=(0,c.useState)(!1),r=(0,E.Z)(t,2),a=r[0],i=r[1],o=(0,c.useState)(""),s=(0,E.Z)(o,2),u=s[0],l=s[1],d=(0,N.I0)();(0,c.useMemo)((function(){return l("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),[]);return(0,w.jsx)(w.Fragment,{children:a?(0,w.jsxs)(G.Z,{component:"form",onSubmit:function(n){return function(n){n.preventDefault();var t=n.currentTarget;d((0,q.BZ)({contactId:e.id,credentials:{name:t.elements.name.value,number:t.elements.number.value}})),i(!1)}(n)},children:[(0,w.jsxs)(D,{sx:{width:200},children:[(0,w.jsx)(G.Z,{sx:{width:150,height:100,pt:5,bgcolor:u,borderRadius:50,ml:3},children:(0,w.jsx)(I.Z,{textAlign:"center",sx:{fontSize:40},children:e.name[0].toUpperCase()})}),(0,w.jsx)(T.Z,{label:"Name",variant:"standard",name:"name",type:"text",defaultValue:e.name,sx:{mt:3}}),(0,w.jsx)(T.Z,{label:"Number",variant:"standard",name:"number",type:"tel",defaultValue:e.number,sx:{mt:1}})]}),(0,w.jsxs)(V,{children:[(0,w.jsx)(U.Z,{type:"submit",sx:{ml:2,mr:3,fontSize:18},size:"small",children:"Save"}),(0,w.jsx)(U.Z,{sx:{fontSize:18},size:"small",onClick:function(){return d((0,q._f)(e.id))},children:"Delete"})]})]}):(0,w.jsxs)("div",{children:[(0,w.jsxs)(D,{sx:{width:200},children:[(0,w.jsx)(G.Z,{sx:{width:150,height:100,pt:5,bgcolor:u,borderRadius:50,ml:3},children:(0,w.jsx)(I.Z,{textAlign:"center",sx:{fontSize:40},children:e.name[0].toUpperCase()})}),(0,w.jsx)(I.Z,{textAlign:"center",variant:"h6",component:"div",sx:{mt:4,mb:2,height:50},children:e.name}),(0,w.jsx)(I.Z,{textAlign:"center",variant:"body2",sx:{fontSize:22},children:e.number})]})," ",(0,w.jsxs)(V,{children:[(0,w.jsx)(U.Z,{type:"button",onClick:function(){i(!0)},sx:{ml:2,mr:3,fontSize:18},size:"small",children:"Edit"}),(0,w.jsx)(U.Z,{sx:{fontSize:18},size:"small",onClick:function(){return d((0,q._f)(e.id))},children:"Delete"})]})]})})},J=t(595),K=function(){var n=(0,N.v9)(A),e=(0,N.v9)(R),t=(0,N.v9)(P);return(0,w.jsxs)(w.Fragment,{children:[n.length>0&&(0,w.jsx)(z,{container:!0,spacing:6,sx:{ml:1},children:n.map((function(n){return(0,w.jsx)(z,{item:!0,children:(0,w.jsx)(H,{contact:n})},n.id)}))}),e&&(0,w.jsx)(J.a,{}),t&&(0,w.jsxs)("b",{children:[t,", please reload page"]})]})},Q=t(1273),X=function(){var n=(0,N.I0)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(T.Z,{fullWidth:!0,label:"Search",variant:"outlined",margin:"dense",type:"text",onChange:function(e){return n((0,Q.M)(e.target.value))}})})},Y=t(5218),nn=function(){var n=(0,N.I0)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(G.Z,{sx:{display:"flex",mr:4,mt:3,width:300},children:(0,w.jsxs)(G.Z,{component:"form",flexGrow:1,sx:{display:"flex",flexDirection:"column"},noValidate:!0,autoComplete:"off",onSubmit:function(e){return function(e){e.preventDefault();var t=e.currentTarget;n((0,q.el)({name:t.elements.name.value,number:t.elements.number.value})),t.reset(),(0,Y.ZP)("Contact add.")}(e)},children:[(0,w.jsx)(T.Z,{label:"Name",variant:"outlined",name:"name",margin:"dense",type:"name"}),(0,w.jsx)(T.Z,{label:"Number",variant:"outlined",name:"number",margin:"dense",type:"tel"}),(0,w.jsx)(U.Z,{variant:"contained",type:"submit",size:"large",sx:{mt:2,height:60,fontSize:22},children:"Add contact"})]})})})};function en(){var n=(0,N.I0)();return(0,c.useEffect)((function(){n((0,q.Fk)())}),[n]),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(G.Z,{sx:{display:"flex"},children:[(0,w.jsx)(nn,{}),(0,w.jsxs)(G.Z,{sx:{width:1},children:[(0,w.jsx)(X,{}),(0,w.jsx)(K,{})]})]})})}}}]);
//# sourceMappingURL=464.ab62b07c.chunk.js.map