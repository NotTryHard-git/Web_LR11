<template>
  <div class="about">
    <h1>О нашей компании</h1>
    <p>Мы - команда профессионалов, работающая с 2010 года.</p>
    <div class="team">
      <div v-for="member in team" :key="member.id" class="card feature-card">
        <h3>{{ member.name }}</h3>
        <p>{{ member.position }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      team: [
        { id: 1, name: 'Иван Иванов', position: 'CEO'},
        { id: 2, name: 'Петр Петров', position: 'CTO' },
        { id: 3, name: 'Сидор Сидоров', position: 'Дизайнер' }
      ]
    }
  }
}
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