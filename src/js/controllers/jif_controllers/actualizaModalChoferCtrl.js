(function(){
	
	app.controller('actualizaModalChoferCtrl',['$http','$log','$scope','$modal',function($http, $log, $scope,$modal){

		 $scope.choferSel = {'documento':'',
	                  'nombres':'',
	                  'apellido':'',
	                  'telefono':'',
	                  'celular':'',
	                  'direccion':'',
	                  'mail':''};

		var registro;
		registro = $('#data').DataTable().row( $('#data').DataTable().$('tr.selected') ).data();


	    if (registro != undefined) {

			$scope.choferSel.documento 	= registro.documento;
		    $scope.choferSel.nombres 	= registro.nombre;
		    $scope.choferSel.apellido 	= registro.apellido;
		    $scope.choferSel.telefono 	= registro.tel_fijo;
		    $scope.choferSel.celular 	= registro.tel_cel;
		    $scope.choferSel.direccion 	= registro.direccion
		    $scope.choferSel.mail 		= registro.email;
		}

	}]);

})()