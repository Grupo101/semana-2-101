


<template>
  <div id="app">
    <h1> {{titulo}}  </h1>

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
      titulo:'Miembros del grupo'
    }
  }


}
</script>

