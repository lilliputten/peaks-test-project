/** @module reducer
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.29, 00:44
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TArticle, TArticleSearchResult, TSortMode, ArticlesState } from './types';
import { defaultPageSize, defaultSortMode } from './constants';
import { fetchArticlesThunk } from './thunks';

const initialState: ArticlesState = {
  query: 'Gunther Millions',
  sortMode: defaultSortMode,
  pageNo: 1,
  pageSize: defaultPageSize,
  articles: [],
  isLoading: false,
  error: undefined,
};

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
  },
  extraReducers: {
    [String(fetchArticlesThunk.pending)]: (state: ArticlesState) => {
      state.isLoading = true;
      state.error = undefined;
    },
    [fetchArticlesThunk.fulfilled.toString()]: (
      state: ArticlesState,
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
      state: ArticlesState,
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

const selectLoading = (state: ArticlesState): ArticlesState['isLoading'] => state.isLoading;
const selectError = (state: ArticlesState): ArticlesState['error'] => state.error;
const selectArticles = (state: ArticlesState): TArticle[] => state.articles;

export { selectLoading, selectError, selectArticles };

export const articlesReducer = articlesSlice.reducer;
