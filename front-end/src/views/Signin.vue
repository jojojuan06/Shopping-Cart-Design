<template>
    <div class="flex w-full justify-center items-center flex-col ">
        <h2>
            <router-link class="font-bold text-red-500 underline underline-offset-4 pb-2 cursor-pointer" :to="{name:'Signup'}">
                Vous n'avez pas de compte cliquer ici ! 
            </router-link>
        </h2>
		<div class="bg-white p-2 w-full h-full max-w-[300px] md:min-w-[400px] shadow-black rounded border-gray-500 shadow-2xl border">
			<h2 class="pb-6 font-bold">Connect Account !</h2>
			<form @submit="signin" @submit.prevent class="flex h-[250px] w-full flex-col justify-between items-center">
				<div class="flex flex-col justify-center w-full h-full">
					<div class="w-full flex items-start">
						<label class="self-center" for="email">Email:</label>
					<input v-model="email" class="h-8 w-full bg-gray-400 rounded" type="email" name="" id="" placeholder="Email" required>
					</div>
					<br>
					<div class="w-full items-start flex pt-2">
						<label class="self-center" for="Password">Password:</label>
						<input v-model="password" class="h-8 w-full bg-gray-400 rounded" type="password" name="" id="" placeholder="********" required>
					</div>
				</div>
				<h3 class="md:text-start text-[0.66rem]"> By continue , you agree to simplecoding's Conditions of Use and Privacy Notice.</h3>
				<div class="w-full">
				<button type="submit" class="hover:scale-[1.01] opacity-80 hover:opacity-100 w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">
					Connection
				</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import sweetalert from 'sweetalert';
export default {
	name: 'Signin',
	props:["baseURL"],
	data() {
		return {
			email: null,
			password: null,
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
		async signin(){
			//call signin api
			const body =  { 
				email: this.email,
				password: this.password,
			}
			console.log("body",body);
			await axios.post(`${this.baseURL}user/signIn`,body,
			this.headers,this.credentials)
			.then((res)=>{
				//set le token dans le storage
				localStorage.setItem("token", res.data.token)
				sweetalert({
					text:"Connexion reussi avec success",
					icon:"success",
				});
				//recupere le nombre d'items ainsi que produit et category
				this.$emit("fetchData")
				window.location = "http://localhost:5173/"
			}).catch((err)=>console.log(err));
		}
	},
}
</script>

<style>

</style>