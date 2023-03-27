/*! For license information please see components-button-button-stories.e71580ed.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/button/button.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MDXContext=react_default.a.createContext({});function useMDXComponents(components){const contextComponents=react_default.a.useContext(MDXContext);return react_default.a.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}var blocks=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__("./node_modules/ts-dedent/esm/index.js");function _createMdxContent(props){var _components=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li"},useMDXComponents(),props.components);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(_components.h1,{children:"Button"}),"\n",Object(jsx_runtime.jsx)(_components.h2,{children:"Colors and variants"}),"\n",Object(jsx_runtime.jsx)(_components.p,{children:"The button is a basic component. It has three possible variants"}),"\n",Object(jsx_runtime.jsxs)(_components.ul,{children:["\n",Object(jsx_runtime.jsx)(_components.li,{children:"Solid"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Outline"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Outline-Text"}),"\n"]}),"\n",Object(jsx_runtime.jsx)(_components.p,{children:"and can be shown in five possible colors."}),"\n",Object(jsx_runtime.jsxs)(_components.ul,{children:["\n",Object(jsx_runtime.jsx)(_components.li,{children:"Primary"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Secondary"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Success"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Danger"}),"\n",Object(jsx_runtime.jsx)(_components.li,{children:"Warning"}),"\n"]}),"\n",Object(jsx_runtime.jsx)(_components.h2,{children:"Component code"}),"\n",Object(jsx_runtime.jsx)(blocks.Canvas,{columns:2,withSource:"open",withToolbar:!0,children:Object(jsx_runtime.jsx)(blocks.Story,{id:"components-button--default"})}),"\n",Object(jsx_runtime.jsx)(_components.h2,{children:"ArgsTable"}),"\n",Object(jsx_runtime.jsx)(blocks.ArgsTable,{story:"."})]})}var Custom_MDX_Documentation=function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},MDXLayout=Object.assign({},useMDXComponents(),props.components).wrapper;return MDXLayout?Object(jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:Object(jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Default=(__webpack_exports__.default={title:"Components/Button",parameters:{docs:{page:Custom_MDX_Documentation}},args:{label:"Button",variant:"solid",color:"primary",size:"m",disabled:!1,icon:"",position:"left",href:"",target:"_blank"},argTypes:{variant:{options:["solid","outline","outline-text"],control:{type:"radio"}},color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},size:{options:["s","m"],control:{type:"radio"}},position:{options:["left","right"],control:{type:"radio"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}}}},function DefaultTemplate(args){return'<ifx-button  variant="'+args.variant+'" icon="'+args.icon+'" position="'+args.position+'" href="'+args.href+'" target="'+args.target+'" color="'+args.color+'" size="'+args.size+'" disabled="'+args.disabled+'">\n  '+args.label+"\n  </ifx-button>"}.bind({}));Default.argTypes={},Default.parameters=Object.assign({storySource:{source:'(args) =>\n  `<ifx-button  variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-button>`'}},Default.parameters)}}]);
//# sourceMappingURL=components-button-button-stories.e71580ed.iframe.bundle.js.map