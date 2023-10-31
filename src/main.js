import { createApp } from 'vue'
import App from './App.vue'
//importamos la constante router de router.js
import router from './Router';

//debemos separar create(App) en una variable
var app = createApp(App)

app.config.globalProperties.$filters = {
    //aqui tendremoslos métods globales de nuestra app
    mayuscula(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble(numero){
        return numero * 2;
    }
}

app.use(router).mount('#app')
