import{r as a,c as s,h as e}from"./index-6fe8e799.js";const t=".search-bar{box-sizing:border-box;height:40px;background-color:#ffffff;display:flex;flex-direction:row;align-items:center;width:100%}.search-bar.large{width:362px}.search-bar.closed{display:inline-flex;width:auto}.search-bar .search-bar-wrapper{display:flex;align-items:center;gap:16px;width:100%}.search-bar .search-bar-wrapper ifx-search-input{width:100%}.search-bar .search-bar-wrapper ifx-link:hover{cursor:pointer}.search-bar .search-bar__icon-wrapper{display:inline-flex;flex-direction:row;align-items:center;justify-content:center}.search-bar .search-bar__icon-wrapper a{font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#1d1d1d;text-decoration:none;display:flex;align-items:center;flex:none;order:1;flex-grow:0;padding-left:11px}.search-bar .search-bar__icon-wrapper ifx-icon:hover{cursor:pointer}",n=class{constructor(r){a(this,r),this.ifxChange=s(this,"ifxChange",7),this.handleClick=()=>{this.isOpen=!this.isOpen},this.icon=void 0,this.showCloseButton=!0,this.isOpen=!0,this.hideLabel=!1,this.size="",this.value=""}handleSearchInput(r){this.value=r.detail;const i=new CustomEvent("ifx-change",{bubbles:!0,composed:!0,detail:this.value});this.ifxChange.emit(i)}render(){return e("div",{class:`search-bar ${this.isOpen?"":"closed"} ${this.size==="large"?"large":""}`},this.isOpen?e("div",{class:"search-bar-wrapper"},e("ifx-search-input",{onIfxChange:r=>this.handleSearchInput(r)},e("ifx-icon",{icon:"search-16",slot:"search-icon"})),this.showCloseButton&&e("ifx-link",{onClick:this.handleClick},"Close")):e("div",{class:"search-bar__icon-wrapper",onClick:this.handleClick},e("ifx-icon",{icon:"search-16"}),e("a",{href:"javascript:void(0)"},"Search")))}};n.style=t;export{n as ifx_search_bar};
