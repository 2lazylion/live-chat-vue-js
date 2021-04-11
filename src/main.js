import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// import firebase auth service
import { projectAuth } from './firebase/config'

 let app

 // attend que la connexion avec firebase soit etablit et ensuite mount le app
projectAuth.onAuthStateChanged(() => {
    // va etre lancee la premiere fois que l'usager va se connectee
    if(!app) {
        app = createApp(App).use(router).mount('#app')
    }
}) 

