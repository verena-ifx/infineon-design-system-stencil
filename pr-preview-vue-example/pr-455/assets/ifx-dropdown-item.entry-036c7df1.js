import{r as i,c as n,h as t,g as o}from"./index-b33b63b1.js";const s='*{font-family:"Source Sans 3"}.dropdown-item{text-decoration:none;color:#1D1D1D;display:flex;align-items:center;padding:8px 16px;gap:8px}.dropdown-item.hide{display:none}.dropdown-item span{color:#1D1D1D;font-family:Source Sans 3;font-size:16px;font-style:normal;font-weight:400;line-height:24px;}.dropdown-item.small span{font-size:14px}.dropdown-item:hover{cursor:pointer;background-color:#EEEDED}.dropdown-item:active{background-color:#BFBBBB}.icon{margin-right:4px}',r=class{constructor(e){i(this,e),this.ifxDropdownItemValue=n(this,"ifxDropdownItemValue",7),this.icon=void 0,this.href="",this.target="_self",this.hide=!1,this.size="l"}handleMenuSize(e){this.size=e.detail}handleEventEmission(){this.ifxDropdownItemValue.emit(this.el.textContent)}render(){let e=this.href?{href:this.href,target:this.target}:{};return t("a",Object.assign({},e,{onClick:()=>this.handleEventEmission(),class:`dropdown-item ${this.size==="s"?"small":""} ${this.hide?"hide":""}`}),this.icon&&t("ifx-icon",{class:"icon",icon:this.icon}),t("span",null,t("slot",null)))}get el(){return o(this)}};r.style=s;export{r as ifx_dropdown_item};
