app.controller('modalChoferCtrl',['$scope',function($scope){

	var d;
	d = $('#data').DataTable().row( $('#data').DataTable().$('tr.selected') ).data();

	if (d != undefined) {
       	$scope.nombre = d.nombre;    
     }
}]);