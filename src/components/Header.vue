<template>
    <header class="">
        <h1 class="text-dark">{{text}}</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        text: String
    }
}
</script>
<style scoped>
h1{

    margin-top: 12.5px ;
    text-align: center;
    font-size: 50px;
}
header{
    text-align: center;
    height: 75px;
    margin: 5px;
    background: red-900;
}
</style>