<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const bookingUrl = 'http://www.freetobook.com/affiliates/reservation.php?w_id=11455&w_tkn=bHx0FjW3ZNZpfLK03Kg3epw1MFBG1I7XbJJ6ZQHUgzJUZs8dwaU8JZJsgedAH'
const carRentalUrl = 'https://eleutheraislandrentacar.com/'

// Hero carousel images
const heroImages = [
  { src: '/images/VA night.jpg', caption: 'Welcome Home...Villa Allamanda' },
  { src: '/images/301 corner view sunset.jpg', caption: 'Breathtaking Sunset Views' },
  { src: '/images/kutchy header.jpg', caption: 'Your Island Escape Awaits' },
  { src: '/images/VA distance day.jpg', caption: 'Nestled on Eleuthera\'s Hilltop' },
  { src: '/images/twincoves-beach.jpg', caption: 'Pink Sand Beneath Your Feet' },
  { src: '/images/garden cottage night.jpg', caption: 'Tranquil Garden Cottage' },
]

const currentSlide = ref(0)
let slideInterval: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroImages.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + heroImages.length) % heroImages.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})

const highlights = [
  {
    title: 'Guest Suites',
    description: 'Garden Cottage, Efficiency Suite, Queen Studio, King Suites, and Two Bedroom Suite options available.',
    link: '/rooms',
    linkText: 'View Rooms',
  },
  {
    title: 'Our Location',
    description: 'Located in Cigatoo Estates, 5 miles south of Governor\'s Harbour Airport and 3 miles north of the township.',
    link: '/getting-here',
    linkText: 'Get Directions',
  },
  {
    title: 'Explore Eleuthera',
    description: 'We\'re happy to assist guests in identifying interesting places and exciting events to enjoy.',
    link: '/activities',
    linkText: 'Things to Do',
  },
]
</script>

<template>
  <div>
    <!-- Hero Carousel Section -->
    <section class="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden">
      <!-- Carousel Images -->
      <div class="absolute inset-0">
        <TransitionGroup name="fade">
          <img
            v-for="(image, index) in heroImages"
            v-show="currentSlide === index"
            :key="image.src"
            :src="image.src"
            :alt="image.caption"
            class="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
          />
        </TransitionGroup>
      </div>

      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-ocean/60"></div>

      <!-- Navigation Arrows -->
      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Previous slide"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Next slide"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Content -->
      <div class="relative z-10 text-center text-white px-6 max-w-4xl">
        <p class="text-gold tracking-[0.3em] uppercase text-sm mb-3">Your Island Escape</p>
        <img
          src="/favicon.png"
          alt="Villa Allamanda Logo"
          class="h-16 md:h-24 w-auto mx-auto mb-4"
        />
        <h1 class="font-brand text-5xl md:text-7xl mb-3">
          Villa Allamanda
        </h1>
        <p class="text-lg md:text-xl font-light text-white/90 mb-2">
          Eleuthera, Bahamas
        </p>
        <!-- Dynamic Caption -->
        <p class="text-base text-gold/90 max-w-2xl mx-auto mb-6 leading-relaxed italic min-h-[1.5em]">
          {{ heroImages[currentSlide].caption }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a :href="bookingUrl" target="_blank" class="btn-primary bg-gold hover:bg-gold/90">
            Book a Room
          </a>
          <a :href="carRentalUrl" target="_blank" class="btn-outline border-white text-white hover:bg-white hover:text-ocean">
            Rent a Car
          </a>
        </div>

        <!-- Dot Indicators -->
        <div class="flex justify-center gap-2">
          <button
            v-for="(_, index) in heroImages"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-2 h-2 rounded-full transition-all duration-300',
              currentSlide === index ? 'bg-gold w-6' : 'bg-white/50 hover:bg-white/80'
            ]"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-8 md:p-12 text-center shadow-lg">
          <h2 class="font-brand text-3xl md:text-4xl mb-6">
            Welcome to Villa Allamanda, Eleuthera
          </h2>
          <p class="text-white/90 text-lg leading-relaxed">
            Villa Allamanda, Eleuthera is an exquisite Boutique hotel on the island of Eleuthera, Bahamas.
            It features modern Bahamian island-style decor nestled atop one of Eleuthera's most breathtaking
            hilltops, amidst a picturesque garden setting and just a fifteen minute walk to beautiful
            Twin Coves Beach.
          </p>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex justify-center py-4">
      <div class="w-24 h-1 bg-gold"></div>
    </div>

    <!-- Highlights Grid -->
    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="item in highlights"
            :key="item.title"
            class="bg-ocean/90 backdrop-blur-sm text-white p-8 shadow-lg hover:bg-ocean transition-colors"
          >
            <h3 class="font-brand text-2xl mb-4">{{ item.title }}</h3>
            <p class="text-white/80 mb-6 leading-relaxed">{{ item.description }}</p>
            <RouterLink :to="item.link" class="text-gold font-medium hover:text-white transition-colors">
              {{ item.linkText }} →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex justify-center py-4">
      <div class="w-24 h-1 bg-gold"></div>
    </div>

    <!-- CTA Section -->
    <section class="py-16 px-6">
      <div class="max-w-2xl mx-auto">
        <div class="bg-white/95 backdrop-blur-sm p-8 md:p-12 text-center shadow-lg">
          <h2 class="font-brand text-3xl md:text-4xl text-ocean mb-6">Ready to Experience Eleuthera?</h2>
          <p class="text-gray-700 mb-8 text-lg">
            Book your stay at Villa Allamanda and discover the tranquil beauty of the Bahamas.
          </p>
          <a :href="bookingUrl" target="_blank" class="btn-primary bg-gold hover:bg-gold/90">
            Check Availability
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
