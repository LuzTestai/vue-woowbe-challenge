<template>
    <div class="card">
        <img :src="comercio.business.widescreen_picture" :alt="comercio.name" class="card-image" />
      <h1 class="card-name">{{ comercio.name }}</h1>
      <p class="card-description">{{comercio.reward}}</p>
    </div>

  </template>
  
  <script>
  import { onMounted } from 'vue';

  export default {
    props: {
      comercio: {
        type: Object,
        required: true
      }
    },
    setup(props) {
    onMounted(() => {
      console.log('Comercio:', props.comercio);
    });
  }
  };
  </script>
  
  <style>

.card {
  width: calc(20% - 20px); /* Tamaño de cada tarjeta (25% de ancho menos el espacio entre ellas) */
  margin-bottom: 20px;
  background-color: #d08ff7a3;
  padding: 20px;
  box-sizing: border-box;
  margin: 25px;
  height: 260px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

}

@media (max-width: 992px) {
  .card {
    width: calc(33.33% - 10px); /* Cambia el tamaño de las tarjetas en pantallas más pequeñas */
  }
}

@media (max-width: 768px) {
  .card {
    width: calc(50% - 10px); /* Cambia el tamaño de las tarjetas en pantallas aún más pequeñas */
  }
}

@media (max-width: 576px) {
  .card {
    width: 100%; /* En pantallas muy pequeñas, las tarjetas ocupan todo el ancho */
  }
}
  .card-image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .card-name {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .card-description {
    font-size: 14px;
    color: gray;
  }
  </style>
  