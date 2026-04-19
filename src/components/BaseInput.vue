<template>
  <div class="w-full">
    <label class="text-base text-gray-600 block mb-1" v-if="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"

      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :class="[
        'w-full text-base mt-2 mb-2 p-2 border rounded leading-normal bg-transparent',
        error ? 'border-red-400' : 'border-gray-300',
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
})

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
</style>
