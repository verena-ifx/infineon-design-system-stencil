(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"./dist/esm/ifx-search-bar.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_search_bar",(function(){return SearchBar}));__webpack_require__("./node_modules/core-js/modules/es.string.search.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/esm/index-2a2fcfb8.js"),_lodash_31f8bd78_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/esm/lodash-31f8bd78.js");__webpack_require__("./dist/esm/_commonjsHelpers-9943807e.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var SearchBar=function(){function SearchBar(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SearchBar),Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.g)(this,hostRef),this.search=Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.c)(this,"search",7),this.handleInput=function(){var query=_this.inputElement.value;_this.debounceSearch(_this.search.emit(query))},this.handleClick=function(){_this.isOpen=!_this.isOpen},this.icon=void 0,this.width="100%",this.showCloseButton=!0,this.isOpen=!0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(SearchBar,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;this.debounceSearch=_lodash_31f8bd78_js__WEBPACK_IMPORTED_MODULE_10__.a.debounce((function(query){console.log(query.detail),_this2.search.emit(query)}),500)}},{key:"render",value:function render(){return Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("div",{class:"search-bar "+this.width+" "},this.isOpen?Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("div",{class:"search-bar__wrapper"},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("ifx-search-input",{style:{width:this.width}},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("ifx-icon",{icon:"search-16",slot:"search-icon",class:"search-icon"})),this.showCloseButton?Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("ifx-button",{variant:"outline-text",icon:"",position:"left",href:"",target:"_blank",color:"primary",size:"m",onClick:this.handleClick},"Close"):null):Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("div",{class:"search-bar__icon-wrapper"},Object(_index_2a2fcfb8_js__WEBPACK_IMPORTED_MODULE_9__.e)("ifx-icon",{icon:"search-16",class:"search-icon",onClick:this.handleClick})))}}]),SearchBar}();SearchBar.style=":host{display:block;width:100%}.search-bar{box-sizing:border-box;height:40px;background:#FFFFFF;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar .search-icon{cursor:pointer}.search-bar .search-bar__wrapper{width:100%;flex-direction:row;align-items:center;display:flex;flex:1}.search-bar .search-bar__icon-wrapper{display:inline-flex;flex-direction:row;align-items:center;padding-left:34px;padding-top:4px}.search-bar.width-40{width:40%}.search-bar.width-60{width:60%}.search-bar.width-80{width:80%}.search-bar.width-100{width:100%}"}}]);