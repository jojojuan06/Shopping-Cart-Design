<template>
  <div class="flex h-full w-full justify-center items-center flex-col">
        <div>
            <h4> Vos Produits </h4>
            <router-link :to="{name: 'AddProduct'}">
              <button class="bg-blue-500 rounded py-2 px-4 text-black font-bold">Add Product</button>
            </router-link>
        </div>
        <div class="flex flex-wrap gap-2 justify-center items-center mt-4 mb-2">
            <div v-for="product of products" :key="product.id">
                <product-box :product="product"></product-box>
            </div>
        </div>
  </div>
</template>

<script>
import ProductBox from '../../components/ProductBox.vue'
export default {
  components: {  ProductBox },
  props:["products"]
}
</script>

<style>

</style>