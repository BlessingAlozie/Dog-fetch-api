<template>
  <div class="mt-8">
    <button
      :type="type"
      :class="[
        'w-full px-4 py-3 rounded transition border-none outline-none',
        disabled || isLoading ? 'bg-gray-300 cursor-none' : 'bg-purple-600 text-white',
      ]"
      :disabled="disabled || isLoading"
      @click="!isLoading && emit('click')"
    >
      {{ isLoading ? 'Loading...' :  label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: {type: String, default: 'button'},
  disabled: Boolean,
  isLoading: Boolean,
})

const emit = defineEmits(['click'])
</script>
