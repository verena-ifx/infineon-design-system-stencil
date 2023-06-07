"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[205],{3205:(l,o,i)=>{i.r(o),i.d(o,{ifx_tabs:()=>n});var s=i(1621);const n=class{constructor(t){(0,s.r)(this,t),this.tabChange=(0,s.c)(this,"tabChange",7),this.tabs=[],this.orientation="horizontal",this.small=!1,this.activeTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.tabTitles=[]}setActiveTab(t){if(!(t<0||t>=this.tabHeaderRefs.length)){const e=this.tabRefs[this.activeTabIndex];e&&this.emitEvent(e,"tabBecameInactive"),this.tabChange.emit({oldTabIndex:this.activeTabIndex,newTabIndex:t}),this.activeTabIndex=t;const a=this.tabRefs[t];a&&this.emitEvent(a,"tabBecameActive")}}emitEvent(t,e){const a=new CustomEvent(e,{bubbles:!0,composed:!0});t.dispatchEvent(a)}reRenderBorder(){const t=this.el.shadowRoot.querySelector(".active-border");t&&this.tabHeaderRefs[this.activeTabIndex]&&("horizontal"===this.orientation?(t.style.left=`${this.tabHeaderRefs[this.activeTabIndex].offsetLeft}px`,t.style.width=`${this.tabHeaderRefs[this.activeTabIndex].offsetWidth}px`,t.style.top="",t.style.height=""):(t.style.top=`${this.tabHeaderRefs[this.activeTabIndex].offsetTop}px`,t.style.height=`${this.tabHeaderRefs[this.activeTabIndex].offsetHeight}px`,t.style.left="",t.style.width=""))}onOrientationChange(){this.reRenderBorder()}onSlotChange(){const t=this.el.querySelectorAll("ifx-tab");this.tabTitles=Array.from(t).map(e=>e.getAttribute("header")),this.tabRefs=Array.from(t),this.tabRefs.forEach((e,a)=>{e.setAttribute("slot",`tab-${a}`)})}componentDidLoad(){this.onSlotChange()}componentDidRender(){this.reRenderBorder()}render(){return(0,s.h)("div",{class:`tabs ${this.orientation} ${this.small?"small":""}`},(0,s.h)("ul",{class:"tabs-list"},this.tabTitles.map((t,e)=>(0,s.h)("li",{class:"tab-item "+(e===this.activeTabIndex?"active":""),ref:a=>this.tabHeaderRefs[e]=a,onClick:()=>this.setActiveTab(e)},t)),(0,s.h)("div",{class:"active-border"})),(0,s.h)("div",{class:"tab-content"},Array.from(this.tabTitles).map((t,e)=>(0,s.h)("div",{style:{display:e===this.activeTabIndex?"block":"none"}},(0,s.h)("slot",{name:`tab-${e}`})))))}get el(){return(0,s.g)(this)}static get watchers(){return{orientation:["onOrientationChange"]}}};n.style=':host{display:block}.tabs{display:flex}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#378375}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tab-item.active{color:#378375}.tab-item{padding:0.5rem 1rem;cursor:pointer;position:relative}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#378375}.tab-content{padding:1rem;flex-grow:1}.tabs.small .tab-item{font-size:14px}'}}]);