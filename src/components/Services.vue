<template>
  <div class="services">
    <h1>{{ store.features[0].title }}</h1>
    <ul>
      <li v-for="service in store.services" :key="service.id">
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
        <p>Цена: {{ service.price }} руб.</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store'
const store = useCounterStore()
</script>

<style scoped>
.services {
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}
</style>