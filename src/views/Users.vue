<template>
  <main>
    <h2>Registered Users</h2>

    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <div v-for="user in users" :key="user._id">
      <p>{{ user.name }} — {{ user.email }}</p>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

const users = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await api.get('/auth/users')
    users.value = response.data
  } catch (err) {
    error.value = 'Not authorized or failed to load users'
  } finally {
    loading.value = false
  }
})
</script>
