var savedFileBase64;
var filename;
var idUser;


$(document).ready(function(){
	
	popup = {
			   init: function(){
			     
			     
			     $(document).on('click', '.popup img', function(){
			       return false;
			     }).on('click', '.popup', function(){
			       popup.close();
			     })
			   },
			   open: function($figure) {
			     $('.gallery').addClass('pop');
			     $popup = $('<div class="popup" />').appendTo($('body'));
			     $fig = $figure.clone().appendTo($('.popup'));
			     $bg = $('<div class="bg" />').appendTo($('.popup'));
			     $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
			     $shadow = $('<div class="shadow" />').appendTo($fig);
			     src = $('img', $fig).attr('src');
			     $shadow.css({backgroundImage: 'url(' + src + ')'});
			     $bg.css({backgroundImage: 'url(' + src + ')'});
			     setTimeout(function(){
			       $('.popup').addClass('pop');
			     }, 10);
			   },
			   close: function(){
			     $('.gallery, .popup').removeClass('pop');
			     setTimeout(function(){
			       $('.popup').remove()
			     }, 100);
			   }
			 }

			 popup.init()
	
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
       			        
       			        var idEquipo=result.id_equipo;
       			        
	       			     $.ajax({
	 	    	    	    type:"GET",
	 	    	    	    data:{'idEquipo':idEquipo},
	 	    	    	    url: "../controller/cGaleria.php", 
	 	    	    	    dataType: "json",  //type of the result
	 	    	    	    
	 	    	    	 success: function(result){
	 	    	    		 
	 	    	    		for($i=0; $i<result.length; $i++){
	 	    	    			if(result[$i].privado==0){
	 	    	    				newrowImg="";
		 	    	    	    	newrowImg="<figure><img src='"+result[$i].pic+"' alt=''/> <figcaption>Daytona Beach <small>United States</small></figcaption></figure>";
			 	    	    	   
			 	    	    	    $("#galeriaPublica").append(newrowImg);
	 	    	    			}else{
	 	    	    				newrowImg1="";
		 	    	    	    	newrowImg1="<figure><img src='"+result[$i].pic+"' alt=''/> <figcaption>Daytona Beach <small>United States</small></figcaption></figure>";
			 	    	    	   
			 	    	    	    $("#galeriaPrivada").append(newrowImg1);
	 	    	    			}
	 	    	    	    	
		 	    	    	    
		 	    	    	   
	 	    	    	    }
	 	    	    		$('figure').click(function(){
	 	    	    		   popup.open($(this));
	 	   			     	});
	    	    		 
	    	    		 newrow="";
	    	    		 newrow="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='display:none;'><symbol id='close' viewBox='0 0 18 18'><path fill-rule='evenodd' clip-rule='evenodd' fill='#FFFFFF' d='M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z'/></symbol></svg>";
	    	    		 $("#svg").append(newrow);
	 	    	    	    
	 	    	    	    
	 	    	    	    
	 	    	    	    
	 	    	    	   
	 	    	    	 },
	 	    	    	    error : function(xhr) {
	 	    	    	        alert("An error occured: " + xhr.status + " " + xhr.statusText);
	 	    	    	    }
	 	    	    	});
       			       
       				  	
       			        	
       			 },
       			    error : function(xhr) {
       			    	$.ajax({
       			    	    type:"GET",
       			    	    url: "../controller/cPerfilEntrenador.php", 
       			    	    dataType: "json",  //type of the result
       			    	    
       			    	 success: function(result){
       			    		 	
	       			    		var idEquipo=result.id_equipo;
	           			        
	   	       			     $.ajax({
	   	 	    	    	    type:"GET",
	   	 	    	    	    data:{'idEquipo':idEquipo},
	   	 	    	    	    url: "../controller/cGaleria.php", 
	   	 	    	    	    dataType: "json",  //type of the result
	   	 	    	    	    
	   	 	    	    	 success: function(result){
	   	
	   	 	    	    		for($i=0; $i<result.length; $i++){
		 	    	    			if(result[$i].privado==0){
		 	    	    				newrowImg="";
			 	    	    	    	newrowImg="<figure><img src='"+result[$i].pic+"' alt=''/> <figcaption>Daytona Beach <small>United States</small></figcaption></figure>";
				 	    	    	   
				 	    	    	    $("#galeriaPublica").append(newrowImg);
		 	    	    			}else{
		 	    	    				newrowImg1="";
			 	    	    	    	newrowImg1="<figure><img src='"+result[$i].pic+"' alt=''/> <figcaption>Daytona Beach <small>United States</small></figcaption></figure>";
				 	    	    	   
				 	    	    	    $("#galeriaPrivada").append(newrowImg1);
		 	    	    			}
		 	    	    	    	
			 	    	    	    
			 	    	    	   
		 	    	    	    }
		 	    	    		$('figure').click(function(){
		 	    	    		   popup.open($(this));
		 	   			     	});
		    	    		 
		    	    		 newrow="";
		    	    		 newrow="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='display:none;'><symbol id='close' viewBox='0 0 18 18'><path fill-rule='evenodd' clip-rule='evenodd' fill='#FFFFFF' d='M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z'/></symbol></svg>";
		    	    		 $("#svg").append(newrow);
	   	
	   	 	    	    	 },
	   	 	    	    	    error : function(xhr) {
	   	 	    	    	        alert("An error occured: " + xhr.status + " " + xhr.statusText);
	   	 	    	    	    }
	   	 	    	    	});
       			    	 },
       			    	    error : function(xhr) {
       			    	    	$.ajax({
       			    	    	    type:"GET",
       			    	    	    url: "../controller/cPerfilCuerpoMedico.php", 
       			    	    	    dataType: "json",  //type of the result
       			    	    	    
       			    	    	 success: function(result){
       			    	    		 	
       			    	    	        console.log(result);
       			    	    	        
       			    	    	     var idEquipo=result.id_equipo;
       		       			        
       			       			     $.ajax({
       			 	    	    	    type:"GET",
       			 	    	    	    data:{'idEquipo':idEquipo},
       			 	    	    	    url: "../controller/cGaleria.php", 
       			 	    	    	    dataType: "json",  //type of the result
       			 	    	    	    
       			 	    	    	 success: function(result){
       			
       			 	    	    		for($i=0; $i<result.length; $i++){
       			 	    	    			if(result[$i].privado==0){
       			 	    	    				newrowImg="";
       				 	    	    	    	newrowImg="<figure><img src='"+result[$i].pic+"' alt=''/> <figcaption>Daytona Beach <small>United States</small></figcaption></figure>";
       					 	    	    	   
       					 	    	    	    $("#galeriaPublica").append(newrowImg);
       			 	    	    			}else{
       			 	    	    				newrowImg1="";
       				 	    	    	    	newrowImg1="<figure><img src='"+result[$i].pic+"' alt=''/> <figcaption>Daytona Beach <small>United States</small></figcaption></figure>";
       					 	    	    	   
       					 	    	    	    $("#galeriaPrivada").append(newrowImg1);
       			 	    	    			}
       			 	    	    	    	
       				 	    	    	    
       				 	    	    	   
       			 	    	    	    }
       			 	    	    		$('figure').click(function(){
       			 	    	    		   popup.open($(this));
       			 	   			     	});
       			    	    		 
       			    	    		 newrow="";
       			    	    		 newrow="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='display:none;'><symbol id='close' viewBox='0 0 18 18'><path fill-rule='evenodd' clip-rule='evenodd' fill='#FFFFFF' d='M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z'/></symbol></svg>";
       			    	    		 $("#svg").append(newrow);
       			
       			 	    	    	 },
       			 	    	    	    error : function(xhr) {
       			 	    	    	        alert("An error occured: " + xhr.status + " " + xhr.statusText);
       			 	    	    	    }
       			 	    	    	});
       			    	    			
       			    	    		
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

       			$.ajax({
	    	    	    type:"GET",
	    	    	    url: "../controller/cGaleriaPublico.php", 
	    	    	    dataType: "json",  //type of the result
	    	    	    
	    	    	 success: function(result){

	    	    		 for($i=0; $i<result.length; $i++){
	 	    	    	    	newrowImg="";
	 	    	    	    	newrowImg="<figure><img src='"+result[$i].pic+"' alt=''/> <figcaption>Daytona Beach <small>United States</small></figcaption></figure>";
		 	    	    	   
		 	    	    	    $("#galeriaPublica").append(newrowImg);
		 	    	    	    
		 	    	    	   
	 	    	    	    }
	    	    		 $('figure').click(function(){
	 	    	    		   popup.open($(this));
	 	   			     	});
	    	    		 
	    	    		 newrow="";
	    	    		 newrow="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='display:none;'><symbol id='close' viewBox='0 0 18 18'><path fill-rule='evenodd' clip-rule='evenodd' fill='#FFFFFF' d='M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z'/></symbol></svg>";
	    	    		 $("#svg").append(newrow);
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
