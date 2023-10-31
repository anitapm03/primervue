import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import CicloVida from './components/CicloVida.vue';
import DirectivasComponent from './components/DirectivasComponent.vue';
import PropiedadConmutada from './components/PropiedadConmutada.vue';
import NumeroParImpar from './components/NumeroParImpar.vue';
import MetodosFilters from './components/MetodosFilters.vue'

//creamos una constante array para las rutas
const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/cine", component: CineComponent
    },
    {
        path: "/musica", component: MusicaComponent
    },
    {
        path: "/ciclovida", component: CicloVida
    },
    {
        path: "/directivas", component: DirectivasComponent
    },
    {
        path: "/propiedad", component: PropiedadConmutada
    },
    {
        path: "/numero", component: NumeroParImpar
    },
    {
        path: "/filters", component: MetodosFilters
    }
]
//creamos una constante para el historial y el array de rutas
//dicha constante sera la que usemos en el main.js
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
//por ultimo exportamos la constante router
export default router;