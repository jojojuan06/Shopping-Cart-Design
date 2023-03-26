<template>
	<div class="flex w-full justify-center items-center flex-col">
		<h2>
            <router-link class="font-bold text-red-500 underline underline-offset-4 pb-2 cursor-pointer" :to="{name:'Signin'}">
                Vous avez un compte cliquer ici !
            </router-link>
        </h2>
		<div class="bg-white h-full  shadow-black shadow-2xl p-2 w-full max-w-[300px] md:max-w-[400px] min-h-[450px] rounded border border-gray-500 ">
			<h2 class="pb-6 font-bold">Create Account !</h2>
			<form @submit="signup" @submit.prevent class="flex h-[400px] w-full flex-col justify-between items-center">
				<div class="flex flex-col w-full h-full">
					<div class="w-full flex items-start">
						<label class="self-center" for="email">Email:</label>
					<input v-model="email" class="h-8 w-full bg-gray-400 rounded" type="email" name="" id="" placeholder="Email" required>
					</div>
					<br>
					<div class="w-full flex items-start pt-2">
						<label class="self-center" for="Firstname">Firstname:</label>
						<input v-model="firstName" class="h-8 w-full bg-gray-400 rounded" type="text" name="" id="" placeholder="Firstname" required>
					</div>
					<br>
					<div class="w-full items-start flex pt-2">
						<label class="self-center" for="Lastname">Lastname:</label>
						<input v-model="lastName" class="h-8 w-full bg-gray-400 rounded" type="text" name="" id="" placeholder="Lastname" required>
					</div>
					<br>
					<div class="w-full items-start flex pt-2">
						<label class="self-center" for="Password">Password:</label>
						<input v-model="password" class="h-8 w-full bg-gray-400 rounded" type="password" name="" id="" placeholder="********" required>
					</div>
					<br>
					<div class="w-full flex items-start pt-2">
						<label class="self-center whitespace-nowrap" for="Password">Confirm Password:</label>
						<input v-model="confirmPassword" class="h-8 w-full bg-gray-400 rounded" type="password" name="" id="" placeholder="********" required>
					</div>
				</div>
				<div class="w-full">
				<button type="submit" class="hover:scale-[1.01] opacity-80 hover:opacity-100 w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">
					Create Account
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
	name: 'Signup',
	props:["baseURL"],
	data() {
		return {
			email: null,
			firstName:null,
			lastName: null,
			password: null,
			confirmPassword: null,
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
		async signup(){
				if (this.password === this.confirmPassword){
					//call signup api
					const user =  { 
						email: this.email,
						firstName:this.firstName,
						lastName: this.lastName,
						password: this.password,
						confirmPassword: this.confirmPassword,
					}
					console.log("user",user);
					axios.post(`${this.baseURL}user/signup`,user,
					this.headers,this.credentials)
					.then(()=>{
					sweetalert({
						text:"Compte crée avec success",
						icon:"success",
					})
					this.$router.replace("/");
					}).catch(err =>{
						console.log(err);
					})
				} else {
					//show some error
					swal({
						text: "passwors dont match",
						icon: "error"
					});
				}
		}
	},
}
</script>

<style>
</style>