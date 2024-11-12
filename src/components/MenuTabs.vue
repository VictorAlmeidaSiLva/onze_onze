<template>
    <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
      <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
        <li v-for="tab in tabs" :key="tab.name" class="nav-item">
          <a :class="['d-flex align-items-center text-start mx-3 pb-3', { active: tab.active }]" :data-bs-toggle="'pill'" :href="tab.href">
            <i class="fa fa-utensils fa-2x text-primary"></i>
            <div class="ps-3">
              <h6 class="mt-n1 mb-0">{{ tab.name }}</h6>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuTabs',
    props: {
      tabs: {
        type: Array,
        required: true,
        default: () => []
      }
    }
  }
  </script>
  
  <style scoped>
  /* Adicione estilos específicos do componente aqui, se necessário */
  </style>