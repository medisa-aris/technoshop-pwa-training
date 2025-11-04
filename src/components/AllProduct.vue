<template>
  <section class="best-sellers">
    <h1>All Products</h1>
    <hr>
    <div class="product-slider" id="all-products">
      <div class="container">
        <!-- Use v-for to loop over products -->
        <div
          v-for="product in products"
          :key="product.id"
          class="product"
        >
          <div class="product-picture">
            <img
              :src="product.image"
              :alt="`product: ${product.title}`"
              loading="lazy"
              width="250"
            />
          </div>

          <div class="product-info">
            <h5 class="categories">{{ product.category }}</h5>
            <h4 class="title">{{ product.title }}</h4>
            <h3 class="price">
              <span>US$ {{ product.price }}</span>
            </h3>
            <button @click="addToBag(product)">Add to bag</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// reactive array for products
const products = ref([])

// fetch products when component mounts
onMounted(async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  products.value = await response.json()

  // optional: simulate heavy work (not recommended in UI thread)
  // heavyComputation()
})

function addToBag(product) {
  alert(`Added "${product.title}" to bag!`)
}

// optional heavy function (moved outside UI thread in real apps)
// function heavyComputation() {
//   for (let i = 0; i < 10000000; i++) {
//     const temp = Math.sqrt(i) * Math.sqrt(i)
//   }
// }
</script>

<!-- <style scoped>
.best-sellers {
  text-align: center;
  margin-top: 2rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.product {
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 250px;
  padding: 1rem;
  transition: 0.3s;
}

.product:hover {
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.product-picture img {
  max-width: 100%;
}

button {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}
</style> -->
