<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/musica">Musica</router-link>
            </li>
            <li>
                <router-link to="/cine">Cine</router-link>
            </li>
            <li>
                <router-link to="/ciclovida">Ciclo de vida</router-link>
            </li>
            <li>
                <router-link to="/directivas">Directivas</router-link>
            </li>
            <li>
                <router-link to="/propiedad">Propiedades Conmutadas</router-link>
            </li>
            <li>
                <router-link to="/numero">Par o impar</router-link>
            </li>
            <li>
                <router-link to="/filters">Metodos filters</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }

</script>

<style></style>