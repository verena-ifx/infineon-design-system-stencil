import{r as c,h as t,g as i}from"./index-3c0985a7.js";const n=":host{display:block}.accordion-wrapper{display:flex;flex-direction:column}",a=class{constructor(o){c(this,o)}async onItemOpened(o){const r=Array.from(this.el.shadowRoot.querySelectorAll("ifx-accordion-item"));for(const s of r){const e=s;e!==o.target&&await e.isOpen()&&e.close()}}render(){return t("div",{class:"accordion-wrapper"},t("slot",null))}get el(){return i(this)}};a.style=n;export{a as ifx_accordion};
