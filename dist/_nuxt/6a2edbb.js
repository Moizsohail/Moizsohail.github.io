(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{506:function(e,t,n){var content=n(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("1717b5d2",content,!0,{sourceMap:!1})},532:function(e,t,n){"use strict";n(506)},533:function(e,t,n){var c=n(16)(!1);c.push([e.i,'.services .side ul[data-v-144c4704]{margin-left:-10px;padding:0}.services .skill[data-v-144c4704]{height:200px}.services .skill i[data-v-144c4704]{font-size:40px;color:#595959;line-height:28px}.min[data-v-144c4704]{display:none}@media screen and (max-width:400px){.max[data-v-144c4704]{display:none}.min[data-v-144c4704]{display:block}}@media screen and (max-width:750px){.text-h3[data-v-144c4704]{font-size:3em!important}}.text-h3[data-v-144c4704]{font-size:4em!important;margin-top:5px;font-family:"futuraheavy"!important;margin-bottom:40px}.services .skill p[data-v-144c4704]{font-weight:300;font-size:15px;line-height:28px}.services .skill h4[data-v-144c4704],.services .skill p[data-v-144c4704]{color:#c1c1c1;font-family:"Poppins",sans-serif}.services .skill h4[data-v-144c4704]{font-size:18px;cursor:pointer;transition:.4s ease;font-weight:700;line-height:40px;transition:all .5s}.tile-header[data-v-144c4704]{font-size:1.4em;padding:5px 10px}.services .side li[data-v-144c4704],.tile-header[data-v-144c4704]{font-weight:600;line-height:60px;font-family:"futuraheavy";border:none;cursor:pointer;transition:.4s ease;display:block}.services .side li[data-v-144c4704]{font-size:1.5em;padding:0}i[data-v-144c4704]{transition:.4s ease;cursor:pointer}.services .side li.active[data-v-144c4704],.services .side li[data-v-144c4704]:hover,.services .skill:hover h4[data-v-144c4704],.services .skill:hover i[data-v-144c4704],.v-item--active[data-v-144c4704]{color:#f36!important}',""]),e.exports=c},567:function(e,t,n){"use strict";n.r(t);n(10),n(4),n(539),n(44),n(540),n(541),n(542),n(543),n(544),n(545),n(546),n(547),n(548),n(549),n(550),n(551),n(552),n(553),n(554),n(555),n(43),n(7);var c={data:function(){return{curr:"UI/UX Design",skills:[{head:"UI/UX Design",title:"Flutter Development",icon:"fab fa-android",desc:"2 Projects"},{head:"UI/UX Design",title:"Nuxt/Vue Development",icon:"fab fa-vuejs",desc:"3 Projects"},{head:"UI/UX Design",title:"Wordpress",icon:"fab fa-wordpress",desc:"3 Projects"},{head:"UI/UX Design",title:"Next/React Development",icon:"fab fa-react",desc:"3 Projects"},{head:"Backend Development",title:"Strapi JS",icon:"fas fa-server",desc:"1 Project"},{head:"Backend Development",title:"Node JS",icon:"fab fa-node-js",desc:"1 Project"},{head:"Backend Development",title:"SQL/Mongoose",icon:"fa fa-database",desc:"Database Managment"},{head:"Backend Development",title:"Digital Ocean Deployment",icon:"fab fa-digital-ocean"},{head:"Automation & GUI",title:"Selenium",icon:"fas fa-spider"},{head:"Automation & GUI",title:"Pyautogui",icon:"fas fa-robot"},{head:"Automation & GUI",title:"Tkinter",icon:"fas fa-window-maximize"},{head:"Automation & GUI",title:"Py Qt5",icon:"fas fa-desktop"},{head:"Deep Learning",title:"TensorFlow",icon:"fas fa-brain"},{head:"Deep Learning",title:"Keras",icon:"fab fa-kickstarter-k"},{head:"Languages",title:"C++",icon:"fab fa-cuttlefish",it:"++"},{head:"Languages",title:"Python",icon:"fab fa-python"},{head:"Languages",title:"Javascript",icon:"fab fa-js"},{head:"Languages",title:"Dart",icon:"fab fa-dyalog"}]}},computed:{currentskills:function(){var e=this;return this.skills.filter((function(t){return t.head===e.curr}))},catskills:function(){var e=new Set;return this.skills.forEach((function(t){return e.add(t.head)})),e}}},o=(n(532),n(42)),l=n(101),r=n.n(l),d=n(604),v=n(605),f=n(606),h=n(607),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"services row max"},[n("div",{staticClass:"side col-lg-5 col-md-4 col-sm-12 col-12"},[n("ul",e._l(e.catskills,(function(t){return n("li",{key:t,class:{active:e.curr===t},on:{click:function(n){e.curr=t}}},[n("p",[e._v("\n            "+e._s(t)+"\n          ")])])})),0)]),e._v(" "),n("div",{staticClass:"selected-service col-lg-7 col-md-8 col-sm-12 col-12"},[n("div",{staticClass:"row"},e._l(e.currentskills,(function(t){return n("div",{key:t.icon,staticClass:"col-md-6 col-sm-6 col-12 skill"},[n("div",{staticClass:"icon"},[n("i",{class:t.icon,attrs:{"aria-hidden":"true"}},[e._v(e._s(t.it)+" ")])]),e._v(" "),n("h4",[e._v(e._s(t.title))]),e._v(" "),n("p",[e._v(e._s(t.desc))])])})),0)])]),e._v(" "),n("div",{staticClass:"services row min"},[n("v-expansion-panels",{attrs:{flat:"",max:"1",accordion:""}},e._l(e.catskills,(function(t){return n("v-expansion-panel",{key:t,on:{click:function(n){e.curr=t}}},[n("v-expansion-panel-header",{staticClass:"tile-header",class:{active:e.curr===t}},[e._v("\n          "+e._s(t)+"\n        ")]),e._v(" "),n("v-expansion-panel-content",[n("div",{staticClass:"selected-service col-lg-7 col-md-8 col-sm-12 col-12"},[n("div",{staticClass:"row"},e._l(e.currentskills,(function(t){return n("div",{key:t.icon,staticClass:"col-md-6 col-sm-6 col-12 skill"},[n("div",{staticClass:"icon"},[n("i",{class:t.icon,attrs:{"aria-hidden":"true"}},[e._v(e._s(t.it)+"\n                  ")])]),e._v(" "),n("h4",[e._v(e._s(t.title))]),e._v(" "),n("p",[e._v(e._s(t.desc))])])})),0)])])],1)})),1)],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"text-overline"},[e._v("Services")]),e._v(" "),n("h2",{staticClass:"text-h3"},[e._v("My capabilities")])])}],!1,null,"144c4704",null);t.default=component.exports;r()(component,{VExpansionPanel:d.a,VExpansionPanelContent:v.a,VExpansionPanelHeader:f.a,VExpansionPanels:h.a})}}]);