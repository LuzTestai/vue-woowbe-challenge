<template>
  <div class="container">

    <div class="image-container">
      <img src="https://img.freepik.com/fotos-premium/foto-estudio-manos-temblando-aisladas-sobre-fondo-violeta-azul-degradado-neon_155003-45860.jpg" alt="Imagen">
      <div class="overlay-text">
        <h1>En Woowbe,</h1>
         valoramos y apreciamos a nuestros clientes leales. Por eso, hemos creado un programa de fidelización diseñado exclusivamente para premiar tu confianza y apoyo continuo.
      </div>
    </div>
   <div class="second-part">
    <h1>Nuestros Comercios</h1>
    <div v-if="comercios" class="container-cards">
       <Card v-for="comercioItem in comercios" :key="comercioItem.id" :comercio="comercioItem" /> 
    </div>
    <div v-else>
        <SpinnerComponent />
      </div>
  </div> 
  </div>
</template>

<script>
import Card from './CardComercios.vue';
import SpinnerComponent from './SpinerComponent.vue';
import { useStore } from 'vuex';
import { computed, onMounted, watch } from 'vue';

export default {
  name: 'HomeView',
  components: {
    Card,
    SpinnerComponent,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      watch(
        () => store.state.token,
        (newValue, oldValue) => {
         (newValue || oldValue) &&  store.dispatch('fetchComercios')
        }
      )    
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
  margin: 0 auto; 
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
  width: 100%;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
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
