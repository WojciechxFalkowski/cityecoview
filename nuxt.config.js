export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    "base": '/',
    extendRoutes(routes, resolve) {
      routes.push(        {
        name: 'deletion-instructions',
        path: '/data-deletion-instructions',
        component: resolve(__dirname, 'components/DataDeletionInstructions.vue')
      },{
        name: 'private-policy',
        path: '/privacy-policy',
        component: resolve(__dirname, 'components/PrivacyPolicy.vue')
      })
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'city_eco_view',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Razem w trosce o klimat.'},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
      }
    ],
  },
  ignoreOptions: {
    ignorecase: false
  },
  server: {
    host: '0.0.0.0' // default: localhost
  },
  // generate: {
  //   dir: 'nuxt-dist',
  //   subFolders: false
  // },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: "@/assets/custom-bootstrap", lang: "scss"},
    '@assets/scss/config.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // Next Image module https://image.nuxtjs.org/components/nuxt-img
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/strapi',
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: false,
        },
        // locales: ['en', 'es', 'pl'],
        locales: [
          {
            code: 'en',
            file: 'en-US.js'
          },
          {
            code: 'pl',
            file: 'pl-PL.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'pl',
        vueI18n: {
          fallbackLocale: 'en',
        }
      }
    ]
  ],

  strapi: {
    entities: ['tests'],
    url: 'https://cityecoview-api.herokuapp.com/'
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //publicPath: "nuxt-folder"
  }
}
