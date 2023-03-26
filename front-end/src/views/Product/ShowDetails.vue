<template>
    <div class="flex-col flex w-full justify-center items-center">
        <div class="mr-auto ml-[8.5rem] md:ml-[33rem]">
            <a @click="$router.back()" class="text-black  text-[2rem] cursor-pointer text-start">&larr;</a>
        </div>
        <div class="bg-gray-400 rounded p-4 w-full  md:max-w-[850px]">
            <div class="justify-center flex flex-col md:flex-row items-center">
                <!-- display image -->
                <img :src="product.imageURL" alt="" class="rounded w-full md:w-[400px]">
                <!-- display product details -->
                <div class="pl-4 w-full">
                    <h4 class="text-black">{{ product.name }}</h4>
                    <h4 class="text-black italic text-sm">{{ category.categoryName }}</h4>
                    <h6 class="text-black font-bold">
                            $ {{ product.price }}
                    </h6>
                    <p class="text-black"> {{ product.description }}</p>
                    <br>
                    <br>
                    <div class="flex justify-between">
                        <div class="flex border-[2px] border-white rounded">
                            <div class="bg-gray-400 p-1">
                                <span class="text-black">
                                    quantity
                                </span>
                            </div>
                            <input type="number" class="w-8 rounded-r" v-model="quantity">
                        </div>
                        <div>
                            <button  @click="addToCart" class="transition  duration-[400ms] bg-orange-400 hover:scale-[1.05] hover:shadow-md hover:shadow-white  p-2 rounded  text-black font-bold">
                            add to cart
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="flex flex-col justify-end w-full items-end">
                <div class="flex flex-col w-1/2">
                    <h5 class="w-full font-bold">Features</h5>
                    <ul class="md:list-disc text-black">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corrupti?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corrupti?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corrupti?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corrupti?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, corrupti?</li>
                    </ul>
                </div>
                <div class="flex justify-center pt-2">
                    <button @click="addToWishList"  class="transition  duration-[400ms] bg-gray-500 hover:scale-[1.05] hover:shadow-md hover:shadow-white  p-1 w-[8rem] text-white font-bold">
                        {{ wishListstring }}
                    </button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    data() {
        return {
            product:{},
            category:{},
            quantity:1,
            wishListstring:"Add to wishlist",
            baseURL:'https://limitless-lake-55070.herokuapp.com/',
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
    props : ["products", "categories"],
    methods: {
        addToWishList() {
            if (!this.token) {
                // user is not logged in show some error
                swal({
                    text: "s'il vous plait connecter-vous puis ajouter a votre list",
                    icon:"error",
                });
                return;
            }
            // add item to whishlist
            // ?  = chaine de recherche suivi de parametre url
            axios.post(`${this.baseURL}wishlist/add?token=${this.token}`,
            {id:this.product.id},this.headers,this.credentials)
            .then((response) => {
                if(response.status==201) {
                    this.wishListstring = "Ajouter a la Wishlist"
                    swal({
                        text: "Added to WishList. Please continue",
                        icon: "success"
                    });
                }
            },(error) =>{
                console.log(error)
                swal({
                    text: "Quelque chose ne va pas avec l'ajout à la liste de souhaits",
                });
            });
        },
        // add to cart
        addToCart(){
            if (!this.token) {
                // user is not logged in show some error
                swal({
                    text: "s'il vous plait connecter-vous puis ajouter a votre card",
                    icon:"error",
                });
                return;
            }
            //add to cart
            axios.post(`${this.baseURL}cart/add?token=${this.token}`,
            {productId:this.id,quantity:this.quantity},this.headers,this.credentials)
            .then((res)=>{
                if(res.status==201) {
                    swal({
                        text: "Added to cart. Please continue",
                        icon: "success"
                    });
                }
            }).catch((err) => console.log("err",err));
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id);
        this.category = this.categories.find(category => category.id == this.product.categoryId)
        this.token = localStorage.getItem('token');
    },
}
</script>

<style>

</style>