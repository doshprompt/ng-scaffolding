# ng-scaffolding

*An opinionated boilerplate for AngularJS + Bootstrap*

## Table of Contents

- [Overview](#overview)
- [Learn](#learn)
    - [Overall Directory Structure](#overall-directory-structure)
    - [File Naming Conventions](#file-naming-conventions)

## Overview

Kickstart your [AngularJS](http://angularjs.org/) apps with a solid foundation.

It is based on and inspired by a number of boilerplate projects already available out there on the web,
and borrows heavily from the following list including but not limited to:

- [ngBoilerplate](http://bit.ly/ngBoilerplate)
- [ng-launchpad](http://www.samora.me/ng-launchpad)

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
│   │   │   │   ├── login.less
│   │   │   │   ├── login.scenario.js
│   │   │   │   ├── login.route.js
│   │   │   │   ├── login.part.html
│   │   │   │   └── ...
│   │   │   └── ...
│   │   └── shared
│   │       ├── components
│   │       │   ├── footer
│   │       │   │   ├── _footer.html
│   │       │   │   ├── footer.ctrl.js
│   │       │   │   └── ...
│   │       │   └── ...
│   │       ├── directives
│   │       │   ├── myDirective.js
│   │       │   ├── myDirective.spec.js
│   │       │   └── ...
│   │       ├── less
│   │       │   ├── mixins.less
│   │       │   ├── myApp.less
│   │       │   └── variables.less
│   │       ├── models
│   │       │   ├── user.js
│   │       │   └── ...
│   │       └── services
│   │           ├── authentication.js
│   │           └── ...
│   ├── vendor
│   ├── 404.html
│   ├── config.js
│   └── index.html
├── build
│   ├── karma.conf.js
│   ├── protractor.conf.js
│   └── ...
├── bower.json
├── package.json
├── .bowerrc
└── .gitignore
```
 
- `app` - the app's root directory.
    - `languages` - resource files for all supported/installed languages.
    - `src` - all source code that will be processed and/or compiled at runtime.
        - `core` - these are the barebones minimum files that have to be loaded up on startup.
            - `controllers` - base controller(s)
            - `views` - the most basic of views
        - `features` - these are any additional features offered by the app, each of which belongs to and is bundled along with it's own module.
        - `shared` - modules leveraged by the entire app.
            - `directives` - all directives (they apply app-wide).
            - `less` - common LESS pre-processor files.
            - `models` - objects created by the `$resource` factory.
            - `services` - contains any stateful services that must persist data across the app.
- `build` - customizable build settings, including test runners.
- `tests` - all unit and end-to-end test suites go in here.
- `bower.json` - this is the project configuration for Bower and it contains the list of Bower dependencies that are needed.
- `package.json` - metadata about the app, used by NPM and the build script. NPM dependencies are also listed here.
- `.bowerrc` - the Bower configuration file. This tells Bower to install bower_components into the `vendor/` directory instead.
- `.gitignore` - top level .gitignore file

### File Naming Conventions

- Controllers: `*.ctrl.js`
- Resource Files: `*.lang.json`
- Routing: `*.route.js`
- Templates: `*.part.html`
- Unit Tests: `*.spec.js`
- E2E Tests: `*.scenario.js`
- LESS: `*.less`
- Configs: `{*.conf.js|*.conf.json}`
