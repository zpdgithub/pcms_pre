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

        $urlRouterProvider.otherwise('/app/works');
        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: 'tpl/layout.html?v=' + app_version
            })
            //工作中心
            .state('app.works', {
                abstract: true,
                url: '/works',
                templateUrl: 'tpl/works/layout.html?v=' + app_version,
            })
            //我的回执
            .state('app.works.receipts', {
                abstract: true,
                url: '/receipt',
                templateUrl: 'tpl/works/receipts/layout.html?v=' + app_version,
            })
            //待回执
            .state('app.works.receipts.todo', {
                abstract: true,
                url: '/todo',
                template: '<div ui-view></div>'
            })
            .state('app.works.receipts.todo.list', {
                url: '/list',
                templateUrl: 'tpl/works/receipts/todo/list.html?v=' + app_version,
                resolve: load('js/controllers/works.js')
            })
            .state('app.works.receipts.todo.solve', {
                url: '/solve?id',
                templateUrl: 'tpl/works/receipts/todo/solve.html?v=' + app_version,
                resolve: load('js/controllers/works.js')
            })
            //已回执
            .state('app.works.receipts.done', {
                abstract: true,
                url: '/done',
                template: '<div ui-view></div>',
            })
            .state('app.works.receipts.done.list', {
                url: '/list',
                templateUrl: 'tpl/works/receipts/done/list.html?v=' + app_version,
                resolve: load('js/controllers/works.js')
            })
            .state('app.works.receipts.done.detail', {
                url: '/detail?id',
                templateUrl: 'tpl/works/receipts/done/detail.html?v=' + app_version,
                resolve: load('js/controllers/works.js')
            })

        .state('app.works.approves', {
                url: '/approves',
                templateUrl: 'tpl/works/approves.html?v=' + app_version,
                resolve: load('js/controllers/works.js')
            })
            .state('app.works.turns', {
                url: '/turns',
                templateUrl: 'tpl/works/turns.html?v=' + app_version,
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