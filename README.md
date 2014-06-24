# ng-scaffolding

*An opinionated boilerplate for AngularJS + Bootstrap*

## Table of Contents

- [Overview](#overview)
    - [Purpose](#purpose)
    - [Philosophy](#philosophy)
- [Learn](#learn)
    - [Overall Directory Structure](#overall-directory-structure)
    - [Naming Conventions](#file-naming-conventions)
        - [Files](#files)
        - [ng-specific](#angular-specific)
    - [Resources](#resources)

## Overview

Kickstart your [AngularJS](http://angularjs.org/) apps with a solid foundation.

It is based on and inspired by a number of boilerplate projects already available out there on the web,
and borrows heavily from the following list including but not limited to:

- [ngBoilerplate](http://bit.ly/ngBoilerplate)
- [ng-launchpad](http://www.samora.me/ng-launchpad)
- [Web Starter Kit](https://developers.google.com/web/starter-kit/)

##### Notable Differences

`ngScaffolding`, like `ngBoilerplate`, is meant to make life easy by providing a basic framework with which to kickstart AngularJS projects.
However, `ngScaffolding` is simpler and differs in a few ways:

- [gulp.js](http://gulpjs.com), instead of [Grunt](http://gruntjs.com), as a build/management tool.
- Integrated development server.
- [Protractor](https://github.com/angular/protractor) integration for end-to-end (e2e) tests.
- Development build has a similar directory structure to production. However the files are not minified and compressed.
- No planned support for CoffeeScript, it's all in vanilla JavaScript.

`ngScaffolding` is a simpler than `ngBoilerplate` on purpose, yet keeps the same basic principles and ideas.

##### Key Features

- Modular application structure to encourage component re-use.
- Automagically minify, compress, uglify and package files for production.
- Built-in development server which reloads the page on file changes.
- Automagically re-run tests on file changes.
- Use Less to simplify your CSS.
- 

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
│   └── <development sandbox>
├── build
│   ├── karma.conf.js
│   ├── protractor.conf.js
│   └── ...
├── bower.json
├── gulpfile.js
├── package.json
├── .bowerrc
└── .gitignore
```
 
- `app` - the app's root directory.
- `build` - customizable build settings, including test runners.
- `tests` - all unit and end-to-end test suites go in here.
- `bower.json` - this is the project configuration for Bower and it contains the list of Bower dependencies that are needed.
- `gulpfile.js` - build script.
- `package.json` - metadata about the app, used by NPM and the build script. NPM dependencies are also listed here.
- `.bowerrc` - the Bower configuration file. This tells Bower to install bower_components into the `vendor/` directory instead.
- `.gitignore` - top level .gitignore file

### Naming Conventions

#### Files

- Configs: `{*.conf.js|*.conf.json}`
- Controllers: `*.ctrl.js`
- Services: `*.svc.js`
- Routing: `*.route.js`
- Templates: `*.part.html`
- Resource Files: `*.lang.json` 
- Unit Tests: `*.spec.js`
- E2E Tests: `*.scenario.js`
- Mocks: `*.mock.js`
- LESS: `*.less`

#### Angular-specific

- Controller Names: `*Control`
- Module Names: `TODO`
- Services: `TODO`
- Models: `TODO`

### Resources

**Read This**

- [Scalable Code Organization in AngularJS](https://medium.com/opinionated-angularjs/9f01b594bf06)

**Styleguides**

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [An AngularJS Style Guide for Closure Users at Google](https://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html)

**Further Reading**

- [Best Practices](https://github.com/angular/angular.js/wiki/Best-Practices)
- [Anti Patterns](https://github.com/angular/angular.js/wiki/Anti-Patterns)
- [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w)
- [Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

**Other Resources**

- [Community-driven set of best practices for AngularJS application development](https://github.com/mgechev/angularjs-style-guide)