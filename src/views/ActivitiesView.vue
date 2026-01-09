<script setup lang="ts">
const levyPreserveUrl = 'http://www.levypreserve.org/'

const activities = [
  'Horseback Riding',
  'Caving',
  'Cliff Jumping',
  'Island Exploration (Glass Window Bridge, Queen\'s Bath, Preacher\'s Cave, Ocean Holes)',
  'Kayaking, Paddle Boarding, Canoeing',
  'Bone Fishing, Scuba Diving, Snorkeling, Surfing, Deep Sea Fishing',
  'Fishing Guides & Charters, Boating Trips',
  'Excursions & Tours',
  'Public Library',
  'Movie Theater'
]

const rentals = [
  'Kayaking, Paddle Boarding, Canoeing',
  'Fishing, Scuba Diving',
  'Boating',
  'Bicycling',
  'Chef Services'
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-8 md:p-12 shadow-lg">
          <h1 class="font-brand text-4xl md:text-5xl mb-4">Things to Do</h1>
          <p class="text-white/80 text-lg">
            Discover the best of Eleuthera during your stay
          </p>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex justify-center py-4">
      <div class="w-24 h-1 bg-gold"></div>
    </div>

    <!-- Activities Content -->
    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto space-y-8">

        <!-- Beaching -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Beaching</h2>
          <p class="text-white/90 leading-relaxed">
            Soak up the sun on our unspoiled pink and white sand beaches then swim in our clear
            and pristine turquoise waters on any of the numerous beaches on our isle of freedom,
            starting with our Twin Coves beach and adjacent French Leave beach which are just
            minutes away from Villa Allamanda, Eleuthera.
          </p>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-coral"></div>
        </div>

        <!-- Eco Tourism -->
        <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-6">Eco Tourism</h2>

          <div class="space-y-6">
            <!-- Leon Levy -->
            <div>
              <h3 class="font-brand text-xl text-white mb-2">Leon Levy Native Plant Preserve</h3>
              <p class="text-white/90 leading-relaxed mb-3">
                The first national park on Eleuthera featuring 25 acres of native plants, birds and wildlife.
                The preserve comprises "an environmental educational centre as well as a facility for the
                propagation of native plants and trees."
              </p>
              <a
                :href="levyPreserveUrl"
                target="_blank"
                class="text-white hover:text-white/80 transition-colors font-medium underline"
              >
                Visit Website →
              </a>
            </div>

            <!-- Edwin's Turtle Lake -->
            <div>
              <h3 class="font-brand text-xl text-white mb-2">Edwin's Turtle Lake Marine Preserve</h3>
              <p class="text-white/90 leading-relaxed">
                Established in 1954, Edwin's Turtle Lake Marine Preserve is a 43 acre saltwater lake
                offering kayak, paddle board and canoe rentals for on and off site touring activities.
                "Turtle Lake is an ideal spot to see green sea turtles, birds and the pristine and unique
                environment of an inland blue hole."
              </p>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Friday Fish Fry -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Friday Fish Fry</h2>
          <p class="text-white/90 leading-relaxed">
            Every Friday night, at Anchor Bay (6 min. drive) in Governor's Harbour, enjoy delicious
            native food, special tropical drinks, conch salad, music and dancing with the locals on
            the beach. The lively, festive atmosphere provides for a memorable experience as this
            event is highly patronized by locals and visitors alike.
          </p>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- More Activities -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-6">More Activities</h2>
          <ul class="grid md:grid-cols-2 gap-3">
            <li
              v-for="activity in activities"
              :key="activity"
              class="flex items-start gap-2 text-white/90"
            >
              <svg class="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              {{ activity }}
            </li>
          </ul>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-coral"></div>
        </div>

        <!-- Equipment Rentals -->
        <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Also Available on Eleuthera</h2>
          <p class="text-white/70 mb-4">Equipment rental for self-guided activities:</p>
          <ul class="grid md:grid-cols-2 gap-3">
            <li
              v-for="rental in rentals"
              :key="rental"
              class="flex items-center gap-2 text-white/90"
            >
              <svg class="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ rental }}
            </li>
          </ul>
        </div>

      </div>
    </section>
  </div>
</template>
