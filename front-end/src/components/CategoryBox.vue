<template>
  <div>
  <div
    class="flex flex-col h-full justify-between  rounded-lg bg-white shadow-lg dark:bg-neutral-700  min-w-[300px] md:min-w-[300px] max-w-[300px]  min-h-[350px] max-h-[350px]">
    <div>
      <img
          class="rounded-t-lg w-full max-h-[200px]"
          :src="category.imageUrl"
          alt="" />
      <div>
        <router-link :to="{name: 'ListProducts', params: {id:category.id}}">
          <h5
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {{ category.categoryName }}
          </h5>
        </router-link>
        <p class="p-1 mb-4 text-base text-neutral-600 dark:text-neutral-200 whitespace-nowrap overflow-hidden text-ellipsis w-full">
          {{ category.description }}
        </p>
      </div>
    </div>
    <div>
      <router-link :to="{name: 'EditCategory', params: {id: category.id}}" class="p-2"
                    v-show="$route.name == 'Category'">
        <button class="bg-blue-500 py-2 px-4 rounded text-white font-bold hover:scale-[1.02] hover:shadow-md hover:shadow-gray-500">Edit</button>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props:["category"],
    methods: {},
}
</script>

<style>
a {
  display: flex!important;
  justify-content: center;
  width: 100%;
}
button {
  width: 100%;
}
</style>