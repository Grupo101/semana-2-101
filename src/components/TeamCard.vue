<template>
  <div>
    <h3>Targetas miembros grupo 101</h3>
    <div class="container-fluid">
      <div class="card-group mt-5">
        <div class="mt-3" v-for="(item, index) of miembros" :key="item.id">
          <!-- ,index -->
          <div class="card">
            <div class="card-header">
              <img
                class="card-img-top img-fluid rounded-circle"
                v-bind:src="item.index"
                alt="Card image"
              />
            </div>

            <div class="card-body bg-info text-white text-center">
              <p style="font-size: 26px">Miembro {{ item.codigo }}</p>
              <p>
                {{ item.rol }}
              </p>

              <p style="font-size: 24px">
                {{ item.nombre }}
              </p>
              <p>
                {{ item.descripcion }}
              </p>
            </div>
            <div class="card-footer text-center bg-warning">Grupo 101</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>8/8




<style scoped>
</style>


