angular.module('app')
    .directive('pzNodeInfo', ['$http', '$q', 'commonService', function($http, $q, commonService) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'js/directives/pz-node-info/pz-node-info.html',
            link: function(scope, element, attrs) {},
            controller: function($scope) {}
        };
    }]);