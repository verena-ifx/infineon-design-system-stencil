import{r as t,c as s,h as o}from"./index-784f9e4a.js";const e=".card-image{width:100%;height:100%;vertical-align:bottom;object-fit:cover}",n=class{constructor(i){t(this,i),this.imgPosition=s(this,"imgPosition",7),this.src=void 0,this.alt=void 0,this.position=void 0}handlePosition(i){this.imgPosition.emit(i)}componentWillLoad(){this.handlePosition(this.position)}componentDidUpdate(){this.handlePosition(this.position)}render(){return o("img",{src:this.src,alt:this.alt,class:"card-image"})}};n.style=e;export{n as ifx_card_image};
