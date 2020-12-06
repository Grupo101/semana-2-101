


<template>
  <div id="app">
    <div class="row justify-content-center mb-1">
      <h1 style="color: blue">Integrantes del equipo 101 Mision TIC</h1>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-center mb-1">
        <div class="card-group">
          <div class="col mt-1" v-for="(member1, index) of member" :key="index">
            <team-card :member="member1"></team-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import TeamCard from "./components/TeamCard.vue";

export default {
  name: "App",
  components: {
    TeamCard,
  },

  data() {
    return {
      titulo: "Integrantes Eguipo 101",
      member: [
        {
          codigo: "1",
          nombre: "Nelly Alexandra Medina Roja",
          descripcion:
            "Ingeniera Electronica de la Escuela Colombiana de ingenieria Julio Garavito con experiencia en infraestructuras de LANs, backbone, Wi-Fi y diseño. Entre sus pasatiempos esta ver peliculas, salir a dar paseos y leer.",
          rol: "Arquitecta de Software",
          imagen: "./alexandra.png",
          correo: "nelamero@hotmail.com",
        },
        {
          codigo: "2",
          nombre: "Jose Daniel Delgado Ballen",
          descripcion:
            "Ingeniero de sistemas de la Universidad de los Libertadores con experiencia en el area de comunicaciones electromagneticas. Entre sus pasatiempos esta resolver crucigramas y sudokus.",
          rol: "Desarrollador Frontend",
          imagen: "./jose.png",
          correo: "jddb26@gmail.com",
        },
        {
          codigo: "3",
          nombre: "Jimmy Javier Piamonte Cañón",
          descripcion:
            "Tecnologo en sistemas de la informacion de la Universidad del Tolima con experiencia en desarrollo .NET, web y escritorio. Entre sus pasatiempo esta montar bicicleta.",
          rol: "Desarrollador Backend",
          imagen: "./jimmy.png",
          correo: "jjpc56@hotmail.com",
        },
        {
          codigo: "4",
          nombre: "Juan Sebastian Loaiza Muñoz",
          descripcion:
            "Ingeniero quimico de la Univesidad Nacional de Colombia. Docente de quimica y matematicas de bachillerato. Hobbies: literatura y series de televisión",
          rol: "Tester",
          imagen: "./sebastian.png",
          correo: "sebastian.0315@hotmail.com",
        },
        {
          codigo: "5",
          nombre: "Joaquin Andres Alarcon Guevara",
          descripcion:
            "Ingeniero electronico de la Univesidad del Valle. Coordinador de investigacion y desarrollo en IGT S.A.S. Hobbies: video juegos",
          rol: "Analista de Software",
          imagen: "./joaquin.png",
          correo: "joaquin.alarcon@correounivalle.edu.co",
        },
        
      ],
    };
  },
};
</script>

