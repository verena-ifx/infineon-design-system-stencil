/*! For license information please see components-button-Usage-mdx.c5538bbc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6230,4229],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/button/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",tags:["autodocs"],args:{label:"Button",variant:"solid",color:"primary",type:"button",size:"m",disabled:!1,icon:"",position:"left",href:"",target:"_blank"},argTypes:{variant:{options:["solid","outline","outline-text"],control:{type:"radio"}},color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},type:{options:["submit","button"],control:{type:"radio"}},size:{options:["s","m"],control:{type:"radio"}},position:{options:["left","right"],control:{type:"radio"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}}}},Default=(args=>`<ifx-button type="${args.type}" variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-button>`).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-button type="${args.type}" variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-button>`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/button/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),button_stories=__webpack_require__("./src/components/button/button.stories.ts");const button_variant_primary_namespaceObject=__webpack_require__.p+"static/media/button-variant-primary.0144d436.png",primary_button_states_namespaceObject=__webpack_require__.p+"static/media/primary-button-states.19da9057.png",button_variant_secondary_namespaceObject=__webpack_require__.p+"static/media/button-variant-secondary.14b83b5a.png",secondary_button_states_namespaceObject=__webpack_require__.p+"static/media/secondary-button-states.64d3b7f5.png",button_variant_tertiary_namespaceObject=__webpack_require__.p+"static/media/button-variant-tertiary.a4ba9c24.png",tertiary_button_states_namespaceObject=__webpack_require__.p+"static/media/tertiary-button-states.34991001.png",button_variant_error_namespaceObject=__webpack_require__.p+"static/media/button-variant-error.9c1088b2.png",error_button_states_namespaceObject=__webpack_require__.p+"static/media/error-button-states.47bb3dac.png",button_icon_left_namespaceObject=__webpack_require__.p+"static/media/button-icon-left.f05d7ffd.png",button_icon_right_namespaceObject=__webpack_require__.p+"static/media/button-icon-right.3b49d4cf.png",button_sizes_namespaceObject=__webpack_require__.p+"static/media/button-sizes.d51a52ed.png";var button_grouping_by_importance=__webpack_require__("./public-storybook/images/button/button-grouping-by-importance.png");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",h4:"h4",hr:"hr",strong:"strong",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:button_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"button",children:"Button"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Buttons provide a clear visual call-to-action for users, guiding them towards completing a desired task or goal."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:'To trigger an action like "Add to cart", "Submit", "Download"'}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:'To guide the user to an important page "Learn more"'}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"To cancel an action"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-not-to-use",children:"When not to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Avoid using buttons as navigational items. Instead use a text link."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When there are too many buttons on the screen it can be overwhelming for the user to find the button they need. In this case it is better to group related buttons and display all other actions inside a dropdown."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:'If the action cannot be undone like "Delete", "Cancel an order", "Unsubscribing a form". Instead, it is better to use a confirmation modal to ensure that the users are aware of the consequences of their action.'}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"primary",children:"Primary"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Should be used for the primary action on a page or form, such as submitting a form. Try to limit its use per page as much as possible."}),"\n",(0,jsx_runtime.jsx)("img",{src:button_variant_primary_namespaceObject,alt:"Button Variant Primary"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:primary_button_states_namespaceObject,alt:"Primary Button States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"secondary",children:"Secondary"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Should be used for all other actions. It is possible to use this button alone or in combination with the primary button or links."}),"\n",(0,jsx_runtime.jsx)("img",{src:button_variant_secondary_namespaceObject,alt:"Button Variant Secondary"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-1",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:secondary_button_states_namespaceObject,alt:"Secondary Button States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"tertiary",children:"Tertiary"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use for actions that are not as important as primary or secondary actions. The tertiary button is a low-contrast button that provides a subtle visual cue to the user."}),"\n",(0,jsx_runtime.jsx)("img",{src:button_variant_tertiary_namespaceObject,alt:"Button Variant Tertiary"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-2",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:tertiary_button_states_namespaceObject,alt:"Tertiary Button States"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"error",children:"Error"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'Should be used for actions that result in a destructive action, such as deleting a record. The error button has a high-contrast, attention-grabbing style — try to limit its use per page as much as possible.\nTo make it easier for users to cancel a destructive action, it is recommended to include a secondary button alongside the error button on modal components. For instance, if a table is being deleted, users can use the "Cancel" button to close the modal.'}),"\n",(0,jsx_runtime.jsx)("img",{src:button_variant_error_namespaceObject,alt:"Button Variant Error"}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"states-3",children:"States"}),"\n",(0,jsx_runtime.jsx)("img",{src:error_button_states_namespaceObject,alt:"Error Button States"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"icon-placement",children:"Icon placement"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-left",children:"Icon left"}),"\n",(0,jsx_runtime.jsx)("img",{src:button_icon_left_namespaceObject,alt:"Button With Left Icon",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'Use it to enhance the meaning of the action like "Add to cart", "Share" or "Show more".'}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-right",children:"Icon right"}),"\n",(0,jsx_runtime.jsx)("img",{src:button_icon_right_namespaceObject,alt:"Button With Right Icon",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use it to trigger a specific action, such as navigating to the next page."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)("img",{src:button_sizes_namespaceObject,alt:"Button Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"32px",children:"32px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use in information dense scenarios when there is not enough vertical space."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"36px",children:"36px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Compact, default size for compact layouts or when content other than buttons and input should be in focus."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"40px",children:"40px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This is our large default button size."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"48px",children:"48px"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Our call-to-action button. Primarily used at the top/bottom of a page to highlight an action."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"light-version",children:"Light version"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To work on $brand-500 backgrounds there are also light versions of the primary, secondary and tertiary buttons available. The use of the destructive button on $brand-500 backgrounds is not allowed."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grouping-buttons",children:"Grouping buttons"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Button grouping is used to organize related actions or tasks. It helps users to identify and differentiate between the actions they can perform on a page or screen. Grouping buttons also improves the visual hierarchy of a design, making it more scannable and user-friendly."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"group-by-importance",children:"Group by importance"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'Group buttons by importance if you want to help users quickly identify the primary action they should take. You can use a primary button for an important action like "Add to cart" and a secondary button for "Contact sales". If it fits it is also possible to place a tertiary button like "View distributors\' inventory" to improve the user flow.'}),"\n",(0,jsx_runtime.jsx)("img",{src:button_grouping_by_importance,alt:"Button Group By Importance"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"There are several ways to group buttons in your layout:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Left (important) to right (less important) for a large amount of horizontal space."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Top (important) to bottom (less important) for less horizontal space."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Try to limit the number of buttons for vertical grouping by three. Instead group them horizontally."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"In a modal dialog it is important to align button groups on the bottom right corner. In addition switch the importance left (less important) and right (important) to show a progress."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=2610-6235&mode=design&t=xVWOPkYnUvh53BSW-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Button"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./public-storybook/images/button/button-grouping-by-importance.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/button-grouping-by-importance.967f8230.png"}}]);