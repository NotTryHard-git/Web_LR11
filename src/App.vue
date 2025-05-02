<template>
  <div class="layout">
    <nav>
      <RouterLink to="/">Главная</RouterLink> 
      <RouterLink to="/about">О нас</RouterLink> 
      <RouterLink to="/services">Услуги</RouterLink> 
    </nav>
    <main class="page-container">
      <RouterView />
    </main>
    
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  padding: 20px;
  background: #42b983;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: white;
}

.page-container {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

footer {
  padding: 20px;
  background: #35495e;
  color: white;
  text-align: center;
}
</style>
