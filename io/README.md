## Luna

Run `pnpm install` to install the dependencies.

The root file is `main.ts` and it's the entry point of the application. Then the bundler with crawl all the files and resolve the modules and dependencies, all of this in a single file `dist/main.js`.

Before injecting the code to the emulator or device we need to transpile the TypeScript files. This is done with the `pnpm build` command. This will generate the `dist` folder with the transpiled files.

- `pnpm build:dev` will transpile whenever a file change automatically using a watcher.
- `pnpm build:release` will transpile the files once and minify the output, optimizing the code for production.

Therefore you can just do the following

### In development

Open a shell and run the following commands:

```bash
pnpm build:dev
```

Then open another shell and run the following command whenever you want to send the code to the device/emulator:

```bash
xs-dev run
```

### In release

Open a shell and run the following commands:

```bash
pnpm build:release
```

Then open another shell and run the following command whenever you want to send the code to the device/emulator:

```bash
xs-dev build --mode production
```

For more details about building and running the code, please refer to the https://xs-dev.js.org/features/run/.
What this template does is only manage the TypeScript files and the bundling process. The rest is up to you.

## Additional information

To support what I call « injected libraries » we define `--packages external` to the bundler, this allows to not package the libraries that are already in the Moddable SDK. As current API are not available in `node_modules` we need to do that.

Bun treats any import which path do not start with `.`, `..` or `/` as package.
