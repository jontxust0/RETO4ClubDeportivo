
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
		     newRow +="<tr><th scope='col'>ID</th><th scope='col'>DIRECCIÓN</th><th scope='col'>DORSAL</th><th scope='col'>POSICION</th><th scope='col'>TELEFONO</th><th scope='col'>ALTURA</th></tr>";

		     $.each(jugadores,function(index,info) { 

		         newRow += "<tr>" +"<td>"+info.id+"</td>"
		                             +"<td>"+info.direccion+"</td>"
		                             +"<td>"+info.dorsal+"</td>"//Undefined
		                             +"<td>"+info.posicion+"</td>"
		                             +"<td>"+info.tlf+"</td>"//Undefined
		                             +"<td>"+info.altura+"</td>"//Undefined
		                             +"<td><button type='button' class='btnUpdateJugadores btn-warning' value='"+info.id+"' data-toggle='modal' data-target='#updateJugadores'>Editar</button></td>"
		                             +"<td><button type='button' class='btnDeleteJugadores btn-danger' value='"+info.id+"'>Borrar</button></td>"
		                         +"</tr>";
		         
		     });
		     
		        newRow +="</table>";

		        $("#tablaJugador").append(newRow); // add the new row to the container
		        
		        //Boton delete
		        $(".btnDeleteJugadores").click(function(){
		        	var id=$(this).val();
		        	deleteFunctionJugadores(id);
		        });
		        //Modal Update
		        $(".btnUpdateJugadores").click(function(){

		        	$('#idUpdate').val($(this).closest("tr").children().eq(0).text());
					$('#direccionUpdate').val($(this).closest("tr").children().eq(1).text());
					$('#dorsalUpdate').val($(this).closest("tr").children().eq(2).text());
					$('#posicionUpdate').val($(this).closest("tr").children().eq(3).text());
					$('#tlfUpdate').val($(this).closest("tr").children().eq(4).text());
					$('#alturaUpdate').val($(this).closest("tr").children().eq(5).text());
		        });
		        	
		 },
		    error : function(xhr) {
		        alert("An error occured: " + xhr.status + " " + xhr.statusText);
		    }
		});
		function deleteFunctionJugadores(id) {
			
			console.log(id);
			alert(id);
			
			$.ajax({
		       	type: "GET",
		       	data:{ 'id':id},
		       	url: "../controller/cDeleteJugador.php", 

		       	success: function(result){  
		       		
		       		console.log(result);
		       		
		       		location.reload(true);  
		       	},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
		   });
		  		
		}
		$("#btnExecUpdateJugador").click(function(){
			alert("lsknsnf");
			var id=$('#idUpdate').val();
			var direccion=$('#direccionUpdate').val();
			var dorsal=$('#dorsalUpdate').val();
			var posicion=$('#posicionUpdate').val();
			var tlf=$('#tlfUpdate').val();
			var altura=$('#alturaUpdate').val();

		  	$.ajax({
		       	type: "GET",
		       	data:{ 'id':id, 'direccion':direccion, 'dorsal':dorsal, 'posicion':posicion,'tlf':tlf,'altura':altura},
		       	url: "../Controller/cUpdateJugador.php", 
		       	dataType: "text",  //type of the result
		       	success: function(result){  
		       		
		       		console.log(result);

		       		location.reload(true);  //recarga la pagina
		       		
		       		
			        
		       	},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
		    });
		  		
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
				                             +"<td><button type='button' class='btnUpdate btn-warning' value='"+info.id+"' data-toggle='modal' data-target='#updateEntrenador'>Editar</button></td>"
				                             +"<td><button type='button' class='btnDelete btn-danger' value='"+info.id+"'>Borrar</button></td>"
				                         +"</tr>";
				         
				     });
				     
				        newRow +="</table>";

				        $("#tablaEntrenador").append(newRow); // add the new row to the container
				        
				        //Boton delete
				        $(".btnDelete").click(function(){
				        	var id=$(this).val();
				        	deleteEntrenador(id);
				        });
				        
				        //Modal Update
				        $(".btnUpdate").click(function(){

				        	$('#idUpdate').val($(this).closest("tr").children().eq(0).text());
							$('#tlfUpdate').val($(this).closest("tr").children().eq(1).text());
							$('#direccionUpdate').val($(this).closest("tr").children().eq(2).text());
							$('#sueldoUpdate').val($(this).closest("tr").children().eq(3).text());
							$('#contratacionUpdate').val($(this).closest("tr").children().eq(4).text());
							
				        });
				        	
				 },
				    error : function(xhr) {
				        alert("An error occured: " + xhr.status + " " + xhr.statusText);
				    }
				});
				
				function deleteEntrenador(id) {
					
					console.log(id);
					alert(id);
					
					$.ajax({
				       	type: "GET",
				       	data:{ 'id':id},
				       	url: "../controller/cDeleteEntrenador.php", 

				       	success: function(result){  
				       		
				       		console.log(result);
				       		
				       		location.reload(true);  
				       	},
				       	error : function(xhr) {
				   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
				   		}
				   });
				  		
				}
				
				
				$("#btnExecUpdateEntrenador").click(function(){

					var id=$('#idUpdate').val();
					var telefono=$('#tlfUpdate').val();
					var direccion=$('#direccionUpdate').val();
					var sueldo=$('#sueldoUpdate').val();
					var contratacion=$('#contratacionUpdate').val();

				  	$.ajax({
				       	type: "GET",
				       	data:{ 'id':id, 'telefono':telefono, 'direccion':direccion, 'sueldo':sueldo,'contratacion':contratacion},
				       	url: "../controller/cUpdateEntrenador.php", 
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