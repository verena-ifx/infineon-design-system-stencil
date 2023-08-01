/*! For license information please see 9583.862038fc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[9583],{9583:function(e,t,r){r.r(t),r.d(t,{ifx_link:function(){return o},ifx_search_input:function(){return u}});var n=r(5671),i=r(9466),s=r(8633),a=r(1242),o=function(){function e(t){(0,n.Z)(this,e),(0,s.r)(this,t),this.href=void 0,this.target="_self",this.color=void 0,this.bold=!0,this.underline=!0}return(0,i.Z)(e,[{key:"render",value:function(){return(0,s.h)("a",{href:this.href,target:this.target,class:this.linkClassNames()},(0,s.h)("slot",null))}},{key:"linkClassNames",value:function(){return(0,a.c)("link",this.color,this.bold&&"bold",this.underline&&"underline")}}]),e}();o.style='*{font-family:"Source Sans Pro"}.link{font-weight:400;font-size:16px;text-decoration:none;color:#1d1d1d}.link.bold{font-weight:600}.link.primary{color:#378375}.link.secondary{color:#ab377a}.link.warning{color:#f07f3c}.link.danger{color:#cd002f}.link.success{color:#aec067}.link.underline{text-decoration:underline}';var u=function(){function e(t){var r=this;(0,n.Z)(this,e),(0,s.r)(this,t),this.ifxInput=(0,s.c)(this,"ifxInput",7),this.handleInput=function(){var e=r.inputElement.value;r.value=e,r.ifxInput.emit(r.value)},this.handleDelete=function(){r.inputElement.value="",r.ifxInput.emit(null)},this.value="",this.width="100%",this.insideDropdown=!1,this.showDeleteIcon=!1,this.disabled=!1,this.borderColor=void 0,this.size=void 0}return(0,i.Z)(e,[{key:"valueWatcher",value:function(e){e!==this.inputElement.value&&(this.inputElement.value=e)}},{key:"render",value:function(){var e=this;return(0,s.h)("div",{class:this.getClassNames()},(0,s.h)("div",{class:this.getWrapperClassNames()},(0,s.h)("slot",{name:"search-icon"}),(0,s.h)("input",{ref:function(t){return e.inputElement=t},type:"text",onInput:function(){return e.handleInput()},placeholder:"Search...",disabled:this.disabled,value:this.value}),this.showDeleteIcon?(0,s.h)("ifx-icon",{icon:"delete-x-16",class:"delete-icon",onClick:this.handleDelete}):null))}},{key:"getBorderClasses",value:function(){return"search-input__wrapper-outline-".concat(this.borderColor)}},{key:"getSizeClass",value:function(){return"s"==="".concat(this.size)?"search-input__wrapper-s":""}},{key:"getClassNames",value:function(){return(0,a.c)("search-input",{"inside-dropdown":this.insideDropdown})}},{key:"getWrapperClassNames",value:function(){return(0,a.c)("search-input__wrapper ".concat(this.getBorderClasses()),"search-input__wrapper ".concat(this.getSizeClass()),this.disabled?"disabled":"")}},{key:"el",get:function(){return(0,s.g)(this)}}],[{key:"watchers",get:function(){return{value:["valueWatcher"]}}}]),e}();u.style='.search-input{background:#FFFFFF;flex-direction:row;align-items:center;flex:1;width:100%}.search-input.inside-dropdown{max-width:192px}.search-input .search-input__wrapper{height:40px;box-sizing:border-box;display:flex;align-items:center;border:1px solid #8D8786;border-radius:1px;padding:12px 16px;gap:12px;flex:none;order:0;align-self:stretch;flex-grow:0;position:relative;width:100%}.search-input .search-input__wrapper.search-input__wrapper-s{height:40px}.search-input .search-input__wrapper.search-input__wrapper-outline-light{border:1px solid #8D8786}.search-input .search-input__wrapper.search-input__wrapper-outline-dark{border:1px solid #3C3A39}.search-input .search-input__wrapper.search-input__wrapper-outline-green{border:1px solid #0A8276}.search-input .search-input__wrapper ::slotted(.search-icon){left:12px}.search-input .search-input__wrapper .delete-icon{right:12px}.search-input .search-input__wrapper input[type=text]{font-family:"Source Sans Pro";font-style:normal;font-weight:400;font-size:16px;color:#8D8786;border:none;width:100%}.search-input .search-input__wrapper input[type=text]:focus{outline:none}.search-input .search-input__wrapper input[type=text]:disabled{background-color:#EEEDED}.search-input .search-input__wrapper:has(input[disabled]){background-color:#EEEDED}'},1242:function(e,t,r){r.d(t,{c:function(){return a}});var n,i,s,a=(n=function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var s=typeof i;if("string"===s||"number"===s)e.push(i);else if(Array.isArray(i)){if(i.length){var a=r.apply(null,i);a&&e.push(a)}}else if("object"===s){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var o in i)t.call(i,o)&&i[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()},n(s={path:i,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},s.exports),s.exports)}}]);
//# sourceMappingURL=9583.862038fc.chunk.js.map