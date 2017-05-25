(function() {
    app.controller('molinosCtrl', ['$http', '$log', '$scope', '$modal', function($http, $log, $scope, $modal) {
        $scope.modalInstance = {};
        $scope.modalInstanceBaja = {};
        $scope.actualizaModalInstance = {};
        
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "25",
            "hideDuration": "100",
            "timeOut": "2000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        $scope.molino = {
            'codigo': '',
            'razonSocial': '',
            'tel_fijo': '',
            'internos': '',
            'direccion': '',
            'mail': '',
            'cuit': ''
        };
        $scope.refresh = true;

        $scope.molinos = {};
       

$http({
              method: 'GET',
              url: './php/procesaMolinosJson.php',
              params: {accion:'todo'}
            }).then(function successCallback(response) {
 					$scope.molinos = response.data;
 					$scope.refresh = !$scope.refresh;
               }, function errorCallback(response) {
               $log.log('Error al procesar procesaMolinosJson.php');
                $log.log(status);         
     });

        function seleccionRegistro() {
            //Agrego la posibilidad de seleccionar un registro del datatable mediante un click. 
            $('#data-tbody').on('click', 'tr', function() {
                var reg = this;
                if ($(reg).hasClass('selected')) {
                    $(reg).removeClass('selected');
                } else {
                    $('#data-molinos').DataTable().$('tr.selected').removeClass('selected');
                    $(reg).removeClass('odd');
                    $(reg).addClass('selected');
                }
            });
            return;
        };

        $scope.inicio = function() {
            seleccionRegistro();
        }

        $scope.recargar = function() {
            $http.get('./php/procesaMolinosJson.php', {
                params: {
                    accion: "todo"
                }
            }).success(function(data) {
                $('#data-molinos').DataTable().clear().rows.add(data).draw();
            }).error(function(data, status, headers, config) {
                $log.log('Error al procesar procesaChoferesJson.php');
                $log.log(status);
            });
        };

        $scope.open = function(size) {
            modalInstance = $modal.open({
                templateUrl: './tpl/JIF_tpl/molinoModalContent.html',
                controller: 'molinosCtrl',
                size: size,
                resolve: {}
            })
        };

        $scope.openActualiza = function(size) {
            var d;
            d = $('#data-molinos').DataTable().row($('#data-molinos').DataTable().$('tr.selected')).data();
            if (d != undefined) {
                actualizaModalInstance = $modal.open({
                    templateUrl: './tpl/JIF_tpl/ActualizarMolinoModalContent.html',
                    controller: 'actualizaModalMolinoCtrl',
                    size: size,
                    resolve: {}
                })
            }
        };

        $scope.openAlertBaja = function(size) {
            var d;
            d = $('#data-molinos').DataTable().row($('#data-molinos').DataTable().$('tr.selected')).data();
            if (d != undefined) {
                modalInstanceBaja = $modal.open({
                    templateUrl: './tpl/JIF_tpl/bajaModalMolino.html',
                    controller: 'modalMolinoCtrl',
                    size: size,
                    resolve: {}
                })
            }
        };

        $scope.ok = function() {
            $http.get('./php/procesaMolinosJson.php', {
                params: {
                    cuit: $scope.molino.cuit,
                    accion: "existe"
                }
            }).success(function(data) {
                if (data.indexOf('No existe') > 0) {
                    $http({
                        url: "./php/procesaMolinosJson.php",
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: $.param({
                            codigo: 0,
                            razonSocial: $scope.molino.razonSocial,
                            tel_fijo: $scope.molino.tel_fijo,
                            internos: $scope.molino.internos,
                            direccion: $scope.molino.direccion,
                            email: $scope.molino.mail,
                            cuit: $scope.molino.cuit,
                            accion: "alta"
                        })
                    }).success(function(data, status, headers, config) {
                        $scope.data = data;
                        $scope.recargar();
                        toastr.success('', 'Se dio de alta satisfactoriamente el molino!!');
                        $scope.cancel();
                    }).error(function(data, status, headers, config) {
                        $scope.status = status;
                        toastr.error('', 'Error al dar de alta el molino!!');
                        $scope.cancel();
                    });
                } else //(data.indexOf('no existe')>0
                {
                    toastr.error("", "Ya existe un molino con este cuit");
                }
            }).error(function(data, status, headers, config) {
                $log.log('Error al procesar procesaMolinosJson.php');
                $log.log(status);
                existe = false;
            });
        };

        $scope.cancel = function() {
            modalInstance.dismiss('cancel');
        };

        $scope.cancelBaja = function() {
            modalInstanceBaja.dismiss('cancel');
        };

        $scope.cancelModif = function() {
            actualizaModalInstance.dismiss('cancel');
        };

        $scope.okBaja = function() {
            var registro = $('#data-molinos').DataTable().row($('#data-molinos').DataTable().$('tr.selected')).data();
            $http({
                url: "./php/procesaMolinosJson.php",
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param({
                    codigo: registro.codigo,
                    accion: "baja"
                })
            }).success(function(data, status, headers, config) {
                $scope.data = data;
                $scope.recargar();
                toastr.success('', 'Se dio de baja satisfactoriamente el molino!!');
                $scope.cancelBaja();
            }).error(function(data, status, headers, config) {
                $scope.status = status;
                toastr.error('', 'Error al dar de baja el molino!!');
                $scope.cancelBaja();
            });
        }

        $scope.okModif = function(regModificar) {
            $http({
                url: "./php/procesaMolinosJson.php",
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: $.param({
                    codigo: regModificar.codigo,
                    razonSocial: regModificar.razonSocial,
                    tel_fijo: regModificar.tel_fijo,
                    internos: regModificar.internos,
                    direccion: regModificar.direccion,
                    email: regModificar.mail,
                    cuit: regModificar.cuit,
                    accion: "modificacion"
                })
            }).success(function(data, status, headers, config) {
                $scope.data = data;
                $scope.recargar();
                toastr.success('', 'Se modificó satisfactoriamente el molino!!');
                $scope.cancelModif();
            }).error(function(data, status, headers, config) {
                $scope.status = status;
                toastr.error('', 'Error al modificar el molino!!');
                $scope.cancelModif();
            });
        }
    
    	



    }]);


	

	

})()