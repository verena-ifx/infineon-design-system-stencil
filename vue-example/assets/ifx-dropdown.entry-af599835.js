import{r,h as n,g as d}from"./index-9771da62.js";const i=`.dropdown{display:inline-flex;flex-direction:column;position:relative}.dropdown .btn{min-width:200px}.dropdown .dropdown-toggle::after{content:"";display:inline-block;border:none;vertical-align:-2px;margin-left:10px;background-position:center;background-repeat:no-repeat;transition:transform 0.2s ease-in-out;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z'/%3E%3C/svg%3E")}.dropdown.show .dropdown-toggle::after{transform:rotate(-180deg);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z'/%3E%3C/svg%3E")}.dropdown .btn-sm+.dropdown-menu{transform:translate3d(0px, 56.75px, 0px) !important}.dropdown .btn-lg+.dropdown-menu{transform:translate3d(0px, 72.5px, 0px) !important}.show>.btn-secondary.dropdown-toggle:focus{box-shadow:none}.svg-wrapper{display:inline-block}`,l=class{constructor(e){r(this,e),this.addActiveMenuItem=o=>{const t=this.getClickedElement(o.composedPath()[0]),s=o.target.checkable;if(t){if(s){this.toggleCheckbox(t);return}this.removeActiveMenuItem(),this.handleClassList(t,"add","active"),this.toggleDropdownMenu()}},this.label=void 0,this.size=void 0,this.disabled=void 0,this.icon=!1,this.search=!1,this.filter=!1}handleOutsideClick(e){e.composedPath().includes(this.el)||this.closeDropdownMenu()}getDropdownMenu(){return this.el.querySelector("ifx-dropdown-menu").shadowRoot.querySelector(".dropdown-menu")}getDropdownWrapper(){return this.el.shadowRoot.querySelector(".dropdown")}getDropdownItems(){return this.el.querySelectorAll("ifx-dropdown-item")}handleClassList(e,o,t){e.classList[o](t)}toggleDropdownMenu(){const e=this.getDropdownMenu(),o=this.getDropdownWrapper();this.handleClassList(e,"toggle","show"),this.handleClassList(o,"toggle","show")}closeDropdownMenu(){const e=this.getDropdownMenu(),o=this.getDropdownWrapper();this.handleClassList(e,"remove","show"),this.handleClassList(o,"remove","show")}removeActiveMenuItem(){const e=this.getDropdownItems();for(let o=0;o<e.length;o++)this.handleClassList(e[o].shadowRoot.querySelector("a"),"remove","active")}toggleCheckbox(e){e.querySelector("ifx-checkbox").checked=!e.querySelector("ifx-checkbox").checked}getClickedElement(e){return e instanceof SVGElement?e.closest(".dropdown-item"):e.className.includes("dropdown-menu")||e.className.includes("form-check-input")?!1:e.closest(".dropdown-item")}addEventListeners(){const e=this.getDropdownMenu();document.addEventListener("click",this.handleOutsideClick.bind(this)),e.addEventListener("click",this.addActiveMenuItem)}componentDidRender(){let e=this.el.querySelector("ifx-button");if(e){const o=e.shadowRoot.querySelector("button");o.classList.contains("disabled")||(o.addEventListener("click",this.toggleDropdownMenu.bind(this)),this.addEventListeners())}}render(){return n("div",{class:"dropdown"},n("slot",{name:"button"}),n("slot",null))}get el(){return d(this)}};l.style=i;export{l as ifx_dropdown};
