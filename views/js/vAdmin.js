
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
			
			$(".btnInsertUsuario").click(function () {
				alert("aaa");
				console.log($(this).siblings(".id"));
			});

			//inscribir como jugador 
			$("#inscribirCuerpoButton").on("click", function(){
				var idEquipo = $("#equipoSelect").val();
				var funcion= $("#insCMFuncion").val();
				var direccion= $("#insCMDireccion").val();
				var telefono= $("#insCMTelefono").val();
			});

			//-------------------------
		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
});
	
	

});