
$(document).ready(function(){
			
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
	    		
	       		if (result ==1)
	       		{
	       			alert("Sesion iniciada")
	       			window.location.href="views/vLogin.html";
	       			
	       		} else {
	       			alert("Usuario o contraseña incorrectas");
	       		
	       		}	
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
		
	});

});