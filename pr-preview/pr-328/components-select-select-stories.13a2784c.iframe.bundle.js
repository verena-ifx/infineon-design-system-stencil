"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9596],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/components/select/select.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Select",tags:["autodocs"],args:{size:"medium (40px)",searchEnabled:!0,searchPlaceholderValue:"Search...",placeholder:!0,placeholderValue:"Placeholder",error:!1,errorMessage:"Some error",disabled:!1,choices:"Choice 1, Choice 2, Choice 3"},argTypes:{type:{control:{type:"select",options:["single","multiple","text"]}},value:{control:"text"},size:{options:["small (36px)","medium (40px)"],control:{type:"radio"}},error:{options:[!0,!1],control:{type:"radio"}},errorMessage:{control:"text"},disabled:{options:[!0,!1],control:{type:"radio"}},searchEnabled:{options:[!0,!1],control:{type:"radio"}},searchPlaceholderValue:{control:{type:"text"}},choices:{control:"text",options:["Choice 1","Choice 2","Choice 3"]},onChange:{action:"change"}}},Single=(({size,type,value,disabled,error,errorMessage,placeholder,placeholderValue,searchEnabled,searchPlaceholderValue,choices})=>{const element=document.createElement("ifx-choices");return console.log("size ",size),element.setAttribute("type",type),element.setAttribute("value",value),element.setAttribute("ifx-size",size),element.setAttribute("placeholder",placeholder),element.setAttribute("search-enabled",searchEnabled),element.setAttribute("search-placeholder-value",searchPlaceholderValue),element.setAttribute("ifx-disabled",disabled),element.setAttribute("ifx-error",error),element.setAttribute("ifx-error-message",errorMessage),element.setAttribute("ifx-placeholder-value",placeholderValue),element.setAttribute("ifx-choices",choices),element.addEventListener("ifxSelect",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxSelect")),element}).bind({});Single.args={type:"single"},Single.parameters={...Single.parameters,docs:{...Single.parameters?.docs,source:{originalSource:"({\n  size,\n  type,\n  value,\n  disabled,\n  error,\n  errorMessage,\n  placeholder,\n  placeholderValue,\n  searchEnabled,\n  searchPlaceholderValue,\n  choices\n}) => {\n  const element = document.createElement('ifx-choices');\n  console.log(\"size \", size);\n  element.setAttribute('type', type);\n  element.setAttribute('value', value);\n  element.setAttribute('ifx-size', size);\n  element.setAttribute('placeholder', placeholder);\n  element.setAttribute('search-enabled', searchEnabled);\n  element.setAttribute('search-placeholder-value', searchPlaceholderValue);\n  element.setAttribute('ifx-disabled', disabled);\n  element.setAttribute('ifx-error', error);\n  element.setAttribute('ifx-error-message', errorMessage);\n  element.setAttribute('ifx-placeholder-value', placeholderValue);\n  element.setAttribute('ifx-choices', choices);\n  element.addEventListener('ifxSelect', action('ifxSelect'));\n  return element;\n}",...Single.parameters?.docs?.source}}};const __namedExportsOrder=["Single"]}}]);