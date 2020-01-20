var savedFileBase64;
var filename;
var idUser;
$(document).ready(function(){

	
	
		
	
	
	$.ajax({
       	url: "../controller/cSessionVerVars.php", 
       	dataType:"json",
    	success: function(result){ 
    		
    		//console.log(result);
    		
       		if (result !=0)
       		{
       			$.ajax({
       			    type:"GET",
       			    url: "../controller/cPerfil.php", 
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
       			    	$.ajax({
       			    	    type:"GET",
       			    	    url: "../controller/cPerfilEntrenador.php", 
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
       			    	    	$.ajax({
       			    	    	    type:"GET",
       			    	    	    url: "../controller/cPerfilCuerpoMedico.php", 
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
       			
    			

    			
       		} else {
       			alert("hola");
       			$.ajax({
	    	    	    type:"GET",
	    	    	    url: "../controller/cFotoPublico.php", 
	    	    	    dataType: "json",  //type of the result
	    	    	    
	    	    	 success: function(result){
	    	    		 	
	    	    	        console.log(result);
	    	    			
	    	    		
	    	    	 },
	    	    	    error : function(xhr) {
	    	    	        alert("An error occured: " + xhr.status + " " + xhr.statusText);
	    	    	    }
	    	    	});
       		}	
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});

	

	
	
	
	
	

	
	
	
	
});

