(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/components/search-bar/search-bar.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js");__webpack_exports__.default={title:"Components/Search Bar",args:{width:"100%",isOpen:!0,showCloseButton:!0},argTypes:{onSearch:{action:"search"},width:{options:["20%","40%","60%","80%","100%"],control:{type:"radio"}},isOpen:{control:{type:"boolean"}},showCloseButton:{control:{type:"boolean"}}}};var debounceSearch=Object(lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)((function(onSearch,query){onSearch(query)}),500),Default=function Template(args){return"<ifx-search-bar onSearch="+function handleInput(e){var query=e.target.value;console.log(query),debounceSearch(args.onSearch,query)}+' style="width: '+args.width+'" is-open="'+args.isOpen+'" show-close-button="'+args.showCloseButton+'"></ifx-search-bar>'}.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:'(args) => {\n  const handleInput = (e) => {\n    const query = e.target.value;\n    console.log(query);\n    debounceSearch(args.onSearch, query);\n\n  };\n\n  return `<ifx-search-bar onSearch=${handleInput} style="width: ${args.width}" is-open="${args.isOpen}" show-close-button="${args.showCloseButton}"></ifx-search-bar>`;\n}'}},Default.parameters)}}]);