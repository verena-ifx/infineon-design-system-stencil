"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2701],{"./dist/esm/ifx-sidebar-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_sidebar_item:()=>SidebarItem});var _index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fbf4ddae.js");const SidebarItem=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icon="",this.hasIcon=!1}componentDidLoad(){const iconWrapper=this.el.shadowRoot.querySelector("ifx-icon");if(iconWrapper){const icon=iconWrapper.querySelector("svg");this.hasIcon=!!icon}}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"sidebar__nav-item"},this.icon&&(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"sidebar__nav-item-icon-wrapper "+(this.hasIcon?"":"noIcon")},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:this.icon})),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"sidebar__nav-item-label"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};SidebarItem.style=".sidebar__nav-item{display:flex;flex-direction:row;align-items:center;width:100%;padding:8px 4px 8px 0px;gap:4px;flex:none;order:0;flex-grow:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;gap:8px;flex:none;order:0;flex-grow:0}.sidebar__nav-item .sidebar__nav-item-icon-wrapper.noIcon{display:none}.sidebar__nav-item .sidebar__nav-item-icon-wrapper ifx-icon{width:16px;height:16px}.sidebar__nav-item .sidebar__nav-item-label{font-style:normal;font-weight:400;font-size:16px;line-height:24px;display:flex;align-items:center;color:#1d1d1d;flex:none;order:1;flex-grow:1}.sidebar__nav-item .sidebar__nav-item-number{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 4px;flex:none;order:2;flex-grow:0}"}}]);