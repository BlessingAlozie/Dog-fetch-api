<template>
  <section class="min-h-screen flex items-center justify-center bg-[#f9fafb] px-4">
    <div class="w-full mx-auto max-w-md bg-white p-8 rounded-2xl shadow-lg">

      <h2 class="text-2xl font-semibold mb-6">Login</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">

        <!-- Email -->
        <div>
          <label class="text-sm text-gray-600">Email</label>
          <input v-model="form.email"
            class="w-full px-4 py-3 border rounded-lg"
            type="email" />
          <p v-if="error.email" class="text-red-400">{{ error.email }}</p>
        </div>

        <!-- Password -->
        <div>
          <label class="text-sm text-gray-600">Password</label>
          <input v-model="form.password"
            class="w-full px-4 py-3 border rounded-lg"
            type="password" />
          <p v-if="error.password" class="text-red-400">{{ error.password }}</p>
        </div>

        <!-- API Error -->
        <p v-if="apiError" class="text-red-500 text-sm">
          {{ apiError }}
        </p>

        <!-- Button -->
        <button
          :disabled="loading"
          class="w-full bg-black text-white py-3 rounded-lg"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>

      </form>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(false)
const apiError = ref('')
const error = ref({})

const form = ref({
  email: '',
  password: ''
})

async function handleLogin() {
  error.value = {}
  apiError.value = ''

  // validation
  if (!form.value.email.trim()) {
    error.value.email = 'Email is required'
  }

  if (!form.value.password.trim()) {
    error.value.password = 'Password is required'
  }

  if (Object.keys(error.value).length > 0) return

  try {
    loading.value = true

    const response = await axios.post(
      'http://localhost:3001/api/auth/login',
      {
        email: form.value.email,
        password: form.value.password
      }
    )

    // ✅ store token
    localStorage.setItem('token', response.data.token)

    // ✅ optional: store user
    localStorage.setItem('user', JSON.stringify(response.data.user))

    // ✅ redirect
    router.push('/product')

  } catch (err) {
    apiError.value =
      err.response?.data?.message || 'Invalid credentials'

  } finally {
    loading.value = false
  }
}
</script>
