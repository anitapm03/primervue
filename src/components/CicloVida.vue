<template>
    <div>
        <h1 style="color:red">Hooks</h1>
        <h2 style="color:green">{{saludo}}</h2>
        <button @click="cambiarSaludo()">
            Modificar saludo
        </button>
    </div>
</template>

<script>
    export default {
        name: "CicloVida",
        data(){
            return {
                saludo: "Hoy es martes..."
            }
        },
        methods: {
            //aqui dentro se incluyen los métodos personalizados
            cambiarSaludo() {
                //dentro de los métodos para acceder a las variables de 
                //data debemos utilizar la palabra this
                this.saludo = "Y esta noche es hagwilii... harwolii... ";
            }

        },
        mounted() {
            console.log("component montado");
        },
        unmounted() {
            console.log("component destruido");
        },
        updated() {
            console.log("component modificado");
        },
        created() {
            console.log("component creado");
        }
    }
</script>