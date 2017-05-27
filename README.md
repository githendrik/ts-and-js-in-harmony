# ts-and-js-in-harmony

What this repo contains

## `double-module` 
A node module that builds a Typescript project into a js bundle with accompanying d.ts typescript definitions

## `dualTsEs`
A Typescript project that consumes the double-module, uses it in conjunction with Es6 classes, and produces Browser-usable Es5

## Build
- npm
- webpack
- typescript
- ts-loader
- source-map-loader (load library sourcemaps into main project)
- externals for library (don't bundle peerDependencies inside `double-module`)

## How to use
- check out this repo
```
git clone https://github.com/githendrik/ts-and-js-in-harmony.git
cd ts-and-js-in-harmony
```

- go to `double-module` and do npm install && npm start && npm link
```
cd double-module && npm install && npm link
```

- go to `dualTsEs`, use double module as npm link, install other dependencies
```
cd ../dualTsEs && npm link double-module && npm install && npm start
```
