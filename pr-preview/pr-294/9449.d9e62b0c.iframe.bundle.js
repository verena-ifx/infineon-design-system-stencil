"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[9449],{"./dist/esm/ifx-breadcrumb-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_breadcrumb_item:()=>BreadcrumbItem});var _index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fbf4ddae.js");const BreadcrumbItem=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.isLastItem=!1}handleOutsideClick(event){event.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){return this.el.shadowRoot.querySelector(".dropdown-menu")}menuWrapperEventReEmitter(event){this.emittedElement=event.detail}getMenuIconWrapper(){return this.emittedElement}handleClassList(el,type,className){el.classList[type](className)}closeDropdownMenu(){const dropdownMenu=this.getDropdownMenu(),menuWrapper=this.getMenuIconWrapper();this.handleClassList(dropdownMenu,"remove","open"),this.handleClassList(menuWrapper,"remove","show")}toggleDropdownMenu(){const dropdownMenu=this.getDropdownMenu(),menuWrapper=this.getMenuIconWrapper();this.handleClassList(dropdownMenu,"toggle","open"),this.handleClassList(menuWrapper,"toggle","show")}handleLastItem(){const breadcrumbItems=this.el.closest("ifx-breadcrumb").querySelectorAll("ifx-breadcrumb-item");this.el===breadcrumbItems[breadcrumbItems.length-1]?this.isLastItem=!0:this.isLastItem=!1}componentWillLoad(){this.handleLastItem()}componentDidUpdate(){this.handleLastItem()}componentDidLoad(){if(!this.el.querySelector("ifx-dropdown-menu")){const iconMenuWrapper=this.getMenuIconWrapper();this.handleClassList(iconMenuWrapper,"toggle","hide")}}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{class:"breadcrumb-parent","aria-current":""+(this.isLastItem?"page":""),onClick:()=>this.toggleDropdownMenu()},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{class:"breadcrumb-wrapper"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"}),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dropdown-menu"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))),!this.isLastItem&&(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"breadcrumb-divider"},"/"))}get el(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};BreadcrumbItem.style=".breadcrumb-parent{display:flex;flex-direction:row;align-items:center;padding:0px;gap:12px}.breadcrumb-parent:hover{cursor:pointer}.breadcrumb-parent .breadcrumb-wrapper{display:flex;flex-direction:row;align-items:center;padding:0px;gap:8px;position:relative}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu{display:none;position:absolute;top:20px}.breadcrumb-parent .breadcrumb-wrapper .dropdown-menu.open{display:block}.breadcrumb-parent .breadcrumb-wrapper a{text-decoration:none;color:#1d1d1d;font-style:normal;font-weight:400;font-size:14px;line-height:20px;display:flex;align-items:center;color:#1D1D1D;flex-direction:column;justify-content:center;padding:0px;border-bottom:1px solid #1D1D1D}.breadcrumb-parent .breadcrumb-divider{width:10px;height:16px;color:#dcd5d7;line-height:13px;font-size:20px;margin-right:12px}"}}]);