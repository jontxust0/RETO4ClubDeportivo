$(document).ready(function(){
    $.ajax({
        type:"GET",
        
       	url: "../controller/cMostrarCategorias.php", 
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

                <h2>`+result[cat].nombre+`</h2>
                <br>
                <div class="row">
                    <!--CARROUSEL CADETE-->
                    <div class="col-12 col-lg-9">
                        <div id="carouselCadete" class="carousel slide"
                            data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <img class="d-block w-100"
                                        src="http://www.ardoibaloncesto.com/wp-content/uploads/2017/05/cadete-masc.jpg"
                                        alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100"
                                        src="https://www.eldia.es/blogs/basketmania/wp-content/uploads/2016/04/NP160420-Baloncesto-Cad-Mas.jpg"
                                        alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100"
                                        src="http://fabasket.com/wp-content/uploads/2016/10/cadete-femenina.jpg"
                                        alt="Third slide">
                                </div>
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
                        <ul>
                        `;
                        for (let equipo = 0; equipo < result[cat].listEquipos.length; equipo++) {
                            ;
                            if (result[cat].listEquipos[equipo].femenino_masculino=="F"){
                                htmlequipos+=`<li>`+result[cat].nombre+` Femenino</li>`
                            }
                            else{
                                htmlequipos+=`<li>`+result[cat].nombre+` Masculino</li>`
                            }
                            
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
    	
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});s
})