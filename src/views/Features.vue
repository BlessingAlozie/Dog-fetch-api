<template>
  <section class="w-full mt-4 md:mt-10">
    <div class="max-w-[1400px] mx-auto flex flex-col justify-center align-center">
      <div class="flex flex-col justify-center align-center items-center">
        <h2 class="text-3xl md:text-4xl leading-tight text-center py-4 font-heading font-medium">
          Everything You Need for Your <br />
          Hair in One Place
        </h2>
        <p class="text-center text max-w-[400px]">
          Luvie brings together on-demand styling, smart recommendations, product shopping, and
          business tools into one powerful platform.
        </p>
      </div>
      <!--  -->
      <div class="w-full bg-gray-200 mt-20 grid grid-cols-1 md:grid-cols-2 md:grid-cols-3  gap-3">
       <div class="" v-for="feature in features" :key='feature.title'>
        <img :src="feature.image" alt="">
        <div class="">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
       </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const features = [
  { title: 'Book Stylists to Your Home', desc: 'Skip the salon stress and get professional services delivered right to your doorstep, on your schedule.', image: '/images/book.png' },
  { title: 'AI-Powered Style Recommendations', desc: '', image: '/images/power.png' },
  { title: 'Book Stylists to Your Home', desc: '', image: '/images/book.png' }

]
</script>
