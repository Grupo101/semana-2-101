<template>
  <div>
    <h3>Targetas miembros grupo 101</h3>
    <div class="container"> 
      <div class="card-deck">
        <!-- <div class="mt-3" v-for="(item) of miembros" :key="item.id"> -->
          <!-- ,index -->
          
          <p> pase por teamcardsss</p>
          <div class="card" >
             <img
                class="card-img-top rounded-circle"
                v-bind:src="member.image"
                alt="Card image" />
            <!-- <div class="card-header">
              <img
                class="card-img-top img-fluid rounded-circle"
                v-bind:src="item.image"
                alt="Card image"
              />
            </div> -->
            
            <div class="card-body bg-info text-white text-center">
              <p style="font-size: 26px">Miembro {{ item.codigo }}</p>
              <p>
                 member.rol 
              </p>

              <p style="font-size: 24px">
                {{ member.nombre }}
              </p>
              <p>
                {{ member.descripcion }}
              </p>
            </div>
            <div class="card-footer text-center bg-warning">Grupo 101</div>
          </div>
        <!-- </div> -->
      </div>
    </div> 
  </div>
  
</template>



<script>
export default {
  name: "TeamCard",
  props: ["member"],
}
</script>




<style scoped>

</style>


