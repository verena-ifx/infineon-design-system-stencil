(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/components/button/button.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");__webpack_exports__.default={title:"Components/Button",args:{label:"Button",variant:"solid",color:"primary",size:"m",disabled:!1,icon:"",position:"left",href:"",target:"_blank"},argTypes:{variant:{options:["solid","outline","outline-text"],control:{type:"radio"}},color:{options:["primary","secondary","success","danger","warning"],control:{type:"radio"}},size:{options:["s","m"],control:{type:"radio"}},position:{options:["left","right"],control:{type:"radio"}},target:{options:["_blank","_self","_parent"],control:{type:"radio"}}}};var Default=function DefaultTemplate(args){return'<ifx-button  variant="'+args.variant+'" icon="'+args.icon+'" position="'+args.position+'" href="'+args.href+'" target="'+args.target+'" color="'+args.color+'" size="'+args.size+'" disabled="'+args.disabled+'">\n  '+args.label+"\n  </ifx-button>"}.bind({});Default.argTypes={},Default.parameters=Object.assign({storySource:{source:'(args) =>\n  `<ifx-button  variant="${args.variant}" icon="${args.icon}" position="${args.position}" href="${args.href}" target="${args.target}" color="${args.color}" size="${args.size}" disabled="${args.disabled}">\n  ${args.label}\n  </ifx-button>`'}},Default.parameters)}}]);