angular.module('app')
    .directive('pzWorkflow', ['$http', '$q', 'commonService', function($http, $q, commonService) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'js/directives/pz-workflow/pz-workflow.html',
            link: function(scope, element, attrs) {},
            controller: function($scope) {}
        };
    }]);