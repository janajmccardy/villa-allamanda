<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Rates', path: '/rates' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Things to Do', path: '/activities' },
  { name: 'Info & Tips', path: '/info' },
  { name: 'Getting Here', path: '/getting-here' },
  { name: 'Contact', path: '/contact' },
]

const bookingUrl = 'http://www.freetobook.com/affiliates/reservation.php?w_id=11455&w_tkn=bHx0FjW3ZNZpfLK03Kg3epw1MFBG1I7XbJJ6ZQHUgzJUZs8dwaU8JZJsgedAH'

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <!-- Top bar with phone -->
    <div class="bg-ocean/90 text-white text-sm py-2 px-6 text-center">
      Call us Toll Free: <a href="tel:+18775166639" class="font-medium hover:text-gold">1 (877) 516-6639</a>
    </div>

    <!-- Main nav -->
    <nav class="px-6 py-4 lg:px-12">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="/favicon.png" alt="Villa Allamanda" class="h-10 w-auto" />
          <span class="font-brand text-2xl text-ocean hidden sm:inline">Villa Allamanda</span>
        </RouterLink>

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-6">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-700 hover:text-ocean transition-colors text-sm font-medium"
          >
            {{ link.name }}
          </RouterLink>
          <a :href="bookingUrl" target="_blank" class="btn-primary text-sm">
            Check Availability
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile nav -->
      <div v-if="isMenuOpen" class="lg:hidden mt-4 pb-4 border-t pt-4">
        <div class="flex flex-col gap-3">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-700 hover:text-ocean transition-colors py-2"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </RouterLink>
          <a :href="bookingUrl" target="_blank" class="btn-primary text-center mt-2">
            Check Availability
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
