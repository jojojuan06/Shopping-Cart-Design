<template>
    <div class="flex w-full flex-col min-h-screen pt-8">
    <div class="text-center">
        <h4>Edit Category</h4>
        {{ id }}
        {{ category }}
    </div>
    <div>
    <form @submit.prevent v-if="category">
        <div class="mb-5">
        <label class="mb-3 block text-base font-medium text-[#07074D]" >
            Category Name
        </label>
        <input
            v-model="category.categoryName"
            type="text"
            placeholder="Category Name"
            required
            class="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        </div>
        <div class="justify-center  items-center flex w-full flex-col">
        <label class="block mb-6">
                        <span class="text-black font-bold">Description</span>
        </label>
        <textarea required type="text" v-model="category.description"  class="bg-white pt-6 text-center placeholder-[black] h-20 block w-[50%] mt-1   shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"  placeholder="Tapez votre text ici..."></textarea>
        </div>
        <div class="mb-5">
        <label required class="mb-3 block text-base font-medium text-[#07074D]">
            Image
        </label>
        <input
            v-model="category.imageUrl"
            type="text"
            placeholder="image  Url"
            class="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        /> 
        </div>
        <div>
            <button
            @click="editCategory"
            type="submit"  
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
            </button>
        </div>
    </form>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import sweetalert from 'sweetalert';
export default {
name:"EditCategory",
props:["baseURL","categories"],
data() {
    return {
        category:null,
        id:null,
        headers: { 
            headers : {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With',
        },
        credentials:{
            credentials:true
        }
    }
    }
},
methods: {
    async editCategory(){
        delete this.category["products"]
        await axios.post(`${this.baseURL}category/update/${this.id}`,
        this.category,this.headers,this.credentials)
        .then(()=>{
        this.$emit('fetchData')
        sweetalert({
            text:"Categorie Modifier avec success",
            icon:"success",
        })
        this.$router.push({name: 'Category'})
        }).catch(err =>{
            console.log(err);
        })
    }
},
mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find(category => category.id == this.id)
},
}
</script>

<style>

</style>