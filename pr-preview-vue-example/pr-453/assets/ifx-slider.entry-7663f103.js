import{r as a,c as n,h as t}from"./index-c87906e4.js";const s='*{font-family:"Source Sans 3"}:host{display:inline-block}.left-icon,.right-icon,.left-text,.right-text,.percentage-display{font-size:0.813rem;color:#575352;margin-left:8px}.left-icon.disabled,.right-icon.disabled,.left-text.disabled,.right-text.disabled,.percentage-display.disabled{color:#BFBBBB}.left-icon,.left-text{margin-right:8px}.right-icon,.right-text,.percentage-display{margin-left:8px}.ifx-slider{display:flex;align-items:center;padding:2px 16px;border-radius:9999px}.ifx-slider input[type=range]{-webkit-appearance:none;width:100%;height:3px;background:linear-gradient(to right, #0A8276 0%, #0A8276 var(--value-percent, 0%), #EEEDED var(--value-percent, 0%), #EEEDED 100%);outline:none;cursor:pointer;transition:0.2s}.ifx-slider input[type=range]:disabled{background:#BFBBBB;cursor:default}.ifx-slider input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]::-webkit-slider-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#08665C}.ifx-slider input[type=range]::-webkit-slider-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#06534B}.ifx-slider input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#0A8276;cursor:pointer;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2)}.ifx-slider input[type=range]::-moz-range-thumb:hover{box-shadow:0px 1px 4px rgba(0, 0, 0, 0.4);background:#08665C}.ifx-slider input[type=range]::-moz-range-thumb:active{box-shadow:0px 1px 6px rgba(0, 0, 0, 0.6);background:#06534B}',r=class{constructor(e){a(this,e),this.ifxChange=n(this,"ifxChange",7),this.min=0,this.max=100,this.value=0,this.disabled=!1,this.showPercentage=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.leftText=void 0,this.rightText=void 0,this.internalValue=0}valueChanged(e){this.internalValue=e,this.updateValuePercent()}handleInputChange(e){const i=e.target;this.internalValue=parseInt(i.value),this.ifxChange.emit(this.internalValue),this.updateValuePercent()}updateValuePercent(){if(this.inputRef){const e=(this.internalValue-this.min)/(this.max-this.min)*100;this.inputRef.style.setProperty("--value-percent",`${e}%`)}}componentWillLoad(){this.internalValue=this.value}componentDidLoad(){this.updateValuePercent()}render(){return t("div",{class:"ifx-slider"},this.leftText&&t("span",{class:"left-text"},this.leftText),this.leftIcon&&t("ifx-icon",{icon:this.leftIcon,class:`left-icon${this.disabled?" disabled":""}`}),t("input",{type:"range",min:this.min,max:this.max,disabled:this.disabled,value:this.internalValue,ref:e=>this.inputRef=e,onInput:e=>this.handleInputChange(e)}),this.rightIcon&&t("ifx-icon",{icon:this.rightIcon,class:`right-icon${this.disabled?" disabled":""}`}),this.rightText&&t("span",{class:`right-text${this.disabled?" disabled":""}`},this.rightText),this.showPercentage&&t("span",{class:`percentage-display${this.disabled?" disabled":""}`},this.value,"%"))}static get watchers(){return{value:["valueChanged"]}}};r.style=s;export{r as ifx_slider};
