$(document).ready(function(){
	$.ajax({
       	url: "../controller/cSessionVerVars.php", 
       	dataType:"json",
    	success: function(result){ 
    		
    		//console.log(result);
    		
       		if (result !=0)
       		{
       			
       			
       			nameSurname="";
       			nameSurname+= result.dorsal + " " +result.surname;
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
    			
    			admin="";
    			admin+="<p>"+result.admin+"</p>";
    			$("#admin").append(admin);
    			
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
	        
		  	
	        	
	 },
	    error : function(xhr) {
	        alert("An error occured: " + xhr.status + " " + xhr.statusText);
	    }
	});
	

	
	
	

});