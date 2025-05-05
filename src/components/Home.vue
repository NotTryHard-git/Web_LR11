<template>
  <div class="page">
    <h1 class="page-title">{{store.welcome}}</h1>
    <div class="card"></div>
    <div class="features">
      <div v-for="feature in store.features" :key="feature.id" class="card feature-card">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useCounterStore } from '@/store'
const store = useCounterStore()

</script>

<style scoped>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}
</style>