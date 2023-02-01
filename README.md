<!--
@changed 2023.01.31, 01:26
-->

# Peaks nextjs static client app

- Version: 0.0.7
- Last changes timestamp: 2023.02.01, 22:16

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
npm run publish
```

## Deply server

When publishing, the project is deployed to
[https://peaks.lilliputten.ru/](https://peaks.lilliputten.ru/)
(access credentials are provided by request).
