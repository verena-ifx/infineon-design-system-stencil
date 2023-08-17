import{r as l,h as t,g as a}from"./index-6f1b5295.js";import{c as p}from"./popper-1604923e-f3391c26.js";const n='*{font-family:"Source Sans 3"}.tooltip__container{display:inline-flex;flex-direction:column;position:relative}.tooltip-text-icon,.tooltip-compact,.tooltip-dismissable{background-color:#1D1D1D;border:1px solid black;z-index:1;opacity:0;transition:opacity 0.3s;position:relative;font-family:Source Sans 3;font-size:13px;font-style:normal;font-weight:400;line-height:20px;color:#FFFFFF}.visible.tooltip-text-icon,.visible.tooltip-compact,.visible.tooltip-dismissable{opacity:1}.tooltip-dismissable{width:310px}.tooltip-dismissable .close-button{position:absolute;top:12px;right:12px;cursor:pointer}.tooltip-dismissable .tooltip-dismissable-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1}.tooltip-dismissable .tooltip-dismissable-header,.tooltip-dismissable .tooltip-dismissable-body{font-family:"Source Sans 3";font-size:13px;font-style:normal;line-height:20px}.tooltip-dismissable .tooltip-dismissable-header{font-weight:600}.tooltip-dismissable .tooltip-dismissable-body{font-weight:400}.tooltip-compact{padding:4px 8px;text-align:center;flex-grow:1}.tooltip-text-icon{width:310px;padding-left:36px}.tooltip-text-icon .text-plus-icon_icon{position:absolute;width:24px;height:24px;top:12px;left:12px;cursor:pointer}.tooltip-text-icon .tooltip-text-icon-content{display:flex;flex-direction:column;gap:12px;padding:12px;flex-grow:1}.tooltip-text-icon .tooltip-text-icon-header,.tooltip-text-icon .tooltip-text-icon-body{font-family:"Source Sans 3";font-size:13px;font-style:normal;line-height:20px}.tooltip-text-icon .tooltip-text-icon-header{font-weight:600}.tooltip-text-icon .tooltip-text-icon-body{font-weight:400}.tooltip__container .tooltip-arrow-svg{position:absolute;width:8px;height:8px}[data-placement=top].tooltip-text-icon>.tooltip-arrow-svg,[data-placement=top].tooltip-dismissable>.tooltip-arrow-svg,[data-placement=top].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:50%;transform:rotate(180deg) translateX(-50%)}[data-placement=top-start].tooltip-text-icon>.tooltip-arrow-svg,[data-placement=top-start].tooltip-dismissable>.tooltip-arrow-svg,[data-placement=top-start].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;right:10px;transform:rotate(180deg)}[data-placement=top-end].tooltip-text-icon>.tooltip-arrow-svg,[data-placement=top-end].tooltip-dismissable>.tooltip-arrow-svg,[data-placement=top-end].tooltip-compact>.tooltip-arrow-svg{bottom:-8px;left:10px;transform:rotate(180deg)}[data-placement=bottom].tooltip-text-icon>.tooltip-arrow-svg,[data-placement=bottom].tooltip-dismissable>.tooltip-arrow-svg,[data-placement=bottom].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:50%;transform:translateX(-50%)}[data-placement=bottom-start].tooltip-text-icon>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-dismissable>.tooltip-arrow-svg,[data-placement=bottom-start].tooltip-compact>.tooltip-arrow-svg{top:-8px;left:10px}[data-placement=bottom-end].tooltip-text-icon>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-dismissable>.tooltip-arrow-svg,[data-placement=bottom-end].tooltip-compact>.tooltip-arrow-svg{top:-8px;right:10px}[data-placement=left].tooltip-text-icon>.tooltip-arrow-svg,[data-placement=left].tooltip-dismissable>.tooltip-arrow-svg,[data-placement=left].tooltip-compact>.tooltip-arrow-svg{right:-4px;top:50%;transform:rotate(90deg) translateY(-50%) translateX(-50%)}[data-placement=right].tooltip-text-icon>.tooltip-arrow-svg,[data-placement=right].tooltip-dismissable>.tooltip-arrow-svg,[data-placement=right].tooltip-compact>.tooltip-arrow-svg{left:-4px;top:50%;transform:rotate(270deg) translateY(-50%) translateX(50%)}',r=class{constructor(o){l(this,o),this.popperInstance=null,this.onMouseEnter=()=>{var i;this.initializePopper(),this.tooltipVisible=!0,(i=this.popperInstance)===null||i===void 0||i.update()},this.onMouseLeave=()=>{this.tooltipVisible=!1},this.onClick=()=>{var i;this.variant==="dismissable"&&(this.initializePopper(),this.tooltipVisible=!this.tooltipVisible,(i=this.popperInstance)===null||i===void 0||i.update())},this.tooltipVisible=!1,this.header="",this.text="",this.position="auto",this.variant="compact",this.icon=void 0}initializePopper(){if(this.popperInstance)return;this.referenceEl=this.el,this.variant==="compact"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-compact"):this.variant==="dismissable"?this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-dismissable"):this.tooltipEl=this.el.shadowRoot.querySelector(".tooltip-text-icon");const o=this.position==="auto"?this.determineBestPosition():this.position;this.tooltipEl&&this.referenceEl&&(this.popperInstance=p(this.referenceEl,this.tooltipEl,{placement:o,modifiers:[{name:"offset",options:{offset:[0,8]}}]})),this.tooltipEl.setAttribute("data-placement",o)}determineBestPosition(){return this.el.getBoundingClientRect().top>window.innerHeight/2?"top":"bottom"}positionChanged(){var o;(o=this.popperInstance)===null||o===void 0||o.destroy(),this.popperInstance=null}disconnectedCallback(){var o;(o=this.popperInstance)===null||o===void 0||o.destroy()}render(){const o={"tooltip-dismissable":!0,visible:this.tooltipVisible},i={"tooltip-compact":!0,visible:this.tooltipVisible},e={"tooltip-text-icon":!0,visible:this.tooltipVisible},s=this.variant==="compact"||this.variant==="textPlusIcon"?{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave}:{onClick:this.onClick};return t("div",Object.assign({class:"tooltip__container"},s),t("slot",null),this.variant==="dismissable"&&t("div",{class:o},t("ifx-icon",{icon:"cross16",class:"close-button"}),t("div",{class:"tooltip-dismissable-content"},t("div",{class:"tooltip-dismissable-header"},this.header),t("div",{class:"tooltip-dismissable-body"},this.text)),t("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant==="compact"&&t("div",{class:i},this.text,t("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))),this.variant==="textPlusIcon"&&t("div",{class:e},t("slot",{name:"icon"},this.icon?t("div",{class:"text-plus-icon_icon"},t("ifx-icon",{icon:this.icon})):t("svg",{class:"text-plus-icon_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},t("path",{stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round",d:"M20.5 2.5h-16a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2Z"}),t("path",{stroke:"#fff",d:"M19 17H6l2.5-4 2.097 2.516.405.486.379-.506 4.118-5.49.003-.002L19 17Z"}),t("path",{fill:"#fff",d:"M10 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}))),t("div",{class:"tooltip-text-icon-content"},t("div",{class:"tooltip-text-icon-header"},this.header),t("div",{class:"tooltip-text-icon-body"},this.text)),t("svg",{class:"tooltip-arrow-svg",width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{id:"Indicator",d:"M6 0L12 8L0 8L6 0Z",fill:"#1D1D1D"}))))}get el(){return a(this)}static get watchers(){return{position:["positionChanged"]}}};r.style=n;export{r as ifx_tooltip};
