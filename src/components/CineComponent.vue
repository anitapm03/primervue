<template>
    <div>
        <h1>Cine!</h1>
        <img src="./../assets/images/cine.jpg" />
        
    </div>
</template>

<script>
    //SIEMPRE DEBEMOS EXPORTAR EL NOMBRE QUE DESEEMOS DAR
    //AL COMPONENT EN NUESTRA APP DE VUE
    export default {
        name: "CineComponent"

    }

</script>

<style>
    h1 { color : fuchsia }
    @import './../assets/css/estilos.css';
</style>