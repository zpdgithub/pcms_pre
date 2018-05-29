angular.module('app')
    .controller('ReceiptsTodoController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.receipts = commonService.getList();
    }])
    .controller('ReceiptSolveController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.item = commonService.getItem(parseInt($stateParams.id));
        console.log($scope.item);
    }]);