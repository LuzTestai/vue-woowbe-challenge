<template>
    <router-link :to="{ name: 'comercio', params: { id: comercio.id }}"  class="card">
        <img :src="comercio.business.widescreen_picture" :alt="comercio.name" class="card-image" />
      <h1 class="card-name">{{ comercio.name }}</h1>
      <p class="card-description">{{comercio.reward}}</p>
    </router-link>

  </template>
  
  <script>

  export default {
    props: {
      comercio: {
        type: Object,
        required: true
      }
    },
  };
  </script>
  
  <style>

.card {
  width: calc(20% - 20px);
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ea52f8,  #1400ff69);
  padding: 20px 25px;
  box-sizing: border-box;
  margin: 25px;
  height: 260px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 10px 30px #ea52f854;
  border-radius: 15px;

}

.card:hover {
  background-color: #8104c9a3;
}
.card:hover h1, .card:hover p {
  color: azure;
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
    color: #4c0099;
  }
  </style>
  

  