# The `app` Directory

The `app/` folder contains all of the files that are hosted during development. 

```
app
├── assets
│   ├── images
│   ├── videos
│   ├── icons
│   └── ...
├── languages
│   ├── en-US
│   │   ├── common.lang.json
│   │   └── ...
│   └── ...
├── src
│   └── <app logic>
├── vendor
│   └── <lib>
├── 404.html
├── config.js
└── index.html
```

- `assets` - static files like fonts and images. Sub-folders are pretty self-explanatory.
- `languages` - resource files for all supported/installed languages.
- `src` - source code that will be processed and/or compiled at runtime.
- `vendor` - third-party libraries.
- `config.js` - configuration file specific to this environment.
- `index.html` - this is the HTML document of the single-page application. See below.

## `index.html`

The `index.html` file is the HTML document of the single-page application (SPA)
that should contain all markup that applies to everything in the app, such as the header and footer.
It declares with `ngApp` that this is `ngScaffolding`, specifies the main `MainControl` controller,
and contains the `ngView` directive into which route templates are placed.
