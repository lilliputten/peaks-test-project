/** @module reducer
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.29, 23:23
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TArticle, TArticleId } from '@/core/types';
import { TArticlesSearchResult, TSortMode, TArticlesState, TArticlesParams } from './types';
import { initialState, startPageNo } from './constants';
import { fetchArticlesThunk } from './thunks';

type ArticlesPayloadAction = PayloadAction<TArticlesSearchResult, string, unknown, Error>;

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSortMode: (state, action: PayloadAction<TSortMode>) => {
      state.sortMode = action.payload;
    },
    setPageNo: (state, action: PayloadAction<number>) => {
      state.pageNo = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    resetData: (state) => {
      state.error = undefined;
      state.ids = [];
      state.articles = [];
      state.articlesHash = {};
      state.pageNo = startPageNo; // ???
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        String(fetchArticlesThunk.pending),
        (state: TArticlesState, _action: ArticlesPayloadAction) => {
          state.isLoading = true;
          state.error = undefined;
        },
      )
      .addCase(
        String(fetchArticlesThunk.fulfilled),
        (state: TArticlesState, action: ArticlesPayloadAction) => {
          const { payload } = action;
          const { info, articles } = payload;
          /* // Info data sample (NOTE: Indices start with 1, not 0!):
           * status: 'ok',
           * userTier: 'developer',
           * total: 2402038,
           * startIndex: 1,
           * pageSize: 5,
           * currentPage: 1,
           * pages: 480408,
           * orderBy: 'newest'
           */
          const { startIndex } = info;
          const start = startIndex - 1; // NOTE: Indices start with 1, not 0!
          const newIds = [...state.ids];
          const newArticles = [...state.articles];
          const newArticlesHash = { ...state.articlesHash };
          for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            const { id } = article;
            newIds[start + i] = id;
            newArticles[start + i] = article;
            newArticlesHash[id] = article;
          }
          state.ids = newIds;
          state.articles = newArticles;
          state.articlesHash = newArticlesHash;
          state.isLoading = false;
          state.error = undefined;
          // state.error = new Error('Test error'); // DEBUG
        },
      )
      .addCase(
        String(fetchArticlesThunk.rejected),
        (state: TArticlesState, action: ArticlesPayloadAction) => {
          const { error, meta } = action;
          // eslint-disable-next-line no-console
          console.log('[features/articles/reducer:fetchArticlesThunk.rejected]', {
            error,
            meta,
          });
          debugger; // eslint-disable-line no-debugger
          state.error = error;
          state.isLoading = false;
        },
      );
  },
});

// See reducers creation in `src/app/app-reducer.ts`
export const selectLoading = (state: TArticlesState): TArticlesState['isLoading'] =>
  state.isLoading;
export const selectError = (state: TArticlesState): TArticlesState['error'] => state.error;
export const selectArticleIds = (state: TArticlesState): TArticleId[] => state.ids;
export const selectArticles = (state: TArticlesState): TArticle[] => state.articles;
export const selectArticlesHash = (state: TArticlesState): Record<TArticleId, TArticle> =>
  state.articlesHash;
export const selectArticleById = (state: TArticlesState, id: TArticleId): TArticle | undefined =>
  state.articlesHash[id];
export const selectParams = (state: TArticlesState): TArticlesParams => {
  // TODO: To memoize entire params object?
  const { query, sortMode, pageNo, pageSize } = state;
  return { query, sortMode, pageNo, pageSize };
};

export const { setQuery, setSortMode, setPageNo, setPageSize, resetData } = articlesSlice.actions;

export const articlesReducer = articlesSlice.reducer;
