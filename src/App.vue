<template>
  <AppHeader />
  <AppHero />
  <AppDiscount />
  <BestSeller />
  <AllProduct />
  <EmailSubscribe />
  <AppFooter />
</template>

<script>
import AppHeader from './components/Header.vue'
import AppHero from './components/Hero.vue'
import AppDiscount from './components/Discount.vue'
import BestSeller from './components/BestSeller.vue'
import AllProduct from './components/AllProduct.vue'
import EmailSubscribe from './components/EmailSubscribe.vue'
import AppFooter from './components/Footer.vue'
// import { onMounted } from 'vue'

// onMounted(() => {
//   const script = document.createElement('script')
//   script.src = './assets/js/cookie-consent.js'
//   script.type = 'text/javascript'
//   script.charset = 'UTF-8'
//   document.body.appendChild(script)
// })

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHero,
    AppDiscount,
    BestSeller,
    AllProduct,
    EmailSubscribe,
    AppFooter
  }
}
</script>
