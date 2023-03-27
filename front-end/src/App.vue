
<template>
  <header class="flex w-full">
      <nav-bar  :cartCount="cartCount" @resetcartCount="resetcartCount"></nav-bar>
  </header>
  <main class="flex flex-col h-full grow">
      <div class="flex min-h-screen  items-center ">
          <router-view v-if="categories && products" class="flex" 
          :baseURL="baseURL" 
          :categories="categories" 
          :products="products"
          @fetchData = "fetchData">
          </router-view>
      </div>
  </main>
  <footer-vue></footer-vue>
</template>

<script>
import FooterVue from './components/FooterVue.vue';
import NavBar from './components/navBar.vue';
import axios from 'axios';

  export default {
    name:"App",
    components: {
      FooterVue,
        NavBar
    },
    data() {
      return {
        baseURL:'https://limitless-lake-55070.herokuapp.com/',
        products:null,
        categories:null,
        cartCount:0,
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
    methods: {
      async fetchData(){
        //get all categories
        await axios.get(this.baseURL+ "category/")
        .then(res => {
          this.categories = res.data
        })
        .catch((err) => console.log('err',err));
        //get all products
        await axios.get(this.baseURL+ "product/")
        .then(res => {
          this.products = res.data
        })
        .catch((err) => console.log('err',err));
        // fetch data cart item if token is present logged in
        if (this.token) {
          axios.get(`${this.baseURL}cart/?token=${this.token}`,this.headers,this.credentials)
            .then((res) =>{
                const result = res.data;
                //recupere le nombre d'items
                this.cartCount = result.cartItems.length;
            }).catch((err) => console.log("err",err));
        }
      },
      resetcartCount(){
        this.cartCount = 0;
      }
    },
    mounted() {
      this.token = localStorage.getItem("token");
      this.fetchData();
    },
  }
  </script>


<style>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color:black;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
#app {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  }
* { 
  box-sizing: border-box;
  padding: 0;
}
body {
  min-height: 100vh;
  background-color: #d9d9d9;
}
html, body {
  height: 100%;
  padding: 0; 
  margin: 0;
}

a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>
