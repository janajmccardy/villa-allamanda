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
  <header class="bg-ocean-dark shadow-sm sticky top-0 z-50">
    <!-- Top bar with phone -->
    <div class="bg-coral text-white text-sm py-2 px-6 text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-shimmer"></div>
      <div class="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <span class="text-sm tracking-[0.2em] uppercase font-medium">For the Best Rates: </span>
        <!-- <span class="hidden sm:inline text-white/50">|</span> -->
        <a href="https://wa.me/12423597766" target="_blank" class="flex items-center gap-1.5 hover:text-ocean transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span class="font-semibold">(242) 359-7766</span>
        </a>
        <span class="hidden sm:inline text-white/50">|</span>
        <span class="flex items-center gap-1.5">
          Call Us Toll Free: <a href="tel:+18775166639" class="font-semibold hover:text-ocean transition-colors">1 (877) 516-6639</a>
          <span class="text-white/80 text-xs">USA & Canada</span>
        </span>
      </div>
    </div>

    <!-- Main nav -->
    <nav class="px-6 py-4 lg:px-12">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3">
          <div class="bg-ocean/80 rounded-full p-1.5 shadow-sm">
            <img src="/favicon.png" alt="Villa Allamanda" class="h-9 w-auto" />
          </div>
          <span class="font-brand text-2xl text-white hidden sm:inline">Villa Allamanda, Eleuthera</span>
        </RouterLink>

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-6">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-white/90 hover:text-gold transition-colors text-sm font-medium"
          >
            {{ link.name }}
          </RouterLink>
          <a :href="bookingUrl" target="_blank" class="bg-gold text-white px-6 py-2 text-sm font-medium hover:bg-gold/90 transition-colors">
            Check Availability
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 bg-ocean/80 rounded-full shadow-sm text-white"
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
      <div v-if="isMenuOpen" class="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
        <div class="flex flex-col gap-3">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-white/90 hover:text-gold transition-colors py-2"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </RouterLink>
          <a :href="bookingUrl" target="_blank" class="bg-gold text-white text-center py-3 mt-2 font-medium hover:bg-gold/90 transition-colors">
            Check Availability
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
