$(document).ready(function(){
	$.ajax({
       	url: "../controller/cSessionVerVars.php", 
       	dataType:"json",
    	success: function(result){ 
    		
    		//console.log(result);
    		
       		if (result !=0)
       		{
       			
       			
       			nameSurname="";
       			nameSurname+= result.nombre + " " +result.surname;
    			$("#nameSurname").append(nameSurname);
    			
    			
    			img="";
    			img="<img src='"+result.img+"'/>";
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
	
	
	
	
	$.ajax({
	    type:"GET",
	    url: "../controller/cPerfil.php", 
	    dataType: "json",  //type of the result
	    
	 success: function(result){
		 	
	        console.log(result);
	        
	        direccion="";
	        direccion="<p>"+result.direccion+"</p>";
			$("#direccion").append(direccion);

			tlf="";
			tlf="<p>"+result.tlf+"</p>";
			$("#tlf").append(tlf);
	        
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
	        alert("An error occured: " + xhr.status + " " + xhr.statusText);
	    }
	});
	

	
	
	

});

