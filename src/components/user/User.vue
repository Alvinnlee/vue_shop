<template>
    <div>
        <h3>
            用户列表1
<!--            <router-link :to="'/t/'+userId">ssss</router-link>-->
            <router-link to="t">ssss</router-link><br>
            <router-link :to="{path: 'profile', query:{name: '1',age:'2'}}">档案</router-link><br>

            <keep-alive>
                <button @click="a">档案1</button>
            </keep-alive>
            <br>
            <Ai2 :recommends="recommends"/>
        </h3>
    </div>
</template>

<script>
    import Ai2 from './Ai2'

    export default {
        name: "User",
        components:{
            Ai2
        },
        data(){
            return{
                userId: 'list',
                recommends: [{name: 1},{name: 2}]
            }
        },
        methods:{
            a(){
               this.$router.push({
                   path:'/profile',
                   query: {
                       age: 18,
                       name: '好的'
                   }
               })
            }
        },
        activated() {
            console.log('active');
        },
        deactivated() {
            console.log('deactive');
        }
    }
</script>

<style scoped>

</style>
