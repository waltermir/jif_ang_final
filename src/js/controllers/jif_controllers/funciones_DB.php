<?php

include_once 'DB_conexion.php';

function setChofer($nombre, $apellido, $documento, $tel_fijo, $tel_cel, $direccion, $email){

	$conn = conectar("localhost:3306", "root", "ankara01");

	$sql = 'call pri_chofer('.$nombre.','.$apellido.','.$documento.','.$tel_fijo.','.$tel_cel.','.$direccion.','.$email.')';
	
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

?>

