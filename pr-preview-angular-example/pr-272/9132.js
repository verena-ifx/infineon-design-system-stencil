"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[9132],{9132:(g,r,i)=>{i.r(r),i.d(r,{ifx_icon:()=>h});var s=i(439),l=i(4987);const h=class{constructor(t){(0,s.r)(this,t),this.consoleError=(0,s.c)(this,"consoleError",7),this.icon="",this.ifxIcon=void 0}convertStringToHtml(t){const n=document.createElement("div");return n.innerHTML=t,n.firstChild}convertHtmlToObject(t){return Array.from(t.attributes,({name:o,value:e})=>({name:o,value:e})).reduce((o,e)=>(o[e.name]=e.value,o),{})}convertPathsToVnode(t){let n=[];const o=this.convertHtmlToObject(t),e=(0,s.h)("path",o);if(n.push(e),t.firstChild){const u=t.querySelectorAll("path"),f=t.querySelectorAll("path").length;for(let c=0;c<f;c++){let d=this.convertHtmlToObject(u[c]),v=(0,s.h)("path",d);n.push(v)}}return n}getSVG(t){return(0,s.h)("svg",{class:"inline-svg",width:this.ifxIcon.width,height:this.ifxIcon.height,xmlns:"http://www.w3.org/2000/svg",fill:this.ifxIcon.fill,viewBox:this.ifxIcon.viewBox},...t)}constructIcon(){if(this.ifxIcon){const t=this.convertStringToHtml(this.ifxIcon.svgContent),n=this.convertPathsToVnode(t),o=this.getSVG(n);return this.consoleError.emit(!1),o}return console.error("Icon not found!"),this.consoleError.emit(!0),""}componentWillLoad(){this.ifxIcon=(0,l.g)(this.icon.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(o,e)=>e))}render(){return(0,s.h)(s.H,null,this.constructIcon())}};h.style="ifx-icon{display:inline-flex;justify-content:center}"}}]);