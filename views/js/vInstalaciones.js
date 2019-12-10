$(document).ready(function () {
  
    

$(".col-md-4").on("mouseover", function(){
$(this).children(".descripcion").slideDown("fast");
    
});

$(".col-md-4").on("mouseleave", function(){
    $(this).children(".descripcion").slideUp("fast");
    
    });



});