<!--
@changed 2023.02.02, 08:57
-->

# Peaks nextjs static client app

- Version: 0.0.9
- Last changes timestamp: 2023.02.02, 08:54

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

## Deploy server

When publishing, the project is deployed to
[https://peaks.lilliputten.ru/](https://peaks.lilliputten.ru/)
(access credentials are provided by request).

## State of the project

As on 2023.02.02, 08:58 remains not implemented:

- Main page (top articles). Instead displaying the same component for articles listing/searching (added abilty to change card types to demonstrate the types of cards that should be used on the main page).
- Coloring of article preview cards (by sections?).
- Bookmarking (buttons, page with listing of all bookmarked articles).
- Bookmark action toasts.
