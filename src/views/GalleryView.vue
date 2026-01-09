<script setup lang="ts">
import { ref, computed } from 'vue'

interface GalleryImage {
  src: string
  alt: string
  category: string
  isFloorPlan?: boolean
}

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'property', name: 'Property & Views' },
  { id: 'beach', name: 'Beach' },
  { id: 'cottage', name: 'Garden Cottage' },
  { id: 'efficiency', name: 'Efficiency Suite' },
  { id: 'queen-2nd', name: 'Queen Studio 2nd Floor' },
  { id: 'queen-3rd', name: 'Queen Studio 3rd Floor' },
  { id: 'king-2nd', name: 'King Suite 2nd Floor' },
  { id: 'king-3rd', name: 'King Suite 3rd Floor' },
]

const selectedCategory = ref('all')

const images: GalleryImage[] = [
  // Property & Views
  { src: '/images/VA night.jpg', alt: 'Villa Allamanda at night', category: 'property' },
  { src: '/images/VA distance day.jpg', alt: 'Villa Allamanda daytime distance view', category: 'property' },
  { src: '/images/VA distance evening .jpg', alt: 'Villa Allamanda evening distance view', category: 'property' },
  { src: '/images/VA signature day.jpg', alt: 'Villa Allamanda signature daytime view', category: 'property' },
  { src: '/images/VA sign outside shot.jpg', alt: 'Villa Allamanda sign', category: 'property' },
  { src: '/images/VAback day.jpg', alt: 'Villa Allamanda back view daytime', category: 'property' },
  { src: '/images/VAbanner.jpg', alt: 'Villa Allamanda banner view', category: 'property' },
  { src: '/images/lower landing night.jpg', alt: 'Lower landing at night', category: 'property' },
  { src: '/images/301 corner view.jpg', alt: 'Corner view from 301', category: 'property' },
  { src: '/images/301 corner view 2.jpg', alt: 'Corner view from 301 alternate', category: 'property' },
  { src: '/images/301 corner view sunset.jpg', alt: 'Sunset from 301 corner', category: 'property' },
  { src: '/images/301 corner view header.jpg', alt: 'Corner view header shot', category: 'property' },
  { src: '/images/302 corner view.jpg', alt: 'Corner view from 302', category: 'property' },
  { src: '/images/302 view.jpg', alt: 'View from 302', category: 'property' },
  { src: '/images/203 view.jpg', alt: 'View from 203', category: 'property' },
  { src: '/images/303-301 deck:view.jpg', alt: 'Deck view from 303-301', category: 'property' },
  { src: '/images/ban-302view.jpg', alt: 'Banner view from 302', category: 'property' },
  { src: '/images/susnet.jpg', alt: 'Sunset view', category: 'property' },

  // Beach
  { src: '/images/twincoves-beach.jpg', alt: 'Twin Coves Beach', category: 'beach' },

  // Garden Cottage (101)
  { src: '/images/cottage-floorplan.jpg', alt: 'Garden Cottage floor plan', category: 'cottage', isFloorPlan: true },
  { src: '/images/gardencottage2.jpg', alt: 'Garden Cottage Loft floor plan', category: 'cottage', isFloorPlan: true },
  { src: '/images/gardencottage day.jpg', alt: 'Garden Cottage daytime', category: 'cottage' },
  { src: '/images/garden cottage night.jpg', alt: 'Garden Cottage at night', category: 'cottage' },
  { src: '/images/garden-ban.jpg', alt: 'Garden Cottage banner', category: 'cottage' },
  { src: '/images/cottage 1.jpg', alt: 'Cottage view', category: 'cottage' },
  { src: '/images/101 - bed.jpg', alt: 'Garden Cottage bedroom', category: 'cottage' },
  { src: '/images/101 - bed aerial.jpg', alt: 'Garden Cottage bedroom aerial view', category: 'cottage' },
  { src: '/images/101 bed:loft.jpg', alt: 'Garden Cottage bed and loft', category: 'cottage' },
  { src: '/images/101-bath.jpg', alt: 'Garden Cottage bathroom', category: 'cottage' },
  { src: '/images/101 - bath:kitn.jpg', alt: 'Garden Cottage bath and kitchenette', category: 'cottage' },

  // Efficiency Suite (102)
  { src: '/images/eff-ban.jpg', alt: 'Efficiency Suite banner', category: 'efficiency' },
  { src: '/images/102 bed.jpg', alt: 'Efficiency Suite bedroom', category: 'efficiency' },
  { src: '/images/102-bed2.jpg', alt: 'Efficiency Suite bed view 2', category: 'efficiency' },
  { src: '/images/102 -bed3.jpg', alt: 'Efficiency Suite bed view 3', category: 'efficiency' },
  { src: '/images/102 - bed 4.jpg', alt: 'Efficiency Suite bed view 4', category: 'efficiency' },
  { src: '/images/102-bed5.jpg', alt: 'Efficiency Suite bed view 5', category: 'efficiency' },
  { src: '/images/102 - bed:door.jpg', alt: 'Efficiency Suite bed and door', category: 'efficiency' },
  { src: '/images/102 bed:sit.jpg', alt: 'Efficiency Suite bed and sitting area', category: 'efficiency' },
  { src: '/images/102 - kit.jpg', alt: 'Efficiency Suite kitchen', category: 'efficiency' },
  { src: '/images/102 - kit:sit.jpg', alt: 'Efficiency Suite kitchen and sitting', category: 'efficiency' },
  { src: '/images/102 - kit:sit2.jpg', alt: 'Efficiency Suite kitchen and sitting 2', category: 'efficiency' },
  { src: '/images/102 bath.jpg', alt: 'Efficiency Suite bathroom', category: 'efficiency' },
  // Efficiency floor plan
  { src: '/images/effiency-floorplan.jpg', alt: 'Efficiency Suite floor plan', category: 'efficiency', isFloorPlan: true },

  // Queen Studio 2nd Floor (202, 203)
  { src: '/images/202-01.jpg', alt: 'Room 202 view 1', category: 'queen-2nd' },
  { src: '/images/202-02.jpg', alt: 'Room 202 view 2', category: 'queen-2nd' },
  { src: '/images/202-03.jpg', alt: 'Room 202 view 3', category: 'queen-2nd' },
  { src: '/images/202-04.jpg', alt: 'Room 202 view 4', category: 'queen-2nd' },
  { src: '/images/202-05.jpg', alt: 'Room 202 view 5', category: 'queen-2nd' },
  { src: '/images/202-07.jpg', alt: 'Room 202 view 7', category: 'queen-2nd' },
  { src: '/images/202-08.jpg', alt: 'Room 202 view 8', category: 'queen-2nd' },
  { src: '/images/202-09.jpg', alt: 'Room 202 view 9', category: 'queen-2nd' },
  { src: '/images/203-01.jpg', alt: 'Room 203 view 1', category: 'queen-2nd' },
  { src: '/images/203-02.jpg', alt: 'Room 203 view 2', category: 'queen-2nd' },
  { src: '/images/203-03.jpg', alt: 'Room 203 view 3', category: 'queen-2nd' },
  { src: '/images/203-04.jpg', alt: 'Room 203 view 4', category: 'queen-2nd' },
  { src: '/images/203-05.jpg', alt: 'Room 203 view 5', category: 'queen-2nd' },
  // Queen 2nd floor plans
  { src: '/images/2nd-Floor-Plan.jpg', alt: '2nd Floor Plan', category: 'queen-2nd', isFloorPlan: true },
  { src: '/images/Studio-2nd-Floor-Queen-Rm.jpg', alt: 'Queen Room 202 Floor Plan', category: 'queen-2nd', isFloorPlan: true },
  { src: '/images/Studio-2nd-Floor-Queen-Rm203.jpg', alt: 'Queen Room 203 Floor Plan', category: 'queen-2nd', isFloorPlan: true },

  // Queen Studio 3rd Floor (302, 303)
  { src: '/images/302-01.jpg', alt: 'Room 302 view 1', category: 'queen-3rd' },
  { src: '/images/302-02.jpg', alt: 'Room 302 view 2', category: 'queen-3rd' },
  { src: '/images/302-03.jpg', alt: 'Room 302 view 3', category: 'queen-3rd' },
  { src: '/images/302-04.jpg', alt: 'Room 302 view 4', category: 'queen-3rd' },
  { src: '/images/303-01.jpg', alt: 'Room 303 view 1', category: 'queen-3rd' },
  { src: '/images/303-02.jpg', alt: 'Room 303 view 2', category: 'queen-3rd' },
  { src: '/images/303-03.jpg', alt: 'Room 303 view 3', category: 'queen-3rd' },
  { src: '/images/303-04.jpg', alt: 'Room 303 view 4', category: 'queen-3rd' },
  { src: '/images/book-top(303).jpg', alt: 'Room 303 top view', category: 'queen-3rd' },
  // Queen 3rd floor plans
  { src: '/images/3rd-Floor-Plan.jpg', alt: '3rd Floor Plan', category: 'queen-3rd', isFloorPlan: true },
  { src: '/images/Studio-3rd-Floor-Queen-Rm.jpg', alt: 'Queen Room 302 Floor Plan', category: 'queen-3rd', isFloorPlan: true },
  { src: '/images/Studio-3rd-Floor-Queen-Rm-303.jpg', alt: 'Queen Room 303 Floor Plan', category: 'queen-3rd', isFloorPlan: true },

  // King Suite 2nd Floor (201)
  { src: '/images/201-01.jpg', alt: 'Suite 201 view 1', category: 'king-2nd' },
  { src: '/images/201-02.jpg', alt: 'Suite 201 view 2', category: 'king-2nd' },
  { src: '/images/201-03.jpg', alt: 'Suite 201 view 3', category: 'king-2nd' },
  { src: '/images/201-04.jpg', alt: 'Suite 201 view 4', category: 'king-2nd' },
  { src: '/images/201-05.jpg', alt: 'Suite 201 view 5', category: 'king-2nd' },
  { src: '/images/201-06.jpg', alt: 'Suite 201 view 6', category: 'king-2nd' },
  { src: '/images/201-07.jpg', alt: 'Suite 201 view 7', category: 'king-2nd' },
  { src: '/images/201-08.jpg', alt: 'Suite 201 view 8', category: 'king-2nd' },
  { src: '/images/201-09.jpg', alt: 'Suite 201 view 9', category: 'king-2nd' },
  { src: '/images/201-10.jpg', alt: 'Suite 201 view 10', category: 'king-2nd' },
  { src: '/images/201-11.jpg', alt: 'Suite 201 view 11', category: 'king-2nd' },
  { src: '/images/201-12.jpg', alt: 'Suite 201 view 12', category: 'king-2nd' },
  { src: '/images/201-13.jpg', alt: 'Suite 201 view 13', category: 'king-2nd' },
  { src: '/images/201-14.jpg', alt: 'Suite 201 view 14', category: 'king-2nd' },
  { src: '/images/201-15.jpg', alt: 'Suite 201 view 15', category: 'king-2nd' },
  { src: '/images/201-16.jpg', alt: 'Suite 201 view 16', category: 'king-2nd' },
  { src: '/images/201-17.jpg', alt: 'Suite 201 view 17', category: 'king-2nd' },
  { src: '/images/201-18.jpg', alt: 'Suite 201 view 18', category: 'king-2nd' },
  { src: '/images/201-19.jpg', alt: 'Suite 201 view 19', category: 'king-2nd' },
  // King 2nd floor plans
  { src: '/images/2nd-Floor-Plan.jpg', alt: '2nd Floor Plan', category: 'king-2nd', isFloorPlan: true },
  { src: '/images/King-2nd-Floor-Suite-201-with-Kit.-Din.jpg', alt: 'King Suite 201 Floor Plan', category: 'king-2nd', isFloorPlan: true },

  // King Suite 3rd Floor (301)
  { src: '/images/301-01.jpg', alt: 'Suite 301 view 1', category: 'king-3rd' },
  { src: '/images/301-02.jpg', alt: 'Suite 301 view 2', category: 'king-3rd' },
  { src: '/images/301-03.jpg', alt: 'Suite 301 view 3', category: 'king-3rd' },
  { src: '/images/301-04.jpg', alt: 'Suite 301 view 4', category: 'king-3rd' },
  { src: '/images/301-06.jpg', alt: 'Suite 301 view 6', category: 'king-3rd' },
  { src: '/images/301-07.jpg', alt: 'Suite 301 view 7', category: 'king-3rd' },
  { src: '/images/301-08.jpg', alt: 'Suite 301 view 8', category: 'king-3rd' },
  { src: '/images/301-09.jpg', alt: 'Suite 301 view 9', category: 'king-3rd' },
  { src: '/images/301-10.jpg', alt: 'Suite 301 view 10', category: 'king-3rd' },
  { src: '/images/301-11.jpg', alt: 'Suite 301 view 11', category: 'king-3rd' },
  { src: '/images/301-12.jpg', alt: 'Suite 301 view 12', category: 'king-3rd' },
  { src: '/images/301-13.jpg', alt: 'Suite 301 view 13', category: 'king-3rd' },
  { src: '/images/301-14.jpg', alt: 'Suite 301 view 14', category: 'king-3rd' },
  { src: '/images/301-15.jpg', alt: 'Suite 301 view 15', category: 'king-3rd' },
  { src: '/images/301 daytime - bed.jpg', alt: 'Suite 301 bedroom daytime', category: 'king-3rd' },
  // King 3rd floor plans
  { src: '/images/3rd-Floor-Plan.jpg', alt: '3rd Floor Plan', category: 'king-3rd', isFloorPlan: true },
  { src: '/images/King-3rd-Floor-Suite-301-with-Kit.-Din.jpg', alt: 'King Suite 301 Floor Plan', category: 'king-3rd', isFloorPlan: true },
]

const filteredImages = computed(() => {
  if (selectedCategory.value === 'all') {
    // When "all" is selected, exclude floor plans
    return images.filter(img => !img.isFloorPlan)
  }
  // When a specific room is selected, show floor plans first, then other images
  const categoryImages = images.filter(img => img.category === selectedCategory.value)
  return categoryImages.sort((a, b) => {
    if (a.isFloorPlan && !b.isFloorPlan) return -1
    if (!a.isFloorPlan && b.isFloorPlan) return 1
    return 0
  })
})

// Lightbox
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % filteredImages.value.length
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + filteredImages.value.length) % filteredImages.value.length
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

// Add keyboard listener
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown)
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-8 md:p-12 shadow-lg">
          <h1 class="font-brand text-4xl md:text-5xl mb-4">Photo Gallery</h1>
          <p class="text-white/80 text-lg">
            Explore Villa Allamanda, Eleuthera and the beauty of the island
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="py-6 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-wrap gap-2 justify-center">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full',
              selectedCategory === category.id
                ? 'bg-gold text-white'
                : 'bg-ocean text-white hover:bg-coral'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex justify-center py-4">
      <div class="w-24 h-1 bg-gold"></div>
    </div>

    <!-- Gallery Grid -->
    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(image, index) in filteredImages"
            :key="image.src + '-' + index"
            class="aspect-square overflow-hidden cursor-pointer group shadow-lg relative"
            @click="openLightbox(index)"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <!-- Floor plan badge -->
            <div
              v-if="image.isFloorPlan"
              class="absolute top-2 left-2 bg-gold text-white text-xs px-2 py-1 rounded"
            >
              Floor Plan
            </div>
          </div>
        </div>

        <p v-if="filteredImages.length === 0" class="text-center text-white/70 py-12 bg-ocean/90 backdrop-blur-sm shadow-lg mt-8">
          No images found in this category.
        </p>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        @click.self="closeLightbox"
      >
        <!-- Close Button -->
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Previous Button -->
        <button
          @click="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next Button -->
        <button
          @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Image -->
        <img
          :src="filteredImages[currentImageIndex]?.src"
          :alt="filteredImages[currentImageIndex]?.alt"
          class="max-w-[90vw] max-h-[85vh] object-contain"
        />

        <!-- Image Counter & Label -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
          <p v-if="filteredImages[currentImageIndex]?.isFloorPlan" class="text-gold text-sm mb-1">Floor Plan</p>
          <p class="text-white/70 text-sm">
            {{ currentImageIndex + 1 }} / {{ filteredImages.length }}
          </p>
        </div>
      </div>
    </Teleport>
  </div>
</template>
