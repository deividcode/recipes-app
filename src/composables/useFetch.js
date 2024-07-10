import { ref, toRef, toRefs, watchEffect, reactive, onMounted } from "vue";

export default function useFetch(url) {
  const data = ref([])
  const isLoading = ref(true)
  const error = ref(null)    

  const fetchData = async () => {    
    data.value = []
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(url);
      const res = await response.json()         
      data.value = await res.hits?.map(item => ({        
        name: item.recipe.label,
        image: item.recipe.image,
        ingredients: item.recipe.ingredientLines,
        calories: item.recipe.calories,
        totalTime: item.recipe.totalTime,
        totalNutrients: item.recipe.totalNutrients
      }))  
           
    } catch (err) {
      error.value = err
    }finally{
      isLoading.value = false
    }
  };      
  
  onMounted(() => {
    fetchData()
  })
  
  return {data, isLoading, error}
}
