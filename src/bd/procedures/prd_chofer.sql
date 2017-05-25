DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `prd_chofer`(p_documento	int(11))
BEGIN

	UPDATE chofer
    SET baja_fecha = now()
    WHERE documento = p_documento;
	
END$$
DELIMITER ;
