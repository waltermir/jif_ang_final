<?php
	include_once 'DB_conexion.php';
	include_once 'funciones_DB.php';

	

if(!empty($_POST)){
	$codigo		 = $_POST['codigo']; 	
	$razonSocial = $_POST['razonSocial']; 
	$telFijo  	 = $_POST['tel_fijo']; 
	$internos    = $_POST['internos'];
	$direccion   = $_POST['direccion'];
	$email 		 = $_POST['email'];
    $cuit	  	 = $_POST['cuit'];
	$accion	     = $_POST['accion'];

                            
    

	switch ($accion) {
	case "alta":
		setMolino(0, $razonSocial, $telFijo, $internos, $direccion, $email, $cuit);
		break;
	case "baja":
		 eliminarMolino($codigo);
		break;
	case "modificacion":
		setMolino($codigo, $razonSocial, $telFijo, $internos, $direccion, $email, $cuit);
		break;
	
	}

}

if(!empty($_GET)){
	
	if (!empty($_GET['cuit'])){
		$cuit = $_GET['cuit']; 	
	}
	
	$accion	   = $_GET['accion'];

	switch ($accion) {
	
		case "todo":
			echo getMolinos(); 
			break;
		case "existe":
        	echo existeMolino($cuit);
        break;
	}


}

?>



