"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[626],{6626:(f,s,n)=>{n.r(s),n.d(s,{ifx_accordion:()=>r,ifx_accordion_item:()=>c});var t=n(5861),e=n(7821);const r=class{constructor(o){(0,e.r)(this,o),this.autoCollapse=!1}onItemOpen(o){var a=this;return(0,t.Z)(function*(){if(a.autoCollapse){const h=Array.from(a.el.querySelectorAll("ifx-accordion-item"));for(const p of h){const i=p;i!==o.target&&(yield i.isOpen())&&i.close()}}})()}render(){return(0,e.h)("div",{class:"accordion-wrapper"},(0,e.h)("slot",null))}get el(){return(0,e.g)(this)}};r.style='*{font-family:"Source Sans Pro"}:host{display:block}.accordion-wrapper{display:flex;flex-direction:column;gap:8px}';const c=class{constructor(o){(0,e.r)(this,o),this.ifxItemOpen=(0,e.c)(this,"ifxItemOpen",7),this.ifxItemClose=(0,e.c)(this,"ifxItemClose",7),this.caption=void 0,this.open=!1}toggleOpen(){this.open=!this.open,this.open?this.ifxItemOpen.emit():this.ifxItemClose.emit()}componentDidUpdate(){this.contentEl.style.maxHeight=this.open?`${this.contentEl.scrollHeight}px`:"0"}close(){var o=this;return(0,t.Z)(function*(){o.open=!1,o.ifxItemClose.emit()})()}isOpen(){var o=this;return(0,t.Z)(function*(){return o.open})()}render(){return(0,e.h)("div",{class:"accordion-item "+(this.open?"open":"")},(0,e.h)("div",{class:"accordion-title",onClick:()=>this.toggleOpen()},(0,e.h)("span",{class:"accordion-icon"},(0,e.h)("ifx-icon",{icon:"chevron-down-12"})),(0,e.h)("span",{class:"accordion-caption"},this.caption)),(0,e.h)("div",{class:"accordion-content",ref:o=>this.contentEl=o},(0,e.h)("div",{class:"inner-content"},(0,e.h)("slot",null))))}};c.style='*{font-family:"Source Sans Pro"}.accordion-item{border-radius:3px;overflow:hidden;transition:all 0.3s}.accordion-title:hover{border:1px solid #ebe9e9;background-color:#ebe9e9}.accordion-title{display:flex;align-items:center;padding:1rem;color:#378375;border:1px solid #ebe9e9;cursor:pointer}.accordion-caption{font-weight:600;font-size:1rem}.accordion-content{max-height:0;overflow:hidden;transition:max-height 0.3s ease-in-out}.inner-content{padding:24px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;}.accordion-icon{font-weight:bold;display:inline-block;transition:transform 0.3s;margin-right:0.5rem}.accordion-item.open .accordion-icon{transform:rotate(-180deg)}'}}]);