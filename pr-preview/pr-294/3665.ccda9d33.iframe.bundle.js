"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[3665],{"./dist/esm/ifx-card.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_card:()=>Card});var _index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fbf4ddae.js");const Card=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.hasBtn=void 0,this.direction="vertical",this.alignment=void 0,this.hasDesc=void 0,this.hasAll=void 0,this.largeSize=void 0,this.smallSize=void 0}componentWillLoad(){const desc=this.el.querySelector("ifx-card-text"),overline=this.el.querySelector("ifx-card-overline"),headline=this.el.querySelector("ifx-card-headline"),link=this.el.querySelector("ifx-link");desc&&(this.hasDesc=!0),overline&&headline&&desc&&link?this.hasAll=!0:this.hasDesc||overline&&headline&&link?this.largeSize=!0:this.smallSize=!0}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`card \n          ${this.direction} \n          ${this.alignment} \n          ${this.largeSize?"largeSize":""} \n          ${this.smallSize?"smallSize":""} \n          ${this.hasAll?"hasAll":""}`},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-img"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"img"})),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"card-body"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"overline"}),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"headline"}),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"text"}),(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"btn"}))))}get el(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};Card.style='*{font-family:"Source Sans Pro"}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem;height:auto}.card .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .card-body{padding:24px}.card.horizontal{flex-direction:row;width:538px}.card.horizontal.hasAll{height:auto}.card.horizontal.largeSize{height:218px}.card.horizontal.smallSize{height:138px}.card.horizontal .card-body{flex:1;width:0;padding:17px 24px 25px 25px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.right .card-img{order:1}.card.horizontal.right .card-body{order:2}.card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:24px;font-size:16px;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}'}}]);