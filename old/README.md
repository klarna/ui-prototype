# Klarna prototype

This is a repo to quickly start prototyping something.

It includes all ui-* projects you need and a base setup to keep going.

#### Starting

```sh
npm install
npm start
```

Open [localhost:7777](http://localhost:7777) and do your changes.

#### Errors
Use node v4.1.2 if you get this error:
```
ui-prototype/webpack.config.js:2
const path = require('path')
^^^^^
SyntaxError: Use of const in strict mode.
```

Run `npm rebuild node-sass` if you get this error:
```
Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 4.x
```
