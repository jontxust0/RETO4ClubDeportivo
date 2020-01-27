//----------------------------------------------------------------------ANGULARJS
var app = angular.module('vAdminAngular', []);


// JUGADORES
app.controller('vAdminControlador', ['$scope', '$http', function ($scope, $http) {

    $http.get("http://tres.fpz1920.com/controller/cMostrarJugadores.php")
        .then(function (response) {
            console.log(response);
            $scope.listaJugadores = response.data;

        }).catch(function (response) {
            console.error('error ocurred: ', response.status, response.data);
        }).finally(function () {


        });

    // ENTRENADORES
    $http.get("http://tres.fpz1920.com/controller/cMostrarEntrenadores.php")
        .then(function (response) {
            $scope.listaEntrenadores = response.data;

        }).catch(function (response) {
            console.error('error ocurred: ', response.status, response.data);
        }).finally(function () {


        });

    // USUARIOS    
    $http.get("http://tres.fpz1920.com/controller/cMostrarUsuarios.php")
        .then(function (response) {
            $scope.listaUsuarios = response.data;


        }).catch(function (response) {
            console.error('error ocurred: ', response.status, response.data);
        }).finally(function () {


        });

    //CUERPO MEDICO
    $http.get("http://tres.fpz1920.com/controller/cMostrarCuerpo.php")
    .then(function (response) {
        console.log(response);
        $scope.listaCuerpo = response.data;

    }).catch(function (response) {
        console.error('error ocurred: ', response.status, response.data);
    }).finally(function () {


    });

    $scope.deleteFunctionCuerpo =function (cuerpo, $index) {
        deleteCuerpo(cuerpo.id);        
    }
    
    $scope.updateFunctionCuerpo =function (cuerpo, $index) {
        updateCuerpo(cuerpo);        
    }

    $scope.deleteFunctionJugadores = function (jugadores, $index) {
        deletejugador(jugadores.id);

    }
    $scope.updateFunctionJugadores = function (jugador, $index) {
        updatejugador(jugador);

    }
    $scope.deleteFunctionEntrenadores = function (entrenadores, $index) {
        deleteentrenador(entrenadores.id);

    }
    $scope.updateFunctionEntrenadores = function (entrenador, $index) {
        updateentrenador(entrenador);

    }
     $scope.deleteFunctionUsuarios = function (usuarios, $index) {
         deleteusuarios(usuarios.idUser);

    }
    $scope.updateFunctionUsuarios = function (usuario, $index) {
        updateusuarios(usuario);

    }
    

}]);
$( ".selector" ).change(function() {
   
    if(this.value=="jugador"){
        $(".inscribirJugador").css("display", "block");
        $(".inscribirEntrenador").css("display", "none");
        $(".inscribirCuerpoMedico").css("display", "none");
    }else if(this.value=="entrenador"){
        $(".inscribirJugador").css("display", "none");
        $(".inscribirEntrenador").css("display", "block");
        $(".inscribirCuerpoMedico").css("display", "none");
    }else if(this.value=="cuerpoMedico"){
        $(".inscribirJugador").css("display", "none");
        $(".inscribirEntrenador").css("display", "none");
        $(".inscribirCuerpoMedico").css("display", "block");
    }
  });

  
  $("#btnExecInsertUsuario").click(function () {
        var valueSelect=$('.selector').val();
	  	var direccion=$('#insJDireccion').val();
		var dorsal=$('#insJDorsal').val();
		var posicion=$('#insJPosicion').val();
		var tlf=$('#insJTelefono').val();
		var altura=$('#insJAltura').val();
		var id_datosMedicos=$('#insJIdDatosMedicos').val();
		var id_usuario=$('#insJIdusuario').val();
		var id_equipo=$('#insJIdEquipo').val();
        
       alert(valueSelect);
        $.ajax({
            type:"POST",
            data:{'direccion':direccion, 'dorsal':dorsal,'posicion':posicion,'tlf':tlf,'altura':altura,'id_datosMedicos':id_datosMedicos,'id_usuario':id_usuario,'id_equipo':id_equipo},
            url: "http://tres.fpz1920.com/controller/cInsertNewJugador.php", 
            dataType: "json",  //type of the result
                
            success: function(result){
                    
                    console.log(result);
                    alert(direccion);
                    alert(result)    
            },
                error : function(xhr) {
                    
                }
        });
        
      });
    
   

//----------------------------------------------------------------------JS

$("#btnJugadores").click(function () {
    $(".adminJugadores").css("display", "block");
    $(".adminEntrenadores").css("display", "none");
    $(".adminUsuario").css("display", "none");
    $(".adminCuerpo").css("display", "none");
});
$("#btnEntrenadores").click(function () {
    $(".adminJugadores").css("display", "none");
    $(".adminEntrenadores").css("display", "block");
    $(".adminUsuario").css("display", "none");
    $(".adminCuerpo").css("display", "none");
});
$("#btnUsuarios").click(function () {
    $(".adminJugadores").css("display", "none");
    $(".adminEntrenadores").css("display", "none");
    $(".adminUsuario").css("display", "block");
    $(".adminCuerpo").css("display", "none");
});

$('#btnCuerpo').click(function(){
    $(".adminJugadores").css("display", "none");
    $(".adminEntrenadores").css("display", "none");
    $(".adminUsuario").css("display", "none");
    $(".adminCuerpo").css("display", "block");
});

//JUGADORES

$("#btnExecUpdateJugador").click(function () {

    var id = $('#idUpdateJugadores').val();
    var direccion = $('#direccionUpdateJugadores').val();
    var dorsal = $('#dorsalUpdateJugadores').val();
    var posicion = $('#posicionUpdateJugadores').val();
    var tlf = $('#tlfUpdateJugadores').val();
    var altura = $('#alturaUpdateJugadores').val();

    $.ajax({
        type: "GET",
        data: { 'id': id, 'direccion': direccion, 'dorsal': dorsal, 'posicion': posicion, 'tlf': tlf, 'altura': altura },
        url: "http://tres.fpz1920.com/controller/cUpdateJugador.php",
        dataType: "text",  //type of the result
        success: function (result) {

            console.log(result);
            
            location.reload(true);  //recarga la pagina



        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });

});

//delete jugador


function deleteCuerpo(id) {
    $.ajax({
        type: "GET",
        data: { 'id': id },
        url: "http://tres.fpz1920.com/controller/cDeleteCuerpo.php",

        success: function (result) {

            console.log(result);
            
            location.reload(true);
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });

}

function deletejugador(id) {
    $.ajax({
        type: "GET",
        data: { 'id': id },
        url: "http://tres.fpz1920.com/controller/cDeleteJugador.php",

        success: function (result) {

            console.log(result);
            
            location.reload(true);
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
}
//update jugador
function updatejugador(jugador) {
    id = jugador.id;
    direccion = jugador.direccion;
    dorsal = jugador.dorsal;
    posicion = jugador.posicion;
    tlf = jugador.tlf;
    altura = jugador.altura;

    $('#idUpdateJugadores').val(id);
    $('#direccionUpdateJugadores').val(direccion);
    $('#dorsalUpdateJugadores').val(dorsal);
    $('#posicionUpdateJugadores').val(posicion);
    $('#tlfUpdateJugadores').val(tlf);
    $('#alturaUpdateJugadores').val(altura);
}

//ENTRENADORES


$("#btnExecUpdateEntrenador").click(function(){

    var id=$('#idUpdateEntrenadores').val();
    var telefono=$('#tlfUpdateEntrenadores').val();
    var direccion=$('#direccionUpdateEntrenadores').val();
    var sueldo=$('#sueldoUpdateEntrenadores').val();
    var contratacion=$('#contratacionUpdateEntrenadores').val();

      $.ajax({
           type: "GET",
           data:{ 'id':id, 'telefono':telefono, 'direccion':direccion, 'sueldo':sueldo,'contratacion':contratacion},
           url: "http://tres.fpz1920.com/controller/cUpdateEntrenador.php", 
           dataType: "text",  //type of the result
           success: function(result){  
               
               console.log(result);
               location.reload(true);  //recarga la pagina
               
               //Boton delete
            
           },
           error : function(xhr) {
               alert("An error occured: " + xhr.status + " " + xhr.statusText);
           }
    });
          
 });

//delete entrenador
function deleteentrenador(id) {
    $.ajax({
        type: "GET",
        data: { 'id': id },
        url: "http://tres.fpz1920.com/controller/cDeleteEntrenador.php",

        success: function (result) {

            console.log(result);

            location.reload(true);
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
}
//update entrenador
function updateentrenador(entrenador) {
    id = entrenador.id;
    tlf = entrenador.tlf;
    direccion = entrenador.direccion;
    sueldo = entrenador.sueldo;
    contratacion = entrenador.fechaContratacion;

    $('#idUpdateEntrenadores').val(id);
    $('#tlfUpdateEntrenadores').val(tlf);
    $('#direccionUpdateEntrenadores').val(direccion);
    $('#sueldoUpdateEntrenadores').val(sueldo);
    $('#contratacionUpdateEntrenadores').val(contratacion);
}

//USUARIOS
$("#btnExecUpdate").click(function(){

    var id=$('#idUpdate').val();
    var username=$('#usernameUpdate').val();
    var contrasenia=$('#contraseniaUpdate').val();
    var name=$('#nameUpdate').val();
    var surname=$('#surnameUpdate').val();
    var email=$('#emailUpdate').val();

      $.ajax({
           type: "GET",
           data:{ 'id':id, 'username':username, 'contrasenia':contrasenia, 'name':name,'surname':surname,'email':email},
           url: "http://tres.fpz1920.com/controller/cUpdateUser.php", 
           dataType: "text",  //type of the result
           success: function(result){  
               
               console.log(result);

               location.reload(true);  //recarga la pagina
               
               //Boton delete
            
           },
           error : function(xhr) {
               alert("An error occured: " + xhr.status + " " + xhr.statusText);
           }
    });
          
 });

//delete usuarios
function deleteusuarios(id) {
    $.ajax({
        type: "GET",
        data: { 'id': id },
        url: "http://tres.fpz1920.com/controller/cDeleteUser.php",

        success: function (result) {

            console.log(result);

            location.reload(true);
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
}


function updateusuarios(usuario) {
    id = usuario.idUser;
    username = usuario.username;
    password = usuario.password;
    name = usuario.name;
    surname = usuario.surname;
    email = usuario.email;

    $('#update').modal('show');
    $('#idUpdate').val(id);
    $('#usernameUpdate').val(username);
    $('#contraseniaUpdate').val(password);
    $('#nameUpdate').val(name);
    $('#surnameUpdate').val(surname);
    $('#emailUpdate').val(email);

}


//update cuerpoMedico
function updateCuerpo(cuerpo) {
    id = cuerpo.id;
    funcion = cuerpo.funcion;
    direccion = cuerpo.direccion;
    tlf = cuerpo.tlf;


    $('#idUpdateCuerpo').val(id);
    $('#funcionUpdateCuerpo').val(funcion);
    $('#direccionUpdateCuerpo').val(direccion);
    $('#tlfUpdateCuerpo').val(tlf);
    
}

$("#btnExecUpdateCuerpo").click(function(){

    var id=$('#idUpdateCuerpo').val();
    var funcion=$('#funcionUpdateCuerpo').val();
    var direccion=$('#direccionUpdateCuerpo').val();
    var tlf=$('#tlfUpdateCuerpo').val();
    alert(funcion);

      $.ajax({
           type: "GET",
           data:{ 'id':id, 'funcion':funcion, 'direccion':direccion, 'tlf':tlf},
           url: "http://tres.fpz1920.com/controller/cUpdateCuerpoMedico.php", 
           dataType: "text",  //type of the result
           success: function(result){  
               
               console.log(result);
               location.reload(true);  //recarga la pagina
               
               //Boton delete
            
           },
           error : function(xhr) {
               alert("An error occured: " + xhr.status + " " + xhr.statusText);
           }
    });
          
 });

  
