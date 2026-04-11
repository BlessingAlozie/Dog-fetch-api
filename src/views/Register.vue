<template>
 <section>
<div class="min-h-screen flex items-center justify-center bg-[#f9fafb] px-4">
  <div class="w-full max-w-5xl mx-auto grid md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden">

    <!-- LEFT SIDE -->
    <div class="hidden md:flex flex-col justify-center bg-black text-white p-10">
      <h1 class="text-3xl font-semibold mb-4">
        Welcome 👋
      </h1>
      <p class="text-gray-300 text-lg leading-relaxed max-w-sm">
        Create your account and start your journey with smarter tools and seamless experience.

</p>
    </div>

    <!-- RIGHT SIDE -->
    <div class="p-8 md:p-10">
      <h2 class="text-2xl font-semibold text-gray-900 mb-6">
        Create Account
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-5">

        <!-- Name -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Full Name</label>
          <input type="text" v-model="form.name" @input="error.name = ''"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none "
            placeholder="John Doe" />
             <p class="text-red-400" v-if="error.name">{{ error.name }}</p>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Email</label>
          <input type="email" v-model="form.email" @input="error.email =''"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="you@example.com" />
            <p class="text-red-400" v-if="error.email">{{ error.email }}</p>
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Password</label>
          <input type="password" v-model="form.password" @input="error.password=''" max="8"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="••••••••" />
          <p class="text-xs text-gray-400 mt-1">
            Must be at least 8 characters
          </p>
           <p class="text-red-400" v-if="error.password">{{ error.password }}</p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Confirm Password</label>
          <input type="password" v-model="form.confirmPassword" @input="error.confirmPassword=''"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="••••••••" />
             <p class="text-red-400" v-if="error.confirmPassword">{{ error.confirmPassword }}</p>
        </div>

        <!-- Terms -->
       <div>
        <div class="flex items-center text-sm text-gray-500">
          <input type="checkbox" v-model="form.agree" @input="error.agree=''" class="mr-2">
          I agree to Terms & Privacy
        </div>
        <p class="text-red-400" v-if="error.agree">{{ error.agree }}</p>
      </div>

        <!-- CTA -->
        <button
          class="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          :disabled="isLoading">
        {{isLoading ? 'Creating account....' : 'Create account'}}

        </button>

        <!-- Login -->
        <p class="text-sm text-gray-500 text-center">
          Already have an account?
         <router-link to="/login" class="text-black font-medium">Login</router-link>
        </p>

      </form>
    </div>

  </div>
</div>
<div class="mt-6 p-4 border rounded">
  <p>Name: {{ form.name }}</p>
  <p>Email: {{ form.email }}</p>
  <p>Password: {{ form.password }}</p>
  <p>Confirm Password: {{ form.confirmPassword }}</p>
  <p>Agree: {{ form.agree }}</p>
</div>
 </section>
</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';
import Login from './Login.vue';

const isLoading = ref(false)
const form = ref({
name: '',
email: '',
password: '',
confirmPassword: '',
agree: false
})

const error = ref({})

async function handleSubmit() {

  error.value = {}
// form validation

if(!form.value.name.trim()){
  error.value.name = 'Name is required'
}
if(!form.value.email.trim()){
  error.value.email = 'Email is required'
}
if(!form.value.password.trim()){
  error.value.password = 'Password is required'
}else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    error.value.email = 'Please enter a valid email';
}

if(!form.value.confirmPassword.trim()){
  error.value.confirmPassword = 'Password is required'
}
if(form.value.confirmPassword !== form.value.password) {
  error.value.confirmPassword = 'Password do not match'
}
if(!form.value.agree) {
  error.value.agree = 'You must accept the terms'
}

if(Object.keys(error.value).length === 0){
try {
  isLoading.value = true

const response = await axios.post('http://localhost:3001/api/auth/register',
  {
    name: form.value.name,
    email: form.value.email,
    password: form.value.password
  }
)
console.log(response.data)
console.log('Submitted sucessfully')
isLoading.value = false

// reset field
form.value ={
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree:  false
}

}
catch (error) {
  console.error('API error', error)
  console.log('something went wrong')
}
finally{
  isLoading.value = false
}


}
}
</script>
