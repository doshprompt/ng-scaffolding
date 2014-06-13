angular.module('ngScaffolding.docs.footer')
    .controller('FootControl', ['$scope',
        function ($scope) {
            'use strict';

            $scope.footerInfo = {
                currentYear: new Date().getFullYear()
            };
        }
    ]);