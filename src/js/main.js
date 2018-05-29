angular.module('app')
    .controller('AppController', ['$rootScope', '$scope', '$window', 'toaster', function($rootScope, $scope, $window, toaster) {
        // add 'ie' classes to html
        var isIE = !!navigator.userAgent.match(/MSIE/i);
        if (isIE) { angular.element($window.document.body).addClass('ie'); }
        if (isSmartDevice($window)) { angular.element($window.document.body).addClass('smart') };

        // config
        $scope.app = {
            name: 'PCMS',
            version: '1.0.0',
            pageSize: 20
        };

        function isSmartDevice($window) {
            // Adapted from http://www.detectmobilebrowsers.com
            var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
            // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
            return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }
    }]);