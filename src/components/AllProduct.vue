<template>
  <section class="best-sellers">
    <h1>All Products</h1>
    <hr>

    <!-- 🔍 Filter Section -->
    <div class="filter">
      <label>
        Page:
        <input v-model.number="page" type="number" min="1" />
      </label>

      <label>
        Rows:
        <input v-model.number="row" type="number" min="1" />
      </label>

      <button @click="fetchProducts">Load Products</button>
    </div>

    <div class="product-slider" id="all-products">
      <div class="container">
        <!-- Use v-for to loop over products -->
        <div v-for="product in products" :key="product.id" class="product">
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

// Reactive variables
const products = ref([])
const page = ref(1)
const row = ref(20)

// 🧠 Fetch function
async function fetchProducts() {
  try {
    const response = await fetch(`http://localhost:7000/products?page=${page.value}&row=${row.value}`)
    const result = await response.json()
    products.value = result.data
    console.log(`Loaded ${products.value.length} products (page ${page.value})`)
  } catch (error) {
    console.error('Error fetching products:', error)
    alert('Failed to load products!')
  }
}

// Auto-fetch on mount
onMounted(fetchProducts)

// 🛍️ Add to bag example
function addToBag(product) {
  alert(`Added "${product.title}" to bag!`)
}
</script>

<style scoped>
.best-sellers {
  text-align: center;
  margin-top: 2rem;
}

.filter {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
}

.filter input {
  width: 70px;
  padding: 4px;
  text-align: center;
}

.filter button {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.filter button:hover {
  background: #2c8c66;
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
</style>
