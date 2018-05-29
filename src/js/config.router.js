angular.module('app')
    .run(['$rootScope', '$state', '$stateParams', '$http', '$window', function($rootScope, $state, $stateParams, $http, $window) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $http.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');

        $rootScope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams) {
            //TODO
        });
        $rootScope.back = function() {
            history.go(-1);
        };
    }])
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'JQ_CONFIG', 'MODULE_CONFIG', function($stateProvider, $locationProvider, $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG) {
        $locationProvider.html5Mode(false).hashPrefix('');

        var layout = 'tpl/layout.html?v=' + app_version;
        $urlRouterProvider.otherwise('/app/works');
        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: layout
            })
            .state('app.works', {
                url: '/works',
                templateUrl: 'tpl/works.html?v=' + app_version,
                resolve: load('js/controllers/works.js')
            })
            .state('app.projects', {
                url: '/projects',
                templateUrl: 'tpl/projects.html?v=' + app_version,
                resolve: load('js/controllers/projects.js')
            })
            .state('app.reports', {
                url: '/reports',
                templateUrl: 'tpl/reports.html?v=' + app_version,
                resolve: load('js/controllers/reports.js')
            })
            .state('app.systems', {
                url: '/systems',
                templateUrl: 'tpl/systems.html?v=' + app_version,
                resolve: load('js/controllers/systems.js')
            });

        function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                    function($ocLazyLoad, $q) {
                        var deferred = $q.defer();
                        var promise = false;
                        srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                        if (!promise) {
                            promise = deferred.promise;
                        }
                        angular.forEach(srcs, function(src) {
                            promise = promise.then(function() {
                                if (JQ_CONFIG[src]) {
                                    return $ocLazyLoad.load(JQ_CONFIG[src]);
                                }
                                angular.forEach(MODULE_CONFIG, function(module) {
                                    if (module.name == src) {
                                        name = module.name;
                                    } else {
                                        name = src;
                                    }
                                });
                                return $ocLazyLoad.load(name);
                            });
                        });
                        deferred.resolve();
                        return callback ? promise.then(function() {
                            return callback();
                        }) : promise;
                    }
                ]
            }
        }
    }])