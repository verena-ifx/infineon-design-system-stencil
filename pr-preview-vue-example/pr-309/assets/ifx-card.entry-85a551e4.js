import{r as l,h as e,H as o,g as d}from"./index-f4cdcbd7.js";const s='*{font-family:"Source Sans Pro"}.card{position:relative;display:inline-flex;flex-direction:column;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem;height:auto}.card .card-img ::slotted([slot=img]){width:100%;vertical-align:bottom}.card .card-body{padding:24px}.card.horizontal{flex-direction:row;width:538px}.card.horizontal.hasAll{height:auto}.card.horizontal.largeSize{height:218px}.card.horizontal.smallSize{height:138px}.card.horizontal .card-body{flex:1;width:0;padding:17px 24px 25px 25px}.card.horizontal .card-img{flex:1;order:2}.card.horizontal .card-img ::slotted([slot=img]){width:100%;height:100%;vertical-align:bottom;object-fit:cover}.card.horizontal.right .card-img{order:1}.card.horizontal.right .card-body{order:2}.card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:24px;font-size:16px;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}',n=class{constructor(i){l(this,i),this.hasBtn=void 0,this.direction="vertical",this.alignment=void 0,this.hasDesc=void 0,this.hasAll=void 0,this.largeSize=void 0,this.smallSize=void 0}componentWillLoad(){const i=this.el.querySelector("ifx-card-text"),t=this.el.querySelector("ifx-card-overline"),r=this.el.querySelector("ifx-card-headline"),a=this.el.querySelector("ifx-link");i&&(this.hasDesc=!0),t&&r&&i&&a?this.hasAll=!0:this.hasDesc||t&&r&&a?this.largeSize=!0:this.smallSize=!0}render(){return e(o,null,e("div",{class:`card 
          ${this.direction} 
          ${this.alignment} 
          ${this.largeSize?"largeSize":""} 
          ${this.smallSize?"smallSize":""} 
          ${this.hasAll?"hasAll":""}`},e("div",{class:"card-img"},e("slot",{name:"img"})),e("div",{class:"card-body"},e("slot",{name:"overline"}),e("slot",{name:"headline"}),e("slot",{name:"text"}),e("slot",{name:"btn"}))))}get el(){return d(this)}};n.style=s;export{n as ifx_card};
