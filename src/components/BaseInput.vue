<template>
  <div class="w-full">
    <label :class="['text-gray-600 block mb-1', sizeClasses[fontSize]]" v-if="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"

      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :class="[
        'w-full text-base mt-2 mb-2 p-2 border rounded leading-normal bg-transparent',
        error ? 'border-red-400' : 'border-gray-300', sizeClasses[fontSize]

      ]"
    />
    <p class="text-red-400" v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholder: String,
  error: String,
  modelValue: String,
  type: {
    type: String,
    default: 'email',
  },
  fontSize:{
    type: String,
    default: 'md'
  }
})

const emit = defineEmits(['update:modelValue'])

const sizeClasses = {
  sm: 'text-sm p-1',
  md: 'text-base p-2',
  lg: 'text-lg p-3'
}
</script>

<style lang="scss" scoped>
</style>
