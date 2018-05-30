angular.module('app')
    .directive('pzDeliverableInfo', ['$http', '$q', 'commonService', function($http, $q, commonService) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'js/directives/pz-deliverable-info/pz-deliverable-info.html',
            link: function(scope, element, attrs) {},
            controller: function($scope) {}
        };
    }]);