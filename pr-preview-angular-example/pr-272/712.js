"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[712],{3712:(d,a,i)=>{i.r(a),i.d(a,{ifx_slider:()=>n});var t=i(6050);const n=class{constructor(e){(0,t.r)(this,e),this.ifxChanged=(0,t.c)(this,"ifxChanged",7),this.min=0,this.max=100,this.value=0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0,this.internalValue=0}valueChanged(e){this.internalValue=e,this.updateValuePercent()}handleInputChange(e){this.internalValue=parseInt(e.target.value),this.ifxChanged.emit(this.internalValue),this.updateValuePercent()}updateValuePercent(){this.inputRef&&this.inputRef.style.setProperty("--value-percent",(this.internalValue-this.min)/(this.max-this.min)*100+"%")}componentWillLoad(){this.internalValue=this.value}componentDidLoad(){this.updateValuePercent()}render(){return(0,t.h)("div",{class:"ifx-slider"},this.leftText&&(0,t.h)("span",{class:"left-text"},this.leftText),this.leftIcon&&(0,t.h)("ifx-icon",{icon:this.leftIcon,class:"left-icon"+(this.disabled?" disabled":"")}),(0,t.h)("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.internalValue,ref:e=>this.inputRef=e,onInput:e=>this.handleInputChange(e)}),this.rightIcon&&(0,t.h)("ifx-icon",{icon:this.rightIcon,class:"right-icon"+(this.disabled?" disabled":"")}),this.rightText&&(0,t.h)("span",{class:"right-text"+(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&(0,t.h)("span",{class:"percentage-display"+(this.disabled?" disabled":"")},this.value,"%"))}static get watchers(){return{value:["valueChanged"]}}};n.style='*{font-family:"Source Sans Pro"}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.8125rem;color:#7d6f72;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#dcd5d7}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:100px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:3px;background:linear-gradient(to right, #378375 0%, #378375 var(--value-percent, 0%), #ebe9e9 var(--value-percent, 0%), #ebe9e9 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]:disabled{background:#dcd5d7;cursor:default}.ifx-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]::-webkit-slider-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-slider input[type=range]::-webkit-slider-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]::-moz-range-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-slider input[type=range]::-moz-range-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}'}}]);