import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',  
  docs: {
    primaryColor: '#E24F55'
  },

  router: { 
    base: '/githubpages-doc-guidelines/' 
  },
  build: {
    publicPath: '/_nuxt/',
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
})
