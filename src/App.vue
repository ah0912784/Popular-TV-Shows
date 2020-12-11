//Alexnader Hansen
<template>
  <div id="app" class="">
    <Header v-bind:text=headerString></Header>
   
    <Card v-for="show in shows" v-bind:key="show.id" v-bind:obj="show" ></Card>
    <Leftbar></Leftbar>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Card from './components/Card.vue'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    Card,
    Header
  },
  data() {
    return {
    headerString: "Popular Tv Shows!",
    shows: '',
    limit: 4,
   
    }
  },
 
  mounted() {
   
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=4512e0cae0fc17c86d57be7d9a8cd524&language=en-US&page=1').then((response)=> 
    {
     var arysliced = response.data.results.slice(0,this.limit)
     this.shows = arysliced
    })//axios get end

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
