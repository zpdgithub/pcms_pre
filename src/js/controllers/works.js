angular.module('app')
    //我的回执
    //待回执
    .controller('ReceiptsTodoListController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.items = commonService.getItems();
    }])
    //已回执
    .controller('ReceiptsDoneListController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.items = commonService.getItems();
    }])
    //回执
    .controller('ReceiptSolveController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.item = commonService.getItem(parseInt($stateParams.id));
    }])
    //回执详情
    .controller('ReceiptDetailController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.item = commonService.getItem(parseInt($stateParams.id));
    }])

//我的审批
//待审批
.controller('ApprovesTodoListController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.items = commonService.getItems();
    }])
    //已审批
    .controller('ApprovesDoneListController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.items = commonService.getItems();
    }])
    //审批
    .controller('ApproveSolveController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.item = commonService.getItem(parseInt($stateParams.id));
    }])
    //神品详情
    .controller('ApproveDetailController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
        $scope.item = commonService.getItem(parseInt($stateParams.id));
    }])

//我发起的
.controller('StartsListController', ['$scope', '$state', '$stateParams', 'commonService', function($scope, $state, $stateParams, commonService) {
    $scope.items = commonService.getItems();
}]);