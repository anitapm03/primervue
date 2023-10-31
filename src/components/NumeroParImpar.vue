<template>
    <div>
        <h1>NumeroParImpar</h1>

        <label>Numero: </label>
        <input type="number" v-model="numero"/>
        <div v-html="parImpar"></div>

        <br/>

        <label>Numero: </label>
        <input type="number" v-model="numero2"/>
        <button @click="parImparMethod()">Comprobar</button>
        <div v-html="html"></div>
        
        <br/>

        <label>Numero: </label>
        <input type="number" v-model="numero3"/>

        <h3 v-if="numero3 % 2 == 0" style="color:green">Es par</h3>
        <h3 v-else style="color:red">Es impar</h3>

    </div>
</template>

<script>
    export default {
        name: "NumeroParImpar",
        computed: {
            parImpar(){
                var num = this.numero;
                var result = "";
                if (num%2==0){
                    result = "<h1 style='color:green'>par</h1>";
                }else{
                    result = "<h1 style='color:red'>impar</h1>";
                }
                return result;
            }
        },
        methods: {
            parImparMethod(){
                var num = this.numero2;
                
                if (num%2==0){
                    this.html = "<h1 style='color:green'>par</h1>";
                }else {
                    this.html = "<h1 style='color:red'>impar</h1>";
                }

            }
        },
        data() {
            return {
                html: "",
                numero: 0,
                numero2: 0,
                numero3: 0
            }
            
        }
    }
</script>