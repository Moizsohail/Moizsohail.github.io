(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7,8],{487:function(t,e,n){"use strict";n.r(e);var d={props:{text:{type:String,default:""},multiline:{type:Boolean,default:!1},type:{type:String,default:"p"}},data:function(){return{tempText:this.text,editorOn:!1}},computed:{editMode:function(){return this.$store.state.editor.editMode}},methods:{handle:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.editMode&&(t||this.$emit("handleChange",this.tempText),this.editorOn=t)}}},o=d,l=n(44),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.editorOn?n(t.multiline?"v-textarea":"v-text-field",{tag:"component",attrs:{value:t.tempText,flat:"",solo:"",multiline:"","append-icon":"mdi-close",autofocus:""},on:{keyup:function(e){return t.tempText=e.target.value},"click:append":function(e){return t.handle(!1)}}}):n(t.type,{tag:"component",on:{click:function(e){return t.handle(!0)}}},[t._v(t._s(t.tempText))])],1)}),[],!1,null,null,null);e.default=component.exports},488:function(t,e,n){var content=n(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2488bceb",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n.r(e);var d={methods:{handleUpdate:function(t){var e=new FormData;e.append("project","1Vlancer"),e.append("jsonPath","bg"),e.append("image",this.$refs.file.files[0]),this.$axios.$post("/api/image",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){console.log("SUCCESS!!")})).catch((function(){console.error("FAILURE!!")}))}}},o=(n(492),n(44)),l=n(103),r=n.n(l),c=n(135),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._t("default"),t._v(" "),t.$store.state.editor.editMode?n("div",{staticClass:"image-upload-edit"},[n("input",{ref:"file",attrs:{id:"fileElem",type:"file",accept:"image/*"},on:{change:t.handleUpdate}}),t._v(" "),n("label",{staticClass:"label-icon",attrs:{for:"fileElem"}},[n("v-icon",{staticClass:"icon",attrs:{"x-large":""}},[t._v("mdi-pencil")])],1)]):t._e()],2)}),[],!1,null,"59db314a",null);e.default=component.exports;r()(component,{VIcon:c.a})},492:function(t,e,n){"use strict";n(488)},493:function(t,e,n){var d=n(16)(!1);d.push([t.i,".wrapper[data-v-59db314a]{position:relative}#fileElem[data-v-59db314a],.wrapper[data-v-59db314a]{width:100%;height:100%}#fileElem[data-v-59db314a]{display:None}.image-upload-edit[data-v-59db314a]{width:100%;height:100%;top:0;cursor:pointer;position:absolute}.image-upload-edit[data-v-59db314a]:hover{background-color:rgba(85,85,85,.482)}.image-upload-edit:hover .icon[data-v-59db314a]{visibility:visible}.image-upload-edit .label-icon[data-v-59db314a]{width:100px;height:100px}.image-upload-edit .icon[data-v-59db314a]{width:100px;height:100px;z-index:10;font-size:90px;justify-content:center;width:100%;height:100%;visibility:hidden}",""]),t.exports=d},498:function(t,e,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("470af05e",content,!0,{sourceMap:!1})},518:function(t,e,n){"use strict";n(498)},519:function(t,e,n){var d=n(16)(!1);d.push([t.i,".d-flex[data-v-ad4ba03c]{max-width:1280px;margin:auto;display:grid!important;grid-template-columns:1fr auto}.extra-image[data-v-ad4ba03c]{position:absolute;z-index:3;right:100px;margin-top:600px;width:40vw}.extra-image img[data-v-ad4ba03c]{width:100%;box-shadow:-6px 8px 35px 7px rgba(0,0,0,.7000000000000001)}.content[data-v-ad4ba03c]{display:flex;width:100%;margin-top:120px;margin-left:60px;padding-top:0;flex-direction:column;justify-content:flex-start;align-items:flex-start}.main-image img[data-v-ad4ba03c]{width:100%;box-shadow:0 28px 42px 0 hsla(0,0%,100%,.2)}.text[data-v-ad4ba03c]{margin:150px 2vw auto;width:unset;max-width:300px}.contained[data-v-ad4ba03c]{width:100%;right:unset;margin:auto}.main-image[data-v-ad4ba03c]{width:100%;margin:-60px auto auto;padding-left:24px;max-width:unset!important;position:relative;z-index:2}@media screen and (max-width:800px){.main-image[data-v-ad4ba03c]{display:none}.d-flex[data-v-ad4ba03c]{grid-template-columns:1fr}.extra-image[data-v-ad4ba03c]{position:relative;margin:auto}.content[data-v-ad4ba03c]{margin-left:10px;max-width:400px}.content h3[data-v-ad4ba03c]{margin:0}}",""]),t.exports=d},571:function(t,e,n){"use strict";n.r(e);var d=n(490),o={components:{EditableArea:n(487).default,ImageUpdate:d.default},props:{blob:{type:Object,required:!0}},computed:{small:function(){return window.innerWidth<800},safeSpeed:function(){return function(t){return window.innerWidth<800?0:t}}}},l=(n(518),n(44)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex container"},[n("div",{staticClass:"main-image"},[n("image-update",[t.blob.main?n("img",{attrs:{src:t.$img(t.blob.main,{format:"webp"})}}):t._e()])],1),t._v(" "),n("div",{staticClass:"text",class:{content:t.small}},[n("editable-area",{attrs:{text:t.blob.title,type:"h3",multiline:""}}),t._v(" "),n("editable-area",{attrs:{text:t.blob.desc,type:"p",multiline:""}})],1),t._v(" "),t.blob.other?n("div",{directives:[{name:"rellax",rawName:"v-rellax",value:{speed:t.safeSpeed(-1.5)},expression:"{ speed: safeSpeed(-1.5) }"}],staticClass:"extra-image",class:{container:t.small,contained:t.small}},[n("image-update",[n("img",{attrs:{src:t.$img(t.blob.other,{format:"webp"})}})])],1):t._e()])}),[],!1,null,"ad4ba03c",null);e.default=component.exports}}]);