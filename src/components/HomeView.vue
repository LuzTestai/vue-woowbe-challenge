<template>
  <div class="container">

    <div class="image-container">
      <img src="https://t3.ftcdn.net/jpg/04/90/55/04/240_F_490550404_0P8SLIcoRwqwXUYqJbUq1f52vOrFkLZS.jpg" alt="Imagen">
      <div class="overlay-text">
        <h1>En Woowbe,</h1>
         valoramos y apreciamos a nuestros clientes leales. Por eso, hemos creado un programa de fidelización diseñado exclusivamente para premiar tu confianza y apoyo continuo.
      </div>
    </div>
   <div class="second-part">
    <h1>Nuestros Comercios</h1>
    <div class="container-cards">
     
       <Card v-for="comercioItem in comercios" :key="comercioItem.id" :comercio="comercioItem" /> 

    </div>
  </div> 
  </div>
</template>

<script>
import Card from './CardComercios.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
  name: 'MiComponente',
  components: {
    Card,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('fetchComercios');
    });

    const comercios = computed(() => 
      store.state.comercios
    )

    return {
      comercios,
    };

  }
  };
</script>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Centra el contenedor horizontalmente en la página */
}
.second-part { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 0px 20px;
}
.second-part h1 {
  font-weight: 600;
  color: #6c32a6;
  text-transform: capitalize;
}

.image-container {
  position: relative;
  width: 100%;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
  opacity: 0.9;
}

.image-container .overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
}

.text {
  color: white;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}

.slider-container {
  width: 100%;
  margin-top: 20px;
  overflow-x: hidden;
}

.card-info-container {
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
