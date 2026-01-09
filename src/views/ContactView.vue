<script setup lang="ts">
import { ref } from 'vue'

const whatsappUrl = 'https://wa.me/12423597766'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = () => {
  // TODO: Implement form submission with Formspree or similar
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! We will get back to you soon.')
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="py-16 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <div class="bg-ocean/90 backdrop-blur-sm text-white p-8 md:p-12 shadow-lg">
          <h1 class="font-brand text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p class="text-white/80 text-lg">
            We'd love to hear from you
          </p>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex justify-center py-4">
      <div class="w-24 h-1 bg-gold"></div>
    </div>

    <!-- Contact Content -->
    <section class="py-16 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 md:p-8 shadow-lg">
              <h2 class="font-brand text-2xl mb-6">Get in Touch</h2>

              <div class="space-y-6">
                <!-- Phone -->
                <div>
                  <h3 class="font-medium text-gold mb-3">Phone</h3>
                  <div class="space-y-2">
                    <div>
                      <a href="tel:+12423323934" class="text-white hover:text-gold transition-colors text-lg">
                        (242) 332-3934
                      </a>
                      <p class="text-white/60 text-sm">Local</p>
                    </div>
                    <div>
                      <a href="tel:+18775166639" class="text-white hover:text-gold transition-colors text-lg">
                        (877) 516-6639
                      </a>
                      <p class="text-white/60 text-sm">Toll Free (USA & Canada)</p>
                    </div>
                  </div>
                </div>

                <!-- WhatsApp -->
                <div>
                  <h3 class="font-medium text-gold mb-2">WhatsApp</h3>
                  <a
                    :href="whatsappUrl"
                    target="_blank"
                    class="inline-flex items-center gap-2 text-white hover:text-gold transition-colors"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    (242) 359-7766
                  </a>
                </div>

                <!-- Email -->
                <div>
                  <h3 class="font-medium text-gold mb-2">Email</h3>
                  <a href="mailto:info@villaallamanda.com" class="text-white hover:text-gold transition-colors">
                    info@villaallamanda.com
                  </a>
                </div>

                <!-- Address -->
                <div>
                  <h3 class="font-medium text-gold mb-2">Address</h3>
                  <p class="text-white/90">
                    Villa Allamanda<br>
                    Cigatoo Estates<br>
                    Governor's Harbour<br>
                    Eleuthera, Bahamas
                  </p>
                </div>
              </div>
            </div>

            <!-- Directions -->
            <div class="bg-ocean/90 backdrop-blur-sm text-white p-6 shadow-lg">
              <h3 class="font-brand text-lg mb-3">Driving Directions</h3>
              <p class="text-white/80 text-sm leading-relaxed">
                From Governor's Harbour Airport, travel south on Queen's Highway for approximately
                8 minutes. Turn left onto Casuarina Avenue (opposite our sign), travel up the hill,
                and turn left at Jacaranda Drive. Villa Allamanda is the second property on the left.
              </p>
              <RouterLink to="/getting-here" class="text-gold hover:text-white transition-colors text-sm font-medium mt-3 inline-block">
                Full Directions →
              </RouterLink>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white/95 backdrop-blur-sm p-8 shadow-lg">
            <h2 class="font-brand text-2xl text-ocean mb-6">Send a Message</h2>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-2 border border-gray-300 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-colors"
                >
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-colors"
                >
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  class="w-full px-4 py-2 border border-gray-300 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-colors"
                >
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-2 border border-gray-300 focus:border-ocean focus:ring-1 focus:ring-ocean outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" class="btn-primary bg-gold hover:bg-gold/90 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
