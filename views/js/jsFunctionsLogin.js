
$(document).ready(function(){
	
		$.ajax({
			
	       	url: "../controller/cSessionVerVars.php", 
	       	dataType:"json",
	       	
	    	success: function(result){  

	    		console.log(result);
	    		
	    		if (result !=0){
	    			
	    			newRow="";
	    			newRow+="<p>Has iniciado sesion: " + result.name 
	    			+ " y eres admin(SI/NO) : " + result.admin+"</p>";
	    			
	    			newRow+="<p><button id='itxi'>Session close</button></p>";
	    			$("body").append(newRow);
	    		
	    		} else {
	    			$("body").append("No has iniciado session");
	    			
	    		}
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
		
	$('body').on('click', '#itxi', function(){
		
		$.ajax({
	       	url: "../controller/cSessionLogout.php", 
	       	dataType:"text",
	    	success: function(result){  
	       		
	    		console.log(result);
	    		
    			newRow="";
    			newRow+="<p>Session destruida</p>";
	    			
	    		$("body").append(newRow);
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
		
	});
	

  });
	
	
	
	
