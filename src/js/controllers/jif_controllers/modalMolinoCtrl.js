(function() {

	app.controller('modalMolinoCtrl',['$scope',function($scope){

		var d;
		d = $('#data-molinos').DataTable().row( $('#data-molinos').DataTable().$('tr.selected') ).data();

		if (d != undefined) {
	       	$scope.razon_social = d.razon_social;    
	     }
	}]);

})()