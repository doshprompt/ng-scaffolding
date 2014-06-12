# The `app/src/core` Directory

The `app/src/core/` directory contains application-specific code, i.e. code not likely to be reused.

```
src
└── core
    ├── views
    │   ├── _home.html
    │   └── ...
    ├── controllers
    │   ├── main.ctrl.js
    │   └── ...
    ├── application.js
    ├── declarations.js
    └── routes.js
```

- `controllers` - base controller(s)
- `views` - the most basic of views
- `application.js` - TODO
- `declarations.js` - TODO
- `routes.js` - TODO

## `declarations.js`

**TODO:** explain

```js
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
```

## `routes.js`

**TODO:** re-visit

With app modules broken down in this way, all routing is performed by the submodules we include,
as that is where our app's functionality is really defined.
So all we need to do in `routes.js` is specify a default route to follow.
In this case, our `home` module is where we want to start.

```js
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
})
```

## `application.js`

Use the main application's run method to execute any code after services have been instantiated.

```js
    .run([function run () {
        // do something here;
    }])
```

## `controllers/main.ctrl.js`

And then we define our main application controller.
This is a good place for logic not specific to the template or route, such as menu logic or page title wiring.

```js
angular.module('ngScaffolding.docs')
    .controller('MainControl', ['$scope',
        function ($scope) {
            // do something else;
        }
    ]);
```