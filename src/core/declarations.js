(function __init() { // INITIALIZATION FN
    'use strict';

    var ngScaffolding = {
        definitions: {
            'ngScaffolding.docs.footer': [],
            'ngScaffolding.docs.navbar': [],
            'ngScaffolding.docs.about': []
        },
        dependencies: [
            'ngRoute',
            'mgcrea.ngStrap',
            'ngLocalize'
        ],
        appName: 'ngScaffolding.docs'
    };

    angular.forEach(ngScaffolding.definitions, function (value, key) {
        angular.module(key, value);
        ngScaffolding.dependencies.push(key);
    });

    angular.module(ngScaffolding.appName, ngScaffolding.dependencies);
})();