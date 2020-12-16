export default {
    components: true,
    css: [
        '@/assets/styles/flexStyle.css',
        '@/assets/styles/transitions.css',
        '@/assets/styles/scrollBar.css',
        '@/assets/styles/defaultStyle.css', 
        '@/assets/styles/tabletStyle.css',
        '@/assets/styles/desktopStyle.css',
        '@/assets/styles/fontStyles.css',
        '@/assets/styles/fonts.css',
    ],
    build: {
        transpile: [/vue-awesome/],
    },
    plugins: ['@/plugins/vue-awesome.js'],
    head: {
        title: 'The Art Of Sean Yager',
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        ],
        meta: [
            { property:"og:url", content:"@/assets/imgs/og/index.png" },
            { property:"og:type", content:"website" },
            { property:"og:description", content:"Sean Yager's portfolio website, featuring his artwork, coding projects, writing, podcasting, publications, and comics." },

        ]
    },
    target: 'static',
    router: {
        base: '/portfolio/'
    }
  }