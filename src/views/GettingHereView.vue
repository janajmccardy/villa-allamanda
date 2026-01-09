<script setup lang="ts">
const carRentalUrl = 'https://eleutheraislandrentacar.com/'

const airlines = [
  { name: 'Bahamas Air', website: 'www.bahamasair.com', phone: '(242) 702-4140' },
  { name: 'Pineapple Air', website: 'www.pineappleair.com', phone: '(242) 377-0412' },
  { name: 'Southern Air', website: 'www.southernaircharter.com', phone: '(242) 377-2014' },
]

const driveTimes = [
  { from: 'Governor\'s Harbour Airport (GHB)', time: '~8 minutes' },
  { from: 'North Eleuthera Airport (ELH)', time: '~55 minutes' },
  { from: 'Rock Sound Airport (RSD)', time: '~35 minutes' },
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-8 md:p-12 shadow-lg">
          <h1 class="font-brand text-4xl md:text-5xl mb-4">Getting Here</h1>
          <p class="text-white/80 text-lg">
            How to reach Villa Allamanda, Eleuthera
          </p>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex justify-center py-4">
      <div class="w-24 h-1 bg-gold"></div>
    </div>

    <!-- Directions Content -->
    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto space-y-8">

        <!-- Via Nassau -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Via Nassau, New Providence</h2>
          <p class="text-white/90 leading-relaxed">
            Most major carriers out of the U.S.A, Canada and the U.K. offer regularly scheduled
            flights into Nassau.
          </p>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Then to Eleuthera -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Then on to Eleuthera (by air)</h2>
          <p class="text-white/70 mb-6">
            Three airports serve Eleuthera: Governor's Harbour (GHB), Rock Sound (RSD), North Eleuthera (ELH)
          </p>

          <h3 class="font-medium text-gold mb-4">Airlines:</h3>
          <div class="space-y-4">
            <div
              v-for="airline in airlines"
              :key="airline.name"
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white/10 rounded"
            >
              <div>
                <p class="font-medium">{{ airline.name }}</p>
                <a
                  :href="'https://' + airline.website"
                  target="_blank"
                  class="text-gold hover:text-white transition-colors text-sm"
                >
                  {{ airline.website }}
                </a>
              </div>
              <a
                :href="'tel:' + airline.phone.replace(/[^0-9]/g, '')"
                class="text-white/80 hover:text-gold transition-colors mt-2 sm:mt-0"
              >
                {{ airline.phone }}
              </a>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-coral"></div>
        </div>

        <!-- By Ferry -->
        <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Sail from Nassau to Eleuthera</h2>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white/10 rounded">
            <div>
              <p class="font-medium">Bahamas Ferries</p>
              <a
                href="https://www.bahamasferries.com"
                target="_blank"
                class="text-white/90 hover:text-white transition-colors text-sm underline"
              >
                www.bahamasferries.com
              </a>
            </div>
            <a
              href="tel:2423232166"
              class="text-white/80 hover:text-white transition-colors mt-2 sm:mt-0"
            >
              (242) 323-2166
            </a>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Drive Times -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Drive Times to Villa Allamanda, Eleuthera</h2>
          <div class="space-y-3">
            <div
              v-for="drive in driveTimes"
              :key="drive.from"
              class="flex justify-between items-center py-3 border-b border-white/20 last:border-0"
            >
              <span class="text-white/90">{{ drive.from }}</span>
              <span class="font-medium text-gold">{{ drive.time }}</span>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-coral"></div>
        </div>

        <!-- Transportation on Eleuthera -->
        <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Transportation on Eleuthera</h2>
          <ul class="space-y-2 text-white/90 mb-6">
            <li>• <strong class="text-white">Rental car highly recommended</strong> – book immediately after confirming room and flight</li>
            <li>• Taxi services expensive beyond airport transfers (not recommended)</li>
            <li>• No public transportation on Eleuthera</li>
          </ul>
          <a :href="carRentalUrl" target="_blank" class="bg-white text-coral hover:bg-white/90 px-6 py-3 font-medium tracking-wide inline-block transition-colors">
            Rent a Car →
          </a>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Driving Directions -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Driving Directions from Governor's Harbour Airport</h2>
          <div class="text-white/90 leading-relaxed space-y-4">
            <p>
              Travel south on Queen's Highway for approximately 8 minutes (at average speed of 45 mph).
              You will see the Villa Allamanda, Eleuthera sign on the right side just opposite Casuarina Avenue
              (on the left) leading to our property.
            </p>
            <p>
              Make that left turn on to Casuarina Avenue and travel along the unpaved road up to the
              top of the hill; make a left turn at Jacaranda Drive, the third street atop the hill.
            </p>
            <p>
              You will see our VA sign and logo at the turn off with street light right at the turn;
              Villa Allamanda, Eleuthera is the second property on the left.
            </p>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Map Placeholder -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Map</h2>
          <div class="aspect-video bg-white/10 flex items-center justify-center rounded">
            <span class="text-white/40">Google Map Embed</span>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
