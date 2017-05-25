<?php
	include_once 'DB_conexion.php';
	include_once 'funciones_DB.php';

	

if(!empty($_POST)){
		
	$documento = $_POST['documento']; 
	$nombres   = $_POST['nombres'];
	$apellido  = $_POST['apellido'];
	$telefono  = $_POST['telefono']; 
	$celular   = $_POST['celular'];
	$direccion = $_POST['direccion'];
	$mail      = $_POST['mail'];
	$accion	   = $_POST['accion'];

	switch ($accion) {
    case "alta":
        setChofer($nombres, $apellido, $documento, $telefono, $celular, $direccion, $mail);
        break;
    case "baja":
         eliminarChofer($documento);
        break;
    
	}

}

if(!empty($_GET)){
	
	if (!empty($_GET['documento'])){
		$documento = $_GET['documento']; 	
	}
	
	$accion	   = $_GET['accion'];

	switch ($accion) {
    case "existe":
        echo existeChofer($documento);
        break;
    case "todo":
   		echo getChoferes(); 
   		break;
	}


}

?>



