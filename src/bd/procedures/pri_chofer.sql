DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `pri_chofer`(
IN _nombre 	 VARCHAR(45),
IN _apellido  VARCHAR(45), 
IN _documento INTEGER, 
IN _tel_fijo	 varchar(10), 
IN _tel_cel	 varchar(12), 
IN _direccion varchar(100), 
IN _email	 varchar(50)
)
BEGIN

	IF (SELECT count(*) FROM chofer WHERE documento = _documento)>0 THEN
		BEGIN
			UPDATE transportesflores.chofer
			SET tel_fijo = _tel_fijo,
			tel_cel = _tel_cel,
			nombre = _nombre,
			email = _email,
			direccion = _direccion,
			apellido = _apellido
			WHERE documento = _documento;
		END;
		ELSE 
		BEGIN
			  INSERT INTO transportesflores.chofer
				(documento,
				nombre,
				apellido,
				tel_fijo,
				tel_cel,
				direccion,
				email,
				alta_fecha,
				baja_fecha)
				VALUES
				(_documento,
				_nombre,
				_apellido,
				_tel_fijo,
				_tel_cel,
				_direccion,
				_email,
				now(),
				null);
		END;
    END IF;
	
END$$
DELIMITER ;
