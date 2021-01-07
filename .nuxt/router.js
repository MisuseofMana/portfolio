import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _104ae87e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _e0c448ae = () => interopDefault(import('..\\pages\\resume.vue' /* webpackChunkName: "pages/resume" */))
const _e3a1da2c = () => interopDefault(import('..\\pages\\projects\\_projectTemplate.vue' /* webpackChunkName: "pages/projects/_projectTemplate" */))
const _17926686 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _104ae87e,
    name: "about"
  }, {
    path: "/resume",
    component: _e0c448ae,
    name: "resume"
  }, {
    path: "/projects/:projectTemplate?",
    component: _e3a1da2c,
    name: "projects-projectTemplate"
  }, {
    path: "/",
    component: _17926686,
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
