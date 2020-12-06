<template>

             <div>


                <div  class="card text-center text-white bg-info" style="border-radius:20px;">
                    <div class="d-flex justify-content-center p-2"> 
                        <img  :src='member.imagen' class="rounded-circle" alt="imagen miembro">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-dark" style="font-weight:bold">{{member.nombre}}</h5>
                        <p class="card-text"><span> Rol: </span>{{member.rol}}</p>
                        <p class="card-text"><span> Codigo: </span> {{member.codigo}}</p>
                        <p class="card-text text-justify">{{member.descripcion}}</p>
                        
                    </div>
                    <div class="card-footer " > 
                        <small class=" text-dark" style="font-weight:bold">{{member.correo}}</small> 
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


