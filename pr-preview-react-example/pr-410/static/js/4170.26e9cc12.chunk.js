"use strict";(self.webpackChunkreact_javascript=self.webpackChunkreact_javascript||[]).push([[4170],{4170:function(e,i,n){n.r(i),n.d(i,{ifx_switch:function(){return r}});var t=n(5671),a=n(9466),o=n(1091),r=function(){function e(i){(0,t.Z)(this,e),(0,o.r)(this,i),this.ifxChange=(0,o.c)(this,"ifxChange",7),this.value=!1,this.name="",this.disabled=!1,this.internalValue=!1}return(0,a.Z)(e,[{key:"componentWillLoad",value:function(){this.internalValue=this.value}},{key:"valueChanged",value:function(e,i){e!==i&&(this.internalValue=e)}},{key:"toggle",value:function(){this.disabled||(this.internalValue=!this.internalValue,this.ifxChange.emit(this.internalValue))}},{key:"handleKeyDown",value:function(e){this.disabled||"Enter"!==e.key&&" "!==e.key||this.toggle()}},{key:"render",value:function(){var e=this;return(0,o.h)("div",{class:"container ".concat(this.internalValue?"checked":""," ").concat(this.disabled?"disabled":""),role:"switch",tabindex:"0","aria-checked":this.internalValue?"true":"false","aria-label":this.name,onClick:function(){return e.toggle()},onKeyDown:function(i){return e.handleKeyDown(i)}},(0,o.h)("input",{type:"checkbox",hidden:!0,name:this.name,disabled:this.disabled,value:"".concat(this.internalValue)}),(0,o.h)("div",{class:"switch ".concat(this.internalValue?"checked":""," ").concat(this.disabled?"disabled":"")}))}}],[{key:"watchers",get:function(){return{value:["valueChanged"]}}}]),e}();r.style=":host{display:inline-block;user-select:none}.container{display:inline-block;position:relative;width:50px;height:25px;background-color:#FFFFFF;border:1px solid #575352;border-radius:25px;cursor:pointer;transition:background-color 0.3s ease;outline:none}.container:focus{outline:4px solid #0A8276;outline-offset:2px}.container:focus:not(:focus-visible){outline:none}.container:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.container.disabled{cursor:default}.switch{position:absolute;top:2px;left:2px;width:21px;height:21px;background-color:#575352;border-radius:50%;transition:transform 0.3s ease}.switch.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}.container:hover .toggle-switch{box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.switch.checked{transform:translateX(25px);background-color:#FFFFFF}.switch.checked.disabled{cursor:default}.container.checked{background-color:#0A8276;border-color:#0A8276}.container.checked.disabled{background-color:#BFBBBB;border-color:#BFBBBB;cursor:default}"}}]);
//# sourceMappingURL=4170.26e9cc12.chunk.js.map