<template>
  <div id="app">
    <top-banner></top-banner>
    <div  id="new" class="container-fluid">
      <h2 class="text-center pt-5 mb-3">NOTICIAS</h2>

      <section-api> </section-api>
    </div>

    <div id="equipo" class="container-fluid  pb-5  pt-2">
      <h2 class="text-center mt-5 pb-5">INTEGRANTES EQUIPO 101 MISIÓN TIC</h2>
      <div class="card-group pt-3 ">
        <div class="row row-eq-height">
          <div class="col-sm-1"></div>
          <div
            class="col-sm-12 col-lg-2 p-1"
            v-for="(member1, index) of member"
            :key="index"
          >
            <team-card :member="member1"></team-card>
          </div>
          <div class="col-sm-1"></div>
        </div>
      </div>
    </div>
    <div class="container-fluid pt-5">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import TeamCard from "./components/TeamCard.vue";
import PageFooter from "./components/PageFooter.vue";
import SectionApi from "./components/SectionApi.vue";
import TopBanner from "./components/TopBanner.vue";

export default {
  name: "App",
  components: {
    TopBanner,
    TeamCard,
    SectionApi,
    PageFooter,
  },

  data() {
    return {
      titulo: "Integrantes Eguipo 101",
      member: [
        {
          codigo: "1",
          nombre: "Nelly Alexandra Medina Rojas",
          descripcion:
            "Ingeniera Electronica de la Escuela Colombiana de ingenieria Julio Garavito con experiencia en infraestructuras de LANs, backbone, Wi-Fi y diseño. Entre sus pasatiempos esta ver peliculas, salir a dar paseos y leer.",
          rol: "Arquitecta de Software",
          image: "./alexandra.png",
        },
        {
          codigo: "2",
          nombre: "José Daniel Delgado Ballen",
          descripcion:
            "Ingeniero de sistemas de la Universidad de los Libertadores con experiencia en el area de comunicaciones electromagneticas. Entre sus pasatiempos esta resolver crucigramas y sudokus.",
          rol: "Desarrollador Frontend",
          image: "./jose.png",
        },
        {
          codigo: "3",
          nombre: "Jimmy Javier Piamonte Cañón",
          descripcion:
            "Tecnologo en sistemas de la informacion de la Universidad del Tolima con experiencia en desarrollo .NET, web y escritorio. Entre sus pasatiempo esta montar bicicleta.",
          rol: "Desarrollador Backend",
          image: "./jimmy.png",
        },
        {
          codigo: "4",
          nombre: "Juan Sebastian Loaiza Muñoz",
          descripcion:
            "Ingeniero quimico de la Univesidad Nacional de Colombia. Docente de quimica y matematicas de bachillerato. Hobbies: literatura y series de televisión",
          rol: "Tester",
          image: "./sebastian.png",
        },
        {
          codigo: "5",
          nombre: "Joaquin Andres Alarcon Guevara",
          descripcion:
            "Ingeniero electronico de la Univesidad del Valle. Coordinador de investigacion y desarrollo en IGT S.A.S. Hobbies: video juegos",
          rol: "Analista de Software",
          image: "./joaquin.png",
        },
      ],
    };
  },
};
</script>
