<script setup>
const props = defineProps({
  recipe: {
    type: Object,   
    default: [],
    required: true,
  },
});

function segToMinutes(value){
  return value/60
}
console.log(props.recipe)
</script>

<template>  
  <div class="grid gap-5 content-start p-7 rounded-2xl bg-white">
    <img class="w-full max-h-[250px] rounded-2xl" :src="recipe.image" alt="" />    
    <div class="grid gap-6">
      <div class="">
        <p class="text-2xl font-youngserif font-medium mb-4">
          {{ recipe.name }}
        </p>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with
          your choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div class="pl-5">
        <p
          class="mb-3 font-youngserif text-base text-darkraspberry font-medium"
        >
          Preparation time
        </p>
        <ul>
          <li><strong>Total:</strong> Approximately {{ recipe.totalTime != 0 ? recipe.totalTime : "10" }} minutes</li>            
        </ul>
      </div>
      <div>
        <p
          class="mb-3 font-youngserif text-2xl text-darkraspberry font-medium"
        >
          Ingredients
        </p>

        <ul>
          <li v-for="ingredient in recipe?.ingredients">
            {{ ingredient }}
          </li>                      
        </ul>
        
      </div>        
      <div>
        <p
          class="mb-3 font-youngserif text-2xl text-darkraspberry font-medium"
        >
          Nutrition
        </p>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table class="w-full mt-4 border-0">
          <tr class="border border-b-slate-300">
            <td class="py-3 text-slate-600 text-center"> Calories </td>
            <td class="text-darkraspberry text-center font-medium py-3">
              {{ recipe.calories.toFixed(2) }} kcal
            </td>
          </tr> 
          <template v-for="nutrient in recipe.totalNutrients">
            <tr v-if="nutrient.label === 'Fat' || nutrient.label === 'Carbs' || nutrient.label === 'Protein'" class="border border-b-slate-300">
              <td class="py-3 text-slate-600 text-center">{{ nutrient.label }}</td>
              <td class="text-darkraspberry text-center font-medium py-3">
                {{ nutrient.quantity.toFixed(2) }} {{ nutrient.unit }}               </td>
            </tr>            
          </template>
        </table>
      </div>
    </div>  
  </div> 
</template>

<style></style>
