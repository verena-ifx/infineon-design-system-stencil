"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[906],{6906:(d,a,i)=>{i.r(a),i.d(a,{ifx_range:()=>n});var e=i(1621);const n=class{constructor(t){(0,e.r)(this,t),this.valueChanged=(0,e.c)(this,"valueChanged",7),this.min=0,this.max=100,this.value=0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0}handleInputChange(t){this.value=parseInt(t.target.value),this.valueChanged.emit(this.value),this.updateValuePercent()}updateValuePercent(){this.inputRef&&this.inputRef.style.setProperty("--value-percent",(this.value-this.min)/(this.max-this.min)*100+"%")}componentDidLoad(){this.updateValuePercent()}render(){return(0,e.h)("div",{class:"ifx-range"},this.leftText&&(0,e.h)("span",{class:"left-text"+(this.disabled?" disabled":"")},this.leftText),this.leftIcon&&(0,e.h)("ifx-icon",{icon:this.leftIcon,class:"left-icon"+(this.disabled?" disabled":"")}),(0,e.h)("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.value,ref:t=>this.inputRef=t,onInput:t=>this.handleInputChange(t)}),this.rightIcon&&(0,e.h)("ifx-icon",{icon:this.rightIcon,class:"right-icon"+(this.disabled?" disabled":"")}),this.rightText&&(0,e.h)("span",{class:"right-text"+(this.disabled?" disabled":"")},this.rightText),this.showPercentage&&(0,e.h)("span",{class:"percentage-display"+(this.disabled?" disabled":"")},this.value,"%"))}};n.style=':host{display:inline-block}.dot{display:inline-block;width:8px;height:8px;border-radius:50%}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-family:"Source Sans Pro";font-size:0.8125rem;color:#7d6f72;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#dcd5d7}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-range{display:flex;align-items:center;padding:2px 16px;border-radius:100px}.ifx-range input[type=range]{-webkit-appearance:none;width:100%;height:3px;background:linear-gradient(to right, #378375 0%, #378375 var(--value-percent, 0%), #ebe9e9 var(--value-percent, 0%), #ebe9e9 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-range input[type=range]:disabled{background:#dcd5d7;cursor:default}.ifx-range input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-range input[type=range]::-webkit-slider-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-range input[type=range]::-webkit-slider-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}.ifx-range input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#378375;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-range input[type=range]::-moz-range-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#2d6357}.ifx-range input[type=range]::-moz-range-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#28594e}'}}]);