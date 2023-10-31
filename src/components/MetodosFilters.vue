<template>
    <div>
        <h1>Metodos filters</h1>

        <ul>
            <li v-for="num in numeros" :key="num">
                <!-- llamamos a filter -->
                {{$filters.getNumeroDoble(num)}}
            </li>
        </ul>

        <ul>
            <li v-for="name in nombres" :key="name">
                {{$filters.mayuscula(name)}}
            </li>
        </ul>


    </div>
</template>

<script>
    export default {
        name: "MetodosFilters",
        data() {
            return {
                numeros: [2,44,35,6,12,77],
                nombres: ["Ana", "Paco", "Carmen", "Daniel", "Cristina"]
            }
        }
    }
</script>