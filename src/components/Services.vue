<template>
  <div class="services">
    <h1>Наши услуги</h1>
    <ul>
      <li v-for="service in services" :key="service.id">
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
        <p>Цена: {{ service.price }} руб.</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const services = ref([
      { id: 1, name: 'Веб-разработка', description: 'Создание современных веб-приложений', price: 50000 },
      { id: 2, name: 'Мобильные приложения', description: 'Разработка под iOS и Android', price: 80000 },
      { id: 3, name: 'Дизайн', description: 'UI/UX дизайн для вашего продукта', price: 30000 }
    ])

    return {
      services
    }
  }
}
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