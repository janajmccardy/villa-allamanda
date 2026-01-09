<script setup lang="ts">
import { ref } from 'vue'

const bookingUrl = 'http://www.freetobook.com/affiliates/reservation.php?w_id=11455&w_tkn=bHx0FjW3ZNZpfLK03Kg3epw1MFBG1I7XbJJ6ZQHUgzJUZs8dwaU8JZJsgedAH'

interface Room {
  id: number
  name: string
  tagline: string
  occupancy: string
  totalArea?: string
  bedroomArea: string
  description: string
  features: string[]
  image: string
  floorPlan?: string
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Garden Cottage Queen Bedroom',
    tagline: 'Quaint and cozy cottage bedroom with views to the garden',
    occupancy: '2–4',
    totalArea: '182 sq ft',
    bedroomArea: '122 sq ft',
    description: 'Queen sized bed sleeps 2 with additional loft which sleeps 1 adult or 2 children',
    features: [
      'Air conditioning',
      'Cable television',
      'Internet',
      'Kitchenette with refrigerator',
      'Microwave oven',
      'Coffee pot and dishware to serve 4'
    ],
    image: '/images/101 - bed.jpg',
    floorPlan: '/images/cottage-floorplan.jpg',
  },
  {
    id: 2,
    name: 'Efficiency Suite',
    tagline: 'Tranquil ground floor efficiency with views to the garden',
    occupancy: '2–3',
    totalArea: '270 sq ft',
    bedroomArea: '100 sq ft',
    description: 'Queen sized bed sleeps 2',
    features: [
      'Fully equipped kitchen',
      'Dishware service for 2',
      'Coffee pot',
      'Microwave oven',
      'Refrigerator',
      'Cookware and stove',
      'Air-conditioning',
      'Cable television',
      'Internet',
      'Dining counter'
    ],
    image: '/images/eff-ban.jpg',
    floorPlan: '/images/effiency-floorplan.jpg',
  },
  {
    id: 3,
    name: 'Queen Studio Bedroom – 2nd Floor',
    tagline: 'Views to the Atlantic Ocean & garden or to the "Lucayan Sea" & garden. Opens onto exterior sun decks.',
    occupancy: '2–3',
    bedroomArea: '151–173 sq ft',
    description: 'Queen sized bed sleeps 2',
    features: [
      'Air conditioning',
      'Cable television',
      'Internet',
      'Kitchenette with refrigerator',
      'Microwave oven',
      'Coffee pot and dishware to serve 2'
    ],
    image: '/images/202-01.jpg',
    floorPlan: '/images/2nd-Floor-Plan.jpg',
  },
  {
    id: 4,
    name: 'Queen Studio Bedroom – 3rd Floor',
    tagline: 'Panoramic views to either the "Lucayan Sea" and garden or the island\'s coastline and Atlantic Ocean. Opens onto spacious exterior dining sun decks.',
    occupancy: '2–3',
    bedroomArea: '155–178 sq ft',
    description: 'Queen sized bed sleeps 2',
    features: [
      'Air conditioning',
      'Cable television',
      'Internet',
      'Kitchenette with refrigerator',
      'Microwave oven',
      'Coffee pot and dishware to serve 2'
    ],
    image: '/images/302-01.jpg',
    floorPlan: '/images/3rd-Floor-Plan.jpg',
  },
  {
    id: 5,
    name: 'One Bedroom King Suite – 2nd Floor',
    tagline: 'Views to the garden, the island\'s coastline, "Lucayan Sea" and Atlantic Ocean. Kitchen and sitting areas open onto a spacious exterior dining porch.',
    occupancy: '2–3',
    totalArea: '470 sq ft',
    bedroomArea: '154 sq ft',
    description: 'King sized bed sleeps 2',
    features: [
      'Air conditioning',
      'Internet and Cable TV',
      'Fully equipped kitchen',
      'Refrigerator',
      'Microwave oven',
      'Coffee pot',
      'Dishware to serve 4',
      'Cookware and stove',
      'Dining and sitting room',
      'Exterior porch/sun deck',
      'Amazing views'
    ],
    image: '/images/201-01.jpg',
    floorPlan: '/images/2nd-Floor-Plan.jpg',
  },
  {
    id: 6,
    name: 'One Bedroom King Suite – 3rd Floor',
    tagline: '360 degree panoramic views to the island\'s coastline, Atlantic Ocean, "Lucayan Sea" and garden. Kitchen and sitting areas open onto a spacious exterior dining sun deck.',
    occupancy: '2–3',
    totalArea: '475 sq ft',
    bedroomArea: '154 sq ft',
    description: 'King sized bed sleeps 2',
    features: [
      'Air conditioning',
      'Internet and Cable TV',
      'Fully equipped kitchen',
      'Refrigerator',
      'Microwave oven',
      'Coffee pot',
      'Dishware to serve 4',
      'Cookware and stove',
      'Dining and sitting room',
      'Exterior porch/sun deck',
      'Amazing views'
    ],
    image: '/images/301-01.jpg',
    floorPlan: '/images/3rd-Floor-Plan.jpg',
  }
]

const selectedRoom = ref<Room | null>(null)
const showFloorPlan = ref(false)

const openModal = (room: Room) => {
  selectedRoom.value = room
  showFloorPlan.value = false
}

const closeModal = () => {
  selectedRoom.value = null
  showFloorPlan.value = false
}

const toggleFloorPlan = () => {
  showFloorPlan.value = !showFloorPlan.value
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-8 md:p-12 shadow-lg">
          <h1 class="font-brand text-4xl md:text-5xl mb-4">Our Rooms</h1>
          <p class="text-white/80 text-lg">
            Choose from our selection of comfortable accommodations
          </p>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex justify-center py-4">
      <div class="w-24 h-1 bg-gold"></div>
    </div>

    <!-- Rooms Grid -->
    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="room in rooms"
            :key="room.id"
            class="bg-white/95 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            @click="openModal(room)"
          >
            <div class="h-48 bg-ocean/20 overflow-hidden">
              <img
                :src="room.image"
                :alt="room.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="font-brand text-xl text-ocean mb-2">{{ room.name }}</h3>
              <p class="text-gray-500 text-sm mb-3">Sleeps {{ room.occupancy }}</p>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ room.tagline }}</p>
              <button class="text-gold font-medium hover:text-ocean transition-colors">
                View Details →
              </button>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-12">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Multi-Bedroom Note -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
            <h3 class="font-brand text-xl mb-4">Multi-Bedroom Options</h3>
            <p class="text-white/90">
              Queen Studio Bedrooms may be combined with adjacent King Suite on the 2nd or 3rd floor,
              creating two or three bedroom suites with fully equipped kitchen, dining and sitting
              spaces to accommodate 6–8 guests.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Room Detail Modal -->
    <Teleport to="body">
      <div
        v-if="selectedRoom"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60" @click="closeModal"></div>

        <!-- Modal Content -->
        <div class="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Room Image -->
          <div class="h-64 md:h-80 overflow-hidden">
            <img
              :src="selectedRoom.image"
              :alt="selectedRoom.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Room Details -->
          <div class="p-6 md:p-8">
            <h2 class="font-brand text-2xl md:text-3xl text-ocean mb-2">{{ selectedRoom.name }}</h2>
            <p class="text-gold font-medium mb-4">{{ selectedRoom.tagline }}</p>

            <!-- Room Specs -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-200">
              <div>
                <p class="text-sm text-gray-500">Occupancy</p>
                <p class="font-medium">{{ selectedRoom.occupancy }} guests</p>
              </div>
              <div v-if="selectedRoom.totalArea">
                <p class="text-sm text-gray-500">Total Area</p>
                <p class="font-medium">{{ selectedRoom.totalArea }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Bedroom Area</p>
                <p class="font-medium">{{ selectedRoom.bedroomArea }}</p>
              </div>
            </div>

            <p class="text-gray-700 mb-6">{{ selectedRoom.description }}</p>

            <!-- Features -->
            <h3 class="font-brand text-lg text-ocean mb-3">Amenities & Features</h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
              <li
                v-for="feature in selectedRoom.features"
                :key="feature"
                class="flex items-center gap-2 text-gray-600"
              >
                <svg class="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                {{ feature }}
              </li>
            </ul>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                :href="bookingUrl"
                target="_blank"
                class="bg-gold hover:bg-gold/90 text-white px-8 py-4 font-semibold tracking-wide text-center text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Book This Room
              </a>
              <button
                v-if="selectedRoom.floorPlan"
                @click="toggleFloorPlan"
                class="border-2 border-ocean text-ocean px-6 py-4 font-medium tracking-wide text-center hover:bg-ocean hover:text-white transition-colors"
              >
                {{ showFloorPlan ? 'Hide Floor Plan' : 'Show Floor Plan' }}
              </button>
            </div>

            <!-- Floor Plan (toggleable) -->
            <div v-if="selectedRoom.floorPlan && showFloorPlan" class="border border-gray-200 rounded overflow-hidden">
              <img
                :src="selectedRoom.floorPlan"
                :alt="selectedRoom.name + ' floor plan'"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
