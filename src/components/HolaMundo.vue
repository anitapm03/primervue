<template>
    <div>
        <h1>Mi primera app VUE!!</h1>
        <img src="./../assets/images/img4.jpg" />
        <h2>
            Su nombre es:
            <span style="color: red">{{nombre}}</span>
        </h2>
        <h2>
            Su numero es:
            <span style="color: red">{{numero}}</span>
        </h2>
    </div>
</template>

<script>
    //SIEMPRE DEBEMOS EXPORTAR EL NOMBRE QUE DESEEMOS DAR
    //AL COMPONENT EN NUESTRA APP DE VUE
    export default {
        name: "HolaMundo",
        data() {
            //aquí dentro debemos declarar nuestras variables
            //no se utilizan palabras especiales para declararlas
            //la declaración de las variables se realiza con return y 
            //un obj JSON que contendrá las variables y sus valores
            return {
                nombre: "Alumno",
                numero: 14,
                miArray:[],
                objeto: {}
            }
        }
    }

</script>

<style>
    h1 { color : fuchsia }
    @import './../assets/css/estilos.css';
</style>