angular.module('ngScaffolding.docs.navbar')
    .controller('NavControl', ['$scope', 'locale', 'localeSupported',
        function ($scope, locale, localeSupported) {
            'use strict';

            $scope.supportedLang = localeSupported;
            $scope.localeData = {
                'en-US': 'English'
            };

            locale.ready('common').then(function () {
                $scope.langDisplayText = $scope.localeData[locale.getLocale()];
            });
        }
    ]);