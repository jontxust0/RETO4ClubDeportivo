
$(document).ready(function(){
	
	$("#btnJugadores").click(function(){
		$(".adminJugadores").css("display", "block");
		$(".adminEntrenadores").css("display", "none");
		$(".adminUsuario").css("display", "none");

		
	});
	
	$("#btnEntrenadores").click(function(){	
		$(".adminJugadores").css("display", "none");
		$(".adminEntrenadores").css("display", "block");
		$(".adminUsuario").css("display", "none");
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