/*! For license information please see 2260.e63953d7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2260],{"./dist/esm/ifx-icon_3.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_icon:()=>InfineonIconStencil,ifx_search_bar:()=>SearchBar,ifx_search_field:()=>SearchField});var _index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fbf4ddae.js"),_icons_4163e6b2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/icons-4163e6b2.js"),_index_e6cb8223_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/esm/index-e6cb8223.js");const InfineonIconStencil=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.consoleError=(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(htmlString){const div=document.createElement("div");return div.innerHTML=htmlString,div.firstChild}convertHtmlToObject(htmlElement){return Array.from(htmlElement.attributes,(({name,value})=>({name,value}))).reduce(((acc,current)=>(acc[current.name]=current.value,acc)),{})}convertPathsToVnode(htmlPath){let svgPaths=[];const parentPath=this.convertHtmlToObject(htmlPath),parentPathToVnode=(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",parentPath);if(svgPaths.push(parentPathToVnode),htmlPath.firstChild){const paths=htmlPath.querySelectorAll("path"),pathLength=htmlPath.querySelectorAll("path").length;for(let i=0;i<pathLength;i++){let pathToObject=this.convertHtmlToObject(paths[i]),objToVnode=(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("path",pathToObject);svgPaths.push(objToVnode)}}return svgPaths}getSVG(svgPath){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...svgPath)}constructIcon(){if(this.ifxIcon){const htmlPath=this.convertStringToHtml(this.ifxIcon.svgContent),svgPath=this.convertPathsToVnode(htmlPath),SVG=this.getSVG(svgPath);return this.consoleError.emit(!1),SVG}return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){this.ifxIcon=(0,_icons_4163e6b2_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((_m,chr)=>chr)))}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.H,null,this.constructIcon())}};InfineonIconStencil.style="ifx-icon{display:inline-flex;justify-content:center}";const SearchBar=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),this.handleCloseButton=()=>{this.internalState=!this.internalState},this.updateViewportClass=()=>{const viewportWidth=window.innerWidth,hostElementWidth=this.el.offsetWidth;this.viewportClass=hostElementWidth?hostElementWidth>=1440?"large":hostElementWidth>=1024&&hostElementWidth<1440?"medium":"small":viewportWidth>=1440?"large":viewportWidth>=1024&&viewportWidth<1440?"medium":"small"},this.handleFocus=()=>{this.internalState=!0},this.showCloseButton=!0,this.isOpen=!0,this.disabled=!1,this.internalState=void 0,this.value=void 0}handlePropChange(){this.internalState=this.isOpen}handleSearchInput(event){console.log("search field event in search bar",event),this.value=event.detail.detail,this.ifxInput.emit(event.detail)}setInitialState(){this.internalState=this.isOpen}componentWillLoad(){this.setInitialState()}componentDidLoad(){this.updateViewportClass(),window.addEventListener("resize",this.updateViewportClass)}disconnectedCallback(){window.removeEventListener("resize",this.updateViewportClass)}handleInput(event){this.value=event.detail}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`search-bar ${this.internalState?"open":"closed"} ${this.viewportClass}`},this.internalState?(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-bar-wrapper"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-search-field",{disabled:this.disabled,value:this.value,onIfxInput:this.handleInput.bind(this)},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"search-16",slot:"search-icon"})),this.showCloseButton&&(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"search-16"}),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:"javascript:void(0)"},"Search")),!this.internalState&&"large"===this.viewportClass&&(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-bar-wrapper"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-search-field",{value:this.value,onClick:this.handleCloseButton,onFocus:this.handleFocus},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"search-16",slot:"search-icon"}))))}get el(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{isOpen:["handlePropChange"]}}};SearchBar.style='*{font-family:"Source Sans Pro"}.search-bar{box-sizing:border-box;height:40px;background-color:#ffffff;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.closed{display:inline-flex;width:auto}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:16px;font-style:normal;font-weight:600;line-height:24px;color:#378375;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:inline-flex;flex-direction:row;align-items:center;justify-content:center}.search-bar .search-bar__icon-wrapper a{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#1d1d1d;text-decoration:none;display:flex;align-items:center;flex:none;order:1;flex-grow:0;padding-left:11px}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.large.closed .search-bar__icon-wrapper{display:none}.search-bar.large.closed .search-bar-wrapper{display:flex;width:240px}.search-bar.medium.closed .search-bar__icon-wrapper a{display:block}.search-bar.medium.closed .search-bar-wrapper{display:none}.search-bar.small.closed .search-bar__icon-wrapper a{display:none}.search-bar.small.closed .search-bar-wrapper{display:none}';const SearchField=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),this.handleInput=()=>{const query=this.inputElement.value;this.value=query,this.ifxInput.emit(this.value)},this.handleDelete=()=>{this.inputElement.value="",this.ifxInput.emit(null)},this.value="",this.insideDropdown=!1,this.showDeleteIcon=!1,this.disabled=!1,this.size="l",this.isFocused=!1}handleOutsideClick(event){event.composedPath().includes(this.inputElement)||(this.isFocused=!1)}valueWatcher(newValue){newValue!==this.inputElement.value&&(this.inputElement.value=newValue)}focusInput(){this.inputElement.focus(),this.isFocused=!0}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-field"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:this.getWrapperClassNames(),tabindex:1,onFocus:()=>this.focusInput(),onClick:()=>this.focusInput()},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"search-16",class:"search-icon"}),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{ref:el=>this.inputElement=el,type:"text",onInput:()=>this.handleInput(),placeholder:"Search...",disabled:this.disabled,value:this.value}),this.showDeleteIcon?(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"deletex16",class:"delete-icon",onClick:this.handleDelete}):null))}getSizeClass(){return"s"==`${this.size}`?"search-field__wrapper-s":"m"==`${this.size}`?"search-field__wrapper-m":""}getWrapperClassNames(){return(0,_index_e6cb8223_js__WEBPACK_IMPORTED_MODULE_2__.c)("search-field__wrapper",`search-field__wrapper ${this.getSizeClass()}`,""+(this.isFocused?"focused":""))}static get watchers(){return{value:["valueWatcher"]}}};SearchField.style='.search-field{background-color:#ffffff;width:100%}.search-field .search-field__wrapper{box-sizing:border-box;height:40px;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:12px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%;outline:none}.search-field .search-field__wrapper.focused{border:1px solid #0A8276}.search-field .search-field__wrapper.search-field__wrapper-s{height:36px}.search-field .search-field__wrapper.search-field__wrapper-m{height:40px}.search-field .search-field__wrapper:hover:not(.focused,:focus){border:1px solid #3C3A39}.search-field .search-field__wrapper:focus{outline:none;border:1px solid #0A8276}.search-field .search-field__wrapper .delete-icon{right:12px;cursor:pointer}.search-field .search-field__wrapper input[type=text]{font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%;outline:none;height:100%}.search-field .search-field__wrapper input[type=text]:focus{outline:none}.search-field .search-field__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-field .search-field__wrapper:has(input[disabled]){background-color:#EEEDED}'},"./dist/esm/index-e6cb8223.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))}}]);