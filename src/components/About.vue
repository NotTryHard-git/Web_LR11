<template>
  <div class="about">
    <h1>{{ store.welcome }}</h1>
    <p>{{ store.features[1].title }}</p>
    <div class="team">
      <div v-for="member in store.team" :key="member.id" class="card feature-card">
        <h3>{{ member.name }}</h3>
        <p>{{ member.position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store'
const store = useCounterStore()
</script>

<style scoped>
.about {
  padding: 20px;
  text-align: center;
}

.team {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.team-member {
  margin: 0 15px;
}
</style>