(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{851:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ab1_product"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ab1_product"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"descriptions"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:201}};t.loc.source={body:"query ab1_product($id: uuid) {\r\n  ab1_product(where: {id: {_eq: $id}}) {\r\n    id\r\n    image_url\r\n    created_at\r\n    image_url\r\n    updated_at\r\n    price\r\n    descriptions\r\n    amount\r\n    name\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.ab1_product=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,l=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(d[e]||new Set).forEach((function(e){c.add(e)})))}))}return l.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"ab1_product")},890:function(e,n,t){"use strict";t.r(n);var r=t(253),d=t(537),o=t(535),l=t(342),c=t(536),m=(t(33),t(851)),v={apollo:{ab1_product:{query:t.n(m).a,prefetch:function(e){return{id:e.route.params.id}},variables:function(){return{id:this.$route.params.id}}}},head:function(){return{title:"Articles by Author"}}},f=t(58),component=Object(f.a)(v,(function(){var e=this,n=e._self._c;return n("div",[n("DesktopNav"),e._v(" "),e.ab1_product?n(o.a,e._l(e.ab1_product,(function(t){return n(c.a,{key:t.id,attrs:{justify:"center"}},[n(d.a,{attrs:{cols:"11",md:"7"}},[n("h2",{staticClass:"text-center text-md-h4 font-weight-bold"},[e._v("\n          "+e._s(t.name)+"\n        ")]),e._v(" "),n("br"),e._v(" "),n(l.a,{staticClass:"el rounded-lg",attrs:{"max-width":"500","k-max-length":"600",src:t.image_url}}),e._v(" "),n("br"),e._v(" "),n("h3",{staticClass:"text-md-h5 text-subtitle-1 primary--text mt-5"},[e._v("\n          axions type : "+e._s(t.name)+"\n        ")]),e._v(" "),n("h3",{staticClass:"text-md-h5 text-subtitle-1 primary--text mt-5"},[e._v("Axions amount:\n          "+e._s(t.amount)+"\n        ")]),e._v(" "),n("h3",{staticClass:"text-md-h5 text-subtitle-1 primary--text mt-5"},[e._v("\n          selling price : ET BIRR "+e._s(t.price)+"\n        ")]),e._v(" "),n(r.a,{staticClass:"text-capitalize",attrs:{nuxt:"",to:"/orders",color:"primary"}},[e._v("Buy Axions")])],1),e._v(" "),n(d.a,[n("h3",[n("h2",{staticClass:"text-md-h5 text-subtitle-1 primary--text mt-5"},[e._v("About :"+e._s(t.name))]),e._v("\n          "+e._s(t.descriptions)+"\n        ")])])],1)})),1):e._e(),e._v(" "),n("br"),n("br")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{DesktopNav:t(255).default})}}]);