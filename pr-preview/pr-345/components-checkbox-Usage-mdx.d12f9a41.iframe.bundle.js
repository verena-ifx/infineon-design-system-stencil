/*! For license information please see components-checkbox-Usage-mdx.d12f9a41.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8879,4125],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/checkbox/checkbox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Checkbox",tags:["autodocs"],args:{error:!1,disabled:!1,value:!1,label:"Text"},argTypes:{onIfxChange:{action:"checked"}}},Default=(({error,disabled,value,label})=>{const checkbox=document.createElement("ifx-checkbox");return checkbox.setAttribute("error",error),checkbox.setAttribute("disabled",disabled),checkbox.setAttribute("value",value),checkbox.addEventListener("ifxChange",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxChange")),checkbox.innerHTML=`\n    ${label}\n  `,checkbox}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  error,\n  disabled,\n  value,\n  label\n}) => {\n  const checkbox = document.createElement('ifx-checkbox');\n  checkbox.setAttribute('error', error);\n  checkbox.setAttribute('disabled', disabled);\n  checkbox.setAttribute('value', value);\n  checkbox.addEventListener('ifxChange', action('ifxChange'));\n  checkbox.innerHTML = `\n    ${label}\n  `;\n  return checkbox;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/checkbox/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),checkbox_stories=__webpack_require__("./src/components/checkbox/checkbox.stories.ts");const checkbox_anatomy_namespaceObject=__webpack_require__.p+"static/media/checkbox-anatomy.5615f412.png",checkbox_group_block_namespaceObject=__webpack_require__.p+"static/media/checkbox-group-block.9b7f3668.png",checkbox_group_inline_namespaceObject=__webpack_require__.p+"static/media/checkbox-group-inline.046ac0ff.png",checkbox_mouse_interaction_namespaceObject=__webpack_require__.p+"static/media/checkbox-mouse-interaction.559cd7a5.png",checkbox_overflow_text_namespaceObject=__webpack_require__.p+"static/media/checkbox-overflow-text.d9ab4d77.png",checkbox_sizes_namespaceObject=__webpack_require__.p+"static/media/checkbox-sizes.477193f2.png",checkbox_states_namespaceObject=__webpack_require__.p+"static/media/checkbox-states.f8258a5e.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",br:"br",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:checkbox_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The checkbox component allows users to select multiple options from a predefined list. It represents a binary choice, where the options can be either checked or unchecked."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"When you want to provide users with the ability to select multiple options from a list the options are independent of each other."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"For filtering or sorting functionality, particularly when there are multiple filter criteria or sorting options available."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"For preference or settings menus that enable users to customize their experience e.g. in tables."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"In forms where users need to indicate their agreement or consent to certain terms and conditions, privacy policies, or subscription options."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you need to provide users with options where only one selection is allowed. In such cases, consider using radio buttons instead."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If there are 5 or more options from which users can choose. In such cases consider using a select-dropdown."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are two different checkbox sizes: 20px and 24px. The distinction between the sizes is achieved by varying the font size used within the checkboxes. This gives the flexibility to use checkboxes in densed layouts."}),"\n",(0,jsx_runtime.jsx)("img",{src:checkbox_sizes_namespaceObject,alt:"Checkbox Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy",children:"Anatomy"}),"\n",(0,jsx_runtime.jsx)("img",{src:checkbox_anatomy_namespaceObject,alt:"Checkbox Anatomy",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Checkbox Input (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The checkbox input represents a specific state and is initially set as unselected by default."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Checkbox Label (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Describes the information that you can choose to either select or deselect."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"mouse-interaction",children:"Mouse Interaction"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To select an item, users have two options: they can either directly click on the checkbox input or click on the checkbox label. By making both areas interactive, it enhances the accessibility of the click target."}),"\n",(0,jsx_runtime.jsx)("img",{src:checkbox_mouse_interaction_namespaceObject,alt:"Checkbox Mouse Interaction",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grouping-checkboxes",children:"Grouping Checkboxes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Deciding to place a checkbox group inline or block depends on the specific context and requirements of your user interface."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"inline",children:"Inline"}),"\n",(0,jsx_runtime.jsx)("img",{src:checkbox_group_inline_namespaceObject,alt:"Checkbox Group Inline",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use to save space when you have limited screen real estate or need to place other elements alongside the checkboxes."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use when the options in your checkbox group have short labels, an inline layout can provide a more compact and visually streamlined presentation."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use to visually group related options or indicate that they belong to the same category."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"block",children:"Block"}),"\n",(0,jsx_runtime.jsx)("img",{src:checkbox_group_block_namespaceObject,alt:"Checkbox Group Block",width:"50%"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use for long checkbox labels."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Use to visually separate checkbox options."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overflow-text",children:"Overflow Text"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If your labels get too long, they may wrap to a second line. Generally try to avoid of having too long labels. A maximum of three words should be rule."}),"\n",(0,jsx_runtime.jsx)("img",{src:checkbox_overflow_text_namespaceObject,alt:"Checkbox Overflow Text",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:checkbox_states_namespaceObject,alt:"Checkbox States"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=2583-7343&mode=design&t=VGECa2WmCtxIWNLe-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Checkbox"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);