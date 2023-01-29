/** @module reducer
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.29, 02:16
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  TArticle,
  TArticleSearchResult,
  TSortMode,
  TArticlesState,
  TArticlesParams,
} from './types';
import { initialState, startPageNo } from './constants';
import { fetchArticlesThunk } from './thunks';

type ArticlesPayloadAction = PayloadAction<TArticleSearchResult, string, unknown, Error>;

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
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
      state.articles = [];
      state.pageNo = startPageNo; // ???
    },
  },
  extraReducers: {
    [String(fetchArticlesThunk.pending)]: (state: TArticlesState) => {
      state.isLoading = true;
      state.error = undefined;
    },
    [fetchArticlesThunk.fulfilled.toString()]: (
      state: TArticlesState,
      action: ArticlesPayloadAction,
    ) => {
      state.isLoading = false;
      state.error = undefined;
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
      /* // DEBUG
       * console.log('[features/articles/reducer:fetchArticlesThunk.fulfilled]', {
       *   info,
       *   articles,
       *   // meta,
       * });
       */
      const newArticles = [...state.articles];
      for (let i = 0; i < articles.length; i++) {
        newArticles[start + i] = articles[i];
      }
      state.articles = newArticles;
    },
    [String(fetchArticlesThunk.rejected)]: (
      state: TArticlesState,
      action: ArticlesPayloadAction,
    ) => {
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
  },
});

const selectLoading = (state: TArticlesState): TArticlesState['isLoading'] => state.isLoading;
const selectError = (state: TArticlesState): TArticlesState['error'] => state.error;
const selectArticles = (state: TArticlesState): TArticle[] => state.articles;
const selectParams = (state: TArticlesState): TArticlesParams => {
  const { query, sortMode, pageNo, pageSize } = state;
  return { query, sortMode, pageNo, pageSize };
};

// See reducers creation in `src/app/app-reducer.ts`
export { selectLoading, selectError, selectArticles, selectParams };

export const { setSortMode, setPageNo, setPageSize, resetData } = articlesSlice.actions;

export const articlesReducer = articlesSlice.reducer;