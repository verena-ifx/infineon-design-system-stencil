"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[4840],{4840:(l,s,t)=>{t.r(s),t.d(s,{ifx_switch:()=>a});var i=t(6050);const a=class{constructor(e){(0,i.r)(this,e),this.ifxChange=(0,i.c)(this,"ifxChange",7),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}componentWillLoad(){this.internalValue=this.value}valueChanged(e,o){e!==o&&(this.internalValue=e)}toggle(){this.disabled||(this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}handleKeyDown(e){this.disabled||("Enter"===e.key||" "===e.key)&&this.toggle()}render(){return(0,i.h)("div",{class:`container ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`,role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:()=>this.toggle(),onKeyDown:e=>this.handleKeyDown(e)},(0,i.h)("input",{type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:`${this.internalValue}`}),(0,i.h)("div",{class:`switch ${this.internalValue?"checked":""} ${this.disabled?"disabled":""}`}))}static get watchers(){return{value:["valueChanged"]}}};a.style=":host{display:inline-block;user-select:none}.container{display:inline-block;position:relative;width:50px;height:25px;background-color:#ffffff;border:1px solid #7d6f72;border-radius:25px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default}.switch{position:absolute;top:2px;left:2px;width:21px;height:21px;background-color:#7d6f72;border-radius:50%;transition:transform 0.3s ease}.switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch.checked{transform:translateX(25px);background-color:#ffffff}.switch.checked.disabled{cursor:default}.container.checked{background-color:#378375;border-color:#378375}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}"}}]);