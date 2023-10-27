<template>
    <div>
        <h1>Musicaa!</h1>
        <img src="./../assets/images/musica.jpg" />
        
    </div>
</template>

<script>
    //SIEMPRE DEBEMOS EXPORTAR EL NOMBRE QUE DESEEMOS DAR
    //AL COMPONENT EN NUESTRA APP DE VUE
    export default {
        name: "MusicaComponent"
    }

</script>

<style>
    h1 { color : fuchsia }
    img{
    width: "300px";
    height: "300px";
    }
</style>