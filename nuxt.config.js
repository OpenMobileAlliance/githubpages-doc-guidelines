import theme from '@nuxt/content-theme-docs'

export default theme({
  ssr: false,
  target: 'static',
  docs: {
    primaryColor: '#E24F55'
  },
  router: { 
    base: '/githubpages-doc-guidelines/' 
  },
  plugins: [
    '~~/plugins/gtag',
  ],
})
