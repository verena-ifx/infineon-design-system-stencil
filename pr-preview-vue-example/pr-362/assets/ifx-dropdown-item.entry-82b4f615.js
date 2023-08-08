import{r as c,c as r,h as t,g as n}from"./index-3f0e1966.js";const s=".dropdown-item{display:flex;align-items:center;gap:12px;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;text-decoration:none;color:#1d1d1d}.dropdown-item.primary input[type=checkbox]{accent-color:#378375}.dropdown-item.secondary input[type=checkbox]{accent-color:#ab377a}.dropdown-item.success input[type=checkbox]{accent-color:#aec067}.dropdown-item.danger input[type=checkbox]{accent-color:#cd002f}.dropdown-item.warning input[type=checkbox]{accent-color:#f07f3c}.dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-item .form-check-input{border-radius:1px}.dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-item:hover svg{color:#1d1d1d}.dropdown-item.active,.dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-item.active svg,.dropdown-item:active svg{color:#378375;fill:none}",d=class{constructor(e){c(this,e),this.itemValues=r(this,"itemValues",3),this.label=void 0,this.size=void 0,this.disabled=void 0,this.icon=void 0,this.checkable=!1,this.value="",this.checkboxColor="",this.url="",this.target="_self"}handleItemChange(e){if(e.currentTarget.className.toLowerCase()!=="form-check-input"){const o=this.el.shadowRoot.querySelector("ifx-checkbox");o?e.target.nodeName.toUpperCase()==="IFX-CHECKBOX"?this.itemValues.emit({check:!o.checked,value:this.value,target:this.el.closest("ifx-dropdown-item")}):this.itemValues.emit({check:o.checked,value:this.value,target:this.el.closest("ifx-dropdown-item")}):this.itemValues.emit({value:this.value})}}componentWillRender(){if(this.el.closest("ifx-dropdown")&&this.el.closest("ifx-dropdown").querySelector("ifx-button")){const i=this.el.closest("ifx-dropdown").querySelector("ifx-button").color;this.checkboxColor=i}}render(){return t("a",{href:this.url,target:this.target,onClick:this.handleItemChange.bind(this),class:`dropdown-item ${this.checkboxColor}`},this.checkable&&t("ifx-checkbox",null),this.icon&&t("ifx-icon",{icon:this.icon}),t("label",{class:"form-check-label"},t("slot",null)))}get el(){return n(this)}};d.style=s;export{d as ifx_dropdown_item};
