import { ref, computed, reactive, watchEffect } from "vue";

export default function useFetch(url) {
  const data = ref(null);
  const isLoading = ref(true);
  const error = ref();

  const getData = async () => {
    data.value = null;
    isLoading.value = true;
    error.value = null;

    //    "https://jsonplaceholder.typicode.com/todos/1"
    try {
      const response = await fetch(url);
      data.value = await response.json()
      isLoading.value = false
      console.log(data.value)      
    } catch (err) {
        error.value = err
    }finally{
      isLoading.value = false
    }
  };

  watchEffect(() => {
    getData()
  })

  return {data, isLoading, error}
}
