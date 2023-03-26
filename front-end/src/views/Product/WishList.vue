<template>
  <div class="flex flex-col justify-start min-h-screen w-full pb-4"> 
        <div>
                <h4 class="pt-3 font-bold text-xl">Your WishList</h4>
        </div>
        <!-- display products -->
        <div class="flex flex-wrap gap-4 justify-center md:m-auto md:max-w-[1440px]">
          <div v-for="product of products" :key="product.id" class="flex">
            <product-box :product="product"></product-box>
          </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductBox from '../../components/ProductBox.vue';
export default {
  components: { ProductBox },
  data() {
    return {
      token:null,
      products:null,
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
  props:["baseURL"],
  methods: {
    fetchWishList() {
      axios.get(`${this.baseURL}wishlist/${this.token}`,this.headers,this.credentials)
        .then((data) => {
          this.products = data.data;
          // log des produits
          console.log(data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  },
  mounted()  {
    this.token = localStorage.getItem("token");
    this.fetchWishList();
  }
}
</script>

<style>

</style>