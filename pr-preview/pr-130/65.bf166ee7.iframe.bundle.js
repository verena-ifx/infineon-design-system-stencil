(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"./dist/esm/ifx-status.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_status",(function(){return Status}));__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-2a2fcfb8.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Status=function(){function Status(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Status),Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.g)(this,hostRef),this.text=void 0,this.border=!1,this.color="orange"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Status,[{key:"render",value:function render(){var borderClass=this.border?"border-"+this.color:"";return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("div",{class:"container "+borderClass},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("span",{class:"dot "+this.color}),Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_7__.e)("p",{class:"text"},this.text))}}]),Status}();Status.style=':host{display:inline-block}.container{display:flex;align-items:center;padding:2px 16px;border-radius:100px}.text{font-family:"Source Sans Pro";margin:0;padding-left:5px;font-style:normal;font-weight:600;font-size:1rem;line-height:1.25rem;display:inline;color:#1d1d1d}.dot{display:inline-block;width:8px;height:8px;border-radius:50%}.container.border-orange{border:2px solid #f07f3c}.container.border-ocean{border:2px solid #378375}.container.border-grey{border:2px solid #7d6f72}.container.border-grey-200{border:2px solid #ebe9e9}.container.border-red{border:2px solid #cd002f}.container.border-green{border:2px solid #aec067}.container.border-berry{border:2px solid #ab377a}.dot.orange{background-color:#f07f3c}.dot.ocean{background-color:#378375}.dot.grey{background-color:#7d6f72}.dot.grey-200{background-color:#ebe9e9}.dot.red{background-color:#cd002f}.dot.green{background-color:#aec067}.dot.berry{background-color:#ab377a}'}}]);