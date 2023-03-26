<template>   
    <div class="min-h-[450px] max-h-[500px] w-full min-w-[300px] max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="p-8 rounded-t-lg min-h-[150px] max-h-[250px] w-full" 
            :src="product.imageURL" alt="product image" />
        </a>
        <div class="px-5 pb-5 h-[200px] flex flex-col justify-between">
            <router-link :to="{name: 'ShowDetails', params: {id: product.id}} " class="cursor-pointer">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.name }}</h5>
            </router-link>
            <p class="h-[50px]  text-ellipsis whitespace-nowrap w-[150px] overflow-hidden">
                {{ product.description }}
            </p>
            <div class="flex items-center justify-between">
                <span class="w-full text-3xl font-bold text-gray-900 dark:text-white text-center">${{ product.price }}</span>
            </div>
            <div>
                <router-link 
                    :to="{name: 'EditProduct', params: {id: product.id}}"
                    class="inline-block cursor-pointer rounded bg-[#0062ec] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light" v-if="$route.name == 'AdminProduct'">
                    <button>
                        Edit
                    </button>
                </router-link >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"productBox",
    props:["product"]
}
</script>

<style>

</style>