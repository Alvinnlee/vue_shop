<template>
    <div>
        profile
        {{$route.query.name}}<br>
        {{$route.query.age}}
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
