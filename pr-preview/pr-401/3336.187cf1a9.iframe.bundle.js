"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3336],{"./dist/esm/ifx-select-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_select_input:()=>SelectInput});var _index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-69e586c1.js");const SelectInput=class{constructor(hostRef){(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.addActiveMenuItem=e=>{const target=this.getClickedElement(e.composedPath()[0]),isCheckable=e.target.checkable;target&&(isCheckable?this.toggleCheckbox(target):(this.removeActiveMenuItem(),this.handleClassList(target,"add","active"),this.toggleDropdownMenu()))}}handleOutsideClick(event){event.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){let dropdownMenuComponent=this.el.querySelector("ifx-dropdown-menu");if(dropdownMenuComponent){dropdownMenuComponent=this.el.querySelector("ifx-dropdown-menu").shadowRoot;return dropdownMenuComponent.querySelector(".dropdown-menu")}}getDropdownWrapper(){return this.el.shadowRoot.querySelector(".dropdown")}getDropdownItems(){return this.el.querySelectorAll("ifx-dropdown-item")}handleClassList(el,type,className){null==el||el.classList[type](className)}toggleDropdownMenu(){const textFieldElement=this.getTextField().shadowRoot.querySelector(".textInput__bottom-wrapper"),dropdownMenu=this.getDropdownMenu(),dropdownWrapper=this.getDropdownWrapper();this.handleClassList(dropdownMenu,"toggle","show"),this.handleClassList(dropdownWrapper,"toggle","show"),this.handleClassList(textFieldElement,"toggle","show")}closeDropdownMenu(){const dropdownMenu=this.getDropdownMenu(),dropdownWrapper=this.getDropdownWrapper(),textFieldElement=this.getTextField().shadowRoot.querySelector(".textInput__bottom-wrapper");this.handleClassList(dropdownMenu,"remove","show"),this.handleClassList(dropdownWrapper,"remove","show"),this.handleClassList(textFieldElement,"remove","show")}removeActiveMenuItem(){const dropdownMenuItems=this.getDropdownItems();for(let i=0;i<dropdownMenuItems.length;i++)this.handleClassList(dropdownMenuItems[i].shadowRoot.querySelector("a"),"remove","active")}toggleCheckbox(target){target.querySelector("ifx-checkbox").checked=!target.querySelector("ifx-checkbox").checked}getClickedElement(target){return(target instanceof SVGElement||!target.className.includes("dropdown-menu")&&!target.className.includes("form-check-input"))&&target.closest(".dropdown-item")}getTextField(){return this.el.querySelector("ifx-text-field")}addItemValueToTextField(value){this.getTextField().value=value.value}addEventListeners(){const dropdownMenu=this.getDropdownMenu();document.addEventListener("click",this.handleOutsideClick.bind(this)),dropdownMenu.addEventListener("click",this.addActiveMenuItem),this.el.querySelector("ifx-dropdown-menu").addEventListener("selectValues",(event=>{this.addItemValueToTextField(event.detail)}))}componentDidRender(){let textInput=this.el.querySelector("ifx-text-field");if(textInput){const textInputElement=textInput.shadowRoot.querySelector("input");textInputElement.classList.contains("disabled")||(textInputElement.addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners())}}render(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dropdown selectInput"},(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"text-input"}),(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"menu"}))}get el(){return(0,_index_69e586c1_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};SelectInput.style=".selectInput.dropdown{width:235px}"}}]);