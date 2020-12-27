
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'PEXELRY - PIC IT',
    htmlAttrs: {
      lang: "en",  // it sets the language English
    },
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'PEXELRY - PIC IT' },
      { property: "og:site_name", content: "PEXELRY - PIC IT" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://pexelry.netlify.app",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "PEXELRY - PIC IT",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "PEXELRY - PIC IT",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://images.unsplash.com/photo-1591597787791-4b837b0bfa5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: "@amjohnphilip" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://pexelry.netlify.app",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "PEXELRY - PIC IT",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "PEXELRY - PIC IT"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://images.unsplash.com/photo-1591597787791-4b837b0bfa5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Pexelry.webp' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-scroll-indicator', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [

  ],
  pageTransition: {
    name: 'page',
    mode: 'out-in'

  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    configureWebpack: {
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                return `npm.${packageName.replace('@', '')}`;
              },
            },
          },
        },
      },
    },
    analyze: true,
  }
}
