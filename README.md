# Common Types & Interfaces NPM Package

This is an npm package of TypeScript types and interfaces that are common amongst
each of the Project 300's elements, ie. React Native app, the serverless backend, 
the web app, etc.

---

To build the typescript, run the following command:

```
npm run build
```

The build files will end up in the `/lib` directory. These files should not be pushed 
to GitHub (`.gitignore` file excludes this directory).

In order to install the package and test your changes without publishing to npm
first, install using a relative path, eg:

```
npm install path/to/npm/package
```

This will install the package as if it was pulling it from the real npm repo.

Before publishing to the npm package, push to GitHub and create a pull request.
We can test and review the pull request before merging it and publishing it to npm.

---

To publish your changes to the npm repo, run the following command:

```
npm publish --access public
```

If we move this to a private npm repo, the command will be:

```
npm publish
```
