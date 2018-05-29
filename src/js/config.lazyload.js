// lazyload config
angular.module('app')
    .constant('JQ_CONFIG', {
        // moment: ['../libs/jquery/moment/moment.js',
        //     '../libs/jquery/moment/moment-zh-cn.js'
        // ]
    })
    .constant('MODULE_CONFIG', [
        {
            name: 'weui',
            files: [
                '../components/weui.min.js',
                '../components/weui.min.css'
            ]
        }
    ])
    // oclazyload config
    .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function ($ocLazyLoadProvider, MODULE_CONFIG) {
        // We configure ocLazyLoad to use the lib script.js as the async loader
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: MODULE_CONFIG
        });
    }]);