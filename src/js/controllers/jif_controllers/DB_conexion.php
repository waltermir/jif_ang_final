<?php


function conectar($host, $usuario, $password)
{
	$enlace =  mysqli_connect($host, $usuario, $password);
	if (!$enlace) 
	{
	    die('No pudo conectarse: ' . mysql_error());
	}	
	return $enlace;
}

//RETORNA REGISTROS
function ejecutarQuery($base, $sql, $conn)
{
	//$enlace = conectar();

	if (!mysqli_select_db($conn, $base)) 
	{
    	echo 'No se pudo seleccionar base de datos';
    	exit;
	}
	
	$result = mysqli_query($conn, $sql);

	if (!$result) {
	    echo "No se pudo ejecutar Consulta";
	    echo 'MySQL Error: ' . mysql_error();
	    exit;
	}

	$filas = array();
	
	$i = 0;
	while ($row = mysqli_fetch_assoc($result)) 
	{	
	    $filas[$i] =  $row;
	    $i = $i + 1;
	}

	mysqli_free_result($result);

	mysqli_close($conn);
	
	return $filas;		
}

//NO RETORNA REGISTROS
function ejecutarNoQuery($base, $sql,$conn)
{
	//$enlace = conectar();

	if (!mysqli_select_db($conn,$base)) 
	{
    	echo 'No se pudo seleccionar base de datos';
    	exit;
	}
	
	$result = mysqli_query($conn,$sql);

	if (!$result) {
	    echo "No se pudo ejecutar Consulta";
	    echo 'MySQL Error: ' . mysqli_error($conn);
	    exit;
	}
}


function ejecutarQueryJson($base, $sql, $conn)
{
	if (!mysqli_select_db($conn, $base)) 
	{
    	echo 'No se pudo seleccionar base de datos';
    	exit;
	}
	
	$result = mysqli_query($conn, $sql);

	if (!$result) {
	    echo "No se pudo ejecutar Consulta";
	    echo 'MySQL Error: ' . mysql_error();
	    exit;
	}

	$filas = array();
	
	$i = 0;
	while ($row = mysqli_fetch_assoc($result)) 
	{	
	    $filas[$i] =  $row;
	    $i = $i + 1;
	}

	mysqli_free_result($result);

	mysqli_close($conn);
	
	//return $filas;		
	return json_encode($filas);		
}



?>