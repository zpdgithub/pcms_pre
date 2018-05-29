angular.module('app')
    .controller('ReceiptsListController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
        $scope.receipts = [{
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
    }])
    .controller('ReceiptSolveController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
        $scope.id = $stateParams.id;
    }]);