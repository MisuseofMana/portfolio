exports.ids = [4];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("e101b4a6", content, true, context)
};

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("049e42fd", content, true, context)
};

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("3de73afa", content, true, context)
};

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_resume_vue_vue_type_style_index_0_id_536440b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_resume_vue_vue_type_style_index_0_id_536440b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_resume_vue_vue_type_style_index_0_id_536440b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_resume_vue_vue_type_style_index_0_id_536440b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_resume_vue_vue_type_style_index_0_id_536440b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".resumeFlexRow[data-v-536440b8]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-evenly}.resumePage[data-v-536440b8]{margin-bottom:20px}.resume[data-v-536440b8]{display:grid;grid-template-columns:auto;grid-template-rows:auto;margin:0 auto;grid-template-areas:\"header\" \"experience\" \"skills\" \"education\" \"personal\"}.education[data-v-536440b8],.experience[data-v-536440b8],.personal[data-v-536440b8],.skills[data-v-536440b8],header[data-v-536440b8]{padding:10px}header h1[data-v-536440b8],header h2[data-v-536440b8],header h3[data-v-536440b8]{text-align:center}h1[data-v-536440b8],h2[data-v-536440b8],h3[data-v-536440b8]{text-align:left}header[data-v-536440b8]{display:flex;justify-content:center;align-items:center;flex-direction:column;grid-area:header;border-bottom:1px solid #000}.skills[data-v-536440b8]{grid-area:skills}.experience[data-v-536440b8]{grid-area:experience}.education[data-v-536440b8]{grid-area:education}.personal[data-v-536440b8]{grid-area:personal}@media (min-width:768px){.resumeFlexRow[data-v-536440b8]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:flex-start}}@media (min-width:1024px){.resume[data-v-536440b8]{display:grid;grid-template-columns:auto;grid-template-rows:auto;margin:0 auto;grid-template-areas:\"header header\" \"experience skills\" \"personal education\"}header h1[data-v-536440b8],header h2[data-v-536440b8],header h3[data-v-536440b8]{text-align:center;margin:5px}h1[data-v-536440b8],h2[data-v-536440b8],h3[data-v-536440b8]{text-align:left}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBlock_vue_vue_type_style_index_0_id_2db779ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBlock_vue_vue_type_style_index_0_id_2db779ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBlock_vue_vue_type_style_index_0_id_2db779ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBlock_vue_vue_type_style_index_0_id_2db779ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeBlock_vue_vue_type_style_index_0_id_2db779ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".subtitle[data-v-2db779ec]{margin-left:0}.block[data-v-2db779ec]{background:#f3f3f3;padding:15px 20px;margin:20px 0;border-radius:10px;box-shadow:2px 2px 1px #cecece}.date[data-v-2db779ec]{font-style:italic;text-align:left}ul[data-v-2db779ec]{margin:20px}ul li[data-v-2db779ec]{margin-bottom:5px}.marginRight[data-v-2db779ec]{margin-right:10px}a[data-v-2db779ec]{text-decoration:none;color:#fff;border-radius:10px;margin:10px;background-color:var(--primary-color);padding:10px}@media (min-width:768px){.subtitle[data-v-2db779ec]{margin-left:10px}.accent[data-v-2db779ec]{margin-right:5px}ul li[data-v-2db779ec]{margin-bottom:10px}.marginRight[data-v-2db779ec]{margin-right:8px}a[data-v-2db779ec]{text-decoration:none;color:#fff;border-radius:10px;margin:10px;background-color:var(--primary-color);padding:10px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeChip_vue_vue_type_style_index_0_id_0bd4aeb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeChip_vue_vue_type_style_index_0_id_0bd4aeb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeChip_vue_vue_type_style_index_0_id_0bd4aeb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeChip_vue_vue_type_style_index_0_id_0bd4aeb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ResumeChip_vue_vue_type_style_index_0_id_0bd4aeb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chip[data-v-0bd4aeb5]{background:#f3f3f3;padding:10px 20px;margin:5px;border-radius:20px;text-indent:0;color:#000;box-shadow:2px 2px 1px #cecece}.text[data-v-0bd4aeb5]{margin-left:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/resume/ResumeBlock.vue?vue&type=template&id=2db779ec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block"},[_vm._ssrNode("<section class=\"flexRowStart\" data-v-2db779ec>"+((_vm.type==='job')?("<section data-v-2db779ec><section class=\"flexRowStart\" data-v-2db779ec><h1 data-v-2db779ec>"+_vm._ssrEscape(_vm._s(_vm.title)+" ")+"</h1> <section class=\"flexRow subtitle\" data-v-2db779ec><h2 class=\"ifDesktop accent\" data-v-2db779ec> : </h2> <h2 data-v-2db779ec>"+_vm._ssrEscape(" "+_vm._s(_vm.subtitle))+"</h2></section></section> <h3 data-v-2db779ec>"+_vm._ssrEscape("| "+_vm._s(_vm.role)+" ")+"</h3></section>"):(_vm.type==='education')?("<section data-v-2db779ec><section class=\"flexRow\" data-v-2db779ec><h1 data-v-2db779ec>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> "+((_vm.subtitle)?("<section class=\"flexRow subtitle\" data-v-2db779ec><h2 class=\"ifDesktop accent\" data-v-2db779ec> @ </h2> <h2 data-v-2db779ec>"+_vm._ssrEscape(" "+_vm._s(_vm.subtitle))+"</h2></section>"):"<!---->")+"</section> <h3 data-v-2db779ec>"+_vm._ssrEscape(" | "+_vm._s(_vm.role)+" ")+"</h3></section>"):(_vm.type==='project')?("<section data-v-2db779ec><h1 data-v-2db779ec>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <h2 data-v-2db779ec>"+_vm._ssrEscape(_vm._s(_vm.subtitle))+"</h2></section>"):"<!---->")+"</section> "),(!_vm.url)?_vm._ssrNode("<section data-v-2db779ec>","</section>",[_vm._ssrNode("<h3 class=\"date\" data-v-2db779ec>"+_vm._ssrEscape(_vm._s(_vm.startDate)+" - "+_vm._s(_vm.endDate))+"</h3> <ul data-v-2db779ec>"+(_vm._ssrList((_vm.list),function(item,index){return ("<li data-v-2db779ec>"+_vm._ssrEscape(_vm._s(item))+"</li>")}))+"</ul>")],2):_vm._ssrNode("<section data-v-2db779ec>","</section>",[_vm._ssrNode("<p data-v-2db779ec>"+_vm._ssrEscape(_vm._s(_vm.description))+"</p> "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.url))+" class=\"button flexRowCenter\" data-v-2db779ec>","</a>",[_c('Icon',{staticClass:"marginRight",attrs:{"name":_vm.iconName}}),_vm._ssrNode(_vm._ssrEscape("\n        "+_vm._s(_vm.linkText)+"\n      "))],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/resume/ResumeBlock.vue?vue&type=template&id=2db779ec&scoped=true&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/resume/ResumeBlock.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ResumeBlockvue_type_script_lang_js_ = ({
  props: ['type', 'title', 'subtitle', 'role', 'startDate', 'endDate', 'list', 'description', 'iconName', 'url', 'linkText']
});
// CONCATENATED MODULE: ./components/resume/ResumeBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var resume_ResumeBlockvue_type_script_lang_js_ = (ResumeBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/resume/ResumeBlock.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resume_ResumeBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2db779ec",
  "e9042c68"
  
)

/* harmony default export */ var ResumeBlock = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/resume/ResumeChip.vue?vue&type=template&id=0bd4aeb5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chip flexRowBetween"},[_c('Icon',{attrs:{"name":_vm.iconName}}),_vm._ssrNode(" <p class=\"text\" data-v-0bd4aeb5>"+_vm._ssrEscape(_vm._s(_vm.skill))+"</p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/resume/ResumeChip.vue?vue&type=template&id=0bd4aeb5&scoped=true&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/resume/ResumeChip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var ResumeChipvue_type_script_lang_js_ = ({
  props: ['iconName', 'skill']
});
// CONCATENATED MODULE: ./components/resume/ResumeChip.vue?vue&type=script&lang=js&
 /* harmony default export */ var resume_ResumeChipvue_type_script_lang_js_ = (ResumeChipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/resume/ResumeChip.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  resume_ResumeChipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0bd4aeb5",
  "7ea37edd"
  
)

/* harmony default export */ var ResumeChip = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/resume.vue?vue&type=template&id=536440b8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"resumePage"},[_vm._ssrNode("<section class=\"hero\" data-v-536440b8><section class=\"heroPadding\" data-v-536440b8><h1 data-v-536440b8>Resume</h1> <p data-v-536440b8>If you're looking for a well rounded Web Dev who can communicate across the pipeline, look no further.</p> <p data-v-536440b8>\n        I spent most of 20-Naught rounding my production skills across Full Stack Web Dev, UI/UX Design, Vue JS, Vuex, Illustration, Graphic Design, SEO, and Storytelling in order to produce quality content.\n      </p> <p data-v-536440b8>\n        Working with a team is my forte, I'm knowledgeable in mutiple fields and I use that knowledge to communicate to my clients/coworkers how we can facilitate a seamless experience for each other.\n      </p></section></section> "),_vm._ssrNode("<section class=\"resume hero\" data-v-536440b8>","</section>",[_vm._ssrNode("<section class=\"heroPadding\" data-v-536440b8>","</section>",[_vm._ssrNode("<header data-v-536440b8><h1 data-v-536440b8>"+_vm._ssrEscape("History of a Level "+_vm._s(this.devLevel)+" Web Developer")+"</h1> <h2 data-v-536440b8>Web Designer, Comics Artist, Illustrator, Cryptographer, Storyteller, Friendly Guy, Designer</h2></header> "),_vm._ssrNode("<section class=\"experience\" data-v-536440b8>","</section>",[_vm._ssrNode("<h1 data-v-536440b8>Work History</h1> "),_c('ResumeBlock',{attrs:{"type":"job","title":"Freelance Web Developer","subtitle":"Austin, TX","role":"Owner & Operator","startDate":"Feb 2013","endDate":"Present","list":[
          'cooperate with individual and business branding through art, websites, and iconography.',
          'work spans over 7 years, clientel ranges from college campus programs, to Youtube channels, Kickstarters, Twitch streamers, family owned businesses, individuals etc.' ]}}),_vm._ssrNode(" "),_c('ResumeBlock',{attrs:{"type":"job","title":"Creative Converting","subtitle":"Indianapolis, IN","role":"Merchandising Coordinator","startDate":"AUG 2018","endDate":"SEPT 2019","list":[
          'printed accurate product samples, cut, assembled, and packaged for mockups.',
          'managed and fulfilled multiple sample orders on deadlines for trade shows, sales meetings, and clients.',
          'navigated physical and digital catalogs to accurately assemble hundreds of name brand products, and custom trade show displays',
          'suggested ways to improve efficiancy in workplace processes'
          ]}})],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"skills\" data-v-536440b8>","</section>",[_vm._ssrNode("<h1 data-v-536440b8>Proficiencies</h1> "),_vm._ssrNode("<h2 data-v-536440b8>","</h2>",[_c('Icon',{attrs:{"name":"desktop"}}),_vm._ssrNode(" Operating Systems")],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"resumeFlexRow\" data-v-536440b8>","</section>",[_c('ResumeChip',{attrs:{"iconName":"keyboard","skill":"Mac OS"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"desktop","skill":"Windows OS"}})],2),_vm._ssrNode(" <br data-v-536440b8> "),_vm._ssrNode("<h2 data-v-536440b8>","</h2>",[_c('Icon',{attrs:{"name":"code"}}),_vm._ssrNode(" Coding")],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"resumeFlexRow\" data-v-536440b8>","</section>",[_c('ResumeChip',{attrs:{"iconName":"file-code","skill":"HTML 5"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"code","skill":"CSS 3"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"laptop-code","skill":"Javascript ES6"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"cubes","skill":"Visual Studio Code"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"code-branch","skill":"Github"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"people-carry","skill":"NPM"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"cubes","skill":"Vue JS"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"cubes","skill":"React JS"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"cubes","skill":"Nuxt JS"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"fire-alt","skill":"Google Firebase"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"database","skill":"SQL"}})],2),_vm._ssrNode(" <br data-v-536440b8> "),_vm._ssrNode("<h2 data-v-536440b8>","</h2>",[_c('Icon',{attrs:{"name":"swatchbook"}}),_vm._ssrNode(" Design")],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"resumeFlexRow\" data-v-536440b8>","</section>",[_c('ResumeChip',{attrs:{"iconName":"palette","skill":"Procreate"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"search-plus","skill":"Photoshop"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"bezier-curve","skill":"Illustrator"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"edit","skill":"InDesign"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"film","skill":"Premier"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"microphone","skill":"Audition"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"camera-retro","skill":"Photography"}}),_vm._ssrNode(" "),_c('ResumeChip',{attrs:{"iconName":"blender","skill":"Blender"}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"education\" data-v-536440b8>","</section>",[_vm._ssrNode("<h1 data-v-536440b8>Education</h1> "),_c('ResumeBlock',{attrs:{"type":"education","title":"Full Stack Bootcamp","subtitle":"Austin Coding Academy","role":"Certified Full Stack Web Developer","startDate":"MAR 2020","endDate":"SEPT 2019","list":[
          'Completed this biweekly intensive bootcamp course over 7 months during COVID quarantine, I receieved a full stack certification in 2020.',
          'The bootcamp covered HTML, CSS, Javascript, React.js, Github, Node.js, Unit Testing, SQL, and various APIs.'
          ]}}),_vm._ssrNode(" "),_c('ResumeBlock',{attrs:{"type":"education","title":"Media Arts and Science","subtitle":"IUPUI","role":"Various Studies in Computer Science","startDate":"2011","endDate":"2015, 2018","list":[
          'Studied various subject matters from digital media, illustration, to cartooning. Each of these focuses helped develop my abilities as a designer, and as a creative mind despite choosing not to continue pursuing college education.'
          ]}}),_vm._ssrNode(" "),_c('ResumeBlock',{attrs:{"type":"education","title":"Ongoing Research","subtitle":"","role":"Independent Self-Education","startDate":"2010","endDate":"Present","list":[
          'Regularly research topics relevant to my freelance work, including Adobe Suite, new standards in ES6, Javascript, web frameworks, and more to stay relevant in my practice.'
          ]}})],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"personal\" data-v-536440b8>","</section>",[_vm._ssrNode("<h1 data-v-536440b8>Personal Work</h1> "),_c('ResumeBlock',{attrs:{"type":"project","title":"Dungeons of Amara","subtitle":"Kickstarter Book of Art and Poetry","description":"I successfully crowd funded and published a softback art book titled \"Dungeons of Amara\" which is a playable RPG dice game filled with artwork and poetry.","url":"https://www.kickstarter.com/projects/dungeonsofamara/dungeons-of-amara-poems-about-monsters-and-townfol","linkText":"Check It Out!","iconName":"book-reader"}}),_vm._ssrNode(" "),_c('ResumeBlock',{attrs:{"type":"project","title":"Moebius Dungeons","what":"Full Stack Vue JS Web Game","description":"During my time as a student of Austin Coding Academy, I created a full stack web game using Vue.js and Google's Firebase Backend","url":"https://moebiusdungeons.com/","linkText":"Play the Game!","iconName":"gamepad"}})],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/resume.vue?vue&type=template&id=536440b8&scoped=true&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(121);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/resume.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var resumevue_type_script_lang_js_ = ({
  name: 'ResumePage',
  computed: {
    devLevel: function () {
      return external_moment_default()(19930326, "YYYYMMDD").fromNow().slice(0, -9) - 1;
    },

    head() {
      return {
        title: `Resume`,
        meta: [{
          property: "og:url",
          content: `@/assets/imgs/og/resume.jpg`
        }, {
          property: "og:description",
          content: `Sean Yager's resume, featuring his recent projects in art, web development, and freelance branding.`
        }]
      };
    }

  }
});
// CONCATENATED MODULE: ./pages/resume.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_resumevue_type_script_lang_js_ = (resumevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/resume.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(132)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_resumevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "536440b8",
  "7737e8a0"
  
)

/* harmony default export */ var resume = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ResumeBlock: __webpack_require__(144).default,ResumeChip: __webpack_require__(145).default})


/***/ })

};;
//# sourceMappingURL=resume.js.map