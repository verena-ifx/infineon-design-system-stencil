import{r as n,c as t,h as r,g as a}from"./index-f0e746ad.js";const c=':host{display:inline-flex;vertical-align:top}.checkbox__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px}.checkbox__container .checkbox__wrapper{display:flex;position:relative;justify-content:center;align-items:center;width:20px;height:20px;background-color:#FFFFFF;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.error{border-color:#CD002F}.checkbox__container .checkbox__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper:hover{background-color:#EEEDED;border:1px solid #575352;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked{background-color:#0A8276;border-radius:1px;border-color:transparent;flex:none;order:0;flex-grow:0;color:#FFFFFF}.checkbox__container .checkbox__wrapper.checked:focus-visible{border:1px solid transparent;outline:2px solid #0A8276;outline-offset:2px}.checkbox__container .checkbox__wrapper.checked:hover{background-color:#08665C;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.checked.disabled{background:#BFBBBB;border-radius:1px;flex:none;order:0;flex-grow:0}.checkbox__container .checkbox__wrapper.indeterminate:before{content:"";display:block;width:70%;height:2px;background-color:#08665C;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.checkbox__container .label{width:25px;height:20px;font-style:normal;font-weight:400;font-size:0.813rem;line-height:1.25rem;color:#1D1D1D;flex:none;order:1;flex-grow:0}.checkbox__container .label.disabled{color:#BFBBBB}.checkbox__container .label.error{color:#CD002F}.checkbox__container .checkbox__wrapper:hover,.checkbox__container .label:hover{cursor:pointer}',l=class{constructor(e){n(this,e),this.ifxChange=t(this,"ifxChange",7),this.disabled=!1,this.value=!1,this.error=!1,this.name="",this.internalValue=void 0,this.indeterminate=!1}handleCheckbox(){this.disabled||(this.inputElement.indeterminate?(this.internalValue=!0,this.indeterminate=!1):this.internalValue=!this.internalValue,this.ifxChange.emit(this.el))}valueChanged(e,i){e!==i&&(this.internalValue=e,this.inputElement.checked=this.internalValue)}handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.handleCheckbox(),e.preventDefault())}componentWillLoad(){this.internalValue=this.value}componentDidRender(){this.inputElement.indeterminate=this.indeterminate}render(){const e=this.el.innerHTML;let i=!1;return e&&(i=!0),r("div",{class:"checkbox__container"},r("input",{type:"checkbox",hidden:!0,ref:o=>this.inputElement=o,name:this.name,checked:this.internalValue,onChange:this.handleCheckbox.bind(this),id:"checkbox",value:`${this.internalValue}`}),r("div",{tabindex:"0",onClick:this.handleCheckbox.bind(this),onKeyDown:this.handleKeydown.bind(this),role:"checkbox","aria-value":this.internalValue,"aria-disabled":this.disabled,"aria-labelledby":"label",class:`checkbox__wrapper 
        ${this.internalValue?"checked":""} 
        ${this.indeterminate?"indeterminate":""}
        ${this.disabled?"disabled":""}
        ${this.error?"error":""}`},this.internalValue&&r("ifx-icon",{icon:"check-12"})),i&&r("div",{id:"label",class:`label ${this.error?"error":""} ${this.disabled?"disabled":""} `,onClick:this.handleCheckbox.bind(this)},r("slot",null)))}get el(){return a(this)}static get watchers(){return{value:["valueChanged"]}}};l.style=c;export{l as ifx_checkbox};
