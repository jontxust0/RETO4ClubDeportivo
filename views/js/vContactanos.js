function enviarDatos(params) {
    var asunto = document.getElementById("asunto").value;
    var queja = document.getElementById("queja").value;
    if (document.getElementById("nombre").value!=""){
    var nombre = document.getElementById("nombre").value;
    }

    if (document.getElementById("apellido").value!=""){
    var apellido = document.getElementById("nombre").value;
    }

    if (asunto == "" || queja==""){
        alert("rellena correctamente los campos!")
    }
    else{


    //------llamada JSON---------------------//
    var http = new XMLHttpRequest();
    var url = "../controller/cInsertQueja.php";

    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.open("GET", url, true);

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) { 
        //aqui obtienes la respuesta de tu peticion
         alert(http.responseText);
        }
}
http.send(JSON.stringify({email:email, password: password}));
//--------------------------------------------//












    }
}