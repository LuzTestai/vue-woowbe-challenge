<template>
  <div v-if="comercio" class="container-comercio">
    <div class="container-detail-comercios">
     <img :src=comercio.business.widescreen_picture /> 
  <h1 class="title-comercio"> {{comercio.name }}</h1> 
  <p class="content-reward"> PREMIOS : 
    <span>{{ comercio.reward }}</span>
  </p> 
  <p class="days-weekend">
      </p>
      <div>
    <table class="table-days">
      <thead>
        <tr>
          <th  :colspan="daysOfWeek.length">Abre los días:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in calendar" :key="week">
          <td v-for="day in week" :key="day" :class="{ 'highlighted': convertWeekdays(comercio.weekdays).includes(day) }">
         {{ day }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="description-comercio">
      ¡Descubre nuestra increíble empresa que ofrece una amplia variedad de productos y servicios excepcionales! Estamos aquí para ofrecerte una experiencia única y satisfactoria que te dejará encantado.
    </p>
    <div>
  </div>
   </div>
  
  </div>
    <div v-else>
      <Spinner />
    </div>
  </template>

<script>


import { computed, onMounted , watch} from 'vue';
import Spinner from './SpinerComponent.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'DetailComercios',
  components: {
    Spinner
  },
  computed: {
    calendar() {
      const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      const calendar = [];

      let currentDayIndex = 0;
      while (currentDayIndex < daysOfWeek.length) {
        const week = [];
        for (let i = 0; i < daysOfWeek.length; i++) {
          week.push(daysOfWeek[currentDayIndex]);
          currentDayIndex++;
        }
        calendar.push(week);
      }

      return calendar;
    },
    },
  setup() {
    const route = useRoute();
    const store = useStore();

    const id = computed(() => route.params.id);
    const comercio = computed(() => store.state.comercioId);

    onMounted(() => {
      store.dispatch('fetchComercioID', id.value)
       
    });
    const convertWeekdays = (weekdays) => {
      const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      const convertedWeekdays = weekdays
        .filter((weekday) => weekday >= 1 && weekday <= 7)
        .map((weekday) => daysOfWeek[weekday - 1]);

      return convertedWeekdays;
    };

    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
   
    watch(
          () => store.state.comercioId,
          (newValue, oldValue) => {
          if(newValue || oldValue){
            comercio.value = newValue
          }
          }
        ) 

    return {
    comercio,
    daysOfWeek,
    convertWeekdays
    }
  },
};
</script>

<style>
.container-comercio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
}
.container-detail-comercios {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 80%;
  padding: 85px;
  box-shadow: 0px 10px 30px #7e52f8d9;
  border-radius: 15px;
  align-items: center;
}
.container-detail-comercios img {
  max-width: 100%;
}
.title-comercio {
  padding: 40px 0px;
    font-weight: 600;
    text-transform: capitalize;
    color: #5e00aa;
}

.content-reward {
  padding: 10px 0px;
  font-size: 20px;
  font-weight: 600;
}
.content-reward span{
  font-weight: 600;
  font-size: 50px;
  color: #5e00aa;
}

.days-weekend span{
  font-weight: 400;
  font-size: 20px;
  padding: auto;
} 
.highlighted {
  background-color: rgb(111, 255, 0);
}

.description-comercio {
  padding: 50px;
  border: 1px solid rgb(200, 0, 255);
  font-size: large;
  margin-top: 100px;
  transition: transform 0.3s ease;
  background: linear-gradient(135deg, #ea52f8,  #1400ff69);
  color: white;
}
.description-comercio:hover {
  transform: scale(1.1);
}

.table-days {
  border: 1px solid #b84aea45;
}
.table-days td {
  padding: 15px;
}
.table-days th {
  background: #9d00ff1c;
  padding: 15px;
}
</style>