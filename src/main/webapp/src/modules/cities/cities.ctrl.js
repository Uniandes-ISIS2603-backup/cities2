(function (ng) {
    var mod = ng.module("citiesModule");

    mod.controller("citiesCtrl", ['$scope', '$state', '$stateParams', '$http', 'citiesContext', function ($scope, $state, $stateParams, $http, context) {

            // inicialmente el listado de ciudades está vacio
            $scope.records = {};
            // carga las ciudades
            $http.get(context).then(function(response){
                $scope.records = response.data;    
            });

            if ($stateParams.cityId !== null && $stateParams.cityId !== undefined) {
                id = $stateParams.cityId;
                $http.get(context + "/" + id).then(function (response) {
                    $scope.currentRecord = response.data;
                    console.log($scope.currentRecord.id + " " + $scope.currentRecord.name)
                }, responseError);
            } else
            {
                $scope.currentRecord = {
                    id: undefined /*Tipo Long. El valor se asigna en el backend*/,
                    name: '' /*Tipo String*/,
                };
                $scope.currentRecord = {};
                $scope.alerts = [];
            }


            this.saveRecord = function (id) {
                currentRecord = $scope.currentRecord;
                if (id == null) {

                    return $http.post(context, currentRecord).then(function () {
                       
                    }, responseError);
                } else {
                    return $http.put(context + "/" + currentRecord.id, currentRecord)
                            .then(function () {

                                
                            }, responseError);
                }
                $state.go('citiesList');
            };

       //     this.fetchRecords();

            // -----------------------------------------------------------------
            // Funciones para manejra lo smensajes en la aplicación


            //Alertas
            this.closeAlert = function (index) {
                $scope.alerts.splice(index, 1);
            };

            // Función showMessage: Recibe el mensaje en String y su tipo con el fin de almacenarlo en el array $scope.alerts.
            function showMessage(msg, type) {
                var types = ["info", "danger", "warning", "success"];
                if (types.some(function (rc) {
                    return type === rc;
                })) {
                    $scope.alerts.push({type: type, msg: msg});
                }
            }

            this.showError = function (msg) {
                showMessage(msg, "danger");
            };

            this.showSuccess = function (msg) {
                showMessage(msg, "success");
            };

            var self = this;
            function responseError(response) {

                self.showError(response.data);
            }
        }]);

})(window.angular);