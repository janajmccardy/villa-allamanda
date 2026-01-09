<script setup lang="ts">
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-8 md:p-12 shadow-lg">
          <h1 class="font-brand text-4xl md:text-5xl mb-4">Information & Tips</h1>
          <p class="text-white/80 text-lg">
            Everything you need to know for your visit
          </p>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex justify-center py-4">
      <div class="w-24 h-1 bg-gold"></div>
    </div>

    <!-- Info Content -->
    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto space-y-8">

        <!-- Intro -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">About Eleuthera</h2>
          <p class="text-white/90 leading-relaxed">
            Eleuthera! One of the 700 islands and cays in our beautiful archipelago, The Bahamas.
            With a population of around 8,000, Eleuthera is long and narrow with rolling hills.
            Flanked by several other smaller populated islands, we refer to Eleuthera as the mainland
            and our island is 110 miles in length and 2 miles at its widest point.
          </p>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-coral"></div>
        </div>

        <!-- Language & Currency -->
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
            <h2 class="font-brand text-2xl mb-4">Language</h2>
            <p class="text-white/90">
              English is our official language and is spoken by a great majority of the residents.
            </p>
          </div>

          <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
            <h2 class="font-brand text-2xl mb-4">Currency</h2>
            <ul class="space-y-2 text-white/90">
              <li>• The Bahamian dollar (BSD)</li>
              <li>• The U.S. dollar (USD) is used extensively and is valued at 1:1 with the Bahamian dollar</li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Taxes & Time Zone -->
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
            <h2 class="font-brand text-2xl mb-4">Taxes</h2>
            <ul class="space-y-2 text-white/90">
              <li>• Value Added Tax (VAT) at 10% is added to the cost of all goods and services</li>
              <li>• Gratuities are normally charged in the hospitality industry with a standard rate being 15%</li>
            </ul>
          </div>

          <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
            <h2 class="font-brand text-2xl mb-4">Time Zone</h2>
            <p class="text-white/90">
              Eastern Standard Time and Daylight Saving Time. Spring forward one hour in spring,
              fall back one hour in fall.
            </p>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Climate & Weather -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Climate & Weather</h2>
          <div class="space-y-3 text-white/90">
            <p><strong class="text-gold">Climate:</strong> Subtropical Maritime</p>
            <p><strong class="text-gold">Seasons:</strong> Summer (wet, May–September) and Winter (dry, October–April)</p>
            <p>Hot summer days can occur in November, December, and before May.</p>
            <p>Temperature is balmy year-round with near-constant trade winds from the east.</p>
            <p>Winter months have comfortably cool weather due to cold fronts from the north.</p>
            <div class="grid md:grid-cols-2 gap-4 mt-4 p-4 bg-white/10 rounded">
              <div>
                <p class="font-medium text-gold">May to November</p>
                <p class="text-white/80">Daytime ~80°F (26°C)</p>
              </div>
              <div>
                <p class="font-medium text-gold">December to April</p>
                <p class="text-white/80">Daytime ~70°F (21°C)</p>
              </div>
            </div>
            <p class="text-gold font-medium mt-4">Hurricane season: June 1 to November 30</p>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Business Hours -->
        <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Business Hours</h2>
          <ul class="space-y-2 text-white/90">
            <li>• Most shops/businesses: Monday–Saturday, 9:00 AM – 5:00 PM</li>
            <li>• Government offices: Weekdays only</li>
            <li>• Food stores: Usually open Sundays with reduced hours, generally closed before 11:00 AM</li>
          </ul>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Law Enforcement -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Law Enforcement</h2>
          <p class="text-white/90 mb-3">
            Royal Bahamas Police Force stationed throughout the island.
          </p>
          <p class="font-medium">
            Governor's Harbour station (24/7): <span class="text-gold">911</span> or <span class="text-gold">919</span>
          </p>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Health Services -->
        <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Health Services</h2>
          <ul class="space-y-2 text-white/90">
            <li>• Government clinics throughout island, open weekdays 9:00 AM – 5:00 PM</li>
            <li>• Clinics with doctors in: Governor's Harbour, Rock Sound, Harbour Island, Spanish Wells</li>
            <li>• Private doctor services available weekdays and Saturday mornings</li>
            <li>• Nearest hospitals (public and private) in Nassau, New Providence (25 min flight)</li>
            <li>• Emergency medical airlift to Nassau can be arranged (upfront payment usually required)</li>
            <li>• Pharmacy services in Spanish Wells (accessible by ferry)</li>
          </ul>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Transportation & Driving -->
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
            <h2 class="font-brand text-2xl mb-4">Transportation</h2>
            <ul class="space-y-2 text-white/90">
              <li>• Rental car highly recommended</li>
              <li>• Taxi services expensive beyond airport/seaport transfers (not recommended)</li>
              <li>• No public transportation on Eleuthera</li>
            </ul>
          </div>

          <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
            <h2 class="font-brand text-2xl mb-4">Driving</h2>
            <ul class="space-y-2 text-white/90">
              <li class="text-white font-medium">• Drive on the LEFT in The Bahamas</li>
              <li>• Roads are long, winding with hills and valleys</li>
              <li>• Foreign driver's license valid for car rental</li>
              <li>• Minimum rental age: 25 years</li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Communication -->
        <div class="bg-coral/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Communication</h2>
          <ul class="space-y-2 text-white/90">
            <li>• Modern telephone (land and mobile), cable TV, internet, radio</li>
            <li>• Post offices in each town (no mail delivery service)</li>
            <li>• FedEx and DHL courier services available</li>
          </ul>
        </div>

        <!-- Divider -->
        <div class="flex justify-center py-4">
          <div class="w-24 h-1 bg-gold"></div>
        </div>

        <!-- Electricity -->
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
          <h2 class="font-brand text-2xl mb-4">Electricity</h2>
          <p class="text-white/90">
            Same as USA and Canada: <strong class="text-gold">120/240 volt, 60 Hz</strong>
          </p>
        </div>

      </div>
    </section>
  </div>
</template>
