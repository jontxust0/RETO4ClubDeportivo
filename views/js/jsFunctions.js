
$(document).ready(function(){
	
	/*Comprobar si hay alguien conectado*/
	$.ajax({
		type:"GET",
       	url: "controller/cValidarSesion.php", 
       	dataType:"text",
    	success: function(result){ 
    		
    		console.log(result);
    		
       		if (result !=0)
       		{
       			
       			
       			newRow="";
       			
    			newRow+="<button id='btnPerfil' class='btn btn-login btn-outline-light my-2 my-sm-0'>"+result+"</button>";
    			$("#btnUsuario").append(newRow);
    			
    			votarRow="";
       			
    			votarRow+="<button id='btnVotarMVP' class='btn btn-login btn-outline-light my-2 my-sm-0'>Votar</button>";
    			$("#btnVotar").append(votarRow);
    			
    			$("#btnLogin").css("display", "none");
       			$("#btnLogout").css("display", "block");
       			
       			
       		} else {
       			
       		
       		}	
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});

	/*Login del usuario*/
	$("#login").click(function(){	
		
		
			var name=$("#name").val();
			var password=$("#password").val();
			
			
			$.ajax({
				type:"GET",
				data:{'name':name,'password':password},
		       	url: "controller/cSessionVars.php", 
		       	dataType:"text",
		    	success: function(result){ 
		    		
		    		console.log(result);
		    		
		       		if (result !=0)
		       		{
		       			alert("Sesion iniciada")
		       			
		       			newRow="";
		
		    			newRow+="<button id='btnPerfil' class='btn btn-login btn-outline-light my-2 my-sm-0 '>"+result+"</button>";
		    			$("#btnUsuario").html(newRow);
		    			
		    			votarRow="";
		       			
		    			votarRow+="<button id='btnVotarMVP' class='btn btn-login btn-outline-light my-2 my-sm-0'>Votar</button>";
		    			$("#btnVotar").append(votarRow);
		       						
		       			window.location.reload();
		       			
		       		} else {
		       			alert("Usuario o contraseña incorrectas");
		       		
		       		}	
				},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
			});

	});
	
	/*Registrar usuarios*/
	
	$('#register').on('click',function(){
		var username=$('#username').val();
		var password=$('#newPassword').val();
		var name=$('#newName').val();
		var surname=$('#surname').val();
		var email=$('#email').val();
		var admin=$('#admin').val();
		

		/*Username no puede ir vacio*/
	    if (username == "") {
	        alert("Escribe el usuario");

	        return false;
	        
	        /*Password no puede ir vacio*/
	    } else if (password == "") {
	        alert("Escribe la contraseña");
	        return false;
	        
	        /*Name no puede ir vacio*/
	    }else if(name == ""){
	        alert("Escribe el nombre");
	        return false;
	        
	        /*Surname no puede ir vacio*/
	    }else if(surname == ""){
	        alert("Escribe el apellido");
	        return false;
	        
	        /*Email no puede ir vacio y tiene que contener '@' y '.'*/
	    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
	    	$.ajax({
				type:"POST",
				data:{'username':username, 'password':password,'name':name,'surname':surname,'email':email,'admin':admin},
		       	url: "controller/cInsertNewUser.php", 
		       	dataType:"json",
		       	
		    	success: function(result){  
		
		    		console.log(result);
		    		alert("USER :"+username+"PASS :"+password+"ADMIN :"+admin+"name :"+name+"surname :"+surname+"email :"+email);
		    		alert("number of inserted :"+result);
		    		window.location.href="index.html";
				},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
			});
	        return true
	    } else {
	        alert("La dirección de email es incorrecta.");
	        return false;
	    }
		
		
		
	});
	
	
	/*Logout del usuario*/
	$("#btnLogout").click(function(){	
		
		
		$.ajax({
	       	url: "controller/cSessionLogout.php", 
	       	dataType:"text",
	    	success: function(result){  
	       		
	    		console.log(result);
	    		alert("Sesion cerrada")
	    		window.location.reload();
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});

	});
	
	
	
	/*Perfil del usuario*/
	$('#btnUsuario').on('click', '#btnPerfil', function(){	
		
		window.location.href="views/vPerfil.html";
		

	});
	
	/*Votar con la id del usuario*/
	$('#btnVotar').on('click', '#btnVotarMVP', function(){	
		
		window.location.href="views/vVotacion.html";
		

	});
	
	
	
	

});

