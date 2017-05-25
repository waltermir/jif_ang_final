(function(){
	app.controller('actualizaModalMolinoCtrl',['$scope',function($scope){
		 
	      $scope.molinoSel = {
	            'codigo': '',
	            'razonSocial': '',
	            'tel_fijo': '',
	            'internos': '',
	            'direccion': '',
	            'mail': '',
	            'cuit': ''
	        };


		var registro;
		registro = $('#data-molinos').DataTable().row( $('#data-molinos').DataTable().$('tr.selected') ).data();


	    if (registro != undefined) {

			$scope.molinoSel.codigo 	= registro.codigo;
		    $scope.molinoSel.razonSocial= registro.razon_social;
		    $scope.molinoSel.tel_fijo 	= registro.tel_fijo;
		    $scope.molinoSel.internos 	= registro.internos;
		    $scope.molinoSel.direccion	= registro.direccion;
		    $scope.molinoSel.mail 		= registro.email;
		    $scope.molinoSel.cuit 		= registro.cuit;
		}

		$scope.keyPress = function(keyEvent) {
	  		if (keyEvent == 13 || keyEvent == 9 )
	    		alert('I am an alert');
			}


	}]);

})()