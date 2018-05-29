angular.module('app')
    .service('commonService', ['$rootScope', '$http', '$q', function($rootScope, $http, $q) {
        var list = [{
                id: 1,
                title: '任务1'
            },
            {
                id: 2,
                title: '任务2'
            },
            {
                id: 3,
                title: '任务3'
            }
        ];
        this.getList = function() {
            return list;
        };
        this.getItem = function(id) {
            return _.find(list, {
                id: id
            });
        };
    }]);