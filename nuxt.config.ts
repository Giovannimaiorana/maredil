// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'R-g24sdkdl0O1jM04UX6zpsVwlNywVgwGimwqgJ_Neo',
        },
      ],
    },
  },
})
