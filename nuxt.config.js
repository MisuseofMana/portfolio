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
            { name:"viewport", content:"width=device-width, initial-scale=1, minimum-scale=1" },
        ]
    }
  }