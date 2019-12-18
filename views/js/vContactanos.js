function enviarDatos(params) {
    
    var nombre="";
    var apellido="";
    var asunto = document.getElementById("asunto").value;
    var queja = document.getElementById("queja").value;
    if (document.getElementById("nombre").value!=""){
    nombre = document.getElementById("nombre").value;
    }

    if (document.getElementById("apellido").value!=""){
    apellido = document.getElementById("apellido").value;
    }

    if (asunto == "" || queja==""){
        alert("rellena correctamente los campos!")
    }
    else{


//------llamada JSON--------------------------//




var http = new XMLHttpRequest();
var url = "../controller/cInsertQueja.php";


alert(apellido);
var params = 'nombre='+nombre+'&apellido='+apellido+"&asunto="+asunto+"&queja="+queja;
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
         //aqui obtienes la respuesta de tu peticion
         alert(http.responseText);
    }
}
http.send(params);

//--------------------------------------------//












    }
}