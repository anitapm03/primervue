<template>
    <div>
        <h1>Home!</h1>
        <img src="./../assets/images/home.webp" />
        
    </div>
</template>

<script>
    //SIEMPRE DEBEMOS EXPORTAR EL NOMBRE QUE DESEEMOS DAR
    //AL COMPONENT EN NUESTRA APP DE VUE
    export default {
        name: "HomeComponent"

    }

</script>

<style>
    h1 { color : fuchsia }
    @import './../assets/css/estilos.css';
</style>