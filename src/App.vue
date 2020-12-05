


<template>
  <div id="app">
    <!-- <h1> {{titulo}}  </h1> -->

    <TeamCard></TeamCard>

  </div>
</template>





<script>

import TeamCard from './components/TeamCard.vue'

export default {
  name: 'App',
  components:{
  TeamCard
  // MisTareas  
  },

  data(){
    return{
      member:[ 
        {
          codigo:"1",
          nombre: "Nelly Alexandra Medina Roja",
          descripcion:"Programador WEB1",
          rol:"Arquitecta de Software",
          image:"../src/assets/jose.png" 
        },
        {
          codigo:"2",
          nombre: "Jose Daniel Delgado Ballen",
          descripcion:"Programador WEB2",
          rol:"Desarrollador Frontend",
          image:"../src/assets/jose.png" 
          },
          {codigo:"3",
          nombre: "Jimmy Javier Piamonte Cañón",
          descripcion:"Programador WEB3",
          rol:"Desarrollador Backend",
          image:"../src/assets/jimmy.png" 
          },
          {codigo:"4",
          nombre: "Joaquin Andres AlarconGuevara",
          descripcion:"Programador WEB4",
          rol:"Analista de Software",
          image:"../src/assets/jose.png" 
          },
          {codigo:"5",
          nombre: "Juan Sebastian Loaiza Muñoz",
          descripcion:"Programador WEB4",
          rol:"Tester",
          image:"../src/assets/jose.png" 
          }
        ]
          
          
    }
  }


}
</script>

