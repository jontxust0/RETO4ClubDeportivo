
$(document).ready(function(){
	

	$.ajax({
		type: "GET",
		dataType: "json",
		url: "../controller/cMostrarSoloEquipos.php", 

		success: function(result){  
			console.log(result);
			htmlzatia="";
			for (let index = 0; index < result.length; index++) {
				htmlzatia+="<option value="+result[index].id+">"+result[index].nombre+" ("+result[index].femenino_masculino+")</option>"
				
			}
			$("#equipoSelect").html(htmlzatia);


			//inscribir como jugador 
			$("inscribirJugadorButton").on("click", function(){

			});

			//-------------------------
		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
});
	
	

});