<script setup>
  import useFetch from "./useFetch.js";

  const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos/1")
  

</script>

<template>      
  <div class="grid place-items-center py-12 bg-eggshell">
    <div class="grid gap-5 w-[650px] p-7 rounded-2xl bg-white">
      <img class="w-full" src="./assets/images/image-omelette.jpeg" alt="" />
      <div class="grid gap-6">
        <div class="">
          <p class="text-3xl font-youngserif font-medium mb-4">Simple melette Recipe</p>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div class="pl-5">
          <p class="mb-3 font-youngserif text-base text-darkraspberry font-medium ">
            Preparation time
          </p>
          <ul>
            <li><strong>Total:</strong> Approximately 10 minutes</li>
            <li><strong>Preparation:</strong> 5 minutes</li>
            <li><strong>Cooking:</strong> 5 minutes</li>
          </ul>
        </div>
        <div>
          <p class="mb-3 font-youngserif text-2xl text-darkraspberry font-medium">Ingredients</p>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <div>
          <p class="mb-3 font-youngserif text-2xl text-darkraspberry font-medium">Instructions</p>
          <ol>
            <li>
              <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <strong>Heat the pan: </strong> Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <strong>Cook the omelette:</strong> Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional):</strong> When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Fold and serve:</strong> As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </li>
            <li>
              <strong>Enjoy:</strong> Serve hot, with additional salt and pepper
              if needed.
            </li>
          </ol>
        </div>
        <div>
          <p class="mb-3 font-youngserif text-2xl text-darkraspberry font-medium ">Nutrition</p>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table class="w-full mt-4 border-0">
            <tr class="border border-b-slate-300">
              <td class="py-3 text-slate-600 text-center">Calories</td>
              <td class="text-darkraspberry text-center font-medium py-3">277kcal</td>              
            </tr>
            <tr class="border border-b-slate-300">
              <td class="py-3 text-slate-600 text-center">Carbs</td>
              <td class="text-darkraspberry text-center font-medium py-3">0g</td>
              
            </tr>
            <tr class="border border-b-slate-300">
              <td class="py-3 text-slate-600 text-center">Protein</td>              
              <td class="text-darkraspberry text-center font-medium py-3 ">20g</td>              
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
