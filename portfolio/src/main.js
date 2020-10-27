import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon'

import 'vue-awesome/icons/keyboard'
import 'vue-awesome/icons/file-code'
import 'vue-awesome/icons/laptop-code'
import 'vue-awesome/icons/filter'
import 'vue-awesome/icons/cubes'
import 'vue-awesome/icons/code-branch'
import 'vue-awesome/icons/fire-alt'
import 'vue-awesome/icons/database'
import 'vue-awesome/icons/camera'
import 'vue-awesome/icons/bezier-curve'
import 'vue-awesome/icons/edit'
import 'vue-awesome/icons/film'
import 'vue-awesome/icons/microphone'
import 'vue-awesome/icons/code'
import 'vue-awesome/icons/people-carry'

Vue.component('v-icon', Icon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
