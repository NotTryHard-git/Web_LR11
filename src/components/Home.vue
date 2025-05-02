<template>
  <div class="page">
    <h1 class="page-title">Добро пожаловать!</h1>
    <div class="card">
      <p>Это главная страница нашего приложения</p>
    </div>
    <div class="features">
      <div v-for="feature in features" :key="feature.id" class="card feature-card">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const features = ref([
      { id: 1, title: 'Быстро', description: 'Наше приложение работает молниеносно' },
      { id: 2, title: 'Надежно', description: 'Гарантированная стабильность работы' },
      { id: 3, title: 'Удобно', description: 'Интуитивно понятный интерфейс' }
    ])

    return {
      features
    }
  }
}
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