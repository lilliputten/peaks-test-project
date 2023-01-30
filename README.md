<!--
@changed 2023.01.26, 19:27
-->

# Peaks nextjs static client app

- Version: 0.0.5
- Last changes timestamp: 2023.01.31, 01:14

## Install

Install all required node dependencies:

```
npm i
```

## Start dev server

Start dev server (locate in browser with `http://localhost:3000`):

```
npm run start
```

## Make build

```
npm run build
```

## Build and publish

For success publishing the deploy environment should be propeply set up (see
npm script command `postinstall-publish-submodule`).

```
npm run build-and-publish
```

To just publish previously created build:

```
npm run build-and-publish
```
