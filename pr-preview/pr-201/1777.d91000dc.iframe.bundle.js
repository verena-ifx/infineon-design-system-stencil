"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1777],{"./dist/esm/ifx-tabs.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_tabs:()=>IfxTabs});var _index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-3ddeaa0f.js");const IfxTabs=class{constructor(hostRef){(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.tabChange=(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"tabChange",7),this.tabs=[],this.orientation="horizontal",this.small=!1,this.activeTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.tabTitles=[]}setActiveTab(index){if(!(index<0||index>=this.tabHeaderRefs.length)){const currentActiveTab=this.tabRefs[this.activeTabIndex];currentActiveTab&&this.emitEvent(currentActiveTab,"tabBecameInactive"),this.tabChange.emit({oldTabIndex:this.activeTabIndex,newTabIndex:index}),this.activeTabIndex=index;const newActiveTab=this.tabRefs[index];newActiveTab&&this.emitEvent(newActiveTab,"tabBecameActive")}}emitEvent(element,eventName){const event=new CustomEvent(eventName,{bubbles:!0,composed:!0});element.dispatchEvent(event)}reRenderBorder(){const borderElement=this.el.shadowRoot.querySelector(".active-border");borderElement&&this.tabHeaderRefs[this.activeTabIndex]&&("horizontal"===this.orientation?(borderElement.style.left=`${this.tabHeaderRefs[this.activeTabIndex].offsetLeft}px`,borderElement.style.width=`${this.tabHeaderRefs[this.activeTabIndex].offsetWidth}px`,borderElement.style.top="",borderElement.style.height=""):(borderElement.style.top=`${this.tabHeaderRefs[this.activeTabIndex].offsetTop}px`,borderElement.style.height=`${this.tabHeaderRefs[this.activeTabIndex].offsetHeight}px`,borderElement.style.left="",borderElement.style.width=""))}onOrientationChange(){this.reRenderBorder()}onSlotChange(){const tabs=this.el.querySelectorAll("ifx-tab");this.tabTitles=Array.from(tabs).map((tab=>tab.getAttribute("header"))),this.tabRefs=Array.from(tabs),this.tabRefs.forEach(((tab,index)=>{tab.setAttribute("slot",`tab-${index}`)}))}componentDidLoad(){this.onSlotChange()}componentDidRender(){this.reRenderBorder()}render(){return(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`tabs ${this.orientation} ${this.small?"small":""}`},(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"tabs-list"},this.tabTitles.map(((tabTitle,index)=>(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",{class:"tab-item "+(index===this.activeTabIndex?"active":""),ref:el=>this.tabHeaderRefs[index]=el,onClick:()=>this.setActiveTab(index)},tabTitle))),(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"active-border"})),(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"tab-content"},Array.from(this.tabTitles).map(((_,index)=>(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:{display:index===this.activeTabIndex?"block":"none"}},(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:`tab-${index}`}))))))}get el(){return(0,_index_3ddeaa0f_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{orientation:["onOrientationChange"]}}};IfxTabs.style=':host{display:block}.tabs{display:flex}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#378375}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tab-item.active{color:#378375}.tab-item{padding:0.5rem 1rem;cursor:pointer;position:relative}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#378375}.tab-content{padding:1rem;flex-grow:1}.tabs.small .tab-item{font-size:14px}'}}]);