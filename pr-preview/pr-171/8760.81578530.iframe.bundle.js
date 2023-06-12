"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[8760],{"./dist/esm/ifx-multi-select-input.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_multi_select_input:()=>MultiSelectInput});var _index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-537698f9.js");const MultiSelectInput=class{constructor(hostRef){(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.addActiveMenuItem=e=>{const target=this.getClickedElement(e.composedPath()[0]),isCheckable=e.target.checkable;target&&(isCheckable?this.toggleCheckbox(target):(this.removeActiveMenuItem(),this.handleClassList(target,"add","active"),this.toggleDropdownMenu(e)))},this.Placeholder="",this.isEmpty=!0,this.isOverflowing=!1}handleOutsideClick(event){event.composedPath().includes(this.el)||this.closeDropdownMenu()}handleButtonClose(el){var _a,_b;const target=null===(_a=el.detail)||void 0===_a?void 0:_a.getAttribute("target"),dropdownMenu=this.el.querySelectorAll("ifx-dropdown-item"),selectedItems=this.el.shadowRoot.querySelector(".dropdown").querySelectorAll("ifx-multi-select-input-item");for(let i=0;i<dropdownMenu.length;i++)dropdownMenu[i].index===Number(target)&&(dropdownMenu[i].shadowRoot.querySelector("ifx-checkbox").checked=!1);if(null===(_b=el.detail)||void 0===_b||_b.remove(),el&&el.check)for(let i=0;i<selectedItems.length;i++){let selectedItemIndex=selectedItems[i].getAttribute("target");Number(el.target.index)===Number(selectedItemIndex)&&selectedItems[i].remove()}this.togglePlaceHolder(),this.toggleSlideButtons()}togglePlaceHolder(){const wrapperItems=this.getMultiSelectFieldWrapper().querySelector("ifx-multi-select-input-item");wrapperItems&&this.isEmpty?this.isEmpty=!1:wrapperItems||this.isEmpty||(this.isEmpty=!0)}toggleSlideButtons(){const multiSelectElement=this.getMultiSelectFieldWrapper();this.isOverflown(multiSelectElement)?this.isOverflowing=!0:this.isOverflowing&&(this.isOverflowing=!1)}getDropdownMenu(){let dropdownMenuComponent=this.el.querySelector("ifx-dropdown-menu");if(dropdownMenuComponent){dropdownMenuComponent=this.el.querySelector("ifx-dropdown-menu").shadowRoot;return dropdownMenuComponent.querySelector(".dropdown-menu")}}getDropdownWrapper(){return this.el.shadowRoot.querySelector(".dropdown")}getDropdownItems(){return this.el.querySelectorAll("ifx-dropdown-item")}handleClassList(el,type,className){null==el||el.classList[type](className)}toggleDropdownMenu(e){if(e.composedPath()[0].closest("span"))return;const multiSelectContainer=this.getMultiSelectFieldContainer(),dropdownMenu=this.getDropdownMenu(),dropdownWrapper=this.getDropdownWrapper();this.handleClassList(dropdownMenu,"toggle","show"),this.handleClassList(dropdownWrapper,"toggle","show"),this.handleClassList(multiSelectContainer,"toggle","show")}closeDropdownMenu(){const dropdownMenu=this.getDropdownMenu(),dropdownWrapper=this.getDropdownWrapper(),multiSelectContainer=this.getMultiSelectFieldContainer();this.handleClassList(dropdownMenu,"remove","show"),this.handleClassList(dropdownWrapper,"remove","show"),this.handleClassList(multiSelectContainer,"remove","show")}removeActiveMenuItem(){const dropdownMenuItems=this.getDropdownItems();for(let i=0;i<dropdownMenuItems.length;i++)this.handleClassList(dropdownMenuItems[i].shadowRoot.querySelector("a"),"remove","active")}toggleCheckbox(target){target.querySelector("ifx-checkbox").checked=!target.querySelector("ifx-checkbox").checked}getClickedElement(target){return(target instanceof SVGElement||!target.className.includes("dropdown-menu")&&!target.className.includes("form-check-input"))&&target.closest(".dropdown-item")}getMultiSelectFieldWrapper(){return this.el.shadowRoot.querySelector(".multiSelectInput__content")}getMultiSelectFieldContainer(){return this.el.shadowRoot.querySelector(".multiSelectInput__container")}getMultiSelectFieldIconWrapper(){return this.el.shadowRoot.querySelector(".multiSelectInput__container").querySelector(".multiSelectInput__icon-wrapper")}addSelectItemsToArray(){var menuItems=this.getMultiSelectFieldWrapper().querySelectorAll("ifx-multi-select-input-item");return Array.from(menuItems).reduce((function(acc,item){return acc+item.offsetWidth}),0)}isOverflown(element){return element.scrollWidth>element.clientWidth}addSelectSlider(direction){var wrapper=this.getMultiSelectFieldWrapper(),menuItems=wrapper.querySelectorAll("ifx-multi-select-input-item"),totalWidth=Array.from(menuItems).reduce((function(acc,item){return acc+item.offsetWidth}),0);"left"===direction?wrapper.scrollLeft-=totalWidth:"right"===direction&&(wrapper.scrollLeft+=totalWidth)}async addItemValueToTextField(value){var _a;const multiSelectElement=this.getMultiSelectFieldWrapper(),newItem=document.createElement("ifx-multi-select-input-item");newItem.setAttribute("target",null===(_a=value.target)||void 0===_a?void 0:_a.index),newItem.setAttribute("content",value.value),multiSelectElement.append(newItem),setTimeout((()=>{this.toggleSlideButtons()}),20)}addEventListeners(){const dropdownMenu=this.getDropdownMenu();let dropdownMenuComponent=this.el.querySelector("ifx-dropdown-menu");document.addEventListener("click",this.handleOutsideClick.bind(this)),dropdownMenu.addEventListener("click",this.addActiveMenuItem),dropdownMenuComponent.addEventListener("selectValues",(event=>{this.addItemValueToTextField(event.detail),this.handleButtonClose(event.detail)}))}componentDidLoad(){this.getMultiSelectFieldContainer().addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners()}render(){return(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"multiSelect dropdown"},(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"multiSelectInput__container",tabindex:1},this.isOverflowing&&(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"prev",onClick:()=>this.addSelectSlider("left")},(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"chevron-left-16"})),this.isOverflowing&&(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"next",onClick:()=>this.addSelectSlider("right")},(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"chevron-right-16"})),(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"multiSelectInput__wrapper"},(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"multiSelectInput__content"},this.isEmpty&&(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.Placeholder))),(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"multiSelectInput__icon-wrapper"},(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("ifx-icon",{icon:"chevron-down-16"}))),(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"menu"}))}get el(){return(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};MultiSelectInput.style=""}}]);