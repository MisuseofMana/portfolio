export default {
    components: true,
    css: [
        '@/assets/styles/importsAndVariables.css',
        '@/assets/styles/flexStyle.css',
        '@/assets/styles/transitions.css',
        '@/assets/styles/scrollBar.css',
        '@/assets/styles/defaultStyle.css', 
        '@/assets/styles/tabletStyle.css',
        '@/assets/styles/desktopStyle.css',
        '@/assets/styles/fontStyles.css',

    ],
    build: {
        transpile: [/vue-awesome/],
    },
    plugins: ['@/plugins/vue-awesome.js'],
    link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
  }