# The `app/src/shared` Directory

Every component contained here should be drag-and-drop reusable in any other project;
they should depend on no other components that aren't similarly drag-and-drop reusable.

```
src
└── shared
    ├── components
    │   ├── footer
    │   │   ├── _footer.html
    │   │   ├── footer.ctrl.js
    │   │   └── ...
    │   └── ...
    ├── directives
    │   ├── myDirective.js
    │   ├── myDirective.spec.js
    │   └── ...
    ├── less
    │   ├── mixins.less
    │   ├── myApp.less
    │   └── variables.less
    ├── models
    │   ├── user.js
    │   └── ...
    └── services
        ├── authentication.js
        └── ...
```

- `directives` - all directives (they apply app-wide).
- `less` - common LESS pre-processor files.
- `models` - objects created by the `$resource` factory.
- `services` - contains any stateful services that must persist data across the app.

The `app/src/shared/` directory houses internal re-usable components.
Essentially, this folder is for everything that isn't completely specific to this application.

Each component resides in its own directory that may then be structured any way the developer desires
The build system will read all `*.js` files that do not end in `.spec.js` or `.scenario.js` as source files to be included in the final build,
all `*.spec.js` files as unit tests to be executed, and all `*.scenario.js` files as e2e tests to be similarly executed.
All `*.part.html` files will be treated as templates to validated against w3c standards.
There is currently no way to handle components that do not meet this pattern.