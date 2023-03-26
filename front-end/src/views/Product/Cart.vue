<template>
    <div class="w-full  flex h-full">
        <div class="w-full flex flex-col">
            <div class="text-center">
                <h3 class="pt-3 text-black font-bold">
                    Shopping cart
                </h3>
            </div>
            <!-- loop items -->
            <div class="flex w-full  pt-4 flex-col">
                <div v-for="cartItem in cartItems" :key="cartItem.id" class="flex w-full justify-center flex-col">
                    <div class="flex w-full justify-center">
                        <div>
                            <img :src="cartItem.product.imageURL" :alt="cartItem.product.name" class="w-full max-w-[100px] md:min-w-[18rem] md:max-w-[18rem]">
                        </div>
                        <!-- display name ,quantity -->
                        <div class="flex flex-col justify-center">
                            <div class="ml-2 w-full">
                                <div>
                                    <h6 class="text-ellipsis whitespace-nowrap w-32 overflow-hidden">{{ cartItem.product.name }}</h6>
                                    <br>
                                    <p id="item-price" class="font-bold text-start">
                                            {{ cartItem.product.price }}€ l'unité
                                    </p>
                                    <p class="float-left mr-2">
                                        Quantity:{{ cartItem.quantity }} 
                                    </p>
                                </div>
                                <!-- display price -->
                                <p class="whitespace-nowrap">
                                    Total: <span class="font-bold">
                                        € {{ cartItem.product.price * cartItem.quantity }}
                                    </span>
                                </p>
                                <br>
                                <a href="#" @click="deleteItem(cartItem.id)" class="text-black w-full  hover:underline decoration-red-500 underline-offset-4">
                                    <h6 class="text-start w-full">Remove from cart</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-center pt-4 pb-4">
                    <hr class="border border-gray-400 w-1/2">
                    </div>
                </div>
                <div class="flex w-full justify-evenly">
                    <div></div>
                    <div>
                        <h5>
                        <span class="font-bold">
                        Total : 
                        </span> 
                        €{{ totalCost }}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//import swal from 'sweetalert';
export default {
    data() {
        return {
            cartItems:[],
            token:null,
            totalCost:0,
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
        //fetch all items in cart
        listCartitems(){
            axios.get(`${this.baseURL}cart/?token=${this.token}`,this.headers,this.credentials)
            .then((res) =>{
                const result = res.data;
                this.cartItems = result.cartItems;
                this.totalCost = result.totalCost;
            }).catch((err) => console.log("err",err));
        },
        deleteItem(itemId) {
        if (window.confirm("etes-vous sur de supprimer le produit ?")) {
        axios.delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token}`,this.headers,this.credentials)
            .then((res) => {
                if (res.status == 200) {
                //raffraichie la page
                this.$router.go(0);
                }
            }).catch((err) => console.log("err", err));
        }
    },
    },
    mounted() {
        this.token = localStorage.getItem('token');
        this.listCartitems();
    },
}
</script>

<style>

</style>