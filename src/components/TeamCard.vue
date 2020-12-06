<template>

             


                <div  class="card text-center text-white bg-info" style="border-radius:20px;">
                    <div class="d-flex justify-content-center p-2"> 
                        <img  :src='member.image' class="rounded-circle" alt="imagen miembro">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-dark" style="font-weight:bold">{{member.nombre}}</h5>
                        <p class="card-text" style="color:rgb(255,210,200);"><span> Rol: </span>{{member.rol}}</p>
                        <p class="card-text" style="color:rgb(255,210,200);"><span> Código: </span> {{member.codigo}}</p>
                        <p class="card-text text-justify" style="color:rgb(0,0,139);font-size: 17px;">{{member.descripcion}}</p>
                        
                    </div>
                    <div class="card-footer " > 
                        <small class=" text-dark" style="font-weight:bold">grupo_101@misiontic.com.co</small> 
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


