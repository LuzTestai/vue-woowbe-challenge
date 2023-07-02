<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { RouterLink, RouterView, useRouter } from 'vue-router';

 const store = useStore();
 const router = useRouter();
const hasToken = computed(() => {
  return store.state.token !== null;
});

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const logout = () => {
      store.commit('clearToken');
      router.push('/login');
    };

</script>

<template>
  <header>
    <div v-if="hasToken">
      <nav>
        <router-link to="/">Home</router-link>
        <div class="dropdown">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrZlUKcY-OC6Q_2myDsbhPcPlyW8UOcZKtg&usqp=CAU" alt="Menú" @click="toggleMenu">
          <ul v-if="showMenu">
            <li @click="logout" >Cerrar Session</li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    background-color: var(--color-background-violett);
    align-items: center;
    display: flex;
  }
nav a {
  color: white;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: white;
  font-weight: 600 ;
}

nav a.router-link-exact-active:hover {
  font-size: 20px;
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown img {
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 18px;
}

.dropdown ul {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  padding: 0;
  list-style: none;
  background-color: var(--color-background-violett);
  border: 0.1px solid #fdf6ff;
  border-radius: 10px;
  min-width: 150px;
}

.dropdown ul li {
  padding: 8px 12px;
  cursor: pointer;
  color: azure;
}

.dropdown ul li:hover {
  background-color: #b01efaad;
  border: 1px solid #fdf6ff;
  border-radius: 10px;
}

.dropdown:hover ul {
  display: block;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    background-color: var(--color-background-violett);
  }
}
</style>
