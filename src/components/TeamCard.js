Vue.component('TeamCard',{
    template:
    `
    <div >
    <h3> Targetas miembros</h3>
    <div class="container-fluid">
        <div class="card-group mt-5">

            <div class=" mt-3 " v-for="(item,index) of miembros" :key="item.id">
                <div class="card">
                    <div class="card-header">
                        <img class="card-img-top img-fluid rounded-circle" src="{{item.image}}" alt="Card image">
       
                    </div>
                    
                    <div class="card-body bg-info text-white text-center ">
                        <p style="font-size: 26px;">
                            Miembro {{item.codigo}}
                        </p>
                        <p>
                            {{item.rol}}
                        </p>

                        <p style="font-size: 24px;">
                            {{item.nombre}}
                        </p>
                        <p>
                            {{item.descripcion}}
                        </p>


                    </div>
                    <div class="card-footer text-center bg-warning  ">
                        Grupo 101
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    
    `,

    data() {
        return{
        titulo: "Crue con veu",
        miembros: [{codigo:"1",nombre: "Nelly Alexandra Medina Roja",descripcion:"Programador WEB1",rol:"Arquitecta de Software",image:"../src/assets/alexandrajpeg" },
                   {codigo:"2",nombre: "Jose Daniel Delgado Ballen",descripcion:"Programador WEB2",rol:"Desarrollador Frontend",image:"../src/assets/jose.png" },
                   {codigo:"3",nombre: "Jimmy Javier Piamonte Cañón",descripcion:"Programador WEB3",rol:"Desarrollador Backend",image:"../src/assets/jimmy.png" },
                   {codigo:"4",nombre: "Joaquin Andres AlarconGuevara",descripcion:"Programador WEB4",rol:"Analista de Software",image:"../src/assets/jose.png" },
                   {codigo:"5",nombre: "Juan Sebastian Loaiza Muñoz",descripcion:"Programador WEB4",rol:"Tester",image:"../src/assets/jose.png" },
                ],
        // nuevaTarea: '',
        // checked: false
            }

        //   siguen los metodos  
    }

})