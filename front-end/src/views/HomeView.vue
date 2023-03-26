<template>
<div class="flex w-full justify-center">
    <div class="items-start pt-8 w-full flex-col">
        <div class="home--img h-[300px]">
            <h3 class="text-center ml-8 bg-white w-[15rem] text-[2rem] rounded">
            start shopping
            </h3>
            <br/>
            <p class="bg-gray-500 w-[70%] h-full md:h-1/3 max-h-64 text-start ml-8 text-white p-1 rounded overflow-hidden md:overflow-visible">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eius sed aspernatur est. Illo iusto recusandae inventore quidem non corrupti aliquid.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eius sed aspernatur est. Illo iusto recusandae inventore quidem non corrupti aliquid.
            </p>
            <br/>
        </div>
        <!-- display categories  -->
        <div class="pt-12 md:pt-2">
        <hr class="bg-gray-400 h-[1px] border-0"/>
            <div>
                <h2 class="font-bold text-gray-500 text-center ml-6 text-2xl pb-2">
                    Top Categories
                </h2>
            </div>
        </div>
        <div class="flex gap-2 md:gap-[5rem] flex-wrap justify-center max-w-[1080px] m-auto pb-2">
            <div v-for="index in this.categorySize" :key="index">
                <category-box :category="categories[index-1]"></category-box>
            </div>
        </div>
        <!-- display top products  -->
        <hr class="bg-gray-500 h-[1px] border-0"/>
        <div class="pt-4">
            <div>
                <h2 class="font-bold text-gray-500 text-center ml-6 text-2xl pb-2">
                    Top Products
                </h2>
            </div>
        </div>
        <div class="flex gap-2 md:gap-[5rem] flex-wrap justify-center max-w-[1080px] m-auto pb-2">
            <div v-for="index in this.productSize" :key="index">
                <product-box :product="products[index-1]"></product-box>
            </div>
        </div>
    </div>
</div>  
</template>

<script>
import CategoryBox from '../components/CategoryBox.vue'
import ProductBox from '../components/ProductBox.vue'
export default {
    name:"HomeView",
    components: {CategoryBox, ProductBox},
    props:["categories","products"],
    data() {
        return {
            categorySize:0,
            productSize:0
        }
    },
    mounted() {
        this.categorySize = Math.min(6, this.categories.length)
        this.productSize = Math.min(8, this.products.length)
    },
}
</script>

<style>
.home--img {
    background:url("../assets/images/add-shopping-cart-to-website.png") ;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
