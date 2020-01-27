
$(document).ready(function(){

	

	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://tres.fpz1920.com/controller/cMostrarSoloEquipos.php", 

		success: function(result){  
			console.log(result);
			htmlzatia="";
			for (let index = 0; index < result.length; index++) {
				htmlzatia+="<option value="+result[index].id+">"+result[index].nombre+" ("+result[index].femenino_masculino+")</option>"
				
			}
			$("#equipoSelect").html(htmlzatia);
			var id=0;
			$(".btnInsertUsuario").click(function () {
				
				id=parseInt( $(this).parent().siblings(".id").text());
			});

			//inscribir como jugador 
			$("#inscribirCuerpoButton").on("click", function(){
				var idEquipo = $("#equipoSelect").val();
				var funcion= $("#insCMFuncion").val();
				var direccion= $("#insDireccion").val();
				var telefono= $("#insTelefono").val();
				
				console.log(id);
				console.log(idEquipo);
				console.log(funcion);
				console.log(direccion);
				console.log(telefono);
				if (idEquipo!="" && funcion!="" && direccion!="" && telefono!="") {
					$.ajax({
						type: "GET",
				
						data:{'id':id, 'idEquipo':idEquipo, 'funcion':funcion, 'direccion':direccion, 'telefono':telefono},
						url: "http://tres.fpz1920.com/controller/cInsertCuerpo.php", 
				
						success: function(result){  
							if (result=="si"){
								alert("ese usuario ya ha sido inscrito en esa tabla");
							}
							else{
								alert("el usuario ha sido inscrito con exito!");
								window.location.href="";
							}
						},
						error : function(xhr) {
							alert("An error occured: " + xhr.status + " " + xhr.statusText);
						}
					});
				}
				else{
					alert("Rellena correctamente los campos!");
				}
			});

			$("#inscribirJugadorButton").on("click", function(){
				var idEquipo = $("#equipoSelect").val();
				var dorsal= $("#insJDorsal").val();
				var posicion= $("#insJPosicion").val();
				var altura= $("#insJAltura").val();
				var direccion= $("#insDireccion").val();
				var telefono= $("#insTelefono").val();
				
			
				if (idEquipo!="" && dorsal!="" && direccion!="" && telefono!="" && posicion!="" && altura!="") {
					$.ajax({
						type: "GET",
				
						data:{'id':id, 'idEquipo':idEquipo, 'posicion':posicion, 'dorsal':dorsal, 'posicion':posicion,'altura':altura,'direccion':direccion, 'telefono':telefono},
						url: "http://tres.fpz1920.com/controller/cInsertJugador.php", 
				
						success: function(result){  
							console.log(result);
							if (result=="si"){
								alert("ese usuario ya ha sido inscrito en esa tabla");
							}
							else{
								alert("el usuario ha sido inscrito con exito!");
								window.location.href="";
							}
						},
						error : function(xhr) {
							alert("An error occured: " + xhr.status + " " + xhr.statusText);
						}
					});
				}
				else{
					alert("Rellena correctamente los campos!");
				}


			});

			$("#inscribirEntrenadorButton").on("click", function(){
				var idEquipo = $("#equipoSelect").val();
				var sueldo= $("#insESueldo").val();
				var direccion= $("#insDireccion").val();
				var telefono= $("#insTelefono").val();
				
			
				if (idEquipo!="" && sueldo!="" && direccion!="" && telefono!="") {
					$.ajax({
						type: "GET",
						data:{'id':id, 'idEquipo':idEquipo,'sueldo':sueldo ,'direccion':direccion, 'telefono':telefono},
						url: "http://tres.fpz1920.com/controller/cInsertEntrenador.php", 
				
						success: function(result){  
							console.log(result);
							if (result=="si"){
								alert("ese usuario ya ha sido inscrito en esa tabla");
							}
							else{
								alert("el usuario ha sido inscrito con exito!");
								window.location.href="";
							}
						},
						error : function(xhr) {
							alert("An error occured: " + xhr.status + " " + xhr.statusText);
						}
					});
				}
				else{
					alert("Rellena correctamente los campos!");
				}


			});
			//-------------------------
		},
		error : function(xhr) {
			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		}
});
	
	

});