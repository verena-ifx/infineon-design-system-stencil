"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[708],{"./dist/esm/ifx-card-headline.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_card_headline:()=>CardHeadline});var _index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-537698f9.js");const CardHeadline=class{constructor(hostRef){(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.direction=void 0,this.hasDesc=void 0}componentWillLoad(){this.el.closest("ifx-card").shadowRoot.querySelector(".card").className.includes("horizontal")&&(this.direction="horizontal"),this.el.closest("ifx-card").querySelector("ifx-card-text")&&(this.hasDesc=!0)}render(){return(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card__headline-wrapper "+(this.hasDesc?"withDesc":"")},(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`card-headline ${this.direction}`},(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_537698f9_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};CardHeadline.style='*{font-family:"Source Sans Pro"}.card__headline-wrapper{padding-bottom:16px}.card__headline-wrapper.withDesc{padding-bottom:8px}.card-headline{margin-top:0;padding-top:0;font-family:"Source Sans Pro";font-weight:600;font-size:1.5rem;line-height:32px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.card-headline.horizontal{font-size:1.25rem;line-height:28px}'}}]);