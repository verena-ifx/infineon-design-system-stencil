"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8706],{"./dist/esm/ifx-search-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_search_bar:()=>SearchBar});var _index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-7f04a2f1.js");const SearchBar=class{constructor(hostRef){(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxInput=(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxInput",7),this.handleCloseButton=()=>{this.internalState=!this.internalState},this.handleFocus=()=>{this.internalState=!0},this.showCloseButton=!0,this.isOpen=!0,this.disabled=!1,this.internalState=void 0,this.value=void 0}handlePropChange(){this.internalState=this.isOpen}handleSearchInput(event){console.log("search field event in search bar",event),this.value=event.detail.detail,this.ifxInput.emit(event.detail)}setInitialState(){this.internalState=this.isOpen}componentWillLoad(){this.setInitialState()}handleInput(event){this.value=event.detail}render(){return(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-bar "+(this.internalState?"open":"closed")},this.internalState?(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-bar-wrapper"},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-search-field",{disabled:this.disabled,value:this.value,onIfxInput:this.handleInput.bind(this)},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"search-16",slot:"search-icon"})),this.showCloseButton&&(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{href:"javascript:void(0)",onClick:this.handleCloseButton},"Close")):(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"search-bar__icon-wrapper",onClick:this.handleCloseButton},(0,_index_7f04a2f1_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"search-16"})))}static get watchers(){return{isOpen:["handlePropChange"]}}};SearchBar.style='*{font-family:"Source Sans 3"}.search-bar{box-sizing:border-box;height:40px;background-color:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.closed{display:flex;width:auto;justify-content:flex-start}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper a{text-decoration:none;font-size:1rem;font-style:normal;font-weight:600;line-height:1.5rem;color:#0A8276;cursor:pointer}.search-bar .search-bar-wrapper ifx-search-field{width:100%}.search-bar .search-bar__icon-wrapper{display:none;flex-direction:row;align-items:center}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}.search-bar.closed .search-bar__icon-wrapper{display:flex}.search-bar.closed .search-bar-wrapper{display:none}'}}]);