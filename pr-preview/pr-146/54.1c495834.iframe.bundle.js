(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"./dist/esm/ifx-card-text.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_card_text",(function(){return CardText}));__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-2a2fcfb8.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var CardText=function(){function CardText(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CardText),Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.g)(this,hostRef),this.hasBtn=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CardText,[{key:"componentWillLoad",value:function componentWillLoad(){this.el.closest("ifx-card").querySelector("ifx-link")&&(this.hasBtn=!0)}},{key:"render",value:function render(){return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("div",{class:"card__text-wrapper "+(this.hasBtn?"hasBtn":"")},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("div",{class:"card-text"},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("slot",null)))}},{key:"el",get:function get(){return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.d)(this)}}]),CardText}();CardText.style=".card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:24px;font-size:16px;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}"}}]);