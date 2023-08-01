/*! For license information please see 3278.d9f7b10c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3278],{"./dist/esm/ifx-search-field.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_search_field:()=>SearchField});var _index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-7f04a2f1.js"),_index_661c2409_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-661c2409.js");const SearchField=class{constructor(hostRef){(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),this.handleInput=()=>{const query=this.inputElement.value;this.value=query,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.ifxInput.emit(null)},this.value="",this.insideDropdown=!1,this.showDeleteIcon=!1,this.disabled=!1,this.size="l",this.isFocused=!1}handleOutsideClick(event){event.composedPath().includes(this.inputElement)||(this.isFocused=!1)}valueWatcher(newValue){newValue!==this.inputElement.value&&(this.inputElement.value=newValue)}focusInput(){this.inputElement.focus(),this.isFocused=!0}render(){return(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-field"},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:this.getWrapperClassNames(),tabindex:1,onFocus:()=>this.focusInput(),onClick:()=>this.focusInput()},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"search-16",class:"search-icon"}),(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{ref:el=>this.inputElement=el,type:"text",onInput:()=>this.handleInput(),placeholder:"Search...",disabled:this.disabled,value:this.value}),this.showDeleteIcon?(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"deletex16",class:"delete-icon",onClick:this.handleDelete}):null))}getSizeClass(){return"s"==`${this.size}`?"search-field__wrapper-s":"m"==`${this.size}`?"search-field__wrapper-m":""}getWrapperClassNames(){return(0,_index_661c2409_js__WEBPACK_IMPORTED_MODULE_1__.c)("search-field__wrapper",`search-field__wrapper ${this.getSizeClass()}`,""+(this.isFocused?"focused":""))}static get watchers(){return{value:["valueWatcher"]}}};SearchField.style='.search-field{background-color:#ffffff;width:100%}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:12px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper.search-field__wrapper-m{height:40px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:100%}.search-field .search-field__wrapper input[type=text]:focus{outline:none}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}'},"./dist/esm/index-661c2409.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))}}]);