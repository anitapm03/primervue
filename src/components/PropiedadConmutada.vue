<template>
    <div>
        <h1>Propiedades conmutadas</h1>

        <ul>
            <li v-for="game in juegosRojos" :key="game" v-html="game">
                
            </li>
        </ul>

        <button @click="getJuegosAzules()">Juegos Azules</button>
        <div v-html="html"></div>
    </div>
</template>

<script>
    export default {
        name: "PropiedadConnmutada",
        computed: {
            //una propiedad conmutada siempre devuelve valores
            //y no puede recibir parámetros
            juegosRojos(){
                var datos = this.juegos;

                //recorremos cada juego y lo devolvemos de color rojo
                for (var i = 0; i < datos.length; i++){

                    var juego = datos[i];
                    juego = "<span style='color:red' >" + juego + "</span>";
                    datos[i] = juego;

                }

                return datos;
            }
        },
        methods:{
            getJuegosAzules() {
                for (var juego of this.juegos){
                    this.html += "<p style='color:blue'>" + juego + "</p>";
                }
            }
        },
        data() {
            return {
                html: "",
                juegos: [ "Parchís", "The Mind", "Avalon", "Canicas", "Jungle Speed"]
            }
        }
    }
</script>