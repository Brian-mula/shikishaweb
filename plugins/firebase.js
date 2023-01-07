import { initializeApp } from "firebase/app";


export default defineNuxtPlugin(nuxtApp=>{
    const runtimeConfig = useRuntimeConfig()
    // 
    const firebaseConfig = {

        apiKey: runtimeConfig.API_KEY,
      
        authDomain: runtimeConfig.AUTH_DOMAIN,
      
        projectId: runtimeConfig.PROJECT_ID,
      
        storageBucket: runtimeConfig.STORAGE_BUCKET,
      
        messagingSenderId: runtimeConfig.MESSAGING_SENDER_ID,
      
        appId: runtimeConfig.APP_ID
      
      };

      const app = initializeApp(firebaseConfig);

      console.log(app)
})