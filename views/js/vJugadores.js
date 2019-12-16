
$(document).ready(function(){

	// $.ajax({
    //    	url: "../controller/cMostrarJugadores.php", 
    //    	dataType:"text",
    // 	success: function(respuesta){
    //    		jugadores = JSON.parse(respuesta);
    //    		for (var i = 0; i < jugadores.length; i++) {
	// 			$('#infoJugadores').append('<div class="card" style="width:13rem;">'
	// 			+'<div class="card-body">'
	// 			+'<h1 style="text-align:center;">' + jugadores[i].dorsal + '</h1>' 
	// 			+ '<p class="card-text">' + jugadores[i].posicion + '</p>' 
	// 			+ '<p class="card-text">' + jugadores[i].altura + '</p>'
	// 			+ '</div>'
	// 			+ '</div>');
	// 		}
       		
	// 	},
    //    	error : function(xhr) {
   	// 		alert("An error occured: " + xhr.status + " " + xhr.statusText);
   	// 	}
	// });
	
	// $.ajax({
    //    	url: "../controller/cMostrarEntrenadores.php", 
    //    	dataType:"text",
    // 	success: function(respuesta){
    //    		entrenadores = JSON.parse(respuesta);
    //    		for (var i = 0; i < entrenadores.length; i++) {
	// 			$('#infoEntrenadores').append('<div class="card" style="width:13rem;">'
	// 			+'<div class="card-body">'
	// 			+ '<p class="card-text">' + entrenadores[i].tlf + '</p>' 
	// 			+ '<p class="card-text">' + entrenadores[i].fechaContratacion + '</p>'
	// 			+ '</div>'
	// 			+ '</div>');
	// 		}
       		
	// 	},
    //    	error : function(xhr) {
   	// 		alert("An error occured: " + xhr.status + " " + xhr.statusText);
   	// 	}
	// });



	$.ajax({
        type: "GET",
        url: "../controller/cMostrarEquipos.php",
        dataType: "json",  //type of the result
    	success: function(result){
       		console.log(result)
       		
		},
       	error : function(xhr) {
   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
   		}
	});
});