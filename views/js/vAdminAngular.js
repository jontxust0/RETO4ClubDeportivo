var app = angular.module('vAdminAngular', []);


// JUGADORES
app.controller('vAdminControlador', ['$scope', '$http', function ($scope, $http) {

    $http.get("../controller/cMostrarJugadores.php")
        .then(function (response) {
            $scope.listaJugadores = response.data;

        }).catch(function (response) {
            console.error('error ocurred: ', response.status, response.data);
        }).finally(function () {


        });

    // ENTRENADORES
    $http.get("../controller/cMostrarEntrenadores.php")
        .then(function (response) {
            $scope.listaEntrenadores = response.data;

        }).catch(function (response) {
            console.error('error ocurred: ', response.status, response.data);
        }).finally(function () {


        });

    // USUARIOS    
    $http.get("../controller/cMostrarUsuarios.php")
        .then(function (response) {
            $scope.listaUsuarios = response.data;


        }).catch(function (response) {
            console.error('error ocurred: ', response.status, response.data);
        }).finally(function () {


        });



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
//----------------------------------------------------------------------

$("#btnJugadores").click(function () {
    $(".adminJugadores").css("display", "block");
    $(".adminEntrenadores").css("display", "none");
    $(".adminUsuario").css("display", "none");
});
$("#btnEntrenadores").click(function () {
    $(".adminJugadores").css("display", "none");
    $(".adminEntrenadores").css("display", "block");
    $(".adminUsuario").css("display", "none");
});
$("#btnUsuarios").click(function () {
    $(".adminJugadores").css("display", "none");
    $(".adminEntrenadores").css("display", "none");
    $(".adminUsuario").css("display", "block");
});

//JUGADORES

$("#btnExecUpdateJugador").click(function () {

    var id = $('#idUpdate').val();
    var direccion = $('#direccionUpdate').val();
    var dorsal = $('#dorsalUpdate').val();
    var posicion = $('#posicionUpdate').val();
    var tlf = $('#tlfUpdate').val();
    var altura = $('#alturaUpdate').val();

    $.ajax({
        type: "GET",
        data: { 'id': id, 'direccion': direccion, 'dorsal': dorsal, 'posicion': posicion, 'tlf': tlf, 'altura': altura },
        url: "../Controller/cUpdateJugador.php",
        dataType: "text",  //type of the result
        success: function (result) {

            console.log(result);
            alert("updateee");
            location.reload(true);  //recarga la pagina



        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });

});

//delete jugador
function deletejugador(id) {
    $.ajax({
        type: "GET",
        data: { 'id': id },
        url: "../controller/cDeleteJugador.php",

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

    var id=$('#idUpdate').val();
    var telefono=$('#tlfUpdate').val();
    var direccion=$('#direccionUpdate').val();
    var sueldo=$('#sueldoUpdate').val();
    var contratacion=$('#contratacionUpdate').val();

      $.ajax({
           type: "GET",
           data:{ 'id':id, 'telefono':telefono, 'direccion':direccion, 'sueldo':sueldo,'contratacion':contratacion},
           url: "../controller/cUpdateEntrenador.php", 
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
        url: "../controller/cDeleteEntrenador.php",

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

//delete entrenador
function deleteusuarios(id) {
    $.ajax({
        type: "GET",
        data: { 'id': id },
        url: "../controller/cDeleteUser.php",

        success: function (result) {

            console.log(result);

            location.reload(true);
        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });
}


function updateusuario(usuario) {
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

  
   