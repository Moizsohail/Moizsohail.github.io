(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{501:function(e,t,r){var content=r(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("7645d395",content,!0,{sourceMap:!1})},520:function(e,t,r){"use strict";r(501)},521:function(e,t,r){var n=r(16)(!1);n.push([e.i,".title[data-v-6384e19e]{text-align:center;margin:auto auto 100px}.side>.d-flex[data-v-6384e19e]{display:grid!important;grid-template-columns:1fr 1fr}.text h3[data-v-6384e19e]{font-size:36px!important}.lside .img[data-v-6384e19e]{width:100%}.slide-fade-enter-active[data-v-6384e19e]{transition:all .3s ease}.slide-fade-leave-active[data-v-6384e19e]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-6384e19e],.slide-fade-leave-to[data-v-6384e19e]{transform:translateX(10px);opacity:0}.lside[data-v-6384e19e]{width:100%;height:600px}.text[data-v-6384e19e]{width:300px}.tech[data-v-6384e19e]{margin-top:70px;cursor:pointer;transition:border .2s;width:100px}.active[data-v-6384e19e],.tech[data-v-6384e19e]:hover{border:2px solid #fff}@media screen and (max-width:600px){.d-flex.container[data-v-6384e19e]{display:block!important}.vcenter[data-v-6384e19e]{margin-top:unset}.lside[data-v-6384e19e]{margin-top:40px;height:auto}}",""]),e.exports=n},564:function(e,t,r){"use strict";r.r(t);var n={props:{blob:{required:!0,type:Object}},data:function(){return{curr:""}},computed:{current:function(){return this.curr?this.curr:this.blob.images[0]}}},l=(r(520),r(42)),c=r(101),d=r.n(c),o=r(175),v=r(206),f=r(486),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"side"},[r("div",{staticClass:"title"},[r("h3",[e._v(e._s(e.blob.bigtitle))]),e._v(" "),r("p",[e._v(e._s(e.blob.bigdesc))])]),e._v(" "),r("div",{staticClass:"d-flex container"},[r("div",{staticClass:"rside vcenter"},[r("div",{staticClass:"text"},[r("h3",[e._v(e._s(e.blob.title))]),e._v(" "),r("p",[e._v("\n          "+e._s(e.blob.desc)+"\n        ")])]),e._v(" "),e.blob.images.length>1?r("div",{staticClass:"d-flex"},e._l(e.blob.images,(function(t){return r("div",{key:t,staticClass:"tech vcenter",class:{active:e.current==t},on:{click:function(r){e.curr=t}}},[r("v-img",{attrs:{src:t},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),0):e._e()]),e._v(" "),r("div",{staticClass:"lside vcenter"},[r("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[r("img",{staticClass:"img",attrs:{src:e.$img(e.current,{format:"webp"})}})])],1)])])}),[],!1,null,"6384e19e",null);t.default=component.exports;d()(component,{VImg:o.a,VProgressCircular:v.a,VRow:f.a})}}]);