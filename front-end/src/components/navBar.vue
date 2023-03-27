<template>
    <div class="flex  justify-center md:justify-between   w-full items-center p-1  bg-[#171c1d]">
      <div class="flex">
        <div class="md:ml-4 text-lg  hidden md:flex md:mr-2">
          <a href="/" class="text-white self-center">Home</a>
        </div>
        <div class="ml-8 text-lg text-gray-700 md:hidden flex items-center">
          <a href="/" class="md:hidden"><font-awesome-icon :icon="['fas', 'home']" class="text-white ml-2 mr-2"/></a>
        </div>
        <!-- Search Bar -->
        <form  action="">
          <div class="relative m-auto text-gray-600 w-full  max-w-[200px] md:max-w-full">
              <input class="mr-2 border-2 border-gray-300 bg-white h-10 md:min-w-[400px] px-2 md:px5  md:pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search">
              <button type="submit" class="absolute hidden md:flex top-[0px]  md:left-[22.1rem] bg-orange-500 w-12 h-full rounded-r-lg">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-black  w-full self-center"/>
              </button>
          </div>
        </form>
        <!--------- -------->
      </div>
      <div tabindex="1" class="flex flex-row-reverse mr-12  md:mr-0 relative  mt-2">
        <div class="h-full self-center hidden md:flex md:pr-2">
          <a href="/cart" class="relative">
            <span class="bg-red-500 absolute bottom-3 right-[0.5px] rounded-[100%] px-[4px] py-[0.5px] text-white text-xs ">{{cartCount}}</span>
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-white ml-2"/>
          </a>
        </div>
        <button @click="navToogle" class="flex md:hidden bg-gray-500  p-2 rounded">
          <font-awesome-icon :icon="['fas', 'bars']" class="text-white"/>
        </button>
        <button @click="navToogle" class="hidden md:flex justify-center">
          <!-- for browse -->
          <h4 class="mr-2 whitespace-nowrap font-bold  text-white" v-if="token">
              Mon compte
          </h4>
          <h4 class="mr-2 whitespace-nowrap font-bold  text-white" v-if="!token">
            <router-link :to="{name:'Signup'}" class="text-white">
              S'inscrire
            </router-link>
          </h4>
          <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-white mr-4 self-center"/>
        </button>
        <div class="nav--button flex flex-col absolute bg-gray-600 md:right-[1rem] p-1  top-8 rounded border-gray-9-0 border-2 opacity-0 transition duration-500">
          <!-- for Account -->
          <ul class="p-1 flex flex-col items-start">
            <li  class=" text-white list-none hover:cursor-pointer">
              <a v-if="token" class="font-bold" href="/wishlist">Wishlist</a>
            </li>
            <li  class=" text-white list-none hover:cursor-pointer">
              <a v-if="token" class="font-bold" href="/admin/product">Product</a>
            </li>
            <li  class=" text-white list-none hover:cursor-pointer">
              <a v-if="token" class="font-bold" href="/admin/category">Categorie</a>
            </li>
            <li  class=" text-white list-none hover:cursor-pointer">
              <a v-if="token" class="font-bold" href="#" @click="signout">
              Disconnect
              <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="ml-2 text-white self-center"/>
              </a>
            </li>
            <li  class=" text-white list-none hover:cursor-pointer">
              <a v-if="token" class="font-bold" href="/admin">Admin</a>
            </li>
            <li  class=" text-white list-none hover:cursor-pointer">
              <a v-if="!token" class="font-bold text-start" href="/signin">Connexion</a>
            </li>
            <li  class=" text-white list-none hover:cursor-pointer whitespace-nowrap">
              <a v-if="!token" class="font-bold" href="/signup">S'inscrire</a>
            </li>
            <li class="flex md:hidden">
              <a href="/cart">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-white"/>
                <span class="ml-2 bg-red-500  rounded-[100%] px-[4px] py-[0.5px] text-white text-xs ">{{ cartCount }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import swal from 'sweetalert';
export default {
name:'navbar',
// badge cart
props:["cartCount"],
data() {
    return {
        selected:false,
        token:null,
    }
},
methods: {
  navToogle(){
    this.selected = !this.selected
    console.log(this.selected);
    const navtoogle = document.querySelector(".nav--button");
    if (this.selected == true) {
      navtoogle.classList.add("nav--list")
    }
    else {
      navtoogle.classList.remove("nav--list")
    }
  },
  signout(){
      localStorage.removeItem('token');
      this.token = null;
      swal({
        text: "Logged you out. Visit again!",
        icon:"success"
      })
      //recupere l'evenement avec emit reset la cart a zero
      this.$emit("resetcartCount");
      //retour a la page d'accueil
      this.$router.push({path:'/'})
  }
},
mounted()  {
    this.token = localStorage.getItem("token");
  }
}
</script>

<style>
.nav--list  {
    opacity: 0.85;
}
li a {
  color: white;
}
hr {
  width: 100%;
  border: 1px black solid;
}
@media screen and(min-width:780px) {
  
}
</style>