"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4461],{"./dist/esm/ifx-progress-bar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_progress_bar:()=>ProgressBar});var _index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-537698f9.js");const ProgressBar=class{constructor(hostRef){(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ifxChange=(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"ifxChange",7),this.value=0,this.label="",this.size=void 0,this.showLabel=!1}onValueChanged(newValue){const event=new CustomEvent("ifx-change",{bubbles:!0,composed:!0,detail:newValue});this.ifxChange.emit(event)}render(){return(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`progress-bar ${this.size}`},(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"progress",style:{width:`${this.value}%`}},this.showLabel&&"s"!==this.size&&(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"label"},`${this.value}%`)))}static get watchers(){return{value:["onValueChanged"]}}};ProgressBar.style=':host{display:flex;width:100%}.progress-bar{height:16px;border-radius:1px;bottom:0;right:0;top:0;left:0;display:flex;height:16px;border-radius:1px;width:100%;overflow:hidden}.progress-bar .label{height:17px;border-radius:1px 0px 0px 1px}.progress-bar.s{height:4px}.progress-bar .progress{height:100%;background-color:#0A8276;position:relative}.progress-bar .progress:after{content:"";background-color:#EEEDED;height:100%;position:absolute}.progress-bar .label{display:flex;align-items:center;justify-content:center;position:absolute;font-style:normal;font-weight:400;font-size:14px;line-height:20px;font-family:"Source Sans Pro";color:#fff;top:0;bottom:0;left:0;right:0}'}}]);