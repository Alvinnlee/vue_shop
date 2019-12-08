<template>

    <div>
        99999
        {{userId}}
        {{$route.params.userId}}
    </div>
</template>

<script>
    export default {
        name: "T",
        computed:{
            userId(){
                return this.$route.params.userId
            }
        }
    }
</script>

<style scoped>

</style>
