# Klarna UI prototype

This is a repo to quickly start a project of prototype.

It includes all ui-* projects you need and a base setup to keep going.

It's based on [Sagui](https://github.com/saguijs/sagui), a tool for bootstrapping projects with the stack for React. That stack includes:

- [Webpack](https://github.com/webpack/webpack) as the build tool
- [Babel](https://babeljs.io/) as the transpiler for ES next and JSX
- [Karma](https://karma-runner.github.io/1.0/index.html) as the test runner (and [Jasmine](http://jasmine.github.io/2.3/introduction.html) as the test suite)
- [SASS](http://sass-lang.com/) and [CSS modules](https://github.com/css-modules/css-modules) for styles processing

...and many other goodies. For more details, read [Sagui's README](https://github.com/saguijs/sagui)

## Starting

```sh
npm install
npm start
```

Open [localhost:3000](http://localhost:3000) and do your changes.

## Testing

```sh
npm test
```

or

```sh
npm run test:unit:watch
```

## Building

```sh
npm run build
```

## Production build

```sh
npm run dist
```

## Linting

Since Sagui's default linting settings are pretty strict and require a lot of JS knowledge, the linter has been disabled for this project. If you want to enable it back, just paste this into the `.eslintrc` file:

```json
{
  "extends": "sagui"
}
```

…and remove `src` from the `.eslintignore` file.

## Requirements

You need at least Node 4 and npm 3 to run this. It's recommended to use latest Node though since it comes bundled with npm 3. Otherwise you can install npm 3 by running `npm install -g npm`.

If you need a version manager for Node, you can use [n](https://github.com/tj/n)
