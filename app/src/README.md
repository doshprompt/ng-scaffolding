# The `app/src` Directory

The `app/src/` directory contains all code used in the application along with all tests of such code.

```
app
└── src
    ├── core
    │   └── <files loaded on bootstrap>
    ├── features
    │   └── <additional functionality by module>
    └── shared
        └── <reusable code>
```

- `core` - these are the barebones minimum files that have to be loaded up on startup.
- `features` - these are any additional features offered by the app, each of which belongs to and is bundled along with it's own module.
- `shared` - modules leveraged by the entire app.

See each directory for a detailed explanation of the same.