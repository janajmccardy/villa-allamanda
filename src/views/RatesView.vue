<script setup lang="ts">
const bookingUrl = 'http://www.freetobook.com/affiliates/reservation.php?w_id=11455&w_tkn=bHx0FjW3ZNZpfLK03Kg3epw1MFBG1I7XbJJ6ZQHUgzJUZs8dwaU8JZJsgedAH'

const rates = [
  { room: 'Garden Cottage Queen Bedroom w/loft', summer: '$220.55', winter: '$245.05' },
  { room: 'Efficiency Suite w/Queen Bed', summer: '$220.55', winter: '$245.05' },
  { room: 'Queen Studio Bedroom – 2nd Floor', summer: '$220.55', winter: '$245.05' },
  { room: 'Queen Studio Bedroom – 3rd Floor', summer: '$220.55', winter: '$245.05' },
  { room: 'One Bedroom King Suite – 2nd Floor', summer: '$290.41', winter: '$322.68' },
  { room: 'One Bedroom King Suite – 3rd Floor', summer: '$290.41', winter: '$322.68' },
  { room: 'Two Bedroom Suite w/K, Q, Kit, Din. & Liv.', summer: '$334.41', winter: '$366.68' },
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-8 md:p-12 shadow-lg">
          <h1 class="font-brand text-4xl md:text-5xl mb-4">Rates & Policies</h1>
          <p class="text-white/80 text-lg">
            View our seasonal rates and booking policies
          </p>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex justify-center py-4">
      <div class="w-24 h-1 bg-gold"></div>
    </div>

    <!-- Rates Content -->
    <section class="py-16 px-6">
      <div class="max-w-5xl mx-auto">

        <!-- Seasonal Rates Table -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg mb-8">
          <h2 class="font-brand text-2xl mb-6">Seasonal Rates</h2>
          <p class="text-white/70 mb-6">Per night, before tax</p>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b-2 border-gold">
                  <th class="text-left py-3 pr-4 font-medium">Room Type</th>
                  <th class="text-center py-3 px-4 font-medium">
                    Summer<br>
                    <span class="font-normal text-sm text-white/60">May 15 – Nov 14</span>
                  </th>
                  <th class="text-center py-3 pl-4 font-medium">
                    Winter<br>
                    <span class="font-normal text-sm text-white/60">Nov 15 – May 14</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="rate in rates"
                  :key="rate.room"
                  class="border-b border-white/20"
                >
                  <td class="py-4 pr-4 text-white/90">{{ rate.room }}</td>
                  <td class="py-4 px-4 text-center font-medium text-gold">{{ rate.summer }}</td>
                  <td class="py-4 pl-4 text-center font-medium text-gold">{{ rate.winter }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-8">
          <div class="w-24 h-1 bg-coral"></div>
        </div>

        <!-- General Conditions -->
        <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg mb-8">
          <h2 class="font-brand text-2xl mb-6">General Conditions</h2>

          <ul class="space-y-3 text-white/90">
            <li class="flex gap-2">
              <span class="text-white">•</span>
              Room rates DO NOT include taxes and services
            </li>
            <li class="flex gap-2">
              <span class="text-white">•</span>
              Rates based on 2 adults per unit
            </li>
            <li class="flex gap-2">
              <span class="text-white">•</span>
              <div>
                <strong>Bed accommodations:</strong>
                <ul class="mt-2 ml-4 space-y-1 text-white/70">
                  <li>– One queen bed in each queen efficiency & studio bedroom</li>
                  <li>– One queen bed + one queen loft bed in the garden cottage</li>
                  <li>– One king bed in each one-bedroom King Suite</li>
                  <li>– One king bed + two single beds in King Suites with optional add-on sleeping space</li>
                </ul>
              </div>
            </li>
            <li class="flex gap-2">
              <span class="text-white">•</span>
              <div>
                <strong>Additional guests allowed:</strong>
                <ul class="mt-2 ml-4 space-y-1 text-white/70">
                  <li>– 1 additional guest per Queen Studio Bedroom</li>
                  <li>– 1 additional guest per one-bedroom King Suite</li>
                  <li>– $50 per additional guest (includes $25 fold-away mattress)</li>
                </ul>
              </div>
            </li>
            <li class="flex gap-2">
              <span class="text-white">•</span>
              Pack & play units: $20/night
            </li>
            <li class="flex gap-2">
              <span class="text-white">•</span>
              Fold-away mattress: $25/night
            </li>
            <li class="flex gap-2">
              <span class="text-white">•</span>
              Children 12 and under stay free with parents (mattress $25/night)
            </li>
            <li class="flex gap-2">
              <span class="text-white">•</span>
              Call for weekly or monthly rates
            </li>
            <li class="flex gap-2">
              <span class="text-white">•</span>
              2-night minimum stay required for discounted rates
            </li>
          </ul>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-8">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Deposit, Cancellation and General Policies -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg mb-8">
          <h2 class="font-brand text-2xl mb-6">Deposit, Cancellation & General Policies</h2>

          <div class="space-y-6">
            <!-- Check-in/out -->
            <div>
              <h3 class="font-medium text-gold mb-2">Check-in & Check-out</h3>
              <ul class="space-y-2 text-white/90">
                <li><strong>Check-in:</strong> After 3:00 PM (call in advance for early/late check-ins). Early check-ins ALWAYS subject to availability.</li>
                <li><strong>Check-out:</strong> By 11:00 AM (late check-out may incur additional charges up to one night cost)</li>
              </ul>
            </div>

            <!-- Deposit -->
            <div>
              <h3 class="font-medium text-gold mb-2">Deposit</h3>
              <p class="text-white/90">50% or minimum one-night cost required; balance due on or before check-in</p>
            </div>

            <!-- Cancellation -->
            <div>
              <h3 class="font-medium text-gold mb-2">Cancellation (non-holiday)</h3>
              <ul class="space-y-1 text-white/90">
                <li>• 30+ days before: Free cancellation</li>
                <li>• 14-30 days before: 1 night charge</li>
                <li>• Less than 14 days: 50% charge (or minimum 1 night)</li>
                <li>• No show or booking reduction after arrival: Full cost charged</li>
              </ul>
            </div>

            <!-- Holiday Cancellation -->
            <div>
              <h3 class="font-medium text-gold mb-2">Holiday Cancellations</h3>
              <p class="text-white/90 mb-2">45+ days = 1 night charge; less than 45 days = entire deposit forfeited</p>
              <p class="text-white/70 text-sm">
                <strong>Holiday dates:</strong><br>
                Christmas: December 20 – January 10<br>
                Easter: 7 days before and 7 days after Easter Sunday
              </p>
            </div>

            <!-- Minimum Stay -->
            <div>
              <h3 class="font-medium text-gold mb-2">Minimum Stay</h3>
              <ul class="space-y-1 text-white/90">
                <li>• Christmas Holiday: 3 nights</li>
                <li>• Special Events: 2 nights</li>
                <li>• All other times: 1 night</li>
              </ul>
            </div>

            <!-- Other -->
            <div>
              <h3 class="font-medium text-gold mb-2">Other Policies</h3>
              <ul class="space-y-1 text-white/90">
                <li>• Damages to property: Guest responsible for restoration/replacement fees</li>
                <li>• Lost/damaged/unreturned keys: $50 charge</li>
                <li>• No pets allowed</li>
                <li>• All bookings confirmed only when minimum deposit is paid</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-8">
          <div class="w-24 h-1 bg-coral"></div>
        </div>

        <!-- CTA -->
        <div class="max-w-2xl mx-auto">
          <div class="bg-white/95 backdrop-blur-sm p-8 md:p-12 text-center shadow-lg">
            <h2 class="font-brand text-3xl text-ocean mb-6">Ready to Book?</h2>
            <p class="text-gray-700 mb-8 text-lg">
              Check availability and reserve your room at Villa Allamanda, Eleuthera.
            </p>
            <a :href="bookingUrl" target="_blank" class="bg-coral hover:bg-coral/90 text-white px-8 py-3 font-medium tracking-wide inline-block transition-colors">
              Check Availability & Book
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
