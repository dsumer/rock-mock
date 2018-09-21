<template>
    <div id="app">
        <b>{{ msg }}</b>
        <br/>
        <input type="text" v-model="msg" />
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'it\'s the solid rock for providing a mock.'
            }
        }
    }
</script>

<style lang="css">
    #app {
        color: #56b983;
    }
    input {
        min-width: 300px;
    }
</style>