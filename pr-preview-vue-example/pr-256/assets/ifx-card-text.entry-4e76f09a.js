import{r,h as t,g as s}from"./index-3a5f83ee.js";const i=".card__text-wrapper{padding-bottom:0px}.card__text-wrapper.hasBtn{padding-bottom:16px}.card-text{line-height:24px;font-size:16px;font-weight:400;white-space:wrap;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}",a=class{constructor(e){r(this,e),this.hasBtn=void 0}componentWillLoad(){this.el.closest("ifx-card").querySelector("ifx-link")&&(this.hasBtn=!0)}render(){return t("div",{class:`card__text-wrapper ${this.hasBtn?"hasBtn":""}`},t("div",{class:"card-text"},t("slot",null)))}get el(){return s(this)}};a.style=i;export{a as ifx_card_text};
