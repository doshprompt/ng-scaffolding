angular.module('ngScaffolding.docs.footer')
    .controller('FootControl', ['$scope',
        function ($scope) {
            $scope.footerInfo = {
                currentYear: new Date().getFullYear()
            }
        }
    ]);