$(document).ready(function(){

    $.ajax({
        type:"GET",
        url: "../controller/cMostrarSoloCategorias.php", 
        dataType:"json",
        success: function(result){ 
            htmlzatia="";
            for (let index = 0; index < result.length; index++) {
                htmlzatia+="<option value='"+result[index].id+"'>"+result[index].nombre+"</option>"
                
            }
            $("#categoriaSelect").html(htmlzatia);
            console.log(result);
        },
           error : function(xhr) {
               alert("An error occured: " + xhr.status + " " + xhr.statusText);
           }
    });

    $("#categoriaSelect").change(function(){
        console.log($(this).val());
        idCat= $(this).val();
        $.ajax({
            type:"GET",
            url: "../controller/cMostrarRanking.php",
            data:{'idCat':idCat}, 
            dataType:"json",
            success: function(result){ 
            console.log(result);
            htmlzatia='<table class="rankingTable">';

            htmlzatia+=`
            <thead>
                <th>Votos</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Altura</th>
                <th>Dorsal</th>
                <th>Posicion</th>

            </thead>
            `;


            for (let index = 0; index < result.length; index++) {
                htmlzatia+="<tr>";
                htmlzatia+="<td>"+result[index].votos+"</td>";
                htmlzatia+="<td>"+result[index].objUser.name+"</td>";
                htmlzatia+="<td>"+result[index].objUser.surname+"</td>";
                htmlzatia+="<td>"+result[index].altura+"</td>";
                htmlzatia+="<td>"+result[index].dorsal+"</td>";
                htmlzatia+="<td>"+result[index].posicion+"</td>";

                htmlzatia+="</tr>";
            }
            htmlzatia+="</table>";
            $("#ranking").html(htmlzatia);
            },
               error : function(xhr) {
                   alert("An error occured: " + xhr.status + " " + xhr.statusText);
               }
        });
    });

});