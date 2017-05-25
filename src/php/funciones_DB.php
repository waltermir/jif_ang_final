<?php

include_once 'DB_conexion.php';

function setChofer($nombre, $apellido, $documento, $tel_fijo, $tel_cel, $direccion, $email){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = "call pri_chofer('".$nombre."','".$apellido."',".$documento.",'".$tel_fijo."','".$tel_cel."','".$direccion."','".$email."')";
		
	ejecutarNoQuery("transportesflores", $sql,$conn);

}


function getChoferes(){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = 'call prs_choferes()';
	
	return ejecutarQueryJson("transportesflores", $sql,$conn);

}

function getChoferesArray(){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = 'call prs_choferes()';
	
	return ejecutarQuery("transportesflores", $sql,$conn);

}

function eliminarChofer($documento){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = "call prd_chofer(".$documento.")";
			
	ejecutarNoQuery("transportesflores", $sql,$conn);

}

function existeChofer($documento){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = "call prs_existe_chofer (".$documento.")";

	return trim(ejecutarQuery("transportesflores", $sql,$conn)[0]['existe']);
 
}

function getMolinos(){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = 'call prs_molinos()';
	
	return ejecutarQueryJson("transportesflores", $sql,$conn);

}

function setMolino($codigo, $razonSocial, $telefono, $internos, $direccion, $mail, $cuit){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = "call pri_molino(".$codigo.",'".$razonSocial."','".$telefono."','".$internos."','".$direccion."','".$mail."','".$cuit."')";
			
	ejecutarNoQuery("transportesflores", $sql,$conn);

}

function existeMolino($cuit){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = "call prs_existe_molino ('".$cuit."')";

	return trim(ejecutarQuery("transportesflores", $sql,$conn)[0]['existe']);
 
}

function eliminarMolino($codigo){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = "call prd_molino(".$codigo.")";
			
	ejecutarNoQuery("transportesflores", $sql,$conn);

}



?>

