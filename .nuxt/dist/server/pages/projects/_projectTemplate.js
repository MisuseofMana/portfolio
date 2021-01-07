exports.ids = [3];
exports.modules = {

<<<<<<< HEAD
/***/ 118:
=======
/***/ 122:
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const comics = {
  pageName: 'Comics',
  description: [`I make comics in my spare time about fantasy, adventure, and friendship. Click a comic to read more.`],
  links: [{
    title: "Misuse of Mana",
    category: "Comic",
    description: ['An ancient webcomic from long ago, discontinued for now, but boasts a world full of magic, friendship, and world threatening forces.'],
    cardAlt: "Comic Cover for Misuse of Mana, a cartoon drawing of a swordsman, mage, and varlet fighting a horde of goblins, they stand atop a pile of defeated goblins.",
    background: "mofmSplash",
    smallBackground: 'smallMofmSplash',
    link: "https://tapas.io/episode/793285",
    action: "Read"
  }, {
    title: "Ire",
    category: "Comic",
    description: ['A short comic illustrating a poem about overcoming ones own inner conflict.'],
    cardalt: "Comic cover for Ire, a black background with a grey crystal stone floating above the word Ire.",
    background: "ireSplash",
    smallBackground: 'smallIreSplash',
    link: "https://gum.co/gXbKmf",
    action: "Read"
  }, {
    title: "Psychic x2 Cowboy",
    category: "Comic",
    description: ['A tale about a double psychic cowboy.', 'Chapter 1 Arriving Mid 2021'],
    cardAlt: "Psychic Psychic Cowboy Comic Cover, depicts a desert scene, the sun is rising, the sunbeams are distorted and giving off rainbow colors. Cacti litter the scene and a bird scavenges the bones of a dead animal.",
    background: "ppcSplash",
    smallBackground: 'smallPpcSplash',
    action: "Read"
  }]
};
const books = {
  pageName: 'Books',
  description: [`I've dabbled in self publishing and produced two version of the book below named "Dungeons of Amara.", "Both versions were produced through successful Kickstarter campaigns.`],
  links: [{
    title: "Dungeons Of Amara",
    category: "Publication",
    description: ['A bardic book of poetry, depicting baddies, merchants, and more; all found in dark dungeons, deep caves, and bustling towns.'],
    cardAlt: 'Cover art for a book called "Dungeons of Amara". Depicts a swordsman, a mage, and a varlet heading down into a dark dungeon.',
    background: "doaSplash",
    smallBackground: 'smallDoaSplash',
    link: "https://gum.co/CsdPh",
    action: "Preview"
  }]
};
const coding = {
  pageName: 'Coding',
  description: [`I'm a web developer with a focus on front end UI/UX. I also am trained in SQL and Google Firebase.`, `Click on the Github image below to check out my codebases.`],
  links: [{
    title: "My GitHub",
    category: "Coding",
    description: [`My hobby GitHub, accessible to the public for forking, collaborating, and making connections.`],
    cardAlt: "An image depicting code for a web browser rpg game and the github logo, Octocat, a half octopus, half cat creature.",
    background: "gitSplash",
    smallBackground: 'smallGitSplash',
    link: "https://github.com/MisuseofMana",
    action: "Review"
  }, {
    title: "Crickburrow Project",
    category: "Coding",
    description: [`Coded in Vue.js, this is an ongoing art/coding expirement meant to develop my front end skills.`],
    cardAlt: "A typewritten memo discussing the Crickburrow foundation, appears to be a confidental document.",
    background: "crickSplash",
    smallBackground: 'smallCrickSplash',
    link: "http://www.crickburrow.com/",
    action: "Solve the"
  }, {
    title: "Moebius Dungeons",
    category: "Coding",
    description: [`An RPG roguelike dungeon crawler game coded in Vue.js using Vuex to manage character data and Firebase as a back end.`],
    cardAlt: "Logo for Moebius Dungeons the game, a ghostly sword set on a vibrant neon pink background.",
    background: "modunSplash",
    smallBackground: 'smallModunSplash',
    link: "https://moebiusdungeons.com/",
    action: "Play"
  }, {
    title: "The Strategies",
    category: "Website",
    description: [`An informational website for an Indiana rehab client.`],
    cardAlt: "The Strategies Logo, a gold circle with 8 evenly spaced gold dots around it on a blue background.",
    background: "strategiesSplash",
    smallBackground: 'smallStrategiesSplash',
    link: "http://www.thestrategies.net",
    action: "Visit"
  }, {
    title: "D&D Char/Item Generator",
    description: [`A work in progress, creating a D&D inspired random item generator with my friend David.`],
    cardAlt: "Digitaly drawn cartoony drawing of a swordsman chopping off a goblins head while a mage woman kicks another in the face, and an elven archer shoots another with a bow.",
    background: "tbaSplash",
    smallBackground: 'smallTbaSplash'
  }]
};
const podcasts = {
  pageName: 'Podcasts',
  description: [`Among all my other trades, I'm a half-hearted audiophile, there's only so much time in a day for me to create and produce high quality content, so this is my throwaway hobby and collaborative musing time with my friends, family, and podcasting pals.`, `My cohost on "Welcome to Amara" Andy, along with our audio editor <a href="https://www.fiverr.com/shifted_audio">Pedro</a> aid me in bringing to life the world of Amara. In contrast, I make garbage musings under the guise of "This is Nothing".`],
  links: [{
    title: "Welcome To Amara",
    category: "Podcast",
    description: ["A fully produced podcast of a play by post Dungeon World campaign showcasing a fantasy realm with carefully crafted lore to uncover."],
    cardAlt: "Logo for the Podcast Welcome to Amara, depicts an illustration of a white walled city, surrounded by a dense forest. Atop a tall tower is a floating flame.",
    background: "wtaSplash",
    smallBackground: 'smallWtaSplash',
    link: "https://www.welcometoamara.com/",
    action: "Listen to"
  }, {
    title: "This Is Nothing",
    category: "Podcast",
    description: [`Don't worry about this. It's nothing. It's nonsense.`, `It's uncategorizable.`],
    cardAlt: 'Logo for the Soundcloud Podcast, depicts a textured image resembling dark blue fur, the words "This is Nothing" are seen above the fur.',
    background: "nothingSplash",
    smallBackground: 'smallNothingSplash',
    link: "https://soundcloud.com/shibbone",
    action: "Listen to"
  }]
};
const photography = {
  pageName: 'Photography',
  description: [`Back in the early 2000's I bought a Cannon Rebel T3 camera and it quickly became a good friend of mine. I twist and alter my mundane life into a catalogue of still frames that tell a story beyond the captured moment. Look carefully, you might find more than you expect.`],
  links: [{
    title: "RickCrickCrick",
    category: "Photography",
    description: [`A peek into another realm, where life is a film of epic proportions and perilous adventure.`, `Are you paying attention?`],
    cardAlt: "An image that appears corrupted, atop the fragmented image are strange symbols and a drawing of a cricket surrounded by stylized wide open eyes.",
    background: "rccSplash",
    smallBackground: 'smallRccSplash',
    link: "https://rickcrickcrick.tumblr.com",
    action: "Visit"
  }]
};
/* harmony default export */ __webpack_exports__["a"] = ({
  comics,
  books,
  coding,
  podcasts,
  photography
});

/***/ }),

<<<<<<< HEAD
/***/ 123:
=======
/***/ 127:
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
<<<<<<< HEAD
var content = __webpack_require__(135);
=======
var content = __webpack_require__(139);
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
<<<<<<< HEAD
  add("63456900", content, true, context)
=======
  add("aa2f21a8", content, true, context)
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
};

/***/ }),

<<<<<<< HEAD
/***/ 134:
=======
/***/ 138:
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_7695fd5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_7695fd5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_7695fd5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_7695fd5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_7695fd5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
=======
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_666d1ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_666d1ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_666d1ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_666d1ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_projectTemplate_vue_vue_type_style_index_0_id_666d1ca4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171


/***/ }),

<<<<<<< HEAD
/***/ 135:
=======
/***/ 139:
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
<<<<<<< HEAD
exports.push([module.i, ".container[data-v-7695fd5c]{margin:0 0 10px;width:100vw}.cardBorder[data-v-7695fd5c]{margin-bottom:10px}.cardBorder a[data-v-7695fd5c]{text-align:center}.projectImage[data-v-7695fd5c]{display:block;margin:10px}.linkButton[data-v-7695fd5c],.projectImage img[data-v-7695fd5c]{margin:0 auto}.linkButton[data-v-7695fd5c]{padding:10px;background:var(--primary-color);border-radius:10px;color:#eee}.linkButton h2[data-v-7695fd5c]{color:#eee}.linkButton[data-v-7695fd5c]:hover{background:var(--primary-color)}.linkButton:hover>h2[data-v-7695fd5c]{color:#eee}.imageSize[data-v-7695fd5c]{border-radius:20px;width:100%}.description p[data-v-7695fd5c]{color:#fff}@media (min-width:768px){.cardBorder[data-v-7695fd5c]{margin-bottom:10px}.imageSize[data-v-7695fd5c]{border-radius:20px;margin:0 auto;width:20px}.projectWrapper[data-v-7695fd5c]{width:300px;height:475px;border-radius:20px;display:grid;grid-template-columns:1fr 3fr 1fr;grid-template-rows:1fr 3fr 1fr;background-position:50%;background-size:cover;box-shadow:3px 3px 3px 1px #ccc;margin:30px 15px;transition:box-shadow .3s}.projectWrapper[data-v-7695fd5c]:hover{box-shadow:5px 5px 5px 1px #aaa;transition:box-shadow .3s}.projectOverlay[data-v-7695fd5c]{grid-column:1/4;grid-row:1/4;border-radius:20px;background:rgba(0,116,124,.9);color:#fff;opacity:0}.projectOverlay[data-v-7695fd5c],.projectWrapper:hover>.projectOverlay[data-v-7695fd5c]{align-items:center;justify-content:center;flex-direction:column;padding:20px;transition:all .3s}.projectWrapper:hover>.projectOverlay[data-v-7695fd5c]{display:flex;opacity:1}.projectOverlay h1[data-v-7695fd5c]{color:#fff;margin:0;text-align:center}.description[data-v-7695fd5c]{grid-row:3/4;grid-column:1/4}.notAllowed[data-v-7695fd5c]{cursor:not-allowed}.allowed[data-v-7695fd5c]{cursor:pointer}.link[data-v-7695fd5c]{font-family:var(--plain-font);margin-top:20px;display:flex;justify-content:center;align-items:center;width:70%;text-decoration:none;height:40px;border-radius:10px;background:#fff;color:#000;text-align:center}}@media (min-width:1024px){.projectWrapper[data-v-7695fd5c]{width:325px;height:500px}.cardBorder[data-v-7695fd5c]{margin-bottom:20px}}", ""]);
=======
exports.push([module.i, ".container[data-v-666d1ca4]{margin:0 0 10px;width:100vw}.cardBorder[data-v-666d1ca4]{margin-bottom:10px}.cardBorder a[data-v-666d1ca4]{text-align:center}.projectImage[data-v-666d1ca4]{display:block;margin:10px}.linkButton[data-v-666d1ca4],.projectImage img[data-v-666d1ca4]{margin:0 auto}.linkButton[data-v-666d1ca4]{padding:10px;background:var(--primary-color);border-radius:10px;color:#eee}.linkButton h2[data-v-666d1ca4]{color:#eee}.linkButton[data-v-666d1ca4]:hover{background:var(--primary-color)}.linkButton:hover>h2[data-v-666d1ca4]{color:#eee}.imageSize[data-v-666d1ca4]{border-radius:20px;width:100%}.description p[data-v-666d1ca4]{color:#fff}@media (min-width:768px){.cardBorder[data-v-666d1ca4]{margin-bottom:10px}.imageSize[data-v-666d1ca4]{border-radius:20px;margin:0 auto;width:20px}.projectWrapper[data-v-666d1ca4]{width:300px;height:475px;border-radius:20px;display:grid;grid-template-columns:1fr 3fr 1fr;grid-template-rows:1fr 3fr 1fr;background-position:50%;background-size:cover;box-shadow:3px 3px 3px 1px #ccc;margin:30px 15px;transition:box-shadow .3s}.projectWrapper[data-v-666d1ca4]:hover{box-shadow:5px 5px 5px 1px #aaa;transition:box-shadow .3s}.projectOverlay[data-v-666d1ca4]{grid-column:1/4;grid-row:1/4;border-radius:20px;background:rgba(0,116,124,.9);color:#fff;opacity:0}.projectOverlay[data-v-666d1ca4],.projectWrapper:hover>.projectOverlay[data-v-666d1ca4]{align-items:center;justify-content:center;flex-direction:column;padding:20px;transition:all .3s}.projectWrapper:hover>.projectOverlay[data-v-666d1ca4]{display:flex;opacity:1}.projectOverlay h1[data-v-666d1ca4]{color:#fff;margin:0;text-align:center}.description[data-v-666d1ca4]{grid-row:3/4;grid-column:1/4}.notAllowed[data-v-666d1ca4]{cursor:not-allowed}.allowed[data-v-666d1ca4]{cursor:pointer}.link[data-v-666d1ca4]{font-family:var(--plain-font);margin-top:20px;display:flex;justify-content:center;align-items:center;width:70%;text-decoration:none;height:40px;border-radius:10px;background:#fff;color:#000;text-align:center}}@media (min-width:1024px){.projectWrapper[data-v-666d1ca4]{width:325px;height:500px}.cardBorder[data-v-666d1ca4]{margin-bottom:20px}}", ""]);
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
// Exports
module.exports = exports;


/***/ }),

<<<<<<< HEAD
/***/ 146:
=======
/***/ 150:
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/projects/_projectTemplate.vue?vue&type=template&id=7695fd5c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<section class=\"hero\" data-v-7695fd5c><section class=\"heroPadding\" data-v-7695fd5c><h1 class=\"pageTitle\" data-v-7695fd5c>"+_vm._ssrEscape(_vm._s(_vm.content.pageName))+"</h1> "+(_vm._ssrList((_vm.content.description),function(desc,index){return ("<section class=\"pageDescription\" data-v-7695fd5c><p data-v-7695fd5c>"+(_vm._s(desc))+"</p></section>")}))+"</section></section> "+(_vm._ssrList((this.content.links),function(item,index){return ("<section class=\"cardBorder flexColumnCenter hero ifMobile\" data-v-7695fd5c><section class=\"heroPadding\" data-v-7695fd5c><h2 class=\"projectTitle\" data-v-7695fd5c>"+_vm._ssrEscape(_vm._s(item.title))+"</h2> "+(_vm._ssrList((item.description),function(sentence,index){return ("<p class=\"projectDescription\" data-v-7695fd5c>"+_vm._ssrEscape(_vm._s(sentence))+"</p>")}))+" <a"+(_vm._ssrAttr("href",item.link))+" target=\"_blank\" class=\"projectImage\" data-v-7695fd5c><img"+(_vm._ssrAttr("src",__webpack_require__(23)("./" + (item.background) + ".jpg")))+(_vm._ssrAttr("alt",item.cardalt))+" class=\"imageSize\" data-v-7695fd5c></a> "+((item.link)?("<a"+(_vm._ssrAttr("href",item.link))+" target=\"_blank\" data-v-7695fd5c><section class=\"linkButton\" data-v-7695fd5c><h2 data-v-7695fd5c>"+_vm._ssrEscape("\n                           "+_vm._s(item.action)+" "+_vm._s(item.title)+"\n                        ")+"</h2></section></a>"):"<!---->")+"</section></section>")}))+" <section class=\"cardBorder ifDesktop hero\" data-v-7695fd5c><section class=\"flexRowWrap\" data-v-7695fd5c>"+(_vm._ssrList((this.content.links),function(project,index){return ("<section class=\"projectWrapper\""+(_vm._ssrStyle(null,{backgroundImage: ("url(" + (__webpack_require__(23)("./" + (project.background) + ".jpg")) + ")")}, null))+" data-v-7695fd5c><section class=\"projectOverlay flexColumn\" data-v-7695fd5c><h1 data-v-7695fd5c>"+_vm._ssrEscape(_vm._s(project.title))+"</h1> <section class=\"description\" data-v-7695fd5c>"+(_vm._ssrList((project.description),function(sentences,index){return ("<p data-v-7695fd5c>"+_vm._ssrEscape(_vm._s(sentences))+"</p>")}))+"</section> "+((project.link)?("<a"+(_vm._ssrAttr("href",project.link))+" target=\"_blank\" class=\"link\" data-v-7695fd5c>See More</a>"):"<!---->")+"</section></section>")}))+"</section></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/projects/_projectTemplate.vue?vue&type=template&id=7695fd5c&scoped=true&

// EXTERNAL MODULE: ./plugins/links.js
var links = __webpack_require__(118);
=======
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/projects/_projectTemplate.vue?vue&type=template&id=666d1ca4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<section class=\"hero\" data-v-666d1ca4><section class=\"heroPadding\" data-v-666d1ca4><h1 class=\"pageTitle\" data-v-666d1ca4>"+_vm._ssrEscape(_vm._s(_vm.content.pageName))+"</h1> "+(_vm._ssrList((_vm.content.description),function(desc,index){return ("<section class=\"pageDescription\" data-v-666d1ca4><p data-v-666d1ca4>"+(_vm._s(desc))+"</p></section>")}))+"</section></section> "+(_vm._ssrList((this.content.links),function(item,index){return ("<section class=\"cardBorder flexColumnCenter hero ifMobile\" data-v-666d1ca4><section class=\"heroPadding\" data-v-666d1ca4><h2 class=\"projectTitle\" data-v-666d1ca4>"+_vm._ssrEscape(_vm._s(item.title))+"</h2> "+(_vm._ssrList((item.description),function(sentence,index){return ("<p class=\"projectDescription\" data-v-666d1ca4>"+_vm._ssrEscape(_vm._s(sentence))+"</p>")}))+" <a"+(_vm._ssrAttr("href",item.link))+" target=\"_blank\" class=\"projectImage\" data-v-666d1ca4><img"+(_vm._ssrAttr("src",__webpack_require__(28)("./" + (item.background) + ".png")))+(_vm._ssrAttr("alt",item.cardalt))+" class=\"imageSize\" data-v-666d1ca4></a> "+((item.link)?("<a"+(_vm._ssrAttr("href",item.link))+" target=\"_blank\" data-v-666d1ca4><section class=\"linkButton\" data-v-666d1ca4><h2 data-v-666d1ca4>"+_vm._ssrEscape("\n                           "+_vm._s(item.action)+" "+_vm._s(item.title)+"\n                        ")+"</h2></section></a>"):"<!---->")+"</section></section>")}))+" <section class=\"cardBorder ifDesktop hero\" data-v-666d1ca4><section class=\"flexRowWrap\" data-v-666d1ca4>"+(_vm._ssrList((this.content.links),function(project,index){return ("<section class=\"projectWrapper\""+(_vm._ssrStyle(null,{backgroundImage: ("url(" + (__webpack_require__(28)("./" + (project.background) + ".png")) + ")")}, null))+" data-v-666d1ca4><section class=\"projectOverlay flexColumn\" data-v-666d1ca4><h1 data-v-666d1ca4>"+_vm._ssrEscape(_vm._s(project.title))+"</h1> <section class=\"description\" data-v-666d1ca4>"+(_vm._ssrList((project.description),function(sentences,index){return ("<p data-v-666d1ca4>"+_vm._ssrEscape(_vm._s(sentences))+"</p>")}))+"</section> "+((project.link)?("<a"+(_vm._ssrAttr("href",project.link))+" target=\"_blank\" class=\"link\" data-v-666d1ca4>See More</a>"):"<!---->")+"</section></section>")}))+"</section></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/projects/_projectTemplate.vue?vue&type=template&id=666d1ca4&scoped=true&

// EXTERNAL MODULE: ./plugins/links.js
var links = __webpack_require__(122);
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/projects/_projectTemplate.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _projectTemplatevue_type_script_lang_js_ = ({
  async asyncData({
    params
  }) {
    const slug = params.projectTemplate;
    return {
      slug
    };
  },

  methods: {
    checkLink(exists) {
      if (exists) {
        return true;
      } else {
        return false;
      }
    }

  },
  computed: {
    content: function () {
      return links["a" /* default */][this.slug];
    }
  },

  head() {
    return {
      title: `${this.slug.toUpperCase()}`,
      meta: [{
        property: "og:url",
<<<<<<< HEAD
        content: `@/assets/imgs/og/${this.slug}.jpg`
=======
        content: `@/assets/imgs/og/${this.slug}.png`
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
      }, {
        property: "og:description",
        content: `Sean Yager's ${this.slug} page. Visit to learn more.`
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/projects/_projectTemplate.vue?vue&type=script&lang=js&
 /* harmony default export */ var projects_projectTemplatevue_type_script_lang_js_ = (_projectTemplatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/projects/_projectTemplate.vue



function injectStyles (context) {
  
<<<<<<< HEAD
  var style0 = __webpack_require__(134)
=======
  var style0 = __webpack_require__(138)
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  projects_projectTemplatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
<<<<<<< HEAD
  "7695fd5c",
  "1bc77af3"
=======
  "666d1ca4",
  "d02a4e5c"
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
  
)

/* harmony default export */ var _projectTemplate = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_projectTemplate.js.map