(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"./dist/esm/ifx-tabs.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_tabs",(function(){return IfxTabs}));__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/esm/index-88b2408d.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var IfxTabs=function(){function IfxTabs(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,IfxTabs),Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.g)(this,hostRef),this.tabChange=Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.c)(this,"tabChange",7),this.tabs=[],this.orientation="horizontal",this.small=!1,this.activeTabIndex=0,this.tabRefs=[],this.tabHeaderRefs=[],this.tabTitles=[]}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(IfxTabs,[{key:"setActiveTab",value:function setActiveTab(index){if(!(index<0||index>=this.tabHeaderRefs.length)){var currentActiveTab=this.tabRefs[this.activeTabIndex];currentActiveTab&&this.emitEvent(currentActiveTab,"tabBecameInactive"),this.tabChange.emit({oldTabIndex:this.activeTabIndex,newTabIndex:index}),this.activeTabIndex=index;var newActiveTab=this.tabRefs[index];newActiveTab&&this.emitEvent(newActiveTab,"tabBecameActive")}}},{key:"emitEvent",value:function emitEvent(element,eventName){var event=new CustomEvent(eventName,{bubbles:!0,composed:!0});element.dispatchEvent(event)}},{key:"reRenderBorder",value:function reRenderBorder(){var borderElement=this.el.shadowRoot.querySelector(".active-border");borderElement&&this.tabHeaderRefs[this.activeTabIndex]&&("horizontal"===this.orientation?(borderElement.style.left=this.tabHeaderRefs[this.activeTabIndex].offsetLeft+"px",borderElement.style.width=this.tabHeaderRefs[this.activeTabIndex].offsetWidth+"px",borderElement.style.top="",borderElement.style.height=""):(borderElement.style.top=this.tabHeaderRefs[this.activeTabIndex].offsetTop+"px",borderElement.style.height=this.tabHeaderRefs[this.activeTabIndex].offsetHeight+"px",borderElement.style.left="",borderElement.style.width=""))}},{key:"onOrientationChange",value:function onOrientationChange(){this.reRenderBorder()}},{key:"onSlotChange",value:function onSlotChange(){var tabs=this.el.querySelectorAll("ifx-tab");this.tabTitles=Array.from(tabs).map((function(tab){return tab.getAttribute("header")})),this.tabRefs=Array.from(tabs),this.tabRefs.forEach((function(tab,index){tab.setAttribute("slot","tab-"+index)}))}},{key:"componentDidLoad",value:function componentDidLoad(){this.onSlotChange()}},{key:"componentDidRender",value:function componentDidRender(){this.reRenderBorder()}},{key:"render",value:function render(){var _this=this;return Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.e)("div",{class:"tabs "+this.orientation+" "+(this.small?"small":"")},Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.e)("ul",{class:"tabs-list"},this.tabTitles.map((function(tabTitle,index){return Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.e)("li",{class:"tab-item "+(index===_this.activeTabIndex?"active":""),ref:function ref(el){return _this.tabHeaderRefs[index]=el},onClick:function onClick(){return _this.setActiveTab(index)}},tabTitle)})),Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.e)("div",{class:"active-border"})),Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.e)("div",{class:"tab-content"},Array.from(this.tabTitles).map((function(_,index){return Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.e)("div",{style:{display:index===_this.activeTabIndex?"block":"none"}},Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.e)("slot",{name:"tab-"+index}))}))))}},{key:"el",get:function get(){return Object(_index_88b2408d_js__WEBPACK_IMPORTED_MODULE_13__.d)(this)}}],[{key:"watchers",get:function get(){return{orientation:["onOrientationChange"]}}}]),IfxTabs}();IfxTabs.style=':host{display:block}.tabs{display:flex}.tabs.horizontal{flex-direction:column}.tabs.vertical{flex-direction:row}.tabs-list{display:flex;list-style:none;padding:0;margin:0;position:relative;font-weight:600}.active-border{content:"";position:absolute;transition:left 0.3s ease-in-out, width 0.3s ease-in-out, top 0.3s ease-in-out, height 0.3s ease-in-out}.tabs.horizontal .active-border{bottom:0;left:0;height:2px;background-color:#378375}.tabs.vertical .tabs-list{flex-direction:column;border-bottom:none}.tab-item.active{color:#378375}.tab-item{padding:0.5rem 1rem;cursor:pointer;position:relative}.tabs.vertical .tab-item{border-right:2px solid transparent;min-width:7em}.tabs.vertical .active-border{left:0;top:0;width:2px;background-color:#378375}.tab-content{padding:1rem;flex-grow:1}.tabs.small .tab-item{font-size:14px}'},"./node_modules/core-js/internals/create-html.js":function(module,exports,__webpack_require__){var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"./node_modules/core-js/internals/string-html-forced.js":function(module,exports,__webpack_require__){var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"./node_modules/core-js/modules/es.string.small.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("./node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("./node_modules/core-js/internals/string-html-forced.js")("small")},{small:function small(){return createHTML(this,"small","","")}})}}]);