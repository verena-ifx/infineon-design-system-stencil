import{r as p,c as d,h as o,g as h}from"./index-29255c7b.js";const u='.ifx-multiselect-container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start}.ifx-multiselect-container.small-select{height:36px}.ifx-multiselect-container.medium-select{height:40px}.ifx-multiselect-container:hover{cursor:pointer}.ifx-multiselect-container .ifx-label-wrapper{font-size:16px;line-height:24px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-error-message-wrapper{color:#CD002F;font-size:12px;line-height:16px;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper{box-sizing:border-box;position:relative;display:flex;align-items:center;border:1px solid #8D8786;width:100%}.ifx-multiselect-container .ifx-multiselect-wrapper.small-select{line-height:20px;padding:8px 12px;font-size:14px}.ifx-multiselect-container .ifx-multiselect-wrapper.medium-select{line-height:24px;padding:8px 16px;font-size:16px}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible{outline:none}.ifx-multiselect-container .ifx-multiselect-wrapper:focus-visible:not(.active):not(:active)::before{content:"";position:absolute;width:calc(100% + 4px);height:calc(100% + 4px);top:50%;left:50%;transform:translate(-50%, -50%);border:2px solid #0A8276}.ifx-multiselect-container .ifx-multiselect-wrapper.disabled{background:#EEEDED;color:#575352;border-color:#575352;cursor:not-allowed;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ifx-multiselect-container .ifx-multiselect-wrapper.error{border-color:#CD002F}.ifx-multiselect-container .ifx-multiselect-wrapper:hover:not(.focus,:focus){border-color:#8D8786}.ifx-multiselect-container .ifx-multiselect-wrapper.active{border:2px solid #0A8276 !important}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-up{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.active .icon-wrapper-down{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-up{display:none}.ifx-multiselect-container .ifx-multiselect-wrapper .icon-wrapper-down{display:flex;align-items:center;justify-content:center}.ifx-multiselect-container .ifx-multiselect-wrapper.is-flipped .ifx-multiselect-dropdown-menu{top:auto;bottom:100%}.ifx-multiselect-container .ifx-multiselect-input{flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ifx-multiselect-container .ifx-multiselect-icon-container{margin-left:auto;align-items:center;display:flex}.ifx-multiselect-container .ifx-clear-button{margin-right:10px}.ifx-multiselect-container .ifx-multiselect-dropdown-menu{position:absolute;top:100%;left:0;width:100%;border:1px solid #ddd;margin-top:2px;background-color:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);max-height:300px;overflow-y:auto;z-index:var(--dynamic-z-index, 1)}.ifx-multiselect-container .option{position:relative;padding:8px 16px;gap:8px;align-items:center;display:flex;font-style:normal;font-weight:400}.ifx-multiselect-container .option.small-select{line-height:20px;font-size:14px}.ifx-multiselect-container .option.medium-select{line-height:24px;font-size:16px}.ifx-multiselect-container .option:hover{background-color:#EEEDED}.ifx-multiselect-container .option:focus{background-color:#BFBBBB;outline:none;box-shadow:0 0 0 2px rgba(0, 0, 0, 0.1)}.ifx-multiselect-container .option.is-highlighted{background-color:#EEEDED}.ifx-multiselect-container .option.sub-option{padding-left:30px;}',a=class{constructor(e){p(this,e),this.ifxSelect=d(this,"ifxSelect",7),this.ifxMultiselectIsOpen=d(this,"ifxMultiselectIsOpen",7),this.currentIndex=0,this.handleDocumentClick=i=>{i.composedPath().includes(this.dropdownElement)||(this.dropdownOpen=!1,document.removeEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen))},this.options=void 0,this.size="medium (40px)",this.disabled=!1,this.error=!1,this.errorMessage="Error",this.label="",this.persistentSelectedOptions=[],this.listOfOptions=[],this.dropdownOpen=!1,this.dropdownFlipped=void 0,this.maxItemCount=10,this.zIndex=1}handleOptionsChange(){if(typeof this.options=="string")try{this.listOfOptions=JSON.parse(this.options)}catch(i){console.error("Failed to parse options:",i)}else Array.isArray(this.options)||typeof this.options=="object"?this.listOfOptions=this.options:console.error("Unexpected value for options:",this.options);const e=this.listOfOptions.filter(i=>i.selected);this.persistentSelectedOptions=[...this.persistentSelectedOptions,...e]}componentDidLoad(){setTimeout(()=>{this.positionDropdown()},500)}componentWillLoad(){this.handleOptionsChange()}handleOptionClick(e){if(this.persistentSelectedOptions.length>=this.maxItemCount&&!this.persistentSelectedOptions.some(t=>t.value===e.value)){console.error("Max item count reached");return}const i=this.persistentSelectedOptions.some(t=>t.value===e.value);if(e.children&&e.children.length>0)i?this.persistentSelectedOptions=this.persistentSelectedOptions.filter(t=>t.value!==e.value&&!e.children.some(n=>n.value===t.value)):this.persistentSelectedOptions=[...this.persistentSelectedOptions,e,...e.children];else{i?this.persistentSelectedOptions=this.persistentSelectedOptions.filter(n=>n.value!==e.value):this.persistentSelectedOptions.push(e);const t=this.listOfOptions.find(n=>n.children&&n.children.some(s=>s.value===e.value));if(t){const n=t.children.every(r=>this.persistentSelectedOptions.some(c=>c.value===r.value)),s=t.children.some(r=>this.persistentSelectedOptions.some(c=>c.value===r.value));n?this.persistentSelectedOptions.some(r=>r.value===t.value)||this.persistentSelectedOptions.push(t):s?this.persistentSelectedOptions=this.persistentSelectedOptions.filter(r=>r.value!==t.value):this.persistentSelectedOptions=this.persistentSelectedOptions.filter(r=>r.value!==t.value)}}this.listOfOptions=this.listOfOptions.map(t=>{if(t.value===e.value)return Object.assign(Object.assign({},t),{selected:!i});if(t.children){const n=this.persistentSelectedOptions.includes(t);return t.children=t.children.map(s=>s.value===e.value||n?Object.assign(Object.assign({},s),{selected:!0}):s),Object.assign(Object.assign({},t),{children:t.children})}return t}),this.persistentSelectedOptions=this.persistentSelectedOptions.map(t=>{const n=this.listOfOptions.find(s=>s.value===t.value)||this.listOfOptions.flatMap(s=>s.children||[]).find(s=>s.value===t.value);return n?Object.assign(Object.assign({},t),{selected:n.selected}):t});const l=this.persistentSelectedOptions.map(t=>{const n=this.listOfOptions.find(s=>s.children&&s.children.some(r=>r.value===t.value));return n&&this.persistentSelectedOptions.some(s=>s.value===n.value)?Object.assign(Object.assign({},t),{selected:!0}):t}).filter(t=>{const n=this.listOfOptions.find(s=>s.children&&s.children.some(r=>r.value===t.value));return!(n&&this.persistentSelectedOptions.some(s=>s.value===n.value))});this.ifxSelect.emit(l)}getSizeClass(){return`${this.size}`=="s"?"small-select":"medium-select"}toggleDropdown(){this.dropdownOpen=!this.dropdownOpen,setTimeout(()=>{this.dropdownOpen&&document.addEventListener("click",this.handleDocumentClick),this.ifxMultiselectIsOpen.emit(this.dropdownOpen)},0),this.zIndex=a.globalZIndex++}waitForElement(e,i,l=50){let t=0;function n(){requestAnimationFrame(()=>{const s=e();s.length>0||t>l?i(s):(t++,n())})}n()}handleKeyDown(e){if(this.disabled)return;const i=this.dropdownElement.querySelectorAll(".option");switch(e.code){case"Enter":this.dropdownOpen?this.selectItem(i):(this.toggleDropdown(),this.waitForElement(()=>this.dropdownElement.querySelectorAll(".option"),l=>{this.updateHighlightedOption(l)}));break;case"ArrowDown":this.handleArrowDown(i),this.dropdownOpen&&this.updateHighlightedOption(i);break;case"ArrowUp":this.handleArrowUp(i),this.dropdownOpen&&this.updateHighlightedOption(i);break}}handleWrapperClick(e){this.positionDropdown(),e.currentTarget===e.target&&this.toggleDropdown()}clearSelection(){this.persistentSelectedOptions=[],this.listOfOptions=this.listOfOptions.map(e=>Object.assign(Object.assign({},e),{selected:!1})),this.ifxSelect.emit(this.persistentSelectedOptions)}positionDropdown(){var e;const i=(e=this.el.shadowRoot.querySelector(".ifx-multiselect-wrapper"))===null||e===void 0?void 0:e.getBoundingClientRect(),l=window.innerHeight-i.bottom;i.top>l&&i.height>l||i.bottom>window.innerHeight?this.dropdownFlipped=!0:this.dropdownFlipped=!1}updateHighlightedOption(e){e.forEach(i=>i.classList.remove("is-highlighted")),this.currentIndex>=0&&this.currentIndex<e.length&&e[this.currentIndex].classList.add("is-highlighted")}handleArrowDown(e){this.currentIndex<e.length-1?this.currentIndex++:this.currentIndex=0}handleArrowUp(e){this.currentIndex>0?this.currentIndex--:this.currentIndex=e.length-1}selectItem(e){const i=this.dropdownElement.querySelector(".option.selected");i&&i.classList.remove("selected");const l=e[this.currentIndex];l.classList.add("selected");const t=l.getAttribute("data-value"),n=typeof this.options=="string"?JSON.parse(this.options).map(r=>({value:r.value,label:r.label,children:r.children,selected:r.selected})):this.options.map(r=>Object.assign({},r)),s=this.findInOptions(n,t);this.handleOptionClick(s)}renderOption(e,i){const l=this.persistentSelectedOptions.some(r=>r.value===e.value),t=!l&&this.persistentSelectedOptions.length>=this.maxItemCount,n=`checkbox-${e.value}-${i}`,s=this.isOptionIndeterminate(e);return o("div",null,o("div",{class:`option ${l?"selected":""} 
        ${this.getSizeClass()}`,"data-value":e.value,onClick:()=>!t&&this.handleOptionClick(e),tabindex:"0",role:`${e.children}?.length > 0 ? "option" : "treeitem"`},o("ifx-checkbox",{id:n,value:l,indeterminate:s,disabled:t}),o("label",{htmlFor:n},e.label)),e.children&&e.children.map((r,c)=>this.renderSubOption(r,`${i}-${c}`)))}isOptionIndeterminate(e){if(!e.children)return!1;const i=e.children.filter(l=>this.persistentSelectedOptions.some(t=>t.value===l.value)).length;return i>0&&i<e.children.length}findInOptions(e,i){for(const l of e){if(l.value===i)return l;if(l.children){const t=this.findInOptions(l.children,i);if(t)return t}}return null}renderSubOption(e,i){const l=this.persistentSelectedOptions.some(n=>n.value===e.value),t=`checkbox-${e.value}-${i}`;return o("div",{class:`option sub-option ${l?"selected":""} ${this.getSizeClass()}`,"data-value":e.value,role:`${e.children}?.length > 0 ? "option" : "treeitem"`,onClick:()=>this.handleOptionClick(e),tabindex:"0"},o("ifx-checkbox",{id:t,value:l}),o("label",{htmlFor:t},e.label))}render(){const e=this.persistentSelectedOptions.map(i=>i.label).join(", ");return o("div",{class:`ifx-multiselect-container ${this.getSizeClass()}`,ref:i=>this.dropdownElement=i},this.label?o("div",{class:"ifx-label-wrapper"},o("span",null,this.label)):null,o("div",{class:`ifx-multiselect-wrapper 
        ${this.getSizeClass()} 
        ${this.dropdownOpen?"active":""} 
        ${this.dropdownFlipped?"is-flipped":""}
        ${this.error?"error":""}
        ${this.disabled?"disabled":""}`,tabindex:"0",onClick:i=>this.handleWrapperClick(i),onKeyDown:i=>this.handleKeyDown(i)},o("div",{class:"ifx-multiselect-input",onClick:this.disabled?void 0:()=>this.toggleDropdown()},this.persistentSelectedOptions.length>0?e:"Placeholder"),this.dropdownOpen&&o("div",{class:"ifx-multiselect-dropdown-menu",style:{"--dynamic-z-index":this.zIndex.toString()}},this.listOfOptions.map((i,l)=>this.renderOption(i,l))),o("div",{class:"ifx-multiselect-icon-container"},this.persistentSelectedOptions.length>0&&o("div",{class:"ifx-clear-button",onClick:()=>this.clearSelection()},o("ifx-icon",{key:"icon-clear",icon:"delete-16"})),o("div",{class:"icon-wrapper-up",onClick:this.disabled?void 0:()=>this.toggleDropdown()},o("ifx-icon",{key:"icon-up",icon:"chevronup-16"})),o("div",{class:"icon-wrapper-down",onClick:this.disabled?void 0:()=>this.toggleDropdown()},o("ifx-icon",{key:"icon-down",icon:"chevron-down-16"})))),this.error?o("div",{class:"ifx-error-message-wrapper"},o("span",null,this.errorMessage)):null)}get el(){return h(this)}static get watchers(){return{options:["handleOptionsChange"]}}};a.globalZIndex=1;a.style=u;export{a as ifx_multiselect};
