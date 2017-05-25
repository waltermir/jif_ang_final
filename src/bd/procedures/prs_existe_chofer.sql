DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `prs_existe_chofer`(_documento int(11))
BEGIN

	IF (SELECT count(*) FROM chofer WHERE documento = _documento)>0 THEN
		BEGIN
			select "existe" existe;
		END; 
		ELSE
		BEGIN
			select "No existe" existe;
		END;
    END IF;

END$$
DELIMITER ;
