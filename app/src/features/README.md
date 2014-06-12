# The `app/src/features` Directory

These are any additional features offered by the app, each of which belongs to and is bundled along with it's own separate module.

```
src
└── features
    ├── login
    │   ├── login.ctrl.js
    │   ├── login.less
    │   ├── login.scenario.js
    │   ├── login.route.js
    │   ├── login.part.html
    │   └── ...
    └── ...
```

The `app/src/features` directory contains all code specific to this application.
This directory is filled with subdirectories corresponding to high-level sections of the application,
often corresponding to top-level routes.
Each directory can have as many subdirectories as it needs, and the build system will understand what to do.
For example, a top-level route might be "products", which would be a folder within the `app/src/features` directory
that conceptually corresponds to the top-level route `/products`, though this is in no way enforced.
Products may then have subdirectories for "create", "view", "search", etc.
The "view" submodule may then define a route of `/products/:id`, ad infinitum.

As `ngScaffolding` is quite minimal, take a look at the two provided submodules to gain a better understanding of how these are used
as well as to get a glimpse of how powerful this simple construct can be.

**TODO:** run-down each of the files

## Testing

One of the design philosophies of `ngScaffolding` is that tests should exist
alongside the code they test and that the build system should be smart enough to
know the difference and react accordingly.
As such, the unit test for `login.ctrl.js` is `login.spec.js`, though it is quite minimal.
Also, the e2e tests for the login feature module in its entirity are found in `login.scenario.js`.