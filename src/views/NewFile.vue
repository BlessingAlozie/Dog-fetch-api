<template>
  <section class="w-full min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Interactive Card Gallery
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience our stunning collection of animated cards with smooth transitions and interactive effects
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105',
            activeFilter === filter
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TransitionGroup name="card" tag="div" class="contents">
          <div
            v-for="card in filteredCards"
            :key="card.id"
            @click="toggleCard(card.id)"
            @mouseenter="card.hovered = true"
            @mouseleave="card.hovered = false"
            :class="[
              'relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl',
              card.expanded ? 'md:col-span-2 lg:col-span-2' : ''
            ]"
          >
            <!-- Card Header -->
            <div class="relative h-48 overflow-hidden">
              <div
                :class="[
                  'absolute inset-0 bg-gradient-to-br transition-all duration-700',
                  card.gradient
                ]"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  :class="[
                    'text-6xl transition-all duration-500 transform',
                    card.hovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                  ]"
                >
                  {{ card.emoji }}
                </div>
              </div>
              <div
                :class="[
                  'absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 transition-all duration-300',
                  card.hovered ? 'bg-white/30' : 'bg-white/10'
                ]"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ card.title }}</h3>
              <p class="text-gray-600 mb-4">{{ card.description }}</p>
              
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in card.tags"
                  :key="tag"
                  class="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Expandable Content -->
              <Transition
                name="expand"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
              >
                <div v-if="card.expanded" class="mt-4 pt-4 border-t border-gray-200">
                  <div class="space-y-3">
                    <div class="flex items-center text-sm text-gray-600">
                      <svg class="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                      </svg>
                      {{ card.views }} views
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                      <svg class="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                      </svg>
                      {{ card.likes }} likes
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                      <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                      {{ card.category }}
                    </div>
                  </div>
                  <button class="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </Transition>

              <!-- Action Button -->
              <button
                class="mt-4 w-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 py-2 rounded-lg font-medium hover:from-purple-200 hover:to-blue-200 transition-all duration-300"
              >
                {{ card.expanded ? 'Show Less' : 'Show More' }}
              </button>
            </div>

            <!-- Floating Animation -->
            <div
              v-if="card.hovered"
              class="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-ping"
            />
          </div>
        </TransitionGroup>
      </div>

      <!-- Loading Animation -->
      <div v-if="loading" class="flex justify-center mt-12">
        <div class="relative">
          <div class="w-12 h-12 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const loading = ref(true)
const activeFilter = 'All'

const filters = ['All', 'Design', 'Development', 'Marketing', 'Business']

const cards = ref([
  {
    id: 1,
    title: 'Creative Design',
    description: 'Explore innovative design concepts and visual storytelling',
    emoji: '🎨',
    gradient: 'from-pink-400 to-purple-600',
    category: 'Design',
    tags: ['UI/UX', 'Creative', 'Visual'],
    views: 1234,
    likes: 89,
    expanded: false,
    hovered: false
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Build modern web applications with cutting-edge technologies',
    emoji: '💻',
    gradient: 'from-blue-400 to-cyan-600',
    category: 'Development',
    tags: ['Frontend', 'Backend', 'Full-stack'],
    views: 2456,
    likes: 156,
    expanded: false,
    hovered: false
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions for digital growth',
    emoji: '📈',
    gradient: 'from-green-400 to-teal-600',
    category: 'Marketing',
    tags: ['SEO', 'Social Media', 'Analytics'],
    views: 987,
    likes: 67,
    expanded: false,
    hovered: false
  },
  {
    id: 4,
    title: 'Business Strategy',
    description: 'Comprehensive business planning and execution strategies',
    emoji: '🚀',
    gradient: 'from-orange-400 to-red-600',
    category: 'Business',
    tags: ['Strategy', 'Growth', 'Planning'],
    views: 1876,
    likes: 123,
    expanded: false,
    hovered: false
  },
  {
    id: 5,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile application development',
    emoji: '📱',
    gradient: 'from-purple-400 to-indigo-600',
    category: 'Development',
    tags: ['iOS', 'Android', 'React Native'],
    views: 3210,
    likes: 234,
    expanded: false,
    hovered: false
  },
  {
    id: 6,
    title: 'Brand Identity',
    description: 'Create compelling brand identities that resonate',
    emoji: '✨',
    gradient: 'from-yellow-400 to-orange-600',
    category: 'Design',
    tags: ['Branding', 'Logo', 'Identity'],
    views: 1543,
    likes: 98,
    expanded: false,
    hovered: false
  }
])

const filteredCards = computed(() => {
  if (activeFilter === 'All') {
    return cards.value
  }
  return cards.value.filter(card => card.category === activeFilter)
})

const toggleCard = (cardId) => {
  const card = cards.value.find(c => c.id === cardId)
  if (card) {
    card.expanded = !card.expanded
  }
}

// Animation functions for expand transition
const enter = (element) => {
  element.style.height = '0'
  element.offsetHeight
  element.style.height = element.scrollHeight + 'px'
}

const afterEnter = (element) => {
  element.style.height = 'auto'
}

const leave = (element) => {
  element.style.height = element.scrollHeight + 'px'
  element.offsetHeight
  element.style.height = '0'
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<style scoped>
/* Card transition animations */
.card-enter-active {
  transition: all 0.5s ease-out;
}

.card-leave-active {
  transition: all 0.3s ease-in;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.card-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

.card-move {
  transition: transform 0.5s ease;
}

/* Expand transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 300px;
  opacity: 1;
}

/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}
</style>
