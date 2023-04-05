<template>
    <div class="flex flex-col md:flex-row grow">
        <div class="w-full">
        <h3>Add New Product</h3>
        </div>
    <div class="grow items-center justify-center p-12 w-full">
    <div class="mx-auto w-full max-w-[550px]">
        <form @submit.prevent >
            <div class="mb-5">
                <label class="mb-3 block text-base font-bold text-[#07074D]" for="category" >
                Category Name
                </label>
            <select required v-model="categoryId"  id="category" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                <option selected v-for="category in categories" :key="category.id" 
                :value="category.id">
                {{ category.categoryName }}
                </option>
            </select>
        </div>
        <div class="mb-5">
            <label for="name" class="mb-3 block text-base  text-[#07074D] font-bold" >
            Name
            </label>
            <input
            id="name"
            v-model="name"
            type="text"
            placeholder="Category Name"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </div>
        <div>
            <label class="block mb-6" for="description">
                            <span class="text-black font-bold">Description</span>
                            <textarea id="description" type="text" v-model="description"  class="bg-white pt-6 text-center placeholder-[black] h-20 block w-full mt-1   shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"  placeholder="Tapez votre text ici..."></textarea>
            </label>
        </div>
        <div class="mb-5">
            <label class="mb-3 block text-base  text-[#07074D] font-bold" for="image">
                Image URL
            </label>
            <input
            id="image"
            v-model="imageUrl"
            type="text"
            placeholder="image  Url"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            /> 
        </div>
        <div class="mb-5">
            <label for="price" class="mb-3 block text-base font-bold text-[#07074D]" >
            Price
            </label>
            <input
            id="price"
            v-model="price"
            type="number"
            placeholder="Category Name"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </div>
        <div>
            <button
            type="submit"  
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            @click="addProduct">
            Submit
            </button>
        </div>
        </form>
    </div>
    </div>
    </div>
    
</template>
<script>
    import axios from 'axios';
    import sweetalert from 'sweetalert';
    export default {
    props:["categories","baseURL"],
    data() {
        return {
        id:null,
        categoryId:null,
        description:null,
        imageUrl:null,
        name:null,
        price:null
        }
    },
    methods: {
        addProduct(){
                const newProduct = {
                    categoryId: this.categoryId,
                    description:this.description,
                    name: this.name,
                    imageURL: this.imageUrl,
                    price: this.price,
                }
                axios ({
                    method:"post",
                    url:`${this.baseURL}/product/add`,
                    data: JSON.stringify(newProduct),
                    headers:{
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With',
                    },
                    credentials:true
                }).then(()=>{
                    sweetalert({
                        text:"Categorie Ajoutée avec success",
                        icon:"success",
                    })
                    setTimeout(()=> {
                        const location = window.location.href = "/admin/product"
                    }, 2000);
                    
                }).catch(err =>{
                    console.log(err);
                })
            },    
        },
    mounted() {
        if (!localStorage.getItem('token')) {
            this.$router.push({name : 'Signin'});
    }
    }
    }
</script>