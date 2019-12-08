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
        </h3>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{
                userId: 'list'
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
