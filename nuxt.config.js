// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    API_KEY:process.env.API_KEY,
    AUTH_DOMAIN:process.env.AUTH_DOMAIN,
    PROJECT_ID:process.env.PROJECT_ID,
    STORAGE_BUCKET:process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID:process.env.MESSAGING_SENDER_ID,
    APP_ID:process.env.APP_ID,

    public:{
    API_KEY:process.env.API_KEY,
    AUTH_DOMAIN:process.env.AUTH_DOMAIN,
    PROJECT_ID:process.env.PROJECT_ID,
    STORAGE_BUCKET:process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID:process.env.MESSAGING_SENDER_ID,
    APP_ID:process.env.APP_ID,
    }
  },
    css: [
      "~/assets/css/style.css",
      '@fortawesome/fontawesome-svg-core/styles.css'
  
  ],
    buildModules:[
      '@nuxt/postcss8',
    ],
    build: {
      transpile:[
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/pro-solid-svg-icons',
        
      ],
    
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  });
