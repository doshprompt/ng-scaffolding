# ng-scaffolding

*An opinionated boilerplate for AngularJS + Bootstrap*

## Table of Contents

- [Overview](#overview)
    - [Purpose](#purpose)
    - [Philosophy](#philosophy)
- [Learn](#learn)
    - [Overall Directory Structure](#overall-directory-structure)
    - [File Naming Conventions](#file-naming-conventions)

## Overview

Kickstart your [AngularJS](http://angularjs.org/) apps with a solid foundation.

It is based on and inspired by a number of boilerplate projects already available out there on the web,
and borrows heavily from the following list including but not limited to:

- [ngBoilerplate](http://bit.ly/ngBoilerplate)
- [ng-launchpad](http://www.samora.me/ng-launchpad)

##### Notable Differences

`ngScaffolding`, like `ngBoilerplate`, is meant to make life easy by providing a basic framework with which to kickstart AngularJS projects.
However, `ngScaffolding` is simpler and differs in a few ways:

- [gulp.js](http://gulpjs.com), instead of [Grunt](http://gruntjs.com), as a build/management tool.
- Integrated development server.
- [Protractor](https://github.com/angular/protractor) integration for end-to-end (e2e) tests.
- Development build has a similar directory structure to production. However the files are not minified and compressed.
- No planned support for CoffeeScript, it's all in vanilla JavaScript.

`ngScaffolding` is a simpler than `ngBoilerplate` on purpose, yet keeps the same basic principles and ideas intact.

##### Key Features

- Modular application structure to encourage component re-use. If you don't know why this is important, read
  [this](https://medium.com/opinionated-angularjs/9f01b594bf06).
- Automagically minify, compress, uglify and package files for production.
- Built-in development server which reloads the page on file changes.
- Automagically re-run tests on file changes.
- Use Less to simplify your CSS.

### Purpose

`ngScaffolding` is designed to make life easy by providing a basic framework with which to kickstart AngularJS projects.
It contains a best-practice directory structure to ensure code reusability and maximum scalability.
`ngScaffolding` also comes prepackaged with the most popular design frameworks around:

- [Twitter Bootstrap](http://getbootstrap.com),
- [AngularStrap](http://mgcrea.github.io/angular-strap),
- [Font Awesome](http://fortawesome.github.com/Font-Awesome), and
- [LESS](http://lesscss.org). Lastly, it contains a sophisticated
- [Gulp](http://gulpjs.com)-based build system to ensure maximum productivity.

These have already been added because I believe they are the bare minimum components you may need.
Add or remove according to your requirements.
Otherwise all you have to do is clone it and start coding!

### Philosophy

The principal goal of `ngScaffolding` is to set projects up for long-term success.
So `ngScaffolding` tries to follow best practices everywhere it can.
These are:

- Properly orchestrated modules to encourage drag-and-drop component re-use.
- Tests exist alongside the component they are testing with no separate `test` directory required;
  the build process should be sophisticated enough to handle this.
- Speaking of which, the build system should work automagically, without involvement from the developer.
  It should do what needs to be done, while staying out of the way.
  Components should end up tested, linted, compiled, and minified, ready for use in a production environment.
- Integration with popular tools like Bower, Karma, and LESS.
- *Encourages* test-driven development. It's the only way to code.
- A directory structure that is cogent, meaningful to new team members, and supporting of the above points.
- Well-documented, to show new developers *why* things are set up the way they are.
- It should be responsive to evidence. Community feedback is therefore crucial to the success of `ngScaffolding`.

But `ngScaffolding` is not an example of an AngularJS app: this is a kickstarter.
If you're looking for an example of what a complete, non-trivial AngularJS app that does something real looks like,
complete with a REST backend and authentication and authorization,
then take a look at [`angular-app`](http://github.com/angular-app/angular-app),
which does just that - and does it well.

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
