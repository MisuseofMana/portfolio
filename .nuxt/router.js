import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f513eae = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _16fd865c = () => interopDefault(import('..\\pages\\resume.vue' /* webpackChunkName: "pages/resume" */))
const _1209661d = () => interopDefault(import('..\\pages\\projects\\_projectTemplate.vue' /* webpackChunkName: "pages/projects/_projectTemplate" */))
const _7f091973 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5f513eae,
    name: "about"
  }, {
    path: "/resume",
    component: _16fd865c,
    name: "resume"
  }, {
    path: "/projects/:projectTemplate?",
    component: _1209661d,
    name: "projects-projectTemplate"
  }, {
    path: "/",
    component: _7f091973,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
