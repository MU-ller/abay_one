(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{850:function(e,n){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"cars"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"cars"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"ID"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ID"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"car_brand"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"car_model"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"car_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"car_type"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:133}};r.loc.source={body:"query cars($id: Int) {\r\n  cars(where: {ID: {_eq: $id}}) {\r\n    ID\r\n    car_brand\r\n    car_model\r\n    car_name\r\n    car_type\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var r=e.type;"NamedType"===r.kind&&n.add(r.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var d={};function c(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}r.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),d[e.name.value]=n}})),e.exports=r,e.exports.cars=function(e,n){var r={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(r.loc=e.loc);var t=d[n]||new Set,o=new Set,l=new Set;for(t.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){o.has(e)||(o.add(e),(d[e]||new Set).forEach((function(e){l.add(e)})))}))}return o.forEach((function(n){var t=c(e,n);t&&r.definitions.push(t)})),r}(r,"cars")},889:function(e,n,r){"use strict";r.r(n);var t=r(535),d=r(850),c={apollo:{cars:{query:r.n(d).a,prefetch:function(e){return{id:e.route.params.id}},variables:function(){return{id:this.$route.params.id}}}},head:function(){return{title:"Articles by Author"}}},o=r(58),component=Object(o.a)(c,(function(){var e=this,n=e._self._c;return n(t.a,{staticClass:"text-center pa-md-10 pa-10 lighten-5"},[e.cars?n("div",[n("h1",[e._v("this the selected car")]),e._v(" "),e._l(e.cars,(function(r){return n("div",{key:r.id},[n("h3",[e._v("car_name: "+e._s(r.car_name))]),e._v(" "),n("p",[e._v("car_brand: "+e._s(r.car_brand))]),e._v(" "),n("p",[e._v("car_model: "+e._s(r.car_model))]),e._v(" "),n("p",[e._v("car_type: "+e._s(r.car_type))]),e._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/"}},[e._v("\n          Home page\n        ")])],1)])}))],2):e._e()])}),[],!1,null,null,null);n.default=component.exports}}]);