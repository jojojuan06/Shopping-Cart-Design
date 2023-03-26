<template>
<div class="flex w-full justify-start items-center min-h-screen flex-col">
    <router-link :to="{ name:'Category'}">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Admin Category
        </button>
    </router-link>
    <router-link :to="{ name:'AdminProduct'}">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Admin Product
        </button>
    </router-link>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
