<template>
    <div class="flex w-full flex-col min-h-screen pt-8">
        <div class="text-center">
            <h4>Edit Product</h4>
        </div>
        <div>
        </div>
        <form @submit.prevent v-if="product">
        <div class="mb-5">
        <label class="mb-3 block text-base font-bold text-[#07074D]" >
            Name
        </label>
        <input
            v-model="product.name"
            type="text"
            placeholder="product Name"
            required
            class="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        </div>
        <div class="justify-center  items-center flex w-full flex-col">
        <label class="block mb-6">
                        <span class="text-black font-bold">Description</span>
        </label>
        <textarea required type="text" v-model="product.description"  class="bg-white pt-6 text-center placeholder-[black] h-20 block w-[50%] mt-1   shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"  placeholder="Tapez votre text ici..."></textarea>
        </div>
        <div class="mb-5">
        <label required class="mb-3 block text-base font-bold text-[#07074D]">
            Image
        </label>
        <input
            v-model="product.imageURL"
            type="text"
            placeholder="image  Url"
            class="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        /> 
        </div>
        <div class="mb-5">
        <label class="mb-3 block text-base  text-[#07074D] font-bold" >
            Price
        </label>
        <input
            v-model="product.price"
            type="number"
            placeholder="product Name"
            required
            class="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        </div>
        <div>
            <button
            @click="editProduct"
            type="submit"  
            class="w-1/2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
            </button>
        </div>
    </form>
    </div>
</template>

<script>
import axios from 'axios';
import sweetalert from 'sweetalert';
export default {
    name:"EditProduct",
    props:["baseURL","categories","products"],
    data() {
        return {
            product:null,
            id:null,
            headers: { 
                headers : {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With',
                }},
            credentials:{
                credentials:true
            }
        }
    },
    mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(product => product.id == this.id)
    },
    methods: {
        async editProduct(){
        await axios.post(`${this.baseURL}product/update/${this.id}`,
        this.product,this.headers,this.credentials)
        .then(()=>{
        this.$emit('fetchData')
        sweetalert({
            text:"Produit Modifier avec success",
            icon:"success",
        })
        this.$router.push({name: 'AdminProduct'})
        }).catch(err =>{
            console.log(err);
        })
    }
    },
}
</script>

<style>

</style>