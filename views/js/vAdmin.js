
$(document).ready(function(){
	
	$("#btnJugadores").click(function(){
		$(".adminJugadores").css("display", "block");
		$(".adminEntrenadores").css("display", "none");
		$(".adminUsuario").css("display", "none");
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