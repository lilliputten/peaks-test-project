/** @module reducer
 *  @since 2023.01.28, 19:17
 *  @changed 2023.01.28, 20:29
 */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticles } from './service';
import { TArticleId, TArticle, TArticleSearchResult } from './types';

export interface ArticlesState {
  ids: TArticleId[];
  articles: Record<TArticleId, TArticle>;
  articlesList: TArticle[];
  isLoading: boolean;
  error: string | undefined;
}

const initialState: ArticlesState = {
  /* // TODO:
   * sortMode: TSortMode;
   * pageNo: number;
   * pageSize: number;
   */
  ids: [],
  articles: Object.create(null),
  articlesList: [],
  isLoading: false,
  error: undefined,
};

const articlesAdapter = {
  setAll(state: ArticlesState, articles: TArticle[]) {
    state.ids = [];
    state.articles = Object.create(null);
    state.articlesList = [];
    this.addMany(state, articles);
  },
  addMany(state: ArticlesState, articles: TArticle[]): void {
    articles.forEach((article) => {
      const { id } = article;
      state.articles[id] = article;
      state.articlesList.push(article);
      state.ids.push(id);
    });
  },
  addOne(state: ArticlesState, article: TArticle): void {
    this.addMany(state, [article]);
  },
};

const fetchArticlesThunk = createAsyncThunk(
  'articles/fetchArticlesThunk',
  async (): Promise<TArticleSearchResult> => {
    const params = {}; // TODO: Create params from sortMode, pageNo, pageSize
    return await fetchArticles(params);
  },
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    /* // TODO: setSortMode, setPageNo, setPageSize
     * setSortMode: (
     *   state,
     *   action: PayloadAction<{ label: keyof Sorter; value: SortArticleValue }>,
     * ) => {
     *   state.sorter[action.payload.label] = action.payload.value;
     * },
     */
  },
  extraReducers: {
    [fetchArticlesThunk.pending.toString()]: (state: ArticlesState) => {
      state.isLoading = true;
      state.error = undefined;
    },
    [fetchArticlesThunk.fulfilled.toString()]: (
      state: ArticlesState,
      action: PayloadAction<TArticleSearchResult>,
    ) => {
      state.isLoading = false;
      state.error = undefined;
      const { articles } = action.payload;
      // If received new articles...
      if (articles.length !== state.ids.length || articles.some((n) => !(n.id in state.articles))) {
        // ...Set all articles into state...
        articlesAdapter.setAll(state, articles);
      }
    },
    [fetchArticlesThunk.rejected.toString()]: (
      state: ArticlesState,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const selectIds = (state: ArticlesState): TArticleId[] => state.ids;
const selectLoading = (state: ArticlesState): boolean => {
  return state.isLoading;
};
const selectArticles = (state: ArticlesState): Record<TArticleId, TArticle> => state.articles;
const selectArticlesList = (state: ArticlesState): TArticle[] => state.articlesList;

export { selectIds, selectLoading, selectArticles, selectArticlesList, fetchArticlesThunk };

export default articlesSlice.reducer;
