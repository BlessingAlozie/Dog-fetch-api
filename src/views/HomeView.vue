<script setup>
import { ref } from 'vue';
import axios from 'axios';

const isLoading = ref(false)

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false
})

const error = ref({})

async function handleSubmit(){
error.value = {}

if(!form.value.name.trim()){
  error.value.name = 'Name is required'
}
if(!form.value.email.trim()){
  error.value.email = 'Email is required'
}
if(!form.value.password.trim()){
  error.value.password = 'Password is required'
}
if(!form.value.confirmPassword.trim()){
  error.value.confirmPassword = 'Passwords is required'
}
if(form.value.confirmPassword !== form.value.password){
  error.value.confirmPassword = 'Passwords do not match'
}
if(!form.value.agree){
  error.value.agree = 'You must accept terms'
}

if(Object.keys(error.value).length > 0) return
try {
  console.log('Form is ready for submission')
  isLoading.value = true
  const response = await axios.post('http://localhost:3001/api/auth/register',
    {
     name: form.value.name,
     email: form.value.email,
     password: form.value.password
    }
  )
  console.log(response.data)
  console.log('Form submitted successfully')

  isLoading.value = false

  // reset after submitting
  form.value ={
    name: '',
    email : '',
    password: '',
    confirmPassword: '',
    agree: false
  }
}
catch (err) {
console.error('api error', err)
console.log('something went wrong')
}

finally{
  isLoading.value = false
}
}

</script>
