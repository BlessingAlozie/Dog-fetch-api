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

      <form class="space-y-5">

        <!-- Name -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Full Name</label>
          <input type="text"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="John Doe" />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Email</label>
          <input type="email"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="you@example.com" />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Password</label>
          <input type="password"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="••••••••" />
          <p class="text-xs text-gray-400 mt-1">
            Must be at least 8 characters
          </p>
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Confirm Password</label>
          <input type="password"
            class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="••••••••" />
        </div>

        <!-- Terms -->
        <div class="flex items-center text-sm text-gray-500">
          <input type="checkbox" class="mr-2">
          I agree to Terms & Privacy
        </div>

        <!-- CTA -->
        <button
          class="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
          Create Account
        </button>

        <!-- Login -->
        <p class="text-sm text-gray-500 text-center">
          Already have an account?
          <a href="#" class="text-black font-medium">Login</a>
        </p>

      </form>
    </div>

  </div>
</div>
 </section>
</template>

<script setup>

</script>
