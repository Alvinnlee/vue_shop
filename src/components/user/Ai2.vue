<template>
    <div>
        <input type="text" v-model.number="a"><br>
        <span :style="active">ai2</span><br>
        <span :style="active1">3333</span>
    </div>
</template>

<script>
    export default {
        name: "Ai2",
        data(){
            return{
                a: 6
            }
        },
        computed:{
            active(){
                return {color: 'red', background : '#42b983',fontSize: '37px'}
            },
            active1(){
                return   Number(this.a) === 6 ? { color: 'red' } : { color: 'yellow' }
            }
        }
    }
</script>

<style scoped>

    a{
        font-size: 17px;
        background: #42b983;
    }
</style>
