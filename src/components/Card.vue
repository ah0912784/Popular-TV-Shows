//Alexander Hansen
<template>
  <div class="card" style="width: 18rem;" id="card">   
  <img :src="imgsrc"  class="card-img-top" :alt=obj.name>
  <div class="card-body">
    <h5 class="card-title"><b>{{ obj.name }}</b></h5>
    <p class="card-text">{{obj.overview}}</p>
    
  </div> 
</div>
</template>
<script>
export default {
    name: 'Card',
    props: {
       obj: Object
    },
    data(){
      return{
      imgsrc: 'https://image.tmdb.org/t/p/w154/'+this.obj.poster_path
    }},
}
</script>
<style scoped>
#card{
margin: 5px;
display: inline-block;
vertical-align: top;
border-block: 2px solid black;
border-right: 1px solid black;
border-left: 1px solid black;
}
p{
  height: 200px;
}
</style>