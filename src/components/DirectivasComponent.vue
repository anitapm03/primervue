<template>
    <div>
        <h1 style="color:blue">Directivas</h1>

        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>

        <label>Numero: </label>
        <input type="number" v-model="numero"/>

        <h3 v-if="numero > 0" style="color:green">Es positivo</h3>
        <h3 v-else-if="numero == 0" style="color:gray">Cero</h3>
        <h3 v-else style="color:red">Negativo</h3>

        <br/>

        <label>Nombre: </label>
        <input type="text" v-model="nombre"/>

        <br/>

        <label>Edad: </label>
        <input type="number" v-model="edad"/>

        <h3 style="color: red">Nombre: {{nombre}}, Edad: {{edad}}</h3>

        <!--<h1>
             el simbolo $ nos permite acceder a ciertos elementos de
            vue en la zona de template. Por ejemplo podemos acceder
            a todo el contenido de data()
            {{$data}} 
        </h1>-->
    </div>
</template>

<script>
    export default {
        name: "DirectivasComponent",
        data() {
            return {
                series: [ "Futurama", "Juego de tronos", "Friends", "Los Simpsons"],
                numero: 0,
                nombre: "",
                edad: 0
            }
        }
    }
</script>