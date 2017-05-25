DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `prd_molino`(_codigo	int(11))
BEGIN

	UPDATE molino
    SET baja_fecha = now()
    WHERE codigo = _codigo;
	
END$$
DELIMITER ;
