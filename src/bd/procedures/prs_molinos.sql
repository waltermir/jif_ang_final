DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `prs_molinos`()
BEGIN
	SELECT `codigo`, 
			`razon_social`, 
            `tel_cel`, 
            `tel_fijo`, 
            `internos`, 
            `direccion`, 
            `email`, 
            `cuit`, 
            `alta_fecha`, 
            `baja_fecha`
    FROM transportesflores.molino
    WHERE baja_fecha IS NULL;
    
    
END$$
DELIMITER ;
