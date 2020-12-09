export default {
    components: true,
    css: ['@/assets/styles/style.css', '@/assets/styles/transitions.css'],
    build: {
        transpile: [/vue-awesome/],
    },
    plugins: ['@/plugins/vue-awesome.js'],
  }