<template>
    <div class="col-lg-6">
      <div class="d-flex align-items-center">
        <img class="flex-shrink-0 img-fluid rounded" :src="imageSrc" alt="" style="width: 80px;">
        <div class="w-100 d-flex flex-column text-start ps-4">
          <h5 class="d-flex justify-content-between border-bottom pb-2">
            <span>{{ itemName }}</span>
            <span class="text-primary">{{ itemPrice }}</span>
          </h5>
          <small class="fst-italic">{{ itemDescription }}</small>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuItem',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      itemName: {
        type: String,
        required: true
      },
      itemPrice: {
        type: String,
        required: true
      },
      itemDescription: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* Adicione estilos específicos do componente aqui, se necessário */
  </style>