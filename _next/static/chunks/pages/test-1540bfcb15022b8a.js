(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{1185:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return c(4287)}])},3027:function(d,b,a){"use strict";a.d(b,{I_:function(){return t},tJ:function(){return x},H3:function(){return u},gE:function(){return s},gN:function(){return v},fL:function(){return w}});var e=a(5893),f=a(6983),c=a(7145),g=a.n(c),h=a(7294),i=a(7179),j=a(6963),k=a(1799),l=a(9396),m=a(603),n=a(9272),o=a(9294),p={CARD:"card"},q={border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move"},r=function(a){var s=a.id,f=a.children,g=a.index,t=a.moveCard;a.className;var b=(0,h.useRef)(null),c=(0,m.Z)((0,n.L)({accept:p.CARD,collect:function(a){return{handlerId:a.getHandlerId()}},hover:function(f,j){if(console.log("hover"),b.current){var d,c=f.index,a=g;if(c!==a){var e=null===(d=b.current)|| void 0===d?void 0:d.getBoundingClientRect(),h=(e.bottom-e.top)/2,i=j.getClientOffset().y-e.top;(!(c<a)||!(i<h))&&(!(c>a)||!(i>h))&&(t(c,a),f.index=a)}}}}),2),i=c[0].handlerId,j=c[1],d=(0,m.Z)((0,o.c)({type:p.CARD,item:function(){return{id:s,index:g}},collect:function(a){return console.log(a,a.isDragging()),{isDragging:a.isDragging()}}}),2),r=(d[0].isDragging,d[1]);return r(j(b)),(0,e.jsxs)("div",{ref:b,style:(0,l.Z)((0,k.Z)({},q),{opacity:1}),"data-handler-id":i,children:[g," ",f]})},s=[{id:1,text:"Write a cool JS library"},{id:2,text:"Make it generic enough"},{id:3,text:"Write README"},{id:4,text:"Create some examples"},{id:5,text:"Spam in Twitter and IRC to promote it (note that this element is taller than the others)"},{id:6,text:"???"},{id:7,text:"PROFIT"},],t=function(a){var d=a.className,b=a.defaultData,c=(0,h.useState)(void 0===b?[]:b),f=c[0],i=c[1],j=(0,h.useCallback)(function(a,b){i(function(c){return g()(c,{$splice:[[a,1],[b,0,c[a]],]})})},[]),k=(0,h.useCallback)(function(a,b){return(0,e.jsx)(r,{index:b,id:a.id,moveCard:j,children:a.text},a.id)},[]);return(0,e.jsx)("div",{className:d,children:f.map(function(a,b){return k(a,b)})})},u=function(a){var d=a.className,b=a.defaultData,j=a.children,c=(0,h.useState)(void 0===b?[]:b),i=c[0],k=c[1],l=(0,h.useCallback)(function(a,b){k(function(c){return g()(c,{$splice:[[a,1],[b,0,c[a]],]})})},[]),m=(0,h.useCallback)(function(a,b){return(0,e.jsx)(f.FW,{name:"card",data:a,children:(0,e.jsx)(r,{index:b,id:a.id,moveCard:l,children:(0,f.xH)(b,j)})},a.id)},[]);return(0,e.jsx)("div",{className:d,children:i.map(function(a,b){return m(a,b)})})};function v(a){var c=a.className,b=a.field,d=(0,f.v9)("card");return(0,e.jsx)("div",{className:c,children:d[null!=b?b:"id"]})}function w(){return(0,e.jsx)("div",{children:"Hello World"})}function x(){return(0,e.jsxs)("div",{children:[(0,e.jsx)("input",{type:"text",onBlur:function(){return console.log("foo")}}),(0,e.jsx)(i.W,{backend:j.PD,options:{document:window.parent.document},children:(0,e.jsx)(t,{defaultData:s})})]})}},4287:function(c,b,a){"use strict";a.r(b),a.d(b,{default:function(){return o}});var d=a(5893),e=a(7179),f=a(6963),g=a(3027),h=a(1799),i=a(9396),j=a(603),k=a(7294),l=a(5948),m=function(b,c,d){var a=Array.from(b),e=(0,j.Z)(a.splice(c,1),1)[0];return a.splice(d,0,e),a},n=function(){var e,a=(0,k.useState)(Array.from({length:5},function(b,a){return a}).map(function(a){return{id:"item-".concat(a),content:"item ".concat(a)}})),f=a[0],g=a[1],b=(0,j.Z)(k.useState(!1),2),c=b[0],n=b[1];return k.useEffect(function(){n(!0)}),(0,d.jsx)("div",{children:c&&(0,d.jsx)(l.Z5,{onDragEnd:function(a){if(a.destination){var b=m(f,a.source.index,a.destination.index);g(b)}},children:(0,d.jsx)(l.bK,{droppableId:"droppable",children:function(a,b){var c;return(0,d.jsxs)("div",(0,i.Z)((0,h.Z)({},a.droppableProps),{ref:a.innerRef,style:{background:(c=b.isDraggingOver)?"lightblue":"lightgrey",padding:8,width:250},children:[f.map(function(a,b){return(0,d.jsx)(l._l,{draggableId:a.id,index:b,children:function(b,f){var c,e;return(0,d.jsx)("div",(0,i.Z)((0,h.Z)({ref:b.innerRef},b.draggableProps,b.dragHandleProps),{style:(c=f.isDragging,e=b.draggableProps.style,(0,h.Z)({userSelect:"none",padding:16,margin:"0 0 ".concat(8,"px 0"),background:c?"lightgreen":"grey"},e)),children:a.content}))}},a.id)}),a.placeholder]}))}})})})};function o(){return(0,d.jsxs)(e.W,{backend:f.PD,children:[(0,d.jsx)("h2",{children:"React Beautiful DND"}),(0,d.jsx)(n,{}),(0,d.jsx)("h2",{children:"React DND"}),(0,d.jsx)(g.I_,{defaultData:g.gE}),(0,d.jsxs)(g.H3,{defaultData:g.gE,children:[(0,d.jsx)(g.gN,{field:"text"}),(0,d.jsx)(g.gN,{field:"text"})]})]})}}},function(a){a.O(0,[774,630,651,440,888,179],function(){var b;return a(a.s=1185)}),_N_E=a.O()}])