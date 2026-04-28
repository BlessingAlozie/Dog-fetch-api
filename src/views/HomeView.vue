<template>
  <section class="w-full">
    <div class="max-w-4xl mx-auto px-10 py-10 mt-20">
      <form @submit.prevent="handleSubmit">
        <BaseInput
          label="Enter Name"
          placeholder="eg. Blessing John"
          type="text"
          :error="error.name"
          v-model="formData.name"
          @update:modelValue="clearError('name')"
        />
        <BaseInput
          label="Enter Email"
          placeholder="eg. example@gmail.com"
          type="email"
          :error="error.email"
          v-model="formData.email"
          fontSize="sm"
          @update:modelValue="clearError('email')"
        />
        <BaseInput
          label="Enter Password"
          placeholder="Enter Password"
          type="password"
          :error="error.password"
          v-model="formData.password"
          @update:modelValue="clearError('password')"
        />

        <BaseButton type="submit" label="Submit Form" />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

const formData = ref({
  name: '',
  email: '',
  password: '',
})

const error = ref({})

const clearError = (field) => {
  error.value[field] = ''
}

const handleSubmit = () => {
  error.value = {}

  if (!formData.value.name.trim()) {
    error.value.name = 'Name is required'
  }

  if (!formData.value.email.trim()) {
    error.value.email = 'Email is required'
  }

  if (!formData.value.password.trim()) {
    error.value.password = 'Password is required'
  }

  if (Object.keys(error.value).length > 0) return
  alert('yeeh submitted successfully')
}
</script>


