<template>
  <nav class="w-full bg-white border-b shadow-sm">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <router-link to="/" class="text-xl font-semibold text-gray-900">
        MyApp
      </router-link>

      <!-- Links -->
      <div class="flex items-center gap-6">
        <router-link to="/product" class="nav-link" active-class="active-link">
          Product
        </router-link>

        <router-link to="/register" class="nav-link" active-class="active-link">
          Register
        </router-link>

        <router-link to="/features" class="nav-link" active-class="active-link">
          Features
        </router-link>

        <router-link to="/newfile" class="nav-link" active-class="active-link">
          Cards
        </router-link>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply text-gray-600 font-medium transition hover:text-black;
}

.active-link {
  @apply text-black border-b-2 border-black pb-1;
}
</style>
