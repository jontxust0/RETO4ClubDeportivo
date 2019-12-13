
$(document).ready(function(){
	
	$("#btnJugadores").click(function(){
		$(".adminJugadores").css("display", "block");
		$(".adminEntrenadores").css("display", "none");
		$(".adminUsuario").css("display", "none");
		$.ajax({
	       	type:"GET",
	       	url: "controller/cMostrarJugadores.php", 
	    	dataType: "json",  //type of the result
	       	
	    	success: function(result){  
	       		
	    		console.log(result);
	    		
	       		$("#cmbCycle").empty(); // removes all the previous content
	       		
	  			var newRow ="";
				$.each(result,function(index,info) { 
									
					newRow += "<option value='"+info.cod_ciclo+"'>"+info.nom_ciclo_eu+" / "+info.nom_ciclo_es+"</option>";	
				});
	       		   
	       		
	       		$("#cmbCycle").append(newRow); // add the new rowr
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
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
	});
	

});