import{r as i,h as n}from"./index-29255c7b.js";import{c as t}from"./index-3c58b0c1-03c37d78.js";import"./_commonjsHelpers-e9b9b14e-cda1f04d.js";const r='*{font-family:"Source Sans 3"}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#1D1D1D;gap:8px;line-height:1.6}.link.bold{font-weight:600}.link.primary{color:#0A8276}.link.secondary{color:#9C216E}.link.warning{color:#E16B25}.link.danger{color:#CD002F}.link.success{color:#4CA460}.link.underline{text-decoration:underline}',l=class{constructor(e){i(this,e),this.href=void 0,this.target="_self",this.color=void 0,this.bold=!0,this.underline=!0}render(){return n("a",{href:this.href,target:this.target,class:this.linkClassNames()},n("slot",null))}linkClassNames(){return t("link",this.color,this.bold&&"bold",this.underline&&"underline")}};l.style=r;export{l as ifx_link};
