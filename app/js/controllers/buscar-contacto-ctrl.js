/**
 * Clase encargada de manejar el listado de personas.
 * @class
 */
app.controller(' to',function ($scope, Shared) {

        $scope.buscar = function (params) {
            $scope.data.list.getData(angular.copy($scope.persona));
        }
    }
 );