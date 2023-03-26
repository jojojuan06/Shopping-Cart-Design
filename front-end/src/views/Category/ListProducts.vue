<template>
    <div class="flex-col flex w-full justify-center items-center">
        <div>
            <a @click="$router.back()" class="text-black  text-[2rem] cursor-pointer text-start">&larr;</a>
        </div>
        <div id="msg">
            <h4 class="italic font-bold text-sm pb-2">{{ category.categoryName }}</h4> 
            <h5 class="font-bold  rounded p-1">{{ msg }}</h5>   
        </div>
        <div class="flex gap-4 flex-wrap justify-center">
            <div v-for="product of category.products" :key="product.id" class=" pt-4 pb-2">
                <!-- display product -->
                <ProductBox :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductBox from "../../components/ProductBox.vue"
    export default {
        components: {ProductBox},
        data() {
            return {
                id: null,
                category: {},
                msg: ''
            }
        },
        props: ["categories"],
        mounted() {
            this.id = this.$route.params.id;
            this.category = this.categories.find(category => category.id == this.id)
            const element = document.querySelector("#msg h5")
            if (this.category.products.length == 0) { ;
                element.classList.add("notfound");
                this.msg = "sorry :( products no  found"
            } else if (this.category.products.length == 1) {
                this.msg = "Only 1 product found"
            } else {
                this.msg = this.category.products.length + " products found"
                element.classList.add("found--product");
            }
        }
    }
</script>

<style>
.notfound {
    background-color:#ef4444;
    color: white;
}
.found--product {
    background-color:#22c55e;
    color: white;
}
</style>