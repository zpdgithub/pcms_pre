angular.module('app')
    .directive('pzProjectInfo', ['$http', '$q', 'commonService', function($http, $q, commonService) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'js/directives/pz-project-info/pz-project-info.html',
            link: function(scope, element, attrs) {},
            controller: function($scope) {}
        };
    }]);