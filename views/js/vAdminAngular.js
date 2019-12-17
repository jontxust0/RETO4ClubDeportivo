var app = angular.module('vAdminAngular', []);


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

    
//Boton delete
$(".btnDeleteJugadores").click(function () {
    alert("asdfnkjnnkjjnknkjn");
    var id = $(this).val();
    deleteFunctionJugadores(id);
});
//Modal Update
$(".btnUpdateJugadores").click(function () {
    $('#idUpdate').val($(this).closest("tr").children().eq(0).text());
    $('#direccionUpdate').val($(this).closest("tr").children().eq(1).text());
    $('#dorsalUpdate').val($(this).closest("tr").children().eq(2).text());
    $('#posicionUpdate').val($(this).closest("tr").children().eq(3).text());
    $('#tlfUpdate').val($(this).closest("tr").children().eq(4).text());
    $('#alturaUpdate').val($(this).closest("tr").children().eq(5).text());
});
function deleteFunctionJugadores(id) {

    console.log(id);
    alert(id);

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
$("#btnExecUpdateJugador").click(function () {
    alert("lsknsnf");
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

            location.reload(true);  //recarga la pagina



        },
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    });

});

}]);




