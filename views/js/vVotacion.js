var j;
$(document).ready(function(){
 $.ajax({
            type:"GET",
        	url: "../controller/cVotar.php", 
        	dataType:"json",
     	success: function(result){
        		console.log(result)
	 	
 		
	 	},
        	error : function(xhr) {
   	 		alert("An error occured: " + xhr.status + " " + xhr.statusText);
   	 	}
	 });
})