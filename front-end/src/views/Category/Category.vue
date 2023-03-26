<template>
  <div class="flex grow w-full flex-col justify-center mt-4 mb-4">
      <div class="flex justify-center items-center flex-col">
            <div class="w-full">
              <h3 class="font-bold text-xl">Vos Category</h3>
              <router-link :to="{ name:'AddCategory'}" class="w-screen text-end mr-[14rem] pb-2">
                <button class="px-4 py-2 bg-gray-500 rounded text-white w-[150px]">
                  AddCategory
                </button>
              </router-link>
            </div>
      </div>
      <div class="flex  flex-row flex-wrap gap-2 justify-center">
          <div v-for="category of categories" :key="category.id" >
              <CategoryBox :category="category"></CategoryBox>
          </div>
      </div>
  </div>
</template>

<script>
import CategoryBox from '../../components/CategoryBox.vue';
export default {
      name:"Category",
      props:["categories"],
      components: {CategoryBox},
      data() {
          return {
          baseURL : "https://limitless-lake-55070.herokuapp.com"
          }
        },
    }
</script>

<style>
</style>

