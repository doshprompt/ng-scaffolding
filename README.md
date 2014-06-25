# ng-scaffolding

*An opinionated boilerplate for AngularJS + Bootstrap*

## Table of Contents

- [Overview](#overview)
    - [Purpose](#purpose)
    - [Philosophy](#philosophy)
    - [Components](#components)
    - [Browser Support](#browser-support)
- [Quickstart](#quickstart)
- [Learn](#learn)
    - [Overall Directory Structure](#overall-directory-structure)
    - [Naming Conventions](#file-naming-conventions)
        - [Files](#files)
        - [ng-specific](#angular-specific)
    - [Tooling](#tooling)
        - [Node](#node)
        - [Gulp](#gulp)
    - [The Build System](#the-build-system)
        - [Gulp Commands](#gulp-commands)
        - [Master Config File](#master-config-file)
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

### Purpose

`ngScaffolding` is designed to make life easy by providing a basic framework with which to kickstart AngularJS projects.
It contains a best-practice directory structure to ensure code reusability and maximum scalability.

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

### Components

`ngScaffolding` also comes prepackaged with the most popular design frameworks around.
The following have already been added because I believe they are the bare minimum components you may need.
Add or remove according to your requirements.

- [AngularJS](http://angularjs.org)
- [Twitter Bootstrap](http://getbootstrap.com/)
- [AngularStrap](http://mcgrea.github.io/angularstrap)
- [Font Awesome](http://fontawesome.io)
- [LESS](http://lesscss.org)

Lastly, it contains a sophisticated [Gulp](http://gulpjs.com)-based build system to ensure maximum productivity.

### Browser Support

At present, I officially aim to support the following browsers:

* IE10, IE11, IE Mobile 10
* FF 30, 31
* Chrome 34, 35
* Safari 7, 8
* Opera 23, 24
* iOS Safari 7, 8
* Opera Coast
* Android / Chrome 4.4, 4.4.3
* BlackBerry 10

This is not to say that ngScaffolding cannot be used in browsers older than those reflected,
but merely that my focus will be on ensuring that the project works great in the above.

## Quickstart

[Download](https://github.com/doshprompt/ng-scaffolding/archive/master.zip) the project or clone this repository and build on what is already included in the `app` directory.

Pre-requisites: You will need to have installed Node.js and Git.

Then run the following commands in a terminal window:

```sh
$ git clone git://github.com/doshprompt/ng-scaffolding
$ cd ng-scaffolding
$ sudo npm install -g gulp bower
$ npm install
$ gulp
```

This should automatically open up a new tab/window in your default browser.

happy hacking, enjoy!

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

### Tooling

If you would like to use the tooling provided as is, make sure your system has [Node.js](http://nodejs.org) and [gulp.js](http://gulpjs.com) installed.

#### Node

Let's check to see if you already have Node installed. Bring up a terminal and type `node --version`. If Node responds, and if it shows a version at or above v0.10.x, proceed to checking if you have Gulp installed too. If you require Node, go to [nodejs.org](http://nodejs.org/) and click on the big green Install button.

#### Gulp

Bring up a terminal and type `gulp --version`. If Gulp is installed it should return a version number at or above 3.5.x. If you don't see any errors, proceed to the Gulp commands section. If you need to install Gulp, open up a terminal and type in the following:

```sh
$ npm install --global gulp
```

This will install Gulp globally. Depending on your user account, you may need to gain elevated permissions using `sudo` (i.e `sudo npm install --global gulp`). Next, install the local dependencies Web Starter Kit requires:

```sh
$ npm install
```

That's it! You should now have everything needed to use the Gulp tools in ngScaffolding.

### The Build System

#### Gulp Commands

You can now use Gulp with the following commands to stay productive during development:

##### Watch For Changes & Refresh Across Devices

```sh
$ gulp server
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

##### Compile

```sh
$ gulp
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.
Akin to running `make`

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