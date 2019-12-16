
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

		        var newRow="";
		       newRow +="<table class='table table-hover table-dark'> ";
		     newRow +="<tr><th scope='col'>ID</th><th scope='col'>USERNAME</th><th scope='col'>PASSWORD</th><th scope='col'>NAME</th><th scope='col'>SURNAME</th><th scope='col'>EMAIL</th></tr>";

		     $.each(usuarios,function(index,info) { 

		         newRow += "<tr>" +"<td>"+info.idUser+"</td>"
		                             +"<td>"+info.username+"</td>"
		                             +"<td>"+info.password+"</td>"
		                             +"<td>"+info.name+"</td>"
		                             +"<td>"+info.surname+"</td>"
		                             +"<td>"+info.email+"</td>"
		                             +"<td><button type='button' class='btnUpdate btn-warning' value='"+info.idUser+"' data-toggle='modal' data-target='#update'>Editar</button></td>"
		                             +"<td><button type='button' class='btnDelete btn-danger' value='"+info.idUser+"'>Borrar</button></td>"
		                         +"</tr>";
		         
		     });
		     	
		        newRow +="</table>";

		        $("#tablaUser").append(newRow); // add the new row to the container
		        
		        //Boton delete
		        $(".btnDelete").click(function(){
		        	
		        	var id=$(this).val();
		        	deleteFunction(id);
		        });
		        
		        //Modal Update
		        $(".btnUpdate").click(function(){
		        	alert("fdas");
		        	$('#update').modal('show');
		        	$('#idUpdate').val($(this).closest("tr").children().eq(0).text());
					$('#usernameUpdate').val($(this).closest("tr").children().eq(1).text());
					$('#contraseniaUpdate').val($(this).closest("tr").children().eq(2).text());
					$('#nameUpdate').val($(this).closest("tr").children().eq(3).text());
					$('#surnameUpdate').val($(this).closest("tr").children().eq(4).text());
					$('#emailUpdate').val($(this).closest("tr").children().eq(5).text());
		        });
		        	
		 },
		    error : function(xhr) {
		        alert("An error occured: " + xhr.status + " " + xhr.statusText);
		    }
		});
		
		function deleteFunction(id) {
			
			console.log(id);
			alert(id);
			
			$.ajax({
		       	type: "GET",
		       	data:{ 'id':id},
		       	url: "../controller/cDeleteUser.php", 

		       	success: function(result){  
		       		
		       		console.log(result);
		       		
		       		location.reload(true);  
		       	},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
		   });
		  		
		}
		
		//Rellenar los datos para llamar al controlador y hacer el update
		$("#btnExecUpdate").click(function(){

			var id=$('#idUpdate').val();
			var username=$('#usernameUpdate').val();
			var contrasenia=$('#contraseniaUpdate').val();
			var name=$('#nameUpdate').val();
			var surname=$('#surnameUpdate').val();
			var email=$('#emailUpdate').val();

		  	$.ajax({
		       	type: "GET",
		       	data:{ 'id':id, 'username':username, 'contrasenia':contrasenia, 'name':name,'surname':surname,'email':email},
		       	url: "../Controller/cUpdateUser.php", 
		       	dataType: "text",  //type of the result
		       	success: function(result){  
		       		
		       		console.log(result);

		       		location.reload(true);  //recarga la pagina
		       		
		       		//Boton delete
			        
		       	},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
		    });
		  		
		 });
	
	});

});