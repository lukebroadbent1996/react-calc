(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},36:function(e,t){},37:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),i=c(13),l=c.n(i),r=(c(24),c(14)),a=c(15),h=c(18),d=c(17),j=(c(25),c(26),c(1)),u=function(e){return Object(j.jsx)("div",{className:"keypad-style ".concat((t=e.children,isNaN(t)&&"."!==t&&"="!==t?"operator":null)),onClick:function(){return e.handleClick(e.children)},children:e.children});var t},o=(c(28),function(e){return Object(j.jsx)("div",{className:"input",children:e.input})}),b=c(39),O=function(e){Object(h.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={result:""},e.handleBack=function(){e.setState({result:e.state.result.slice(0,-1)})},e.insertItems=function(t){e.setState({result:e.state.result+t})},e.handleEqual=function(){e.setState({result:b.a(e.state.result)})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"calc-body",children:Object(j.jsxs)("div",{className:"calc-wrap",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"React Calculator"})}),Object(j.jsx)("div",{children:Object(j.jsx)(o,{input:this.state.result})}),Object(j.jsxs)("div",{className:"calc-row",children:[Object(j.jsx)(x,{handleClear:function(){return e.setState({result:""})},children:"CE"}),Object(j.jsx)(m,{back:this.handleBack,children:"\u232b"})]}),Object(j.jsxs)("div",{className:"calc-row",children:[Object(j.jsx)(u,{handleClick:this.insertItems,children:"8"}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"9"}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"7"}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"/"})]}),Object(j.jsxs)("div",{className:"calc-row",children:[Object(j.jsx)(u,{handleClick:this.insertItems,children:"4"}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"5"}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"6"}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"*"})]}),Object(j.jsxs)("div",{className:"calc-row",children:[Object(j.jsx)(u,{handleClick:this.insertItems,children:"1"}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"2"}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"3"}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"+"})]}),Object(j.jsxs)("div",{className:"calc-row",children:[Object(j.jsx)(u,{handleClick:this.insertItems,children:"."}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"0"}),Object(j.jsx)(u,{handleClick:this.handleEqual,children:"="}),Object(j.jsx)(u,{handleClick:this.insertItems,children:"-"})]})]})})}}]),c}(s.a.Component),x=function(e){return Object(j.jsx)("div",{className:"clear",onClick:e.handleClear,children:e.children})},m=function(e){return Object(j.jsx)("div",{className:"back",onClick:e.back,children:e.children})},k=O,C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),i(e),l(e)}))};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.6fdef97b.chunk.js.map