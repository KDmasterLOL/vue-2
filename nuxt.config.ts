// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  components: [{
    path: '~/components',
    pathPrefix: false,
  }],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    baseURL: '/vue-2/'
  }
})
