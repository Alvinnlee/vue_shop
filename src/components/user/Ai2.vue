<template>
    <div>
        <label>
            <input type="text" v-model.number="a">
        </label><br>
        <span :style="active">ai2</span><br>
        <span :style="active1">3333</span><br>

        <tab-bar>
            <div slot="left">左购街</div>
            <div slot="center">购物街</div>
        </tab-bar><br>
        <tr v-for="item in recommends">
            <td>{{ item.name}}</td>
        </tr>
    </div>
</template>

<script>
    import TabBar from  './TabBar'

    export default {
        name: "Ai2",
        props:{
            recommends:{
                type: Array,
                default(){
                    return []
                }
            }
        },
        components:{
            TabBar
        },
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
