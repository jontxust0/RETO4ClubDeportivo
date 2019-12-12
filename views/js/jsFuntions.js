
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
		       			
		       			$("#btnLogin").css("display", "none");
		       			$("#btnLogout").css("display", "block");	       			
		       			window.location.reload();
		       			
		       		} else {
		       			alert("Usuario o contraseña incorrectas");
		       		
		       		}	
				},
		       	error : function(xhr) {
		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		   		}
			});

	});
	$("#btnLogout").click(function(){	
		
		
		$.ajax({
	       	url: "controller/cSessionLogout.php", 
	       	dataType:"text",
	    	success: function(result){  
	       		
	    		console.log(result);
	    		alert("Sesion cerrada")
	    		window.location.reload();
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});

	});
	
	$('#register').on('click',function(){
		
		var username=$('#username').val();
		var password=$('#newPassword').val();
		var name=$('#newName').val();
		var surname=$('#surname').val();
		var email=$('#email').val();
		var admin=$('#admin').val();
		
		
		$.ajax({
			type:"POST",
			data:{'username':username, 'password':password,'name':name,'surname':surname,'email':email,'admin':admin},
	       	url: "controller/cInsertNewUser.php", 
	       	dataType:"json",
	       	
	    	success: function(result){  
	
	    		console.log(result);
	    		alert("USER :"+username+"PASS :"+password+"ADMIN :"+admin+"name :"+name+"surname :"+surname+"email :"+email);
	    		alert("number of inserted :"+result);
	    		//window.location.href="../index.html";
			},
	       	error : function(xhr) {
	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   		}
		});
	});
	
	
	$("#btnPerfil").click(function(){	
		
		window.location.href="views/vPerfil.php";
		

	});
	
	

});