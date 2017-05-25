(function() {

app.controller('ChoferesCtrl', ['$http', '$log', '$scope', '$modal', function($http, $log, $scope, $modal) {
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
    $scope.chofer = {
        'documento': '',
        'nombres': '',
        'apellido': '',
        'telefono': '',
        'celular': '',
        'direccion': '',
        'mail': ''
    };
    $scope.refresh = true;
    $scope.choferes = {};
  

    $http({
              method: 'GET',
              url: './php/procesaChoferesJson.php',
              params: {accion:'todo'}
            }).then(function successCallback(response) {
                 $scope.choferes = response.data;
                 $scope.refresh = !$scope.refresh;
              }, function errorCallback(response) {
               $log.log('Error al procesar procesaChoferesJson.php');
               $log.log(status);         
     });




    function seleccionRegistro() {
        //Agrego la posibilidad de seleccionar un registro del datatable mediante un click. 
        $('#data-tbody').on('click', 'tr', function() {
            var reg = this;
            if ($(reg).hasClass('selected')) {
                $(reg).removeClass('selected');
              //  $scope.choferSeleccionado = {};
            } else {
                $('#data').DataTable().$('tr.selected').removeClass('selected');
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
        $http.get('./php/procesaChoferesJson.php', {
            params: {
                accion: "todo"
            }
        }).success(function(data) {
            $('#data').DataTable().clear().rows.add(data).draw();
        }).error(function(data, status, headers, config) {
            $log.log('Error al procesar procesaChoferesJson.php');
            $log.log(status);
        });
    };

    $scope.open = function(size) {
        modalInstance = $modal.open({
            templateUrl: './tpl/JIF_tpl/choferModalContent.html',
            controller: 'ChoferesCtrl',
            size: size,
            resolve: {}
        })
    };

    $scope.openActualiza = function(size) {
        var d;
        d = $('#data').DataTable().row($('#data').DataTable().$('tr.selected')).data();
        if (d != undefined) {
            actualizaModalInstance = $modal.open({
                templateUrl: './tpl/JIF_tpl/ActualizarChoferModalContent.html',
                controller: 'actualizaModalChoferCtrl',
                size: size,
                resolve: {}
            })
        }
    };

    $scope.openAlertBaja = function(size) {
        var d;
        d = $('#data').DataTable().row($('#data').DataTable().$('tr.selected')).data();
        if (d != undefined) {
            modalInstanceBaja = $modal.open({
                templateUrl: './tpl/JIF_tpl/bajaModal.html',
                controller: 'modalChoferCtrl',
                size: size,
                resolve: {}
            })
        }
    };

    $scope.ok = function() {
        $http.get('./php/procesaChoferesJson.php', {
            params: {
                documento: $scope.chofer.documento,
                accion: "existe"
            }
        }).success(function(data) {
            if (data.indexOf('No existe') > 0) {
                $http({
                    url: "./php/procesaChoferesJson.php",
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: $.param({
                        documento: $scope.chofer.documento,
                        nombres: $scope.chofer.nombres,
                        apellido: $scope.chofer.apellido,
                        telefono: $scope.chofer.telefono,
                        celular: $scope.chofer.celular,
                        direccion: $scope.chofer.direccion,
                        mail: $scope.chofer.mail,
                        accion: "alta"
                    })
                }).success(function(data, status, headers, config) {
                    $scope.data = data;
                    $scope.recargar();
                    toastr.success('', 'Se dio de alta satisfactoriamente el chofer!!');
                    $scope.cancel();
                }).error(function(data, status, headers, config) {
                    $scope.status = status;
                    toastr.error('', 'Error al dar de alta el chofer!!');
                    $scope.cancel();
                });
            } else //(data.indexOf('no existe')>0
            {
                toastr.error("", "Ya existe un chofer con este documento");
            }
        }).error(function(data, status, headers, config) {
            $log.log('Error al procesar procesaChoferesJson.php');
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
        var registro = $('#data').DataTable().row($('#data').DataTable().$('tr.selected')).data();
        $http({
            url: "./php/procesaChoferesJson.php",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $.param({
                documento: registro.documento,
                accion: "baja"
            })
        }).success(function(data, status, headers, config) {
            $scope.data = data;
            $scope.recargar();
            toastr.success('', 'Se dio de baja satisfactoriamente el chofer!!');
            $scope.cancelBaja();
        }).error(function(data, status, headers, config) {
            $scope.status = status;
            toastr.error('', 'Error al dar de baja el chofer!!');
            $scope.cancelBaja();
        });
    }
    
    $scope.okModif = function(regModificar) {
        $http({
            url: "./php/procesaChoferesJson.php",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: $.param({
                documento: regModificar.documento,
                nombres: regModificar.nombres,
                apellido: regModificar.apellido,
                telefono: regModificar.telefono,
                celular: regModificar.celular,
                direccion: regModificar.direccion,
                mail: regModificar.mail,
                accion: "alta"
            })
        }).success(function(data, status, headers, config) {
            $scope.data = data;
            $scope.recargar();
            toastr.success('', 'Se modificó satisfactoriamente el chofer!!');
            $scope.cancelModif();
        }).error(function(data, status, headers, config) {
            $scope.status = status;
            toastr.error('', 'Error al modificar el chofer!!');
            $scope.cancelModif();
        });
    }
}]);

})()