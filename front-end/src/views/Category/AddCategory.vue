<template>
  <div class="flex flex-col md:flex-row grow">
    <div class="w-full">
      <h3>Add Category</h3>
    </div>
    <div class="grow items-center justify-center p-12 w-full">
  <div class="mx-auto w-full max-w-[550px]">
    <form @submit.prevent >
      <div class="mb-5">
        <label class="mb-3 block text-base font-medium text-[#07074D]" >
          Category Name
        </label>
        <input
          v-model="categoryName"
          type="text"
          placeholder="Category Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div>
        <label class="block mb-6">
                        <span class="text-black font-bold">Description</span>
                        <textarea type="text" v-model="description"  class="bg-white pt-6 text-center placeholder-[black] h-20 block w-full mt-1   shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"  placeholder="Tapez votre text ici..."></textarea>
        </label>
      </div>
      <div class="mb-5">
        <label class="mb-3 block text-base font-medium text-[#07074D]">
          Image
        </label>
        <input
          v-model="imageUrl"
          type="text"
          placeholder="image  Url"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        /> 
      </div>
      
      <div>
        <button
        type="submit"  
        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        @click="addCategory">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  </div>
  
</template>

<script>
//importe le package axios
import axios from 'axios';
import sweetalert from 'sweetalert';
export default {
  data() {
    return {
      categoryName:"",
      description:"",
      imageUrl:"",
    }
  },
  name:"AddCategory",
  props : ["baseURL", "categories"],
  methods: {
    addCategory() {
      const newCategory = {
        categoryName:this.categoryName,
        descriptio:this.description,
        imageUrl:this.imageUrl
      }
      axios ({
        method:"post",
        url:`${this.baseURL}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods':'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With',
        }, credentials:true
      }).then(()=>{
        sweetalert({
          text:"Categorie Ajoutée avec success",
          icon:"success",
          
        })
      }).catch(err =>{
          console.log(err);
      })
    },
  },
  mounted(){
    //verifier que l'utilisateur est connecter
    if (!localStorage.getItem('token')) {
      this.$router.push({name : 'Signin'});
    }
  }
}
</script>

<style>

</style>