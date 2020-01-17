
$(document).ready(function(){
 $.ajax({
            type:"GET",
        	url: "../controller/cVotar.php", 
        	dataType:"json",
     	success: function(result){
        		console.log(result)
			htmlzatia="";
			for (let categoria = 0; categoria < result.length; categoria++) {
				
				if (result[categoria].listEquipos.length!=0){
				htmlzatia+=`
				<div class=deshacer></div>
				<div class="categoria">
			
				<h3><b>`+result[categoria].nombre+`</b></h3>
				`;
			for (let equipo = 0; equipo < result[categoria].listEquipos.length; equipo++) {
				if(result[categoria].listEquipos[equipo].femenino_masculino=="F"){
				htmlzatia+="<h4>"+result[categoria].listEquipos[equipo].nombre+" Femenino</h4>";
				}
				else{
					htmlzatia+="<h4>"+result[categoria].listEquipos[equipo].nombre+" Masculino</h4>";	
				}
				htmlzatia+="<div class='equipos'>";
				for (let jugador = 0; jugador < result[categoria].listEquipos[equipo].listJugadores.length; jugador++) {
					htmlzatia+=`
					<div class="card w-100">
					<img src="`+result[categoria].listEquipos[equipo].listJugadores[jugador].objUser.pic+`">
				  <div class="card-body">
				    <h5 class="card-title">`+result[categoria].listEquipos[equipo].listJugadores[jugador].objUser.name+` `+result[categoria].listEquipos[equipo].listJugadores[jugador].objUser.surname +`</h5>
				    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
				    <input type="button" class="btn btn-success buttonVote" value="Votar" data-jugadores=`+result[categoria].listEquipos[equipo].listJugadores[jugador].id+` data-categoria=`+result[categoria].id+`>
				  </div>
				</div>
					
					`;
					
				}
				htmlzatia+="</div>";
			}

			}
			htmlzatia+="</div>";
			
				
			}
			htmlzatia+='<button type="button" class="btn btn-primary" id="enviar">enviar votos</button>';
			$(".container").html(htmlzatia);
		 
			
			$(".buttonVote").on("click", function () {
				idJugadores=$(this).data("jugadores");
				idCategoria=$(this).data("categoria");
				// arrCategorias.push($(this).data("categoria")); 
				// console.log(arrJugadores);
				// console.log(arrCategorias);
				$(this).parent().parent().parent().parent().slideUp();

				//guardar en cada deshacer las id (en el alert) y luego recorrerlos al votar 

				deshacer=`
				<div class="alert alert-danger deshacerAlert" role="alert" data-jugadores=`+idJugadores+` data-categoria=idCategoria>
 				 Haz click <span class="volver">aquí</span> para deshacer el voto 
				</div>
				`;
				console.log($(this).parent().parent().parent().parent().prev());
				$(this).parent().parent().parent().parent().prev().html(deshacer);
				$(".volver").on("click", function () {
					$(this).parent().parent().next().slideDown();
					//console.log($(this).parent().parent().next());
					//la razón por la que esto borra directamente el div es porque si lo ocultas los datos del div siguen existiendo y se enviaran despues
					$(this).parent().remove();
					
					
				});
			});
			$("#enviar").on("click", function(){
				arrCategorias=[];
				arrJugadores=[];
				
				$(".deshacerAlert").each(function(index){
					arrCategorias.push($(this).data("categoria"));
					arrJugadores.push($(this).data("jugadores"));
				});
			});

			
			
	 	},
        	error : function(xhr) {
   	 		alert("An error occured: " + xhr.status + " " + xhr.statusText);
   	 	}
	 });
})
/* <div class="card w-100">
				<img src="">
				  <div class="card-body">
				    <h5 class="card-title">Card title</h5>
				    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
				    <input type="button" class="btn btn-success" value="Votar">
				  </div>
				</div> */