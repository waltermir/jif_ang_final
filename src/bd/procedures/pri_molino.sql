DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `pri_molino`(
IN _codigo		int(11),
IN _razon_social	varchar(60),
IN _tel_cel 		varchar(12), 
IN _tel_fijo 	varchar(10), 
IN _internos		varchar(50), 
IN _direccion	varchar(100), 
IN _email		varchar(50), 
IN _cuit			varchar(11)	
)
BEGIN
	
	DECLARE _max_cod int(11);

	IF (_codigo > 0) THEN
		BEGIN
			UPDATE transportesflores.molino
			SET tel_fijo = _tel_fijo,
			tel_cel = _tel_cel,
			razon_social = _razon_social,
			email = _email,
			direccion = _direccion,
			cuit = _cuit,
            internos = _internos
			WHERE codigo = _codigo;
		END;
		ELSE 
		BEGIN
			  
              select _max_cod = max(codigo) + 1
              from molino;
              
              
              INSERT INTO transportesflores.molino
				(codigo,
				razon_social,
				tel_cel,
				tel_fijo,
				internos,
				direccion,
				email,
                cuit,
				alta_fecha,
				baja_fecha)
				VALUES
				(_max_cod,
				_razon_social,
				_tel_cel,
				_tel_fijo,
				_internos,
				_direccion,
				_email,
                _cuit,
				now(),
				null);
		END;
    END IF;
	
END$$
DELIMITER ;
