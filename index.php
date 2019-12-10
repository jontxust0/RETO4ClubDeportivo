<!DOCTYPE html>
<?php
session_start();
?>
<html>

<head>
<title>Zornotza Hawks</title>
<link rel="icon" type="image/png" href="views/img/logoSinTitulo.png">


<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
	integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
	crossorigin="anonymous"></script>
<script
	src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
	integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
	crossorigin="anonymous"></script>
<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
	x
	integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
	crossorigin="anonymous"></script>
	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	
	
	<script src="views/js/jsFuntions.js" type="text/javascript"></script>
<link href="views/css/index.css" rel="stylesheet" type="text/css" />
<link href="views/css/style.css" rel="stylesheet" type="text/css" />

</head>

<body id="bodyInicio">

	<div>
		<!--Hay que hacer una imagen de patrocinadores con 150px para que quede bien-->
		<img src="views/img/header.png" id="header">
	</div>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom">
		<a class="navbar-brand" href="#"> <img
			src="views/img/logoSinTitulo.png" alt="Zornotza Hawks" height="42"
			width="42">
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse " id="navbarSupportedContent">
			<ul class="navbar-nav navbar-center mr-auto">
				<li class="nav-item active"><a class="nav-link "
					href="index.html">Inicio <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item "><a class="nav-link"
					href="views/vPresentacion.html">Presentación <span
						class="sr-only"></span></a></li>

				<li class="nav-item"><a class="nav-link"
					href="views/vInstalaciones.html">Instalaciones <span
						class="sr-only"></span></a></li>
				<li class="nav-item"><a class="nav-link"
					href="views/vContactanos.html">Contacto</a></li>
					
				<li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <?php 
                
                
                if(isset($_SESSION['name'])){
                    echo $_SESSION["name"];
                }else{
                    
                    echo "Usuario";
                }
                    
                ?>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Perfil</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a id="logout" class="dropdown-item">Cerrar Sesión </a>
              </div>
            </li>
					<li class="nav-item">
						<a class="nav-link" href="views/vJugadores.html">Jugadores</a>
					  </li>
			</ul>
			<div class="divider"></div>
			<div class="navbar-center">
				<button class="btn btn-outline-light my-2 my-sm-0" 
					data-toggle="modal" data-target="#myModal">Log In</button>
			</div>
		</div>
	</nav>
	<br>
	<div class="row">
		<div class="iCategorias col-2 bg-dark">
			<p>Categorias</p>
			<div class="nav flex-column nav-pills" id="v-pills-tab"
				role="tablist" aria-orientation="vertical">
				<a class="nav-link active" id="v-pills-home-tab" data-toggle="pill"
					href="#v-pills-home" role="tab" aria-controls="v-pills-home"
					aria-selected="true">Infantil</a> <a class="nav-link "
					id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile"
					role="tab" aria-controls="v-pills-profile" aria-selected="false">Cadete</a>
				<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill"
					href="#v-pills-messages" role="tab"
					aria-controls="v-pills-messages" aria-selected="false">Juvenil</a>
				<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill"
					href="#v-pills-settings" role="tab"
					aria-controls="v-pills-settings" aria-selected="false">S&eacute;nior</a>
			</div>
		</div>
		<div class="col-9 ">
			<div class="tab-content" id="v-pills-tabContent">
				<div class="tab-pane fade show active" id="v-pills-home"
					role="tabpanel" aria-labelledby="v-pills-home-tab">
					<h2>Infantiles</h2>
					<br>
					<div class="row rowImagen">
						<!--CARROUSEL INFANTIL-->
						<div class="col-12 col-lg-9">
							<div id="carouselInfantil" class="carousel slide"
								data-ride="carousel">
								<div class="carousel-inner" role="listbox">
									<div class="carousel-item active">
										<img class="d-block w-100"
											src="https://lh5.googleusercontent.com/IYfwSkmAkk5O7RVtmJtot05kduhEzKNOmuIUfF3gR159bqN2QGOU75QL3CsGfeGubO_RojxfaAZm-3RAB49yxxT_KqXXYSlls9PQbm88MCcLl2qPa6bcwtIgNjC9wO4I49f_I2nI"
											alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100"
											src="https://www.75.sanfer.es/images/deporte/baloncesto.jpg"
											alt="Second slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100"
											src="https://www.bizkaiabasket.com/wp-content/uploads/2015/01/GIPZK-BIZK-MINI-MASC-KORTAJ.jpg"
											alt="Third slide">
									</div>
								</div>
								<a class="carousel-control-prev" href="#carouselInfantil"
									role="button" data-slide="prev"> <span
									class="carousel-control-prev-icon" aria-hidden="true"></span> <span
									class="sr-only">Previous</span>
								</a> <a class="carousel-control-next" href="#carouselInfantil"
									role="button" data-slide="next"> <span
									class="carousel-control-next-icon" aria-hidden="true"></span> <span
									class="sr-only">Next</span>
								</a>
							</div>
						</div>
						<!--TEXTO INFANTIL-->
						<div class="col-12 col-lg-3">
							<h4>Equipos Infantiles</h4>
							<a href="#"> Infantil A</a> <a href="#"> Infantil B</a> <a
								href="#"> Infantil C</a> <a href="#"> Infantil D</a>
						</div>
					</div>

				</div>

				<div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
					aria-labelledby="v-pills-profile-tab">

					<h2>Cadetes</h2>
					<br>
					<div class="row">
						<!--CARROUSEL CADETE-->
						<div class="col-12 col-lg-9">
							<div id="carouselCadete" class="carousel slide"
								data-ride="carousel">
								<div class="carousel-inner" role="listbox">
									<div class="carousel-item active">
										<img class="d-block w-100"
											src="http://www.ardoibaloncesto.com/wp-content/uploads/2017/05/cadete-masc.jpg"
											alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100"
											src="https://www.eldia.es/blogs/basketmania/wp-content/uploads/2016/04/NP160420-Baloncesto-Cad-Mas.jpg"
											alt="Second slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100"
											src="http://fabasket.com/wp-content/uploads/2016/10/cadete-femenina.jpg"
											alt="Third slide">
									</div>
								</div>
								<a class="carousel-control-prev" href="#carouselCadete"
									role="button" data-slide="prev"> <span
									class="carousel-control-prev-icon" aria-hidden="true"></span> <span
									class="sr-only">Previous</span>
								</a> <a class="carousel-control-next" href="#carouselCadete"
									role="button" data-slide="next"> <span
									class="carousel-control-next-icon" aria-hidden="true"></span> <span
									class="sr-only">Next</span>
								</a>
							</div>
						</div>
						<!--TEXTO CADETE-->
						<div class="col-12 col-lg-3">
							<h4>Equipos CADETES</h4>
							<a href="#"> Cadete A</a> <a href="#"> Cadete B</a> <a href="#">
								Cadete C</a> <a href="#"> Cadete D</a>
						</div>
					</div>

				</div>
				<div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
					aria-labelledby="v-pills-messages-tab">
					<h2>Juvenil</h2>
					<br>
					<div class="row">
						<!--CARROUSEL JUVENIL-->
						<div class="col-12 col-lg-9">
							<div id="carouselJuvenil" class="carousel slide" data-ride="carousel">
								<div class="carousel-inner" role="listbox">
									<div class="carousel-item active">
										<img class="d-block w-100"
											src="http://www.extremadura.com/uploads/pg_models/media/photo/derivative/image/72154/equipo-juvenil-zafra-baloncesto-equipo-juvenil-baloncesto-zafra_md.jpg"
											alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100"
											src="http://cdvillares.com/contentimg/20464920170329_939673_juvenil-2016-2017-002.jpg"
											alt="Second slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100"
											src="https://www.guadaque.com/media/k2/items/cache/07f2d6b7ba9ae36f8ad7b5b4cc2b0f7a_XL.jpg"
											alt="Third slide">
									</div>
								</div>
								<a class="carousel-control-prev" href="#carouselJuvenil"
									role="button" data-slide="prev"> <span
									class="carousel-control-prev-icon" aria-hidden="true"></span> <span
									class="sr-only">Previous</span>
								</a> <a class="carousel-control-next" href="#carouselJuvenil"
									role="button" data-slide="next"> <span
									class="carousel-control-next-icon" aria-hidden="true"></span> <span
									class="sr-only">Next</span>
								</a>
							</div>
						</div>
						<!--TEXTO CADETE-->
						<div class="col-12 col-lg-3">
							<h4>Equipos Juveniles</h4>
							<a href="#"> Juvenil A</a> <a href="#"> Juvenil B</a> <a href="#">
								Juvenil C</a> <a href="#"> Juvenil D</a>
						</div>
					</div>


				</div>
				<div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
					aria-labelledby="v-pills-settings-tab">
					<h2>S&eacute;niors</h2>
					<br>
					<div class="row">
						<!--CARROUSEL SENIOR-->
						<div class="col-12 col-lg-9">
							<div id="carouselSenior" class="carousel slide"
								data-ride="carousel">
								<div class="carousel-inner" role="listbox">
									<div class="carousel-item active">
										<img class="d-block w-100"
											src="https://1.bp.blogspot.com/-CSmhviSOUr4/WMEfrWH6ekI/AAAAAAAAJSI/FCXYiTUy5gAn2YBu3-UdEtzl4TRc3Dp5ACLcB/s1600/Senior%2B1%25C2%25BA%2B%2B2016.2017%2Brecortado.jpeg"
											alt="First slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100"
											src="https://www.burgosdeporte.com/fotos/986079.jpg"
											alt="Second slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100"
											src="https://cbsanmartindelavega.es/wp-content/uploads/2018/03/Equipo-Senior-1024x768.jpg"
											alt="Third slide">
									</div>
								</div>
								<a class="carousel-control-prev" href="#carouselSenior"
									role="button" data-slide="prev"> <span
									class="carousel-control-prev-icon" aria-hidden="true"></span> <span
									class="sr-only">Previous</span>
								</a> <a class="carousel-control-next" href="#carouselSenior"
									role="button" data-slide="next"> <span
									class="carousel-control-next-icon" aria-hidden="true"></span> <span
									class="sr-only">Next</span>
								</a>
							</div>
						</div>
						<!--TEXTO SENIOR-->
						<div class="col-12 col-lg-3">
							<h4>Equipos S&eacute;niors</h4>
							<a href="#"> S&eacute;nior A</a> <a href="#"> S&eacute;nior B</a> <a href="#">
								S&eacute;nior C</a> <a href="#"> S&eacute;nior D</a>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	<!--Footer-->
	<div>
		<p>Lorem Ipsum is simply dummy text of the printing and
			typesetting industry. Lorem Ipsum has been the industry's standard
			dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. It has
			survived not only five centuries, but also the leap into electronic
			typesetting, remaining essentially unchanged. It was popularised in
			the 1960s with the release of Letraset sheets containing Lorem Ipsum
			passages, and more recently with desktop publishing software like
			Aldus PageMaker including versions of Lorem Ipsum.</p>
	</div>


	<!-- Modal -->
	<div id="myModal" class="modal fade">
		<div class="modal-dialog modal-login">
			<div class="modal-content">
				<div class="modal-header">
					<div class="avatar">
						<img src="views/img/logo.png" alt="Avatar">
					</div>
					<h4 class="modal-title">Member Login</h4>
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">
					
						<div class="form-group">
							<input type="text" class="form-control" id="name" name="usuario"
								placeholder="Username" required="required">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" id="password" name="contrasena"
								placeholder="Password" required="required">
						</div>
						<div class="form-group">
							<button id="login" 
								class="btn btn-primary btn-lg btn-block login-btn">Login</button>
						</div>
					
				</div>
				<div class="modal-footer">
					<a href="views/vNewUser.html">New User</a>
				</div>
			</div>
		</div>
	</div>


</body>

</html>