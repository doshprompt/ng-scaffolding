# ng-scaffolding

*An opinionated boilerplate for AngularJS + Bootstrap*

___

## Table of Contents

- [Learn](#learn)
    - [Overall Directory Structure](#overall-directory-structure)

## Learn

### Overall Directory Structure

At a high level, the structure looks roughly something like this:

```
myApp
├── app
│   ├── assets
│   ├── languages
│   │   ├── en-US
│   │   │   ├── common.lang.json
│   │   │   └── ...
│   │   └── ...
│   ├── src
│   │   ├── core
│   │   │   ├── views
│   │   │   │   ├── _home.html
│   │   │   │   └── ...
│   │   │   ├── controllers
│   │   │   │   ├── main.ctrl.js
│   │   │   │   └── ...
│   │   │   ├── application.js
│   │   │   ├── declarations.js
│   │   │   └── routes.js
│   │   ├── features
│   │   │   ├── login
│   │   │   │   ├── login.ctrl.js
│   │   │   │   ├── login.route.js
│   │   │   │   └── login.part.html
│   │   │   └── ...
│   │   ├── less
│   │   │   ├── login.less
│   │   │   ├── mixins.less
│   │   │   ├── myApp.less
│   │   │   ├── variables.less
│   │   │   └── ...
│   │   └── shared
│   │       ├── directives
│   │       │   ├── myDirective.js
│   │       │   └── ...
│   │       ├── models
│   │       │   ├── user.js
│   │       │   └── ...
│   │       └── services
│   │           ├── authentication.js
│   │           └── ...
│   ├── styles
│   ├── vendor
│   ├── 404.html
│   ├── config.js
│   └── index.html
├── build
│   ├── karma.conf.js
│   ├── protractor.conf.js
│   └── ...
├── build
│   ├── unit
│   │   ├── directives.spec.js
│   │   └── ...
│   └── e2e
│       ├── directives.scenario.js
│       └── ...
├── bower.json
├── package.json
├── .bowerrc
└── .gitignore
```