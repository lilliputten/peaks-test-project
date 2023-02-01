<!--
@changed 2023.02.02, 04:23
-->

# Changelog

- 2023.02.02, 04:23 -- Added dynamic scroller component (articles loaded dynamically with user scroll), added workaround for duplicated articles, added empty article card (for case if some articles hasn't loaded).
- 2023.02.02, 01:46 -- Implemented articles search functionality.
- 2023.02.01, 21:52 -- Fixed article & article list error sections, imporved wrappers for article & article list components.
- 2023.02.01, 19:39 -- Updated layout, added withRouterProps HOC, other minor changes.
- 2023.02.01, 16:51 -- Added links to articles card from list.
- 2023.02.01, 02:03 -- Date formatting utulities, plain html renderer, plain body formatting styles.
- 2023.01.31, 23:25 -- Added article view components wrappers, DebugData.
- 2023.01.31, 22:31 -- Added feature, store and reducers for current article functional (features/article), added article view page (in progress).
- 2023.01.31, 20:34 -- Added basic ArticleView component. Extracted core typings & constants, moved app core components to `core/app`.
- 2023.01.31, 17:08 <- 2023.01.31, 16:03 -- Single article load service, article card with full article data (to reuse from different lists with different data sources).
- 2023.01.31, 01:13 -- Differrent types of article cards: large (540x425), medium (350x350), small (255x255), small text only (255x138).
- 2023.01.30, 19:22 -- Added articles wrapper hoc (extraced loaders and error from articles list component).
- 2023.01.30, 17:17 -- Added serif font style definition for titles.
- 2023.01.30, 17:16 -- Fixed nextjs warnings: `app` folder renamed to `core`, changed `extraReducers` to builder scheme.
- 2023.01.29, 02:26 <- 2023.01.26, 02:27 -- Add publish scripts, configure deploy server.
- 2023.01.27, 12:00 <- 2023.01.26, 02:24 -- Start minimal project with modules, assests, style modules, basic api setup & mocks.
- 2023.01.27, 12:00 <- 2023.01.26, 02:24 -- Append other essential project settings.
- 2023.01.26, 02:23 -- Initial project setup bootstraped.
