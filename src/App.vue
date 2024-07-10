<script setup>
  import Recipes from "./components/Recipes.vue";
  import useFetch from "./composables/useFetch.js"; 
 
  const API_ID = 'd130b616'
  const API_KEY = '476f22e9b60cdf11e2127a545b56d754'

  const {data, isLoading} = useFetch(`https://api.edamam.com/search?q=meal&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`) 
  
</script>

<template>   
  <div class="grid place-items-center px-10 py-12 bg-eggshell">    
  <div class="flex gap-10"> 
    <div v-if="isLoading" class="loader"></div>      
    <Recipes 
      v-else-if="isLoading == false"     
      v-for="item in data"
      :recipe="item"
      />         
  </div> 
  </div>
</template>

<style>
/* HTML: <div class="loader"></div> */
.loader {
  width: 45px;
  aspect-ratio: 1;
  background: 
    linear-gradient(#0000 calc(1*100%/6),#000 0 calc(3*100%/6),#0000 0) left   bottom,
    linear-gradient(#0000 calc(2*100%/6),#000 0 calc(4*100%/6),#0000 0) center bottom,
    linear-gradient(#0000 calc(3*100%/6),#000 0 calc(5*100%/6),#0000 0) right  bottom;
  background-size: 20% 600%;
  background-repeat: no-repeat;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
    100% {background-position: left top,center top,right top }
}
</style>
