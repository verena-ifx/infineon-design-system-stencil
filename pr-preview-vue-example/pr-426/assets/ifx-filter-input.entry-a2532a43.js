import{r as n,c as s,h as i,g as l}from"./index-760c7772.js";const o='.inf__filter-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:"Source Sans Pro";font-weight:400;line-height:1.75;color:#1D1D1D;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}',r=class{constructor(e){n(this,e),this.selectValue=s(this,"selectValue",3),this.label=void 0,this.size=void 0,this.disabled=void 0,this.icon=!1,this.search=!1,this.filter=!1,this.options=[]}handleSelectValue(e){this.selectValue.emit(e.target.value)}componentWillRender(){const e=this.el.querySelectorAll("option");for(let t=0;t<e.length;t++)this.options.push(e[t])}render(){return i("select",{class:"inf__filter-input",onChange:this.handleSelectValue.bind(this)},i("slot",null),this.options.map(e=>i("option",null,e.label||e.value)))}get el(){return l(this)}};r.style=o;export{r as ifx_filter_input};
