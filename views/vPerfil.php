
<!DOCTYPE html>
<?php
session_start();
?>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Perfil</title>


</head>
<body>

<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src= <?php
                                        echo $_SESSION['img'];
                                        ?> 
                                        alt=""/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                       <?php
                                        echo $_SESSION['nombre'];
                                        ?>
                                                
                                    </h5>
                                    <h5>
                                        <?php
                                        echo $_SESSION['surname'];
                                        ?>
                                    </h5>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Datos</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                   
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Nombre de Usuario</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>
                                                <?php
                                                echo $_SESSION['name'];
                                                ?>
                                      
                                                
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Contrasena</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>
                                                <?php
                                                echo $_SESSION['password'];
                                                ?>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>
                                                 <?php
                                                    echo $_SESSION['email'];
                                                ?>
                                                </p>
                                            </div>
                                        </div>
                                        
                                             
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="css/perfil.css" rel="stylesheet" type="text/css" />
</body>
</html>