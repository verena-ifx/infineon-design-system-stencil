"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[867],{4867:function(t,e,i){i.r(e),i.d(e,{ifx_tabs:function(){return o}});var a=i(5671),n=i(9466),s=i(9813),o=function(){function t(e){(0,a.Z)(this,t),(0,s.r)(this,e),this.tabChange=(0,s.c)(this,"tabChange",7),this.tabs=[],this.orientation="horizontal",this.small=!1,this.activeTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.tabTitles=[]}return(0,n.Z)(t,[{key:"setActiveTab",value:function(t){if(!(t<0||t>=this.tabHeaderRefs.length)){var e=this.tabRefs[this.activeTabIndex];e&&this.emitEvent(e,"tabBecameInactive"),this.tabChange.emit({oldTabIndex:this.activeTabIndex,newTabIndex:t}),this.activeTabIndex=t;var i=this.tabRefs[t];i&&this.emitEvent(i,"tabBecameActive")}}},{key:"emitEvent",value:function(t,e){var i=new CustomEvent(e,{bubbles:!0,composed:!0});t.dispatchEvent(i)}},{key:"reRenderBorder",value:function(){var t=this.el.shadowRoot.querySelector(".active-border");t&&this.tabHeaderRefs[this.activeTabIndex]&&("horizontal"===this.orientation?(t.style.left="".concat(this.tabHeaderRefs[this.activeTabIndex].offsetLeft,"px"),t.style.width="".concat(this.tabHeaderRefs[this.activeTabIndex].offsetWidth,"px"),t.style.top="",t.style.height=""):(t.style.top="".concat(this.tabHeaderRefs[this.activeTabIndex].offsetTop,"px"),t.style.height="".concat(this.tabHeaderRefs[this.activeTabIndex].offsetHeight,"px"),t.style.left="",t.style.width=""))}},{key:"onOrientationChange",value:function(){this.reRenderBorder()}},{key:"onSlotChange",value:function(){var t=this.el.querySelectorAll("ifx-tab");this.tabTitles=Array.from(t).map((function(t){return t.getAttribute("header")})),this.tabRefs=Array.from(t),this.tabRefs.forEach((function(t,e){t.setAttribute("slot","tab-".concat(e))}))}},{key:"componentDidLoad",value:function(){this.onSlotChange()}},{key:"componentDidRender",value:function(){this.reRenderBorder()}},{key:"render",value:function(){var t=this;return(0,s.h)("div",{class:"tabs ".concat(this.orientation," ").concat(this.small?"small":"")},(0,s.h)("ul",{class:"tabs-list"},this.tabTitles.map((function(e,i){return(0,s.h)("li",{class:"tab-item ".concat(i===t.activeTabIndex?"active":""),ref:function(e){return t.tabHeaderRefs[i]=e},onClick:function(){return t.setActiveTab(i)}},e)})),(0,s.h)("div",{class:"active-border"})),(0,s.h)("div",{class:"tab-content"},Array.from(this.tabTitles).map((function(e,i){return(0,s.h)("div",{style:{display:i===t.activeTabIndex?"block":"none"}},(0,s.h)("slot",{name:"tab-".concat(i)}))}))))}},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{orientation:["onOrientationChange"]}}}]),t}();o.style=':host{display:block}.tabs{display:flex}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#378375}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tab-item.active{color:#378375}.tab-item{padding:0.5rem 1rem;cursor:pointer;position:relative}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#378375}.tab-content{padding:1rem;flex-grow:1}.tabs.small .tab-item{font-size:14px}'}}]);
//# sourceMappingURL=867.a8e35310.chunk.js.map