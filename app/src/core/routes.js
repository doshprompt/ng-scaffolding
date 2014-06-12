angular.module('ngScaffolding.docs')
    .config(['$routeProvider',
        function ($routeProvider) {
            'use strict';
            
            $routeProvider
                .when('/home', {
                    templateUrl: 'src/core/views/_home.html',
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }
    ]);