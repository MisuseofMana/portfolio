export { default as CardTemplateDesktop } from '../..\\components\\CardTemplateDesktop.vue'
export { default as CardTemplateMobile } from '../..\\components\\CardTemplateMobile.vue'
export { default as DesktopNavBar } from '../..\\components\\DesktopNavBar.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as SocialMedia } from '../..\\components\\SocialMedia.vue'

export const LazyCardTemplateDesktop = import('../..\\components\\CardTemplateDesktop.vue' /* webpackChunkName: "components_CardTemplateDesktop" */).then(c => c.default || c)
export const LazyCardTemplateMobile = import('../..\\components\\CardTemplateMobile.vue' /* webpackChunkName: "components_CardTemplateMobile" */).then(c => c.default || c)
export const LazyDesktopNavBar = import('../..\\components\\DesktopNavBar.vue' /* webpackChunkName: "components_DesktopNavBar" */).then(c => c.default || c)
export const LazyNavBar = import('../..\\components\\NavBar.vue' /* webpackChunkName: "components_NavBar" */).then(c => c.default || c)
export const LazySocialMedia = import('../..\\components\\SocialMedia.vue' /* webpackChunkName: "components_SocialMedia" */).then(c => c.default || c)
