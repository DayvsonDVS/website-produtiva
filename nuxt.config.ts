// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Website Produtiva'
    }
  },
  css: ['normalize.css', '@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/breakpoints.scss";`
        }
      }
    }
  },
  modules: ['nuxt-svgo'],
  components: [{ path: '@/components', pathPrefix: false }],
  dir: {
    pages: 'components/pages/'
  }
})
