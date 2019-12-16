
$(document).ready(function(){
	
	$("#btnJugadores").click(function(){
		$(".adminJugadores").css("display", "block");
		$(".adminEntrenadores").css("display", "none");
		$(".adminUsuario").css("display", "none");

		$.ajax({
		    type:"GET",
		    url: "../controller/cMostrarJugadores.php", 
		    dataType: "json",  //type of the result
		    
		 success: function(result){
			 	
		        console.log(result);

			  	jugadores = result;

		        
		        $("#tablaJugador").empty(); // removes all the previous content in the container

		        var newRow="";
		       newRow +="<table class='table table-hover table-dark'> ";
		     newRow +="<tr><th scope='col'>ID</th><th scope='col'>TELEFONO</th><th scope='col'>DIRECCIÓN</th><th scope='col'>SUELDO</th><th scope='col'>FECHA CONTRATACION</th></tr>";

		     $.each(jugadores,function(index,info) { 

		         newRow += "<tr>" +"<td>"+info.id+"</td>"
		                             +"<td>"+info.direccion+"</td>"
		                             +"<td>"+info.dorsal+"</td>"//Undefined
		                             +"<td>"+info.posicion+"</td>"
		                             +"<td>"+info.tlf+"</td>"//Undefined
		                             +"<td>"+info.altura+"</td>"//Undefined
		                             +"<td><button type='button' class='btn btn-warning' value='"+info.id+"'>Editar</button></td>"
		                             +"<td><button type='button' class='btn btn-danger' value='"+info.id+"'>Borrar</button></td>"
		                         +"</tr>";
		         
		     });
		     
		        newRow +="</table>";

		        $("#tablaJugador").append(newRow); // add the new row to the container
		        /*
		        //Boton delete
		        $(".btnDelete").click(function(){
		        	var id=$(this).val();
		        	deleteFunction(id);
		        });
		        //Modal Update
		        $(".btnUpdate").click(function(){

		        	$('#idUpdate').val($(this).closest("tr").children().eq(0).text());
					$('#nombreUpdate').val($(this).closest("tr").children().eq(1).text());
					$('#contraseniaUpdate').val($(this).closest("tr").children().eq(2).text());
					$('#nickNameUpdate').val($(this).closest("tr").children().eq(3).text());
					$('#residenciaUpdate').val($(this).closest("tr").children().eq(4).text());
					$('#emailUpdate').val($(this).closest("tr").children().eq(5).text());
		        });*/
		        	
		 },
		    error : function(xhr) {
		        alert("An error occured: " + xhr.status + " " + xhr.statusText);
		    }
		});

		
	});
	
	$("#btnEntrenadores").click(function(){	
		$(".adminJugadores").css("display", "none");
		$(".adminEntrenadores").css("display", "block");
		$(".adminUsuario").css("display", "none");

		$.ajax({
		    type:"GET",
		    url: "../controller/cMostrarEntrenadores.php", 
		    dataType: "json",  //type of the result
		    
		 success: function(result){
			 	
		        console.log(result);

			  	entrenadores = result;

		        
		        $("#tablaEntrenador").empty(); // removes all the previous content in the container

		        var newRow="";
		       newRow +="<table class='table table-hover table-dark'> ";
		     newRow +="<tr><th scope='col'>ID</th><th scope='col'>TELEFONO</th><th scope='col'>DIRECCIÓN</th><th scope='col'>SUELDO</th><th scope='col'>FECHA CONTRATACION</th></tr>";

		     $.each(entrenadores,function(index,info) { 

		         newRow += "<tr>" +"<td>"+info.id+"</td>"
		                             +"<td>"+info.tlf+"</td>"//Undefined
		                             +"<td>"+info.direccion+"</td>"
		                             +"<td>"+info.sueldo+"</td>"//Undefined
		                             +"<td>"+info.fechaContratacion+"</td>"//Undefined
		                             +"<td><button type='button' class='btn btn-warning' value='"+info.id+"'>Editar</button></td>"
		                             +"<td><button type='button' class='btn btn-danger' value='"+info.id+"'>Borrar</button></td>"
		                         +"</tr>";
		         
		     });
		     
		        newRow +="</table>";

		        $("#tablaEntrenador").append(newRow); // add the new row to the container
		        /*
		        //Boton delete
		        $(".btnDelete").click(function(){
		        	var id=$(this).val();
		        	deleteFunction(id);
		        });
		        //Modal Update
		        $(".btnUpdate").click(function(){

		        	$('#idUpdate').val($(this).closest("tr").children().eq(0).text());
					$('#nombreUpdate').val($(this).closest("tr").children().eq(1).text());
					$('#contraseniaUpdate').val($(this).closest("tr").children().eq(2).text());
					$('#nickNameUpdate').val($(this).closest("tr").children().eq(3).text());
					$('#residenciaUpdate').val($(this).closest("tr").children().eq(4).text());
					$('#emailUpdate').val($(this).closest("tr").children().eq(5).text());
		        });*/
		        	
		 },
		    error : function(xhr) {
		        alert("An error occured: " + xhr.status + " " + xhr.statusText);
		    }
		});
	});
	$("#btnUsuarios").click(function(){	
		$(".adminJugadores").css("display", "none");
		$(".adminEntrenadores").css("display", "none");
		$(".adminUsuario").css("display", "block");
		
		$.ajax({
		    type:"GET",
		    url: "../controller/cMostrarUsuarios.php", 
		    dataType: "json",  //type of the result
		    
		 success: function(result){
			 	
		        console.log(result);

			  	usuarios = result;

		        
		        $("#tablaUser").empty(); // removes all the previous content in the container

		        var newRow;
		       newRow +="<table class='table table-hover table-dark'> ";
		     newRow +="<tr><th scope='col'>ID</th><th scope='col'>USERNAME</th><th scope='col'>PASSWORD</th><th scope='col'>NAME</th><th scope='col'>SURNAME</th><th scope='col'>EMAIL</th></tr>";

		     $.each(usuarios,function(index,info) { 

		         newRow += "<tr>" +"<td>"+info.idUser+"</td>"
		                             +"<td>"+info.username+"</td>"
		                             +"<td>"+info.password+"</td>"//Undefined
		                             +"<td>"+info.name+"</td>"
		                             +"<td>"+info.surname+"</td>"//Undefined
		                             +"<td>"+info.email+"</td>"//Undefined
		                             +"<td><button type='button' class='btn btn-warning' value='"+info.idUser+"'>Editar</button></td>"
		                             +"<td><button type='button' class='btn btn-danger' value='"+info.idUser+"'>Borrar</button></td>"
		                         +"</tr>";
		         
		     });
		     
		        newRow +="</table>";

		        $("#tablaUser").append(newRow); // add the new row to the container
		        /*
		        //Boton delete
		        $(".btnDelete").click(function(){
		        	var id=$(this).val();
		        	deleteFunction(id);
		        });
		        //Modal Update
		        $(".btnUpdate").click(function(){

		        	$('#idUpdate').val($(this).closest("tr").children().eq(0).text());
					$('#nombreUpdate').val($(this).closest("tr").children().eq(1).text());
					$('#contraseniaUpdate').val($(this).closest("tr").children().eq(2).text());
					$('#nickNameUpdate').val($(this).closest("tr").children().eq(3).text());
					$('#residenciaUpdate').val($(this).closest("tr").children().eq(4).text());
					$('#emailUpdate').val($(this).closest("tr").children().eq(5).text());
		        });*/
		        	
		 },
		    error : function(xhr) {
		        alert("An error occured: " + xhr.status + " " + xhr.statusText);
		    }
		});
	
	});
	

});