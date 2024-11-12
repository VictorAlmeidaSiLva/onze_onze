<template>
    <div class="container-fluid bg-white p-0">
      <!-- Spinner Start -->
      <!-- <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
              <span class="sr-only">Loading...</span>
          </div>
      </div> -->
      <!-- Spinner End -->
  
      <!-- Navbar & Hero Start -->
      <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href="" class="navbar-brand p-0 d-flex align-items-center">
            <img src="./assets/logo.png" alt="logo" style="height: auto; width: auto;" />
            <h1 class="text-primary m-0 ms-2">Onze & Onze Premium</h1>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0 pe-4">
              <a href="index.html" class="nav-item nav-link active">Principal</a>
              <a href="about.html" class="nav-item nav-link">Sobre</a>
              <a href="service.html" class="nav-item nav-link">Serviços</a>
              <a href="menu.html" class="nav-item nav-link">Menu</a>
              <a href="contact.html" class="nav-item nav-link">Contato</a>
            </div>
          </div>
        </nav>
  
        <div class="container-fluid py-5 bg-dark hero-header mb-5">
          <div class="container my-5 py-5">
            <div class="row align-items-center g-5">
              <div class="col-lg-6 text-center text-lg-start">
                <h1 class="display-3 text-white animated slideInLeft">Onze & Onze Premium<br></h1>
                <p class="text-white animated slideInLeft mb-4 pb-2">Desde 1985 ONZE & ONZE PREMIUM é a mais tradicional casa de carnes de Bauru, sendo reconhecida pela excelência de seu produtos, e principalmente pela qualidade, sabor e frescor de suas carnes.</p>
              </div>
              <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                <img class="img-fluid" src="img/hero.png" alt="">
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <!-- Navbar & Hero End -->
  
      <!-- Service Start -->
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row g-4 justify-content-center">
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item rounded pt-3">
                <div class="p-4 text-center">
                  <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                  <h5>Carnes de Qualidade</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item rounded pt-3">
                <div class="p-4 text-center">
                  <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                  <h5>Faça seu pedido</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Service End -->
  
      <!-- About Start -->
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6">
              <div class="row g-3">
                <div class="col-6 text-start">
                  <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="@/assets/produto1.jpeg">
                </div>
                <div class="col-6 text-start">
                  <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="@/assets/produto2.jpg" style="margin-top: 25%;">
                </div>
                <div class="col-6 text-end">
                  <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="@/assets/produto3.jpeg">
                </div>
                <div class="col-6 text-end">
                  <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="@/assets/produto4.jpeg">
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h5 class="section-title ff-secondary text-start text-primary fw-normal">Sobre nós</h5>
              <h1 class="mb-4">Bem vindo  <i class="fa fa-utensils text-primary me-2"></i>Onze & Onze</h1>
              <p class="mb-4">A ONZE & ONZE PREMIUM possui equipe treinada e especializada para atende-los de forma diferenciada, e garantir a qualidades dos cortes que você levará para a sua casa. Faça o seu churrasco com a gente, e conheça nosso alto padrão de qualidade e atendimento. Venha nos conhecer, estamos esperando por você! </p>
              <div class="row g-4 mb-4">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">40</h1>
                    <div class="ps-4">
                      <p class="mb-0">Anos de</p>
                      <h6 class="text-uppercase mb-0">Experiência</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->
  
      <!-- Menu Start -->
      <div class="container-fluid py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">Menu</h5>
            <h1 class="mb-5">Tipos de Carnes</h1>
          </div>
          <MenuTabs :tabs="menuTabs" />
        </div>
      </div>
      <div class="tab-content">
        <div v-for="tab in menuTabs" :key="tab.href" :id="tab.href.substring(1)" class="tab-pane fade show p-0" :class="{ active: tab.active }">
          <div class="container">
            <div class="row g-4 justify-content-center">
              <MenuItem
                v-for="item in tab.items"
                :key="item.id"
                :imageSrc="item.imagem"
                :itemName="item.nome"
                :itemPrice="item.valor"
                :itemDescription="item.descricao"
              />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Menu End -->
  
      <!-- Footer Start -->
      <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Endereço:</h4>
              <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Rua Padre Anchieta 16-34 Jardim</p>
              <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>Bela Vista Bauru, SP</p>
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/onzeonzepremium/"><i class="fab fa-instagram"></i></a>
                <a class="btn btn-outline-light btn-social" href="https://api.whatsapp.com/send?phone=14997324507"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Horário de funcionamento</h4>
              <h5 class="text-light fw-normal">Terça-feira - Sábado</h5>
              <p>07:00 – 19:00</p>
              <h5 class="text-light fw-normal">Domingo</h5>
              <p>07:00 – 13:00</p>
              <h5 class="text-light fw-normal">Segunda</h5>
              <p>07:00 – 13:00, 15:00 - 19:00</p>
            </div>
            <div class="col-lg-6 col-md-12">
              <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Localização</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.556066148936!2d-49.08037294758158!3d-22.311598592429018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf664cf2854dc3%3A0x6ed0fd7f6f38ca3f!2sBoutique%20de%20Carnes%20Onze%20%26%20Onze!5e0!3m2!1spt-BR!2sbr!4v1729323247805!5m2!1spt-BR!2sbr"
                width="100%" height="450" style="border: 0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer End -->
  
      <!-- Back to Top -->
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
  </template>
  
  <script>
  import MenuTabs from './components/MenuTabs.vue';
  import MenuItem from './components/MenuItem.vue';
  import MenuRepository from './repositories/MenuRepository';
  
  export default {
    name: 'App',
    components: {
      MenuTabs,
      MenuItem
    },
    data() {
      return {
        menuTabs: [
          {
            name: 'Cortes Tradicionais',
            href: '#tab-1',
            active: true,
            items: []
          },
          {
            name: 'Cortes Nobres',
            href: '#tab-2',
            active: false,
            items: []
          },
          {
            name: 'Cortes Suínos',
            href: '#tab-3',
            active: false,
            items: []
          },
          {
            name: 'Cortes de Frango',
            href: '#tab-4',
            active: false,
            items: []
          },
          {
            name: 'Linguiças',
            href: '#tab-5',
            active: false,
            items: []
          },
          {
            name: 'Espetinhos',
            href: '#tab-6',
            active: false,
            items: []
          },
          {
            name: 'Carnes Recheadas',
            href: '#tab-7',
            active: false,
            items: []
          },
          {
            name: 'Hambúrguer',
            href: '#tab-8',
            active: false,
            items: []
          }
        ]
      }
    },
    async created() {
      try {
        const menuItems = await MenuRepository.fetchMenuItems();
        this.menuTabs.forEach(tab => {
          tab.items = menuItems.filter(item => item.tipo === tab.name);
        });
      } catch (error) {
        console.error('Erro ao buscar itens do menu:', error);
      }
    }
  }
  </script>
  
  <style>
  /* Adicione estilos globais aqui, se necessário */
  </style>