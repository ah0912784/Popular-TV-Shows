//Alexander Hansen
<template>
    <div class="card" style="width: 18rem;">
  <img :src="imgsrc"  class="card-img-top" alt:{{obj.name}}>
  <div class="card-body">
    <h5 class="card-title">{{ obj.title }}</h5>
    <p class="card-text">{{obj.overview}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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