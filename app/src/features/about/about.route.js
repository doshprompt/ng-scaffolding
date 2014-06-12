angular.module('ngScaffolding.docs.about')
    .config(['$routeProvider',
        function ($routeProvider) {
            'use strict';
            
            $routeProvider
                .when('/about', {
                    templateUrl: 'src/features/about/about.part.html',
                });
        }
    ]);