<template>
  <div id="app">

  
    <div class="container-fluid">  
      <h2  class="text-center"> NOTICIAS</h2>   


          <section-api> </section-api>

    </div>
  </div>


</template>

<script>

import SectionApi from './components/SectionApi.vue'

export default {
  name: 'App',
  components:{
    SectionApi
    
  }
}
</script>

