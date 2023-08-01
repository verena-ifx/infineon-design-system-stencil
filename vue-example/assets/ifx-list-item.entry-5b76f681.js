import{r as i,h as e,g as s}from"./index-9771da62.js";const l='@charset "UTF-8";.list-group-item{display:flex;align-items:center;justify-content:space-between;height:40px;width:350px;padding:8px 16px;background-color:#ffffff;border:1px solid #ebe9e9;border-radius:1px 1px 0px 0px;font-style:normal;font-weight:400;font-size:16px;line-height:24px}.list-group-item.flush{border:none;border-bottom:1px solid #ebe9e9}.list-group-item.flush.bulletpoint{padding:8px}.list-group-item.bulletpoint .list-group-item-content::before{content:"•";display:inline-block;font-size:18px;padding-right:10px}.list-group-item:hover:not(.show){background-color:#ebe9e9}.list-group-item:active:not(.show){background-color:#378375;color:#ffffff}.list-group-item.show{display:block;height:88px;padding:16px}',o=class{constructor(t){i(this,t),this.isFlush=!1,this.hasBulletpoint=!1,this.badge=!1,this.badgeValue=0}componentWillLoad(){const t=this.el.closest("ifx-list-group");t.flush?this.isFlush=!0:this.isFlush=!1,t.bulletpoint&&!this.badge?this.hasBulletpoint=!0:this.hasBulletpoint=!1}render(){return e("div",{class:`list-group-item 
        ${this.isFlush?"flush":""}
        ${this.hasBulletpoint?"bulletpoint":""}`},e("div",{class:"list-group-item-content"},e("slot",null)),this.badge&&e("ifx-number-indicator",null,this.badgeValue))}get el(){return s(this)}};o.style=l;export{o as ifx_list_item};
