DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `prs_choferes`()
BEGIN
	
    SELECT documento,
	nombre,
	apellido,
	tel_fijo,
	tel_cel,
	direccion,
	email
    FROM transportesflores.chofer
    WHERE baja_fecha IS NULL;
    
    
END$$
DELIMITER ;
