/*! For license information please see components-button-button-stories.cdd0e5a4.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./node_modules/@mdx-js/react/lib/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useMDXComponents}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const MDXContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}},"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Description})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Story}))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/button/button.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");__webpack_require__("./node_modules/ts-dedent/esm/index.js");function _createMdxContent(props){var _components=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li"},Object(lib.a)(),props.components);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(_components.h1,{children:"Button"}),"\n",Object(jsx_runtime.jsx)(_components.h2,{children:"Colors and variants"}),"\n",Object(jsx_runtime.jsx)(_components.p,{children:"The button is a basic component. It has three possible variants"}),"\n",Object(jsx_runtime.jsxs)(_components.ul,{children:["\n",Object(jsx_runtime.jsx)(_components.li,{children:"Solid"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Outline"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Outline-Text"}),"\n"]}),"\n",Object(jsx_runtime.jsx)(_components.p,{children:"and can be shown in five possible colors."}),"\n",Object(jsx_runtime.jsxs)(_components.ul,{children:["\n",Object(jsx_runtime.jsx)(_components.li,{children:"Primary"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Secondary"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Success"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Danger"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Warning"}),"\n"]}),"\n",Object(jsx_runtime.jsx)(_components.h2,{children:"Component code"}),"\n",Object(jsx_runtime.jsx)(esm.c,{columns:2,withSource:"open",withToolbar:!0,children:Object(jsx_runtime.jsx)(esm.f,{id:"components-button--default"})}),"\n",Object(jsx_runtime.jsx)(_components.h2,{children:"ArgsTable"}),"\n",Object(jsx_runtime.jsx)(esm.b,{story:"."})]})}var Custom_MDX_Documentation=function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},MDXLayout=Object.assign({},Object(lib.a)(),props.components).wrapper;return MDXLayout?Object(jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:Object(jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Default=(__webpack_exports__.default={title:"Components/Button",parameters:{docs:{page:Custom_MDX_Documentation}},args:{label:"Button",variant:"solid",color:"primary",size:"m",disabled:!1,icon:"",position:"left",href:"",target:"_blank"},argTypes:{variant:{options:["solid","outline","outline-text"],control:{type:"radio"}},color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},size:{options:["s","m"],control:{type:"radio"}},position:{options:["left","right"],control:{type:"radio"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}}}},function DefaultTemplate(args){return'<ifx-button  variant="'+args.variant+'" icon="'+args.icon+'" position="'+args.position+'" href="'+args.href+'" target="'+args.target+'" color="'+args.color+'" size="'+args.size+'" disabled="'+args.disabled+'">\n  '+args.label+"\n  </ifx-button>"}.bind({}));Default.argTypes={},Default.parameters=Object.assign({storySource:{source:'(args) =>\r\n  `<ifx-button  variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\r\n  ${args.label}\r\n  </ifx-button>`'}},Default.parameters)}}]);
//# sourceMappingURL=components-button-button-stories.cdd0e5a4.iframe.bundle.js.map