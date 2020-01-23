var savedFileBase64;
var filename;
var idUser;
$(document).ready(function(){
	
	/*Cambiar imagen de perfil del usuario*/
	$("#changeImg").click(function(){
		$.ajax({
    	    type:"POST",
    	    data:{ 'idUser':idUser, 'filename':filename,'savedFileBase64':savedFileBase64},
    	    url: "http://tres.fpz1920.com/controller/cUpadeteFotoPerfil.php", 
    	    dataType: "json",  //type of the result
    	    
    	 success: function(result){
    		 	console.log(result);
	       		alert(result.resultado);
	       		
    	      
    			
    		
    	 },
    	    error : function(xhr) {
    	     
    	    }
    	});
	   
	});
	$.ajax({
       	url: "http://tres.fpz1920.com/controller/cSessionVerVars.php", 
       	dataType:"json",
    	success: function(result){ 
    		
    		//console.log(result);
    		
       		if (result !=0)
       		{
       			if(result.admin==1){
       				admin="";
       				admin="<button id='btnAdmin'>Admin</button>";
        			$("#admin").append(admin);
       			}
       			
       			idUser= result.id;
       			nameSurname="";
       			nameSurname+= result.nombre + " " +result.surname;
    			$("#nameSurname").append(nameSurname);
    			
    			
    			img="";
    			img="<img id='imgPerfil' src='../uploads/"+result.img+"'/>";
    			$("#img").append(img);
    			
    			username="";
    			username+="<p>"+result.name+"</p>";
    			$("#username").append(username);
    			
    			email="";
    			email+="<p>"+result.email+"</p>";
    			$("#email").append(email);
    			
    			nombre="";
    			nombre+="<p>"+result.nombre+"</p>";
    			$("#nombre").append(nombre);
    			
    			apellido="";
    			apellido+="<p>"+result.surname+"</p>";
    			$("#apellido").append(apellido);
    			

    			
       		} else {
       			
       		
       		}	
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});

	

	
	
	/*Buscar la id de inicio de sesion en la tabla de jugadores*/
	$.ajax({
	    type:"GET",
	    url: "http://tres.fpz1920.com/controller/cPerfil.php", 
	    dataType: "json",  //type of the result
	    
	 success: function(result){
		 	
	        console.log(result);
	        
	        
	        nav="";
	        nav="<a class='nav-link' id='profile-tab' data-toggle='tab' href='#datosMedicos' role='tab' aria-controls='profile' aria-selected='false'>Datos Medicos</a>";
			$("#navDatosMedicos").append(nav);
			
			label4="";
			label4="Lesion";
			$("#label4").append(label4);
			
			label5="";
			label5="Tipo de sangre";
			$("#label5").append(label5);
			
			label6="";
			label6="Enfermedades";
			$("#label6").append(label6);
			
			lesion="";
			lesion="<p>"+result.objDatosMedicos.lesiones+"<p>";
			$("#lesion").append(lesion);
			
			tipoSangre="";
			tipoSangre="<p>"+result.objDatosMedicos.tipoSangre+"<p>";
			$("#tipoSangre").append(tipoSangre);
			
			enfermeda="";
			enfermeda="<p>"+result.objDatosMedicos.enfermedades+"<p>";
			$("#enfermeda").append(enfermeda);
	        
	        profesion="";
	        profesion="Jugador";
			$("#profesion").append(profesion);
	        
	        direccion="";
	        direccion="<p>"+result.direccion+"</p>";
			$("#direccion").append(direccion);

			tlf="";
			tlf="<p>"+result.tlf+"</p>";
			$("#tlf").append(tlf);
	        
			label1="";
			label1="Dorsal";
			$("#label1").append(label1);
			
			label2="";
			label2="Posicion";
			$("#label2").append(label2);
			
			label3="";
			label3="Altura";
			$("#label3").append(label3);
			
	        dorsal="";
	        dorsal="<p>"+result.dorsal+"</p>";
			$("#dorsal").append(dorsal);
			
			posicion="";
			posicion="<p>"+result.posicion+"</p>";
			$("#posicion").append(posicion);
			
			altura="";
			altura="<p>"+result.altura+"</p>";
			$("#altura").append(altura);
		  	
	        	
	 },
	    error : function(xhr) {
	    	/*Buscar la id de inicio de sesion en la tabla de entrenadores*/
	    	$.ajax({
	    	    type:"GET",
	    	    url: "http://tres.fpz1920.com/controller/cPerfilEntrenador.php", 
	    	    dataType: "json",  //type of the result
	    	    
	    	 success: function(result){
	    		 	
	    	        console.log(result);
	    	        console.log(idUser);
	    	        profesion="";
	    	        profesion="Entrenador";
	    			$("#profesion").append(profesion);
	    	        
	    	        tlf="";
	    			tlf="<p>"+result.tlf+"</p>";
	    			$("#tlf").append(tlf);
	    		  	
	    	        	
	    			direccion="";
	    	        direccion="<p>"+result.direccion+"</p>";
	    			$("#direccion").append(direccion);
	    			
	    			
	    			label1="";
	    			label1="Sueldo";
	    			$("#label1").append(label1);
	    			
	    			label2="";
	    			label2="Fecha de contratacion";
	    			$("#label2").append(label2);
	    			
	    			dorsal="";
	    	        dorsal="<p>"+result.sueldo+"</p>";
	    			$("#dorsal").append(dorsal);
	    			
	    			posicion="";
	    			posicion="<p>"+result.fechaContratacion+"</p>";
	    			$("#posicion").append(posicion);
	    	 },
	    	    error : function(xhr) {
	    	    	/*Buscar la id de inicio de sesion en la tabla de cuerpo medico*/
	    	    	$.ajax({
	    	    	    type:"GET",
	    	    	    url: "http://tres.fpz1920.com/controller/cPerfilCuerpoMedico.php", 
	    	    	    dataType: "json",  //type of the result
	    	    	    
	    	    	 success: function(result){
	    	    		 	
	    	    	        console.log(result);
	    	    	        
	    	    	        profesion="";
	    	    	        profesion="Medico";
	    	    			$("#profesion").append(profesion);
	    	    	        
	    	    	        tlf="";
	    	    			tlf="<p>"+result.tlf+"</p>";
	    	    			$("#tlf").append(tlf);
	    	    		  	
	    	    	        	
	    	    			direccion="";
	    	    	        direccion="<p>"+result.direccion+"</p>";
	    	    			$("#direccion").append(direccion);
	    	    			
	    	    			
	    	    			label1="";
	    	    			label1="Funcion";
	    	    			$("#label1").append(label1);
	    	    			
	    	    			
	    	    			dorsal="";
	    	    	        dorsal="<p>"+result.funcion+"</p>";
	    	    			$("#dorsal").append(dorsal);
	    	    			
	    	    		
	    	    	 },
	    	    	    error : function(xhr) {
	    	    	        alert("An error occured: " + xhr.status + " " + xhr.statusText);
	    	    	    }
	    	    	});
	    	    }
	    	});
	    }
	});
	
	/*Si el usuario es admin te lleva a la vista de admin*/
	$('#admin').on('click', '#btnAdmin', function(e){
		e.preventDefault();
		e.stopPropagation();
		window.location.href="vAdmin.html";
		
	});
	
	/*Elegir la foto que quieras*/
	$("#file").change(function(){
		
		  let file = $("#file").prop("files")[0];
		  filename = file.name.toLowerCase();
		  console.log(filename);
		  
		  if (!new RegExp("(.*?).(jpg|jpeg|png|gif)$").test(filename)) {
		    alert("Solo se aceptan imágenes JPG, PNG y GIF");
		  }
		  let reader = new FileReader();
		  
		  reader.onload = function(e) {
			  
			  let fileBase64 = e.target.result;

			  // Almacenar en variable global para uso posterior
			  savedFileBase64 = fileBase64;
			  $("#imgPerfil").attr('src', savedFileBase64);
		  };
		  reader.readAsDataURL(file);
	});
	$("#upload").click(function(){
		// Código para previsualizar
	    $("#imgPerfil").attr('src', savedFileBase64);
	});
	
	

});

