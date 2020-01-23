$(document).ready(function(){
    $.ajax({
        type:"GET",
        
       	url: "http://tres.fpz1920.com/controller/cMostrarCategorias.php", 
       	dataType:"JSON",
    	success: function(result){ 
            htmlcategorias="";
            htmlequipos="";
            for (let cat = 0; cat < result.length; cat++) {
                htmlcategorias+=`<a class="nav-link" id="v-pills-home-tab" data-toggle="pill"
                href="#v-pills-`+result[cat].nombre+`" role="tab" aria-controls="v-pills-home"
                aria-selected="true">`+result[cat].nombre+`</a>`;

                htmlequipos+=`<div class="tab-pane fade" id="v-pills-`+result[cat].nombre+`" role="tabpanel"
                aria-labelledby="v-pills-profile-tab">

                <h2><b>`+result[cat].nombre+`</b></h2>
                <br>
                <div class="row">
                    <!--CARROUSEL CADETE-->
                    <div class="col-12 col-lg-9">
                        <div id="carouselCadete" class="carousel slide"
                            data-ride="carousel">
                            
                            </div>
                            <a class="carousel-control-prev" href="#carouselCadete"
                                role="button" data-slide="prev"> <span
                                class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                                class="sr-only">Previous</span>
                            </a> <a class="carousel-control-next" href="#carouselCadete"
                                role="button" data-slide="next"> <span
                                class="carousel-control-next-icon" aria-hidden="true"></span> <span
                                class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <!--TEXTO CADETE-->
                    <div class="col-12 col-lg-3">
                        <h4>Equipos `+result[cat].nombre+`</h4>
                        <ul class="listEquipos">
                        `;
                        for (let equipo = 0; equipo < result[cat].listEquipos.length; equipo++) {
                            ;
                            if (result[cat].listEquipos[equipo].femenino_masculino=="F"){
                                htmlequipos+=`<li class="equipoItem"> <span>`+result[cat].nombre+` Femenino</span>`
                            }
                            else{
                                htmlequipos+=`<li class="equipoItem"><span>`+result[cat].nombre+` Masculino</span>`
                            }
                            // imprimir los miembros de cada equipo
                            if (result[cat].listEquipos[equipo].listJugadores.length!=0){
                                htmlequipos+="<ul class='listaDatos'> <h5 class='hDatos'><li>Jugadores</li></h5><ul>";
                                for (let jugador = 0; jugador < result[cat].listEquipos[equipo].listJugadores.length; jugador++) {
                                    htmlequipos+="<li>"+result[cat].listEquipos[equipo].listJugadores[jugador].objUser.name+", "+result[cat].listEquipos[equipo].listJugadores[jugador].objUser.surname+"</li>";
                                    
                                }



                                htmlequipos+="</ul>"
                            }
                            if (result[cat].listEquipos[equipo].listEntrenadores.length!=0){
                                htmlequipos+="<h5 class='hDatos'><li>Entrenadores</li></h5><ul>";
                                for (let entrenador = 0; entrenador < result[cat].listEquipos[equipo].listEntrenadores.length; entrenador++) {
                                    htmlequipos+="<li>"+result[cat].listEquipos[equipo].listEntrenadores[entrenador].objUser.name+", "+result[cat].listEquipos[equipo].listEntrenadores[entrenador].objUser.surname+"</li>";
                                    
                                }



                                htmlequipos+="</ul>"
                            }
                            if (result[cat].listEquipos[equipo].listCuerpo.length!=0){
                                htmlequipos+="<h5 class='hDatos'><li>Cuerpo medico</li></h5><ul>";
                                for (let cuerpo = 0; cuerpo < result[cat].listEquipos[equipo].listCuerpo.length; cuerpo++) {
                                    htmlequipos+="<li>"+result[cat].listEquipos[equipo].listCuerpo[cuerpo].objUser.name+", "+result[cat].listEquipos[equipo].listCuerpo[cuerpo].objUser.surname+"</li>";
                                    
                                }



                                htmlequipos+="</ul></li>"
                            }
                            htmlequipos+="</ul>"


                            //-------------------------------------------
                        }
                        



                        htmlequipos+=`
                        </ul>
                    </div>
                </div>

            </div>`;
                
            }
            $("#v-pills-tabContent").html(htmlequipos);
            $("#v-pills-tab").html(htmlcategorias);
            console.log(result);
            $(".equipoItem").on("click", function(){
              
                $(this).children(".listaDatos").slideToggle();
            });
    	
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
})